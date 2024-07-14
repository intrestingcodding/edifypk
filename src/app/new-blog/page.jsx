"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
const page = () => {
    var pathName = usePathname()
    const sidebar = [
        {
            how: "HOW TO",
            dis: "How to the perfect Email-- Tips and Tricks"
        },
        {
            how: "PRODUCT",
            dis: "How to the perfect Email-- Tips and Tricks"
        },
        {
            how: "PRODUCT",
            dis: "How to the perfect Email-- Tips and Tricks"
        },
        {
            how: "PRODUCT",
            dis: "How to the perfect Email-- Tips and Tricks"
        },
    ]
    var blogs = [
        {
            span: "COMPANY",
            title: "How Trvel Writes And Vlogger somting any thing and you like to Writes",
            image: "https://img.freepik.com/free-photo/group-students-doing-project_23-2148166343.jpg?t=st=1719885490~exp=1719889090~hmac=5629b664766b603e39beecc122112b157e183c9efb84394939e31f0005835225&w=740"
        },
        {
            span: "COMPANY",
            title: "How Trvel Writes And Vlogger somting any thing and you like to Writes",
            image: "https://img.freepik.com/free-photo/group-students-doing-project_23-2148166343.jpg?t=st=1719885490~exp=1719889090~hmac=5629b664766b603e39beecc122112b157e183c9efb84394939e31f0005835225&w=740"
        },
        {
            span: "COMPANY",
            title: "How Trvel Writes And Vlogger somting any thing and you like to Writes",
            image: "https://img.freepik.com/free-photo/group-students-doing-project_23-2148166343.jpg?t=st=1719885490~exp=1719889090~hmac=5629b664766b603e39beecc122112b157e183c9efb84394939e31f0005835225&w=740"
        },

    ]
    return (
        <div>
            <div className="grid lg:grid-cols-3 max-w-6xl mx-auto px-4 py-16 gap-5">

                <div className="  lg:col-span-2 border shadow-xl rounded-2xl overflow-hidden">
                    <div className="mb-3">
                        <img src="https://img.freepik.com/free-photo/group-students-doing-project_23-2148166343.jpg?t=st=1719885490~exp=1719889090~hmac=5629b664766b603e39beecc122112b157e183c9efb84394939e31f0005835225&w=740" alt="" />
                    </div>
                    <div className="p-5 pb-8">
                        <span className='text-gray-500 block mb-2'>Company</span>
                        <h1 className='md:text-2xl sm:text-xl text-lg font-medium'>How Trvel Writes And Vlogger somting any thing and you like to Writes</h1>
                    </div>

                </div>

                <div className="">
                    <img className="w-32 mb-5" src="navlogo.webp" alt="" />
                    <div className="">

                    </div>
                    <div className="md:pl-10  grid gap-5">
                        {
                            sidebar.map((v, i) => {
                                return (
                                    <section key={i} className="hover:bg-gray-100 p-4 rounded-2xl"}>
                                        <span className=" text-primary font-medium text-sm">{v.how}</span>
                                        <p className=''>{v.dis}</p>
                                    </section>
                                )

                            })

                        }
                    </div>
                </div>

            </div>


            <div className="">

                <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-5 max-w-6xl mx-auto ">
                    {
                        blogs.map((value, index) => {
                            return (
                                <div key={index} className='border shadow-xl rounded-2xl overflow-hidden'>
                                    <img src={value.image} alt="" />
                                    <div className="p-5 pb-8">
                                        <span className='text-gray-500 block mb-2'>{value.span}</span>
                                        <h1 className='md:text-xl  text-lg font-medium line-clamp-1'>{value.title}</h1>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>



            </div>
        </div>
    )
}

export default page
