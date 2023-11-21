import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import shop1 from "../../assets/Shop Category/shop1.jpg"
import shop2 from "../../assets/Shop Category/shop2.jpg"
import shop3 from "../../assets/Shop Category/shop3.jpg"
import shop4 from "../../assets/Shop Category/shop4.jpg"
import shop5 from "../../assets/Shop Category/shop5.png"
import shop6 from "../../assets/Shop Category/shop6.jpg"
import shop7 from "../../assets/Shop Category/shop7.jpg"

const AllShop = () => {
    return (
        <div className="max-w-[1240px] mx-auto px-2 mb-10">
            <div className="flex justify-between items-center my-3">
                <h1>Shop From <span>Top Categories</span></h1>
                <Link to="/multiple-shop">
                    <div className="flex gap-2 items-center cursor-pointer hover:bg-[#008ECC] duration-300 hover:text-white px-3 rounded">
                        <h1>View All</h1>
                        <IoIosArrowForward />
                    </div>
                </Link>
            </div>
            <hr className="border-[#008ECC]" />


            {/* SHOP CATEGORY  */}
            <div className="grid md:grid-cols-7 items-center gap-5 mt-10">
                <div>
                    <div className="p-4 bg-slate-100 rounded-md">
                        <img className="rounded-full border block mx-auto w-[100px] h-[100px]" src={shop1} alt="" />
                    </div>
                    <h1>Life Syle & Fashion</h1>
                </div>
                <div>
                    <div className="p-4 bg-slate-100 rounded-md">
                        <img className="rounded-full border block mx-auto w-[100px] h-[100px]" src={shop6} alt="" />
                    </div>
                    <h1>Gadghet & Device</h1>
                </div>
                <div>
                    <div className="p-4 bg-slate-100 rounded-md">
                        <img className="rounded-full border block mx-auto w-[100px] h-[100px]" src={shop7} alt="" />
                    </div>
                    <h1>Electronics</h1>
                </div>
                <div>
                    <div className="p-4 bg-slate-100 rounded-md">
                        <img className="rounded-full border block mx-auto w-[100px] h-[100px]" src={shop2} alt="" />
                    </div>
                    <h1>Teck & Software</h1>
                </div>
                <div>
                    <div className="p-4 bg-slate-100 rounded-md">
                        <img className="rounded-full border block mx-auto w-[100px] h-[100px]" src={shop3} alt="" />
                    </div>
                    <h1>PC Building</h1>
                </div>
                <div>
                    <div className="p-4 bg-slate-100 rounded-md">
                        <img className="rounded-full border block mx-auto w-[100px] h-[100px]" src={shop4} alt="" />
                    </div>
                    <h1>Frozen Food</h1>
                </div>
                <div>
                    <div className="p-4 bg-slate-100 rounded-md">
                        <img className="rounded-full border block mx-auto w-[100px] h-[100px]" src={shop5} alt="" />
                    </div>
                    <h1>Grocery Items</h1>
                </div>
            </div>
        </div>
    );
};

export default AllShop;