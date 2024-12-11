import { Navigate, Outlet } from "react-router-dom";
import { useUserStore } from "../zustand/userStore";

const ProtectedRoute = () => {
    const { isAuthenticated } = useUserStore();

    return isAuthenticated ? <Outlet /> : <Navigate to='/login' replace />
}

export default ProtectedRoute
