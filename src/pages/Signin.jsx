import React from 'react';
import MyContainer from '../components/MyContainer';
import { Link } from 'react-router';

const Signin = () => {
    return (
        <MyContainer>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
                <div className="max-w-lg text-center lg:text-left">
                    <h1 className="text-5xl font-extrabold drop-shadow-lg">
                        Welcome Back
                    </h1>
                    <p className="mt-4 text-lg text-white/80 leading-relaxed">
                        Sign in to continue your journey. Manage your account, explore new features, and more.
                    </p>
                </div>

                <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
                    <h2 className="text-2xl font-semibold mb-6 text-center text-white">
                        Sign in
                    </h2>

                    <form className="space-y-4">
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
                        <button className="hover:underline cursor-pointer" type="button">Forget password ?</button>

                        <button type="submit" className="my-btn">
                            Sign In
                        </button>

                        <div className="text-center mt-3">
                            <p className="text-sm text-white/80">
                                Don't have an account? {" "}
                                <Link
                                    to="/signup"
                                    className="text-white font-bold hover:text-pink-300  underline"
                                >
                                    Register
                                </Link>
                            </p>
                        </div>
                        {/* Divider */}
                        <div className="flex items-center justify-center gap-2 my-2">
                            <div className="h-px w-16 bg-white/30"></div>
                            <span className="text-sm text-white/70">or</span>
                            <div className="h-px w-16 bg-white/30"></div>
                        </div>
                        {/* Google Signin */}
                        <button
                            type="button"
                            className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
                        >
                            <img
                                src="https://www.svgrepo.com/show/475656/google-color.svg"
                                alt="google"
                                className="w-5 h-5"
                            />
                            Continue with Google
                        </button>
                        {/* Github Signin */}
                        {<button
                            type="button"
                            className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
                        >
                            <img
                                src="https://img.icons8.com/fluency/48/github.png"
                                alt="google"
                                className="w-5 h-5"
                            />
                            Continue with Github
                        </button>}

                    </form>
                </div>
            </div>
        </MyContainer>
    );
};

export default Signin;