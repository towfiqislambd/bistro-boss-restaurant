import SectionTitle from "../../../reuseableComponents/SectionTitle";
import { IoMdCheckmark } from "react-icons/io";

const ManageBookings = () => {
    return (
        <section>
            <SectionTitle heading='manage all bookings' subHeading='At a Glance'></SectionTitle>
            <p className="text-xl font-semibold mb-5 text-gray-800">Total Items: 6</p>
            <div className="overflow-x-auto rounded-lg">
                <table className="table bg-slate-200">
                    <thead className="bg-yellow-600">
                        <tr className="text-gray-800 text-[15px]">
                            <th className="py-5 tracking-wide">User Email</th>
                            <th className="py-5 tracking-wide">Phone Number</th>
                            <th className="py-5 tracking-wide">Booking Date</th>
                            <th className="py-5 tracking-wide">Booking Time</th>
                            <th className="py-5 tracking-wide">Status</th>
                            <th className="py-5 tracking-wide">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>towfiqislam@gmail.com</td>
                            <td>0131005916</td>
                            <td>01/01/2025</td>
                            <td>12:00</td>
                            <td className="font-medium text-yellow-700">Pending</td>
                            <td><button className="w-8 font-bold grid place-items-center h-8 rounded-full text-white bg-[#337f5d]"><IoMdCheckmark className="text-lg" /></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default ManageBookings;