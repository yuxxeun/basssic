import { useState, useEffect } from 'react';
import { IconArrowTriangleDown, IconArrowTriangleUp } from "justd-icons";
import ScreenDimensions from '../core/ScreenDimensions';

const poem = [
    'Shine, constantly and steadily.',
    'Sit with your ambient ambition.',
    'Find flow.',
];

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false); 
    const [isFadingOut, setIsFadingOut] = useState(false); 
    const [randomPoem, setRandomPoem] = useState('');

  
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * poem.length);
        setRandomPoem(poem[randomIndex]);
    }, []); 

    const handleIconClick = () => {
        if (isVisible) {
            setIsFadingOut(true); 
            setTimeout(() => {
                setIsVisible(false);
                setIsFadingOut(false); 
            }, 300); 
        } else {
            setIsVisible(true);
        }
    };

    return (
            <div className="font-delight border-t border-[#2e2e2e] py-3 mt-14">
                <div className="text-[16px] text-[#666666] max-w-2xl mx-auto lg:px-12 px-6 flex items-center justify-between">
                    <div>
                        <p>
                            {randomPoem}
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <ScreenDimensions/>
                        {isVisible ? (
                                <IconArrowTriangleUp className="w-4 cursor-pointer" 
                                onClick={handleIconClick} />
                            ) : (
                                <IconArrowTriangleDown 
                                className="w-4 cursor-pointer animate-pulse" 
                                onClick={handleIconClick}
                            />
                            )}
                       
                    </div>
                </div>
                {isVisible && (
                    <div className='border-t border-[#2e2e2e] py-16 mt-3 '>                   
                        <p className={`mx-auto lg:px-12 px-6 max-w-2xl ${isFadingOut ? 'animate-fade-out' : 'animate-fade-in'}`}>
                        I’m reciting that <span className='font-newsreaderItalic font-semibold'>quality affects all aspects of my pursuits</span>. 
                        <br />
                        I want to <span className='font-newsreaderItalic font-semibold'>imbue quality</span> in everything I do. This skill develops while <span className='font-newsreaderItalic font-semibold'>doing</span>. Not thinking, not imagining, <span className='font-newsreaderItalic font-semibold'>doing</span>. It is learned through learning and experimenting and consistency and pacing.

                        <br /><br />
                        Above these all, I love You.
                        </p>
                    </div>
                )}
            </div>
    );
};

export default Footer;
