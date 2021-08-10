

export interface User {
  username: string;
  email: string;
  password;
}

export interface AuthResponse {
  user: UserResponse;
  jwt: string;
}

export interface UserResponse {
  blocked: boolean;
  confirmed: boolean;
  createdAt: string;
  email: string;
  id: string;
  provider: string;
  role: UserRole;
  updatedAt: string;
  __v: number;
  _id: string;
}

export interface UserRole {
  description: string;
  id: string;
  name: string;
  type: string;
  __v: number;
  _id: string;
  updatedAt: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  identifier: string;
  password: string;
}

