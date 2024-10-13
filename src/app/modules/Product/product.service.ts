import mongoose from "mongoose";
import { IProduct } from "./product.interface";
import Product from "./product.model";
import { AppError } from "../../errors/AppError";

const addProduct = async (payload: IProduct) => {
  const data = await Product.create(payload);
  return data;
};
const getAllProduct = async () => {
  const data = await Product.find();
  if (data.length === 0) {
    throw AppError(404, "Product Not Found")
  }
  return data;
};

const getProductById = async (id: any) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw AppError(403, "Invalid product ID");
  }
  const data = await Product.findById(id);
  if (!data) {
    throw AppError(404, "Product Not Found");
  }
  return data;
};

const updateProductById = async (id: string, payload: IProduct) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw AppError(403, "Invalid product ID");
  }
  const product = await Product.findByIdAndUpdate(id, payload, { new: true });
  if (!product) {
    throw AppError(404, "Product not found");
  }
  return product;
};

const deleteProduct = async (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw AppError(403, "Invalid product ID");
  }
  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    throw AppError(404, "Product not found");
  }

  return product;
};
export const ProductServices = {
  addProduct,
  getAllProduct,
  getProductById,
  updateProductById,
  deleteProduct
};
