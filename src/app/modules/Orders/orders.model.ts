import mongoose, { Schema } from "mongoose";
import { IOrders, ProductOrderInfo, UserDetails } from "./orders.interface";

// User Details Schema
const userDetailsSchema = new Schema<UserDetails>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

// Product Order Info Schema
const productOrderInfoSchema = new Schema<ProductOrderInfo>({
  products: {
    type: mongoose.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

// Order Schema
const OrderSchema: Schema = new Schema<IOrders>(
  {
    products: {
      type: [productOrderInfoSchema],
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
      enum: ["Cash on Delivery", "Bkash", "Nagad", "Rocket", "Stripe"],
    },
    totalPrice: {
      type: Number,
      default: 0,
    },
    userDetails: {
      type: userDetailsSchema,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model<IOrders>("Order", OrderSchema);
export default Order;
