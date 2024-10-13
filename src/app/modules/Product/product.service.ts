import { IProduct } from "./product.interface";
import Product from "./product.model";

const addProduct = async (payload: IProduct) => {
    const data = await Product.create(payload);
    return data
}
const getAllProduct = async () => {
    const data = await Product.find();
    return data
}

const getProductById = async (id: any) => {
    const data = await Product.findById(id);
    return data
}
export const ProductServices = {
    addProduct,
    getAllProduct,
    getProductById
}