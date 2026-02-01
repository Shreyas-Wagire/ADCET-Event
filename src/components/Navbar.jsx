import { useState, useEffect } from "react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    const navItems = [
        { name: 'Home', id: 'home', icon: '🏠' },
        { name: 'About', id: 'about', icon: '✨' },
        { name: 'Events', id: 'events', icon: '🎯' },
        { name: 'Team', id: 'team', icon: '👥' },
        { name: 'FAQ', id: 'faq', icon: '❓' }
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 lg:hidden ${isScrolled
                ? 'glass-strong backdrop-blur-xl shadow-2xl border-b border-white/10'
                : 'bg-transparent'
                }`}>
                <div className="container mx-auto px-4 md:px-8 lg:px-12">
                    <div className="flex items-center justify-between h-24 md:h-28 w-full">
                        {/* Empty left section for spacing */}
                        <div></div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-3">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="relative px-8 py-4 text-gray-300 font-bold text-xl transition-all duration-300 group overflow-hidden rounded-xl"
                                >
                                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                                        {item.name}
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-violet-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-purple-500 to-violet-600 group-hover:w-4/5 transition-all duration-300"></div>
                                </button>
                            ))}
                        </div>

                        {/* CTA and Mobile Menu Button */}
                        <div className="flex items-center gap-2 md:gap-4">
                            {/* Register Button - Hidden on small mobile */}
                            <a
                                href="https://forms.gle/TmyrFpK3LXfyJbfx8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden sm:flex relative px-8 md:px-10 py-3 md:py-4 rounded-xl font-bold text-lg md:text-xl text-white overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-700 transition-all duration-300"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <span className="relative z-10 flex items-center gap-2">
                                    <span>Register Now</span>
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                                </span>
                            </a>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="lg:hidden p-2.5 rounded-xl hover:bg-white/10 transition-all duration-300 relative z-[60]"
                                aria-label="Toggle menu"
                            >
                                <div className="w-6 h-5 relative flex flex-col justify-between">
                                    <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                                        }`}></span>
                                    <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''
                                        }`}></span>
                                    <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                                        }`}></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Full-Screen Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-[55] lg:hidden transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                onClick={() => setIsMobileMenuOpen(false)}
            >
                {/* Backdrop with gradient */}
                <div
                    className={`absolute inset-0 backdrop-blur-2xl bg-gradient-to-br from-purple-900/95 via-indigo-950/95 to-indigo-950/95 transition-all duration-500 ${isMobileMenuOpen ? 'scale-100' : 'scale-95'
                        }`}
                >
                    {/* Animated gradient orbs */}
                    <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 left-10 w-64 h-64 bg-pink-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                {/* Menu Content */}
                <div className="relative h-full flex flex-col justify-center items-center px-8 pointer-events-none">
                    {/* Navigation Items */}
                    <div className="space-y-2 w-full max-w-md pointer-events-auto">
                        {navItems.map((item, index) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`w-full group relative overflow-hidden rounded-2xl transition-all duration-500 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                                    }`}
                                style={{
                                    transitionDelay: isMobileMenuOpen ? `${index * 80 + 100}ms` : '0ms'
                                }}
                            >
                                {/* Button Background */}
                                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-all duration-300"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-violet-600/20 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Border Glow */}
                                <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-purple-400/50 transition-colors duration-300"></div>

                                {/* Content */}
                                <div className="relative flex items-center justify-between px-6 py-5">
                                    <div className="flex items-center gap-4">
                                        <span className="text-3xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                                            {item.icon}
                                        </span>
                                        <span className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-violet-300 group-hover:bg-clip-text transition-all duration-300">
                                            {item.name}
                                        </span>
                                    </div>
                                    <span className="text-white/40 group-hover:text-white group-hover:translate-x-2 transition-all duration-300 text-xl">
                                        →
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Mobile Register Button */}
                    <div className={`mt-12 w-full max-w-md transition-all duration-700 pointer-events-auto ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                        style={{ transitionDelay: isMobileMenuOpen ? `${navItems.length * 80 + 200}ms` : '0ms' }}>
                        <a
                            href="https://forms.gle/TmyrFpK3LXfyJbfx8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block relative overflow-hidden rounded-2xl group"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-700"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative px-8 py-5 flex items-center justify-center gap-3">
                                <span className="text-lg font-bold text-white">Register for SPARK 2K26</span>
                                <span className="text-2xl group-hover:translate-x-2 group-hover:scale-125 transition-all duration-300">🚀</span>
                            </div>
                        </a>
                    </div>

                    {/* Footer Info */}
                    <div className={`mt-8 text-center transition-all duration-700 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{ transitionDelay: isMobileMenuOpen ? `${navItems.length * 80 + 400}ms` : '0ms' }}>
                        <p className="text-gray-400 text-sm">Tap anywhere to close</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
