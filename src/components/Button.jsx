import React from "react";

const GetStartedButton = ({ children, onClick }) => {
    return (
        <div className="flex justify-center items-center">
            <button
                onClick={onClick}
                className="relative flex items-center justify-center gap-2 px-8 py-3 text-sm font-bold tracking-wide text-white bg-white/20 rounded-lg shadow-md transition-all duration-300 hover:bg-white hover:text-black hover:shadow-xl hover:-translate-y-1 group" 
            >
                {children || "GET STARTED"}
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
        </div>
    );
};

export default GetStartedButton;
