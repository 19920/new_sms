import asyncHandler from '../middleware/asyncHandler.js'
import ClassModel from '../models/Class.js';
import School from '../models/School.js';
import SectionModel from '../models/Section.js';
import SubjectModel from '../models/Subject.js';
import User from '../models/User.js';
import ErrorResponse from '../utils/errorResponse.js';

//@desc get all Schools
//@route GET api/Schools
//@desc Public
const getAllSchools=asyncHandler(async(req,res)=>{
    const user = await User.findById(req.user.id)
    //console.log("user in getting schools",user)
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
        status,
        email,
        numberOfSections,
        numberOfStudents,
        numberOfemployees,
        numberOfClasses,
        registrationNumber,
        registrationdate,
        schoolPhoto,
        admissionBaseNumber,
        admissionBasePadding,
        admissionPrefix,
        phonenumber,
        enrollmentBaseNumber,
        enrollmentPrefix,
        address,
        ownerEmail,
        ownerPhoneNumber
    } = req.body
    const createdSchool = new School({
        name:name,
        type:type,
        description:description,
        status:status,
        numberOfSections:numberOfSections,
        numberOfStudents:numberOfStudents,
        numberOfemployees:numberOfemployees,
        numberOfClasses:numberOfClasses,
        registrationNumber:registrationNumber,
        registrationdate:registrationdate,
        schoolPhoto:schoolPhoto,
        admissionBaseNumber:admissionBaseNumber,
        admissionBasePadding:admissionBasePadding,
        admissionPrefix:admissionPrefix,
        phonenumber:phonenumber,
        ownerPhoneNumber:phonenumber,
        enrollmentBaseNumber:enrollmentBaseNumber,
        enrollmentPrefix:enrollmentPrefix,
        address:address,
        email:email,
        ownerEmail:ownerEmail,
        
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
const assignUserToSchool = asyncHandler(async(req,res,next)=>{
    const school = await School.findById(req.params.id)
    const {firstName,lastName,email,role,password} = req.body;
    if(!school){
        return next(new ErrorResponse(`school not found with id of  ${req.params.id}`,400));
    }
    const user = await User.create({
        firstName,
        lastName,
        email,
        role,
        password,
        school:school._id,
        createdBy:req.user.id
    })
    sentTokenResponse(user,200,res)
})
const addClassToSchool=asyncHandler(async(req,res,next)=>{
    const school = await School.findById(req.user.school)
    const {name,description,section,numberOfStudents} = req.body;
    if(!school){
        return next(new ErrorResponse(`school not found with id of  ${req.params.id}`,400));
    }
    const classdata = await ClassModel.create({
        name,
        description,
        school:school._id,
        section:section,
        numberOfStudents:numberOfStudents,
        addedBy:req.user.id
    })
    res.status(201).json(classdata)
    
})
const addSectionToSchool=asyncHandler(async(req,res,next)=>{
    const school = await School.findById(req.user.school)
    const {name,description,} = req.body;
    if(!school){
        return next(new ErrorResponse(`school not found with id of  ${req.params.id}`,400));
    }
    const sectiondata = await SectionModel.create({
        name,
        description,
        school:school._id,
        addedBy:req.user.id
    })
    res.status(201).json(sectiondata)
    
})
const addSubjectSchool=asyncHandler(async(req,res,next)=>{
    console.log("addSubjectSchool",req.body)
    const school = await School.findById(req.user.school)
    if(!school){
        return next(new ErrorResponse(`school not found with id of  ${req.params.id}`,400));
    }
    if(!req.body.name){
        return res.status(400).json({message:"Name is required"})
    }
    req.body.school = school._id;
    req.body.addedBy = req.user.id;
    const subjectdata = await SubjectModel.create(req.body)
    res.status(201).json(subjectdata)
    
})
const sentTokenResponse =  (newUser,statusCode,res)=>{
    const options = {
        expires:new Date(Date.now() +process.env.JWT_COOKIE_EXP*24*60*60*5000),
        httpOnly:true
    }
    if(process.env.NODE_ENV =="production"){
        options.secure=true
    }
    const user={
        firstName:newUser.firstName,
        lastName:newUser.lastName,
        role:newUser.role,
        createdAt:newUser.createdAt,
        password:newUser.password,
        school:newUser.school,
        
    }
    res.status(statusCode).json({success:true,user})
}
const getallSchoolUsers = asyncHandler(async(req,res,next)=>{
    const school = await School.findById(req.params.id)
    const pageSize=10
    const page = Number(req.query.pageNumber)||1
    if(!school){
        return next(new ErrorResponse(`school not found with id of  ${req.params.id}`,400));
    }
    const users = await User.find({school:school._id}).sort({createdAt:-1}).limit(pageSize).skip(pageSize*(page-1))
    const count = users.length
    res.status(200).json({count,page,pages:Math.ceil(count/pageSize),users})
})
const getallSchoolTeachers = asyncHandler(async(req,res,next)=>{
    const school = await School.findById(req.params.id)
    const pageSize=10
    const page = Number(req.query.pageNumber)||1
    if(!school){
        return next(new ErrorResponse(`school not found with id of  ${req.params.id}`,400));
    }
    const users = await User.find({$and:[{school:school._id},{role:'Teacher'}]}).sort({createdAt:-1}).limit(pageSize).skip(pageSize*(page-1))
    const count = users.length
    res.status(200).json({count,page,pages:Math.ceil(count/pageSize),users})
})
const getallSchoolClasses = asyncHandler(async(req,res,next)=>{
    const school = await School.findById(req.params.id)
    const pageSize=10
    const page = Number(req.query.pageNumber)||1
    if(!school){
        return next(new ErrorResponse(`school not found with id of  ${req.user.school}`,400));
    }
    const classes = await ClassModel.find({school:school._id}).sort({createdAt:-1}).limit(pageSize).skip(pageSize*(page-1))
    const count = await ClassModel.countDocuments()
    res.status(200).json({count,page,pages:Math.ceil(count/pageSize),classes})

})
const getallSchoolSections = asyncHandler(async(req,res,next)=>{
    const school = await School.findById(req.params.id)
    const pageSize=10
    const page = Number(req.query.pageNumber)||1
    if(!school){
        return next(new ErrorResponse(`school not found with id of  ${req.user.school}`,400));
    }
    const sections = await SectionModel.find({school:school._id}).sort({createdAt:-1}).limit(pageSize).skip(pageSize*(page-1))
    const count = await SectionModel.countDocuments()
    res.status(200).json({count,page,pages:Math.ceil(count/pageSize),sections})

})

const getallSchoolSubjects = asyncHandler(async(req,res,next)=>{
    const school = await School.findById(req.params.id)
    const pageSize=10
    const page = Number(req.query.pageNumber)||1
    if(!school){
        return next(new ErrorResponse(`school not found with id of  ${req.user.school}`,400));
    }
    const subjects = await SubjectModel.find({school:school._id}).sort({createdAt:-1}).limit(pageSize).skip(pageSize*(page-1))
    const count = await SubjectModel.countDocuments()
    res.status(200).json({count,page,pages:Math.ceil(count/pageSize),subjects})

})
 export {
     getAllSchools,
     getSchool,
     adminDeleteSchool,
     updateSchool,
     createSchool,
     addReviewToSchool,
     getTopSchools,
     removeSchool,
     assignUserToSchool,
     getallSchoolUsers,
     addClassToSchool,
     addSectionToSchool,
     addSubjectSchool,
     getallSchoolClasses,
     getallSchoolSections,
     getallSchoolSubjects,
     getallSchoolTeachers

 }