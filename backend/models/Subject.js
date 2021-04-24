import mongoose from 'mongoose'
const {ObjectId} = mongoose.Schema.Types
//const geocoder = require('../utils/geocoder')
const SubjectSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please add Subject name"],
        maxlength:[150,"Name can not be more than 150 characters"]
    },
    code:{
        type:String,
    },
    type:{
        type:String,
    },
    classes:{
        type:[String],
    },
    teachers:{
        type:[String],
    },
    
    description:{
        type:String,
        maxlength:[500,"Description can not be more than 150 characters"]
    },
    addedBy:{
        type:ObjectId,
        ref:'User',
        required:true
    },
    school:{
        type:ObjectId,
        ref:'School',
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }


})

const SubjectModel = mongoose.model("SubjectModel",SubjectSchema)
export default SubjectModel