import { Navigate } from 'react-router-dom';

const PrivateAdminRoute = ({ children }) => {
  // Ambil data user dari localStorage atau state management
  const user = JSON.parse(localStorage.getItem('user'));

  // Cek apakah user login dan memiliki role admin
  if (!user || user.role !== 'admin') {
    // Redirect ke login jika bukan admin
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateAdminRoute;
