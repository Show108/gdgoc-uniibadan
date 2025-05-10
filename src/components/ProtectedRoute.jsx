import { Navigate, Outlet } from 'react-router-dom';
import useSession from '../context/useSession';
import Loader from './Loader';

const ProtectedRoute = () => {
  const { user, loading } = useSession();

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return <Navigate to='/login' replace />;
  }

  if (!user.email_confirmed_at) {
    return <Navigate to='/login' replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
