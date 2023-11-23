import banner1 from "../../../assets/fashion/girls.webp"
import banner2 from "../../../assets/fashion/men-style-sale-promotion-banner-template_99493-77.avif"
import banner3 from "../../../assets/fashion/kidsBuyingGuide.webp"
import { Link } from "react-router-dom";

const AllFashion = () => {
    return (
        <div className="max-w-[1240px] mx-auto mt-10 px-2">
            <div className="grid md:grid-cols-3 gap-4">
                <Link to="/girls">
                    <div className="mb-10 shadow-md rounded-md scale-100 hover:scale-95 duration-300">
                        <img className="rounded-md w-full h-[200px]" src={banner1} alt="" />
                        <div className="w-full md:-mt-[200px] rounded-md duration-300 -mt-[200px] object-cover h-[200px] md:h-[200px] flex  justify-center items-center 
             bg-transparent backdrop-brightness-100 hover:bg-black/60 text-transparent font-bold text-2xl hover:text-sky-300">
                            <span>Womens Collection</span>
                        </div>
                    </div>
                </Link>

                <Link to="/mens">
                    <div className="mb-10 shadow-md rounded-md scale-100 hover:scale-95 duration-300">
                        <img className="rounded-md w-full h-[200px]" src={banner2} alt="" />
                        <div className="w-full md:-mt-[200px] rounded-md duration-300 -mt-[200px] object-cover h-[200px] md:h-[200px] flex  justify-center items-center 
             bg-transparent backdrop-brightness-100 hover:bg-black/60 text-transparent font-bold text-2xl hover:text-sky-300">
                            <span>Mens Collection</span>
                        </div>
                    </div>
                </Link>

                <Link to="/kids">
                    <div className="mb-10 shadow-md rounded-md scale-100 hover:scale-95 duration-300">
                        <img className="rounded-md w-full h-[200px]" src={banner3} alt="" />
                        <div className="w-full md:-mt-[200px] rounded-md duration-300 -mt-[200px] object-cover h-[200px] md:h-[200px] flex  justify-center items-center 
             bg-transparent backdrop-brightness-100 hover:bg-black/60 text-transparent font-bold text-2xl hover:text-sky-300">
                            <span>Kids Collection</span>
                        </div>
                    </div>
                </Link>

            </div>
            <hr className="border-2 border-sky-400 w-[100px] block mx-auto mt-6 mb-6"/>
        </div>
    );
};

export default AllFashion;