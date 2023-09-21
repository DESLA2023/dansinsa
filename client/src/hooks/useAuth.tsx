import React from "react";

export const useAuth = () => {
   const [isLogin, setIsLogin] = React.useState(false);

   const login = () => {
      setIsLogin(true);
      window.location.href = "/";
   };

   const logout = () => {
      setIsLogin(false);
   };

   return {
      isLogin,
      login,
      logout,
   };
};
