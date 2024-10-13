import { Schema } from "mongoose";

export type UserDetails = {
  name: string;
  email: string;
  phoneNumber: string;
};

export type ProductOrderInfo = {
  products: Schema.Types.ObjectId;
  quantity: number;
};

export type IOrders = {
  products: ProductOrderInfo[];
  totalPrice: number;
  paymentMethod: "Cash on Delivery" | "Bkash" | "Nagad" | "Rocket" | "Stripe"; // Payment methods
  userDetails: UserDetails;
};
