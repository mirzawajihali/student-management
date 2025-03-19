import React from 'react';
import AboutSection from './AboutSection';
import Banner from './Banner';
import logo from '../../assets/photos/RUET2.png';
import { BannerPro } from './BannerPro';

const Home = () => {
    return (
        <div>
           <Banner></Banner>

            <AboutSection />
            

            
            <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
  <div>
    <a
      title="Pay me"
      href="https://www.ruet.ac.bd/"
      target="_blank"
      className="block 
 w-20 h-24 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
    >
      <img
        className="object-contain object-center w-full h-full"
        src={logo}
        alt="Buy me a pizza"
      />
    </a>
  </div>
</div>
           
    
       
        </div>
    );
};

export default Home;