import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import logo from "../assets/adcet.png";

const Navbar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between py-6 px-4 md:px-8'>
            <div className='flex flex-shrink-0 items-center'>
                <img className="mx-2 w-16 md:w-30 cursor-pointer " src={logo} alt="Shreyas Wagire Logo" />
            </div>
            <div className="flex items-center justify-center gap-4 text-xl md:text-2xl">
                <a
                    href="https://www.linkedin.com/in/shreyas-wagire"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors duration-200"
                    aria-label="LinkedIn Profile"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/Shreyas-wagire"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-800 transition-colors duration-200"
                    aria-label="GitHub Profile"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://twitter.com/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors duration-200"
                    aria-label="Twitter Profile"
                >
                    <FaSquareXTwitter />
                </a>
                <a
                    href="https://www.instagram.com/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-600 transition-colors duration-200"
                    aria-label="Instagram Profile"
                >
                    <FaInstagram />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
