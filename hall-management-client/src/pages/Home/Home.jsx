import React, { useState, useEffect } from 'react';
import AboutSection from './AboutSection';
import Banner from './Banner';
import logo from '../../assets/photos/RUET2.png';
import Loader from '../Common/Loader';
import ResourcesSection from './ResourcesSection';

const Home = () => {
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        // Simulate data loading
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);
        
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader fullScreen />;
    }

    return (
        <div>
            <Banner />
            <AboutSection />
            
            {/* New Interactive Resources Section */}
            <ResourcesSection />
            
            <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
                <div>
                    <a
                        title="University Website"
                        href="https://www.ruet.ac.bd/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-20 h-24 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
                    >
                        <img
                            className="object-contain object-center w-full h-full"
                            src={logo}
                            alt="RUET Logo"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;