import SectionTitle from "../reuseableComponents/SectionTitle";
import cart1 from "../assets/home/slide1.jpg"
import cart2 from "../assets/home/slide2.jpg"
import cart3 from "../assets/home/slide3.jpg"

const Cart = () => {
    return (
        <div className="mb-16 container mx-auto px-5">
            <SectionTitle subHeading='Should Try' heading='chef recommends'></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                <div className="text-center border p-5 rounded shadow">
                    <img src={cart1} alt="cart1" className="rounded mb-4 w-full h-60 border" />
                    <h3 className="text-2xl mb- font-semibold">Caeser Salad</h3>
                    <p className="text-gray-500 mb-4">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <button className="btn btn-outline text-yellow-600 font-medium">Add to cart</button>
                </div>
                <div className="text-center border p-5 rounded shadow">
                    <img src={cart2} alt="cart1" className="rounded mb-4 w-full h-60 border" />
                    <h3 className="text-2xl mb- font-semibold">Pizzas Big</h3>
                    <p className="text-gray-500 mb-4">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <button className="btn btn-outline text-yellow-600 font-medium">Add to cart</button>
                </div>
                <div className="text-center border p-5 rounded shadow">
                    <img src={cart3} alt="cart1" className="rounded mb-4 w-full h-60 border" />
                    <h3 className="text-2xl mb- font-semibold">Banana Cake</h3>
                    <p className="text-gray-500 mb-4">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <button className="btn btn-outline text-yellow-600 font-medium">Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;