import { Helmet } from "react-helmet-async";
import MenuCover from "../reuseableComponents/MenuCover";
import coverBg from "../assets/banner.jpg"
import SectionTitle from "../reuseableComponents/SectionTitle";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";

const ContactUs = () => {
    return (
        <div className="mb-16">
            <Helmet><title>Bistro Boss | Contact Us</title></Helmet>
            <MenuCover bgImg={coverBg} title='Contact us' subTitle='Would you like to try a dish?'></MenuCover>
            <div className="container mx-auto px-5">
                <div className="mt-16">
                    <SectionTitle heading='our location' subHeading='Visit Us'></SectionTitle>
                </div>
                <div className="grid mb-16 text-center grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="bg-slate-200 rounded pb-10">
                        <p className="flex justify-center items-center py-3 bg-yellow-600 mb-4"><LiaPhoneVolumeSolid className="text-3xl text-white" /></p>
                        <h4 className="uppercase cinzel mb-2 text-2xl font-bold">Phone</h4>
                        <p className="text-gray-500">+38 (012) 34 56 789</p>
                    </div>
                    <div className="bg-slate-200 rounded pb-10">
                        <p className="flex justify-center items-center py-3 bg-yellow-600 mb-4"><FaLocationDot className="text-3xl text-white" /></p>
                        <h4 className="uppercase cinzel mb-2 text-2xl font-bold">address</h4>
                        <p className="text-gray-500">2/A, Mirpur-10, Dhaka.</p>
                    </div>
                    <div className="bg-slate-200 rounded pb-10">
                        <p className="flex justify-center items-center py-3 bg-yellow-600 mb-4"><MdOutlineAccessTimeFilled className="text-3xl text-white" /></p>
                        <h4 className="uppercase cinzel mb-2 text-2xl font-bold">working hours</h4>
                        <p className="text-gray-500">Mon - Fri: 08:00 - 22:00 <br />
                            Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
                <SectionTitle heading='contact form' subHeading='Send Us A Message'></SectionTitle>
                <form className="sm:py-10 py-8 px-5 sm:px-14 lg:w-2/3 mx-auto space-y-3 bg-slate-200 rounded">
                <h3 className="text-center text-2xl sm:text-3xl cinzel uppercase tracking-wider text-yellow-700 font-bold">Connect With Us!!</h3>
                    <div className="sm:grid grid-cols-2 gap-5">
                        <div>
                            <div className="label">
                                <span className="label-text text-lg">Name<span className="text-error text-lg">*</span></span>
                            </div>
                            <input type="text" placeholder="Enter Your Name" className="input input-bordered w-full" />
                        </div>
                        <div>
                            <div className="label">
                                <span className="label-text text-lg">Email<span className="text-error text-lg">*</span></span>
                            </div>
                            <input type="email" placeholder="Enter Your Email" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div>
                        <div className="label">
                            <span className="label-text text-lg">Phone<span className="text-error text-lg">*</span></span>
                        </div>
                        <input type="number" placeholder="Enter Your Phone Number" className="input input-bordered w-full" />
                    </div>
                    <div>
                        <div className="label">
                            <span className="label-text text-lg">Message<span className="text-error text-lg">*</span></span>
                        </div>
                        <textarea className="textarea textarea-bordered w-full" rows={6} placeholder="Write Your Message Here....."></textarea>
                    </div>
                    <p className="justify-center font-medium text-white cursor-pointer hover:bg-yellow-700 duration-300 bg-yellow-600 px-5 py-2 rounded flex gap-2 items-center">
                        <input type="submit" value='Send Message' />
                        <FaLocationArrow />
                    </p>
                </form>
            </div>
        </div>
    )
}

export default ContactUs;