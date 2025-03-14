import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const eventDetails = {
    1: {
        title: "Robo Tech",
        subtitle: "Where Machines Come to Life",
        description: "Experience the future of robotics with hands-on workshops, competitions, and innovative demonstrations. Join us for an exciting journey into the world of automation and artificial intelligence.",
        why: [
            "Get hands-on experience with cutting-edge robotics",
            "Learn from industry experts and mentors",
            "Compete in exciting robot competitions",
            "Network with fellow robotics enthusiasts"
        ],
        highlights: "Join us for an immersive robotics experience where theory meets practice. From building your first robot to competing in advanced challenges, this event caters to all skill levels.",
        events: [
            {
                title: "Robot Wars",
                description: "Build and battle your custom robots"
            },
            {
                title: "Automation Challenge",
                description: "Create solutions for real-world automation problems"
            },
            {
                title: "AI Integration Workshop",
                description: "Learn to integrate AI with robotics"
            }
        ],
        registrationLink: "https://forms.google.com/your-robo-tech-form"
    },
    2: {
        title: "Code Craft",
        subtitle: "Crafting Digital Solutions",
        description: "Dive into the world of programming with challenging hackathons, coding competitions, and workshops on the latest technologies in software development.",
        why: [
            "Enhance your coding skills",
            "Work on real-world projects",
            "Learn modern development practices",
            "Build your developer portfolio"
        ],
        highlights: "From web development to mobile apps, explore various domains of software development with expert guidance and hands-on experience.",
        events: [
            {
                title: "Hackathon",
                description: "24-hour coding challenge"
            },
            {
                title: "Web Dev Workshop",
                description: "Learn modern web technologies"
            },
            {
                title: "Code Debug Challenge",
                description: "Test your debugging skills"
            }
        ],
        registrationLink: "https://forms.google.com/your-code-craft-form"
    },
    // Add more events as needed
};

const EventDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const event = eventDetails[id];

    const handleRegister = () => {
        window.open(event.registrationLink, '_blank');
    };

    if (!event) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Event not found</h2>
                    <button 
                        onClick={() => navigate('/')}
                        className="px-6 py-2 bg-purple-600/20 rounded-lg hover:bg-purple-600/30"
                    >
                        Return Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full py-8">
            {/* Header Section */}
            <div className="text-center mb-12">
                <p className="text-sm uppercase tracking-wider text-gray-400 mb-2">[ READY TO GET STARTED ]</p>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{event.title}</h1>
                <h2 className="text-2xl md:text-3xl text-purple-400 mb-6">{event.subtitle}</h2>
                
                {/* Register Button */}
                <button
                    onClick={handleRegister}
                    className="px-8 py-3 bg-purple-600 text-white rounded-lg font-medium
                             transform transition-all duration-300 hover:scale-105 hover:bg-purple-700
                             focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                    Register Now
                </button>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Description Section */}
                <div className="bg-gray-900/50 rounded-xl p-8">
                    <h3 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-4">
                        [ DESCRIPTION ]
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                        {event.description}
                    </p>
                </div>

                {/* Why Participate Section */}
                <div className="bg-gray-900/50 rounded-xl p-8">
                    <h3 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-4">
                        [ WHY TO PARTICIPATE? ]
                    </h3>
                    <ul className="space-y-3 text-gray-300">
                        {event.why.map((reason, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-purple-400 mr-2">•</span>
                                {reason}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Highlights Section */}
                <div className="bg-gray-900/50 rounded-xl p-8">
                    <h3 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-4">
                        [ KEY HIGHLIGHTS ]
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                        {event.highlights}
                    </p>
                </div>

                {/* Events Section */}
                <div className="bg-gray-900/50 rounded-xl p-8">
                    <h3 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-4">
                        [ EVENTS ]
                    </h3>
                    <div className="grid gap-4 md:grid-cols-2">
                        {event.events.map((item, index) => (
                            <div key={index} className="bg-gray-800/50 rounded-lg p-4">
                                <h4 className="font-semibold text-purple-400 mb-2">{item.title}</h4>
                                <p className="text-sm text-gray-300">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails; 