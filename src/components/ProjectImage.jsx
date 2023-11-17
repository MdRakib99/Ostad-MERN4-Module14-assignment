import React from "react";

const ProjectImage = () => {
  let data = [
    {
      title: "Lorem ipsum dolor sit consectutar",
      img: "/Image/project1.png",
    },
    {
      title: "Lorem ipsum dolor sit consectutar",
      img: "/Image/project2.png",
    },
    {
      title: "Lorem ipsum dolor sit consectutar",
      img: "/Image/project3.png",
    },
    {
      title: "Lorem ipsum dolor sit consectutar",
      img: "/Image/project4.jpg",
    },
    {
      title: "Lorem ipsum dolor sit consectutar",
      img: "/Image/project5.jpg",
    },
    {
      title: "Lorem ipsum dolor sit consectutar",
      img: "/Image/project6.jpg",
    },
  ];
  return (
    <div>
      <div class='grid grid-cols-2 gap-4'>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className='border rounded-lg overflow-hidden  aspect-auto justify-center'
            >
              <img className='object-cover rounded-lg' src={item.img} alt='' />
              <div class='p-4'>
                <p class='text-center text-[#000000] font-bold'>{item.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectImage;
