import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import userIcon from '../assets/user.png'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center py-4'>
            <div className=''>
            </div>
            <div className='space-x-5'>
                <Link to='/'>Home</Link>
                <Link to='/career' >Career</Link>
                <Link to='about/'>About</Link>
            </div>
         <div className='login flex gap-4 items-center '>
           <img src={userIcon} alt="User Icon" />
          <NavLink to='/login'> <button className='btn btn-neutral '>Login</button></NavLink>
         </div>
        </div>
    );
};

export default Navbar;