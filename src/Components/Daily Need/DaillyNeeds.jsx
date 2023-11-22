import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import image1 from "../../assets/Dailly need/grocery.png"
import image2 from "../../assets/Dailly need/vegetables.jpeg"
import image3 from "../../assets/Dailly need/fruits.jpg"
import image4 from "../../assets/Dailly need/fish.jpeg"
import image5 from "../../assets/Dailly need/chicken.jpg"
import image6 from "../../assets/Dailly need/beaf.jpeg"
import image7 from "../../assets/Dailly need/dessert.jpg"

const DaillyNeeds = () => {
    return (
        <div className="max-w-[1240px] mx-auto px-2 mt-10 mb-20">
            <div className="flex justify-between items-center my-3">
                <h1>Dailly <span className="text-[#008ECC] font-bold">Needs</span></h1>
                <Link to="/grocery">
                    <div className="flex gap-2 items-center cursor-pointer hover:bg-[#008ECC] duration-300 hover:text-white px-3 rounded">
                        <h1>View All</h1>
                        <IoIosArrowForward />
                    </div>
                </Link>
            </div>
            <hr className="border-[#008ECC]" />

            {/* DAILLY NEEDS  */}

            <div className="grid md:grid-cols-7 gap-4 mt-10 items-center">
                <div className="rounded-md shadow border border-[#008ECC]">
                    <div className="p-3 bg-slate-100 rounded-t-md">
                        <img className="rounded-md w-[200px] h-[140px] block mx-auto" src={image1} alt="" />
                    </div>
                    <div className="text-center cursor-pointer">
                        <Link to="/grocery">
                            <h1 className="text-center  hover:bg-[#008ECC] hover:text-white duration-300 rounded-b-md p-2">Grocery Needs</h1>
                        </Link>
                    </div>
                </div>
                <div className="rounded-md shadow">
                    <div className="p-3 bg-slate-100 rounded-t-md">
                        <img className="rounded-md w-[200px] h-[140px] block mx-auto" src={image2} alt="" />
                    </div>
                    <div className="text-center cursor-pointer">
                        <Link to="/grocery">
                            <h1 className="text-center  hover:bg-[#008ECC] hover:text-white duration-300 rounded-b-md p-2">Vagetable</h1>
                        </Link>
                    </div>
                </div>
                <div className="rounded-md shadow">
                    <div className="p-3 bg-slate-100 rounded-t-md">
                        <img className="rounded-md w-[200px] h-[140px] block mx-auto" src={image3} alt="" />
                    </div>
                    <div className="text-center cursor-pointer">
                        <Link to="/grocery">
                            <h1 className="text-center  hover:bg-[#008ECC] hover:text-white duration-300 rounded-b-md p-2">Fruits</h1>
                        </Link>
                    </div>
                </div>
                <div className="rounded-md shadow">
                    <div className="p-3 bg-slate-100 rounded-t-md">
                        <img className="rounded-md w-[200px] h-[140px] block mx-auto" src={image4} alt="" />
                    </div>
                    <div className="text-center cursor-pointer">
                        <Link to="/grocery">
                            <h1 className="text-center  hover:bg-[#008ECC] hover:text-white duration-300 rounded-b-md p-2">Fish</h1>
                        </Link>
                    </div>
                </div>
                <div className="rounded-md shadow">
                    <div className="p-3 bg-slate-100 rounded-t-md">
                        <img className="rounded-md w-[200px] h-[140px] block mx-auto" src={image5} alt="" />
                    </div>
                    <div className="text-center cursor-pointer">
                        <Link to="/grocery">
                            <h1 className="text-center  hover:bg-[#008ECC] hover:text-white duration-300 rounded-b-md p-2">Broilar Chicken</h1>
                        </Link>
                    </div>
                </div>
                <div className="rounded-md shadow">
                    <div className="p-3 bg-slate-100 rounded-t-md">
                        <img className="rounded-md w-[200px] h-[140px] block mx-auto" src={image6} alt="" />
                    </div>
                    <div className="text-center cursor-pointer">
                        <Link to="/grocery">
                            <h1 className="text-center  hover:bg-[#008ECC] hover:text-white duration-300 rounded-b-md p-2">Beaf Meat</h1>
                        </Link>
                    </div>
                </div>
                <div className="rounded-md shadow">
                    <div className="p-3 bg-slate-100 rounded-t-md">
                        <img className="rounded-md w-[200px] h-[140px] block mx-auto" src={image7} alt="" />
                    </div>
                    <div className="text-center cursor-pointer">
                        <Link to="/grocery">
                            <h1 className="text-center  hover:bg-[#008ECC] hover:text-white duration-300 rounded-b-md p-2">Deserts</h1>
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default DaillyNeeds;