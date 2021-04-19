import jwt from 'jsonwebtoken';
import asycnHandler from './asyncHandler.js'
import User from '../models/User.js'
import ErrorResponse from '../utils/errorResponse.js'
//protet route

const protect = asycnHandler(async(req,res,next)=>{
    let token ;
   // console.log("req.headers",req.headers)
    if(req.headers.authorization&&req.headers.authorization.startsWith('Bearer')){
        //set token from Bearer token in headers
        token = req.headers.authorization.split(' ')[1]

    }
    //else if(req.coookies){
    //     //set token from cookies
    //    token = req.coookies.token
    // }
   
    if(!token){
        return next(new ErrorResponse("Not authorize to perform this action",401))
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        //console.log('decoded',decoded)
        req.user = await User.findById(decoded.id)
        next()
    } catch (error) {
        return next(new ErrorResponse("Not authorize to perform this action",401))
    }

})

//grant access to specific user

const authorize = (...roles)=>{
   return(req,res,next)=>{
       if(!roles.includes(req.user.role)){
        return next(new ErrorResponse(`User role ${req.user.role} is not authorized to perform this action`,403))
       }
       next()
   }
 
}
export {
    authorize,
    protect
}