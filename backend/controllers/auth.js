import User from '../models/User.js'
import mongoose from 'mongoose'
import path from 'path'
import ErrorResponse from '../utils/errorResponse.js'
import asyncHandler from '../middleware/asyncHandler.js'
import advancedfilter from '../middleware/advancedfilter.js'
import crypto from 'crypto'






//@desc  register user
//@route  POST/api/v1/auth/register
//@access Public

const register = asyncHandler(async(req,res,next)=>{
    const {firstName,lastName,email,role,password,school} = req.body;
    const user = await User.create({
        firstName,
        lastName,
        email,
        role,
        password,
        school
    })
    sentTokenResponse(user,200,res)
})

//@desc  login user
//@route  POST/api/v1/auth/register
//@access Public

const login = asyncHandler(async(req,res,next)=>{
    const {email,password} = req.body;
    console.log("req.body",req.body)
    //validate email and password
    if(!email||!password){
        return next(new ErrorResponse("Please provide an email and password",400))
    }

    //check for user
    const user = await User.findOne({email:email}).select('+password')
    console.log("logging user",user)
    if(!user){
        return next(new ErrorResponse("Invalid credintials",404))
    }
    const isMatch = await user.matchPassword(password)
  if(!isMatch){
    return next(new ErrorResponse("Invalid credintials",404))
  }
 sentTokenResponse(user,200,res)
})
//@desc  get looged in  user
//@route  POST/api/v1/auth/me
//@access Private


const getLoggedInUser =asyncHandler(async(req,res,next)=>{
    const user = await User.findById(req.user.id).select('-password');
    res.status(200).json({success:true,data:user})
})
const sentTokenResponse =  (user,statusCode,res)=>{
    const token = user.getSignedJwtToken()
    const options = {
        expires:new Date(Date.now() +process.env.JWT_COOKIE_EXP*24*60*60*5000),
        httpOnly:true
    }
    if(process.env.NODE_ENV =="production"){
        options.secure=true
    }
    res.status(statusCode).cookie('token',token,options).json({success:true,token,user})
}
//@desc  forgot password
//@route  POST/api/v1/auth/forgotpassword
//@access Public


const forgotPassword =asyncHandler(async(req,res,next)=>{
    const user = await User.findOne({email:req.body.email});
    if(!user){
        return next(new ErrorResponse(`No user with the email ${req.body.email} founded`))
    }
    // get reset token 
    const resetToken = user.setUserToken()
    await user.save({validateBeforeSave:false})
    //create reset url 
    const resteUrl = `${req.protocol}://${req.get('host')}/api/v1/auth/resetPassword/${resetToken}`
    const message = `You are receiving this email because you (or someone else) has requested the reset password .Please click to this link:\n\n ${resteUrl}
    \n\n this link will be invalid after 10 min`;
    try {
        await sendEmail({
            email:user.email,
            subject:'Reset password',
            message:message
        })
        res.status(200).json({success:true,data:`Message has been sent to ${user.email}`})
    } catch (error) {
        console.log(error)
        user.resetPasswordToken= undefined;
        user.resetPasswordExpire=undefined;
        await user.save({validateBeforeSave:false})
        return next(new ErrorResponse('Email could not be sent',500))
    }
    
  
})
//@desc  reset password
//@route  PUT/api/v1/auth/resetPassword/:resettoken
//@access Public
const resetPassword =asyncHandler(async(req,res,next)=>{
  //get hashed token
const restPasswordtoken = await crypto.createHash('sha256').update(req.params.resetToken).digest('hex')
const user = await User.findOne({
    resetPasswordToken:restPasswordtoken,
    resetPasswordExpire:{$gte:Date.now()}
})
console.log("user from reset password",user,req.params.resetToken)
if(!user){
    return next(new ErrorResponse('Invalid token',400))
}
//set new password
user.password = req.body.password;
user.resetPasswordToken= undefined;
user.resetPasswordExpire=undefined;
await user.save()
sentTokenResponse(user,200,res)

})

//@desc  update user details but not password
//@route  PUT/api/v1/auth/updateuser
//@access Private
const updateUser =asyncHandler(async(req,res,next)=>{
    const {firstName,lastName,email} = req.body;
   const filedsToBeUpdated = {
       firstName,
       lastName,email
   }
    const user = await User.findByIdAndUpdate(req.user.id,filedsToBeUpdated,{
        new:true,
        runValidators:true,
    });
   
    res.status(200).json({success:true,data:user})
})
//@desc  update user  password
//@route  PUT/api/v1/auth/updatepassword
//@access Private
const updatePassword =asyncHandler(async(req,res,next)=>{
    const user = await User.findById(req.user.id).select('+password');
    //check current password
    if(!user.matchPassword(req.body.currentPassword)){
         return next(new ErrorResponse("Password is incorrect",401  ))
    }
    user.password = req.body.currentPassword;
    await user.save();
    sentTokenResponse(user,200,res)
   
})
const deleteUser = asyncHandler(async(req,res,next)=>{
    const user = await User.findById(req.user.id);
    if(!user){
        return next(new ErrorResponse("No user  founded",400  ))
   }
  await user.findByIdAndRemove(user._id)
  res.status(202).json({msg:'User deleted'})
})

//@desc  log out user
//@route  GET/api/v1/auth/logout
//@access Private


const logout =asyncHandler(async(req,res,next)=>{
  res.cookie('token','none',{
      expires:new Date(Date.now()+10*100),
      httpOnly:true
  })
    res.status(200).json({success:true,data:{}})
})


export {
    register,
    login,
    logout,
    deleteUser,
    updatePassword,
    updateUser,
    getLoggedInUser,
    resetPassword,
    forgotPassword
}