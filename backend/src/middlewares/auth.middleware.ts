import jwt, { JwtPayload } from "jsonwebtoken";
import { asyncHandler } from "../utils/AsyncHandler";
import { ApiError } from "../utils/ApiError";
import { NextFunction, Request, Response } from "express";
import { prisma } from "../db";
import { ApiResponse } from "../utils/ApiResponse";

interface authUser {
  id: string;
  email: string;
  username: string;
  avatar: string;
}

export const validateUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("🔐 validating user...");
      const accessToken: string =
        req.cookies?.accessToken ||
        req.header("Authorization")?.replace("Bearer ", ""); //This is not neccesary since we're just storing tokens in cookies and not in localstorage

      if (!accessToken) {
        return next(new ApiError(401, "unauthorized request"));
      }

      const decodedToken = jwt.verify(
        accessToken,
        process.env.ACCESS_TOKEN_SECRET!,
      );

      if (!decodedToken) {
        return next(new ApiError(401, "unauthorized request"));
      }

      const { id, email } = decodedToken as JwtPayload;

      const user: authUser | null = await prisma.user.findUnique({
        where: {
          id,
          email,
        },
        select: {
          id: true,
          email: true,
          username: true,
          avatar: true,
        },
      });

      if (!user) {
        return next(new ApiError(401, "Invalid access token"));
      }

      req.user = user;
      console.log("✅ user validated");
      next();
    } catch (err: any) {
      return next(new ApiError(401, err?.message || "Invalid access token"));
    }
  },
);