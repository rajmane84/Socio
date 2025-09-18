import { ZodError } from "zod";
import nodemailer from "nodemailer";

export const fileSize: number = 1024 * 1024 * 5;

export const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  maxAge: 10 * 24 * 60 * 60 * 1000, // 10 days in milliseconds
};

export const defaultAvatarPath: string =
  "/public/images/avatars/no-image-avatar.webp";

export const parseErrors = (error: ZodError) => {
  return Object.entries(error.flatten().fieldErrors).flatMap(
    //@ts-ignore
    ([key, messages]) => messages.map((message) => `${key}: ${message}`)
  );
};

export const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE, // e.g., 'gmail'
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});