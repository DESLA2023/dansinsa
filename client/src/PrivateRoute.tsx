import React from "react";
import { useAuth } from "./hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }: { children: JSX.Element }) {
   const { isLogin } = useAuth();
   return isLogin ? children : <Navigate to={"/login"} />;
}
