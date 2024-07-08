import { CalendarCheck, User } from 'lucide-react'
import React from 'react'
import Sidebar from '@/components/Sidebar'

const page = () => {
    return (
        <div className='max-w-6xl mx-auto px-4'>
            <div className="relative">
                <div className="absolute bottom-0 left-0 grid gap-3 w-full bg-gradient-to-t from-black p-5 pt-28 ">
                    <h1 className='text-3xl text-white '>Study in France The Ultimate Guide for Pakistani Students in 2024</h1>
                    <div className="flex gap-5">
                        <div className="flex gap-2  items-center ">
                            <CalendarCheck size={18} color='#1247a1' />
                            <div className=" text-white">
                                jun 22 2024
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <User size={18} color='#1247a1' />
                            <div className=" text-white">
                                jun 22 2024
                            </div>
                        </div>
                    </div>
                </div>
                <img src="https://img.freepik.com/free-photo/group-young-students-front-school-building_23-2148199272.jpg?ga=GA1.1.633191682.1717133773&semt=ais_user" alt="" className='w-full object-cover max-h-[70vh]' />
            </div>

            <div className="grid grid-cols-4 max-w-6xl mx-auto gap-10 py-16 px-4">
                <div className="col-span-3">
                    <img src="https://img.freepik.com/free-photo/group-young-students-front-school-building_23-2148199272.jpg?ga=GA1.1.633191682.1717133773&semt=ais_user" alt="" className='w-full' />
                </div>

                <Sidebar />
            </div>

        </div>
    )
}

export default page