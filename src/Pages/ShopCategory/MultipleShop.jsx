import { Link } from "react-router-dom"
import shop1 from "../../assets/Shop Category/shop1.jpg"
import shop2 from "../../assets/Shop Category/shop2.jpg"
import shop3 from "../../assets/Shop Category/shop3.jpg"
import shop4 from "../../assets/Shop Category/shop4.jpg"
import shop5 from "../../assets/Shop Category/shop5.png"
import shop6 from "../../assets/Shop Category/shop6.jpg"
import shop7 from "../../assets/Shop Category/shop7.jpg"

const MultipleShop = () => {
    return (
        <div className="max-w-[1240px] mx-auto px-2 mt-10 mb-20">
            <h1 className="my-3 text-sky-500">From all Shop.</h1>
            <div className="grid md:grid-cols-3 gap-6 items-center">
                <Link to="/fashion">
                    <div className="border hover:shadow-md duration-300 scale-100 hover:scale-95 rounded-md">
                        <img className="block mx-auto w-[350px] h-[300px]" src={shop1} alt="" />
                    </div>
                </Link>
                <Link to="/software">
                    <div className="border hover:shadow-md duration-300 scale-100 hover:scale-95 rounded-md">
                        <img className="block mx-auto w-[350px] h-[300px]" src={shop2} alt="" />
                    </div>
                </Link>
                <Link to="/pcBuilding">
                    <div className="border hover:shadow-md duration-300 scale-100 hover:scale-95 rounded-md">
                        <img className="block mx-auto w-[350px] h-[300px]" src={shop3} alt="" />
                    </div>
                </Link>
                <Link to="/frozen">
                    <div className="border hover:shadow-md duration-300 scale-100 hover:scale-95 rounded-md">
                        <img className="block mx-auto w-[350px] h-[300px]" src={shop4} alt="" />
                    </div>
                </Link>
                <Link to="/grocery">
                    <div className="border hover:shadow-md duration-300 scale-100 hover:scale-95 rounded-md">
                        <img className="block mx-auto w-[350px] h-[300px]" src={shop5} alt="" />
                    </div>
                </Link>
                <Link to="/allPhone">
                    <div className="border hover:shadow-md duration-300 scale-100 hover:scale-95 rounded-md">
                        <img className="block mx-auto w-[350px] h-[300px]" src={shop6} alt="" />
                    </div>
                </Link>
                <Link to="/electronics">
                    <div className="border hover:shadow-md duration-300 scale-100 hover:scale-95 rounded-md">
                        <img className="block mx-auto w-[350px] h-[300px]" src={shop7} alt="" />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default MultipleShop;