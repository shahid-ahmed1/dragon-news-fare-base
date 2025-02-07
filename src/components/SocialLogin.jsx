import React from 'react';
import { FaGoogle } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-semibold mt-1'>Login Width</h2>
            <div className=''>
            <button className='btn w-full mt-3'> <FaGoogle></FaGoogle> Login with Google</button>
            <button className='btn mt-3 w-full'><FaGithub></FaGithub>Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;