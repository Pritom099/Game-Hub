import React from 'react';

const LoadingSpinner = () => {
    return (
           <div className='flex flex-col items-center justify-center my-15'>
            <span className="loading loading-spinner text-warning mb-3"></span>
            <p className='text-2xl font-semibold'>Loading.....</p>
        </div>
    );
};

export default LoadingSpinner;