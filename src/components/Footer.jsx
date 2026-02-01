import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-black/40 backdrop-blur-sm border-t border-white/10 py-10 overflow-hidden">
            {/* Subtle gradient orbs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-slate-600/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-slate-500/5 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
                {/* Main horizontal footer content */}


                {/* Bottom bar */}
                <div className="mt-8 pt-6 border-t border-slate-700/30">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-center md:text-left">
                        <p className="text-slate-400">
                            © {currentYear} <span className="font-semibold bg-gradient-to-r from-slate-300 via-slate-100 to-slate-300 bg-clip-text text-transparent">Annasaheb Dange College of Engineering</span>. All rights reserved.
                        </p>
                        <p className="text-slate-400">
                            Made with <span className="text-red-500">❤️</span> by{' '}
                            <a
                                href="https://swagire.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold bg-gradient-to-r from-slate-300 via-slate-100 to-slate-300 bg-clip-text text-transparent hover:from-teal-400 hover:via-emerald-500 hover:to-teal-400 transition-all duration-300"
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
