import React from 'react';
import Image from 'next/image';
import CarBooking from '../../assets/car-rent-2.webp';
import AppStoreImg from '../../assets/app_store.png';
import PlayStoreImg from '../../assets/play_store.png';

const AppStore = () => {
  return (
    <div className='bg-[#f5f5f5] dark:bg-black dark:text-white'>
      <div className="container">
            {/* header  */}
            <div className='space-y-3 uppercase text-center py-14'>
            <p className='text-primary text-2xl font-semibold uppercase'>Download</p>
            <h1 data-aos='fade-up' data-aos-delay='300' 
            className='text-3xl font-bold'
            >Best Rent A Car Service</h1>
          </div>
          {/* card section  */}
          <div data-aos='fade-up' 
          className='grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center'>
          <div className='space-y-8 max-w-[400px] mx-auto'>
            <h1 className='text-2xl font-bold'>
              Download the Car Voucher app free! Get Exciting new offers.
            </h1>
            <p className=''>We are delivering the best vouchers for the first ten persons
              who registered them selves first , we will give them first two rides free
            </p>
            {/* logo section  */}
            <div className='flex flex-wrap justify-center sm:justify-start items-center'>
                <a href="#">
                  <Image
                  src={AppStoreImg}
                  className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'
                  />
                </a>
                <a href="#">
                  <Image
                  src={PlayStoreImg}
                  className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'
                  />
                </a>
            </div>
          </div>
          <div>
            <Image src={CarBooking} className='max-w-[400px]'/>
          </div>
          </div>
      </div>
      
    </div>
  )
}

export default AppStore