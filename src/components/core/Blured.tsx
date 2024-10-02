// src/components/Blured.js
import { useEffect, useState } from 'react';

export default function Blured() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <div className="py-5 fixed top-0 z-50 w-full h- 10 bg-gradient-to-t from-[#2e2e2e]/10 to-[#2e2e2e]/10 backdrop-blur-sm flex items-center justify-center">
                    
                </div>
            )}
        </>
    );
}
