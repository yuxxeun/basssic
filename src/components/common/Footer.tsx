import { useState, useEffect } from 'react';
import { IconBrandAstro, IconBrandReactjs, IconBrandVercel, IconShieldKeyhole } from "justd-icons";
import Container from "./Container";

const poem = [
    'Shine, constantly and steadily.',
    'Sit with your ambient ambition.',
    'Find flow.',
    'Embrace the journey, not the destination.',
];

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false); // State untuk kontrol tampilan teks
    const [isFadingOut, setIsFadingOut] = useState(false); // State untuk kontrol animasi
    const [randomPoem, setRandomPoem] = useState(''); // State untuk teks acak
    const currentYear = new Date().getFullYear();

    // Mengambil teks acak saat komponen dimuat
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * poem.length);
        setRandomPoem(poem[randomIndex]);
    }, []); // Kosong untuk hanya dijalankan sekali saat komponen dimuat

    const handleIconClick = () => {
        if (isVisible) {
            setIsFadingOut(true); // Set fading out sebelum menyembunyikan teks
            setTimeout(() => {
                setIsVisible(false);
                setIsFadingOut(false); // Reset fading out
            }, 300); // Waktu yang sama dengan durasi animasi
        } else {
            setIsVisible(true); // Tampilkan teks
        }
    };

    return (
        <Container>
            <div className="text-md border-t border-gray-500 py-5 mt-14">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="font-sans">
                            {randomPoem}
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        {currentYear}
                        <IconBrandReactjs 
                            className="animate-spin cursor-pointer" 
                            onClick={handleIconClick}
                        />
                    </div>
                </div>
                {isVisible && (
                    <p className={`border-t border-gray-500 py-10 mt-5  ${isFadingOut ? 'animate-fade-out' : 'animate-fade-in'}`}>
                       I’m reciting that <span className='font-newsreader italic font-extrabold'>quality affects all aspects of my pursuits</span>. I want to <span className='font-newsreader italic font-extrabold'>imbue quality</span> in everything I do. This skill develops while <span className='font-newsreader italic font-extrabold'>doing</span>. Not thinking, not imagining, <span className='font-newsreader italic font-extrabold'>doing</span>. It is learned through learning and experimenting and consistency and pacing.
                    </p>
                )}
            </div>
        </Container>
    );
};

export default Footer;
