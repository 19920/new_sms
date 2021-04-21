import mongoose from 'mongoose'
const {ObjectId} = mongoose.Schema.Types
//const geocoder = require('../utils/geocoder')
const ClassSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please add Scool name"],
        unique:[true,"There is already another school with same database"],
        trim:true,
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
    section:{
        type:String
    },
    numberOfStudents:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }


})

const ClassModel = mongoose.model("ClassModel",ClassSchema)
export default ClassModel