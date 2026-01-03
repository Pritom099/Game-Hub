import React from 'react';
import useGame from '../hooks/useGame';
import { useParams } from 'react-router';
import LoadingSpinner from '../components/LoadingSpinner';

const GameDetails = () => {
    const {id} = useParams();
    const {games, loading} = useGame();
    const game = games.find( p => String(p.id) === id);

    if (loading) return <LoadingSpinner></LoadingSpinner>
    
    const{coverPhoto, title,developer,downloadLink,category,  ratings,description} = game || {}
    return (
        <div className='min-h-screen p-15'>
            <div className=" bg-base-100  rounded-xl p-8 space-y-5">
                <figure >
                    <img className='h-100 w-full object-cover rounded-xl'
                        src={coverPhoto}
                        alt="Movie" />
                </figure>
                <div className='space-y-5'>
                    <div className='border-b border-gray-400 pb-3'>
                        <h1 className='text-xl font-semibold mb-3'>{developer} - {title}</h1>
                        <p>Developed by :<span className='text-yellow-500'> {developer}</span></p>
                    </div>
                    <div className='grid md:grid-cols-3 gap-15 border-b border-gray-400 pb-3'>
                        <div className='flex-start'>
                            
                            <p>Download Link</p>
                            <p className='text-xl font-bold'>{downloadLink}</p>
                        </div>
                        <div>
                            <p>Average Ratings</p>
                            <p className='text-xl font-bold'>{ratings}</p>
                        </div>
                        <div>
    
                            <p>Category</p>
                            <p className='text-xl font-bold'>{category}</p>
                        </div>
                    </div>
                    <div>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameDetails;