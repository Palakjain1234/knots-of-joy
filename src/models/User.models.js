import mongoose from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const userSchema = new mongoose.Schema(
    {
        userName: {type:String, required: true, unique:true, trim: true, index:true},
        email: {type:String, requied: true, unique:true, lowercase: true, trim:true},
        fullName: {type:String, required: true, trim:true, index:true},
        password: {type: String, required: [true,"Password is required"]},
        refreshToken:{type:String},
        createdAt: { type: Date, default: Date.now }
    },
    {
        timestamps:true
    }
)
userSchema.pre("save", async function (next){
    if(!this.isModified("password")) return next()
    this.password = bcrypt.hash(this.password,10)
    next()
})

userSchema.methods.isPasswordCorrect=async function (password){
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            userName: this.userName,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFERESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFERESH_TOKEN_EXPIRY
        }
    )
}
export const User = mongoose.model("User",userSchema)