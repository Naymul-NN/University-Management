import mongoose from "mongoose";
import { TErrorSource } from "../interface/error";

const handleValidationError = (err: mongoose.Error.ValidationError)=>{

    const  errorSourse : TErrorSource = Object.values(err.errors).map((val : mongoose.Error.ValidatorError | mongoose.Error.CastError)=>{
    return{
        path: val?.path,
        message:val?.message
    }
    }
    )
    const statusCode = 400;
    return{
        statusCode,
        message: ' validaton error',
        errorSourse
    
    }
}


export default handleValidationError;