import React, { useState, useEffect } from 'react';
import { FaRocket } from 'react-icons/fa';

const FloatingRegistrationButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show button after scrolling 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => {
        // Scroll to events section
        const eventsSection = document.getElementById('events-section');
        if (eventsSection) {
            eventsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <button
            onClick={handleClick}
            className={`fixed bottom-8 right-8 z-50 p-4 md:p-5 rounded-full bg-gradient-to-br from-purple-600 via-violet-700 to-indigo-800 text-white shadow-2xl transition-all duration-500 group hover-scale ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
                }`}
            aria-label="Register for events"
        >
            {/* Animated pulse ring */}
            <div className="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-75" />

            {/* Icon */}
            <div className="relative flex items-center gap-2">
                <FaRocket className="text-2xl md:text-3xl transform group-hover:rotate-12 transition-transform duration-300" />
                <span className="hidden md:inline-block font-bold text-lg whitespace-nowrap">
                    Register Now
                </span>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300 -z-10" />
        </button>
    );
};

export default FloatingRegistrationButton;
