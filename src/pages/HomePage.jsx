import React from "react";
import Layout from "../Layout/Layout";
import Banner from "../components/Banner";
import Slide from "../components/Slide";
import WorkList from "../components/WorkList";
import Card from "../components/Card";
import FeatureProject from "../components/FeatureProject";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className='  bg-[#D7F5DC] w-screen h-[750px] py-[10px]  '>
      <div className=' h-20 pt-5 px-20'>
        <Layout />
      </div>
      <div className='px-20'>
        <Banner />
      </div>
      <div className=' w-screen px-16'>
        <Slide />
      </div>
      <div className='my-10 px-20'>
        <WorkList />
      </div>
      <div className='my-20 px-20'>
        <Card />
      </div>
      <div className='bg-[#F0FDF4] px-20'>
        <FeatureProject />
      </div>
      <div className='my-10 px-20'>
        <Subscribe />
      </div>
      <div className='bg-[#000000] px-20'>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
