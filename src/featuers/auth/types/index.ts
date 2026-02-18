export interface User {
  id: string;
  email: string;
  name: string;
  role?: "user" | "admin";
  avatar?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  userInfo: User | null;
  isLoading: boolean;
}

export interface AuthActions {
  initializeAuth: () => Promise<void>;
  login: (userInfo: User) => void;
  logout: () => Promise<void>;
}

export type AuthStore = AuthState & AuthActions;

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user?: User;
  token?: string;
}

export interface VerifyTokenResponse {
  isAuthenticated: boolean;
  userInfo: User | null;
}
