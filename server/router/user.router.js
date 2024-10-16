import express from "express";
import { createData, getData, getDataById,deleteUser ,updateUser } from "../controller/user.controller.js";

const router = express.Router()

router.get('/getdata', getData)
router.post('/createdata', createData)
router.get('/getById/:userId', getDataById)
router.delete('/deleteUser/:userId', deleteUser)
router.put('/updateUser/:userId', updateUser)

export default router