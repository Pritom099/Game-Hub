import MyContainer from '../components/MyContainer';
import Banner from '../components/Banner';
import Week from '../components/Week';
import GamesCard from '../components/GamesCard';
import useGame from '../hooks/useGame';
import { Link } from 'react-router';

const Home = () => {
    const { games } = useGame();
    const featuredGames = [...games].sort((a,b) =>b.ratings - a.ratings).slice(0, 6);
    return (
        <div>
            <MyContainer>
                <Banner></Banner>
                <div className='my-10 space-y-5'>
                    <div className='space-y-3 ml-10'>
                        <h1 className='font-bold text-4xl'>Popular Games</h1>
                        <p className='text-gray-300'>Top-rated adventures loved by our community.</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5'>
                        {
                            featuredGames.map((game) => (
                                <GamesCard key={game.id} game={game}></GamesCard>
                            ))
                        }
                    </div>
                    <div className='flex justify-center'>
                        <Link to={'/browse'} className='btn bg-white text-black font-bold rounded-xl hover:bg-amber-300'>Show All</Link>
                    </div>
                </div>
                <Week></Week>
            </MyContainer>
        </div>
    );
};

export default Home;