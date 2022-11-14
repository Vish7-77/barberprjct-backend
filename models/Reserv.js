import mongoose from "mongoose";


const ResSchema = new mongoose.Schema(

    {
        alldays: [
            {
              monday: {timings: [   {
                  eight: { type: String },
                  ten: { type: String },
                  one: { type: String },
                  two: { type: String },
                  three: { type: String },
                  four: { type: String },
                   },   ] },
              tuesday: {timings: [   {
                  eight: { type: String },
                  ten: { type: String },
                  one: { type: String },
                  two: { type: String },
                  three: { type: String },
                  four: { type: String },
                   },   ] },
              wednesday: {timings: [   {
                  eight: { type: String },
                  ten: { type: String },
                  one: { type: String },
                  two: { type: String },
                  three: { type: String },
                  four: { type: String },
                   },   ] },
              thursday: {timings: [   {
                  eight: { type: String },
                  ten: { type: String },
                  one: { type: String },
                  two: { type: String },
                  three: { type: String },
                  four: { type: String },
                   },   ] },
              friday: {timings: [   {
                  eight: { type: String },
                  ten: { type: String },
                  one: { type: String },
                  two: { type: String },
                  three: { type: String },
                  four: { type: String },
                   },   ] },
             
            
            },
          ]
    
    }


)



export default mongoose.model("Res", ResSchema);