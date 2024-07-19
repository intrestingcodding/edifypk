"use client"
import { Plus } from 'lucide-react'
import React, { useState } from 'react'

const Quetions = () => {
    const [showContent, setShowContent] = useState(null)

    const question = [
        {
            question: "Am I Eligible to Study Abroad? ",
            answer: "To begin studying as an international student, there are a range of entry requirements you may have to meet. The academic requirements (including evidence of English language skills) you need to study abroad will varydepending on the level of education you want to pursue.For instance, some courses will require you to have done afoundation course before applying for a degree."

        },
        {
            question: "How much will it cost to Study Abroad?",
            answer: "The most important and major chunk of your study abroad expense depends on the type of qualification and institution you opt for. Heres a quick overview of the tuition fee for different programs in our top destinations."

        },
        {
            question: "How long does it take for a student visa to be issued?",
            answer: "Student (F and M) visas for new students can be issued up to 120 days in advance of the start date for a course of study. Waiting times for your visa appointment vary wildly between countries. You could get it in 3 days or in 3 months, depending on the case"

        },
        {
            question: "Scholarships & Bursaries- Whats the difference?",
            answer: "Scholarships are more inclined to fund students with outstanding academic performance while bursaries are mostly prone to support students in financial need"

        },
    ]
    return (
        <div className='grid gap-4'>

            {
                question.map((v, i) => {
                    return (
                        <section key={i} className=" ">
                            <div className=" ">
                                <div className="flex gap-3 items-center">
                                    <div onClick={() => setShowContent(showContent == i ? null : i)} className={`${showContent == i ? "rotate-45" : "rotate-0"} s  text-blue-600 p-2  rounded-full bg-gray-300 transition-all duration-300 grid justify-center items-center`}> <Plus size={22} /> </div>
                                    <div className=" text-base font-medium select-nones ">{v.question}   </div>
                                </div>
                            </div>
                            <div className={`${showContent == i ? "max-h-[400px] py-4" : "max-h-0 py-0"} overflow-hidden ml-10  px-4 text-sm tracking-wider transition-all duration-300 bg-white rounded-2xl leading-6  `}>
                                {v.answer}
                            </div>
                        </section >

                    )
                })
            }
        </div>

    )
}

export default Quetions;

