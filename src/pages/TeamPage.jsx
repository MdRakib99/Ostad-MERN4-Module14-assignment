import React from "react";
import Layout from "../Layout/Layout";
import TeamMembers from "../components/TeamMembers";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const TeamPage = () => {
  return (
    <div className='bg-[#F8F9FC] w-screen h-[200px] py-[10px] '>
      <div className=' h-20 pt-5 px-20'>
        <Layout />
      </div>
      <div className=' h-20 pt-5 px-20'>
        <TeamMembers />
      </div>
      <div className='mt-[550px] pb-16 px-20'>
        <Subscribe />
      </div>
      <div className='bg-[#000000] px-20'>
        <Footer />
      </div>
    </div>
  );
};

export default TeamPage;
