import Banner_common from '@/components/Banner_common'
import Sidebar from '@/components/Sidebar'
import { CalendarCheck, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className=''>
            <Banner_common heading="Ower Blogs" path="Home > Blogs" />


            <div className="grid md:grid-cols-4 max-w-6xl mx-auto gap-10 py-10 px-4">
                <div className="py-10 grid gap-16 md:col-span-3">
                    <div className=" shadow-lg pb-5 rounded-2xl">
                        <img src="https://img.freepik.com/free-photo/group-young-students-front-school-building_23-2148199272.jpg?ga=GA1.1.633191682.1717133773&semt=ais_user" alt="" className='w-full rounded-t-2xl' />
                        <div className="p-5 grid gap-4">
                            <div className="flex gap-1 md:gap-5 items-center">
                                <div className="flex gap-1 md:gap-2 items-center">
                                    <CalendarCheck size={18} color='#1247a1' />
                                    <span className='md:text-base sm:text-sm text-xs'>1 day ago</span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <User size={18} color='#1247a1' />
                                    <span className='md:text-base sm:text-sm text-xs'>Mubashar Aslam</span>
                                </div>
                            </div>
                            <h1 className='md:text-3xl sm:text-2xl text-xl '>Mastering the Hunt for Private Scholarships</h1>
                            <div className="">
                                <Link href="/blogs/single" className='border sm:px-4 sm:py-2 px-3 py-[6px] hover:bg-primary text-gray-500 hover:text-white rounded-[5px]  transition-all duration-300'>Read More</Link>
                            </div>
                        </div>
                    </div>




                    <div className="grid gap-4 shadow-lg pb-5 rounded-2xl ">
                        <img src="https://img.freepik.com/free-photo/group-young-students-front-school-building_23-2148199272.jpg?ga=GA1.1.633191682.1717133773&semt=ais_user" alt="" className='w-full rounded-t-2xl' />
                        <div className="p-5 grid gap-4">
                            <div className="flex gap-2 md:gap-10 items-center">
                                <div className="flex gap-1 md:gap-2 items-center">
                                    <CalendarCheck size={18} color='#1247a1' />
                                    <span className='md:text-base sm:text-sm text-xs'>1 day ago</span>
                                </div>
                                <div className="flex gap-2 items-center ">
                                    <User size={18} color='#1247a1' />
                                    <span className='md:text-base sm:text-sm text-xs'>Mubashar Aslam</span>
                                </div>
                            </div>
                            <h1 className='md:text-3xl sm:text-2xl text-xl '>Mastering the Hunt for Private Scholarships</h1>
                            <div className="">
                                <button className='border sm:px-4 sm:py-2 px-3 py-[6px] hover:bg-primary  rounded-[5px] hover:text-white text-gray-500 transition-all duration-300'>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>

                <Sidebar />

            </div>
        </div>
    )
}

export default page