import express from "express";
import { productRoutes } from "../modules/Product/product.route";
import { orderRoutes } from "../modules/Orders/orders.route";
import { contactRoutes } from "../modules/ContactUs/contact.route";
const router = express.Router();

const moduleRoutes = [
    {
        path:"/product",
        route: productRoutes
    },
    {
        path: "/orders",
        route: orderRoutes
    },
    {
        path: "/contact",
        route: contactRoutes
    }
]


moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router;
