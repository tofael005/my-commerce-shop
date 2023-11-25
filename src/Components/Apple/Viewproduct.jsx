import Image from "../../assets/Phone Brand/14-pro-max.webp"

import { FaStar } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";
import { IoBookmarkOutline } from "react-icons/io5";

import { FaPlus, FaMinus } from "react-icons/fa";

const Viewproduct = () => {
    return (
        <div className="max-w-[1240px] mx-auto mt-10 px-2">
            <h1>Visi product details</h1>
            <div className="flex flex-col md:flex-row gap-4">
                <img className="w-[600px]" src={Image} alt="" />
                <div>
                    <h1 className="text-4xl font-bold mb-8 px-5">Iphone 14 Pro Max</h1>
                    <div>
                        <div className="flex gap-5 items-center text-sm">
                            <div className="flex gap-2 items-center border-r-2 px-5">
                                <span className="flex items-center text-orange-500">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </span>
                                <p className="text-sky-500">(19990) Ratings</p>
                            </div>
                            <p className="text-sky-500">124 Answered Questions</p>
                        </div>
                        <div className="flex items-center gap-3 px-5 mt-2">
                            <h1>Brand: <span className="text-sky-500">Apple</span></h1>
                            <div className="flex gap-3 items-center">
                                <IoMdShare className="cursor-pointer hover:text-sky-500 duration-300" />
                                <IoBookmarkOutline className="cursor-pointer hover:text-sky-500 duration-300" />
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 w-[390px] ml-5" />


                    <div className="px-5">
                        <h1 className="text-4xl">BDT <span className="font-semibold">1,18,000/-</span></h1>
                        <p className="line-through">BDT 1,56,000/-</p>
                    </div>


                    <hr className="my-6 w-[390px] ml-5" />


                    <h1 className="px-5">Color:  <span className="font-bold">Black</span></h1>
                    <h1 className="px-5">Storage:  <span className="font-bold">512GB</span></h1>



                    <hr className="my-6 w-[390px] ml-5" />


                    <div className="flex gap-6 items-center px-5">
                        <p>Quantity:</p>
                        <span className="flex items-center gap-5">
                            <FaMinus />
                            <p>1</p>
                            <FaPlus />
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Viewproduct;