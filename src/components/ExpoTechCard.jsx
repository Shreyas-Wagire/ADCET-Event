import React from 'react'
import { useNavigate } from 'react-router-dom'

const ExpoTechCard = ({ id = 1, title = "Event Title", description = "Event description", type = "technical" }) => {
    const navigate = useNavigate()

    const handleDiscoverClick = () => {
        navigate(`/event/${id}`)
    }

    const cardStyles = type === "technical" 
        ? "bg-purple-900/20 hover:bg-purple-800/30 group-hover:from-purple-500/30"
        : "bg-blue-900/20 hover:bg-blue-800/30 group-hover:from-blue-500/30";

    const buttonStyles = type === "technical"
        ? "bg-purple-600/20 text-purple-200 group-hover:bg-purple-600/40"
        : "bg-blue-600/20 text-blue-200 group-hover:bg-blue-600/40";

    const underlineStyles = type === "technical"
        ? "bg-gradient-to-r from-purple-500 to-pink-500"
        : "bg-gradient-to-r from-blue-500 to-emerald-500";

    return (
        <div 
            onClick={handleDiscoverClick}
            className={`group relative m-4 h-[350px] w-[300px] cursor-pointer rounded-xl p-8 text-white transition-all duration-500 hover:-translate-y-2 ${cardStyles}`}
        >
            {/* Hover glow effect */}
            <div className={`absolute inset-0 -z-10 rounded-xl bg-gradient-to-br via-transparent to-transparent opacity-0 blur transition-all duration-500 group-hover:opacity-100`}></div>
            
            {/* Content container */}
            <div className="flex h-full flex-col justify-between">
                <div>
                    {/* Event Type Badge */}
                    <div className="mb-3">
                        <span className={`text-xs font-medium uppercase tracking-wider ${type === "technical" ? "text-purple-400" : "text-blue-400"}`}>
                            {type === "technical" ? "Technical" : "Non-Technical"}
                        </span>
                    </div>

                    {/* Title with underline effect */}
                    <h3 className="relative mb-4 text-2xl font-bold tracking-tight">
                        {title}
                        <span className={`absolute -bottom-1 left-0 h-0.5 w-0 ${underlineStyles} transition-all duration-500 group-hover:w-3/4`}></span>
                    </h3>
                    
                    {/* Description */}
                    <p className="text-base text-gray-300 line-clamp-4 transition-all duration-500 group-hover:text-gray-100">
                        {description}
                    </p>
                </div>
                
                {/* Button */}
                <button
                    className={`w-full rounded-lg ${buttonStyles} py-3 text-sm font-medium uppercase tracking-wider transition-all duration-500 flex items-center justify-center gap-2`}
                >
                    View Details
                    <span className="transform transition-transform duration-500 group-hover:translate-x-1">→</span>
                </button>
            </div>
        </div>
    )
}

export default ExpoTechCard