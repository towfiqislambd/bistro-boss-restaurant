import SectionTitle from "../reuseableComponents/SectionTitle";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import quotes from "../assets/home/quotes.png"
import { useEffect, useState } from "react";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import useAxiosPublic from "../hooks/useAxiosPublic";

const Testimonial = () => {
    const axiosPublic = useAxiosPublic()
    const [rating, setRating] = useState([]);

    useEffect(() => {
        axiosPublic.get('/all-review')
            .then(data => {
                setRating(data.data)
            })
    }, [axiosPublic])
    return (
        <div className="container mx-auto px-5 my-16">
            <SectionTitle subHeading='What Our Clients say' heading='testimonials'></SectionTitle>
            <Swiper modules={[Navigation]} spaceBetween={30} slidesPerView={1} navigation>
                {
                    rating.map(singleRating => <SwiperSlide key={singleRating._id}>
                        <div className="text-center px-10 md:px-20 space-y-4">
                            <Rating spaceBetween='medium' className="mx-auto rating" style={{ maxWidth: 250 }} value={singleRating.rating} />
                            <img src={quotes} className="w-20 mx-auto" />
                            <p className="text-gray-500">{singleRating.details}</p>
                            <h3 className="text-xl uppercase font-medium text-yellow-600">{singleRating.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>

        </div>
    )
}

export default Testimonial;