import React from "react";

const TeamMembers = () => {
  let data = [
    { id: 1, img: "/Image/member1.jpg", name: "Devon Lane" },
    { id: 2, img: "/Image/member2.jpg", name: "Alex Lov" },
    { id: 3, img: "/Image/member3.webp", name: "Danny Bailey" },
  ];
  return (
    <div>
      <div>
        <h1 className='font-bold text-xl font-Poppins text-[#000000]'>Team</h1>
        <p className='text-xs py-5'>
          Home &gt; <span className='text-[#20B15A]'>Team</span>
        </p>
      </div>
      <div>
        <h3 className='text-[#20B15A] font-semibold py-4'>OUR TEAM MEMBER</h3>
        <p className='text-[#000000] font-bold'>Check our awesome team</p>
        <p className='text-[#000000] font-bold'>members</p>
      </div>
      <div>
        <div className='flex gap-5 justify-between w-[900px] mx-auto py-5'>
          {data.map((item, index) => {
            return (
              <div className='relative'>
                <img
                  className='h-80 w-60 rounded-lg  shadow-lg'
                  key={index}
                  src={item.img}
                  alt={item.id}
                />
                <p className='absolute bottom-0 left-0 right-0 bg-white p-5 text-center rounded-b-lg text-[#000000] font-bold'>
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
