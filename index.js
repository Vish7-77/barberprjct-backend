// const express = require('express')
// const app = express()
// const cors = require('cors')
// const mongoose = require('mongoose')
// // const User = require('./models/user.model')
// const jwt = require('jsonwebtoken')
// const user = require('./models/User')
// const bcrypt = require('bcryptjs')
import User from "./models/User.js"
import express from "express"
import dotenv from "dotenv"
import  bodyParser from "body-parser"
import cors from "cors"
import cookieParser from "cookie-parser"
const app =express();
import mongoose from "mongoose"

import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

import { ok } from "assert"
import { nextTick } from "process"
import Res from "./models/Reserv.js"
import reserv from "./models/Reserv.js"

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
// const app = express();
dotenv.config();

const connect = async () =>{

try {
    await mongoose.connect(process.env.MONGO,{useNewUrlParser: true,useUnifiedTopology: true
    });
    console.log("connect to mongoBD")
  } catch (error) {
    throw error;
  }
};


//This is to show message if or if not its connected to mnogodb
mongoose.connection.on("disconnected", ()=>{
    console.log("mnogoDB disconnected!")
})

//middlewares
app.use(cookieParser());
app.use(express.json());



//importing the routes

import user from "./routes/auth.js";
import reservation from "./routes/reservation.js"




//using the routes
app.use('/api/v1',reservation)
app.use("/api/v1",user)





//logout route
// app.get('/api/logout',async(req,res)=>{
//   res.cookie("token", null, {
//     expires: new Date(Date.now()),
//     httpOnly: true,
//   });

//   res.status(200).json({
//     success: true,
//     message: "Logged Out",
//   });
// })

// app.post('/api/reserv',async(req,res)=>{
// try {
// 	const Reservation=await Res.create(req.body)
// 	console.log(Reservation)
//   res.status(200).json({
// 	success:true,
// 	Reservation
//   })

// } catch (error) {
// 	console.log(error)
// }

// })

// app.get('/api/reserv',async(req,res)=>{
	
// res.status(200).json({
// 	successs:true,
// 	Reservation

// })

// })


//register
// app.post('/api/register', async (req, res) => {
	
// 	try {
// 		const newPassword = await bcrypt.hash(req.body.password, 10)
// 		await User.create({
// 			name: req.body.name,
// 			email: req.body.email,
// 			password: newPassword,
// 		})
   
// 		res.json({ status: 'ok' })
//     console.log(req.body)
// 	} 
//   catch (err) {
//   console.log(err)
// 		res.json({ status: 'error', error: err })
// 	}
// })


//login
// app.post('/api/login', async (req, res) => {
// 	const user = await User.findOne({
// 		email: req.body.email,
// 	})

// 	if (!user) {
// 		return { status: 'error', error: 'Invalid login' }
// 	}

// 	const isPasswordValid = await bcrypt.compare(
// 		req.body.password,
// 		user.password
// 	)

// 	if (isPasswordValid) {
// 		const token = jwt.sign(
// 			{
// 				name: user.name,
// 				email: user.email,
// 			},
// 			'secret123'
// 		)

// 		return res.json({ status: 'ok', user: token })
// 	} else {
// 		return res.json({ status: 'error', user: false })
// 	}
// })




// app.use("/api/auth", authRoute);
// app.use("/api/users", authRoute);
// app.use("/api/reservation", authRoute);



app.listen(8800, () =>{
    connect()
    console.log("connected to backend!!@@@@!.")
})