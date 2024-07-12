import { Facebook, Linkedin, Mail, MapPin, Phone, Share2, Twitter, Youtube } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="  max-w-6xl mx-auto px-4  mt-20 ">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="col-span-2  ">
          <h2 className="font-bold leading-9 text-3xl py-4 pb-1">
            Faisalabad Office (Head Branch)
          </h2>
          <p className="text-[#49535b] font-medium leading-6 mt- mb-3 tracking-wider">
            Have a Question or just want to say hi? We'd love to hear from you
          </p>
          <iframe
            className="w-full rounded-xl  "
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6809.890028475414!2d73.116607!3d31.415641!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392268724e6e98c7%3A0x1937073a8fd0dc03!2sEdify%20Group%20Of%20Companies!5e0!3m2!1sen!2sus!4v1720358341468!5m2!1sen!2sus"
            width="733"
            height="380"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="  py-4 px-6 b border rounded-2xl  space-y-4 ">
          <div className="">
            <div className=" flex  items-center ">
              <div className="">
                <MapPin color="#3d6ce7" size={20} />
              </div>
              <h4 className="font-semibold text-[18px] px-2  ">
                Faisalabad Office
              </h4>
            </div>

            <p className="text-[#5f6160] text-[16px] px-8 pt-1">
              1st Floor Plaza No. Y-213, Susan Road, Madina Town
            </p>
          </div>
          <div className=" pt-4">
            <div className=" flex  items-center ">
              <div className="">
                <Mail color="#3d6ce7" size={20} />
              </div>
              <h4 className="font-semibold text-[18px] px-2  ">
                Email us directly
              </h4>
            </div>

            <p className="text-[#5f6160] text-[16px] px-8 pt-1">
              nouman@edify.pk
            </p>
          </div>
          <div className="pt-4">
            <div className=" flex  items-center ">
              <div className="">
                <Phone color="#3d6ce7" size={20} />
              </div>
              <h4 className="font-semibold text-[18px] px-2  ">
                Edify Group UAN
              </h4>
            </div>

            <p className="text-[#5f6160] text-[16px] px-8 pt-1">
              +92 304 1111 444
            </p>
          </div>
          <div className=" flex  items-center ">

          </div>
          <div className="flex py-2 gap-7">
            <Twitter strokeWidth={1} size={25} />
            {/* <Share2 strokeWidth={1} size={25} /> */}
            <Youtube strokeWidth={1} size={25} />
            <Facebook strokeWidth={1} size={25} />
            <Linkedin strokeWidth={1} size={25} />


          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
