import {Nitro} from "nitropack";
import mongoose from "mongoose"

export default async(_nitroApp:Nitro)=>{
    const config = useRuntimeConfig();
    try{
        await mongoose.connect(config.mongo_full_uri)
        console.log("sucess");
        
    }catch(e){
        console.log(e);
    }
    
}