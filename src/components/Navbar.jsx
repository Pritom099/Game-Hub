import React, { useContext } from 'react';
import { IoGameControllerOutline } from 'react-icons/io5';
import MyContainer from './MyContainer';
import { Link } from 'react-router';
import MyLink from './MyLink';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { signoutUserFunc, setUser, loading, user } = useContext(AuthContext);

    const handleSignout = () => {
        signoutUserFunc()
            .then(() => {
                toast.success("Signout Successful");
                setUser(null);
            })
            .catch((e) => {
                toast.error(e.message);
            });
    };

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
                        <li><MyLink to={"/"}>Home</MyLink></li>
                        <li><MyLink to={"/browse"}>Browse</MyLink></li>
                        <li><MyLink to={"/about"}>About</MyLink></li>
                        <li><MyLink to={"/profile"}>Profile</MyLink></li>
                    </ul>
                </div>
                <div className='flex items-center md:ml-6'>
                    <IoGameControllerOutline size={30} />
                    <a className="btn btn-ghost text-2xl new-btn">GameHub</a>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    <li><MyLink to={"/"}>Home</MyLink></li>
                    <li><MyLink to={"/browse"}>Browse</MyLink></li>
                    <li><MyLink to={"/about"}>About</MyLink></li>
                    <li><MyLink to={"/profile"}>Profile</MyLink></li>

                </ul>
            </div>
            {
                user ? (<div className="text-center space-y-3 navbar-end  md:mr-15 ">

                    {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
                    {/* For TSX uncomment the commented types below */}
                    <button className="btn" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
                        <img src={user?.photoURL || "https://via.placeholder.com//88"} className="h-[40px] w-[40px] rounded-full mx-auto" alt="" />
                    </button>

                    <div className="dropdown menu w-52 rounded-box shadow-sm bg-white"
                        popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}>

                        <h2 className="text-xl font-semibold text-black">{user?.displayName}</h2>
                        <p className="text-black font-semibold">{user?.email}</p>
                        <button onClick={handleSignout} className="btn border">Sign Out</button>
                    </div>
                </div>) : 
                <div className="navbar-end gap-4 md:mr-13">
                    <Link to={'/signin'} className='btn bg-white text-black p-4 rounded-xl font-bold'>Login</Link>
                    <Link to={'/signup'} className='btn bg-white text-black p-4 rounded-xl font-bold'>Register</Link>
                </div>
            }

        </MyContainer>
    );
};

export default Navbar;