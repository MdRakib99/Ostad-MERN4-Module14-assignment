import React from "react";

const FeatureProject = () => {
  return (
    <div className='h-[75vh]'>
      <div className='p-5'>
        <h3 className='text-[#20B15A] text-sm font-semibold'>
          FEATURE PROJECT
        </h3>
        <div className=' py-6'>
          <p className='font-bold text-[#000000] text-lg'>
            We provide the Perfect Solution
          </p>
          <p className='font-bold text-[#000000] text-lg'>
            to your business growth
          </p>
        </div>
      </div>

      <div className='grid grid-cols-3 grid-rows-2 mr-60'>
        <div className='row-span-2  ml-24 w-96 '>
          <img
            className='w-96 h-[292px] border rounded-lg'
            src='/Image/rectangle1.png'
            alt='#'
          />
          <p className='text-xs'>App Design - June 20, 2022</p>
          <p className='font-semibold text-[#000000]'>App Redesign</p>
        </div>
        <div className='w-44 ml-40'>
          <img
            className='w-44 h-38 border rounded-lg'
            src='/Image/rectangle2.jpg'
            alt='#'
          />
          <p className='text-xs'>App Design - June 20, 2022</p>
          <p className='font-semibold text-[#000000]'>App Redesign</p>
        </div>
        <div className='w-44  mr-10'>
          <img
            className='w-44 h-38  border rounded-lg'
            src='/Image/rectangle3.jpg'
            alt='#'
          />
          <p className='text-xs'>App Design - June 20, 2022</p>
          <p className='font-semibold text-[#000000]'>
            Redesign channel website landing page
          </p>
        </div>
        <div className='w-44  ml-40'>
          <img
            className='w-44 h-38 border rounded-lg'
            src='/Image/rectangle4.jpg'
            alt='#'
          />
          <p className='text-xs'>App Design - June 20, 2022</p>
          <p className='font-semibold text-[#000000]'>
            Redesign channel website landing page
          </p>
        </div>
        <div className='w-44 '>
          <img
            className='w-44 h-38 border rounded-lg'
            src='/Image/rectangle5.jpg'
            alt='#'
          />
          <p className='text-xs'>App Design - June 20, 2022</p>
          <p className='font-semibold text-[#000000]'>
            Redesign channel website landing page
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureProject;
