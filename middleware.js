import  Jwt  from "jsonwebtoken";
import User from "./models/User.js";
// import ErrorHander from "./Errorhander.js"

const isAuth=async(req,res,next)=>{
    const{token} =req.cookie;

    if(token){
        return res.json({
            message:' please login',
  statuscode:401
            
        })
       

    }
next();
}

export default isAuth