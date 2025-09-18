import { NextFunction, Request, Response } from "express";

const asyncHandler =
  (fn: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      fn(req, res, next);
    } catch (err: any) {
      console.error("Error handled by async handler", err);
      res.status(err.code || 500).json({
        success: false,
        message: err.message,
      });
    }
  };

export { asyncHandler };
