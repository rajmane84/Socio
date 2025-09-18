import { NextFunction, Request, Response } from "express";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/AsyncHandler";

export const healthCheck = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    return res
      .status(200)
      .json(
        new ApiResponse(200, { status: "UP" }, "Server is running smoothly!")
      );
  }
);
