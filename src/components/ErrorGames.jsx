import React from 'react';

const ErrorGames = ({onBack}) => {
    return (
        <div className='flex flex-col items-center justify-center my-15'>
            <img className='h-60 mb-5' src="/App-Error.png" alt="" />
            <p className='text-3xl font-bold'>OPPS!! Game NOT FOUND</p>
            <p className='text-gray-600'>The App you are requesting is not found on our system.  please try another apps</p>
            <button onClick={onBack} className="btn btn-primary mt-5">Go Back!!</button>
        </div>
    );
};

export default ErrorGames;