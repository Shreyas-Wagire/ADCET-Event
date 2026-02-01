import React from 'react';
import { FaTrophy, FaMedal } from 'react-icons/fa';
import styles from './PrizesSection.module.css';

const PrizesSection = () => {
    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="relative inline-block">
                            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-50 to-gray-300">
                                Prize Pool
                            </span>
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Compete for exciting cash prizes and recognition
                    </p>
                </div>

                {/* Hero Prize Cards - Responsive Layout */}
                <div className={styles.prizeCardsContainer}>

                    {/* Total Prize Card (First on Mobile, Center on Desktop) */}
                    <div className={`group relative flex-shrink-0 ${styles.prizeCard} ${styles.totalPrizeCard}`}>
                        {/* Golden Glow Border */}
                        <div className="absolute -inset-1 bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500 rounded-2xl blur-lg opacity-80 group-hover:opacity-100 transition duration-500"></div>

                        <div className="relative bg-gradient-to-br from-yellow-900/40 via-amber-950 to-black rounded-xl md:rounded-2xl p-6 md:p-10 border-2 border-yellow-500/50 overflow-hidden">
                            {/* Radial Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-radial from-yellow-500/10 via-transparent to-transparent opacity-50"></div>

                            {/* Trophy Icon */}
                            <div className="relative flex justify-center mb-4 sm:mb-6">
                                <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-yellow-300 to-orange-500 flex items-center justify-center shadow-2xl shadow-yellow-500/50 group-hover:scale-110 transition-transform duration-300 animate-pulse">
                                    <FaTrophy className="text-4xl sm:text-5xl text-gray-900" />
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl sm:text-3xl font-black text-center mb-2 uppercase tracking-widest">
                                <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                                    Total Prize
                                </span>
                            </h3>

                            {/* Prize Amount */}
                            <div className="text-center mb-6 sm:mb-8">
                                <p className="text-5xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-yellow-200 via-yellow-300 to-orange-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(251,191,36,0.5)]">
                                    ₹15,000
                                </p>
                            </div>

                            {/* Motivational Quote */}
                            <div className="border-t border-yellow-500/30 pt-3 sm:pt-4">
                                <p className="text-xs sm:text-sm text-yellow-200/80 text-center italic font-light leading-relaxed hidden sm:block">
                                    "You didn't just break the code, you broke the competition!"
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Champion Card (Second on Mobile, Left on Desktop) */}
                    <div className={`group relative flex-shrink-0 ${styles.prizeCard} ${styles.championCard}`}>
                        {/* Blue Glow Border */}
                        <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-500"></div>

                        <div className="relative bg-gradient-to-br from-gray-900 via-gray-950 to-black rounded-xl md:rounded-2xl p-5 md:p-6 border border-blue-500/30 overflow-hidden">
                            {/* Subtle Pattern */}
                            <div className="absolute inset-0 opacity-5">
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000),linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000)] bg-[length:20px_20px] bg-[position:0_0,10px_10px]"></div>
                            </div>

                            {/* Medal Icon */}
                            <div className="relative flex justify-center mb-3 sm:mb-4">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/50 group-hover:scale-110 transition-transform duration-300">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center">
                                        <span className="text-xl sm:text-2xl font-black text-white">1st</span>
                                    </div>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg sm:text-xl font-black text-white text-center mb-3 sm:mb-4 uppercase tracking-wider">
                                Champion
                            </h3>

                            {/* Prize Amount */}
                            <div className="text-center mb-3 sm:mb-4">
                                <p className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent">
                                    ₹2,000
                                </p>
                                <p className="text-xs text-gray-400 mt-1">Per Event</p>
                            </div>

                            {/* Motivational Quote */}
                            <div className="border-t border-blue-500/20 pt-3">
                                <p className="text-xs text-blue-300/70 text-center italic font-light leading-relaxed hidden sm:block">
                                    "Your code debugged itself in fear of losing! Almost legendary status!"
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Runner Up Card (Third on Mobile, Right on Desktop) */}
                    <div className={`group relative flex-shrink-0 ${styles.prizeCard} ${styles.runnerUpCard}`}>
                        {/* Bronze/Red Glow Border */}
                        <div className="absolute -inset-0.5 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-500"></div>

                        <div className="relative bg-gradient-to-br from-gray-900 via-red-950/30 to-black rounded-xl md:rounded-2xl p-5 border border-orange-600/30 overflow-hidden">
                            {/* Subtle Pattern */}
                            <div className="absolute inset-0 opacity-5">
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000),linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000)] bg-[length:20px_20px] bg-[position:0_0,10px_10px]"></div>
                            </div>

                            {/* Medal Icon */}
                            <div className="relative flex justify-center mb-3">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg shadow-orange-500/50 group-hover:scale-110 transition-transform duration-300">
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                                        <span className="text-xl font-black text-white">2nd</span>
                                    </div>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-black text-white text-center mb-3 uppercase tracking-wider">
                                Runner Up
                            </h3>

                            {/* Prize Amount */}
                            <div className="text-center mb-3">
                                <p className="text-3xl font-black bg-gradient-to-r from-orange-300 to-red-400 bg-clip-text text-transparent">
                                    ₹1,000
                                </p>
                                <p className="text-xs text-gray-400 mt-1">Per Event</p>
                            </div>

                            {/* Motivational Quote */}
                            <div className="border-t border-orange-500/20 pt-3">
                                <p className="text-xs text-orange-300/70 text-center italic font-light leading-relaxed hidden sm:block">
                                    "Bronze medal but GOLDEN vibes! Your Git commits were fire!"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            {/* Background Decoration */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
        </section>
    );
};

export default PrizesSection;
