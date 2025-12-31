import React from 'react';
import { IoGameControllerOutline } from 'react-icons/io5';
import MyContainer from './MyContainer';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <MyContainer className="navbar bg-base-100 shadow-sm bg-black border-b border-gray-700 p-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold">
                        <li><a>Home</a></li>
                        <li><a>Browse</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
                <div className='flex items-center md:ml-6'>
                    <IoGameControllerOutline size={30} />
                    <a className="btn btn-ghost text-2xl new-btn">GameHub</a>
                </div>
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    <li><a>Home</a></li>
                    <li><a>Browse</a></li>
                    <li><a>About</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-4 md:mr-13">
                <Link to={'/signin'} className='btn bg-white text-black p-4 rounded-xl font-bold'>Signin</Link>
                <Link to={'/signup'} className='btn bg-white text-black p-4 rounded-xl font-bold'>Register</Link>
            </div>
        </MyContainer>
    );
};

export default Navbar;