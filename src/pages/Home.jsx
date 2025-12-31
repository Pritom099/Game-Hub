import React from 'react';
import MyContainer from '../components/MyContainer';

const Home = () => {
    return (
        <div>
            <MyContainer>
                <div className='bg-[url(src/assets/photo-1542751371-adc38448a05e.avif)] bg-cover bg-center bg-no-repeat p-10 h-[600px] bg-black/70 bg-blend-multiply'>
                    <h1 className='md:text-7xl text-4xl font-bold md:my-15 my-5'>Next-Gen <br></br> FPS Action</h1>
                    <p className='md:text-2xl text-lg font-semibold text-gray-300'>Experience the thrill of high-stakes battle royale combat.</p>
                    <button className='btn bg-white text-black mt-5 rounded-2xl font-semibold text-lg p-5'>Browse Now</button>
                </div>
            </MyContainer>
        </div>
    );
};

export default Home;