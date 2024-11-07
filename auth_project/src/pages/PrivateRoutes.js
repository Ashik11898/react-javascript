import { useAuth } from '../context/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
  const authUser = useAuth();
  console.log("check is authuser: ",authUser);
  
  return authUser ? children : <Navigate to="/" />;
};

export default PrivateRoutes;
