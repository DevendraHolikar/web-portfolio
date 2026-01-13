import { Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

const PublicRoute = ({ children }) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    return <Navigate to="/profile" replace />;
  }

  return children;
};

export default PublicRoute;
