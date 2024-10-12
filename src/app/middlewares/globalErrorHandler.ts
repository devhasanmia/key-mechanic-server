import { ErrorRequestHandler } from "express";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let status = err.status || 500;
  let message = err.message || "Internal Server Error";
  
  res.status(status).json({
    success: false,
    message,
  });
};

export default globalErrorHandler;
