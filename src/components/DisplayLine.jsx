import barLogo from "../assets/bar.png";
import { TAG_LINE } from "../constants";
import GetStartedButton from "./Button";

const DisplayLine = () => {
    const handleGetStarted = () => {
        const eventsSection = document.getElementById('events-section');
        if (eventsSection) {
            eventsSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <div className="relative min-h-[80vh] flex items-center justify-center flex-col">
            {/* Background gradient circles */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-purple-500/30 blur-3xl"></div>
                <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-blue-500/30 blur-3xl"></div>
            </div>

            {/* Main content */}
            <div className="w-full max-w-4xl mx-auto px-4 animate-fadeIn">
                {/* Title with gradient text */}
                <h1 className="mb-8 text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                        Spark2K25
                    </span>
                    <br />
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-200">
                        By Computer Science Department
                    </span>
                </h1>

                {/* Logo with hover effect */}
                <div className="flex items-center justify-center mb-8 transform transition-transform duration-500 hover:scale-105">
                    <img 
                        className="w-48 sm:w-56 md:w-64 lg:w-72 object-contain" 
                        src={barLogo} 
                        alt="Bar Logo"
                        loading="lazy"
                    />
                </div>

                {/* Tagline with animated underline */}
                <div className="relative mb-12 group">
                    <p className="max-w-2xl mx-auto py-4 text-center text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
                        {TAG_LINE}
                    </p>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-48 transition-all duration-700"></div>
                </div>

                {/* Button with minimal hover effect */}
                <div className="mt-4">
                    <GetStartedButton onClick={handleGetStarted}>
                        EXPLORE EVENTS
                    </GetStartedButton>
                </div>
            </div>
        </div>
    );
};

export default DisplayLine;