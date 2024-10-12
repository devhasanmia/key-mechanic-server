export const AppError = (statusCode: number, message: string) => {
  const error = new Error(message) as any;
  error.status = statusCode;
  error.isOperational = true;
  return error;
};
