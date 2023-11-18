import React, { useEffect, useState } from "react";

const ProjectImage = () => {
  const [project, setProject] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/database/projectItems.json");
        const data = await response.json();
        setProject(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {project &&
          project.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-lg overflow-hidden shadow-md'
            >
              <img
                className='w-full h-48 object-cover'
                src={item.img}
                alt={item.title}
              />
              <div className='p-4'>
                <p className='text-[#000000] font-bold text-lg mb-2'>
                  {item.title}
                </p>
                <p className='text-[#9D9D9D] text-sm'>{item.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectImage;
