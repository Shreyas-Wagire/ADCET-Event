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


                {/* Bottom bar */}
                <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-400 text-center md:text-left">
                        <p>
                            © {currentYear} <span className="text-purple-400">Annasaheb Dange College of Engineering</span>. All rights reserved.
                        </p>
                        <p>
                            Made with <span className="text-red-500">❤️</span> by{' '}
                            <a
                                href="https://swagire.vercel.app"
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
