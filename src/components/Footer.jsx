import React from "react";
import { FaDiscord, FaTwitter, FaInstagram, FaTelegram, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="pt-16 md:pt-32 text-gray-400 py-8 relative">
            {/* Glassmorphism background */}
            <div className="absolute inset-0 glass-strong -z-10"></div>

            <div className="max-w-6xl mx-auto px-4">
                {/* Main Footer Content */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Copyright Text */}
                    <p className="text-sm text-center md:text-left text-gray-300">
                        &copy; 2025 All rights reserved by <span className="font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Annasaheb Dange College of Engineering</span> Ashta.
                    </p>

                    {/* Social Media Icons with enhanced styling */}
                    <div className="flex gap-4">
                        <a href="/" className="group relative p-3 rounded-xl glass hover-scale transition-all duration-300">
                            <FaDiscord className="text-xl text-gray-300 group-hover:text-purple-400 transition-colors duration-300" />
                            <div className="absolute inset-0 rounded-xl bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
                        </a>
                        <a href="/" className="group relative p-3 rounded-xl glass hover-scale transition-all duration-300">
                            <FaTwitter className="text-xl text-gray-300 group-hover:text-blue-400 transition-colors duration-300" />
                            <div className="absolute inset-0 rounded-xl bg-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
                        </a>
                        <a href="/" className="group relative p-3 rounded-xl glass hover-scale transition-all duration-300">
                            <FaInstagram className="text-xl text-gray-300 group-hover:text-pink-400 transition-colors duration-300" />
                            <div className="absolute inset-0 rounded-xl bg-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
                        </a>
                        <a href="/" className="group relative p-3 rounded-xl glass hover-scale transition-all duration-300">
                            <FaTelegram className="text-xl text-gray-300 group-hover:text-blue-500 transition-colors duration-300" />
                            <div className="absolute inset-0 rounded-xl bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
                        </a>
                        <a href="/" className="group relative p-3 rounded-xl glass hover-scale transition-all duration-300">
                            <FaFacebook className="text-xl text-gray-300 group-hover:text-blue-600 transition-colors duration-300" />
                            <div className="absolute inset-0 rounded-xl bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
                        </a>
                    </div>
                </div>

                {/* Gradient Divider */}
                <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mt-8 opacity-50"></div>

                {/* Developer Credit */}
                <p className="text-sm text-gray-400 mt-6 text-center">
                    Developed with <span className="text-red-500 animate-pulse">❤</span> by{' '}
                    <a
                        href="https://www.linkedin.com/in/shreyas-wagire"
                        className="font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent hover:from-purple-300 hover:via-pink-300 hover:to-blue-300 transition-all duration-300"
                    >
                        Shreyas Wagire
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
