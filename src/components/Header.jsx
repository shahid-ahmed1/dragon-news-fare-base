import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment/moment';
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-4 py-4'>
            <div>
                <img className='w-[350px]' src={logo} alt="" />
            </div>
            <div>
                <h4 className='text-xl text-gray-400'>Journalism Without Fear or Favour</h4>
                <h4 className='mt-2 l '>{
                    moment().format('LLLL')}
                    </h4>
            </div>
            </div>
       
    );
};

export default Header;