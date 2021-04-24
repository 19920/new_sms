import asyncHandler from '../middleware/asyncHandler.js'
import Staff from '../models/Staff.js';
import School from '../models/School.js';
import User from '../models/User.js';


//@desc get all Schools
//@route GET api/Schools
//@desc Public
const getAllSchoolStaff=asyncHandler(async(req,res)=>{
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
    
    let newstaffs  = await Staff.find({...keyword}).sort({createdAt:-1}).limit(pageSize).skip(pageSize*(page-1));
    const staffs = newstaffs.filter(s=>s.school == user.school)
    const count = staffs.length
    res.status(200).json({count,page,pages:Math.ceil(count/pageSize),staffs})
    
 })
  //@desc Create single School
//@route POST api/Schools
//@desc Private/Admin
const createStaff=asyncHandler(async(req,res)=>{
    try {
      let user  = await User.findById(req.user.id)
      req.body.school = user.school,
      req.body.addedBy = user._id
     const createdStaff = new Staff(req.body)
     const newStaffcreated = await createdStaff.save()
     res.status(201).json(newStaffcreated)
    } catch (error) {
        console.log("error",error)
        res.status(400)
        throw new Error('Staff not created')
    }
  })

 export {
    getAllSchoolStaff,
    createStaff
    
}