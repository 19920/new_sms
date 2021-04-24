import mongoose from 'mongoose'
const {ObjectId} = mongoose.Schema.Types
//const geocoder = require('../utils/geocoder')
const RoleSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please add role name"],
        unique:[true,'There is another role with same name '],
        maxlength:[150,"Name can not be more than 150 characters"]
    },
    addedBy:{
        type:ObjectId,
        ref:'User',
        required:true
    },
})
const RoleModel = mongoose.model("RoleModel",RoleSchema)
export default RoleModel