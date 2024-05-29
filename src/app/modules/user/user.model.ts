
import { Schema, model } from "mongoose";
import { Tuser } from "./user.interface";
import config from "../../config";
import bcrypt from 'bcrypt'

const userSchema = new Schema<Tuser>({
    id : {
        type : String,
        required: true,
    },
    password: {
        type : String,
        required: true,
    },
    needsPsswordChange : {
        type : Boolean,
        default: true,
    },
    role: {
        type : String,
        enum:['student', 'facalty', 'admin' ]
    },
    status:{
        type: String,
        enum: ['in-progress', 'blocked'],
        default: 'in-progress'
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },

},
{
    timestamps:true
});

//  pre save middleware/hook : will work on create() save()
userSchema.pre ('save',async function(next){
    // hashing password and save into db 
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this
   user.password =await bcrypt.hash(user.password,Number(config.bcrypt_salt_rounds))

next()
})

// post save middleware / hook
userSchema.post('save', function(doc,next){
    doc.password = ''
    next();
})

export const User = model<Tuser>('user', userSchema);