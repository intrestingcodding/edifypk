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

            <div className="grid grid-cols-4 gap-2 items-center cursor-pointer py-5 mb-3 border-b border-gray-400 ">



                <div onClick={() => setActive(1)} className={`${active == 1 ? "text-blue-600" : ""} flex items-center cursor-pointer hover:text-blue-600 justify-center flex-col gap-2  `}>
                    <div className="">
                        <GraduationCap size={30} strokeWidth={1} />
                    </div>
                    <p className='md:block hidden'>Why Study in Australia</p>
                </div>

                <div onClick={() => setActive(2)} className={`${active == 2 ? "text-blue-600" : ""} flex items-center cursor-pointer hover:text-blue-600 justify-center flex-col gap-2`}>
                    <div className="">
                        <University size={30} strokeWidth={1} />
                    </div>
                    <p className='md:block hidden'>Addmission Requirements</p>
                </div>

                <div onClick={() => setActive(3)} className={` ${active == 3 ? "text-blue-600" : ""} flex items-center cursor-pointer hover:text-blue-600 justify-center flex-col gap-2`}>
                    <div className="">
                        <BriefcaseBusiness size={30} strokeWidth={1} />
                    </div>
                    <p className='md:block hidden'>Top Ranking Universities</p>
                </div>

                <div onClick={() => setActive(4)} className={`${active == 4 ? "text-blue-600 " : ""} flex items-center cursor-pointer hover:text-blue-600 justify-center flex-col gap-2`}>
                    <div className="">
                        <Menu size={30} strokeWidth={1} />
                    </div>
                    <p className='md:block hidden '>Post Student Work</p>
                </div>
            </div>

            <div className="">
                {
                    [1].map((v, i) => {
                        switch (active) {
                            case 1:
                                return (
                                    <div className="">
                                        <p class="mb-4 text-base text-gray-700 sm:text-base md:text-base ">
                                            Australia provides top-notch education, a dynamic lifestyle, and a diverse culture, making studying there an enjoyable experience. The essential actions to study in Australia are as follows:
                                        </p>

                                        <h2 class="mt-6 mb-2 text-base font-semibold text-gray-800  md:text-base base:text-xl">
                                            1) World-Class Universities:
                                        </h2>
                                        <p class="mb-4 text-base text-gray-700 sm:text-base md:text-base ">
                                            Several highly regarded colleges with an international reputation for academic brilliance, research accomplishments, and recognition are located in Australia. Among the well-known universities in Australia are: University of Melbourne (Melbourne), University of Sydney (Sydney) and many more.
                                        </p>

                                        <h2 class="mt-6 mb-2 text-base font-semibold text-gray-800  md:text-base base:text-xl">
                                            2) Cutting-Edge Research Facilities:
                                        </h2>
                                        <p class="mb-4 text-base text-gray-700 sm:text-base md:text-base ">
                                            Australia is a significant country in the global research landscape because of its state-of-the-art research facilities across multiple disciplines. These amenities are essential for encouraging creativity, expanding scientific understanding, and drawing prominent scholars and students from throughout the globe.
                                        </p>

                                        <h2 class="mt-6 mb-2 text-base font-semibold text-gray-800  md:text-base base:text-xl">
                                            3) Quality of Life:
                                        </h2>
                                        <p class="mb-4 text-base text-gray-700 sm:text-base md:text-base ">
                                            Australia offers a safe, secure, and first-rate healthcare system, making it an ideal place for students to concentrate on their education and personal growth.
                                        </p>

                                        <h2 class="mt-6 mb-2 text-base font-semibold text-gray-800  md:text-base base:text-xl">
                                            4) Part-Time Work:
                                        </h2>
                                        <p class="mb-4 text-base text-gray-700 sm:text-base md:text-base ">
                                            International students are allowed to work part-time during their studies, providing opportunities to gain practical experience and support living expenses.
                                        </p>

                                        <h2 class="mt-6 mb-2 text-base font-semibold text-gray-800  md:text-base base:text-xl">
                                            5) Post-Graduation Work Opportunities:
                                        </h2>
                                        <p class="mb-4 text-base text-gray-700 sm:text-base md:text-base ">
                                            After completing their studies, graduates are allowed to stay in Australia for an additional period to seek employment.
                                        </p>

                                        <h2 class="mt-6 mb-2 text-base font-semibold text-gray-800  md:text-base base:text-xl">
                                            6) Streamlined Immigration Processes:
                                        </h2>
                                        <p class="mb-4 text-base text-gray-700 sm:text-base md:text-base ">
                                            For international students, Australia offers a slightly easier-to-navigate visa application process that is clear-cut and transparent.
                                        </p>

                                        <h2 class="mt-6 mb-2 text-base font-semibold text-gray-800  md:text-base base:text-xl">
                                            7) Global Recognition of Degrees:
                                        </h2>
                                        <p class="mb-4 text-base text-gray-700 sm:text-base md:text-base ">
                                            Degrees obtained from Australian universities are globally recognized and respected. This opens doors to a wide range of career opportunities and increases the likelihood of successful employment, whether within Australia or internationally.
                                        </p>

                                        <h2 class="mt-6 mb-2 text-base font-semibold text-gray-800  md:text-base base:text-xl">
                                            8) Safety and Security:
                                        </h2>
                                        <p class="mb-4 text-base text-gray-700 sm:text-base md:text-base ">
                                            Australia is considered one of the safest countries in the world. The country prioritizes the safety of its residents, including international students, ensuring a secure environment for studying and living.
                                        </p>

                                        <h2 class="mt-6 mb-2 text-base font-semibold text-gray-800  md:text-base base:text-xl">
                                            9) Cultural Diversity:
                                        </h2>
                                        <p class="mb-4 text-base text-gray-700 sm:text-base md:text-base ">
                                            Australia is home to a rich tapestry of cultures, making it an ideal destination for students seeking a multicultural experience. Exposure to diverse perspectives enhances the overall educational journey and prepares students for a globalized workforce.
                                        </p>

                                        <h2 class="mt-6 mb-2 text-base font-semibold text-gray-800  md:text-base base:text-xl">
                                            10) Robust Student Support Services:
                                        </h2>
                                        <p class="mb-4 text-base text-gray-700 sm:text-base md:text-base ">
                                            Australian universities prioritize the well-being of international students. They offer comprehensive support services, including counseling, health services, and academic assistance, ensuring that students feel comfortable and are able to focus on their studies.
                                        </p>

                                    </div>
                                )
                            case 2:
                                return (
                                    <div className="">
                                        <p class="mb-4 text-base text-gray-700 sm:text-base md:text-base ">
                                            Admission requirements for studying in Australia can vary depending on the level of study (Bachelor’s, Master’s, or Ph.D.) and the specific university or program. However, there are some common requirements and processes that most students need to follow:
                                        </p>

                                        <h2 class="mt-6 mb-2 text-base font-semibold text-gray-800  md:text-base base:text-xl">
                                            Relevant Bachelor’s Degree:
                                        </h2>
                                        <p class="mb-4 text-base text-gray-700 sm:text-base md:text-base ">
                                            Hold a relevant bachelor’s degree or an equivalent qualification from a recognized institution.
                                        </p>

                                        <h2 class="mt-6 mb-2 text-base font-semibold text-gray-800  md:text-base base:text-xl">
                                            English Language Proficiency:
                                        </h2>
                                        <p class="mb-4 text-base text-gray-700 sm:text-base md:text-base ">
                                            Provide evidence of English language proficiency through IELTS, TOEFL, or PTE Academic, with the required minimum scores.
                                        </p>

                                        <h2 class="mt-6 mb-2 text-base font-semibold text-gray-800  md:text-base base:text-xl">
                                            Application Form:
                                        </h2>
                                        <p class="mb-4 text-base text-gray-700 sm:text-base md:text-base ">
                                            Complete the application form provided by the university or through the relevant application portal.
                                        </p>

                                        <h2 class="mt-6 mb-2 text-base font-semibold text-gray-800  md:text-base base:text-xl">
                                            Transcripts and Certificates:
                                        </h2>
                                        <p class="mb-4 text-base text-gray-700 sm:text-base md:text-base ">
                                            Submit certified copies of academic transcripts and certificates from your previous studies.
                                        </p>

                                        <h2 class="mt-6 mb-2 text-base font-semibold text-gray-800  md:text-base base:text-xl">
                                            Curriculum Vitae (CV) or Resume:
                                        </h2>
                                        <p class="mb-4 text-base text-gray-700 sm:text-base md:text-base ">
                                            Provide a CV or resume outlining your academic and professional background.
                                        </p>

                                        <h2 class="mt-6 mb-2 text-base font-semibold text-gray-800  md:text-base base:text-xl">
                                            Letters of Recommendation:
                                        </h2>
                                        <p class="mb-4 text-base text-gray-700 sm:text-base md:text-base ">
                                            Include letters of recommendation from academic or professional referees who can attest to your capabilities.
                                        </p>

                                        <h2 class="mt-6 mb-2 text-base font-semibold text-gray-800  md:text-base base:text-xl">
                                            Statement of Purpose or Research Proposal:
                                        </h2>
                                        <p class="mb-4 text-base text-gray-700 sm:text-base md:text-base ">
                                            Craft a statement of purpose outlining your academic and career goals, or a research proposal for research-based programs.
                                        </p>

                                        <h2 class="mt-6 mb-2 text-base font-semibold text-gray-800  md:text-base base:text-xl">
                                            Interview (if required):
                                        </h2>
                                        <p class="mb-4 text-base text-gray-700 sm:text-base md:text-base ">
                                            Some courses or universities may conduct interviews as part of the selection process.
                                        </p>

                                    </div>
                                )
                            case 3:
                                return (
                                    <div className="">
                                        <p class="mb-4 text-base text-gray-700 sm:text-base md:text-base ">
                                            Admission requirements for studying in Australia can vary depending on the level of study (Bachelor’s, Master’s, or Ph.D.) and the specific university or program. However, there are some common requirements and processes that most students need to follow:
                                        </p>

                                        <h2 class="mt-6 mb-2 text-base font-semibold text-gray-800  md:text-base base:text-xl">
                                            Relevant Bachelors Degree:
                                        </h2>
                                        <p class="mb-4 text-base text-gray-700 sm:text-base md:text-base ">
                                            Hold a relevant bachelors degree or an equivalent qualification from a recognized institution.
                                        </p>

                                        <h2 class="mt-6 mb-2 text-base font-semibold text-gray-800  md:text-base base:text-xl">
                                            English Language Proficiency:
                                        </h2>
                                        <p class="mb-4 text-base text-gray-700 sm:text-base md:text-base ">
                                            Provide evidence of English language proficiency through IELTS, TOEFL, or PTE Academic, with the required minimum scores.
                                        </p>

                                        <h2 class="mt-6 mb-2 text-base font-semibold text-gray-800  md:text-base base:text-xl">
                                            Application Form:
                                        </h2>
                                        <p class="mb-4 text-base text-gray-700 sm:text-base md:text-base ">
                                            Complete the application form provided by the university or through the relevant application portal.
                                        </p>

                                        <h2 class="mt-6 mb-2 text-base font-semibold text-gray-800  md:text-base base:text-xl">
                                            Transcripts and Certificates:
                                        </h2>
                                        <p class="mb-4 text-base text-gray-700 sm:text-base md:text-base ">
                                            Submit certified copies of academic transcripts and certificates from your previous studies.
                                        </p>

                                        <h2 class="mt-6 mb-2 text-base font-semibold text-gray-800  md:text-base base:text-xl">
                                            Curriculum Vitae (CV) or Resume:
                                        </h2>
                                        <p class="mb-4 text-base text-gray-700 sm:text-base md:text-base ">
                                            Provide a CV or resume outlining your academic and professional background.
                                        </p>

                                        <h2 class="mt-6 mb-2 text-base font-semibold text-gray-800  md:text-base base:text-xl">
                                            Letters of Recommendation:
                                        </h2>
                                        <p class="mb-4 text-base text-gray-700 sm:text-base md:text-base ">
                                            Include letters of recommendation from academic or professional referees who can attest to your capabilities.
                                        </p>

                                        <h2 class="mt-6 mb-2 text-base font-semibold text-gray-800  md:text-base base:text-xl">
                                            Statement of Purpose or Research Proposal:
                                        </h2>
                                        <p class="mb-4 text-base text-gray-700 sm:text-base md:text-base ">
                                            Craft a statement of purpose outlining your academic and career goals, or a research proposal for research-based programs.
                                        </p>

                                        <h2 class="mt-6 mb-2 text-base font-semibold text-gray-800  md:text-base base:text-xl">
                                            Interview (if required):
                                        </h2>
                                        <p class="mb-4 text-base text-gray-700 sm:text-base md:text-base ">
                                            Some courses or universities may conduct interviews as part of the selection process.
                                        </p>

                                    </div>
                                )
                            case 4:
                                return (
                                    <div className="">
                                        <p class="mb-4 text-base text-gray-700 sm:text-base md:text-base ">
                                            International students can obtain useful work experience after finishing their studies in Australia, which offers them attractive post-study work options. For foreign graduates, the Post-Study Work (PSW) visa possibilities are as follows:
                                        </p>

                                        <p class="mb-4 text-base text-gray-700 sm:text-base md:text-base  font-bold">
                                            Temporary Graduate Visa (subclass 485):
                                        </p>

                                        <h2 class="mt-6 mb-2 text-base font-semibold text-gray-800  md:text-base base:text-xl">
                                            Graduate Work Stream:
                                        </h2>
                                        <p class="mb-4 text-base text-gray-700 sm:text-base md:text-base ">
                                            Graduates who meet the requirements for vocations that are in demand in Australia are eligible for this stream. It permits an 18-month visa length.
                                        </p>

                                        <h2 class="mt-6 mb-2 text-base font-semibold text-gray-800  md:text-base base:text-xl">
                                            Post-Study Work Stream:
                                        </h2>
                                        <p class="mb-4 text-base text-gray-700 sm:text-base md:text-base ">
                                            This stream, which is open to graduates with advanced degrees from Australian universities, has different visa terms:
                                        </p>
                                        <ul class="mb-4 list-disc list-inside text-base text-gray-700 sm:text-base md:text-base ">
                                            <li>A master's or bachelor's degree: For a maximum of two years</li>
                                            <li>PhD standing: For a maximum of four years</li>
                                        </ul>
                                        <p class="mb-4 text-base text-gray-700 sm:text-base md:text-base ">
                                            Eligibility Criteria for the Temporary Graduate Visa
                                        </p>

                                        <h2 class="mt-6 mb-2 text-base font-semibold text-gray-800  md:text-base base:text-xl">
                                            Qualification Requirement:
                                        </h2>
                                        <ul class="mb-4 list-disc list-inside text-base text-gray-700 sm:text-base md:text-base ">
                                            <li>Completion of a degree from a recognized Australian institution.</li>
                                        </ul>

                                        <h2 class="mt-6 mb-2 text-base font-semibold text-gray-800  md:text-base base:text-xl">
                                            Australian Study Requirement:
                                        </h2>
                                        <ul class="mb-4 list-disc list-inside text-base text-gray-700 sm:text-base md:text-base ">
                                            <li>Completing the Australian study requirement, which calls for a minimum amount of time spent studying in Australia.</li>
                                            <li>English Language Proficiency: Showcasing English language ability via specified assessments (e.g., PTE, TOEFL, or IELTS).</li>
                                        </ul>

                                        <h2 class="mt-6 mb-2 text-base font-semibold text-gray-800  md:text-base base:text-xl">
                                            Age Requirement:
                                        </h2>
                                        <p class="mb-4 text-base text-gray-700 sm:text-base md:text-base ">
                                            Applicants must be under a certain age limit at the time of application.
                                        </p>

                                        <h2 class="mt-6 mb-2 text-base font-semibold text-gray-800  md:text-base base:text-xl">
                                            Health and Character Requirements:
                                        </h2>
                                        <p class="mb-4 text-base text-gray-700 sm:text-base md:text-base ">
                                            Meeting health and character requirements as per Australian immigration standards.
                                        </p>

                                        <h2 class="mt-6 mb-2 text-base font-semibold text-gray-800  md:text-base base:text-xl">
                                            Job Opportunities During Post-Study Work:
                                        </h2>

                                        <h2 class="mt-6 mb-2 text-base font-semibold text-gray-800  md:text-base base:text-xl">
                                            Flexibility:
                                        </h2>
                                        <p class="mb-4 text-base text-gray-700 sm:text-base md:text-base ">
                                            Graduates on the PSW visa have the flexibility to work for any employer in any occupation.
                                        </p>

                                        <h2 class="mt-6 mb-2 text-base font-semibold text-gray-800  md:text-base base:text-xl">
                                            Pathway to Permanent Residency:
                                        </h2>
                                        <p class="mb-4 text-base text-gray-700 sm:text-base md:text-base ">
                                            The work experience gained during the PSW visa period can contribute to eligibility for permanent residency through skilled migration pathways.
                                        </p>

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