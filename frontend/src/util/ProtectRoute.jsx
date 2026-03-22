import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = () =>{
    const token = localStorage.getItem('authtoken');

    if(!token) return <Navigate to={'/'} replace />

    return <Outlet/>
}

export default ProtectRoute;