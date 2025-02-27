import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import logo from "../assets/swLogo.png";

const Navbar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <img className="mx-2 w-20 cursor-pointer" src={logo} alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/shreyas-wagire">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Shreyas-wagire">
                    <FaGithub />
                </a>
                <a href="https://twitter.com/your-profile">
                    <FaSquareXTwitter />
                </a>
                <a href="https://www.instagram.com/your-profile">
                    <FaInstagram />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
