import React from "react";

const Slide = () => {
  const data = [
    {
      img: "/public/Image/google.webp",
    },
    {
      img: "/public/Image/Trello.webp",
    },
    {
      img: "/public/Image/monday.png",
    },
    {
      img: "/public/Image/notion.png",
    },
    {
      img: "/public/Image/slack.webp",
    },
  ];
  return (
    <div className=' bg-white  flex shrink-0 items-center gap-40  p-4'>
      {data.map((item, index) => {
        return (
          <img key={index} className='w-24 h-12 ' src={item.img} alt='#' />
        );
      })}
    </div>
  );
};

export default Slide;

{
  /* <div className=' bg-white flex items-center justify-between p-4'>
<img className='w-24 h-12' src='/public/Image/google.webp' alt='#' />
<img className='w-24 h-12' src='/public/Image/Trello.webp' alt='#' />
<img className='w-24 h-12' src='/public/Image/monday.png' alt='#' />
<img className='w-24 h-12' src='/public/Image/notion.png' alt='#' />
<img className='w-24 h-12' src='/public/Image/slack.webp' alt='#' />
</div> */
}
