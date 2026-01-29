import React, { useState, useEffect, useRef } from 'react';
import { FaTrophy, FaUsers, FaCalendar, FaAward } from 'react-icons/fa';

const StatsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [counts, setCounts] = useState({
        events: 0,
        participants: 0,
        prizes: 0,
        years: 0
    });

    const sectionRef = useRef(null);

    const stats = [
        {
            icon: FaCalendar,
            value: 7,
            suffix: '+',
            label: 'Events',
            color: 'from-purple-400 to-pink-500',
            key: 'events'
        },
        {
            icon: FaUsers,
            value: 500,
            suffix: '+',
            label: 'Expected Participants',
            color: 'from-blue-400 to-cyan-500',
            key: 'participants'
        },
        {
            icon: FaTrophy,
            value: 50,
            suffix: 'K+',
            label: 'Prize Pool',
            color: 'from-yellow-400 to-orange-500',
            key: 'prizes'
        },
        {
            icon: FaAward,
            value: 5,
            suffix: '+',
            label: 'Years of Excellence',
            color: 'from-emerald-400 to-green-500',
            key: 'years'
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000; // 2 seconds
        const steps = 60;
        const interval = duration / steps;
        const timers = [];

        stats.forEach(stat => {
            let current = 0;
            const increment = stat.value / steps;

            const timer = setInterval(() => {
                current += increment;
                if (current >= stat.value) {
                    current = stat.value;
                    clearInterval(timer);
                }
                setCounts(prev => ({
                    ...prev,
                    [stat.key]: Math.floor(current)
                }));
            }, interval);

            timers.push(timer);
        });

        return () => {
            timers.forEach(timer => clearInterval(timer));
        };
    }, [isVisible]);

    return (
        <section ref={sectionRef} className="py-16 md:py-24">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-fade-in-down">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                        Event Highlights
                    </span>
                </h2>
                <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                    Join us for an unforgettable technical fest filled with innovation, competition, and excitement
                </p>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={stat.key}
                                className={`glass rounded-2xl p-6 md:p-8 text-center group hover-lift animate-scale-in stagger-${index + 1}`}
                            >
                                {/* Icon */}
                                <div className="mb-4 flex justify-center">
                                    <div className={`p-4 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className={`text-3xl md:text-4xl bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`} />
                                    </div>
                                </div>

                                {/* Number */}
                                <div className="mb-2">
                                    <span className={`text-4xl md:text-5xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                                        {isVisible ? counts[stat.key] : 0}{stat.suffix}
                                    </span>
                                </div>

                                {/* Label */}
                                <p className="text-gray-400 text-sm md:text-base font-medium">
                                    {stat.label}
                                </p>

                                {/* Hover glow */}
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10 blur-xl`} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
