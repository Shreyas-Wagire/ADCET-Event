import React from 'react'
import { useNavigate } from 'react-router-dom'

const ExpoTechCard = ({ id = 1, title = "Expo Tech", description = "ExpoTech, a premier project exhibition event at Walchand College of Engineering, Sangli, is part of the VISION 2025 event." }) => {
    const navigate = useNavigate()

    const handleDiscoverClick = () => {
        navigate(`/event/${id}`)
    }

    return (
        <div 
            onClick={handleDiscoverClick}
            className="group relative m-4 h-[350px] w-[300px] cursor-pointer rounded-xl bg-purple-900/20 p-8 text-white transition-all duration-500 hover:-translate-y-2 hover:bg-purple-800/30"
        >
            {/* Hover glow effect */}
            <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-purple-500/30 via-transparent to-transparent opacity-0 blur transition-all duration-500 group-hover:opacity-100"></div>
            
            {/* Content container */}
            <div className="flex h-full flex-col justify-between">
                <div>
                    {/* Title with underline effect */}
                    <h3 className="relative mb-4 text-2xl font-bold tracking-tight">
                        {title}
                        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 group-hover:w-3/4"></span>
                    </h3>
                    
                    {/* Description */}
                    <p className="text-base text-gray-300 line-clamp-4 transition-all duration-500 group-hover:text-gray-100">
                        {description}
                    </p>
                </div>
                
                {/* Button */}
                <button
                    className="w-full rounded-lg bg-purple-600/20 py-3 text-sm font-medium uppercase tracking-wider text-purple-200 transition-all duration-500 hover:bg-purple-600 group-hover:bg-purple-600/40 flex items-center justify-center gap-2"
                >
                    Get Started
                    <span className="transform transition-transform duration-500 group-hover:translate-x-1">→</span>
                </button>
            </div>
        </div>
    )
}

export default ExpoTechCard