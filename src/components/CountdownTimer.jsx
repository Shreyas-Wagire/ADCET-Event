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
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl px-4 py-5 md:px-6 md:py-6 min-w-[70px] md:min-w-[90px] flex items-center justify-center shadow-lg hover:border-gray-700 transition-all">
                <div className="text-3xl md:text-5xl font-black text-white leading-none tracking-tight">
                    {String(value).padStart(2, '0')}
                </div>
            </div>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mt-2">
                {label}
            </div>
        </div>
    );

    return (
        <div className="w-full max-w-4xl mx-auto py-8">
            <div className="flex justify-center items-center gap-3 md:gap-5">
                <TimeUnit value={timeLeft.days} label="Days" />
                <TimeUnit value={timeLeft.hours} label="Hrs" />
                <TimeUnit value={timeLeft.minutes} label="Min" />
                <TimeUnit value={timeLeft.seconds} label="Sec" />
            </div>
        </div>
    );
};

export default CountdownTimer;
