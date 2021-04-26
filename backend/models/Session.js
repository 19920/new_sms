import mongoose from 'mongoose'
const {ObjectId} = mongoose.Schema.Types
//const geocoder = require('../utils/geocoder')
const SessionSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please add Session interval"],
        unique:[true,'There is another Session with same interval '],
        maxlength:[150,"Name can not be more than 150 characters"]
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
    }
})
const SessionModel = mongoose.model("SessionModel",SessionSchema)
export default SessionModel