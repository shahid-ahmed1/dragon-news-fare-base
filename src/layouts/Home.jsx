import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/latestNews';
import Navbar from '../components/Navbar';
import LeftNavbar from '../components/layout-components/LeftNavbar';
import RightNavbar from '../components/layout-components/RightNavbar';


const Home = () => {
    return (
        <div className='font-poppins'>
{/* header components */}
<header>  <Header></Header>
<section className='w-11/12 mx-auto'>
<LatestNews></LatestNews>
</section>

</header>
<section className='w-11/12 mx-auto'>
    <Navbar></Navbar>
</section>
          
            {/* main components */}
<main className='w-11/12 mx-auto py-5 grid md:grid-cols-12 gap-3'>
<aside className='left col-span-3'><LeftNavbar></LeftNavbar></aside>
<section className='col-span-6'>Main</section>
<aside className='right col-span-3'><RightNavbar></RightNavbar></aside>
</main>
            {/* footer  */}
        </div>
    );
};

export default Home;