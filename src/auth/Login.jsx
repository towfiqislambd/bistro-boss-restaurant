import { Link, useLocation, useNavigate } from "react-router-dom";
import coverBg from "../assets/others/authentication.png"
import registerBg from "../assets/others/authentication2.png"
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic"

const Login = () => {
    const axiosPublic = useAxiosPublic()
    const location = useLocation()
    const navigate = useNavigate();
    const { loginUser, signInWithGoogle, signInWithGithub } = useAuth()
    const [error, setError] = useState('');
    const [captchaError, setCaptchaError] = useState('');
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleGoogleSignUp = () => {
        signInWithGoogle()
            .then(result => {
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email
                }
                axiosPublic.post('/all-users', userInfo)
                    .then(() => {
                        navigate(location?.state ? location.state : '/')
                    })
            })
    }
    const handleGithubSignUp = () => {
        signInWithGithub()
            .then(() => {
                navigate(location?.state ? location.state : '/')
            })
    }

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const captcha = e.target.captcha.value;
        setCaptchaError('')
        setError('')

        // Validate Captcha
        if (validateCaptcha(captcha) === false) {
            return setCaptchaError('Captcha Does Not Match')
        }

        loginUser(email, password)
            .then(() => {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Login Successful",
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                const error = err.message
                setError(error)
            })
    }
    return (
        <>
            <Helmet><title>Bistro Boss | Login</title></Helmet>
            <div className="py-10" style={{ backgroundImage: `url(${coverBg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <div className="container mx-auto md:px-10">
                    <div className="md:border-4 border-gray-200 rounded md:shadow-xl px-5 md:px-24 py-5 md:py-10 gap-5 lg:gap-10 xl:gap-16 grid grid-cols-1 lg:grid-cols-2 items-center">
                        <div className="">
                            <img src={registerBg} alt="Cover" className="w-full" />
                        </div>
                        <div className="">
                            <form onSubmit={handleLogin} className="text-center">
                                <h3 className="font-bold tracking-wider text-3xl">Log In</h3>
                                <div className="mb-1">
                                    <div className="label">
                                        <span className="label-text text-lg">Email<span className="text-error text-lg">*</span></span>
                                    </div>
                                    <input type="email" placeholder="Enter Your Email..." className="input -mt-1 rounded input-bordered w-full" name="email" required />
                                </div>
                                <div className="mb-5">
                                    <div className="label">
                                        <span className="label-text text-lg">Password<span className="text-error text-lg">*</span></span>
                                    </div>
                                    <input type="password" name="password" placeholder="Enter Your Password..." className="input -mt-1 rounded input-bordered w-full" required />
                                </div>
                                <div className="mb-5">
                                    <div id="customCanvas" className="input ps-0 input-bordered">
                                        <LoadCanvasTemplate />
                                    </div>
                                    {
                                        captchaError && <p className="mt-2 text-left text-error">{captchaError}</p>
                                    }
                                </div>
                                <div className="mb-5">
                                    <input type="text" name="captcha" placeholder="Type captcha here..." className="input -mt-1 rounded input-bordered w-full" required />
                                </div>
                                <input type="submit" value='Log In' className="font-semibold text-white bg-yellow-600 rounded py-3 w-full block cursor-pointer" />
                                {
                                    error && <p className="text-center mt-3 px-3 text-error">{error}</p>
                                }
                            </form>
                            <p className="mt-4 text-center">New Here? <Link to='/register' className="font-semibold hover:underline text-yellow-600">Create A New Account</Link></p>
                            <div className="divider text-gray-500">OR</div>
                            <div className="flex gap-3 items-center justify-center">
                                <button className="h-10 w-10 rounded-full border grid place-items-center border-gray-400"><FaFacebookF className="text-lg" /></button>
                                <button onClick={handleGoogleSignUp} className="h-10 w-10 rounded-full border grid place-items-center border-gray-400"><FaGoogle className="text-lg" /></button>
                                <button onClick={handleGithubSignUp} className="h-10 w-10 rounded-full border grid place-items-center border-gray-400"><FaGithub className="text-lg" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;