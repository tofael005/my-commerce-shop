
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import banner1 from "../assets/advertize/e-commerce-banner.jpg"
import banner2 from "../assets/advertize/ecommerce-banner.jpg"
import banner3 from "../assets/advertize/ecommerce-website-banner-template-presents-260nw-2252124451.webp"
import banner4 from "../assets/advertize/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg"
import banner5 from "../assets/advertize/e-commerce-banner.jpg"
import banner6 from "../assets/advertize/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg"

const Advertize = () => {



    return (
        <div className="mx-w-[1240px] mx-auto md:mt-20 mt-10 mb-10 md:mb-20">
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
                className="mySwiper md:w-[1240px] mx-auto"
            >
                <SwiperSlide><img className='w-full h-[150px]' src={banner1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[150px]' src={banner2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[150px]' src={banner3} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[150px]' src={banner4} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[150px]' src={banner5} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[150px]' src={banner6} alt="" /></SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default Advertize;