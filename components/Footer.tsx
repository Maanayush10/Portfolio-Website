import React from 'react';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/data';

const Footer = () => {
    return (
        <footer className='w-full pt-20 pb-10 relative' id="contact">
            <img
                src="/footer-grid.svg"
                alt="grid"
                className="absolute inset-0 w-full h-full object-cover opacity-50" // Positioning the image as a background
            />
            <div className='relative z-10 flex flex-col items-center'> {/* Ensuring this div is above the background image */}
                <h1 className="heading lg:max-w-[45vw] text-center">
                    Need <span className="text-purple">help</span> with DSA or Interviews?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Feel free to reach out to me!
                </p>
                <a href="mailto:maanayush1002@gmail.com">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>
            <div className="relative z-10 flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">
                    Copyright © 2024 Ayushman
                </p>

                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((info) => (
                        <a key={info.id} href={info.link} target="_blank">
                            <div
                                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                            >
                                <img src={info.img} alt="icons" width={20} height={20} />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
