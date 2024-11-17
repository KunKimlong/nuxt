import { model, Schema } from "mongoose";

const userSchema = new Schema({
    id:{
        type:Number
    },
    name:{
        type:String
    },
    email:{
        type:String
    }
})

export const User = model<any>("user",userSchema);
export default defineEventHandler(async(event)=>{
    const users = await User.find();
    
    return {
        users
    }
})
