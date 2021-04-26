import mongoose from 'mongoose'
const {ObjectId} = mongoose.Schema.Types
//const geocoder = require('../utils/geocoder')
const StaffSchema = new mongoose.Schema({
  firstname:{
      type:String,
      required:[true,'The firstname is required']
  },
  lastname:{
    type:String,
    required:[true,'The lastname is required']
},
phone:{
    type:String,
    required:[true,'The phone is required']
},
nationalId:{
    type:String,
    required:[true,'The  national ID or Passport number  is required']
},
email:{
    type:String,
    match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ,
    "Please add a valid email"]
},
gender:{
    type:String,
    enum:['Male','Female','Other'],
    default:'Male'
},
birthday:{
    type:Date
},
address:{
    type:String
},
joiningDate:{
    type:Date,
    default:Date.now()
},
role:{
    type:String,
    enum:['Teacher','Admin','Economist'],
    default:'Teacher'
},
description:{
    type:String
},
salary:{
    type:String
},
designation:{
    type:String
},
classes:{
    type:[String]
},
sections:{
    type:[String]
},
courses:{
    type:[String]
},
status:{
    type:String,
    enum:['Active','Inactive'],
    default:'Active'

},
school:{
    type:ObjectId,
    ref:'School',
    required:true
},
addedBy:{
    type:ObjectId,
    ref:'User',
    required:true
},
isbussInCharge:{
    type:Boolean,
    default:false
}
})
const Staff = mongoose.model("Staff",StaffSchema)
export default Staff