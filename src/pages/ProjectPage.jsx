import React from "react";
import Layout from "../Layout/Layout";
import AllProjects from "../components/AllProjects";
import ProjectImage from "../components/ProjectImage";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const ProjectPage = () => {
  return (
    <div className='bg-[#F8F9FC] w-screen h-[200px] py-[10px] '>
      <div className=' h-20 pt-5 px-20'>
        <Layout />
      </div>
      <div className=' h-20 pt-5 px-20'>
        <AllProjects />
      </div>
      <div className='mt-36 pt-5 px-20'>
        <ProjectImage />
      </div>

      <div className='mt-[80px] pb-16 px-20'>
        <Subscribe />
      </div>

      <div className='bg-[#000000] px-20'>
        <Footer />
      </div>
    </div>
  );
};

export default ProjectPage;
