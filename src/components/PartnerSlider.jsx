"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules"
// Import Swiper styles
import 'swiper/css';

const PartnerSlider = () => {
    const singleSlide = [
        {
            img: "https://edifyelite.com.pk/images/uni-logos/3.png",
            imgS: "https://edifyelite.com.pk/images/uni-logos/49.png"
        },
        {
            img: "https://edifyelite.com.pk/images/uni-logos/3.png",
            imgS: "https://edifyelite.com.pk/images/uni-logos/49.png"
        },
        {
            img: "https://edifyelite.com.pk/images/uni-logos/3.png",
            imgS: "https://edifyelite.com.pk/images/uni-logos/49.png"
        },
        {
            img: "https://edifyelite.com.pk/images/uni-logos/3.png",
            imgS: "https://edifyelite.com.pk/images/uni-logos/49.png"
        },
        {
            img: "https://edifyelite.com.pk/images/uni-logos/3.png",
            imgS: "https://edifyelite.com.pk/images/uni-logos/49.png"
        },
        {
            img: "https://edifyelite.com.pk/images/uni-logos/3.png",
            imgS: "https://edifyelite.com.pk/images/uni-logos/49.png"
        },
        {
            img: "https://edifyelite.com.pk/images/uni-logos/3.png",
            imgS: "https://edifyelite.com.pk/images/uni-logos/49.png"
        },
        {
            img: "https://edifyelite.com.pk/images/uni-logos/3.png",
            imgS: "https://edifyelite.com.pk/images/uni-logos/49.png"
        },
        {
            img: "https://edifyelite.com.pk/images/uni-logos/3.png",
            imgS: "https://edifyelite.com.pk/images/uni-logos/49.png"
        },
        {
            img: "https://edifyelite.com.pk/images/uni-logos/3.png",
            imgS: "https://edifyelite.com.pk/images/uni-logos/49.png"
        },
        {
            img: "https://edifyelite.com.pk/images/uni-logos/3.png",
            imgS: "https://edifyelite.com.pk/images/uni-logos/49.png"
        },
        {
            img: "https://edifyelite.com.pk/images/uni-logos/3.png",
            imgS: "https://edifyelite.com.pk/images/uni-logos/49.png"
        },
        {
            img: "https://edifyelite.com.pk/images/uni-logos/3.png",
            imgS: "https://edifyelite.com.pk/images/uni-logos/49.png"
        },
        {
            img: "https://edifyelite.com.pk/images/uni-logos/3.png",
            imgS: "https://edifyelite.com.pk/images/uni-logos/49.png"
        },
        {
            img: "https://edifyelite.com.pk/images/uni-logos/3.png",
            imgS: "https://edifyelite.com.pk/images/uni-logos/49.png"
        },
    ]
    return (
        <Swiper
            spaceBetween={40}
            slidesPerView={10}
            loop

            breakpoints={{
                900: {
                    slidesPerView: "10"
                },
                768: {
                    slidesPerView: "8"
                },
                600: {
                    slidesPerView: "6"
                },
                500: {
                    slidesPerView: "5"
                },
                400: {
                    slidesPerView: "4"
                },
                0: {
                    slidesPerView: "3"
                }


            }}

            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            speed="2000"
            autoplay={{
                delay: "1000"

            }}

            modules={[Autoplay]}

        >
            {
                singleSlide.map((v, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <div className="">
                                <img src={v.img} alt="" className='py-6' />
                                <img src={v.imgS} alt="" />
                            </div>
                        </SwiperSlide>
                    )
                })

            }

        </Swiper>
    );
};

export default PartnerSlider;