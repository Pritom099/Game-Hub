import React from 'react';
import { Link } from 'react-router';

const GamesCard = ({game}) => {
    const{coverPhoto,category, title,  ratings,id} = game
    return (
        <div className="card bg-base-100  shadow-xl">
            <figure className='h-48 overflow-hidden'>
                <img className='w-full object-cover'
                   src={coverPhoto}
                    alt="Shoes" />
            </figure>
            <div className="card-body space-y-2">
                <p className='btn w-1/3 border border-gray-600 rounded-xl p-2'>{category}</p>
                <h2 className="card-title">
                    {title}
                </h2>
                <div className="card-actions flex items-center justify-between">
                    <div className="bg-orange-200 badge badge-outline p-3 text-orange-600 font-bold border-none"><img className='h-4' src="/public/icon-ratings.png" alt="" />{ratings}</div>
                    <div>
                        <Link to={`/game/${id}`} className='btn bg-white text-black rounded-2xl'>
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GamesCard;