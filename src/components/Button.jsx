import React from "react";

const GetStartedButton = ({ children, onClick }) => {
    return (
        <div className="flex justify-center items-center">
            <button
                onClick={onClick}
                className="group relative flex items-center justify-center gap-3 px-6 py-3
                    text-sm font-medium tracking-wider text-white/90
                    bg-transparent border border-white/20
                    rounded-lg
                    transition-all duration-300
                    hover:border-white/40 hover:text-white
                    focus:outline-none focus:ring-1 focus:ring-white/40"
            >
                {/* Button text */}
                <span className="relative">{children || "GET STARTED"}</span>

                {/* Arrow icon */}
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1 opacity-70 group-hover:opacity-100" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                </svg>
            </button>
        </div>
    );
};

export default GetStartedButton;
