import { IoIosArrowForward } from "react-icons/io";

const PhoneHome = () => {
    return (
        <div className="max-w-[1240px] mx-auto px-3 mt-16">
           <div className="flex justify-between items-center my-3">
                <h1>Best deal on the <span className="text-[#008ECC]">Smartphones</span></h1>
                <div className="flex gap-2 items-center cursor-pointer">
                    <h1>View All</h1>
                    <IoIosArrowForward />
                </div>
           </div>
           <hr className="border-[#008ECC]" />
        </div>
    );
};

export default PhoneHome;