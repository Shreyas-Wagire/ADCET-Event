import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaCode, FaMicrophone, FaLightbulb, FaGamepad, FaFootballBall, FaMapMarkedAlt, FaBrain } from 'react-icons/fa'

const ExpoTechCard = ({ id = 1, title = "Event Title", description = "Event description", type = "technical" }) => {
    const navigate = useNavigate()
    const [tilt, setTilt] = useState({ x: 0, y: 0 })

    const handleDiscoverClick = () => {
        navigate(`/event/${id}`)
    }

    // 3D tilt effect on mouse move
    const handleMouseMove = (e) => {
        const card = e.currentTarget
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = (y - centerY) / 10
        const rotateY = (centerX - x) / 10

        setTilt({ x: rotateX, y: rotateY })
    }

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 })
    }

    // Icon mapping for each event
    const eventIcons = {
        1: FaBrain,        // Apti-Master
        2: FaCode,         // Mini Hackathon
        3: FaMicrophone,   // Group Discussion
        4: FaLightbulb,    // Innoprotex
        5: FaGamepad,      // BGMI
        6: FaFootballBall, // Box Cricket
        7: FaMapMarkedAlt  // Treasure Hunt
    }

    const Icon = eventIcons[id] || FaLightbulb

    const cardStyles = type === "technical"
        ? "from-purple-500/30 to-pink-500/30"
        : "from-blue-500/30 to-emerald-500/30";

    const buttonStyles = type === "technical"
        ? "from-purple-600 to-pink-600"
        : "from-blue-600 to-emerald-600";

    const iconColor = type === "technical"
        ? "from-purple-400 to-pink-400"
        : "from-blue-400 to-emerald-400";

    return (
        <div
            onClick={handleDiscoverClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative m-4 h-[380px] w-[320px] cursor-pointer rounded-2xl p-8 text-white transition-all duration-500 hover:-translate-y-3 glass-strong"
            style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(${tilt.x !== 0 || tilt.y !== 0 ? '-12px' : '0'})`,
                transition: tilt.x === 0 && tilt.y === 0 ? 'transform 0.5s ease' : 'none'
            }}
        >
            {/* Animated gradient border */}
            <div className={`absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br ${cardStyles} opacity-0 group-hover:opacity-100 blur transition-all duration-500`}></div>

            {/* Shimmer effect on hover */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </div>

            {/* Content container */}
            <div className="relative flex h-full flex-col justify-between z-10">
                <div>
                    {/* Icon and Badge Row */}
                    <div className="flex items-start justify-between mb-4">
                        {/* Event Icon */}
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${cardStyles} group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className={`text-3xl bg-gradient-to-br ${iconColor} bg-clip-text text-transparent`} />
                        </div>

                        {/* Event Type Badge */}
                        <span className={`text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-full ${type === "technical" ? "bg-purple-500/20 text-purple-300" : "bg-blue-500/20 text-blue-300"
                            }`}>
                            {type === "technical" ? "Technical" : "Non-Tech"}
                        </span>
                    </div>

                    {/* Title with gradient underline */}
                    <h3 className="relative mb-4 text-2xl font-bold tracking-tight">
                        <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            {title}
                        </span>
                        <div className={`mt-2 h-1 w-0 rounded-full bg-gradient-to-r ${type === "technical" ? "from-purple-500 to-pink-500" : "from-blue-500 to-emerald-500"
                            } transition-all duration-500 group-hover:w-full`}></div>
                    </h3>

                    {/* Description */}
                    <p className="text-base text-gray-300 line-clamp-4 transition-all duration-300 group-hover:text-gray-100 leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Enhanced Button */}
                <button
                    className={`relative overflow-hidden w-full rounded-xl bg-gradient-to-r ${buttonStyles} py-3.5 text-sm font-bold uppercase tracking-wider transition-all duration-500 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl`}
                >
                    <span className="relative z-10">View Details</span>
                    <span className="relative z-10 transform transition-transform duration-500 group-hover:translate-x-1">→</span>

                    {/* Button shine effect */}
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                </button>
            </div>

            {/* Glow effect */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cardStyles} opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-20 blur-2xl`}></div>
        </div>
    )
}

export default ExpoTechCard