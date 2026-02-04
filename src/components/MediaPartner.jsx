import React from 'react';

const MediaPartner = () => {
    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        <span className="relative inline-block">
                            <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-100 to-gray-400 blur-sm"></span>
                            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-50 to-gray-300">
                                Media & Organization Partner
                            </span>
                        </span>
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-violet-600 mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                    {/* SPG Media Partner */}
                    <a
                        href="https://www.instagram.com/spgx.01?igsh=MXNqd3V2NWh0aDZmNA%3D%3D&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block transition-transform hover:scale-105 duration-300"
                    >
                        <div className="relative group p-8 rounded-3xl glass hover:bg-white/5 transition-all duration-300 border border-white/10 hover:border-purple-500/30">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-violet-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Image */}
                            <div className="relative z-10 bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
                                <img
                                    src="/spg.PNG"
                                    alt="SPG Media Partner"
                                    className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] object-contain filter drop-shadow-xl hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    </a>

                </div>
            </div>
        </section>
    );
};

export default MediaPartner;
