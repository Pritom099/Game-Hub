import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';

const Profile = () => {
    const {user,setUser,signoutUserFunc} = useContext(AuthContext);
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
        <div className='min-h-screen'>
            <div className='p-10 text-center space-y-3 md:w-150  mx-auto bg-white/5 mt-10 rounded-3xl'>
                <img className='h-[400px] rounded-2xl  mx-auto' src={user?.photoURL} alt="" />
                <h2 className='font-semibold'>Name: {user?.displayName}</h2>
                <p className='font-semibold'>Email: {user?.email}</p>
                <button onClick={handleSignout} className="btn border">Sign Out</button>
            </div>
        
        </div>
    );
};

export default Profile;