import mongoose from "mongoose";
import { DB_NAME } from "../Constants.js";

const connectDB = async () => {
    try {
        //It actually returns an object which has some data related to connection
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB Host: ${connectionInstance.connection.host}`);        
    }
    catch(error){
        console.log("MONGODB Connection FAILED",error);
        process.exit(1)
    }
}
export default connectDB