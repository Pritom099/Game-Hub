import React, { useState } from 'react';
import { } from 'react-router';
import GamesCard from '../components/GamesCard';
import useGame from '../hooks/useGame';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorGames from '../components/ErrorGames';

const Browse = () => {
    const [search, setSearch] = useState('');
    const { games, loading } = useGame();
    // console.log(games);
    const term = search.trim().toLocaleLowerCase()
    const searchedApps = term ? games.filter(product => product.title.toLocaleLowerCase().includes(term)) : games

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    if (!searchedApps.length) {
        return (
            <ErrorGames onBack={() => setSearch('')}></ErrorGames>
        )
    }
    return (
        <div className='min-h-screen p-10 '>
            <div className='flex flex-col  items-center '>
                <h1 className='text-4xl font-bold mb-2 new-btn'>Our All Games</h1>
                <p className='text-gray-400'>Explore All Games on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex items-center justify-between'>
                <div className='my-7'>
                    <p className='text-xl font-semibold'>({searchedApps.length}) Games Found</p>
                </div>
                <div>
                    <label className="input border-2 border-blue-400">
                        <input value={search} onChange={e => setSearch(e.target.value)} type='search' placeholder="Search games" />
                    </label>
                </div>
            </div>

            <div>
                {
                    loading ? (
                        <LoadingSpinner></LoadingSpinner>
                    ) : (
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                            {
                                searchedApps.map(game => (
                                    <GamesCard key={game.id} game={game}></GamesCard>
                                ))
                            }
                        </div>
                    )
                }



            </div>
        </div>
    );
};

export default Browse;