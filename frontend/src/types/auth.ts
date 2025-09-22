// Add correct type over here
export type LoginResponse = {
  user: {
    id: string;
    username: string;
    email: string;
  };
  token: string;
}

export type SignUpResponse = {
    id: string;
    name: string;
    username: string;
    email: string;
}