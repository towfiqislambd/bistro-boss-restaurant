import { Link } from "react-router-dom";
import gifImg from "../assets/404.gif"
const ErrorPage = () => {
    return (
        <div className="flex flex-col gap-3 justify-center text-center container mx-auto px-5 h-screen items-center">
            <img src={gifImg} className="w-1/3" />
            <Link to='/' className="bg-yellow-600 transition-all hover:bg-transparent border border-yellow-600 hover:text-yellow-600 text-white px-5 py-2 rounded font-medium">Go Back To Home </Link>
        </div>
    )
}

export default ErrorPage;