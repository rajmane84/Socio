// Add correct type over here
export type LoginResponse = {
  user: {
    id: number;
    username: string;
    email: string;
  };
  token: string;
}