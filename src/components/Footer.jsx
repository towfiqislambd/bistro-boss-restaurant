import { FaFacebook, FaInstagram, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-neutral text-neutral-content pt-14">
            <div className="container mx-auto px-5">
                <div className="footer pb-10">
                    <aside>
                        <h3 className="font-bold uppercase text-2xl cinzel">Contact us</h3>
                        <p className="text-gray-300 flex flex-col gap-2">
                            <span>Address: 123 ABS Street, Uni 21, Bangladesh</span>
                            <span>Mobile: +8801724569719 / +8801314505916</span>
                            <span>Mon - Fri: 08:00 - 22:00</span>
                            <span>Sat - Sun: 10:00 - 23:00</span>
                        </p>
                    </aside>
                    <nav>
                        <h3 className="font-bold uppercase text-2xl cinzel">Legal</h3>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    <nav>
                        <h3 className="font-bold uppercase text-2xl cinzel">follow us</h3>
                        <p className="text-lg text-gray-300 mb-1">Join us on social media</p>
                        <div className="grid grid-flow-col gap-4">
                            <a href="#"><FaFacebook className="text-2xl" /></a>
                            <a href="#"><FaInstagram className="text-2xl" /></a>
                            <a href="#"><FaLinkedin className="text-2xl" /></a>
                            <a href="#"><FaTwitterSquare className="text-2xl" /></a>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="bg-gray-800 text-center text-gray-400 py-4">
                    <p className="container mx-auto px-5">Copyright © {new Date().getFullYear()} - All right reserved by <a href="#" className="text-yellow-500 hover:underline italic">Towfiq Islam</a></p>
            </div>
        </footer>
    )
}

export default Footer;