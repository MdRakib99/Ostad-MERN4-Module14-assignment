import React, { useEffect, useState } from "react";
import { TestimonialItems } from "../APIRequest/APIRequest";

const TestimonialCard = () => {
  const [person, setPerson] = useState([]);
  useEffect(() => {
    (async () => {
      let res = await TestimonialItems();
      setPerson(res);
    })();
  }, []);
  return (
    <div class='grid grid-cols-3 gap-4'>
      {person.map((item, index) => {
        return (
          <div key={index} class='bg-white border rounded-lg overflow-hidden'>
            <div class='relative h-24'>
              <img
                src={item.img}
                alt='#'
                class='w-16 h-16 object-cover rounded-2xl absolute top-2 left-1/2 transform -translate-x-1/2'
              />
            </div>
            <div class='p-4 flex flex-col items-center'>
              <p class='text-lg font-semibold mb-2'>{item.name}</p>
              <p class='text-gray-600 mb-2'>{item.des}</p>
              <p class='text-blue-500'>{item.skill}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TestimonialCard;
