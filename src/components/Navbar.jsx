import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import userIcon from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';
const Navbar = () => {
    const {user,logOut}=useContext(AuthContext);
    
      return (
        <div className='flex justify-between items-center py-4'>
            <div className=''>{user && user.email}
            </div>
            <div className='space-x-5'>
                <Link to='/'>Home</Link>
                <Link to='/career' >Career</Link>
                <Link to='about/'>About</Link>
            </div>
         <div className='login flex gap-4 items-center '>
           <img src={userIcon} alt="User Icon" />

           {
            user && user?.email? <button onClick={logOut} className='btn btn-neutral '>Log-out</button>: <NavLink to='/auth/login'> <button className='btn btn-neutral '>Login</button></NavLink>
           }
         
         </div>
        </div>
    );
};

export default Navbar;