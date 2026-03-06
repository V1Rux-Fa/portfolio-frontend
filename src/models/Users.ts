export interface LoginResponse {
  token: string;
  user: {
    id: number;
    email: string;
    name: string;
  };
}

export interface LoginRequest {
  email: string;
  password: string;
}
