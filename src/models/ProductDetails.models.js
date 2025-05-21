import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
    {
        ProductId:{type: String, required: true, unique: true},
        ProductName:{type:String, required: true},
        ProductPrice:{type:Number, required:true},
        color:{type:String, required:true},
        ProductPictureURL:{
            type: [String], // array of Cloudinary URLs
            validate: [arrayLimit, 'Exactly 3 images are required'],
        },
        Description:{type:String, required: true},
        ProductCaption:{type:String},
        Stock:{type:Number}
    }
);
export const Products = mongoose.model('Products', productSchema);