import express from "express";
import { productRoutes } from "../modules/Product/product.route";
import { orderRoutes } from "../modules/Orders/orders.route";
const router = express.Router();

const moduleRoutes = [
    {
        path:"/product",
        route: productRoutes
    },
    {
        path: "/orders",
        route: orderRoutes
    }
]


moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router;
