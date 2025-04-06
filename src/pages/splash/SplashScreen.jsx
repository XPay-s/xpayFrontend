import React, { useEffect } from 'react';
import { images } from '../../contants/images';
import { useNavigate } from 'react-router-dom';

function SplashScreen() {
     const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/onboardone") 
        }, 3000); 

        return () => clearTimeout(timer);
    }
    , [navigate]);
    return (
        <div className="w-full h-screen flex justify-center items-center bg-deep-charcoal">
            <div className="w-full max-w-[420px] m-4 flex justify-center">
                <img src={images.logo} alt="Logo" className="h-12" />
            </div>
        </div>
    );
}

export default SplashScreen;
