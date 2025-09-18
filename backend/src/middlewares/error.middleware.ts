import { NextFunction, Response, Request } from "express";

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log("error stack", err.stack);
  console.log("error", err);

  return res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || "Internal server error",
    errors: err.errors || [],
  });
};

export default errorHandler;
