import mongoose from "mongoose";


const ResSchema = new mongoose.Schema(

 {
    time:{
        type:String,
        
    }
 }

)



export default mongoose.model("Res", ResSchema);