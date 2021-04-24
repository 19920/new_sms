import RoleModel from "../models/Role.js"
import asyncHandler from '../middleware/asyncHandler.js'
//@desc get all Schools
//@route GET api/Schools
//@desc Public
const getAllRoles=asyncHandler(async(req,res)=>{
    const pageSize=10
    const page = Number(req.query.pageNumber)||1
    const keyword = req.query.keyword?{
        name:{
            $regex:req.query.keyword,
            $options:'i'
        }
    }:{}
    
    let roles  = await RoleModel.find({...keyword}).sort({createdAt:-1}).limit(pageSize).skip(pageSize*(page-1));
    const count = roles.length
    res.status(200).json({count,page,pages:Math.ceil(count/pageSize),roles})
    
 })
const createRole=asyncHandler(async(req,res)=>{
    try {
     const {
         name,
     } = req.body
     const createdRole = new RoleModel({
         name:name,
         addedBy:req.user.id
     })
     let findName = await RoleModel.find({name:name})
     if(findName.length>0){
         
        return res.status(400).json({error:'There is another role with same name'})
       
     }
     const newcreatedRole= await createdRole.save()
     res.status(201).json(newcreatedRole)
    } catch (error) {
        console.log("error",error)
        res.status(400)
        throw new Error('Role not created')
    }
  })
   //@desc Update single School
 //@route PUT api/Schools
 //@desc Private/Admin
 const updateRole=asyncHandler(async(req,res)=>{
     let Role = await RoleModel.findById(req.params.id)
     const {
         name,
     } = req.body
     if(Role){
         Role.name = name
         const updatedRole = await Role.save()
         res.status(200).json(updatedRole)
     }else{
  
         res.status(404)
         throw new Error('Role not found')
     }
 })
 export {
    createRole,
    updateRole,
    getAllRoles
    
}