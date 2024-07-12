import Banner_common from '@/components/Banner_common'
import React from 'react'

const page = () => {
  return (
    <div>
        <Banner_common/>
       <div className="w-full  max-w-6xl mx-auto px-4 mt-20">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <span className="text-[#1456a3] font-extrabold leading-6 mb-2">
              ABOUT US
            </span>
            <h2 className="text-3xl font-bold tracking-wide mb-5">
              Study Abroad Consultants
            </h2>
            <p className="text-[#808080] font-medium tracking-wider">
              Education is a driving force that focuses on developing reflective
              thinking and abilities so that the human race can discover how
              they wish to exist in today's competitive and ever-changing global
              economy. Amidst extraordinary uncertainty and dynamic world order,
              Edify, a leading Study Abroad Consultant, is dedicated to helping
              higher education leaders worldwide build resilience, seize growth
              opportunities, and discover new ways to enhance their skill sets.
              With a deep commitment to our clients' aspirations, we provide
              expert guidance on educational pathways, universities,
              scholarships, and the intricacies of the application process. We
              aim to enable students to access the best education tailored to
              their ambitions.
            </p>
          </div>
          <div>
            <img
              src="https://edify.pk/_next/image?url=%2Fimage%2Fcertificate%2Fcertificate.png&w=640&q=75"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="w-full  max-w-6xl mx-auto px-4 mt-20">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <img
              className="rounded-2xl"
              src="https://edify.pk/images/about.png"
              alt=""
            />
          </div>

          <div className="mt-16">
            <h2 className="text-3xl fond-bold mb-4"> Why Choose Edify? </h2>
            <p className="text-[#808080] tracking-widest ">
              We are unique in the quality of our services and stand out from
              our competitors. Unlike other consultancy firms in Pakistan, we
              truly care for our students. We always strive to give the best
              possible directives and solutions that a student may require. Our
              experienced counsellors and well-trained team of compliance are
              always at hand to assist you in your application aptly. Since we
              understand that college applications encapsulate complex series of
              applications and there is a wide range of consultants to choose
              from, let us tell you why should you choose Edify
            </p>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default page
