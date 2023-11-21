import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdCallEnd } from "react-icons/md";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";


const NavBar = () => {
    const [toggle, setToggle] = useState()
    return (
        <div className="max-w-[1240px] mx-auto p-3">
            <div className="md:flex justify-between items-center md:mb-3 -mb-10 text-transparent md:text-black font-light">
                <h1 className="md:text-[#008ECC]">Welcome to My Commerce</h1>
                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2 md:border-r-2 md:border-[#008ECC] pr-4">
                        <TbTruckDelivery className="md:text-[#008ECC]" />
                        <h1>Track your order</h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <MdCallEnd className="md:text-[#008ECC]" />
                        <h1>+880 1966406795</h1>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div className="md:w-[400]">
                    <Link to="/"> <img className="w-[200px]" src={logo} alt="" /></Link>
                </div>

                <span className='md:hidden'>
                    {
                        toggle ? <AiOutlineClose className='text-2xl' onClick={() => setToggle(!toggle)} /> : <GiHamburgerMenu className="text-2xl" onClick={() => setToggle(!toggle)} />
                    }
                </span>

                <div className={`flex md:w-[800px] items-center duration-300 flex-col py-4 md:p-0 text-white md:text-gray-900 bg-opacity-100 top-20 bg-black md:bg-transparent w-full text-center md:flex-row gap-4 absolute md:static z-50 ${toggle ? "left-0" : "-left-full"}`}>
                    <div className="md:w-full w-full right-2 px-2">
                        <input className="w-full relative p-3 bg-transparent rounded-md border border-sky-300" type="search" name="" id="" placeholder="Search essentials" />
                        <FiSearch className=" cursor-pointer absolute md:left-[1068px] text-white md:text-black md:top-16 left-[350px] top-9" />
                    </div>
                    <Link to="/login">
                        <div className="flex items-center gap-2 cursor-pointer">
                            <CgProfile className="md:text-3xl text-[#008ECC]" />
                            <input className=" hover:text-white rounded duration-300 hover:bg-[#008ECC] p-2" type="button" value="Sign In" />
                        </div>
                    </Link>
                    <Link to="/addtocart">
                        <div className="flex gap-2 cursor-pointer items-center">
                            <FiShoppingCart className="md:text-2xl text-[#008ECC] cursor-pointer" />
                            <h1 className="hover:text-white duration-300 rounded hover:bg-[#008ECC] p-2">Cart</h1>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;