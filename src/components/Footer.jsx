import React from "react";
import { FaFacebook } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { LiaLinkedinIn } from "react-icons/lia";
import { BiLogoInstagramAlt } from "react-icons/bi";

const Footer = () => {
  return (
    <div className='text-white flex  py-6 justify-between'>
      <div>
        <h1 className='font-bold text-2xl font-Poppins py-4'>WEB LOGO</h1>
        <p className='text-xs'>Some footer text about the Agency.</p>
        <p className='text-xs'>Just a little description to help</p>
        <p className='text-xs'>people understand you better</p>
        <div className='pt-7 flex gap-4'>
          <div className='text-[#20B15A] border border-[#000000] rounded-full   flex items-center bg-white'>
            <FaFacebook className=' h-6 w-6' />
          </div>
          <div className='text-white border border-[#000000] rounded-full  flex items-center bg-[#20B15A]'>
            <TiSocialTwitter className=' h-6 w-6' />
          </div>

          <div className='text-white border border-[#000000] rounded-full  flex items-center bg-[#20B15A]'>
            <LiaLinkedinIn className=' h-6 w-6' />
          </div>

          <div className='text-white  border-[#000000] border rounded-full  flex items-center bg-[#20B15A]'>
            <BiLogoInstagramAlt className=' h-6 w-6' />
          </div>
        </div>

        <p className='text-[10px] py-6'>Copyright Design Agency 2022</p>
      </div>
      <div className='py-5 '>
        <ul className='text-xs space-y-4'>
          <li className='font-semibold text-base'>Quick Links</li>
          <li>Service</li>
          <li>Portfolio</li>
          <li>About Us</li>
          <li>Contuct Us</li>
        </ul>
      </div>

      <div className='py-5'>
        <h1 className='font-semibold'>Address</h1>
        <p className='text-xs'>Design Agency Head Office.</p>
        <p className='text-xs'> Airport Road</p>
        <p className='text-xs'> United Arab Emirate</p>
      </div>
    </div>
  );
};

export default Footer;
