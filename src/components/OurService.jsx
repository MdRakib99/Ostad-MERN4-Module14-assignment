import React from "react";

const OurService = () => {
  return (
    <div>
      <div>
        <h1 className='font-bold text-xl font-Poppins text-[#000000]'>
          Our Services
        </h1>
        <p className='text-xs py-5'>
          Home &gt; <span className='text-[#20B15A]'> Our Services</span>
        </p>
      </div>
      <div>
        <h3 className='text-[#20B15A] font-semibold py-4 '>OUR ALL SERVICES</h3>
        <p className='text-[#000000] font-bold text-2xl'>
          We Provide Best Web design
        </p>
        <p className='text-[#000000] font-bold   text-2xl'>Services</p>
      </div>

      <div className='py-5 rounded-md shadow-lg'>
        <div className='space-y-3'>
          <h1 className='text-[#000000] font-bold text-xl'>
            BUILD & LAUNCH WITHOUT PROBLEMS
          </h1>
          <p className='text-[#9D9D9D] text-sm'>
            Increase your team’s productivity and save time with a bot that
            answers and fields customer inquiries
          </p>
        </div>
        <div className='flex'>
          <div className='grid grid-cols-2 grid-rows-2 py-6  mr-[600px] '>
            <div className='rounded-lg border shadow-lg  w-80 h-40'>
              <img
                className='w-[318px]  h-[164px] object-cover rounded-lg'
                src='/Image/service1.jpg'
                alt='#'
              />
            </div>
            <div className='rounded-lg  border shadow-lg  w-40 h-[164px] '>
              <img
                className='w-[143px]  h-[164px] object-cover rounded-lg'
                src='/Image/service2.jpg'
                alt='#'
              />
            </div>
            <div className='rounded-md border shadow-lg w-fit '>
              <img
                className='w-[257px]  h-[263px] object-cover rounded-lg'
                src='/Image/service3.webp'
                alt='#'
              />
            </div>
            <div className='rounded-md  border shadow-lg  w-60 h-70'>
              <img
                className='w-[248px]  h-[263px] object-cover rounded-lg'
                src='/Image/service4.avif'
                alt='#'
              />
            </div>
          </div>
          <div className=''>
            <div className='grid grid-cols-2 grid-rows-2 py-6  mr-[600px] '>
              <div className='rounded-lg border shadow-lg  w-80 h-40'>
                <img
                  className='w-[318px]  h-[164px] object-cover rounded-lg'
                  src='/Image/service1.jpg'
                  alt='#'
                />
              </div>
              <div className='rounded-lg  border shadow-lg  w-40 h-[164px] '>
                <img
                  className='w-[143px]  h-[164px] object-cover rounded-lg'
                  src='/Image/service2.jpg'
                  alt='#'
                />
              </div>
              <div className='rounded-md border shadow-lg w-fit '>
                <img
                  className='w-[257px]  h-[263px] object-cover rounded-lg'
                  src='/Image/service3.webp'
                  alt='#'
                />
              </div>
              <div className='rounded-md  border shadow-lg  w-60 h-70'>
                <img
                  className='w-[248px]  h-[263px] object-cover rounded-lg'
                  src='/Image/service4.avif'
                  alt='#'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
