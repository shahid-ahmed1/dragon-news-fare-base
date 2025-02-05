import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
const LatestNews = () => {
    return (
        <div className='flex my-4 p-2 gap-3 items-center bg-[#F3F3F3]'>
          <p className='text-xl text-white  bg-[#D72050] p-2'>Latest</p>
         <Marquee pauseOnHover={true} speed={100}>
            <Link to='/news'>
            <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
            </Link>
            <Link to='/news'>
            <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
            </Link>
            <Link to='/news'>
            <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
            </Link>
         </Marquee>
        </div>
    );
};

export default LatestNews;