import React from 'react';

const MediaPartner = () => {
    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
                            Media Partner
                        </span>
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
                </div>

                <div className="flex justify-center items-center">
                    <a
                        href="https://www.instagram.com/spgx.01?igsh=MXNqd3V2NWh0aDZmNA%3D%3D&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block transition-transform hover:scale-105 duration-300"
                    >
                        <div className="relative group p-8 rounded-3xl glass hover:bg-white/5 transition-all duration-300 border border-white/10 hover:border-purple-500/30">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Image */}
                            <div className="relative z-10 bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
                                <img
                                    src="/spg.PNG"
                                    alt="Media Partner"
                                    className="max-w-[100px] md:max-w-[150px] h-auto object-contain filter drop-shadow-xl hover:scale-105 transition-transform duration-300"
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
