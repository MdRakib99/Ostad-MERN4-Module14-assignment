import React from "react";
import { GrGroup } from "react-icons/gr";
import { AiOutlineLike } from "react-icons/ai";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { BsQrCodeScan } from "react-icons/bs";
const Card = () => {
  return (
    <div className='flex gap-20 '>
      <div className=' w-44 h-44 border rounded-lg shadow-2xl flex flex-col items-center justify-center'>
        <div className=' bg-[#D7F5DC] w-14 h-14 flex items-center justify-center border rounded-lg '>
          <GrGroup className='h-8 w-8' />
        </div>

        <h4 className='font-bold py-2 text-[#000000]'>240452</h4>
        <p className='text-xs'>Followers</p>
      </div>
      <div className=' w-44 h-44 border rounded-lg shadow-2xl flex flex-col items-center justify-center'>
        <div className=' bg-[#D7F5DC] w-14 h-14 flex items-center justify-center border rounded-lg'>
          <AiOutlineLike className='h-8 w-8' />
        </div>

        <h4 className='font-bold py-2 text-[#000000]'>6300</h4>
        <p className='text-xs'>Solved problems</p>
      </div>
      <div className=' w-44 h-44 border rounded-lg shadow-2xl flex flex-col items-center justify-center'>
        <div className=' bg-[#D7F5DC] w-14 h-14 flex items-center justify-center border rounded-lg'>
          <HiOutlineEmojiHappy className='h-8 w-8' />
        </div>
        <h4 className='font-bold py-2 text-[#000000]'>2500</h4>
        <p className='text-xs'>Happy customers</p>
      </div>
      <div className=' w-44 h-44 border rounded-lg shadow-2xl flex flex-col items-center justify-center'>
        <div className=' bg-[#D7F5DC] w-14 h-14 flex items-center justify-center border rounded-lg'>
          <BsQrCodeScan className='h-8 w-8' />
        </div>

        <h4 className='font-bold py-2 text-[#000000]'>360452</h4>
        <p className='text-xs'>Projects</p>
      </div>
    </div>
  );
};

export default Card;
