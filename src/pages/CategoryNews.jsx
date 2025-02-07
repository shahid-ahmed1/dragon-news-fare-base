import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCart from '../components/NewsCart';

const CategoryNews = () => {
    const {data:news} = useLoaderData();

    return (
        <div>
            <h2 className='font-semibold'>Dragon News Home</h2>

            <div> 
                {
              news.map(singleNews=> <NewsCart key={singleNews._id} news={singleNews}></NewsCart>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;