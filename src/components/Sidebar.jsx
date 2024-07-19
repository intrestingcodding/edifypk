import { Clock, Search } from 'lucide-react'
import React from 'react'

const Sidebar = () => {
    // const resentBlogs = [
    //     {
    //         heading: "Navigating QS Best Student Cities in London",
    //         time: "friday jul 05 2024"
    //     },
    //     {
    //         heading: "Navigating QS Best Student Cities in London",
    //         time: "friday jul 05 2024"
    //     },
    //     {
    //         heading: "Navigating QS Best Student Cities in London",
    //         time: "friday jul 05 2024"
    //     },
    //     {
    //         heading: "Navigating QS Best Student Cities in London",
    //         time: "friday jul 05 2024"
    //     },
    //     {
    //         heading: "Navigating QS Best Student Cities in London",
    //         time: "friday jul 05 2024"
    //     },
    //     {
    //         heading: "Navigating QS Best Student Cities in London",
    //         time: "friday jul 05 2024"
    //     },
    //     {
    //         heading: "Navigating QS Best Student Cities in London",
    //         time: "friday jul 05 2024"
    //     },
    //     {
    //         heading: "Navigating QS Best Student Cities in London",
    //         time: "friday jul 05 2024"
    //     },
    //     {
    //         heading: "Navigating QS Best Student Cities in London",
    //         time: "friday jul 05 2024"
    //     },
    //     {
    //         heading: "Navigating QS Best Student Cities in London",
    //         time: "friday jul 05 2024"
    //     },
    // ]
    const sidebar = [
        {
            how: "HOW TO",
            dis: "How to the perfect Email-- Tips and Tricks",
            image: "https://img.freepik.com/premium-photo/laptop-with-camera-glasses-table-background_1026886-5287.jpg?ga=GA1.1.633191682.1717133773&semt=ais_user"
        },
        {
            how: "PRODUCT",
            dis: "How to the perfect Email-- Tips and Tricks ",
            image: "https://img.freepik.com/premium-psd/high-angle-desk-with-laptop-notebook_23-2148530185.jpg?ga=GA1.1.633191682.1717133773&semt=ais_user"
        },
        {
            how: "PRODUCT",
            dis: "How to the perfect Email-- Tips and Tricks",
            image: "https://img.freepik.com/free-photo/front-view-laptop-wooden-table_23-2148459491.jpg?ga=GA1.1.633191682.1717133773&semt=ais_user"
        },
        {
            how: "PRODUCT",
            dis: "How to the perfect Email-- Tips and Tricks",
            image: "https://img.freepik.com/free-vector/top-view-modern-office-desk-with-flat-design_23-2147903531.jpg?ga=GA1.1.633191682.1717133773&semt=ais_user"
        },
        {
            how: "PRODUCT",
            dis: "How to the perfect Email-- Tips and Tricks",
            image: "https://img.freepik.com/free-vector/top-view-modern-office-desk-with-flat-design_23-2147903531.jpg?ga=GA1.1.633191682.1717133773&semt=ais_user"
        },
        {
            how: "PRODUCT",
            dis: "How to the perfect Email-- Tips and Tricks",
            image: "https://img.freepik.com/free-vector/top-view-modern-office-desk-with-flat-design_23-2147903531.jpg?ga=GA1.1.633191682.1717133773&semt=ais_user"
        },
    ]
    return (
        <div className=''>
            <div className="top-0 sticky   ">
                {/* <div className="mb-5">
                    <input type="search" placeholder='Search for blogs...' className=' border-2 p-2 w-full outline-none focus:border-primary focus:border-2 transition-all duration-300  text-black rounded-[5px] bg-gray-200 focus:bg-white ' />
                </div> */}

                <div className="">
                    <div className="">
                    </div>
                    <div className=" group-first:pt-0 grid gap-5">
                        {
                            sidebar.map((v, i) => {
                                return (
                                    <section key={i} className="  cursor-default  rounded-xl w-full flex items-center gap-2">
                                        <div className="">
                                            <img src={v.image} alt="" className='rounded-md object-cover w-[100px] aspect-video ' />
                                        </div>
                                        <div className="">
                                            <span className=" text-blue-600 tracking-widest font-medium  block text-[9px]">{v.how}</span>
                                            <p className=' text-sm  cursor-pointer   '>{v.dis}</p>
                                        </div>

                                    </section>
                                )

                            })

                        }
                    </div>
                </div>

                {/* <div className="">
                    <span className='text-primary block py-2 font-semibold mb-5 border-b'>Resent Posts</span>
                    <div className="grid gap-6">

                        {
                            resentBlogs.map((v, i) => {
                                return (
                                    <div key={i} className="grid gap-2 py-1">
                                        <h3 className=' text-lg line-clamp-1 cursor-pointer hover:text-primary'>{v.heading}</h3>
                                        <div className="flex gap-2 items-center text-gray-500">
                                            <Clock size={16} />
                                            <span className='text-sm'>
                                                {v.time}
                                            </span>
                                        </div>
                                    </div>
                                )
                            })
                        }



                    </div>

                </div> */}
            </div>
        </div>
    )
}

export default Sidebar