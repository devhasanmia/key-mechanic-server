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
};

const getProdutById: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await ProductServices.getProductById(id);
    res.status(200).json({
      success: true,
      message: "Product retrieved successfully!",
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

const updateProductById: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await ProductServices.updateProductById(id, req.body);
    res.status(202).json({
      success: true,
      message: "Product Update successfully!",
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

const deleteProduct: RequestHandler = async (req, res, next) => {
  const {id} = req.params;
  await ProductServices.deleteProduct(id);
  res.status(202).json({
    success: true,
    message: "Delete successfully!",
  });
}

export const ProductControllers = {
  addProduct,
  getAllProducts,
  getProdutById,
  updateProductById,
  deleteProduct
};
