import SectionTitle from "../../../reuseableComponents/SectionTitle";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/all-users');
            return res.data;
        }
    })
    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: `${user.name} is Now Admin!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch();
                }
            })
    }
    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    axiosSecure.delete(`/all-users/${_id}`)
                        .then(data => {
                            if (data.data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                })
                                refetch()
                            }
                        })
                }
            })
    }
    return (
        <section>
            <SectionTitle heading='manage all users' subHeading='How Many'></SectionTitle>
            <p className="text-xl font-semibold mb-5 text-gray-800">Total Users: {users.length}</p>
            <div className="overflow-x-auto rounded-lg">
                <table className="table bg-slate-200">
                    <thead className="bg-yellow-600">
                        <tr className="text-gray-800 text-[15px]">
                            <th className="py-5 tracking-wide">ID</th>
                            <th className="py-5 tracking-wide">Name</th>
                            <th className="py-5 tracking-wide">Email</th>
                            <th className="py-5 tracking-wide">Role</th>
                            <th className="py-5 tracking-wide">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, idx) => <tr key={user._id}>
                                <th>{idx + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <th>
                                    {
                                        user.role === 'admin' ? <span className="font-semibold">Admin</span> :
                                            <button onClick={() => handleMakeAdmin(user)} className="bg-yellow-600 text-white p-2 rounded"><FaUser className="text-xl" /></button>
                                    }
                                </th>
                                <th>
                                    <button onClick={() => handleDelete(user._id)} className="bg-error text-white p-2 rounded"><RiDeleteBin6Line className="text-xl" /></button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default AllUsers;