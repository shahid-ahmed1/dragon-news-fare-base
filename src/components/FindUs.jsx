import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';

const FindUs = () => {
    return (
        <div>
                  <h2 className='font-semibold my-3'> Find On Us</h2>
                  <div>
                  <div className="join join-vertical flex *:bg-base-100">
  <button className="btn join-item justify-start"> <FaFacebook></FaFacebook> Facbook</button>
  <button className="btn join-item justify-start"> <FaTwitter></FaTwitter> Twitter</button>
  <button className="btn join-item justify-start"> <FaInstagram></FaInstagram> Instagram</button>
 
</div>
                  </div>
        </div>
    );
};

export default FindUs;