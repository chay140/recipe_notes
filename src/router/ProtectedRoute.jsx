import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    // TODO 임시 사용자 로그인
    let isAuthenticated = false;

    return isAuthenticated ? <Outlet /> : <Navigate to='/login' replace />
}

export default ProtectedRoute
