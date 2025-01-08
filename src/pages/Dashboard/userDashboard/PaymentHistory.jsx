import SectionTitle from "../../../reuseableComponents/SectionTitle";

const PaymentHistory = () => {
    return (
        <div>
            <SectionTitle heading='Payment history' subHeading='At a Glance'></SectionTitle>
            <p className="text-xl mb-5 font-semibold text-gray-800">Total Payment: 6</p>
            <div className="overflow-x-auto rounded-lg">
                <table className="table bg-slate-200">
                    <thead className="bg-yellow-600">
                        <tr className="text-gray-800 text-[15px]">
                            <th className="py-5 tracking-wide">Email</th>
                            <th className="py-5 tracking-wide">Category</th>
                            <th className="py-5 tracking-wide">Total Price</th>
                            <th className="py-5 tracking-wide">Payment Date</th>
                        </tr>
                    </thead>
                    {/* <tbody>
                                    {
                                        cart.map((singleCart, idx) => <tr key={singleCart._id}>
                                            <td>{singleCart.name}</td>
                                            <td>{singleCart.name}</td>
                                            <td>{singleCart.name}</td>
                                            <td>${singleCart.price}</td>
                                        </tr>)
                                    }
                    </tbody> */}
                </table>
            </div>
        </div>
    )
}

export default PaymentHistory;