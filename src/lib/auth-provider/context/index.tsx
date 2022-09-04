import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { tokenPersistance } from "../persistance";

const [setTokenPersistance, getTokenPersistance, removeTokenPersistance] = tokenPersistance();

interface AuthContextType {
  token: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

const AuthContext = React.createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = React.useState<any>(getTokenPersistance());

  const AuthProvider = {
    isAuthenticated: false,
    signin(callback: VoidFunction) {
      AuthProvider.isAuthenticated = true;
      setTimeout(callback, 100);
    },
    signout(callback: VoidFunction) {
      AuthProvider.isAuthenticated = false;
      setTimeout(callback, 100);
    },
  };


  const signin = (newToken: string, callback: VoidFunction) => {
    return AuthProvider.signin(() => {
      setToken(newToken);
      setTokenPersistance(newToken);
      callback();
    });
  };

  const signout = (callback: VoidFunction) => {
    return AuthProvider.signout(() => {
      setToken(null);
      removeTokenPersistance();
      callback();
    });
  };

  const value = { token, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}


export function useAuth() {
  return React.useContext(AuthContext);
}

export function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}