import express, { NextFunction, Request, Response } from "express";
import { ProductControllers } from "./product.controller";
import { upload } from "../../utils/sendImageToCloudinary";
const router = express.Router();

router.post(
  "/",
  upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next()
  },
  ProductControllers.addProduct
);
router.get("/", ProductControllers.getAllProducts);
router.get("/:id", ProductControllers.getProdutById);
router.put("/:id", ProductControllers.updateProductById);
router.delete("/:id", ProductControllers.deleteProduct);

export const productRoutes = router;
