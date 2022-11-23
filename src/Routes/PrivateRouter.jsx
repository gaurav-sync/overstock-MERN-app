import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { isAuth } = useSelector(state=>state);

  if (!isAuth) {
    return <Navigate to="/signup" />;
  }

  return children;
}

export default PrivateRoute;
