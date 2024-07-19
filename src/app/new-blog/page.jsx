"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
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
            dis: "How to the perfect Email-- Tips and Tricks "
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
            image: "https://img.freepik.com/premium-photo/minimal-loft-composition-with-laptop-wooden-table-concrete-3d-wall-3d-render_165683-1.jpg?w=740"
        },
        {
            span: "COMPANY",
            title: "How Trvel Writes And Vlogger somting any thing and you like to Writes",
            image: "https://img.freepik.com/premium-photo/woman-using-computer-laptop_53876-55562.jpg?w=740"
        },
        {
            span: "COMPANY",
            title: "How Trvel Writes And Vlogger somting any thing and you like to Writes",
            image: "https://img.freepik.com/premium-photo/woman-using-computer-laptop_53876-55562.jpg?w=740"
        },
        {
            span: "COMPANY",
            title: "How Trvel Writes And Vlogger somting any thing and you like to Writes",
            image: "https://img.freepik.com/premium-photo/woman-using-computer-laptop_53876-55562.jpg?w=740"
        },
        {
            span: "COMPANY",
            title: "How Trvel Writes And Vlogger somting any thing and you like to Writes",
            image: "https://img.freepik.com/premium-photo/woman-using-computer-laptop_53876-55562.jpg?w=740"
        },
        {
            span: "COMPANY",
            title: "How Trvel Writes And Vlogger somting any thing and you like to Writes",
            image: "https://img.freepik.com/premium-photo/dark-stylish-workplace-with-office-supplies_67155-2750.jpg?w=740"
        },

    ]
    return (
        <div>
            <div className="grid lg:grid-cols-3 max-w-6xl mx-auto px-4 py-6 gap-10 mb-10">

                <div className="  md:col-span-2  shadow-md rounded-xl overflow-hidden ">
                    <Link href="/blogs/single" >

                        <div className="mb-3 aspect-video">
                            <img src="https://img.freepik.com/free-photo/top-view-travel-elements-collection_23-2148691133.jpg?t=st=1721007092~exp=1721010692~hmac=5f835794e31f9e40d239e0ac0a409db9ff869f2211218ff2f15e08c9a324b200&w=740" alt="" className='w-full h-full  object-cover ' />
                        </div>
                        <div className="p-4 md:p-6">
                            <span className='text-gray-400 block mb-2 text-xs tracking-widest '>COMPANY</span>
                            <h1 className='md:text-lg text-sm line-clamp-2 leading-7 font-semibold md:leading-8 '>How Travel Writes And Vlogger somting any thing and you like to Writes Overcomes Self-Doubt</h1>
                        </div>

                    </Link>
                </div>
                <Sidebar />
            </div>


            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
                {
                    blogs.map((value, index) => {
                        return (
                            <div key={index} className='overflow-hidden'>
                                <img className='bg-blue-600 rounded-xl mb-2' src={value.image} alt="" />
                                <div className="py-4 ">
                                    <span className='text-gray-400 tracking-widest block font-medium  text-[11px] mb-3'>{value.span}</span>
                                    <h1 className='font-semibold line-clamp-2'>{value.title}</h1>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </div >
    )
}

export default page