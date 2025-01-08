import { Link, useLocation, useNavigate } from "react-router-dom";
import coverBg from "../assets/others/authentication.png"
import registerBg from "../assets/others/authentication2.png"
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import useAuth from "../hooks/useAuth"
import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2';
import useAxiosPublic from "../hooks/useAxiosPublic";

const Register = () => {
    const axiosPublic = useAxiosPublic()
    const location = useLocation()
    const navigate = useNavigate();
    const { registerUser, updateUser, signInWithGoogle, signInWithGithub } = useAuth()
    const [errorMessage, setErrorMessage] = useState('');
    const [photoError, setPhotoError] = useState('');
    const [passwordError, setPasswordError] = useState('');

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

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const userInfo = { name, email }
        setErrorMessage('')
        setPhotoError('')
        setPasswordError('')

        // URL Verification
        const regexURL = /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i;
        if (!regexURL.test(photo)) {
            return setPhotoError('Invalid URL (use jpg/png/jpeg/webp/gif format)')
        }
        // Password Verification
        const regexPassword = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!regexPassword.test(password)) {
            return setPasswordError("Password must be at least 6 characters long, Include one uppercase and one lowercase letter")
        }

        registerUser(email, password)
            .then(() => {
                updateUser(name, photo)
                    .then(() => {
                        axiosPublic.post('/all-users', userInfo)
                            .then(data => {
                                if (data.data.insertedId) {
                                    Swal.fire({
                                        position: "top-center",
                                        icon: "success",
                                        title: "Registration Successful",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate(location?.state ? location.state : '/')
                                }
                            })
                    })
            })
            .catch(err => {
                const error = err.message;
                setErrorMessage(error)
            })
    }
    return (
        <>
            <Helmet><title>Bistro Boss | Registration</title></Helmet>
            <div className="py-10" style={{ backgroundImage: `url(${coverBg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <div className="container mx-auto md:px-10">
                    <div className="md:border-4 border-gray-200 rounded md:shadow-xl px-5 md:px-24 py-5 md:py-8 gap-5 lg:gap-10 xl:gap-16 grid grid-cols-1 lg:grid-cols-2 items-center">
                        <div className="order-2 lg:order-1">
                            <form onSubmit={handleRegister} className="text-center">
                                <h3 className="font-bold tracking-wider text-3xl">Sign Up</h3>
                                <div className="mb-1">
                                    <div className="label">
                                        <span className="label-text text-lg">Name<span className="text-error text-lg">*</span></span>
                                    </div>
                                    <input name="name" type="text" placeholder="Enter Your Name..." className="input -mt-1 rounded input-bordered w-full" required />
                                </div>
                                <div className="mb-1">
                                    <div className="label">
                                        <span className="label-text text-lg">Photo URL<span className="text-error text-lg">*</span></span>
                                    </div>
                                    <input name="photo" type="url" placeholder="Enter PhotoURL..." className={`input -mt-1 rounded input-bordered w-full ${photoError && 'border-red-400'}`} required />
                                    {
                                        photoError && <p className="mt-2 text-left text-error">{photoError}</p>
                                    }
                                </div>
                                <div className="mb-1">
                                    <div className="label">
                                        <span className="label-text text-lg">Email<span className="text-error text-lg">*</span></span>
                                    </div>
                                    <input name="email" type="email" placeholder="Enter Your Email..." className="input -mt-1 rounded input-bordered w-full" required />
                                </div>
                                <div className="mb-6">
                                    <div className="label">
                                        <span className="label-text text-lg">Password<span className="text-error text-lg">*</span></span>
                                    </div>
                                    <input name="password" type="password" placeholder="Enter Your Password..." className={`input -mt-1 rounded input-bordered w-full ${passwordError && 'border-red-400'}`} required />
                                    {
                                        passwordError && <p className="mt-2 text-left text-error">{passwordError}</p>
                                    }
                                </div>
                                <input type="submit" value='Sign Up' className="font-semibold text-white bg-yellow-600 rounded py-3 w-full block cursor-pointer" />
                                {
                                    errorMessage && <p className="mt-3 text-error px-2">{errorMessage}</p>
                                }
                            </form>
                            <p className="mt-4 text-center">Already Registered? Go to <Link to='/login' className="font-semibold hover:underline text-yellow-600">Login</Link></p>
                            <div className="divider text-gray-500">OR</div>
                            <div className="flex gap-3 items-center justify-center">
                                <button className="h-10 w-10 rounded-full border grid place-items-center border-gray-400"><FaFacebookF className="text-lg" /></button>
                                <button onClick={handleGoogleSignUp} className="h-10 w-10 rounded-full border grid place-items-center border-gray-400"><FaGoogle className="text-lg" /></button>
                                <button onClick={handleGithubSignUp} className="h-10 w-10 rounded-full border grid place-items-center border-gray-400"><FaGithub className="text-lg" /></button>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <img src={registerBg} alt="Cover" className="w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;