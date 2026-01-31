import React from 'react';
import { FaTrophy, FaMedal, FaAward, FaStar } from 'react-icons/fa';

const PrizesSection = () => {
    const prizes = [
        {
            event: "Mini Hackathon",
            totalPrize: "₹5,000",
            winners: [
                { position: "1st Place", amount: "₹3,000" },
                { position: "2nd Place", amount: "₹2,000" }
            ],
            icon: FaTrophy,
            color: "from-yellow-400 to-orange-500",
            bgGlow: "bg-yellow-500/10"
        },
        {
            event: "Innoprotex",
            totalPrize: "₹4,000",
            winners: [
                { position: "1st Place", amount: "₹2,500" },
                { position: "2nd Place", amount: "₹1,500" }
            ],
            icon: FaMedal,
            color: "from-purple-400 to-pink-500",
            bgGlow: "bg-purple-500/10"
        },
        {
            event: "Apti Master",
            totalPrize: "₹2,500",
            winners: [
                { position: "1st Place", amount: "₹1,500" },
                { position: "2nd Place", amount: "₹1,000" }
            ],
            icon: FaAward,
            color: "from-blue-400 to-cyan-500",
            bgGlow: "bg-blue-500/10"
        },
        {
            event: "Group Discussion",
            totalPrize: "₹2,000",
            winners: [
                { position: "1st Place", amount: "₹1,200" },
                { position: "2nd Place", amount: "₹800" }
            ],
            icon: FaStar,
            color: "from-green-400 to-emerald-500",
            bgGlow: "bg-green-500/10"
        },
        {
            event: "GAT Master",
            totalPrize: "₹1,500",
            winners: [
                { position: "1st Place", amount: "₹1,000" },
                { position: "2nd Place", amount: "₹500" }
            ],
            icon: FaMedal,
            color: "from-pink-400 to-rose-500",
            bgGlow: "bg-pink-500/10"
        }
    ];

    return (
        <section className="py-16 md:py-24 relative">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 bg-clip-text text-transparent">
                            Event Highlights & Prizes
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-6">
                        Compete for exciting prizes worth
                    </p>
                    <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass border border-yellow-500/30">
                        <FaTrophy className="text-3xl text-yellow-400 animate-pulse" />
                        <span className="text-4xl md:text-5xl font-black bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                            ₹15,000+
                        </span>
                    </div>
                    <p className="text-gray-500 text-sm mt-4">Plus certificates and goodies for all winners!</p>
                </div>

                {/* Prize Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {prizes.map((prize, index) => {
                        const IconComponent = prize.icon;
                        return (
                            <div
                                key={index}
                                className={`group relative glass rounded-2xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-500 overflow-hidden ${prize.bgGlow}`}
                            >
                                {/* Background Glow on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${prize.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                                {/* Icon */}
                                <div className="relative flex justify-center mb-4">
                                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${prize.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <IconComponent className="text-3xl text-white" />
                                    </div>
                                </div>

                                {/* Event Name */}
                                <h3 className="text-xl font-bold text-white text-center mb-2">
                                    {prize.event}
                                </h3>

                                {/* Total Prize */}
                                <div className="text-center mb-4">
                                    <p className="text-gray-400 text-sm mb-1">Total Prize Pool</p>
                                    <p className={`text-3xl font-black bg-gradient-to-r ${prize.color} bg-clip-text text-transparent`}>
                                        {prize.totalPrize}
                                    </p>
                                </div>

                                {/* Prize Breakdown */}
                                <div className="space-y-2 border-t border-gray-700/50 pt-4">
                                    {prize.winners.map((winner, idx) => (
                                        <div key={idx} className="flex items-center justify-between px-3 py-2 rounded-lg bg-black/30">
                                            <span className="text-sm text-gray-400">{winner.position}</span>
                                            <span className="text-sm font-bold text-white">{winner.amount}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Participation Bonus */}
                                <div className="mt-4 text-center">
                                    <p className="text-xs text-gray-500">+ Certificates for all winners</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Additional Benefits */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="glass rounded-xl p-6 border border-gray-800">
                        <div className="text-4xl mb-3">🏆</div>
                        <h4 className="text-lg font-bold text-white mb-2">Certificates</h4>
                        <p className="text-sm text-gray-400">For all participants and winners</p>
                    </div>
                    <div className="glass rounded-xl p-6 border border-gray-800">
                        <div className="text-4xl mb-3">🎁</div>
                        <h4 className="text-lg font-bold text-white mb-2">Goodies</h4>
                        <p className="text-sm text-gray-400">Exciting swag and merchandise</p>
                    </div>
                    <div className="glass rounded-xl p-6 border border-gray-800">
                        <div className="text-4xl mb-3">🌟</div>
                        <h4 className="text-lg font-bold text-white mb-2">Recognition</h4>
                        <p className="text-sm text-gray-400">Showcase your talent and skills</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrizesSection;
