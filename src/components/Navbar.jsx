import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import logo from "../assets/adcet.png";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-strong backdrop-blur-xl shadow-lg' : 'bg-transparent'
            }`}>
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className='flex items-center'>
                        <img
                            className="w-14 h-14 md:w-16 md:h-16 cursor-pointer hover:scale-110 transition-transform duration-300"
                            src={logo}
                            alt="ADCET Logo"
                        />
                        <div className="ml-3 hidden md:block">
                            <h1 className="text-sm font-bold text-white">SPARK 2K26</h1>
                            <p className="text-[10px] text-gray-400">ADCET</p>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-2 md:gap-3">
                        <a
                            href="https://www.linkedin.com/in/shreyas-wagire"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-2 rounded-lg hover:bg-blue-500/10 transition-all duration-300"
                            aria-label="LinkedIn Profile"
                        >
                            <FaLinkedin className="text-lg md:text-xl text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                        </a>
                        <a
                            href="https://github.com/Shreyas-wagire"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-2 rounded-lg hover:bg-gray-500/10 transition-all duration-300"
                            aria-label="GitHub Profile"
                        >
                            <FaGithub className="text-lg md:text-xl text-gray-400 group-hover:text-white transition-colors duration-300" />
                        </a>
                        <a
                            href="https://twitter.com/your-profile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-2 rounded-lg hover:bg-blue-400/10 transition-all duration-300"
                            aria-label="Twitter Profile"
                        >
                            <FaSquareXTwitter className="text-lg md:text-xl text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                        </a>
                        <a
                            href="https://www.instagram.com/your-profile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-2 rounded-lg hover:bg-pink-500/10 transition-all duration-300"
                            aria-label="Instagram Profile"
                        >
                            <FaInstagram className="text-lg md:text-xl text-gray-400 group-hover:text-pink-400 transition-colors duration-300" />
                        </a>

                        {/* Register Button */}
                        <a
                            href="https://forms.gle/TmyrFpK3LXfyJbfx8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:block ml-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105"
                        >
                            Register
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

