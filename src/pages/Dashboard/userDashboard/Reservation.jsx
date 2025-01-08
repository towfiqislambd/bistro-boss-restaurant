import { MdOutlineAccessTimeFilled } from "react-icons/md";
import SectionTitle from "../../../reuseableComponents/SectionTitle";
import { FaLocationDot } from "react-icons/fa6";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { MdOutlineTableRows } from "react-icons/md";

const Reservation = () => {
    return (
        <div>
            <SectionTitle heading='book a table' subHeading='Reservation'></SectionTitle>
            <form className="mb-16">
                <div className="grid grid-cols-3 gap-5 mb-8">
                    <div>
                        <div className="label">
                            <span className="label-text text-lg">Name<span className="text-error text-lg">*</span></span>
                        </div>
                        <input name="name" type="text" placeholder="Your Name" className="input input-bordered w-full" />
                    </div>
                    <div>
                        <div className="label">
                            <span className="label-text text-lg">Phone<span className="text-error text-lg">*</span></span>
                        </div>
                        <input name="number" type="number" placeholder="Phone Number" className="input input-bordered w-full" />
                    </div>
                    <div>
                        <div className="label">
                            <span className="label-text text-lg">email<span className="text-error text-lg">*</span></span>
                        </div>
                        <input name="email" type="email" placeholder="Email" className="input input-bordered w-full" />
                    </div>
                    <div>
                        <div className="label">
                            <span className="label-text text-lg">Date<span className="text-error text-lg">*</span></span>
                        </div>
                        <input name="date" type="date" className="input input-bordered w-full" />
                    </div>
                    <div>
                        <div className="label">
                            <span className="label-text text-lg">Time<span className="text-error text-lg">*</span></span>
                        </div>
                        <input name="time" type="time" className="input input-bordered w-full" />
                    </div>
                    <div>
                        <div className="label">
                            <span className="label-text text-lg">Guest<span className="text-error text-lg">*</span></span>
                        </div>
                        <select name="person" className="select select-bordered w-full">
                            <option value="1">1 Person</option>
                            <option value="2">2 Person</option>
                            <option value="3">3 Person</option>
                            <option value="4">4 Person</option>
                            <option value="5">5 Person</option>
                        </select>
                    </div>
                </div>
                <button type="submit" className="flex mx-auto gap-2 items-center text-white bg-yellow-700 rounded px-7 py-3 font-medium">Book A Table <MdOutlineTableRows className="text-lg" /></button>
            </form>
            <SectionTitle heading='Our location' subHeading='Visit Us'></SectionTitle>
            <div className="grid mb-16 text-center grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-slate-200 rounded pb-10">
                    <p className="flex justify-center items-center py-4 bg-yellow-600 mb-4"><LiaPhoneVolumeSolid className="text-3xl text-white" /></p>
                    <h4 className="uppercase cinzel mb-2 text-2xl font-bold">Phone</h4>
                    <p className="text-gray-600">+38 (012) 34 56 789</p>
                </div>
                <div className="bg-slate-200 rounded pb-10">
                    <p className="flex justify-center items-center py-4 bg-yellow-600 mb-4"><FaLocationDot className="text-3xl text-white" /></p>
                    <h4 className="uppercase cinzel mb-2 text-2xl font-bold">address</h4>
                    <p className="text-gray-600">2/A, Mirpur-10, Dhaka.</p>
                </div>
                <div className="bg-slate-200 rounded pb-10">
                    <p className="flex justify-center items-center py-4 bg-yellow-600 mb-4"><MdOutlineAccessTimeFilled className="text-3xl text-white" /></p>
                    <h4 className="uppercase cinzel mb-2 text-2xl font-bold">working hours</h4>
                    <p className="text-gray-600">Mon - Fri: 08:00 - 22:00 <br />
                        Sat - Sun: 10:00 - 23:00</p>
                </div>
            </div>
        </div>
    )
}

export default Reservation;