import React from 'react';
import CountdownTimer from './CountdownTimer';

const DisplayLine = () => {
    const scrollToEvents = () => {
        const eventsSection = document.getElementById('events-section');
        if (eventsSection) {
            eventsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
            {/* Animated Background Circles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Large circle outline */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-blue-500/10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-purple-500/5"></div>
            </div>

            {/* Technical Data Elements - Left Side */}
            <div className="absolute left-4 md:left-8 top-1/3 space-y-4 text-xs text-gray-600 font-mono hidden md:block">
                <div className="opacity-50">SYSTEM.INITIALIZED</div>
                <div className="opacity-30">CORE.STABLE</div>
            </div>

            {/* Technical Data Elements - Right Side */}
            <div className="absolute right-4 md:right-8 top-1/3 space-y-4 text-xs text-gray-600 font-mono hidden md:block text-right">
                <div className="opacity-50">FLUX.CAPACITY: 88%</div>
                <div className="opacity-30">TARGET.MODE: C1</div>
            </div>

            {/* Main Content Container - All elements positioned absolutely within this container */}
            <div className="relative z-10 flex flex-col items-center justify-center">

                {/* Container for Ring and Title - Centered Together */}
                <div className="relative w-full flex items-center justify-center mb-16 px-4">

                    {/* Rotating Department Ring with Central Orb */}
                    <div className="absolute w-[320px] h-[320px] md:w-[450px] md:h-[450px]">
                        {/* Central Glowing Orb */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-48 md:h-48">
                            {/* Multiple glow layers */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full blur-3xl opacity-60 animate-pulse-slow"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-full blur-2xl opacity-80"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-300 via-blue-300 to-pink-300 rounded-full blur-xl"></div>
                        </div>

                        {/* Rotating Circular Text */}
                        <svg className="w-full h-full animate-spin-slow" viewBox="0 0 400 400">
                            <defs>
                                <path
                                    id="circlePath"
                                    d="M 200, 200 m -140, 0 a 140,140 0 1,1 280,0 a 140,140 0 1,1 -280,0"
                                />
                            </defs>
                            <text className="text-[16px] md:text-[18px] fill-gray-400 tracking-[0.3em] font-light uppercase">
                                <textPath href="#circlePath" startOffset="0%">
                                    DEPARTMENT • ADCET • INNOVATION • REDEFINED • COMPUTER • SCHOOL •
                                </textPath>
                            </text>
                        </svg>

                        {/* Days Countdown - Top */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-center">
                            <div className="text-[10px] text-cyan-400 tracking-widest uppercase">DAYS</div>
                            <div className="text-xl md:text-2xl font-bold text-white">12</div>
                        </div>

                        {/* Hours Countdown - Bottom */}
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-center">
                            <div className="text-xl md:text-2xl font-bold text-white">18</div>
                            <div className="text-[10px] text-cyan-400 tracking-widest uppercase">HOURS</div>
                        </div>
                    </div>

                    {/* Main Title - SPARK2K26 - Overlapping the center */}
                    <div className="relative z-20 text-center max-w-6xl">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter uppercase mb-6 px-4">
                            <span className="relative inline-block">
                                {/* Gradient text with multiple layers */}
                                <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200 blur-sm"></span>
                                <span className="relative text-white">SPARK</span>
                            </span>
                            <span className="relative inline-block">
                                <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 blur-md opacity-70"></span>
                                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">2K26</span>
                            </span>
                        </h1>

                        {/* College and Department Name - More Visible */}
                        <div className="text-sm md:text-base lg:text-lg font-medium tracking-wide px-4">
                            <p className="mb-2 text-gray-200 drop-shadow-lg">Computer Science Department</p>
                            <p className="text-xs md:text-sm text-gray-300 drop-shadow-lg">Annasaheb Dange College of Engineering & Technology, Ashta</p>
                        </div>
                    </div>
                </div>

                {/* Explore Button */}
                <div className="mt-8">
                    <button
                        onClick={scrollToEvents}
                        className="group relative px-12 py-4 overflow-hidden rounded-lg border border-gray-600 hover:border-purple-500 transition-all duration-500"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative flex items-center gap-2">
                            <span className="text-sm tracking-[0.3em] uppercase text-gray-400 group-hover:text-white transition-colors duration-300">
                                EXPLORE NEXUS
                            </span>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
                    </button>
                    <div className="text-xs text-gray-600 text-center mt-2 tracking-wider uppercase">Scroll To Dive</div>
                </div>

                {/* Vertical Line Indicator */}
                <div className="mt-8 flex flex-col items-center">
                    <div className="w-px h-16 bg-gradient-to-b from-gray-600 to-transparent"></div>
                </div>
            </div>

            {/* Decorative Corner Elements */}
            <div className="absolute top-8 left-8 text-xs text-gray-700 font-mono hidden md:block">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500/30"></div>
                    <span>SYSTEM.INITIALIZED</span>
                </div>
            </div>
            <div className="absolute top-8 right-8 text-xs text-gray-700 font-mono hidden md:block">
                <div className="flex items-center gap-2">
                    <span>SECURITY.ENABLED</span>
                    <div className="w-2 h-2 rounded-full bg-green-500/30"></div>
                </div>
            </div>
            <div className="absolute bottom-8 left-8 text-xs text-gray-700 font-mono hidden md:block">
                <div>CORE.STABLE</div>
            </div>
            <div className="absolute bottom-8 right-8 text-xs text-gray-700 font-mono hidden md:block">
                <div>TARGET.MODE: C1</div>
            </div>
        </div>
    );
};

export default DisplayLine;
