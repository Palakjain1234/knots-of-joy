import connectDB from "./database/index.js";
import connection from "./database/index.js";
import dotenv from "dotenv";

//.config() method loads the variables from your .env file and adds them to process.env
dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`);
    })

    app.on("errror",(error) => {
        console.log("ERROR: ",error);
        throw error;
    })
})
.catch((err) => {
    console.log("MONGODB connection failed !!",err);
})