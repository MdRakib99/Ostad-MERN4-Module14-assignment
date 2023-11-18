import React, { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { RiHeart2Line } from "react-icons/ri";
import { MdWorkHistory } from "react-icons/md";
import { LuActivitySquare } from "react-icons/lu";

const WorkList = () => {
  const [workItems, setWorkItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/database/worklist.json");
        const data = await response.json();
        setWorkItems(data);
      } catch (error) {
        console.error("Error fetching worklist data:", error);
      }
    };

    fetchData();
  }, []);

  const getIconComponent = (iconName) => {
    switch (iconName) {
      case "LuActivitySquare":
        return <LuActivitySquare className='w-8 h-8' />;
      case "RiHeart2Line":
        return <RiHeart2Line className='w-8 h-8' />;
      case "MdWorkHistory":
        return <MdWorkHistory className='w-8 h-8' />;
      default:
        return null; // Handle unknown icon names
    }
  };

  return (
    <div className='flex gap-10'>
      {workItems.map((work, index) => (
        <div key={index}>
          <div className='bg-[#D7F5DC] w-14 h-14 flex items-center justify-center border rounded-lg'>
            {getIconComponent(work.icon)}
          </div>

          <h2 className='text-[#000000] font-semibold'>{work.title}</h2>
          <p>{work.description}</p>
          <p className='flex items-center text-sm mt-5'>
            Learn More{" "}
            <span>
              <FaLongArrowAltRight className='w-6 h-4 items-center justify-center' />
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default WorkList;

// import React from "react";
// import { LuActivitySquare } from "react-icons/lu";
// import { RiHeart2Line } from "react-icons/ri";
// import { MdWorkHistory } from "react-icons/md";
// import { FaLongArrowAltRight } from "react-icons/fa";

// const WorkList = () => {
//   return (
//     <div>
//       <div>
//         <span className='text-[#20B15A] font-semibold text-sm '>WORK LIST</span>
//         <div className='text-[#000000] font-bold text-lg my-3'>
//           <p>We provide the Perfect Solution</p>
//           <p>to your business growth</p>
//         </div>
//       </div>
//       <div className='flex my-10 gap-10 '>
//         <div>
//           <div className=' bg-[#D7F5DC] w-14 h-14 flex items-center justify-center border rounded-lg'>
//             <LuActivitySquare className='w-8 h-8 ' />
//           </div>

//           <h2 className='text-[#000000]  font-semibold'>Grow Your Business</h2>
//           <p>We help identify the best ways to improve your business</p>
//           <p className='flex items-center text-[#000000] text-sm mt-5'>
//             Learn More{" "}
//             <span>
//               <FaLongArrowAltRight className='w-6 h-4 items-center justify-center' />
//             </span>
//           </p>
//         </div>
//         <div>
//           <div className=' bg-[#D7F5DC] w-14 h-14 flex items-center justify-center border rounded-lg'>
//             <RiHeart2Line className='w-8 h-8' />
//           </div>

//           <h2 className='text-[#000000]  font-semibold'>
//             Improve brand loyalty
//           </h2>
//           <p>We help identify the best ways to improve your business</p>
//           <p className='flex items-center text-sm  mt-5'>
//             Learn More{" "}
//             <span>
//               <FaLongArrowAltRight className='w-6 h-4 items-center justify-center' />
//             </span>
//           </p>
//         </div>

//         <div>
//           <div className=' bg-[#D7F5DC] w-14 h-14 flex items-center justify-center border rounded-lg'>
//             <MdWorkHistory className='w-8 h-8' />
//           </div>

//           <h2 className='text-[#000000] font-semibold'>
//             Improve Business Model
//           </h2>
//           <p>We help identify the best ways to improve your business</p>
//           <p className='flex items-center text-sm  mt-5'>
//             Learn More{" "}
//             <span>
//               <FaLongArrowAltRight className='w-6 h-4 items-center justify-center' />
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WorkList;
