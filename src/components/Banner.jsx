import React from "react";

const Banner = () => {
  const data = [
    {
      img: "/Image/BannerImg1.png",
    },
    {
      img: "/Image/BannerImg2.avif",
    },
    {
      img: "/Image/BannerImg3.png",
    },
    {
      img: "/Image/BannerImg4.png",
    },
  ];
  return (
    <div className='flex justify-between'>
      {/* content */}
      <div>
        <h1 className='font-bold text-[#000000] text-4xl py-6'>
          Increase Your Customers Loyalty and Satisfaction
        </h1>
        <p className='font-semibold py-4'>
          We help businesses like yours earn more customers, standout from
          competitors, make more money
        </p>
        <div className='py-5'>
          <button className='border border-green-500 rounded-md px-4 py-3  text-white bg-green-500 hover:text-white focus:outline-none focus:border-green-700 focus:ring focus:ring-green-200 active:bg-green-800 '>
            Get Started
          </button>
        </div>
      </div>
      {/* image  */}
      <div className='flex flex-wrap gap-4'>
        <img
          className='w-[408px] h-[271px] top-[146px] left-[733px] rounded-md'
          src='/Image/BannerImg1.png'
          alt='#'
        />
        <img
          className='w-[180px] h-[271px] top-[146px] left-[1159px] rounded-md'
          src='/Image/BannerImg2.avif'
          alt='#'
        />
        <img
          className='w-[246px] h-[271px] top-[439px] left-[733px] rounded-md'
          src='/Image/BannerImg3.png'
          alt='#'
        />
        <img
          className='w-[345px] h-[164px] top-[439px] left-[994px] rounded-md'
          src='/Image/BannerImg4.png'
          alt='#'
        />
      </div>
    </div>
  );
};

export default Banner;
