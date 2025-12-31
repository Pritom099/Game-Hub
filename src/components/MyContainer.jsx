import React from 'react';

const MyContainer = ({className, children}) => {
    return (
        <div className={`${className} container p-3`}>
            {children}
        </div>
    );
};

export default MyContainer;