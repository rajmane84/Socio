import axios from "axios";
import type { LoginResponse } from "../types/auth";

export async function handleUserLogin({
  username,
  password,
}: {
  username: string;
  password: string;
}): Promise<LoginResponse | undefined> {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/auth/login`,
      { username, password },
      { withCredentials: true },
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Handle Axios specific errors (e.g., bad response status)
      console.error("Login failed:", error.response?.data || error.message);
    } else {
      // Handle other errors
      console.error("An unexpected error occurred:", error);
    }
    return undefined;
  }
}