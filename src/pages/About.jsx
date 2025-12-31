import React from 'react';
import MyContainer from '../components/MyContainer';
import { MdOutlineSecurity } from 'react-icons/md';
import { BsLightningCharge } from 'react-icons/bs';
import { RiUserCommunityLine } from 'react-icons/ri';
import { GiChampions } from 'react-icons/gi';

const About = () => {
    return (

        <MyContainer>
            <div className='min-h-screen p-10 flex flex-col items-center space-y-8'>
                <h1 className='text-4xl md:text-7xl font-bold new-btn'>The Future of Gaming</h1>
                <p className='text-center md:text-xl text-gray-300'>GameHub is a community-driven platform dedicated to connecting <br></br> gamers with the titles they love. Our mission is to provide a seamless <br></br> discovery and download experience.</p>
                <div className='flex flex-col md:flex-row gap-10 md:gap-30 mt-5'>
                    <div className=' bg-white/3 w-[500px] h-[250px] rounded-2xl p-7 space-y-4'>
                        <MdOutlineSecurity size={50}/>
                        <h2 className='text-3xl font-bold'>Secure & Trusted</h2>
                        <p className='text-gray-300'>Every game on our platform is verified for safety and security, ensuring your system stays protected while you play.</p>
                    </div>
                    <div className=' bg-white/3 w-[500px] h-[250px] rounded-2xl p-7 space-y-4'>
                        <RiUserCommunityLine size={50}/>
                        <h2 className='text-3xl font-bold'>Gamer Community</h2>
                        <p className='text-gray-300'>Join thousands of fellow enthusiasts. Share reviews, ratings, and strategies for your favorite adventures.</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-10 md:gap-30'>
                    <div className=' bg-white/3 w-[500px] h-[250px] rounded-2xl p-7 space-y-4'>
                        <GiChampions size={50}/>
                        <h2 className='text-3xl font-bold'>Curated Top Titles</h2>
                        <p className='text-gray-300'>We don't just host games; we curate the best experiences from indie developers to AAA studios.</p>
                    </div>
                    <div className=' bg-white/3 w-[500px] h-[250px] rounded-2xl p-7 space-y-4'>
                        <BsLightningCharge size={50}/>
                        <h2 className='text-3xl font-bold'>Lightning Fast</h2>
                        <p className='text-gray-300'>Our infrastructure is optimized for speed, delivering quick downloads and zero latency browsing</p>
                    </div>
                </div>
            </div>
        </MyContainer >

    );
};

export default About;