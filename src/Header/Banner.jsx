import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import slider1 from "../assets/slider/slider1.jpg"
import slider2 from "../assets/slider/slider2.jpg"

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='flex justify-between flex-col md:flex-row mt-3 items-center gap-6 max-w-[1240px] mx-auto'>

            <div className='md:w-[400px]'>
                <ul>
                    <li>Smart Watch</li>
                    <li>Smart Phone</li>
                    <li>Laptop</li>
                    <li>Tablet</li>
                    <li>Monitor</li>
                    <li></li>
                    <li>Smart Watch</li>
                    <li>Smart Watch</li>
                    <li>Smart Watch</li>
                    <li>Smart Watch</li>
                </ul>
            </div>



            <div className='md:w-[800px] w-full'>
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
                    className="mySwiper rounded object-cover"
                >
                    <SwiperSlide><img className='md:h-[450px] md:w-full h-[300px]' src={slider1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='md:h-[450px] md:w-full h-[300px]' src={slider2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='md:h-[450px] md:w-full h-[300px]' src={slider1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='md:h-[450px] md:w-full h-[300px]' src={slider2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='md:h-[450px] md:w-full h-[300px]' src={slider1} alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;