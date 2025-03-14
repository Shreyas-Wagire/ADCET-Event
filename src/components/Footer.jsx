import React from "react";
import { FaDiscord, FaTwitter, FaInstagram, FaTelegram, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="pt-32 text-gray-400 text-center py-6 relative">
            <div className="max-w-6xl mx-auto px-4 flex md:flex-row justify-between items-center">

                {/* Copyright Text */}
                <p className="text-sm">&copy; 2025 All rights reserved by Annasaheb Dange College of Engineering Ashta.</p>

                {/* Social Media Icons */}
                <div className="flex space-x-4 mt-4 md:mt-0">
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
            <div className="w-full h-[1px] bg-gray-700 mt-4 opacity-30"></div>

            {/* Developer Credit */}
            <p className="text-xs text-gray-500 mt-2">Developed by <a href="https://swagire.vercel.app/" className="font-xl italic font-bold">SW</a></p>
        </footer>
    );
};

export default Footer;
