import { IoIosArrowForward } from "react-icons/io";
import image1 from "../../../assets/HomePhone/image1.png"
import image2 from "../../../assets/HomePhone/image2.png"
import image3 from "../../../assets/HomePhone/image3.png"
import image4 from "../../../assets/HomePhone/image4.png"
import image5 from "../../../assets/HomePhone/image5.png"
import { Link } from "react-router-dom";

const PhoneHome = () => {
    return (
        <div className="max-w-[1240px] mx-auto px-3 mt-16">
            <div className="flex justify-between items-center my-3">
                <h1>Best deal on the <span className="text-[#008ECC] font-bold">Smartphones</span></h1>
                <Link to="/allPhone">
                    <div className="flex gap-2 items-center cursor-pointer hover:bg-[#008ECC] duration-300 hover:text-white px-3 rounded">
                        <h1>View All</h1>
                        <IoIosArrowForward />
                    </div>
                </Link>
            </div>
            <hr className="border-[#008ECC]" />

            <div className="grid md:grid-cols-5 gap-4 items-center my-10">
                <div className="shadow-md bg-slate-100 relative rounded-md">
                    <img className="block mx-auto h-[160px]" src={image1} alt="" />
                    <h1 className="bg-white p-3">Galaxy M13 (4GB) | (64GB)</h1>
                    <span className="flex gap-4 py-1 px-3 items-center bg-white">
                        <p>BDT: 10,499</p>
                        <p className="line-through">BDT: 14,999</p>
                    </span>
                    <hr className="" />
                    <p className="text-[#249B3E] px-3 py-3 bg-white rounded-b-md">Save: BDT 4,500</p>
                    <p className="bg-[#008ECC] absolute -mt-[289px] rounded-s-md text-sm text-white p-2">56% <br /> OFF</p>
                </div>
                <div className="shadow-md bg-slate-100 relative rounded-md border border-[#008ECC]">
                    <img className="block mx-auto h-[160px]" src={image2} alt="" />
                    <h1 className="bg-white p-3">Galaxy M53 (4GB | 64 GB )</h1>
                    <span className="flex gap-4 py-1 px-3 items-center bg-white">
                        <p>BDT: 31,999</p>
                        <p className="line-through">BDT: 40,999</p>
                    </span>
                    <hr className="" />
                    <p className="text-[#249B3E] px-3 py-3 bg-white rounded-b-md">Save: BDT 9,000</p>
                    <p className="bg-[#008ECC] absolute -mt-[289px] rounded-s-md text-sm text-white p-2">56% <br /> OFF</p>
                </div>
                <div className="shadow-md bg-slate-100 relative rounded-md">
                    <img className="block mx-auto h-[160px]" src={image3} alt="" />
                    <h1 className="bg-white p-3">Galaxy S22 Ultra</h1>
                    <span className="flex gap-4 py-1 px-3 items-center bg-white">
                        <p>BDT: 32,999</p>
                        <p className="line-through">BDT: 74,999</p>
                    </span>
                    <hr className="" />
                    <p className="text-[#249B3E] px-3 py-3 bg-white rounded-b-md">Save: BDT 32,999</p>
                    <p className="bg-[#008ECC] absolute -mt-[289px] rounded-s-md text-sm text-white p-2">56% <br /> OFF</p>
                </div>
                <div className="shadow-md bg-slate-100 relative rounded-md">
                    <img className="block mx-auto h-[160px]" src={image4} alt="" />
                    <h1 className="bg-white p-3">Galaxy M33 (4GB | 64 GB )</h1>
                    <span className="flex gap-4 py-1 px-3 items-center bg-white">
                        <p>BDT: 16,999</p>
                        <p className="line-through">BDT: 24,999</p>
                    </span>
                    <hr className="" />
                    <p className="text-[#249B3E] px-3 py-3 bg-white rounded-b-md">Save: BDT 8,000</p>
                    <p className="bg-[#008ECC] absolute -mt-[289px] rounded-s-md text-sm text-white p-2">56% <br /> OFF</p>
                </div>
                <div className="shadow-md bg-slate-100 relative rounded-md">
                    <img className="block mx-auto h-[160px]" src={image5} alt="" />
                    <h1 className="bg-white p-3">Galaxy S22 Ultra</h1>
                    <span className="flex gap-4 py-1 px-3 items-center bg-white">
                        <p>BDT: 67,999</p>
                        <p className="line-through">BDT: 85,999</p>
                    </span>
                    <hr className="" />
                    <p className="text-[#249B3E] px-3 py-3 bg-white rounded-b-md">Save: BDT 18,000</p>
                    <p className="bg-[#008ECC] absolute -mt-[289px] rounded-s-md text-sm text-white p-2">56% <br /> OFF</p>
                </div>
            </div>
        </div>
    );
};

export default PhoneHome;