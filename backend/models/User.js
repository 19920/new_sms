import mongoose from 'mongoose'
import bcrypt from 'bcryptjs';
import crypto from 'crypto'
import jwt from 'jsonwebtoken';
const {ObjectId} = mongoose.Schema.Types
const UserSchema = new mongoose.Schema({
   firstName:{
       type:String,
       required:[true,'Please add name']
   },
   lastName:{
    type:String,
    required:[true,'Please add name']
},
   email:{
    type:String,
    required:[true,"Please add email"],
    unique:[true,'Please someone with same email is already registered'],
    match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ,
    "Please add a valid email"]
},
school:{
    type:String,
    
},

role:{
    type:String,
    enum:['SuperUser','Admin','Economist','Teacher','Parent','Student','Librarian','Transporter'],
    default:'Student'
},

password:{
    type:String,
    required:[true,'Please add password'],
    minlength:[6,'Password should have more than 6 characters'],
    selecct:false
    
},
resetPasswordToken:String,
resetPasswordExpire:Date,
createdAt:{
    type:Date,
    default:Date.now()
},
createdBy:String
})
//encrypt password
UserSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next()
    }

   const salt = await bcrypt.genSalt(10);
   this.password = await bcrypt.hash(this.password,salt);
   next()
})
//sign in jwt and return
UserSchema.methods.getSignedJwtToken=function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_COOKIE_EXP
    })
}
//match user password entered and the one in database
UserSchema.methods.matchPassword = async function(enteredPassword){
  return await bcrypt.compare(enteredPassword,this.password)
}
// generate reset token

UserSchema.methods.setUserToken= function(){
    //generate token
    const resetToken =  crypto.randomBytes(20).toString('hex')
    // hash token and set to restPasswordToken
    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    this.resetPasswordExpire = Date.now()+10*60*1000;
    return resetToken

}

const User = mongoose.model("User",UserSchema)
export default User

