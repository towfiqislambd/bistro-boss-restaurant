import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";

const Card = ({ item }) => {
    const axiosSecure = useAxiosSecure()
    const location = useLocation()
    const navigate = useNavigate()
    const { user } = useAuth();
    const [,refetch] = useCart()

    const handleAddToCart = food => {
        if (!user) {
            return Swal.fire({
                title: "Please Login first",
                icon: "warning",
                draggable: true,
                confirmButtonText: "Go to login",
            }).then(result => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { pathname: location?.pathname } })
                }
            })
        }
        else {
            const cartItem = {
                menuId: food?._id,
                userEmail: user?.email,
                name: food.name,
                image: food.image,
                price: food.price
            }
            axiosSecure.post('/carts', cartItem)
                .then(data => {
                    if (data.data.insertedId) {
                        const Toast = Swal.mixin({
                            toast: true,
                            position: "top-end",
                            showConfirmButton: false,
                            timer: 2000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                                toast.onmouseenter = Swal.stopTimer;
                                toast.onmouseleave = Swal.resumeTimer;
                            }
                        });
                        Toast.fire({
                            icon: "success",
                            title: "Added to Cart"
                        })
                    }
                    refetch()
                })
        }
    }

    return (
        <div className="text-center border p-5 rounded shadow">
            <img src={item.image} alt="cart1" className="rounded mb-4 w-full h-60 border" />
            <h3 className="text-2xl mb- font-semibold">{item.name}</h3>
            <p className="text-gray-500 mb-4">{item.recipe}</p>
            <button onClick={() => handleAddToCart(item)} className="btn btn-outline text-yellow-600 font-medium">Add to cart</button>
        </div>
    )
}

export default Card;