import SectionTitle from "../reuseableComponents/SectionTitle";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from "../assets/home/slide1.jpg"
import slide2 from "../assets/home/slide2.jpg"
import slide3 from "../assets/home/slide3.jpg"
import slide4 from "../assets/home/slide4.jpg"
import slide5 from "../assets/home/slide5.jpg"
import slide6 from "../assets/home/slide3.jpg"

const Menu = () => {
    return (
        <div className="my-16 container mx-auto px-5">
            <SectionTitle subHeading='From 11:00am to 10:00pm' heading='order online'></SectionTitle>
            <div className="">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 }
                    }}
                    className="h-[410px] custom-swiper"
                >
                    <SwiperSlide className="relative">
                        <img src={slide1} alt="slide1" className="w-full shadow-lg border h-[360px] rounded-lg" />
                        <h4 className="cinzel text-white font-bold text-2xl absolute bottom-16 left-1/3">Salads</h4>
                    </SwiperSlide>
                    <SwiperSlide className="relative">
                        <img src={slide2} alt="slide1" className="w-full shadow-lg border h-[360px] rounded-lg" />
                        <h4 className="cinzel text-white font-bold text-2xl absolute bottom-16 left-1/3">Soups</h4>
                    </SwiperSlide>
                    <SwiperSlide className="relative">
                        <img src={slide3} alt="slide1" className="w-full shadow-lg border h-[360px] rounded-lg" />
                        <h4 className="cinzel text-white font-bold text-2xl absolute bottom-16 left-1/3">Pizzas</h4>
                    </SwiperSlide>
                    <SwiperSlide className="relative">
                        <img src={slide4} alt="slide1" className="w-full shadow-lg border h-[360px] rounded-lg" />
                        <h4 className="cinzel text-white font-bold text-2xl absolute bottom-16 left-1/3">Desserts</h4>
                    </SwiperSlide>
                    <SwiperSlide className="relative">
                        <img src={slide5} alt="slide1" className="w-full h-[360px] rounded-lg" />
                        <h4 className="cinzel text-white font-bold text-2xl absolute bottom-16 left-1/4">Vegetable</h4>
                    </SwiperSlide>
                    <SwiperSlide className="relative">
                        <img src={slide6} alt="slide1" className="w-full shadow-lg border h-[360px] rounded-lg" />
                        <h4 className="cinzel text-white font-bold text-2xl absolute bottom-16 left-1/3">Corns</h4>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Menu;