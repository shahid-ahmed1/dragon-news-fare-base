import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/latestNews';


const Home = () => {
    return (
        <div>
{/* header components */}
<header>  <Header></Header>
<section className='w-11/12 mx-auto'>
<LatestNews></LatestNews>
</section>
</header>
          
            {/* main components */}

            {/* footer  */}
        </div>
    );
};

export default Home;