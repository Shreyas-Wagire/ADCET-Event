import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate = "2026-02-14T09:00:00" }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });


    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +new Date(targetDate) - +new Date();

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
    }, [targetDate]);

    const TimeUnit = ({ value, label }) => (
        <div className="flex flex-col items-center">
            <div className="relative">
                <div className="glass-strong rounded-xl p-4 md:p-6 min-w-[70px] md:min-w-[100px] flex items-center justify-center group hover-scale">
                    <span className="text-3xl md:text-5xl font-bold bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                        {String(value).padStart(2, '0')}
                    </span>
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
                </div>
            </div>
            <span className="text-gray-400 text-sm md:text-base mt-2 uppercase tracking-wider">
                {label}
            </span>
        </div>
    );

    return (
        <div className="w-full max-w-3xl mx-auto my-8 animate-fade-in-up">
            <h3 className="text-center text-xl md:text-2xl font-semibold mb-6 text-gray-300">
                Event Starts In
            </h3>
            <div className="flex justify-center gap-3 md:gap-6">
                <TimeUnit value={timeLeft.days} label="Days" />
                <TimeUnit value={timeLeft.hours} label="Hours" />
                <TimeUnit value={timeLeft.minutes} label="Minutes" />
                <TimeUnit value={timeLeft.seconds} label="Seconds" />
            </div>
        </div>
    );
};

export default CountdownTimer;
