import React, { useEffect, useState } from "react";

const FeatureProject = () => {
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/database/featuredItem.json");
        const data = await response.json();
        setFeaturedData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!featuredData) {
    return <div className='text-center mt-8'>Loading...</div>;
  }

  return (
    <div className='container mx-auto p-8'>
      <h2 className='text-3xl font-bold text-[#20B15A] mb-6'>
        FEATURE PROJECT
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {featuredData.projects.map((project) => (
          <div key={project.id} className='bg-white p-6 rounded-lg shadow-md'>
            <img
              className='w-full h-48 object-cover mb-4 rounded-md'
              src={project.image}
              alt='#'
            />
            <p className='text-xs text-gray-500 mb-2'>{project.description}</p>
            <p className='text-lg font-semibold text-[#000000] mb-4'>
              {project.title}
            </p>
            <p className='text-xs text-gray-500'>{project.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureProject;
