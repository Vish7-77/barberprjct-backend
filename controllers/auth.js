import User from "../models/User.js"
import bcrypt from "bcryptjs"
import { createError } from "../utils/error.js"; 
import jwt from "jsonwebtoken";
//REGISTRATION
export const register = async (req,res,next) =>{
    try{
        const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);


  
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hash,
        });

        await newUser.save()
        res.status(200).json({
            sucesss:true,
            message:'working'
        })
    }catch(err){
        next(err)
    }
};

//LOGIN
export const login = async (req,res,next) =>{
    const user = await User.findOne({
		email: req.body.email,
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				username: user.username,
				email: user.email,
			},
			'secret123'
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
    // try{
    //     const user = await User.findOne({ username: req.body.username });
    //     if(!user) return next(createError(404, "User not found"));
      
    //     const isPasswordCorrect = await bcrypt.compare(
    //         req.body.password, 
    //         user.password
    //         );

    //     if(!isPasswordCorrect) 
    //     return next(createError(400, "Wrong password or username"));
        
    //     const token = jwt.sign({id:user._id, isAdmin: user.isAdmin}, process.env.JWT)
        
    //     //not to show password
    //     const{password, isAdmin, ...otherDetails } = user._doc;    

    //     //doesent allow anybody to access the cookie
    //     res.cookie("access_token", token, {
    //         httpOnly:true
    //     }).status(200).json({...otherDetails});
    // }catch(err){
    //     next(err)
    // }
};