import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config({
    cloud_name: process.env.COUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.COUDINARY_API_SECRET
})

const uploadOnCloudinary = async (localFilePath) => {
    try{
        if(!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type :"auto"
        })
        //file has been uploaded sucessfully
        console.log("file is  uploaded on cloudinary ",response.url);
        return response;
    }
    catch(error){
        // removes the locally saved temporary file as the upload operation got failed
        fs.unlinkSync(localFilePath)
        return null;
    }
}
export {uploadOnCloudinary}