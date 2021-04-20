import mongoose from 'mongoose'
const {ObjectId} = mongoose.Schema.Types
//const geocoder = require('../utils/geocoder')
const SchoolSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please add Scool name"],
        unique:[true,"There is already another school with same database"],
        trim:true,
        maxlength:[150,"Name can not be more than 150 characters"]
    },
    
    type:{
        type:String,
        default:'secondary'
    },
    description:{
        type:String,
        maxlength:[500,"Name can not be more than 150 characters"]
    },
    registrationNumber:{
        type:String,
        unique:[true,"There is already a saloon with same registration number"],
    },
    phonenumber:{
        type:String,
        required:[true,"The saloon number is required"]
       
    },
    email:{
        type:String,
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ,
        "Please add a valid email"],
    },
    ownerPhoneNumber:{
        type:String,
        required:[true,"Phone number of owner is required"]
    },
    user:{
        type:ObjectId,
        ref:'User',
        required:true
    },
    ownerEmail:{
        type:String,
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ,
        "Please add a valid email"]
    },
    schoolPhoto:{
       type:String,
       
    },
    numberOfemployees:{
        type:Number,
        required:[true,"Number of employees is required"]
    },
    numberOfStudents:{
        type:Number,
        required:[true,"Number of students is required"]

    },
    numberOfSections:{
        type:Number,
       

    },
    category:{
        type:String,
        enum:["Public","Private"],
        default:"Private"
    },
    numberOfClasses:{
        type:Number,
       

    },
    admissionBaseNumber:{
        type:String,
        
    },
    enrollmentPrefix:{
        type:String
    },
    enrollmentBaseNumber:{
        type:String,
        
    },
    admissionPrefix:{
        type:String
    },
    admissionBasePadding:{
        type:String,
        
    },
    status:{
        type:String,
        enum:["Active","Inactive"],
        default:"Active"
        
    },
    address:{
        type:String,
        required:[true,"Please add Saloon address"]
    },
    // location:{
    //     type: {
    //         type: String,
    //         enum: ['Point'],
    //         required: false
    //       },
    //       coordinates: {
    //         type: [Number],
    //         required: false,
    //         index:'2dsphere'
    //       },
    //       formatedAddress:String,
    //       street:String,
    //       city:String,
    //       state:String,
    //       zipcode:String,
    //       country:String,
    // },
    createdAt:{
        type:Date,
        default:Date.now()
    }



},{
    toJSON:{virtuals:true},
    toObject:{virtuals:true},
});
// SchoolSchema.pre("save",function(next){
//     this.slug = slugfy(this.ownerIdNumber+ ' '+this.name,{lower:true})
//     next()
// })
//geocoder for location
// SchoolSchema.pre("save",async function(next){
//     const loc= await geocoder.geocode(this.address)
//     console.log("location",loc)
//     this.location={
//         type:'Point',
//         coordinates:[loc[0].longitude,loc[0].latitude],
//         formatedAddress:loc[0].formattedAddress,
//         street:loc[0].streetName,
//         city:loc[0].city,
//         state:loc[0].state,
//         zipcode:loc[0].zipcode,
//         country:loc[0].country
//     }
//     //do not save address
//     //this.address = undefined
//     next()
// })
//cascade delete courses when a restaurant is deleted
SchoolSchema.pre('remove',async function(next){
//     console.log("menu removed from restaurant",this._id)
//   await this.model('RestaurantMenu').deleteMany({
//       restaurant:this._id
//   });
//   await this.model('Entertainment').deleteMany({
//       restaurant:this._id
//   })
  await this.model('User').deleteMany({
    school:this._id
})
  next()
})

// reverse populate with virtuals
// SchoolSchema.virtual('restaurantmenu',{
//     ref:'RestaurantMenu',
//     localField:'_id',
//     foreignField:'restaurant',
//     justOne:false
// })

const School = mongoose.model("School",SchoolSchema)
export default School