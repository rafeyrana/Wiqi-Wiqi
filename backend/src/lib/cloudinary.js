import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();

// setting up the cloudinary api
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadToCloudinary = async (file) => {
    try {
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
        resource_type: 'auto',
        folder: 'wiqi-wiqi',
    });
    return result.secure_url;
} catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw new Error('Error uploading to Cloudinary', error);
}
};


export default cloudinary;