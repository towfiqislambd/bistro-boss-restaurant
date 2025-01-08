import { Navigate, useLocation } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import loaderGif from "../assets/others/loader3.gif"

const PrivateRoutes = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useAuth();
    if (user) {
        return children
    }
    if (loading) {
        return <div className="h-screen flex items-center justify-center"><img src={loaderGif} alt="" /></div>
    }

    return (
        <div>
            <Navigate state={location?.pathname} to='/login'></Navigate>
        </div>
    )
}

export default PrivateRoutes;