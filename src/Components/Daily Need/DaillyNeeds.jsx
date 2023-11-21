import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";


const DaillyNeeds = () => {
    return (
        <div className="max-w-[1240px] mx-auto px-2 mt-10 mb-10">
            <div className="flex justify-between items-center my-3">
                <h1>Dailly <span className="text-[#008ECC] font-bold">Needs</span></h1>
                <Link to="/allPhone">
                    <div className="flex gap-2 items-center cursor-pointer hover:bg-[#008ECC] duration-300 hover:text-white px-3 rounded">
                        <h1>View All</h1>
                        <IoIosArrowForward />
                    </div>
                </Link>
            </div>
            <hr className="border-[#008ECC]" />
        </div>
    );
};

export default DaillyNeeds;