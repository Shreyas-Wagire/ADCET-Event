import React from "react";
import { FaDiscord, FaTwitter, FaInstagram, FaTelegram, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="pt-16 md:pt-32 text-gray-400 py-6 relative">
            <div className="max-w-6xl mx-auto px-4">
                {/* Main Footer Content */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Copyright Text */}
                    <p className="text-sm text-center md:text-left">
                        &copy; 2025 All rights reserved by Annasaheb Dange College of Engineering Ashta.
                    </p>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-purple-600 transition duration-300">
                            <FaDiscord size={20} />
                        </a>
                        <a href="#" className="hover:text-blue-400 transition duration-300">
                            <FaTwitter size={20} />
                        </a>
                        <a href="#" className="hover:text-pink-600 transition duration-300">
                            <FaInstagram size={20} />
                        </a>
                        <a href="#" className="hover:text-blue-500 transition duration-300">
                            <FaTelegram size={20} />
                        </a>
                        <a href="#" className="hover:text-blue-400 transition duration-300">
                            <FaFacebook size={20} />
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-gray-700 mt-6 opacity-30"></div>

                {/* Developer Credit */}
                <p className="text-xs text-gray-500 mt-4 text-center">
                    Developed by <a href="https://swagire.vercel.app/" className="font-xl italic font-bold hover:text-purple-400 transition-colors duration-300">Shreyas</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
