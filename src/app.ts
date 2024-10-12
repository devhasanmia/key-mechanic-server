// Import necessary modules
import express, { Application, Request, Response } from "express";
import cors from "cors";
import { notFound } from "./app/middlewares/notFound";
import { ContactControllers } from "./app/modules/ContactUs/contact.controller";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
const app: Application = express();

// Middleware
app.use(express.json());
app.use(cors());

// Health Route
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Health is ok",
    version: "1.0.0",
  });
});


app.post("/contact", ContactControllers.sendMessage);
app.get("/contact", ContactControllers.getAllMessage);

app.use(notFound);
app.use(globalErrorHandler)

export default app;
