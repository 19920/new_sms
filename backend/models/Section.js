import mongoose from 'mongoose'
const {ObjectId} = mongoose.Schema.Types
//const geocoder = require('../utils/geocoder')
const SectionSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please add section name"],
        maxlength:[150,"Name can not be more than 150 characters"]
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

const SectionModel = mongoose.model("SectionModel",SectionSchema)
export default SectionModel