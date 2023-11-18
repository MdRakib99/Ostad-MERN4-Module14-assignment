import React, { useEffect, useState } from "react";

const OurService = () => {
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    // Fetch data from the JSON file
    const fetchData = async () => {
      try {
        const response = await fetch("/database/serviceItem.json");
        const data = await response.json();
        setServiceData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!serviceData) {
    return <div className='text-center mt-8'>Loading...</div>;
  }

  return (
    <div className='container mx-auto p-8'>
      <div>
        <h1 className='font-bold text-xl font-Poppins text-[#000000]'>
          Our Services
        </h1>
        <p className='text-xs py-5'>
          Home &gt; <span className='text-[#20B15A]'>Our Services</span>
        </p>
      </div>
      <div>
        <h3 className='text-[#20B15A] font-semibold py-4'>OUR ALL SERVICES</h3>
        <p className='text-[#000000] font-bold text-2xl'>
          We Provide Best Web design
        </p>
        <p className='text-[#000000] font-bold text-2xl'>Services</p>
      </div>

      <div className='py-5 '>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {serviceData.services.map((service) => (
            <div key={service.id} className='bg-white p-4 rounded-lg shadow-md'>
              <h1 className='text-[#000000] font-bold text-xl py-3'>
                {service.title}
              </h1>
              <p className='text-sm text-[#9D9D9D] py-3'>
                {service.description}
              </p>
              <img
                className='w-full h-48 object-cover mb-4 rounded-md'
                src={service.image}
                alt='#'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurService;

// import React, { useEffect, useState } from "react";

// const OurService = () => {
//   const [serviceData, setServiceData] = useState(null);

//   useEffect(() => {
//     // Fetch data from the JSON file
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/database/serviceItem.json");
//         const data = await response.json();
//         setServiceData(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   if (!serviceData) {
//     return <div className='text-center mt-8'>Loading...</div>;
//   }

//   return (
//     <div className='container mx-auto p-8'>
//       <div>
//         <h1 className='font-bold text-xl font-Poppins text-[#000000]'>
//           Our Services
//         </h1>
//         <p className='text-xs py-5'>
//           Home &gt; <span className='text-[#20B15A]'>Our Services</span>
//         </p>
//       </div>
//       <div>
//         <h3 className='text-[#20B15A] font-semibold py-4'>OUR ALL SERVICES</h3>
//         <p className='text-[#000000] font-bold text-2xl'>
//           We Provide Best Web design
//         </p>
//         <p className='text-[#000000] font-bold text-2xl'>Services</p>
//       </div>

//       <div className='py-5 rounded-md shadow-lg'>
//         <div className='space-y-3'>
//           <h1 className='text-[#000000] font-bold text-xl'>
//             BUILD & LAUNCH WITHOUT PROBLEMS
//           </h1>
//           <p className='text-[#9D9D9D] text-sm'>
//             Increase your team’s productivity and save time with a bot that
//             answers and fields customer inquiries
//           </p>
//         </div>
//         <div className='flex flex-wrap justify-between'>
//           {serviceData.services.map((service) => (
//             <div
//               key={service.id}
//               className='mb-4 w-full sm:w-48 md:w-80 lg:w-96'
//             >
//               <div className='rounded-lg border shadow-lg'>
//                 <img
//                   className='w-full h-48 object-cover rounded-t-md'
//                   src={service.image}
//                   alt='#'
//                 />
//                 <div className='p-4'>
//                   <p className='text-lg font-semibold text-[#000000] mb-2'>
//                     {service.title}
//                   </p>
//                   <p className='text-sm text-[#9D9D9D]'>
//                     {service.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurService;

// import React from "react";

// const OurService = () => {
//   return (
//     <div>
//       <div>
//         <h1 className='font-bold text-xl font-Poppins text-[#000000]'>
//           Our Services
//         </h1>
//         <p className='text-xs py-5'>
//           Home &gt; <span className='text-[#20B15A]'> Our Services</span>
//         </p>
//       </div>
//       <div>
//         <h3 className='text-[#20B15A] font-semibold py-4 '>OUR ALL SERVICES</h3>
//         <p className='text-[#000000] font-bold text-2xl'>
//           We Provide Best Web design
//         </p>
//         <p className='text-[#000000] font-bold   text-2xl'>Services</p>
//       </div>

//       <div className='py-5 rounded-md shadow-lg'>
//         <div className='space-y-3'>
//           <h1 className='text-[#000000] font-bold text-xl'>
//             BUILD & LAUNCH WITHOUT PROBLEMS
//           </h1>
//           <p className='text-[#9D9D9D] text-sm'>
//             Increase your team’s productivity and save time with a bot that
//             answers and fields customer inquiries
//           </p>
//         </div>
//         <div className='flex'>
//           <div className='grid grid-cols-2 grid-rows-2 py-6  mr-[600px] '>
//             <div className='rounded-lg border shadow-lg  w-80 h-40'>
//               <img
//                 className='w-[318px]  h-[164px] object-cover rounded-lg'
//                 src='/Image/service1.jpg'
//                 alt='#'
//               />
//             </div>
//             <div className='rounded-lg  border shadow-lg  w-40 h-[164px] '>
//               <img
//                 className='w-[143px]  h-[164px] object-cover rounded-lg'
//                 src='/Image/service2.jpg'
//                 alt='#'
//               />
//             </div>
//             <div className='rounded-md border shadow-lg w-fit '>
//               <img
//                 className='w-[257px]  h-[263px] object-cover rounded-lg'
//                 src='/Image/service3.webp'
//                 alt='#'
//               />
//             </div>
//             <div className='rounded-md  border shadow-lg  w-60 h-70'>
//               <img
//                 className='w-[248px]  h-[263px] object-cover rounded-lg'
//                 src='/Image/service4.avif'
//                 alt='#'
//               />
//             </div>
//           </div>
//           <div className=''>
//             <div className='grid grid-cols-2 grid-rows-2 py-6  mr-[600px] '>
//               <div className='rounded-lg border shadow-lg  w-80 h-40'>
//                 <img
//                   className='w-[318px]  h-[164px] object-cover rounded-lg'
//                   src='/Image/service1.jpg'
//                   alt='#'
//                 />
//               </div>
//               <div className='rounded-lg  border shadow-lg  w-40 h-[164px] '>
//                 <img
//                   className='w-[143px]  h-[164px] object-cover rounded-lg'
//                   src='/Image/service2.jpg'
//                   alt='#'
//                 />
//               </div>
//               <div className='rounded-md border shadow-lg w-fit '>
//                 <img
//                   className='w-[257px]  h-[263px] object-cover rounded-lg'
//                   src='/Image/service3.webp'
//                   alt='#'
//                 />
//               </div>
//               <div className='rounded-md  border shadow-lg  w-60 h-70'>
//                 <img
//                   className='w-[248px]  h-[263px] object-cover rounded-lg'
//                   src='/Image/service4.avif'
//                   alt='#'
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurService;
