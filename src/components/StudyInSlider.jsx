"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';

const StudyInSlider = () => {
    const image = [

        {
            pic: "https://img.freepik.com/free-photo/orlando-lake-lucerne_649448-773.jpg?ga=GA1.1.633191682.1717133773&semt=ais_user",
            heading: "Study in UK "
        },
        {
            pic: "https://img.freepik.com/free-photo/orlando-lake-lucerne_649448-773.jpg?ga=GA1.1.633191682.1717133773&semt=ais_user",
            heading: "Study in UK "
        },
        {
            pic: "https://img.freepik.com/free-photo/orlando-lake-lucerne_649448-773.jpg?ga=GA1.1.633191682.1717133773&semt=ais_user",
            heading: "Study in UK "
        },
        {
            pic: "https://img.freepik.com/free-photo/orlando-lake-lucerne_649448-773.jpg?ga=GA1.1.633191682.1717133773&semt=ais_user",
            heading: "Study in UK "
        },
        {
            pic: "https://img.freepik.com/free-photo/orlando-lake-lucerne_649448-773.jpg?ga=GA1.1.633191682.1717133773&semt=ais_user",
            heading: "Study in UK "
        },



    ]
    return (
        <>
            <Swiper
                slidesPerView={2}
                centeredSlides={true}
                spaceBetween={20}
                // grabCursor={true}
                autoHeight={true}
                speed={2000}
                autoplay={{
                    delay: "3000"
                }}
                modules={[Autoplay, Navigation]}
                loop
                breakpoints={{

                    768: {
                        slidesPerView: "2",
                        navigation: true,
                    },
                    0: {
                        slidesPerView: "1.25",
                        navigation: false,

                    }
                }}

            >


                {
                    image.map((v, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <section key={i} className='relative md:h-full h-[278px]'>
                                    {/* <div className="absolute flex items-end p-5  h-full w-full inset-0 bg-gradient-to-t from-gray-500 from-10% via-white via-30%  to-white to-90% bottom-0 left-0 bg-opacity-30 ">
                                    </div> */}
                                    <div className=" absolute bottom-0 p-3 bg-opacity-50 rounded-2xl md:text-xl text-lg  text-white bg-gradient-to-t from-black w-full ">{v.heading}</div>
                                    <img src={v.pic} alt="" className='rounded-2xl w-full h-full  ' />

                                </section>
                            </SwiperSlide>

                        )
                    })
                }
            </Swiper >

        </>




    )
}

export default StudyInSlider