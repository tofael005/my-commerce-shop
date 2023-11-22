import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import slider1 from "../assets/slider/slider1.jpg"
import slider2 from "../assets/slider/slider2.jpg"
import slider3 from "../assets/slider/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg"
import slider4 from "../assets/slider/grocery-sale-retail-or-e-commerce-banner-ad-design-template-67720435bb809be27f46dfb1dd44c6fa_screen.jpg"

import { Autoplay, Pagination, Navigation } from 'swiper/modules';




import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div className='flex justify-between flex-col md:flex-row mt-10 items-center gap-6 max-w-[1240px] mx-auto'>

            {/* Side Nav menu  */}

            <div className='md:w-[200px] grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-1'>

                {/* <div className='dropdown'>
                    <button className='btn border px-[35px] py-3 rounded-t-md w-full shadow-md text-lg uppercase'>Fashion</button>
                    <div className='content'>
                        <Link to="/fashion"><li>Mens Collection</li></Link>
                        <li>Mens Collection</li>
                    </div>
                </div> */}

                <Link to="/fashion">
                    <p className="w-full text-center border p-2 rounded-md hover:shadow-md hover:bg-sky-400 hover:text-white cursor-pointer scale-90 hover:scale-100 duration-300">LIFE STYLE</p>
                </Link>
                <Link to="/allPhone">
                    <p className="w-full text-center border p-2 rounded-md hover:shadow-md hover:bg-sky-400 hover:text-white cursor-pointer scale-90 hover:scale-100 duration-300">GADGHET & DEVICE</p>
                </Link>
                <Link to="/electronics">
                    <p className="w-full text-center border p-2 rounded-md hover:shadow-md hover:bg-sky-400 hover:text-white cursor-pointer scale-90 hover:scale-100 duration-300">ELECTRONICS</p>
                </Link>
                <Link to="/software">
                    <p className="w-full text-center border p-2 rounded-md hover:shadow-md hover:bg-sky-400 hover:text-white cursor-pointer scale-90 hover:scale-100 duration-300">TECK & SOFTWARE</p>
                </Link>
                <Link to="/pcBuilding">
                    <p className="w-full text-center border p-2 rounded-md hover:shadow-md hover:bg-sky-400 hover:text-white cursor-pointer scale-90 hover:scale-100 duration-300">PC BUILDING</p>
                </Link>
                <Link to="/frozen">
                    <p className="w-full text-center border p-2 rounded-md hover:shadow-md hover:bg-sky-400 hover:text-white cursor-pointer scale-90 hover:scale-100 duration-300">FROZEN FOODS</p>
                </Link>
                <Link to="/grocery">
                    <p className="w-full text-center border p-2 rounded-md hover:shadow-md hover:bg-sky-400 hover:text-white cursor-pointer scale-90 hover:scale-100 duration-300">GROCERY ITEMS</p>
                </Link>
            </div>



            {/* BANNER SLIDER  */}

            <div className='md:w-[1000px] w-full'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: false,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper md:rounded object-cover md:h-[340px]"
                >
                    <SwiperSlide><img className='md:h-[340px] md:w-full h-[250px]' src={slider1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='md:h-[340px] md:w-full h-[250px]' src={slider2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='md:h-[340px] md:w-full h-[250px]' src={slider3} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='md:h-[340px] md:w-full h-[250px]' src={slider2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='md:h-[340px] md:w-full h-[250px]' src={slider4} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='md:h-[340px] md:w-full h-[250px]' src={slider1} alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;