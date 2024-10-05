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
        <div className="h-24 w-full bg-gradient-to-b from-[#1a1a1a] to-transparent sticky z-10 top-0"/>
    );
}
