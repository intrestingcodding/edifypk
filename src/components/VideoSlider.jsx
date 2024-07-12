"use client"
import React from 'react'
import { Swiper as SwiperComponent } from 'swiper/react'
import { SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCoverflow } from "swiper/modules"
import "swiper/css/effect-coverflow"


const VideoSlider = () => {
    return (
        <div>
            <SwiperComponent
                spaceBetween={20}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                loop
                speed="3000"
                autoplay={{
                    delay: "2000",
                    disableOnInteraction: false,
                    waitForTransition: true,
                    pauseOnMouseEnter: true,

                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 45,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                breakpoints={{
                    1120: {
                        slidesPerView: "3"
                    },
                    768: {
                        slidesPerView: "2"
                    },
                    0: {
                        slidesPerView: "1"
                    }
                }}

                modules={[Autoplay, EffectCoverflow]}


            >


                <SwiperSlide>
                    <div className="rounded-2xl w-full">
                        <iframe width="559" height="327" src="https://www.youtube.com/embed/F773Y3Nzoj0" title="Good news for students | Change in policies | New UK Prime minister | Study in UK" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="rounded-2xl w-full">
                        <iframe width="559" height="327" src="https://www.youtube.com/embed/F773Y3Nzoj0" title="Good news for students | Change in policies | New UK Prime minister | Study in UK" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="rounded-2xl w-full">
                        <iframe width="559" height="327" src="https://www.youtube.com/embed/F773Y3Nzoj0" title="Good news for students | Change in policies | New UK Prime minister | Study in UK" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="rounded-2xl w-full">
                        <iframe width="559" height="327" src="https://www.youtube.com/embed/F773Y3Nzoj0" title="Good news for students | Change in policies | New UK Prime minister | Study in UK" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="rounded-2xl w-full">
                        <iframe width="559" height="327" src="https://www.youtube.com/embed/F773Y3Nzoj0" title="Good news for students | Change in policies | New UK Prime minister | Study in UK" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                </SwiperSlide>






            </SwiperComponent>
        </div >
    )
}

export default VideoSlider