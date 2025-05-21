import mongoose from "mongoose"
const orderSchema = new mongoose.Schema(
    {
        userId: {type:mongoose.Schema.Types.ObjectId, ref:User, required: true},
        product:[
            {
                productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Products', required: true },
                quantity: { type: Number, required: true },
                price: { type: Number, required: true }
            }
        ],
        total: {type:Number,required:true},
        shippingPrice: {type: Number, required:true},
        grandTotal: {type:String, required: true},
        shippingAddressId: { type: mongoose.Schema.Types.ObjectId, ref: 'Address', required: true },
        orderDate: { type: Date, default: Date.now },
        status: {
            type: String,
            enum: ['pending', 'shipped', 'delivered'],
            default: 'pending'
        }
    }
)