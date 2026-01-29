import React from 'react';
import logo from '../assets/adcet.png';
import CountdownTimer from './CountdownTimer';
import Button from './Button';

const DisplayLine = () => {
    const scrollToEvents = () => {
        const eventsSection = document.getElementById('events-section');
        if (eventsSection) {
            eventsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
            {/* Animated Background Orbs - More Dynamic */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Large glowing orbs with different animations */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-slow"></div>
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-float-slower" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>

                {/* Smaller accent orbs */}
                <div className="absolute top-1/3 right-1/2 w-40 h-40 bg-cyan-400/10 rounded-full blur-2xl animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-fuchsia-400/10 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 text-center max-w-5xl mx-auto space-y-8 md:space-y-12">

                {/* Logo with Enhanced Animation */}
                <div className="flex justify-center mb-8 animate-fade-in-down">
                    <div className="relative group">
                        {/* Multiple glow layers */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse-slow"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

                        {/* Logo */}
                        <img
                            src={logo}
                            alt="ADCET Logo"
                            className="relative w-32 h-32 md:w-40 md:h-40 object-contain transform group-hover:scale-110 transition-all duration-500 drop-shadow-2xl"
                        />
                    </div>
                </div>

                {/* Main Title - Spark2K26 with Enhanced Effects */}
                <div className="space-y-4 animate-fade-in-up stagger-1">
                    <h1 className="relative inline-block">
                        <span className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight">
                            <span className="relative inline-block">
                                {/* Multiple text shadows for depth */}
                                <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 blur-sm"></span>
                                <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-md opacity-50"></span>
                                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient-shift">
                                    Spark2K26
                                </span>
                            </span>
                        </span>

                        {/* Animated underline */}
                        <div className="absolute -bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 blur-sm animate-pulse-slow"></div>
                    </h1>

                    {/* Subtitle with animated appearance */}
                    <div className="relative overflow-hidden py-4">
                        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white/90 animate-slide-in-right">
                            By Computer Science Department, ADCET
                        </h2>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent animate-expand"></div>
                    </div>
                </div>

                {/* Tagline with Typewriter Effect Style */}
                <div className="animate-fade-in-up stagger-2">
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light">
                        <span className="inline-block animate-fade-in-up stagger-1">Unleashing Innovation and Creativity!</span>{' '}
                        <span className="inline-block animate-fade-in-up stagger-2">Welcome to Spark 2K26, the flagship tech event by Computer Science Department of</span>{' '}
                        <span className="inline-block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold animate-fade-in-up stagger-3">
                            Annasaheb Dange College of Engineering and Technology, Ashta.
                        </span>{' '}
                        <span className="inline-block animate-fade-in-up stagger-4">Join us in this celebration of knowledge and innovation!</span>
                    </p>
                </div>

                {/* Countdown Timer */}
                <div className="animate-fade-in-up stagger-3">
                    <CountdownTimer targetDate="2026-02-14T09:00:00" />
                </div>

                {/* CTA Button with Enhanced Styling */}
                <div className="animate-fade-in-up stagger-4">
                    <div className="relative inline-block group">
                        {/* Glow effect behind button */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-pulse-slow"></div>

                        <Button onClick={scrollToEvents}>
                            EXPLORE EVENTS
                        </Button>
                    </div>
                </div>

                {/* Scroll Indicator with Enhanced Animation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
                    <div className="flex flex-col items-center gap-2 cursor-pointer group" onClick={scrollToEvents}>
                        <p className="text-sm text-gray-400 uppercase tracking-wider group-hover:text-purple-400 transition-colors duration-300">
                            Scroll Down
                        </p>
                        <div className="relative">
                            {/* Animated chevron with glow */}
                            <div className="absolute inset-0 blur-md bg-purple-500/30"></div>
                            <svg
                                className="w-6 h-6 text-purple-400 group-hover:text-pink-400 transition-colors duration-300 relative"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                            </svg>
                        </div>

                        {/* Animated line */}
                        <div className="w-px h-12 bg-gradient-to-b from-purple-500/50 to-transparent animate-pulse-slow"></div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements - Animated Corners */}
            <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-purple-500/30 animate-fade-in"></div>
            <div className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-pink-500/30 animate-fade-in" style={{ animationDelay: '0.2s' }}></div>
            <div className="absolute bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-blue-500/30 animate-fade-in" style={{ animationDelay: '0.4s' }}></div>
            <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-cyan-500/30 animate-fade-in" style={{ animationDelay: '0.6s' }}></div>
        </div>
    );
};

export default DisplayLine;
