import SectionTitle from "../../../reuseableComponents/SectionTitle";
import { MdFilterList } from "react-icons/md";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddItems = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const image_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

    const handleAddItems = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const imageFile = formData.get("image");
        const imageFormData = new FormData();
        imageFormData.append("image", imageFile);

        const imageResponse = await axiosPublic.post(image_hosting_api, imageFormData, {
            headers: {
                "content-type": "multipart/form-data",
            }
        })

        if (imageResponse.data.success) {
            const initialData = Object.fromEntries(formData.entries());
            const finalData = {
                ...initialData,
                price: Number(initialData.price),
                image: imageResponse.data.data.display_url
            };
            axiosSecure.post('/all-menu', finalData)
                .then(data => {
                    if (data.data.insertedId) {
                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: `${finalData.name} Added Successfully`,
                            showConfirmButton: false,
                            timer: 1500
                        })
                        e.target.reset()
                    }
                })
        }

    }
    return (
        <section>
            <SectionTitle heading='Add an Item' subHeading="What's New"></SectionTitle>
            <form onSubmit={handleAddItems} className="sm:py-10 py-8 px-5 sm:px-14 mx-auto space-y-3 bg-slate-200 rounded">
                <div>
                    <div className="label">
                        <span className="label-text text-lg">Recipe Name<span className="text-error text-lg">*</span></span>
                    </div>
                    <input name="name" type="text" placeholder="Recipe Name" className="input input-bordered w-full" required />
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <div>
                        <div className="label">
                            <span className="label-text text-lg">Category<span className="text-error text-lg">*</span></span>
                        </div>
                        <select name="category" defaultValue='category' className="select select-bordered w-full" required>
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
                        <input name="price" type="number" placeholder="Price" className="input input-bordered w-full" required />
                    </div>
                </div>
                <div className="pb-1">
                    <div className="label">
                        <span className="label-text text-lg">Recipe Details<span className="text-error text-lg">*</span></span>
                    </div>
                    <textarea name="recipe" className="textarea rounded w-full" placeholder="Recipe Details....." rows={5} required>
                    </textarea>
                </div>
                <input type="file" name="image" accept="image/*" required />
                <button type="submit" className="flex gap-2 items-center text-white bg-yellow-700 rounded px-7 py-3 font-medium">Add Item<MdFilterList className="text-lg" /></button>
            </form>
        </section>
    )
}

export default AddItems;