import { RequestHandler } from "express";
import { ProductServices } from "./product.service";

const addProduct: RequestHandler = async (req, res, next) => {
  try {
    const data = await ProductServices.addProduct(req.body);
    res.status(201).json({
      success: true,
      message: "Product added successfully!",
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

const getAllProducts: RequestHandler = async (req, res, next) => {
    try {
        const data = await ProductServices.getAllProduct();
        res.status(201).json({
            success: true,
            message: "All Product retrieved successfully!",
            data: data,
          });
    } catch (error) {
        next(error);
    }
}

export const ProductControllers = {
    addProduct,
    getAllProducts
}
