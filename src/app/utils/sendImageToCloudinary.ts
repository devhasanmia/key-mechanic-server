import { v2 as cloudinary } from "cloudinary";
import multer from "multer";

export const sendImageToCloudinary = async () => {
  // Configuration
  cloudinary.config({
    cloud_name: "ddoacwzvp",
    api_key: "419125535281198",
    api_secret: "axbmHawHvhN9xqvI5bfDvBQXOb8",
  });

  const uploadResult = await cloudinary.uploader
    .upload(
      "https://images.pexels.com/photos/27515446/pexels-photo-27515446/free-photo-of-a-woman-in-a-white-dress-holding-a-bouquet.jpeg",
      {
        public_id: "shoes",
      }
    )
    .catch((error) => {
      console.log(error);
    });

//   console.log(uploadResult);
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, process.cwd() + "/uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

export const upload = multer({ storage: storage });
