import mongoose from "mongoose"
const addressSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        street: {type: String, required: true},
        city: {type: String, required: true},
        state: {type: String, required: true},
        postalCode: {type:String, required: true},
        country: {type:String},
        phone: {
            type: String, 
            match:[/^\d{10}$/, 'Phone number must be exactly 10 digits'], 
            required:true
        },
        receiver: {
            type: String,
            default: null  // We will assign this manually in code
        },
    }
);
export const Address = mongoose.model("Address",addressSchema)