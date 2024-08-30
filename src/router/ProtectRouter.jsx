import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";

function ProtectRouter({ children }) {
  // user
  const { user } = useContext(AuthContext);
  console.log(user);

  //   if user is authenticated then redirect to the dashboard page
  if (user) {
    return children;
  }

  // if user is not authenticated then redirect to the login page
  return <Navigate to={"/signin"}></Navigate>;
}

export default ProtectRouter;
