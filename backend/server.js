
import express from 'express'
import dotenv from 'dotenv'
import connectDB from "./config/db.js"
import usersRoutes from './routes/users.js'
import schoolsRoutes from './routes/schools.js'
import path from 'path';
import {errorHandler} from './middleware/error.js'
import cors from 'cors'

dotenv.config()
connectDB()
const app = express();
app.use(express.json())
app.use(cors())

app.use('/api/users',usersRoutes);
app.use('/api/schools',schoolsRoutes);
const __dirname= path.resolve()
if(process.env.NODE_ENV ==='production'){
    app.use(express.static(path.join(__dirname,'/frontend/build')))
    app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,'frontend','build','index.html')))
}else{
    app.get('/',(req,res)=>{
        res.send(("Api is running ..."));
    })
}
app.use(errorHandler)

const PORT = process.env.PORT ||13000
app.listen(PORT,()=>  console.log(`App listening on port ${PORT} in ${process.env.NODE_ENV}`))