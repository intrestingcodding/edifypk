import React from "react";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import { ArrowRight, BookTextIcon, Star } from "lucide-react";
import Slider from "@/components/Slider";
// import { motion } from 'framer-motion'
import VideoSlider from "@/components/VideoSlider";
import Quetions from "@/components/Quetions";
import PartnerSlider from "@/components/PartnerSlider";
import Events from "@/components/Events";
import StudyInSlider from "@/components/StudyInSlider";
import Courses from "@/components/Courses";
import Hero from "@/components/Hero";
// import BgImage from "@/components/BgImage";
import About from "@/app/about/page";

const Home = () => {
  return (
    <section className="">
      <Hero />
      <About />
      {/* Home page */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-4 py-16 mb-10">
        <img
          src="https://img.freepik.com/free-photo/smiley-pregnant-woman-holding-clipboard-pointing-up_23-2148765096.jpg?ga=GA1.1.633191682.1717133773&semt=ais_user"
          alt=""
          className="w-full h-full rounded-2xl"
        />
        <div className="grid gap-10  md:gap-5 ">
          <div className="">
            <h3 className="text-lg font-semibold mb-3 sm:mb-5 md:text-3xl sm:text-2xl">
              Why Choose Edify Group of Companies as study abroad Pakistan
              consultants?
            </h3>
            <p className="text-gray-500 sm:text-base text-sm">
              We are unique in the quality of our services and stand out from
              our competitors. Unlike other consultancy firms in Pakistan, we
              truly care our students.
            </p>
          </div>

          <div className="grid sm:grid-cols-5 gap-2 md:mb-0 mb-10 ">
            <img
              className="col-span-1 w-[60px] p-[10px] mb-2  rounded-2xl bg-[#f8f8f8]"
              src="expertise.png"
              alt=""
            />
            <div className=" col-span-4">
              <h4 className="mb-2 md:text-xl text-base font-semibold">
                Unmatched Quality of Services and Genuine Care:
              </h4>
              <p className="mb-2 md:text-base text-sm text-gray-400">
                Edify stands out among other overseas education consultants in
                Pakistan due to our unique approach
              </p>
              <div className="flex gap-1 items-center ">
                <a href="/" className="hover:text-primary text-sm ">
                  Read More
                </a>
                <ArrowRight size={20} className="text-primary" />
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-5   ">
            <img
              className=" col-span-1 w-[60px] p-[10px] mb-2 rounded-2xl  bg-[#f8f8f8]"
              src="certificate.png"
              alt=""
            />
            <div className=" col-span-4">
              <h4 className="sm:text-xl text-base font-semibold mb-2">
                Unmatched Quality of Services and Genuine Care:
              </h4>
              <p className="text-gray-400 sm:text-base text-sm mb-2">
                Edify stands out among other overseas education consultants in
                Pakistan due to our unique approach
              </p>
              <div className="flex gap-1 items-center ">
                <a href="/" className="hover:text-primary text-sm ">
                  Read More{" "}
                </a>
                <ArrowRight size={20} className="text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Banner & blogs */}
      <div className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-16 mb-10  ">
          <Banner
            span="OUR SERVICES"
            heading="We Strive to Provide the Finest Service Possible to Our Students"
            para="Edify consultant provides A to Z services for student visa in major universities and colleges of the countries around the globe, when student come with dream of studying abroad.

"
          />

          <div className="  ">
            <Card index="1" />
          </div>
        </div>
      </div>

      {/* Blogs */}
      <div className="max-w-6xl mx-auto  py-16">
        <div className="px-4">
          <Banner
            span="FAVOURITE DESTINATION"
            heading="Popular Destinations For International Students"
            para="Are you ready to launch the next phase of your academic as well as professional growth? Is quality education in distinguished universities around the world your ultimate dream? If yes, sit back and let us take the wheel!"
          />
        </div>

        <StudyInSlider />
      </div>

      {/* Futured courses */}

      <div className="bg-gray-100 py-16">
        <div className=" flex flex-col py-5 justify-center px-4 items-center mb-5">
          <span className="text-primary md:text-base text-sm font-medium md:font-semibold mb-1 block">
            TOP COURSES
          </span>
          <h3 className="md:text-3xl text-2xl font-semibold mb-1">
            Our Featured Courses
          </h3>
          <p className="text-[#808080] md:text-base text-sm text-center ">
            Education empowers thinkers for a dynamic global existence.
          </p>
        </div>
        <Courses />
      </div>

      {/* Slider */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center mb-10 ">
          <div className="text-primary md:text-base font-medium text-sm mb-1 md:font-semibold">
            Top Blogs
          </div>
          <h3 className=" md:text-3xl text-2xl font-semibold">
            Our Recent Blogs
          </h3>
        </div>
        <Slider />
      </div>

      {/* News & Events */}
      <div className="bg-gray-100">
        <Events />
      </div>

      {/* Ower Videos */}
      <div className=" max-w-6xl mx-auto py-16 px-4 ">
        <div className="flex flex-col items-center justify-center mb-10 ">
          <div className="text-primary mb-2 text-sm font-medium md:text-base md:font-semibold">
            OUR VIDEOS
          </div>
          <h3 className="sm:text-2xl md:text-3xl text-2xl text-center  font-semibold">
            Letest from Youtube
          </h3>
        </div>
        <VideoSlider />
      </div>
      {/* how to start */}
      <div className="bg-gray-100 ">
        <div className="grid md:grid-cols-2 max-w-6xl mx-auto px-4 py-20 gap-5 ">
          <div className="">
            <span className="text-primary md:font-semibold font-medium text-sm md:text-base block mb-2">
              LEARN HOW TO GET STARTED
            </span>
            <h3 className="md:text-3xl text-2xl font-semibold mb-2">
              Frequently Asked Questions
            </h3>
            <p className="text-gray-400 mb-2 sm:text-base text-sm">
              Join our club member community now to get free updates and also a
              lot of freebies are waiting for you or Contact Us
            </p>
            <div className="flex">
              <div className="py-[8px] px-3 border border-gray-500 text-gray-500 md:text-sm hover:bg-primary hover:text-white transition-all text-xs duration-300 rounded-[5px] ">
                Read Our Full FAQ
              </div>
            </div>
          </div>
          <div className=" ">
            <Quetions />
          </div>
        </div>
      </div>
      {/* Partners */}
      <div className="max-w-6xl mx-auto py-16  px-4">
        <div className="">
          <div className="">
            <span className="text-primary md:text-base font-medium text-sm md:font-semibold block  mb-1">
              OUR PREMIUM PARTNERS
            </span>
            <h3 className=" md:text-3xl font-semibold text-2xl mb-1">
              Trusted By The World
            </h3>
            <p className="text-gray-500 text-sm sm:text-base mb-2 sm:mb-5">
              You can list your partners or instructors brands here to show off
              your sites reputation
            </p>
          </div>
          <div className="">
            <PartnerSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
