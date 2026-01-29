import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaPhone, FaUserTie, FaMoneyBillWave, FaBook } from 'react-icons/fa';
import CountdownTimer from './CountdownTimer';

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
            contact: "+91 9834059495",
            role: "Event Head"
        },
        cocoordinator: {
            name: "Rutuja Patil",
            contact: "+91 8010138189",
            role: "Co-Coordinator"
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
        highlights: "Multiple domains including Health, Education, AI/ML,IoT, and more. Two rounds: Online Abstract Submission and Offline Demonstration.",
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
            contact: "+91 877354046",
            role: "Event Head"
        },
        cocoordinator: {
            name: "Akshata Mohite",
            contact: "+91 9892249297",
            role: "Co-Coordinator"
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
            contact: "+91 9921718840",
            role: "Event Head"
        },
        cocoordinator: {
            name: "Rohini Maske",
            contact: "+91 9529647141",
            role: "Co-Coordinator"
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
            contact: "NA",
            role: "Event Head"
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
            contact: "NA",
            role: "Event Head"
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
            contact: "NA",
            role: "Event Head"
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
            contact: "NA",
            role: "Event Head"
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
    };

    const gradientColors = event.type === 'technical'
        ? 'from-purple-600 via-pink-600 to-blue-600'
        : 'from-blue-600 via-cyan-600 to-emerald-600';

    return (
        <div className="w-full pb-16 animate-fade-in-up">
            {/* Hero Banner */}
            <div className={`relative overflow-hidden rounded-3xl mb-12 bg-gradient-to-br ${gradientColors} p-12 md:p-16`}>
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000),linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000)] bg-[length:60px_60px] bg-[position:0_0,30px_30px]"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                    {/* Back Button */}
                    <button
                        onClick={() => navigate('/')}
                        className="mb-6 flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-200 group"
                    >
                        <FaArrowLeft className="transform group-hover:-translate-x-1 transition-transform duration-200" />
                        <span>Back to Events</span>
                    </button>

                    {/* Event Type Badge */}
                    <p className="text-sm uppercase tracking-wider text-white/70 mb-3">
                        [ {event.type === 'technical' ? 'TECHNICAL EVENT' : 'NON-TECHNICAL EVENT'} ]
                    </p>

                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl font-bold mb-3 text-white">{event.title}</h1>
                    <h2 className="text-2xl md:text-3xl text-white/90 mb-8">{event.subtitle}</h2>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={handleRegister}
                            className="px-8 py-4 bg-white text-gray-900 rounded-xl font-bold
                                    transform transition-all duration-300 hover:scale-105 hover:shadow-2xl
                                    focus:outline-none focus:ring-4 focus:ring-white/50"
                        >
                            Register Now
                        </button>

                        <a
                            href="https://drive.google.com/drive/folders/1qa8hPIDTXDLjL9bzfQ0Vjzzx2UsT09AM"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-white/10 backdrop-blur-lg text-white rounded-xl font-bold
                                    border-2 border-white/30 transform transition-all duration-300 
                                    hover:scale-105 hover:bg-white/20 hover:border-white/50
                                    focus:outline-none focus:ring-4 focus:ring-white/30
                                    flex items-center gap-2"
                        >
                            <FaBook />
                            <span>Rule Book</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Countdown Timer */}
            <div className="mb-12">
                <CountdownTimer targetDate="2026-02-14T09:00:00" />
            </div>

            {/* Main Content Grid */}
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Description Section */}
                <div className="glass-strong rounded-2xl p-8 animate-fade-in-up stagger-1">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                        <span className={`h-1 w-12 rounded-full bg-gradient-to-r ${gradientColors}`}></span>
                        About the Event
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        {event.description}
                    </p>
                </div>

                {/* Why Participate & Highlights Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Why Participate */}
                    <div className="glass-strong rounded-2xl p-8 animate-fade-in-up stagger-2">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <span className={`h-1 w-12 rounded-full bg-gradient-to-r ${gradientColors}`}></span>
                            Why Participate?
                        </h3>
                        <ul className="space-y-4">
                            {event.why.map((reason, index) => (
                                <li key={index} className="flex items-start gap-3 group">
                                    <span className={`mt-1 h-2 w-2 rounded-full bg-gradient-to-r ${gradientColors} flex-shrink-0 group-hover:scale-150 transition-transform duration-300`}></span>
                                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200">{reason}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Highlights */}
                    <div className="glass-strong rounded-2xl p-8 animate-fade-in-up stagger-3">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <span className={`h-1 w-12 rounded-full bg-gradient-to-r ${gradientColors}`}></span>
                            Key Highlights
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            {event.highlights}
                        </p>

                        {/* Entry Fee Display */}
                        <div className="mt-6 pt-6 border-t border-gray-700">
                            <div className="flex items-center gap-3">
                                <div className={`p-3 rounded-xl bg-gradient-to-br ${gradientColors} bg-opacity-20`}>
                                    <FaMoneyBillWave className={`text-2xl bg-gradient-to-br ${gradientColors} bg-clip-text text-transparent`} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Entry Fee</p>
                                    <p className="text-xl font-bold text-white">{event.fee}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Event Rounds */}
                <div className="glass-strong rounded-2xl p-8 animate-fade-in-up stagger-4">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <span className={`h-1 w-12 rounded-full bg-gradient-to-r ${gradientColors}`}></span>
                        Event Rounds
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {event.events.map((item, index) => (
                            <div key={index} className="relative group">
                                <div className="glass rounded-xl p-6 h-full hover-lift transition-all duration-300">
                                    {/* Number Badge */}
                                    <div className={`absolute -top-3 -left-3 w-12 h-12 rounded-xl bg-gradient-to-br ${gradientColors} flex items-center justify-center font-bold text-xl shadow-lg`}>
                                        {index + 1}
                                    </div>

                                    <h4 className="font-bold text-xl mb-3 mt-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Event Coordinators Section - UNIQUE DESIGN */}
                <div className="glass-strong rounded-2xl p-8 animate-fade-in-up stagger-5">
                    <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">
                        <span className={`h-1 w-12 rounded-full bg-gradient-to-r ${gradientColors}`}></span>
                        Event Coordinators
                    </h3>
                    <p className="text-gray-400 mb-8">Get in touch with our event heads for any queries</p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Main Coordinator Card */}
                        <div className="group relative">
                            <div className="glass rounded-2xl p-8 hover-lift transition-all duration-500 overflow-hidden">
                                {/* Gradient Background Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${gradientColors} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}></div>

                                {/* Role Badge */}
                                <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${gradientColors} text-white text-sm font-semibold mb-4`}>
                                    {event.coordinator.role}
                                </div>

                                {/* Profile Icon */}
                                <div className="mb-6 flex justify-center">
                                    <div className={`relative p-6 rounded-2xl bg-gradient-to-br ${gradientColors} group-hover:scale-110 transition-transform duration-500`}>
                                        <FaUserTie className="text-5xl text-white" />

                                        {/* Pulse effect */}
                                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradientColors} animate-ping opacity-20`}></div>
                                    </div>
                                </div>

                                {/* Name */}
                                <h4 className="text-2xl font-bold text-center mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                                    {event.coordinator.name}
                                </h4>

                                {/* Contact */}
                                <div className="mt-6 flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                                    <FaPhone className={`text-lg bg-gradient-to-br ${gradientColors} bg-clip-text text-transparent`} />
                                    <a
                                        href={`tel:${event.coordinator.contact}`}
                                        className="text-lg font-mono text-gray-300 hover:text-white transition-colors duration-200"
                                    >
                                        {event.coordinator.contact}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Co-Coordinator Card */}
                        {event.cocoordinator && (
                            <div className="group relative">
                                <div className="glass rounded-2xl p-8 hover-lift transition-all duration-500 overflow-hidden">
                                    {/* Gradient Background Effect */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${gradientColors} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}></div>

                                    {/* Role Badge */}
                                    <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${gradientColors} text-white text-sm font-semibold mb-4`}>
                                        {event.cocoordinator.role}
                                    </div>

                                    {/* Profile Icon */}
                                    <div className="mb-6 flex justify-center">
                                        <div className={`relative p-6 rounded-2xl bg-gradient-to-br ${gradientColors} group-hover:scale-110 transition-transform duration-500`}>
                                            <FaUserTie className="text-5xl text-white" />

                                            {/* Pulse effect */}
                                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradientColors} animate-ping opacity-20`}></div>
                                        </div>
                                    </div>

                                    {/* Name */}
                                    <h4 className="text-2xl font-bold text-center mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-emerald-400 transition-all duration-300">
                                        {event.cocoordinator.name}
                                    </h4>

                                    {/* Contact */}
                                    <div className="mt-6 flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                                        <FaPhone className={`text-lg bg-gradient-to-br ${gradientColors} bg-clip-text text-transparent`} />
                                        <a
                                            href={`tel:${event.cocoordinator.contact}`}
                                            className="text-lg font-mono text-gray-300 hover:text-white transition-colors duration-200"
                                        >
                                            {event.cocoordinator.contact}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
