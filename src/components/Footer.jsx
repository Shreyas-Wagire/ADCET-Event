import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-black/40 backdrop-blur-sm border-t border-white/10 py-10 overflow-hidden">
            {/* Subtle gradient orbs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-600/5 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
                {/* Main horizontal footer content */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
                    {/* Column 1 - Event Info */}
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold text-white mb-3">
                            SPARK 2K26
                        </h2>
                        <p className="text-gray-400 text-sm mb-4">Computer Science Department</p>
                        <div className="flex flex-col gap-2">
                            <a
                                href="#home"
                                className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                            >
                                Home
                            </a>
                            <a
                                href="#events"
                                className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                            >
                                Events
                            </a>
                            <a
                                href="#team"
                                className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                            >
                                Team
                            </a>
                        </div>
                    </div>

                    {/* Column 2 - Address */}
                    <div className="flex flex-col">
                        <h3 className="text-white font-semibold text-lg mb-3">Venue Address</h3>
                        <div className="text-gray-400 text-sm space-y-1.5">
                            <p>Annasaheb Dange College of Engineering,</p>
                            <p>Shirud Maharaj Rd, Anand Colony,</p>
                            <p>Ashta, Sangli, Maharashtra - 416301</p>
                        </div>
                    </div>

                    {/* Column 3 - CTA */}
                    <div className="flex flex-col">
                        <h3 className="text-white font-semibold text-lg mb-3">Join Us</h3>
                        <a
                            href="https://forms.gle/TmyrFpK3LXfyJbfx8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-500 hover:to-violet-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 w-fit"
                        >
                            <span>Register Now</span>
                            <span>→</span>
                        </a>
                    </div>

                    {/* Column 4 - Map */}
                    <div className="flex flex-col">
                        <h3 className="text-white font-semibold text-lg mb-3">Location</h3>
                        <div className="relative w-full h-40 rounded-lg overflow-hidden border border-white/10 hover:border-purple-400/50 transition-colors duration-300">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.7384527891697!2d74.4090863!3d16.7522239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc122f23e1bc099%3A0x928109eda7b8c89e!2sAnnasaheb%20Dange%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1706785200000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="ADCET Location Map"
                            ></iframe>
                        </div>
                        <a
                            href="https://maps.google.com/?q=Annasaheb+Dange+College+of+Engineering+Ashta"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-400 hover:text-pink-400 text-xs mt-2 transition-colors"
                        >
                            View larger map →
                        </a>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-400">
                        <p>
                            © {currentYear} <span className="text-purple-400">Annasaheb Dange College of Engineering</span>. All rights reserved.
                        </p>
                        <p>
                            Crafted with <span className="text-red-500">❤</span> by{' '}
                            <a
                                href="https://swagire.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-400 hover:text-pink-400 transition-colors font-medium"
                            >
                                Shreyas Wagire
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
