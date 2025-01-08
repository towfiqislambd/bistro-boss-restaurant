import { FiEdit } from "react-icons/fi";
import SectionTitle from "../../../reuseableComponents/SectionTitle";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UpdateItem = () => {
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const { id } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        axiosSecure.get(`/updateItems/${id}`)
            .then(data => {
                setItem(data.data)
            })
    }, [axiosSecure, id])

    const handleUpdateItems = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries())
        const finalData = {
            ...initialData,
            price: Number(initialData.price),
        }

        axiosSecure.patch(`/menu/updateItems/${id}`, finalData)
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: `Updated Successfully`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    e.target.reset()
                    navigate('/dashboard/manageItems')
                }
            })
    }

    return (
        <section>
            <SectionTitle heading='Update an Item' subHeading="Wanna Update?"></SectionTitle>
            <form onSubmit={handleUpdateItems} className="sm:py-10 py-8 px-5 sm:px-14 mx-auto space-y-3 bg-slate-200 rounded">
                <div>
                    <div className="label">
                        <span className="label-text text-lg">Recipe Name<span className="text-error text-lg">*</span></span>
                    </div>
                    <input name="name" defaultValue={item.name} type="text" placeholder="Recipe Name" className="input input-bordered w-full" required />
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <div>
                        <div className="label">
                            <span className="label-text text-lg">Category<span className="text-error text-lg">*</span></span>
                        </div>
                        <select name="category" defaultValue={item.category} className="select select-bordered w-full" required>
                            <option value='category' disabled>Select Category</option>
                            <option value="salad">Salad</option>
                            <option value="pizza">Pizza</option>
                            <option value="soup">Soup</option>
                            <option value="dessert">Category</option>
                            <option value="drinks">Drinks</option>
                        </select>
                    </div>
                    <div>
                        <div className="label">
                            <span className="label-text text-lg">Price<span className="text-error text-lg">*</span></span>
                        </div>
                        <input name="price" defaultValue={item.price} type="number" placeholder="Price" className="input input-bordered w-full" required />
                    </div>
                </div>
                <div className="pb-1">
                    <div className="label">
                        <span className="label-text text-lg">Recipe Details<span className="text-error text-lg">*</span></span>
                    </div>
                    <textarea defaultValue={item.recipe} name="recipe" className="textarea rounded w-full" placeholder="Recipe Details....." rows={5} required>
                    </textarea>
                </div>
                <button type="submit" className="flex gap-2 items-center text-white bg-yellow-700 rounded px-7 py-3 font-medium">Update<FiEdit className="text-lg" /></button>
            </form>
        </section>
    )
}

export default UpdateItem;