import React, { useState, useEffect } from 'react';
import { FaClock } from 'react-icons/fa';

const RegistrationCountdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            // Registration deadline: February 13, 2026 at 12:00 PM
            const registrationDeadline = new Date('2026-02-13T12:00:00');
            const difference = +registrationDeadline - +new Date();

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

    const isUrgent = timeLeft.days <= 3;

    return (
        <div className={`w-full py-8 ${isUrgent ? 'animate-pulse' : ''}`}>
            <div className={`mx-auto max-w-7xl px-4`}>
                <div className={`glass rounded-xl border ${isUrgent ? 'border-red-500/50 bg-red-500/5' : 'border-yellow-500/30 bg-yellow-500/5'} p-4 backdrop-blur-md`}>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Left: Message */}
                        <div className="flex items-center gap-3">
                            <FaClock className={`text-2xl ${isUrgent ? 'text-red-400' : 'text-yellow-400'} animate-spin-slow`} />
                            <div>
                                <p className={`font-bold text-lg ${isUrgent ? 'text-red-300' : 'text-yellow-300'}`}>
                                    ⚡ Registration Closing Soon!
                                </p>
                                <p className="text-sm text-gray-400">Last date: February 13, 2026 (Extended)</p>
                            </div>
                        </div>

                        {/* Right: Countdown */}
                        <div className="flex items-center gap-2 md:gap-4">
                            <TimeBox value={timeLeft.days} label="Days" isUrgent={isUrgent} />
                            <span className="text-gray-500">:</span>
                            <TimeBox value={timeLeft.hours} label="Hours" isUrgent={isUrgent} />
                            <span className="text-gray-500">:</span>
                            <TimeBox value={timeLeft.minutes} label="Mins" isUrgent={isUrgent} />
                            <span className="text-gray-500">:</span>
                            <TimeBox value={timeLeft.seconds} label="Secs" isUrgent={isUrgent} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TimeBox = ({ value, label, isUrgent }) => (
    <div className="flex flex-col items-center">
        <div className={`glass rounded-lg px-3 py-2 min-w-[50px] text-center border ${isUrgent ? 'border-red-500/50' : 'border-yellow-500/30'}`}>
            <span className={`text-xl md:text-2xl font-bold ${isUrgent ? 'text-red-300' : 'text-yellow-300'}`}>
                {String(value).padStart(2, '0')}
            </span>
        </div>
        <span className="text-[10px] text-gray-500 mt-1 uppercase">{label}</span>
    </div>
);

export default RegistrationCountdown;
