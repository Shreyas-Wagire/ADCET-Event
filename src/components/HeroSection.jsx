import React, { useState, useEffect } from 'react';

const HeroSection = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            // Event date: February 14, 2026 at 9:00 AM
            const eventDate = new Date('2026-02-14T09:00:00');
            const difference = +eventDate - +new Date();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, []);

    const scrollToEvents = () => {
        const eventsSection = document.getElementById('events-section');
        if (eventsSection) {
            eventsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const CountdownBox = ({ value, label }) => (
        <div className="flex flex-col items-center">
            <div className="relative group">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Number box */}
                <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg px-3 py-3 md:px-6 md:py-4 min-w-[60px] md:min-w-[100px]">
                    <span className="text-2xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-500 tabular-nums">
                        {String(value).padStart(2, '0')}
                    </span>
                </div>
            </div>
            <span className="text-xs md:text-sm text-gray-400 uppercase tracking-wider mt-2">{label}</span>
        </div>
    );

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

            {/* Decorative corner elements */}
            <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-purple-500/30"></div>
            <div className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-purple-500/30"></div>
            <div className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-purple-500/30"></div>
            <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-purple-500/30"></div>

            {/* Main Content */}
            <div className="relative z-10 text-center max-w-6xl mx-auto">
                {/* Live Event Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 backdrop-blur-sm border border-cyan-500/30 mb-8">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span className="text-sm md:text-base text-cyan-400 font-medium tracking-wide">
                        LIVE EVENT - 14TH FEBRUARY 2026
                    </span>
                </div>

                {/* Subtitle */}
                <h2 className="text-lg md:text-xl text-gray-300 mb-4 tracking-wide">
                    The Future of Innovation
                </h2>

                {/* Main Title */}
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                        SPARK2K26
                    </span>
                </h1>

                {/* Department Info */}
                <div className="space-y-2 mb-12">
                    <p className="text-base md:text-lg text-gray-300 font-medium">
                        Computer Science Department Presents
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-gray-400 px-2 leading-relaxed">
                        Annasaheb Dange College of Engineering & Technology
                    </p>
                    <p className="text-xs md:text-sm text-gray-500">
                        Ashta, India
                    </p>
                </div>

                {/* Countdown Timer */}
                <div className="flex justify-center gap-2 md:gap-6 mb-12">
                    <CountdownBox value={timeLeft.days} label="DAYS" />
                    <CountdownBox value={timeLeft.hours} label="HOURS" />
                    <CountdownBox value={timeLeft.minutes} label="MINUTES" />
                    <CountdownBox value={timeLeft.seconds} label="SECONDS" />
                </div>

                {/* CTA Button */}
                <button
                    onClick={scrollToEvents}
                    className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
                >
                    <span className="relative z-10">EXPLORE EVENT</span>
                    <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">→</span>

                    {/* Animated shine effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
