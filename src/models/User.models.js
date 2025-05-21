import mongoose from "mongoose"
const userSchema = new mongoose.Schema(
    {
        UserName: {type:String, required: true, unique:true},
        Email: {type:String, requied: true, unique:true, lowercase: true},
        Password: {type: String, required: true},
        createdAt: { type: Date, default: Date.now }
    }
)
export const User = mongoose.model("User",userSchema)