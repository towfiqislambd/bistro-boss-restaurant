import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import SectionTitle from "../../../reuseableComponents/SectionTitle";
import { RiDeleteBin6Line } from "react-icons/ri";

const MyCart = () => {
    const [cart, refetch] = useCart();
    const axiosSecure = useAxiosSecure();
    const totalPrice = cart.reduce((p, c) => p + c.price, 0);
    const handleDelete = _id => {
        axiosSecure.delete(`carts/${_id}`)
            .then(data => {
                if (data.data.deletedCount > 0) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Item has been deleted",
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                refetch()
            })
    }
    return (
        <section>
            <SectionTitle heading='wanna add more?' subHeading='My Cart'></SectionTitle>
            <div className="flex justify-between mb-5 items-center">
                <p className="text-xl font-semibold text-gray-800">Total Order: {cart.length}</p>
                <p className="text-xl font-semibold text-gray-800">Total Price: ${totalPrice}</p>
                <button className="capitalize py-2 px-4 rounded bg-yellow-600 text-white">pay Now</button>
            </div>
            <div className="overflow-x-auto rounded-lg">
                <table className="table bg-slate-200">
                    <thead className="bg-yellow-600">
                        <tr className="text-gray-800 text-[15px]">
                            <th className="py-5 tracking-wide">ID</th>
                            <th className="py-5 tracking-wide">Item Image</th>
                            <th className="py-5 tracking-wide">Item Name</th>
                            <th className="py-5 tracking-wide">Price</th>
                            <th className="py-5 tracking-wide">Action</th>
                        </tr>
                    </thead>
                    <tbody>
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
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default MyCart;