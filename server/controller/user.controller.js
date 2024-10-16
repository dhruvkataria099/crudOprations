import { userModel } from "../models/user.model.js"


export const createData = async (req, res) => {
    try {
 
        const ress = await userModel.create( req.body )
        res.send({ ress })

    } catch (error) {
        console.log(error.message)
    }
}

export const getData = async (req, res) => {
    try {
        const data = await userModel.find()
        res.send(data)
    } catch (error) {
        console.log(error.message)        
    }
} 

export const getDataById = async (req, res) => {
    try {

        const {userId} = req.params

        const data = await userModel.find({_id : userId})
        res.send(data)
    } catch (error) {
        console.log(error.message)        
    }
}

export const deleteUser = async (req, res) => {
    try {

        const {userId} = req.params

        const data = await userModel.findByIdAndDelete({_id : userId})
        res.send(data)
    } catch (error) {
        console.log(error.message)        
    }
} 

export const updateUser = async (req, res) => {
    try {

        const {userId} = req.params

        const data = await userModel.findByIdAndUpdate({_id : userId},req.body,{new : true})
        res.send(data)
    } catch (error) {
        console.log(error.message)        
    }
} 


