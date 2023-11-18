import React, { useState, useEffect } from "react";
import { GrGroup } from "react-icons/gr";
import { AiOutlineLike } from "react-icons/ai";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { BsQrCodeScan } from "react-icons/bs";

const Card = () => {
  const [cardItems, setCardItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/database/cardItems.json");
      const data = await response.json();
      setCardItems(data);
    };

    fetchData();
  }, []);

  return (
    <div className='flex mx-auto w-[70%] gap-10 '>
      {cardItems.map((item, index) => (
        <div
          key={index}
          className='w-44 h-44 border rounded-lg shadow-2xl flex flex-col items-center justify-center'
        >
          <div className='bg-[#D7F5DC] w-14 h-14 flex items-center justify-center border rounded-lg'>
            {React.createElement(getIconComponent(item.icon), {
              className: "h-8 w-8",
            })}
          </div>
          <h4 className='font-bold py-2 text-[#000000]'>{item.count}</h4>
          <p className='text-xs'>{item.label}</p>
        </div>
      ))}
    </div>
  );
};

const getIconComponent = (iconName) => {
  switch (iconName) {
    case "GrGroup":
      return GrGroup;
    case "AiOutlineLike":
      return AiOutlineLike;
    case "HiOutlineEmojiHappy":
      return HiOutlineEmojiHappy;
    case "BsQrCodeScan":
      return BsQrCodeScan;
    default:
      return null;
  }
};

export default Card;
