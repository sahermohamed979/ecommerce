export interface User {
  id: string;
  name: string;
  role: string;
  email?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  userInfo: User | null;
  isLoading: boolean;
}

export interface AuthActions {
  login: (userInfo: User) => void;
  logout: () => Promise<void>;
}

export type AuthStore = AuthState & AuthActions;
