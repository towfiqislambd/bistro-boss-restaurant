import { RiAlignItemLeftFill } from "react-icons/ri";
import { FaShoppingBag } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosCart } from "react-icons/io";
import useAuth from "../../../hooks/useAuth";
import { FaStar } from "react-icons/fa6";
import { GoBookmarkFill } from "react-icons/go";
import { MdOutlinePayment } from "react-icons/md";

const UserHome = () => {
    const { user } = useAuth()
    return (
        <section>
            <h2 className="text-2xl font-semibold">Hi {user?.displayName}, Welcome Back!</h2>
            <div className="grid grid-cols-3 gap-5 items-center my-7">
                <div className="rounded flex justify-center bg-purple-500 py-10 text-white gap-3 items-center">
                    <RiAlignItemLeftFill className="text-5xl" />
                    <div className="">
                        <p className="text-3xl font-extrabold tracking-wider">205</p>
                        <p className="text-lg">Menu</p>
                    </div>
                </div>
                <div className="rounded flex justify-center bg-indigo-400 py-10 text-white gap-3 items-center">
                    <FaShoppingBag className="text-5xl" />
                    <div className="">
                        <p className="text-3xl font-extrabold tracking-wider">103</p>
                        <p className="text-lg">Shop</p>
                    </div>
                </div>
                <div className="rounded flex justify-center bg-rose-400 py-10 text-white gap-3 items-center">
                    <BiSolidPhoneCall className="text-5xl" />
                    <div className="">
                        <p className="text-3xl font-extrabold tracking-wider">03</p>
                        <p className="text-lg">Contact</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div className="bg-rose-200 flex flex-col gap-5 items-center justify-center py-14 border-r-2 border-yellow-500">
                    <img src={user?.photoURL} className="w-24 h-24 rounded-full border-2 border-yellow-600" alt="Profile" />
                    <h3 className="text-xl font-semibold italic text-gray-800">{user?.displayName}</h3>
                </div>
                <div className="bg-yellow-200 p-14">
                    <h3 className="text-xl font-bold capitalize mb-5">Your Achievements</h3>
                    <p className="flex mb-3 gap-2 font-semibold items-center"><span><IoIosCart className="text-xl" /></span><span>Orders: 6</span></p>
                    <p className="flex mb-3 gap-2 font-semibold items-center"><span><FaStar className="text-xl" /></span><span>Reviews: 2</span></p>
                    <p className="flex mb-3 gap-2 font-semibold items-center"><span><GoBookmarkFill className="text-xl" /></span><span>Bookmarks: 1</span></p>
                    <p className="flex gap-2 font-semibold items-center"><span><MdOutlinePayment className="text-xl" /></span><span>Payments: 3</span></p>
                </div>
            </div>
        </section>
    )
}

export default UserHome;