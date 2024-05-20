import { Navigate, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";
function AuthChecker({ children }) {
  const location = useLocation();
  const { isLogged } = useContext(AppContext);
  //   if (loading) {
  //     return <Loader></Loader>;
  //   }
  // Check authentication status
  if (!isLogged) {
    // Redirect to login page if not authenticated
    return <Navigate to="/auth/signin" state={{ from: location }} replace />;
  }

  // Render children if authenticated
  return children;
}

export default AuthChecker;
