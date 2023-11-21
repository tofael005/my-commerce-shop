import logo from "../assets/logo.png"
import logo1 from "../assets/footer/google-play-store4701.jpg"
import logo2 from "../assets/footer/apple-app-store-appstore-icon-png-image-purepng-transparent-4.png"
import { FaWhatsapp } from "react-icons/fa6";
import { MdCallEnd } from "react-icons/md";

import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="max-w-[1240px] mx-auto mt-10 px-2 bg-[#d1eff9]">
            <div className="grid md:grid-cols-3 gap-10 py-10">


                <div className="">
                    <div className="md:ml-[110px]">
                        <Link to="/"> <img className="w-40" src={logo} alt="" /></Link>
                        <h1 className="text-xl font-bold mt-6">Contact US</h1>
                    </div>
                    <div className="flex gap-4 items-center mt-4 md:ml-[110px] mb-2">
                        <FaWhatsapp className="text-red-600 text-3xl" />
                        <div>
                            <h1>Whats App</h1>
                            <p className="font-bold">+880 1966406795</p>
                        </div>
                    </div>
                    <div className="flex gap-4 md:ml-[110px] items-center">
                        <MdCallEnd className="text-red-600 text-3xl" />
                        <div>
                            <h1>Call NOW</h1>
                            <p className="font-bold">+880 1966406795</p>
                        </div>
                    </div>

                    <div className="justify-center items-center text-center mt-10">
                        <h1 className="font-bold mb-2">Download NOW</h1>
                        <div className="flex gap-3 justify-center items-center">
                            <img className="w-20 rounded-lg h-[70px]" src={logo1} alt="" />
                            <img className="w-20" src={logo2} alt="" />
                        </div>
                    </div>
                </div>

                {/* Most Popular Categories */}
                <div className="">
                    <h1 className="text-xl font-bold">Most Popular Categories</h1>
                    <hr className="border-sky-500 w-[230px] mt-1 border-2" />

                    <div className="flex gap-3 items-center mt-2 cursor-pointer">
                        <GoDotFill />
                        <Link to="/allPhone"><p className="hover:text-sky-600 duration-300">Gadghet</p></Link>
                    </div>
                    <div className="flex gap-3 items-center mt-2 cursor-pointer">
                        <GoDotFill />
                        <Link to="/electronics"><p className="hover:text-sky-600 duration-300">Electronics</p></Link>
                    </div>
                    <div className="flex gap-3 items-center mt-2 cursor-pointer">
                        <GoDotFill />
                        <Link to="/pcBuilding"><p className="hover:text-sky-600 duration-300">PC Building</p></Link>
                    </div>
                    <div className="flex gap-3 items-center mt-2 cursor-pointer">
                        <GoDotFill />
                        <Link to="/fashion"><p className="hover:text-sky-600 duration-300">Life Style & Fashion</p>
                        </Link>
                    </div>
                    <div className="flex gap-3 items-center mt-2 cursor-pointer">
                        <GoDotFill />
                        <Link to="/software"><p className="hover:text-sky-600 duration-300">Software</p></Link>
                    </div>
                    <div className="flex gap-3 items-center mt-2 cursor-pointer">
                        <GoDotFill />
                        <Link to="/frozen"><p className="hover:text-sky-600 duration-300">Frozen Foods & Fruits Items</p></Link>
                    </div>
                    <div className="flex gap-3 items-center mt-2 cursor-pointer">
                        <GoDotFill />
                       <Link to="/grocery"><p className="hover:text-sky-600 duration-300">Grocery Items</p></Link>
                    </div>
                </div>


                <div>
                    <h1 className="text-xl font-bold">Cutomer Service</h1>
                    <hr className="border-sky-500 w-[160px] mt-1 border-2" />

                    <div className="flex gap-3 items-center mt-2 cursor-pointer">
                        <GoDotFill />
                        <p className="hover:text-sky-500 duration-300">About US</p>
                    </div>
                    <div className="flex gap-3 items-center mt-2 cursor-pointer">
                        <GoDotFill />
                        <p className="hover:text-sky-500 duration-300">Terms & Conditions</p>
                    </div>
                    <div className="flex gap-3 items-center mt-2 cursor-pointer">
                        <GoDotFill />
                        <p className="hover:text-sky-500 duration-300">Privecy & Policy</p>
                    </div>
                    <div className="flex gap-3 items-center mt-2 cursor-pointer">
                        <GoDotFill />
                        <p className="hover:text-sky-500 duration-300">FAQ</p>
                    </div>
                    <div className="flex gap-3 items-center mt-2 cursor-pointer">
                        <GoDotFill />
                        <p className="hover:text-sky-500 duration-300">E-waste Policy</p>
                    </div>
                    <div className="flex gap-3 items-center mt-2 cursor-pointer">
                        <GoDotFill />
                        <p className="hover:text-sky-500 duration-300">Cancelletion & Return Policy</p>
                    </div>
                </div>
            </div>
            <hr className="border border-black/50 w-[1040px] mx-auto" />
            <h1 className="text-center py-5">© 2022 All rights reserved. Reliance Retail Ltd.</h1>
        </div>
    );
};

export default Footer;