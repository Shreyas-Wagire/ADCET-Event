import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaPhone, FaUserTie, FaMoneyBillWave, FaCheckCircle, FaTrophy, FaClock, FaInfoCircle, FaStar, FaAward, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import CountdownTimer from './CountdownTimer';

const eventDetails = {
    1: {
        title: "Apti Master",
        subtitle: "Test Your Analytical Skills",
        description: "The Apti Master competition is designed to test students' aptitude, logical reasoning, and problem-solving skills through challenging and engaging rounds.",
        why: [
            "Enhance your aptitude and logical reasoning",
            "Test your problem-solving abilities",
            "Compete with the best minds",
            "Win exciting cash prizes"
        ],
        highlights: "Single Entry Competition. Two challenging rounds: Online (Laptops) and Offline (Pen & Paper). Top performers from Round 1 qualify for Round 2.",
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
            name: "Tanvi Patil",
            contact: "+91 9022573574",
            image: "/head/Tanvi patil.jpeg"
        },
        cocoordinator: {
            name: "Prathmesh Sutar",
            contact: "+91 9370657289",
            image: "/head/PS.jpeg"
        },
        fee: "₹100 per participant",
        type: "technical",
        registrationLink: "https://forms.gle/TmyrFpK3LXfyJbfx8",
        backgroundImage: "/background/apti-master.png"
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
        highlights: "Team Size: 2-4 Members. Multiple domains including Health, Education, AI/ML, IoT, and more. Two rounds: Online Abstract Submission and Offline Demonstration.",
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
            name: "Pratik Jadhav",
            contact: "+91 9356481821",
            image: "/head/pratik jadhav.jpeg"
        },
        cocoordinator: {
            name: "Shruti Khanchanale",
            contact: "+91 9421277748",
            image: "/head/Shruti.jpeg"
        },
        fee: "₹200 - ₹400 per team",
        type: "technical",
        registrationLink: "https://forms.gle/TmyrFpK3LXfyJbfx8",
        backgroundImage: "/background/mini-hack.png"
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
        highlights: "Single Entry. Groups of 8-10 members formed on spot, Topics given on spot, English medium discussion, Professional evaluation criteria.",
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
            name: "Shreya Chougule",
            contact: "+91 9356603103",
            image: "/head/Shreya.jpeg"
        },
        cocoordinator: {
            name: "Shreyas Wagire",
            contact: "+91 7499321428",
            image: "/head/shreyas.jpg"
        },
        fee: "₹100 per participant",
        type: "technical",
        registrationLink: "https://forms.gle/TmyrFpK3LXfyJbfx8",
        backgroundImage: "/background/gd.png"
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
            name: "Sakshi Mohite",
            contact: "+91 9604507650",
            image: "/head/sakshi.jpeg"
        },
        cocoordinator: {
            name: "Pranav Chavan",
            contact: "+91 7058608709",
            image: "/head/Pranav Chavan.jpeg"
        },
        fee: "₹100 per team",
        type: "technical",
        registrationLink: "https://forms.gle/TmyrFpK3LXfyJbfx8",
        backgroundImage: "/background/innoprotex.png"
    },
    5: {
        title: "GAT Master",
        subtitle: "Test Your General Aptitude",
        description: "A comprehensive General Aptitude Test designed to evaluate participants' analytical thinking, reasoning abilities, and problem-solving skills.",
        why: [
            "Improve general aptitude skills",
            "Prepare for competitive exams",
            "Benchmark your skills",
            "Win recognition and prizes"
        ],
        highlights: "Team Size: 2 Members. Multiple sections covering Quantitative, Logical, and Verbal Reasoning. Structured test format with time limits.",
        events: [
            {
                title: "Test Round",
                description: "Comprehensive written test"
            }
        ],
        coordinator: {
            name: "Manasi Suryawanshi",
            contact: "+91 9130271171",
            image: "/head/Mansi.jpeg"
        },
        cocoordinator: {
            name: "Pruthviraj Thorbole",
            contact: "+91 8262968845",
            image: "/head/pruthviraj.jpeg"
        },
        fee: "₹200 per team",
        type: "technical",
        registrationLink: "https://forms.gle/TmyrFpK3LXfyJbfx8",
        backgroundImage: "/background/gat-master.png"
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
            <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Event Not Found</h2>
                    <p className="text-gray-400 mb-6">The event you're looking for doesn't exist.</p>
                    <button
                        onClick={() => navigate('/')}
                        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
                    >
                        Return Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-950 text-white">
            {/* Minimal Hero Section */}
            <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-24 md:pt-0">
                {/* Background with darker overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${event.backgroundImage}')` }}
                ></div>
                <div className="absolute inset-0 bg-black/75"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>

                {/* Back Button */}
                <button
                    onClick={() => navigate('/')}
                    className="absolute top-16 left-4 md:top-6 md:left-6 z-30 px-4 py-2 md:px-5 md:py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center gap-2 text-white hover:bg-white/20 transition-all"
                >
                    <FaArrowLeft className="text-sm md:text-base" />
                    <span className="text-xs md:text-sm font-medium">Back</span>
                </button>

                {/* Type Badge */}
                <div className={`absolute top-16 right-4 md:top-6 md:right-6 z-30 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs font-bold uppercase ${event.type === 'technical' ? 'bg-teal-500' : 'bg-amber-500'
                    }`}>
                    {event.type === 'technical' ? 'Technical' : 'Non-Technical'}
                </div>

                {/* Hero Content */}
                <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4">{event.title}</h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-12">{event.subtitle}</p>

                    {/* Quick Info */}
                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-8 md:mb-12">
                        <div className="flex items-center gap-2 text-xs md:text-sm">
                            <FaCalendarAlt className="text-teal-400" />
                            <span>14th Feb 2026</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs md:text-sm font-bold">
                            <FaMoneyBillWave className="text-emerald-400" />
                            <span>{event.fee}</span>
                        </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
                        <button
                            onClick={handleRegister}
                            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 rounded-xl font-bold text-sm md:text-base shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                        >
                            Register Now
                        </button>
                        <a
                            href="https://drive.google.com/drive/folders/16J1xM3P9myi2vcOLEBYdAbYqYy0xW2eW?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white/5 border border-white/20 rounded-xl font-semibold text-sm md:text-base hover:bg-white/10 transition-all"
                        >
                            View Rules
                        </a>
                    </div>
                </div>
            </div>

            {/* Countdown Timer */}
            <div className="px-6 py-8 relative z-10">
                <CountdownTimer targetDate="2026-02-14T09:00:00" />
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 py-20 space-y-16">

                {/* About + Highlights */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* About */}
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                        <div className="flex items-center gap-3 mb-4">
                            <FaInfoCircle className="text-2xl text-teal-400" />
                            <h2 className="text-2xl font-bold">About</h2>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{event.description}</p>
                    </div>

                    {/* Highlights */}
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                        <div className="flex items-center gap-3 mb-4">
                            <FaStar className="text-2xl text-amber-400" />
                            <h2 className="text-2xl font-bold">Highlights</h2>
                        </div>
                        <p className="text-gray-300 leading-relaxed mb-6">{event.highlights}</p>
                        <div className="pt-4 border-t border-gray-800">
                            <p className="text-sm text-gray-400 mb-1">Entry Fee</p>
                            <p className="text-3xl font-black bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
                                {event.fee}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Why Participate */}
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                    <div className="flex items-center gap-3 mb-6">
                        <FaAward className="text-2xl text-amber-400" />
                        <h2 className="text-2xl font-bold">Why Participate?</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {event.why.map((reason, index) => (
                            <div key={index} className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg">
                                <FaCheckCircle className="text-teal-400 flex-shrink-0" />
                                <span className="text-gray-300">{reason}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Event Rounds */}
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                    <div className="flex items-center gap-3 mb-8">
                        <FaClock className="text-2xl text-purple-400" />
                        <h2 className="text-2xl font-bold">Event Rounds</h2>
                    </div>
                    <div className={`grid ${event.events.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-6`}>
                        {event.events.map((round, index) => (
                            <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-teal-500/50 transition-all">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-purple-600 flex items-center justify-center text-sm font-black">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-lg font-bold">{round.title}</h3>
                                </div>
                                <p className="text-gray-400 text-sm">{round.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Coordinators */}
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                    <div className="flex items-center gap-3 mb-8">
                        <FaUsers className="text-2xl text-cyan-400" />
                        <h2 className="text-2xl font-bold">Event Coordinators</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Coordinator */}
                        <div className="text-center">
                            <div className="mb-4 flex justify-center">
                                {event.coordinator.image ? (
                                    <img
                                        src={event.coordinator.image}
                                        alt={event.coordinator.name}
                                        className="w-32 h-32 rounded-full object-cover border-4 border-gray-700"
                                    />
                                ) : (
                                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                                        <FaUserTie className="text-4xl text-white" />
                                    </div>
                                )}
                            </div>
                            <div className="mb-2 inline-block px-4 py-1 bg-teal-500/20 border border-teal-500/50 rounded-full text-xs font-bold uppercase">
                                Coordinator
                            </div>
                            <h3 className="text-xl font-bold mb-4">{event.coordinator.name}</h3>
                            <a
                                href={`tel:${event.coordinator.contact}`}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all"
                            >
                                <FaPhone className="text-teal-400" />
                                <span className="font-mono text-sm">{event.coordinator.contact}</span>
                            </a>
                        </div>

                        {/* Co-Coordinator */}
                        {event.cocoordinator && (
                            <div className="text-center">
                                <div className="mb-4 flex justify-center">
                                    {event.cocoordinator.image ? (
                                        <img
                                            src={event.cocoordinator.image}
                                            alt={event.cocoordinator.name}
                                            className="w-32 h-32 rounded-full object-cover border-4 border-gray-700"
                                        />
                                    ) : (
                                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                                            <FaUserTie className="text-4xl text-white" />
                                        </div>
                                    )}
                                </div>
                                <div className="mb-2 inline-block px-4 py-1 bg-purple-500/20 border border-purple-500/50 rounded-full text-xs font-bold uppercase">
                                    Co-Coordinator
                                </div>
                                <h3 className="text-xl font-bold mb-4">{event.cocoordinator.name}</h3>
                                <a
                                    href={`tel:${event.cocoordinator.contact}`}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all"
                                >
                                    <FaPhone className="text-purple-400" />
                                    <span className="font-mono text-sm">{event.cocoordinator.contact}</span>
                                </a>
                            </div>
                        )}
                    </div>
                </div>

                {/* Final CTA */}
                <div className="text-center pt-8">
                    <button
                        onClick={handleRegister}
                        className="px-12 py-5 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 rounded-xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center gap-3"
                    >
                        <FaTrophy className="text-xl" />
                        <span>Register Now</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
