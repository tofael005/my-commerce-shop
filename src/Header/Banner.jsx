import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import slider1 from "../assets/slider/slider1.jpg"
import slider2 from "../assets/slider/slider2.jpg"

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div className='flex justify-between flex-col md:flex-row mt-10 items-center gap-6 max-w-[1240px] mx-auto'>

            {/* Side Nav menu  */}

            <div className='md:w-[300px] grid grid-cols-2 md:grid-cols-1 gap-6 md:gap-1'>
                <div className="relative w-[180px] md:w-full">
                    <select className="w-[180px] md:w-full p-2 hover:bg-[#008ECC] duration-300 hover:text-white cursor-pointer text-gray-500 bg-white border rounded-md">
                        <option className='cursor-pointer'>Fasion</option>
                        <option className='cursor-pointer'>Mens Collection</option>
                        <option className='cursor-pointer'>Womens Collection</option>
                        <option className='cursor-pointer'>Kids Collection</option>
                    </select>
                </div>
                <div className="relative w-[180px] md:w-full">
                    <select className="w-[180px] md:w-full p-2 hover:bg-[#008ECC] duration-300 hover:text-white cursor-pointer text-gray-500 bg-white border rounded-md">
                        <option>Smart Gadget</option>
                        <option>Smart Watch</option>
                        <option>Smart Phone</option>
                        <option>Tablet</option>
                    </select>
                </div>
                <div className="relative w-[180px] md:w-full">
                    <select className="w-[180px] md:w-full p-2 hover:bg-[#008ECC] duration-300 hover:text-white cursor-pointer text-gray-500 bg-white border rounded-md">
                        <option>Monitor</option>
                        <option>Laptop</option>
                        <option>CPO</option>
                        <option>Keyboard</option>
                        <option>Mouse</option>
                    </select>
                </div>
                <div className="relative w-[180px] md:w-full">
                    <select className="w-[180px] md:w-full p-2 hover:bg-[#008ECC] duration-300 hover:text-white cursor-pointer text-gray-500 bg-white border rounded-md">
                        <option>Wifi-Router</option>
                        <option>PC</option>
                        <option>Desktop</option>
                        <option>Motherboard</option>
                        <option>Cable</option>
                    </select>
                </div>
                <div className="relative w-[180px] md:w-full">
                    <select className="w-[180px] md:w-full p-2 hover:bg-[#008ECC] duration-300 hover:text-white cursor-pointer text-gray-500 bg-white border rounded-md">
                        <option>Softwer</option>
                        <option>PhotoShop</option>
                        <option>Illustrator</option>
                        <option>Figma</option>
                        <option>Premiar Pro</option>
                    </select>
                </div>
                <div className="relative w-[180px] md:w-full">
                    <select className="w-[180px] md:w-full p-2 hover:bg-[#008ECC] duration-300 hover:text-white cursor-pointer text-gray-500 bg-white border rounded-md">
                        <option>Electronics</option>
                        <option>Fredge</option>
                    </select>
                </div>
                <div className="relative w-[180px] md:w-full">
                    <select className="w-[180px] md:w-full p-2 hover:bg-[#008ECC] duration-300 hover:text-white cursor-pointer text-gray-500 bg-white border rounded-md">
                        <option>Grocery</option>
                        <option>Fish</option>
                        <option>Vegitable</option>
                    </select>
                </div>
                <div className="relative w-[180px] md:w-full">
                    <select className="w-[180px] md:w-full p-2 hover:bg-[#008ECC] duration-300 hover:text-white cursor-pointer text-gray-500 bg-white border rounded-md">
                        <option>Frogen Food</option>
                        <option>Fish</option>
                        <option>Beaf</option>
                        <option>Chicken</option>
                    </select>
                </div>
            </div>



            {/* BANNER SLIDER  */}

            <div className='md:w-[900px] w-full'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper md:rounded object-cover md:h-[340px]"
                >
                    <SwiperSlide><img className='md:h-[340px] md:w-full h-[250px]' src={slider1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='md:h-[340px] md:w-full h-[250px]' src={slider2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='md:h-[340px] md:w-full h-[250px]' src={slider1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='md:h-[340px] md:w-full h-[250px]' src={slider2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='md:h-[340px] md:w-full h-[250px]' src={slider1} alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;