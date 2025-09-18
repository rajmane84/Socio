import { v2 as cloudinary } from "cloudinary";
import { UploadApiResponse } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath: string) => {
  if (!localFilePath) return null;
  try {
    const fileMetaData = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("file public id: ", fileMetaData.public_id);

    fs.unlinkSync(localFilePath);
    return fileMetaData.url;
    // return fileMetaData; // practically only url is required in frontend
  } catch (err) {
    fs.unlinkSync(localFilePath); // remove the locally saved file as the upload operation has failed
    console.log(err);
    return null;
  }
};

const deleteFromCloudinary = async (
  url: string,
  resourceType = "image",
): Promise<void | null> => {
  if (!url) {
    return null;
  }

  const resourcePublicId = url?.split("/")?.pop()?.split(".")[0];

  if (!resourcePublicId) return null;

  const response = await cloudinary.uploader.destroy(resourcePublicId, {
    resource_type: resourceType,
  });

  console.log("response : ", response);

  console.log("42, deleteFromCloudinaryResponse", response);
};

export { uploadOnCloudinary, deleteFromCloudinary };
