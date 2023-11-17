import React from "react";

const Subscribe = () => {
  return (
    <div className='flex flex-col items-center '>
      <div className='text-[#000000]'>
        <p className='text-[#20B15A] flex font-bold font-mono justify-center '>
          Subscribe
        </p>
        <p className='flex justify-center font-bold text-xl'>
          Subscribe to get the latest
        </p>
        <p className='flex justify-center font-bold text-xl'> News About Us</p>
        <p className='text-xs'>
          Please drop your email below to get daily update about what we do
        </p>
      </div>
      <div className='py-5 relative'>
        <form className='flex justify-between items-center'>
          <input
            className=' text-xs outline-none p-[9px] border border-black rounded-[8px] w-[340px] '
            placeholder='Enter your Email Address'
            type='text'
          />
          <button className='border  bg-[#F55F1D] rounded-[8px] text-xs text-white p-[7px]  absolute  left-[270px]    '>
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
