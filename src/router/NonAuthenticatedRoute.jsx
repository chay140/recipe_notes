import { Navigate, Outlet } from 'react-router-dom';
import { useUserStore } from '../zustand/userStore';

const NonAuthenticatedRoute = () => {
  const { isAuthenticated } = useUserStore();

  return !isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default NonAuthenticatedRoute;
