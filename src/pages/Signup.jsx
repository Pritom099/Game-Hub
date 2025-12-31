import React from 'react';
import MyContainer from '../components/MyContainer';
import { Link } from 'react-router';

const Signup = () => {
    return (
        <MyContainer>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white mx-25">
                <div className="max-w-lg text-center lg:text-left">
                    <h1 className="text-5xl font-extrabold drop-shadow-lg">
                        Create Your Account
                    </h1>
                    <p className="mt-4 text-lg text-white/80 leading-relaxed">
                        Join our community and unlock exclusive features. Your journey
                        begins here!
                    </p>
                </div>

                <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
                    <h2 className="text-2xl font-semibold mb-6 text-center text-white">
                        Sign Up
                    </h2>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Photo</label>
                            <input
                                type="text"
                                name="photo"
                                placeholder="Your photo URL here"
                                className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="example@email.com"
                                className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                        </div>

                        <div className="relative">
                            <label className="block text-sm font-medium mb-1">
                                Password
                            </label>
                            <input
                                type='text'
                                name="password"
                                placeholder="••••••••"
                                className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />

                        </div>

                        <button type="submit" className="my-btn">
                            Register
                        </button>

                        <div className="text-center mt-3">
                            <p className="text-sm text-white/80">
                                Already have an account?{" "}
                                <Link
                                    to="/signin"
                                    className="text-white font-bold hover:text-pink-300  underline"
                                >
                                    Sign in
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </MyContainer>
    );
};

export default Signup;