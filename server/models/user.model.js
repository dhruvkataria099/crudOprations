import { model, Schema } from "mongoose";

const userSchema =  Schema({
    name: String
})

export const userModel = model('user', userSchema)