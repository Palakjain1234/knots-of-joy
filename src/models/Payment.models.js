import mongoose from "mongoose"
const paymentSchema = new mongoose.Schema(
    {
        orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
        paymentMethod: { type: String, enum: ['card', 'UPI'], required: true },
        paymentStatus: { type: String, enum: ['success', 'failed', 'pending'], default: 'pending' },
        paymentDate: { type: Date, default: Date.now },
        transactionId: { type: String }
    }
)