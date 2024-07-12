import Banner_common from '@/components/Banner_common'
import React from 'react'

const page = () => {
  return (
    <div>
      <Banner_common/>
    <div className="w-full  max-w-6xl mx-auto px-4 mt-20">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-5 font-medium leading-6	text-[#000000b3] tracking-wide	">
            <p>
              Welcome to Edify Group of Companies, your trusted partner in
              shaping educational journeys and unlocking limitless
              opportunities. As the global landscape evolves at an unprecedented
              pace, education emerges as the beacon guiding individuals towards
              their aspirations. At Edify, we embrace this ethos wholeheartedly.
            </p>
            <p className="space-y-5">
              Introducing our latest endeavour; the launch of our General
              Educational Development (GED) certificate exam (USA) prep centre.
              As pioneers in the realm of international education consultancy,
              we understand the paramount importance of providing pathways to
              success that are not only comprehensive but also adaptable to the
              ever-changing demands of the modern world.
            </p>
            <p className="space-y-5 ">
              The GED certificate holds the key to unlocking doors to higher
              education and career advancement for individuals seeking
              alternative routes to traditional academic paths. With our expert
              guidance and unwavering support, we empower learners to conquer
              this milestone with confidence.
            </p>
          </div>

          <div>
            <img
              className="rounded-2xl w-full h-full object-cover"
              src="https://img.freepik.com/premium-photo/beautiful-girl-with-books-resting-nature_8119-118.jpg?ga=GA1.1.858058839.1720259779&semt=ais_user"
              alt=""
            />
          </div>
        </div>

        <div className="mt-[50px]">
          <h2 className="font-bold leading-9 text-3xl mb-3">What is GED®?</h2>
          <p className="tracking-wider text-[#000000b3] mb-4">
            The General Educational Development (GED) exam USA is a
            comprehensive assessment designed to measure the skills and
            knowledge typically acquired through four years of high school
            education. It serves as an alternative pathway for individuals who
            have not completed traditional high school education to earn a
            recognized high school equivalency credential.
          </p>

          <h2 className="font-bold leading-9 text-3xl mb-3">Key Features</h2>
          <div className="tracking-wider text-[#000000b3] mb-4">
            <li>American High School Qualification</li>
            <li>
              Equivalent to A-levels, Intermediate (FA/FSC/ICS/ICOM), IB DP,
              High School
            </li>
            <li>Recognised and Approved by IBCC Pakistan</li>
            <li>Pathway to higher education and recognised worldwide</li>
            <li>Self paced learning / Prepare in 3 months only</li>
            <li>Cost Effective (as low as USD 320$ only)</li>
            <li>
              Flexible Schedule (Weekend Classes – Evening time to suit your
              pressing needs)
            </li>
            <li>On-Campus and Online Classes</li>
            <li>Appear throughout the year for the Exam</li>
            <li>
              Accepted by LUMS, UOL, IVY League, and Universities Worldwide
            </li>
          </div>

          <h2 className="font-bold leading-9 text-3xl mb-3">
            GED Key Features
          </h2>
          <p className="tracking-wider text-[#000000b3] mb-4">
            The General Educational Development (GED) exam USA is a
            comprehensive assessment designed to measure the skills and
            knowledge typically acquired through four years of high school
            education. It serves as an alternative pathway for individuals who
            have not completed traditional high school education to earn a
            recognized high school equivalency credential.
          </p>

          <h3 className="font-bold leading-9 text-2xl mb-3"> Subjects</h3>
          <p className="tracking-wider text-[#000000b3] mb-4">
            The GED exam covers four main subjects areas
          </p>
          <div className="tracking-wider text-[#000000b3] mb-4">
            <li>Mathematical Reasoning</li>
            <li>Reasoning Through Language Arts</li>
            <li>Science</li>
            <li>Social Studies</li>
          </div>

          <h3 className="font-bold leading-9 text-2xl mb-3">
            Flexible Scheduling
          </h3>
          <p className="tracking-wider text-[#000000b3] mb-4">
            Candidates have the flexibility to schedule the exam at their
            convenience, allowing for personalized preparation and readiness
            assessment.
          </p>

          <h3 className="font-bold leading-9 text-2xl mb-3">Cost-Effective</h3>
          <p className="tracking-wider text-[#000000b3] mb-4">
            Pursuing a GED certificate is more cost-effective compared to
            traditional high school education or other standardized tests.
          </p>

          <h3 className="font-bold leading-9 text-2xl mb-3">
            Career Advancement
          </h3>
          <p className="tracking-wider text-[#000000b3] mb-4">
            Many employers and numerous educational institutions recognize the
            GED certificate as evidence of foundational knowledge and skills,
            enhancing job prospects and opening doors to higher education
            opportunities.
          </p>

          <h3 className="font-bold leading-9 text-2xl mb-3">
            Global Recognition
          </h3>
          <p className="tracking-wider text-[#000000b3] mb-4">
            The GED certificate is widely accepted by employers and educational
            institutions worldwide, providing access to diverse opportunities
            across different industries and regions.
          </p>

          <h2 className="font-bold leading-9 text-3xl mb-3">GED® Facts</h2>
          <div className="tracking-wider text-[#000000b3] mb-4">
            <li>
              Nearly all colleges and employers accept the GED® credential
            </li>
            <li>There are over 20 million graduates and counting</li>
            <li>GED® grads can earn on average $9,000 more a year</li>
            <li>
              GED® grads can enrol for higher education in Pakistan, UK, USA,
              Australia, Canada, Dubai and many more
            </li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
