import User from "../models/User.js"
import bcrypt from "bcryptjs" 
import jwt from "jsonwebtoken";



const register=async(req,res,next)=>{

    try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
		await User.create({
			name: req.body.name,
			email: req.body.email,
			password: newPassword,
		})
   
		res.json({ status: 'ok' })
    console.log(req.body)
	} 
  catch (err) {
  console.log(err)
		res.json({ status: 'error', error: err })
	}
}






const login=async(req,res,next)=>{
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
				name: user.name,
				email: user.email,
			},
			'secret123'
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
}




const logout=async(req,res,next)=>{
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
      });
    
      res.status(200).json({
        success: true,
        message: "Logged Out",
      });
}


export {login , logout ,register}