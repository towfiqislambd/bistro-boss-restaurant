import { FaBars } from "react-icons/fa6";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { IoCartSharp } from "react-icons/io5";
import useCart from "../hooks/useCart";

const Navbar = () => {
    const navigate = useNavigate();
    const [cart] = useCart();
    const { user, signOutUser } = useAuth();
    const handleSignOut = () => {
        signOutUser()
        navigate('/login')
    }
    return (
        <nav className="fixed top-0 z-50 bg-black w-full backdrop-blur-[1px] bg-opacity-20 text-white py-[2px]">
            <div className="navbar container mx-auto sm:px-5">
                <div className="navbar-start">
                    <div className="dropdown w-14 sm:w-auto">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden"><FaBars className="text-3xl" /></div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content uppercase font-medium rounded-box z-[1] mt-3 w-52 p-2 bg-gray-800 space-y-1 shadow">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/contactUs'>Contact Us</NavLink></li>
                            <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                            <li><NavLink to='/ourMenu'>Our Menu</NavLink></li>
                            <li><NavLink to='/ourShop'>Our Shop</NavLink></li>
                        </ul>
                    </div>
                    <Link to='/' className="flex flex-col cinzel">
                        <span className="font-bold sm:text-xl tracking-wider uppercase">Bistro boss</span>
                        <span className="sm:tracking-[0.2em] tracking-widest font-semibold sm:text-lg -mt-[2px]">Restaurant</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 uppercase font-medium">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/contactUs'>Contact Us</NavLink></li>
                        <li><NavLink to='/ourMenu'>Our Menu</NavLink></li>
                        <li><NavLink to='/ourShop/salad'>Our Shop</NavLink></li>
                        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end items-center gap-3">
                    <Link to='/dashboard/cart' className="flex gap-[2px]">
                        <IoCartSharp className="text-3xl" />
                        <span className="bg-yellow-500 grid place-items-center font-bold text-black w-5 h-5 rounded-full text-xs -mt-2">{cart.length}</span>
                    </Link>
                    {
                        user ?
                            <div className="flex gap-3 items-center">
                                <button onClick={handleSignOut} className="btn btn-outline btn-sm rounded text-xs uppercase text-yellow-500">sign out</button>
                                <img referrerPolicy="no-referrer" className="w-10 h-10 rounded-full" title={user?.displayName} src={user?.photoURL} alt="Profile" />
                            </div>
                            :
                            <div className="flex gap-3 items-center">
                                <Link to='login' className="btn btn-outline btn-sm rounded text-xs uppercase text-yellow-500">Log In</Link>
                                <FaUserCircle className="text-4xl" />
                            </div>
                    }

                </div>
            </div>
        </nav>
    )
}

export default Navbar;