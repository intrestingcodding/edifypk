import { CalendarCheck, User } from 'lucide-react'
import React from 'react'
import Sidebar from '@/components/Sidebar'

const page = () => {
    return (
        <div className='max-w-6xl mx-auto '>
            <div className="relative rounded-2xl overflow-hidden md:col-span-3">


                <div className="absolute bottom-0 left-0 grid gap-3 w-full bg-gradient-to-t from-black p-5 pt-28 ">
                    <h1 className='md:text-3xl sm:text-2xl text-lg text-white  '>Study in France The Ultimate Guide for Pakistani Students in 2024</h1>
                    <div className="flex gap-5">
                        <div className="flex gap-2  items-center ">
                            <CalendarCheck size={18} color='white' />
                            <div className=" text-slate-300   md:text-base text-sm">
                                jun 22 2024
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <User size={18} color='white' />
                            <div className=" text-slate-300 md:text-base text-sm">
                                jun 22 2024
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-h-[70vh] ">
                    <img src="https://img.freepik.com/free-photo/group-young-students-front-school-building_23-2148199272.jpg?ga=GA1.1.633191682.1717133773&semt=ais_user" alt="" className='w-full object-cover ' />
                </div>

            </div>

            <div className="grid md:grid-cols-4 max-w-6xl mx-auto gap-10 py-16  px-4 ">
                <div className="md:col-span-3 rounded-2xl overflow-hidden py-10">
                    <img src="https://img.freepik.com/free-photo/group-young-students-front-school-building_23-2148199272.jpg?ga=GA1.1.633191682.1717133773&semt=ais_user" alt="" className='w-full rounded-2xl shadow-xl ' />
                </div>

                <Sidebar />
            </div>

        </div>
    )
}

export default page