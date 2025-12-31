import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FiGithub, FiYoutube } from 'react-icons/fi';
import MyContainer from './MyContainer';

const Footer = () => {
    return (
        <MyContainer>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-15 md:gap-30 border-y border-gray-700 p-6'>
                <div className='space-y-4'>
                    <h1 className='font-bold text-3xl mb-6'>GameHub</h1>
                    <p>Your premier destination for discovering the world's most exciting games. Curated by gamers, for gamers.</p>
                    <div className='flex gap-7'>
                        <FiYoutube size={30} />
                        <FiGithub size={30} />
                        <FaFacebook size={30} />
                    </div>
                </div>
                <div className='space-y-2'>
                    <h1 className='font-bold text-2xl mb-4'>Pages</h1>
                    <p>Home</p>
                    <p>Browse Games</p>
                    <p>About us</p>
                    <p>Contact</p>
                </div>
                <div className='space-y-2'>
                    <p className='font-bold text-2xl mb-4'>Legal</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookie Policy</p>
                </div>
            </div>
            <div className='text-center mt-4 p-7'>
                <p>© 2026 GameHub. All rights reserved.</p>
            </div>
        </MyContainer>
    );
};

export default Footer;