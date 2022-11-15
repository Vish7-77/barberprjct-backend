import express from "express";
import {resMain,getRes} from "../controllers/resv.js"
const router = express.Router();


router.post('/reservation',resMain)
router.get('/reservation',getRes)


export default router;  