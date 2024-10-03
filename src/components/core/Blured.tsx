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
            <div className='blur'>
                <div className='overlay'></div>
            </div>
        </>
    );
}
