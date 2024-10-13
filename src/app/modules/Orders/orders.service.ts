import mongoose from "mongoose";
import Product from "../Product/product.model";
import { IOrders } from "./orders.interface";
import Order from "./orders.model";
import { AppError } from "../../errors/AppError";


const createOrder = async (payload: IOrders) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    let totalPrice = 0;
    for (const item of payload.products) {
      const productId = item.products;
      const orderedQuantity = item.quantity;
      const databaseProduct = await Product.findById(productId).session(session);
      if (!databaseProduct || databaseProduct.stock < orderedQuantity) {
        throw AppError(400, "Insufficient Quantity");
      }
      await Product.findByIdAndUpdate(
        productId,
        { $inc: { stock: -orderedQuantity } },
        { session }
      );
      totalPrice += databaseProduct.price * orderedQuantity;
    }
    payload.totalPrice = totalPrice;
    const result = await Order.create([payload], { session });
    await session.commitTransaction();
    session.endSession();
    return result;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};


const getAllOrders = async () => {
    const orders = await Order.find();
    return orders
}


export const OrderServices = {
  createOrder,
  getAllOrders
};
