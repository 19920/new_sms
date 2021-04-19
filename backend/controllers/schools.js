import asyncHandler from '../middleware/asyncHandler.js'
import School from '../models/School.js';
import User from '../models/User.js';

//@desc get all Schools
//@route GET api/Schools
//@desc Public
const getAllSchools=asyncHandler(async(req,res)=>{
    const user = await User.findById(req.user.id)
    const pageSize=10
    const page = Number(req.query.pageNumber)||1
    const keyword = req.query.keyword?{
        name:{
            $regex:req.query.keyword,
            $options:'i'
        }
    }:{}
    if(user.role !=="SuperUser"){
    let Schools = await School.find({_id:user.school});
    res.status(200).json({Schools})
    }else{
        const count = await School.countDocuments({...keyword})
        let Schools = await School.find({...keyword}).sort({createdAt:-1}).limit(pageSize).skip(pageSize*(page-1));
        res.status(200).json({count,page,pages:Math.ceil(count/pageSize),Schools})
    }
    
 })
//@desc get single School
//@route GET api/Schools/:id
//@desc Public


 const getSchool=asyncHandler(async(req,res)=>{
    let School = await School.findById(req.params.id)
    if(School){
        res.status(200).json(School)
    }else{
 
        res.status(404)
        throw new Error('School not found')
    }
 })
//@desc delete single School
//@route DELETE api/Schools/:id
//@desc Private/Admin
const adminDeleteSchool=asyncHandler(async(req,res)=>{
    let School = await School.findById(req.params.id)
    if(School){
        await School.remove()
        res.json({msg:'School deleted'})
    }else{
 
        res.status(404)
        throw new Error('School not found')
    }
 })
 //@desc Create single School
//@route POST api/Schools
//@desc Private/Admin
const createSchool=asyncHandler(async(req,res)=>{
   try {
    const {
        name,
        type,
        description,
        schoolPhoto,
        registrationNumber,
        phonenumber,
        ownerPhoneNumber,
        email,
        address,
        numberOfemployees
    } = req.body
    const createdSchool = new School({
        name:name,
        type:type,
        description:description,
        schoolPhoto:schoolPhoto,
        registrationNumber:registrationNumber,
        phonenumber:phonenumber,
        email:email,
        numberOfemployees:numberOfemployees,
        ownerPhoneNumber:ownerPhoneNumber,
        address:address,
        user:req.user._id
    })
    const newSchoolcreated = await createdSchool.save()
    res.status(201).json(newSchoolcreated)
   } catch (error) {
       console.log("error",error)
       res.status(400)
       throw new Error('School not created')
   }
 })
  //@desc Update single School
//@route PUT api/Schools
//@desc Private/Admin
const updateSchool=asyncHandler(async(req,res)=>{
    let School = await School.findById(req.params.id)
    const {
        name,
        price,
        description,
        image,
        brand,
        category,
        countInStock
    } = req.body
    if(School){
        School.name = name
        School.price = price
        School.description = description
        School.image = image
        School.brand = brand
        School.category = category
        School.countInStock = countInStock
        const updatedSchool = await School.save()
        res.status(200).json(updatedSchool)
    }else{
 
        res.status(404)
        throw new Error('School not found')
    }
})

  //@desc add review  to  single School
//@route PUT api/Schools/:id/reviews
//@desc Private
const addReviewToSchool=asyncHandler(async(req,res)=>{
    let School = await School.findById(req.params.id)
    const {
        rating,comment
    } = req.body
    if(School){
        const hasUserAlreadyView = School.reviews.find(r=>r.user.toString() ===req.user._id.toString())
        if(hasUserAlreadyView){
            res.status(400)
            throw new Error('You have already reviewed this School')
        }
        const review = {
            name:req.user.firstName+' ' +req.user.lastName,
            rating:Number(rating),
            comment,
            user:req.user._id
        }
        School.reviews.push(review)
        School.numReviews = School.reviews.length
        School.rating = School.reviews.reduce((acc,item)=>item.rating+acc,0)/School.reviews.length
        await School.save()
        res.status(200).json({msg:'Review Added'})
    }else{
 
        res.status(404)
        throw new Error('School not found')
    }
})
 //@desc Get top reated  Schools
//@route GET api/Schools/top-Schools
//@desc Public
const getTopSchools=asyncHandler(async(req,res)=>{
    const Schools = await School.find({}).sort({rating:-1}).limit(4)
    res.json(Schools)
  })
  const removeSchool=asyncHandler(async(req,res,next)=>{
    console.log("req.params.id",req.params.id)
    const school = await School.findById(req.params.id)
    if(!school){
        return next(new ErrorResponse(`school not found with id of  ${req.params.id}`,400));
    }
    school.remove()
    res.status(201).json({success:true,data:{}})
    
})
 export {
     getAllSchools,
     getSchool,
     adminDeleteSchool,
     updateSchool,
     createSchool,
     addReviewToSchool,
     getTopSchools,
     removeSchool
 }