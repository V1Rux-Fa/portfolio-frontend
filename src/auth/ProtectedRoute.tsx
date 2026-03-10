import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./authContext";

const ProtectedRoute = ({ children }: any) => {
  const auth = useContext(AuthContext);

  if (!auth?.user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
