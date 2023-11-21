import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import brand1 from "../../assets/Top Electronics/iphone.png"
import brand2 from "../../assets/Top Electronics/mi.png"
import brand3 from "../../assets/Top Electronics/realme.png"



const TopElectronics = () => {
    return (
        <div className="max-w-[1240px] mx-auto mt-10 px-2 mb-16">
            <div className="flex justify-between items-center my-3">
                <h1>Top <span className="text-[#008ECC] font-bold">Electronics Brand</span></h1>
                <Link to="/electronics">
                    <div className="flex gap-2 items-center cursor-pointer hover:bg-[#008ECC] duration-300 hover:text-white px-3 rounded">
                        <h1>View All</h1>
                        <IoIosArrowForward />
                    </div>
                </Link>
            </div>
            <hr className="border-[#008ECC]" />


            {/* TOP ELECTRONICS  */}

            <div className="grid md:grid-cols-3 gap-4 items-center mt-10">
                <div className="rounded-xl">
                    <Link to="allPhone">
                        <img className="scale-100 hover:scale-95 duration-300" src={brand1} alt="" />
                    </Link>
                </div>
                <div className="rounded-xl">
                    <Link to="/allPhone">
                        <img className="scale-100 hover:scale-95 duration-300" src={brand2} alt="" />
                    </Link>
                </div>
                <div className="rounded-xl">
                    <Link to="/allPhone">
                        <img className="scale-100 hover:scale-95 duration-300" src={brand3} alt="" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopElectronics;