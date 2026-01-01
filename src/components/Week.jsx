import React from 'react';

const Week = () => {
    return (
        <div className="rounded-3xl bg-gradient-to-br from-primary/5 via-blue-200/20 to-background border border-primary/20 p-8 md:p-16 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Stay in the Loop</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mb-8">
                Get weekly updates on new game releases, reviews, and exclusive member discounts delivered straight to your
                inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md ">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="border border-gray-500 p-6 rounded-2xl h-12 bg-background/50"
                    required
                />
                <button type="submit" size="lg" className="rounded-full px-8 h-12 bg-white text-black font-semibold">
                    Subscribe
                </button>
            </form>
        </div>
    );
};

export default Week;