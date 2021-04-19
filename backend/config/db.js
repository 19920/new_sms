import mongoose from 'mongoose'

const connectDb = async()=>{
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            useCreateIndex:true
        })
        console.log(`momgodb is connected:${connection.connection.host}`)
    } catch (error) {
        console.log(`${error.message}`)
        process.exit(1)
    }
}
export default connectDb