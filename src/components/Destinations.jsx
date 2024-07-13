"use client"
import { BriefcaseBusiness, GraduationCap, Menu, University } from 'lucide-react'
import React, { useState } from 'react'

const Destinations = () => {
    var [active, setActive] = useState(1)

    return (
        <div className="">
            <div className="mb-5">
                <h1 className='heading text-center'>Why Study In Australia?</h1>
                <p className="para text-center">Australian universities consistently rank among the top 50 institutions worldwide across a wide range of study areas. As Study Abroad Consultants, we understand the importance of academic excellence and collaborate with prestigious Australian universities that offer outstanding educational programs, research opportunities, and world-class faculty. Australia is currently home to nearly 700,000 international students, making it a highly sought-after destination for education. As Study Abroad Consultants, we recognize the numerous advantages that Australia offers to students seeking quality education and global opportunities.</p>
            </div>

            <div className="grid grid-cols-4 gap-2 items-center py-5 mb-3 border-b border-gray-400 ">



                <div onClick={() => setActive(1)} className=" flex items-center justify-center flex-col  ">
                    <div className="">
                        <GraduationCap size={44} strokeWidth={1} />
                    </div>
                    <p>Why Study in Australia</p>
                </div>

                <div onClick={() => setActive(2)} className=" flex items-center justify-center flex-col">
                    <div className="">
                        <University size={44} strokeWidth={1} />
                    </div>
                    <p>Addmission Requirements</p>
                </div>

                <div onClick={() => setActive(3)} className=" flex items-center justify-center flex-col">
                    <div className="">
                        <BriefcaseBusiness size={44} strokeWidth={1} />
                    </div>
                    <p>Top Ranking Universities</p>
                </div>

                <div onClick={() => setActive(4)} className=" flex items-center justify-center flex-col">
                    <div className="">
                        <Menu size={44} strokeWidth={1} />
                    </div>
                    <p>Post Student Work</p>
                </div>
            </div>

            <div className="">
                {
                    [1].map((v, i) => {
                        switch (active) {
                            case 1:
                                return (
                                    <div className="">
                                        1
                                    </div>
                                )
                            case 2:
                                return (
                                    <div className="">
                                        2
                                    </div>
                                )
                            case 3:
                                return (
                                    <div className="">
                                        3
                                    </div>
                                )
                            case 4:
                                return (
                                    <div className="">
                                        4
                                    </div>
                                )

                        }
                    })
                }
            </div>


        </div>
    )
}

export default Destinations