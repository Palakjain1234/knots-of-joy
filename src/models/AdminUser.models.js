import mongoose from "mongoose"
const adminSchema = mongoose.Schema(
    {
        name:{type:String, required: true},
        email:{type:String,required: true, lowercase:true}
    }
);
export const Admin = mongoose.model("Admin",adminSchema)