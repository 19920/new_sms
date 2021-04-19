
import ErrorResponse  from '../utils/errorResponse.js'
const errorHandler=(err,req,res,next)=>{
   
    let error={...err}
    error.message = err.message
   console.log("error name",err)
   //mongoose bad objectId
    if(err.name === "CastError"){
        const message = `Ressource not found`
        error = new ErrorResponse(message,404)
    }
     //mongoose duplicate key
     if(err.code === 11000){
         const message = `Duplicate fields, ${Object.keys(err.keyValue)}:${err.keyValue[Object.keys(err.keyValue)[0]]} is already registered`
        error = new ErrorResponse(message,400)
     }
     //mongoose validation error
     if(err.name === "ValidationError"){
         const message = Object.values(err.errors).map(val=>val.message);
         error = new ErrorResponse(message,404)
     }
    res.status(error.statusCode||500).json({
        succes:false,
        error:error.message||"Server error"
    });

}

export {
    errorHandler
} 