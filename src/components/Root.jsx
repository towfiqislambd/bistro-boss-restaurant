import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Root = () => {
    const location = useLocation();
    const disableNavbarAndFooter = location.pathname.includes('login') || location.pathname.includes('register')
    return (
        <div>
            {disableNavbarAndFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {disableNavbarAndFooter || <Footer></Footer>}
        </div>
    )
}

export default Root;