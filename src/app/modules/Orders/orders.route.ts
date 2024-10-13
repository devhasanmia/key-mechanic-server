import express from "express";
import { OrderControllers } from "./orders.controller";
const router = express.Router();

router.post("/", OrderControllers.createOrders);
router.get("/", OrderControllers.getAllOrders)

export const orderRoutes = router