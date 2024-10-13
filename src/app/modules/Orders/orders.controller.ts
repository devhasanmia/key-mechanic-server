import { RequestHandler } from "express";
import { OrderServices } from "./orders.service";

const createOrders: RequestHandler = async (req, res, next) => {
  try {
    const orders = await OrderServices.createOrder(req.body);
    res.status(201).json({
      success: true,
      message: "Order successfully!",
      data: orders,
    });
  } catch (error) {
    next(error);
  }
};

const getAllOrders: RequestHandler = async(req, res, next) => {
  try {
    const orders = await OrderServices.getAllOrders();
    res.status(200).json({
      success: true,
      message: "All Product retrive successfully!",
      data: orders,
    })
  } catch (error) {
    next(error)
  }
}


export const OrderControllers = {
  createOrders,
  getAllOrders
};
