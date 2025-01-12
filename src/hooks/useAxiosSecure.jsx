import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
    baseURL: 'https://bistro-boss-restaurant-eight.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {
    const { signOutUser } = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {
            if (error.status === 401 || error.status === 403) {
                signOutUser()
                navigate('/login')
            }
            return Promise.reject(error)
        })
    }, [signOutUser,navigate])
    return axiosInstance
}

export default useAxiosSecure;