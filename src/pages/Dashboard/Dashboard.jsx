import { Helmet } from "react-helmet-async";
import { Link, NavLink, Outlet } from "react-router-dom";
import { RiAlignItemLeftLine } from "react-icons/ri";
import { FaAddressBook, FaListUl, FaRegListAlt, FaBars, FaCalendarAlt, FaHome, FaUsers } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCartSharp } from "react-icons/io5";
import { MdPermContactCalendar } from "react-icons/md";
// import { FaIdCard } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();

    return (
        <section className="flex">
            <Helmet><title>Bistro Boss | Dashboard</title></Helmet>
            <aside className="w-64 bg-yellow-600 p-8 h-screen sticky top-0">
                <Link to='/' className="flex mb-8 flex-col cinzel">
                    <span className="font-extrabold text-gray-900 sm:text-xl tracking-wider uppercase">Bistro boss</span>
                    <span className="sm:tracking-[0.2em] text-gray-900 tracking-widest font-bold sm:text-lg -mt-[2px]">Restaurant</span>
                </Link>
                <ul className="capitalize font-semibold space-y-5 text-gray-900">
                    {
                        isAdmin ?
                            <>
                                {/* Admin Dashboard */}
                                <li><NavLink to='/dashboard/adminHome' className="flex gap-2 items-center"><FaHome className="text-xl" /><span>admin home</span></NavLink></li>
                                <li><NavLink to='/dashboard/addItems' className="flex gap-2 items-center"><RiAlignItemLeftLine className="text-xl" /><span>add items</span></NavLink></li>
                                <li><NavLink to='/dashboard/manageItems' className="flex gap-2 items-center"><FaListUl className="text-xl" /><span>Manage items</span></NavLink></li>
                                <li><NavLink to='/dashboard/manageBookings' className="flex gap-2 items-center"><FaAddressBook className="text-xl" /><span>Manage Bookings</span></NavLink></li>
                                <li><NavLink to='/dashboard/allUsers' className="flex gap-2 items-center"><FaUsers className="text-xl" /><span>All Users</span></NavLink></li>
                            </>
                            :
                            <>
                                {/* User Dashboard */}
                                <li><NavLink to='/dashboard/userHome' className="flex gap-2 items-center"><FaHome className="text-xl" /><span>user home</span></NavLink></li>
                                <li><NavLink to='/dashboard/reservation' className="flex gap-2 items-center"><FaCalendarAlt className="text-xl" /><span>reservation</span></NavLink></li>

                                {/* <li><NavLink to='/dashboard/paymentHistory' className="flex gap-2 items-center"><FaIdCard className="text-xl" /><span>payment history</span></NavLink></li> */}

                                <li><NavLink to='/dashboard/cart' className="flex gap-2 items-center"><IoCartSharp className="text-xl" /><span>My Cart ({cart.length})</span></NavLink></li>
                                <li><NavLink to='/dashboard/addReview' className="flex gap-2 items-center"><FaRegListAlt className="text-xl" /><span>add review</span></NavLink></li>
                                <li><NavLink to='/dashboard/MyBooking' className="flex gap-2 items-center"><MdPermContactCalendar className="text-xl" /><span>my booking</span></NavLink></li>
                            </>
                    }
                    {/* All */}
                    <div className="divider"></div>
                    <li><NavLink to='/' className="flex gap-2 items-center"><IoIosHome className="text-xl" /><span> home</span></NavLink></li>
                    <li><NavLink to='/ourMenu' className="flex gap-2 items-center"><FaBars className="text-xl" /><span>Menu</span></NavLink></li>
                    <li><NavLink to='/ourShop/salad' className="flex gap-2 items-center"><FaBagShopping className="text-xl" /><span>shop</span></NavLink></li>
                    <li><NavLink to='/contactUs' className="flex gap-2 items-center"><IoMdMail className="text-xl" /><span> Contact</span></NavLink></li>
                </ul>
            </aside>
            <main className="flex-grow my-8 px-20">
                <Outlet></Outlet>
            </main>
        </section>
    )
}

export default Dashboard;