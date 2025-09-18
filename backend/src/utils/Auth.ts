import bcrypt from "bcryptjs";
import { ApiError } from "./ApiError";

export async function checkPassword(
  password: string,
  hashPassword: string,
): Promise<boolean> {
  if (!password || !hashPassword) {
    throw new ApiError(400, "All fields are required");
  }

  return await bcrypt.compare(password, hashPassword);
}
