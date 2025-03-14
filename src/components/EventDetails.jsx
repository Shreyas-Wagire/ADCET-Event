import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const eventDetails = {
    1: {
        title: "Apti-Master",
        subtitle: "Test Your Analytical Skills",
        description: "The Apti-Master competition is designed to test students' aptitude, logical reasoning, and problem-solving skills through challenging and engaging rounds.",
        why: [
            "Enhance your aptitude and logical reasoning",
            "Test your problem-solving abilities",
            "Compete with the best minds",
            "Win exciting cash prizes"
        ],
        highlights: "Two challenging rounds: Online (Laptops) and Offline (Pen & Paper). Top performers from Round 1 qualify for Round 2.",
        events: [
            {
                title: "Round 1",
                description: "Online aptitude test on laptops"
            },
            {
                title: "Round 2",
                description: "Offline written test for qualified participants"
            }
        ],
        coordinator: {
            name: "Prathmesh YadavPatil",
            contact: "+91 9834059495"
        },
        cocoordinator: {
            name: "Rutuja Patil",
            contact: "+91 8010138189"
        },
        fee: "₹50 per participant",
        type: "technical",
        registrationLink: "https://forms.gle/f9UAeXdJoGGmR9p66"
    },
    2: {
        title: "Mini Hackathon",
        subtitle: "Code, Create, Innovate",
        description: "A dynamic event that challenges participants to ideate, develop, and present innovative tech solutions. This competition is designed to encourage creativity, problem-solving, and hands-on development.",
        why: [
            "Showcase your development skills",
            "Work on real-world problems",
            "Network with fellow developers",
            "Win attractive cash prizes"
        ],
        highlights: "Multiple domains including Health, Education, AI/ML, IoT, and more. Two rounds: Online Abstract Submission and Offline Demonstration.",
        events: [
            {
                title: "Round 1: Abstract Submission",
                description: "Submit project idea and problem statement"
            },
            {
                title: "Round 2: Project Demo",
                description: "Present working prototype to judges"
            }
        ],
        coordinator: {
            name: "Zahoorahmed Sayyad",
            contact: "+91 877354046"
        },
        cocoordinator: {
            name: "Akshata Mohite",
            contact: "+91 9892249297"
        },
        fee: "₹200 per team",
        type: "technical",
        registrationLink: "https://forms.gle/f9UAeXdJoGGmR9p66"
    },
    3: {
        title: "Group Discussion",
        subtitle: "Voice Your Thoughts",
        description: "An engaging platform where participants showcase their communication, analytical thinking, and debating skills through structured discussions on contemporary topics.",
        why: [
            "Improve communication skills",
            "Develop critical thinking",
            "Learn team dynamics",
            "Enhance leadership qualities"
        ],
        highlights: "Groups of 8-10 members, Topics given on spot, English medium discussion, Professional evaluation criteria.",
        events: [
            {
                title: "Preparation Time",
                description: "2 minutes for topic analysis"
            },
            {
                title: "Discussion Round",
                description: "10 minutes group discussion"
            }
        ],
        coordinator: {
            name: "Shivam Gokhale",
            contact: "+91 9921718840"
        },
        cocoordinator: {
            name: "Rohini Maske",
            contact: "+91 9529647141"
        },
        fee: "₹50 per participant",
        type: "non-technical",
        registrationLink: "https://forms.gle/f9UAeXdJoGGmR9p66"
    },
    4: {
        title: "Innoprotex",
        subtitle: "Design Your Innovation",
        description: "An Innovative Idea Prototype Design Competition for SY Class students to present creative and feasible prototype ideas that address real-world challenges.",
        why: [
            "Present innovative solutions",
            "Develop prototype design skills",
            "Get expert feedback",
            "Opportunity for project funding"
        ],
        highlights: "8-10 minutes presentation time, Focus on real-world problems, Opportunity to demonstrate live prototypes.",
        events: [
            {
                title: "Idea Presentation",
                description: "Present problem statement and solution"
            },
            {
                title: "Prototype Demo",
                description: "Showcase working prototype if available"
            }
        ],
        coordinator: {
            name: "Contact CESA Team",
            contact: "NA"
        },
        fee: "Free for ADCET Students",
        type: "technical",
        registrationLink: "https://forms.gle/f9UAeXdJoGGmR9p66"
    },
    5: {
        title: "BGMI",
        subtitle: "Battle Grounds Mobile India",
        description: "Experience the thrill of competitive mobile gaming in this action-packed BGMI tournament.",
        why: [
            "Compete with skilled players",
            "Test your gaming strategies",
            "Win exciting prizes",
            "Build team coordination"
        ],
        highlights: "Team-based competition, Multiple rounds, Professional tournament format.",
        events: [
            {
                title: "Qualification Rounds",
                description: "Initial team battles"
            },
            {
                title: "Finals",
                description: "Top teams battle for victory"
            }
        ],
        coordinator: {
            name: "Contact CESA Team",
            contact: "NA"
        },
        fee: "Contact coordinators for details",
        type: "non-technical",
        registrationLink: "https://forms.gle/f9UAeXdJoGGmR9p66"
    },
    6: {
        title: "Box Cricket",
        subtitle: "Cricket with a Twist",
        description: "Experience cricket in a unique format with special rules and exciting gameplay in a compact arena.",
        why: [
            "Play innovative cricket format",
            "Build team spirit",
            "Enjoy competitive sports",
            "Win exciting prizes"
        ],
        highlights: "Special rules, Limited overs format, Exciting prizes for winners.",
        events: [
            {
                title: "League Matches",
                description: "Initial team matches"
            },
            {
                title: "Knockout Rounds",
                description: "Quarter-finals onwards"
            }
        ],
        coordinator: {
            name: "Contact CESA Team",
            contact: "NA"
        },
        fee: "Contact coordinators for details",
        type: "non-technical",
        registrationLink: "https://forms.gle/f9UAeXdJoGGmR9p66"
    },
    7: {
        title: "Treasure Hunt",
        subtitle: "Hunt for Glory",
        description: "An exciting treasure hunt that combines problem-solving, teamwork, and adventure across the campus.",
        why: [
            "Test your problem-solving skills",
            "Explore the campus",
            "Work in teams",
            "Win exciting prizes"
        ],
        highlights: "Multiple challenging clues, Team-based competition, Time-bound rounds.",
        events: [
            {
                title: "Clue Solving",
                description: "Decode hints and locations"
            },
            {
                title: "Final Hunt",
                description: "Race to the treasure"
            }
        ],
        coordinator: {
            name: "Contact CESA Team",
            contact: "NA"
        },
        fee: "Contact coordinators for details",
        type: "non-technical",
        registrationLink: "https://forms.gle/f9UAeXdJoGGmR9p66"
    }
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
                <p className="text-sm uppercase tracking-wider text-gray-400 mb-2">[ {event.type === 'technical' ? 'TECHNICAL EVENT' : 'NON-TECHNICAL EVENT'} ]</p>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{event.title}</h1>
                <h2 className="text-2xl md:text-3xl text-purple-400 mb-6">{event.subtitle}</h2>
                
                {/* Buttons Container */}
                <div className="flex items-center justify-center gap-4">
                    {/* Register Button */}
                    <button
                        onClick={handleRegister}
                        className="px-8 py-3 bg-purple-600 text-white rounded-lg font-medium
                                transform transition-all duration-300 hover:scale-105 hover:bg-purple-700
                                focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                    >
                        Register Now
                    </button>

                    {/* Rule Book Button */}
                    <a
                        href="https://drive.google.com/drive/folders/1qa8hPIDTXDLjL9bzfQ0Vjzzx2UsT09AM"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-gray-800 text-white rounded-lg font-medium
                                border border-gray-700 transform transition-all duration-300 
                                hover:scale-105 hover:bg-gray-700 hover:border-gray-600
                                focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900
                                flex items-center gap-2"
                    >
                        <span>Rule Book</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </a>
                </div>
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

                {/* Contact Section */}
                <div className="bg-gray-900/50 rounded-xl p-8">
                    <h3 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-4">
                        [ CONTACT DETAILS ]
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <h4 className="text-purple-400 font-medium mb-1">Coordinator:</h4>
                            <p className="text-gray-300">{event.coordinator.name} - {event.coordinator.contact}</p>
                        </div>
                        {event.cocoordinator && (
                            <div>
                                <h4 className="text-purple-400 font-medium mb-1">Co-coordinator:</h4>
                                <p className="text-gray-300">{event.cocoordinator.name} - {event.cocoordinator.contact}</p>
                            </div>
                        )}
                        <div className="mt-4">
                            <h4 className="text-purple-400 font-medium mb-1">Entry Fee:</h4>
                            <p className="text-gray-300">{event.fee}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails; 