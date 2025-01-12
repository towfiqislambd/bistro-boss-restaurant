import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://bistro-boss-restaurant-eight.vercel.app',
})

const useAxiosPublic = () => {
    return axiosInstance
}

export default useAxiosPublic;