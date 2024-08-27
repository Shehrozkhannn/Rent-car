import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaMapMarker,
  FaMousePointer,
  FaTwitter,
  FaGoogle
} from "react-icons/fa";
import {MdEmail, MdCall} from 'react-icons/md';

const Footer = () => {
  return (
    <div className='bg-white text-black dark:bg-black dark:text-white'>
      {/* top section  */}
      <div className='bg-primary'>
        <div className='container text-black text-center py-10 lg:py-14 text-2xl font-bold
        space-y-4'>
          <p className='uppercase'>We are Ready To Take Your Call 24 hours and 7 days!</p>
          <h1 className='text-3xl md:text-5xl font-bold'>+923232627920</h1>
        </div>
      </div>
      {/* bottom sectionn  */}
      <div className='container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
      gap-10 md:gap-20 py-12'>
        <div className='space-y-6'>
          <h1 className='text-2xl py-3 font-bold uppercase border-b-8
          border-primary'>
            About RentHub
          </h1>
          <p>
          In order to book rent a car, you have to fill in the city of your origin, 
          the destination, your departure date and timings. Once all the details are filled,simply
          click on the 'Search' option. On the portal, you will get a wide range of cab options available
          at different prices.
          </p>
          {/* social links */}
          <div className='flex items-center text-primary gap-3 text-2xl'>
            <FaFacebook/>
            <FaInstagram/>
            <FaGoogle/>
            <FaTwitter/>
          </div>
        </div>
        {/* second section  */}
        <div className='space-y-6'>
        <h1 className='text-2xl py-3 font-bold uppercase border-b-8
          border-primary'>
            Download
          </h1>
          <p>
          In order to book your rent a car, Download  to fill in the city of your origin, 
          the destination, your departure date and timings. Once all the details are filled,simply
          click on the 'Search' option, Download it fast
          </p>
        </div>
        {/* third sec  */}
        <div className='space-y-6'>
          <h1 className='text-2xl py-3 font-bold uppercase border-b-8 border-primary'>
            Contact
          </h1>
          <div className="flex items-center gap-4">
            <FaMapMarker/> 113, Street, Gulshan e Iqbal, Karachi
          </div>
          <div className="flex items-center gap-4">
            <MdCall/> +923232627920
          </div>
          <div className="flex items-center gap-4">
            <MdEmail/> sharozekkhan@gmail.com
          </div>
          <div className="flex items-center gap-4">
            <FaMousePointer/> www.renthub.com
          </div>
        </div>
      </div>
      <p className='text-center py-4 text-sm'>Copyright 2024, All rights reserved</p>
    </div>
  )
}

export default Footer