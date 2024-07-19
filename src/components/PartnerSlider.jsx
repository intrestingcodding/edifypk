"use client"
import { motion } from "framer-motion";
const PartnerSlider = () => {
    const singleSlide = [
        {
            imgS: "/images/uni-logos/5.png"
        },
        {
            imgS: "/images/uni-logos/6.png"
        },
        {
            imgS: "/images/uni-logos/7.png"
        },
        {
            imgS: "/images/uni-logos/8.png"
        },
        {
            imgS: "/images/uni-logos/9.png"
        },
        {
            imgS: "/images/uni-logos/10.png"
        },
        {
            imgS: "/images/uni-logos/11.png"
        },
        {
            imgS: "/images/uni-logos/12.png"
        },
        {
            imgS: "/images/uni-logos/13.png"
        },
        {
            imgS: "/images/uni-logos/14.png"
        },
        {
            imgS: "/images/uni-logos/15.png"
        },
        {
            imgS: "/images/uni-logos/16.png"
        },
        {
            imgS: "/images/uni-logos/17.png"
        },
        {
            imgS: "/images/uni-logos/18.png"
        },
        {
            imgS: "/images/uni-logos/19.png"
        },
        {
            imgS: "/images/uni-logos/20.png"
        },
        {
            imgS: "/images/uni-logos/21.png"
        },

        {
            imgS: "/images/uni-logos/22.png"
        },
        {
            imgS: "/images/uni-logos/25.png"
        },
        {
            imgS: "/images/uni-logos/26.png"
        },
        {
            imgS: "/images/uni-logos/27.png"
        },
        {
            imgS: "/images/uni-logos/28.png"
        },
        {
            imgS: "/images/uni-logos/32.png"
        },
        {
            imgS: "/images/uni-logos/37.png"
        },
        {
            imgS: "/images/uni-logos/39.png"
        },
        {
            imgS: "/images/uni-logos/40.png"
        },
        {
            imgS: "/images/uni-logos/41.png"
        },
        {
            imgS: "/images/uni-logos/42.png"
        },
        {
            imgS: "/images/uni-logos/44.png"
        },
        {
            imgS: "/images/uni-logos/45.png"
        },
        {
            imgS: "/images/uni-logos/46.png"
        },
        {
            imgS: "/images/uni-logos/48.png"
        },
    ]

    return (


        <div className="  px-4 overflow-hidden flex ">
            <motion.div
                initial={{ translateX: 0 }}
                animate={{ translateX: "-100%" }}
                transition={{ duration: 80, ease: "linear", repeat: Infinity, repeatType: "loop" }}
                className=" flex  gap-4 flex-none  ">
                {
                    singleSlide.map((v, i) => {
                        return (
                            <section key={i} className="p-4 ">
                                <img src={v.imgS} alt=""
                                    className="flex-none w-24 " />
                            </section>
                        )
                    })

                }

            </motion.div>
            <motion.div
                initial={{ translateX: 0 }}
                animate={{ translateX: "-100%" }}
                transition={{ duration: 80, ease: "linear", repeat: Infinity, repeatType: "loop" }}
                className=" flex  gap-4 flex-none  ">
                {
                    singleSlide.map((v, i) => {
                        return (
                            <section key={i} className=" p-4">
                                <img src={v.imgS} alt=""
                                    className="flex-none w-24 " />
                            </section>
                        )
                    })

                }

            </motion.div>

        </div>

    );
};

export default PartnerSlider;