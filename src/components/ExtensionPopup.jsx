import React, { useState, useEffect } from 'react';
import { FaTimes, FaCalendarAlt, FaClock } from 'react-icons/fa';

const ExtensionPopup = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if popup has been closed in this session
        const hasSeenPopup = sessionStorage.getItem('extensionPopupSeen');
        if (!hasSeenPopup) {
            // Small delay for entrance animation
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        sessionStorage.setItem('extensionPopupSeen', 'true');
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-md bg-gray-900 border border-teal-500/30 rounded-2xl shadow-2xl overflow-hidden transform transition-all animate-scale-in">
                {/* Glow effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-cyan-400 to-emerald-500"></div>
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>

                <div className="p-6 relative z-10">
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full"
                    >
                        <FaTimes size={20} />
                    </button>

                    <div className="text-center mt-2">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 mb-4">
                            <FaCalendarAlt className="text-3xl text-teal-400" />
                        </div>

                        <h2 className="text-2xl font-bold text-white mb-2">
                            Registration Extended!
                        </h2>

                        <div className="bg-white/5 rounded-xl p-4 border border-white/10 mb-6 mt-4">
                            <p className="text-gray-300 text-sm mb-2">The last date to register has been extended to:</p>
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-300">
                                    February 13, 2026
                                </span>
                                <div className="flex items-center gap-2 text-sm font-semibold text-gray-400">
                                    <FaClock className="text-teal-400" />
                                    <span>12:00 PM</span>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handleClose}
                            className="w-full py-3 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-teal-500/25 active:scale-95"
                        >
                            Got it!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtensionPopup;
