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
        <nav className={`sticky top-0 z-50 mb-20 flex items-center justify-between py-6 px-4 md:px-8 transition-all duration-300 ${isScrolled ? 'glass-strong shadow-2xl' : 'bg-transparent'
            }`}>
            <div className='flex flex-shrink-0 items-center'>
                <img
                    className="mx-2 w-16 md:w-20 cursor-pointer animate-pulse hover-scale"
                    src={logo}
                    alt="ADCET Logo"
                />
            </div>
            <div className="flex items-center justify-center gap-4 md:gap-6">
                <a
                    href="https://www.linkedin.com/in/shreyas-wagire"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 rounded-xl glass transition-all duration-300 hover-scale"
                    aria-label="LinkedIn Profile"
                >
                    <FaLinkedin className="text-2xl md:text-3xl text-gray-300 group-hover:text-blue-400 transition-colors duration-300" />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
                </a>
                <a
                    href="https://github.com/Shreyas-wagire"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 rounded-xl glass transition-all duration-300 hover-scale"
                    aria-label="GitHub Profile"
                >
                    <FaGithub className="text-2xl md:text-3xl text-gray-300 group-hover:text-white transition-colors duration-300" />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gray-500/20 to-gray-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
                </a>
                <a
                    href="https://twitter.com/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 rounded-xl glass transition-all duration-300 hover-scale"
                    aria-label="Twitter Profile"
                >
                    <FaSquareXTwitter className="text-2xl md:text-3xl text-gray-300 group-hover:text-blue-400 transition-colors duration-300" />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
                </a>
                <a
                    href="https://www.instagram.com/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 rounded-xl glass transition-all duration-300 hover-scale"
                    aria-label="Instagram Profile"
                >
                    <FaInstagram className="text-2xl md:text-3xl text-gray-300 group-hover:text-pink-400 transition-colors duration-300" />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
