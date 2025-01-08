import SectionTitle from "../../../reuseableComponents/SectionTitle";

const MyBooking = () => {
    return (
        <div>
            <SectionTitle heading='My Bookings' subHeading='Excellent Ambience'></SectionTitle>
            <div className="flex justify-between mb-5 items-center">
                <p className="text-xl font-semibold text-gray-800">Total Bookings: 3</p>
                <p className="text-xl font-semibold text-gray-800">Total Price: $178</p>
                <button className="capitalize py-2 px-4 rounded bg-yellow-600 text-white">pay Now</button>
            </div>
            <div className="overflow-x-auto rounded-lg">
                <table className="table bg-slate-200">
                    <thead className="bg-yellow-600">
                        <tr className="text-gray-800 text-[15px]">
                            <th className="py-5 tracking-wide">ID</th>
                            <th className="py-5 tracking-wide">Item Image</th>
                            <th className="py-5 tracking-wide">Guest Number</th>
                            <th className="py-5 tracking-wide">Category</th>
                            <th className="py-5 tracking-wide">Price</th>
                            <th className="py-5 tracking-wide">Action</th>
                        </tr>
                    </thead>
                    {/* <tbody>
                        {
                            cart.map((singleCart, idx) => <tr key={singleCart._id}>
                                <th>{idx + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask rounded-lg border border-gray-300 h-14 w-14">
                                                <img src={singleCart.image} className="w-full" alt="Item Image" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{singleCart.name}</td>
                                <td>${singleCart.price}</td>
                                <th><button onClick={() => handleDelete(singleCart._id)} className="bg-error text-white p-2 rounded"><RiDeleteBin6Line className="text-xl" /></button></th>
                            </tr>)
                        }
                    </tbody> */}
                </table>
            </div>
        </div>
    )
}

export default MyBooking;