import React from "react";

const GetStartedButton = ({ children, onClick }) => {
    return (
        <div className="flex justify-center items-center">
            <button
                onClick={onClick}
                className="group relative flex items-center justify-center gap-3 px-8 py-4
                    text-base font-bold tracking-wider text-white
                    bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600
                    rounded-xl shadow-lg
                    transition-all duration-300
                    hover:shadow-2xl hover:scale-105
                    focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-950
                    overflow-hidden"
            >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient"></div>

                {/* Button text */}
                <span className="relative z-10">{children || "GET STARTED"}</span>

                {/* Arrow icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 relative z-10 transform transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                </svg>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300 -z-10"></div>
            </button>
        </div>
    );
};

export default GetStartedButton;
