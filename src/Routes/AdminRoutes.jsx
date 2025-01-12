import useAuth from "../hooks/useAuth"
import useAdmin from "../hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";
import loaderGif from "../assets/others/loader2.gif";

const AdminRoutes = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useAuth()
    const [isAdmin, isPending, isLoading, isFetching] = useAdmin()
    if (loading || isPending || isLoading || isFetching) {
        return <div className="h-screen flex items-center justify-center"><img src={loaderGif} alt="" /></div>
    }
    if (user && isAdmin) {
        return children
    }
    return (
        <div>
            <Navigate state={location?.pathname} to='/login'></Navigate>
        </div>
    )
}

export default AdminRoutes;