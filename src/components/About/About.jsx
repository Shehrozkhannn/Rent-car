import React from 'react';
import BgImage from '../../assets/girl.jpg';
import BannerCard from './BannerCard.jsx';
import {SlStar} from 'react-icons/sl';

const bgStyle = {
  backgroundImage: `url(${BgImage.src})`, 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '520px',
  width: '100vw'
};
const About = () => {
  return (
    <div style={bgStyle}>
      <div className="text-white bg-black/80 min-h-[530px] flex items-center py-10">
        <div className="container">
          {/* header section  */}
          <div className='space-y-3 uppercase text-center py-14'>
            <p className='text-primary text-2xl font-semibold uppercase'>We Do Best</p>
            <h1 data-aos='fade-up' data-aos-delay='300' 
            className='text-3xl font-bold'>Then You Wish</h1>
          </div>

          {/* card section  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className='space-y-8'>
              <BannerCard
              title={"Wide Range Of Vehicles"}
              description= {
                "Offer a diverse fleet of vehicles, from economy cars to luxury model."
              }
              icon= {<SlStar/>}
              />
                <BannerCard
              title={"Affordable and Transparent Pricing"}
              description= {
                "Provide competitive rates with clear pricing structures. Avoid hidden fees to build trust with customers"
              }
              icon= {<SlStar/>}
              />
            </div>
            <div className='space-y-8'>
            <BannerCard
              title={"Fast Booking"}
              description= {
                "Book your car for the better drive we will give you the best services"
              }
              icon= {<SlStar/>}
              />
                <BannerCard
              title={"Well-Maintained Vehicles"}
              description= {
                "Regularly service and maintain vehicles to ensure safety and cleanliness."
              }
              icon= {<SlStar/>}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About