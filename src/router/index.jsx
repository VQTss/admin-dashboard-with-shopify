
import { Routes, Route, Navigate } from 'react-router-dom';
import { useStore } from '../store';
import Login from '../pages/Login';
import DashboardRoutes from './DashboardRoutes';

const AppRouter = () => {
  const [auth] = useStore.auth();

  return (
    <Routes>
      {auth.isAuthenticated ? (
        <>
          <Route path="/dashboard/*" element={<DashboardRoutes />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </>
      )}
    </Routes>
  );
};

export default AppRouter;
