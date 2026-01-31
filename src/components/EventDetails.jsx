import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaPhone, FaUserTie, FaMoneyBillWave, FaBook, FaCheckCircle, FaWhatsapp } from 'react-icons/fa';
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
        type: "non-technical",
        registrationLink: "https://forms.gle/TmyrFpK3LXfyJbfx8"
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
        registrationLink: "https://forms.gle/TmyrFpK3LXfyJbfx8"
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
        type: "non-technical",
        registrationLink: "https://forms.gle/TmyrFpK3LXfyJbfx8"
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
        registrationLink: "https://forms.gle/TmyrFpK3LXfyJbfx8"
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
        type: "non-technical",
        registrationLink: "https://forms.gle/TmyrFpK3LXfyJbfx8"
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
            <div className="min-h-screen flex items-center justify-center bg-gray-950">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4 text-white">Event not found</h2>
                    <button
                        onClick={() => navigate('/')}
                        className="px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600"
                    >
                        Return Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-950 text-white pb-16 pt-20">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-cyan-600 to-blue-700 rounded-3xl m-4 md:m-8 p-8 md:p-12">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000),linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000)] bg-[length:60px_60px] bg-[position:0_0,30px_30px] rounded-3xl"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                    {/* Back Button */}
                    <button
                        onClick={() => navigate('/')}
                        className="mb-6 flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                    >
                        <FaArrowLeft />
                        <span>Back to Events</span>
                    </button>

                    {/* Event Type Badge */}
                    <p className="text-sm uppercase tracking-wider text-white/70 mb-3">
                        {event.type === 'technical' ? 'TECHNICAL EVENT' : 'NON-TECHNICAL EVENT'}
                    </p>

                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl font-bold mb-3 text-white">{event.title}</h1>
                    <h2 className="text-xl md:text-2xl text-white/90 mb-8">{event.subtitle}</h2>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={handleRegister}
                            className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:scale-105 transition-transform"
                        >
                            Register Now
                        </button>
                        <a
                            href="https://drive.google.com/drive/folders/16J1xM3P9myi2vcOLEBYdAbYqYy0xW2eW?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-white/10 backdrop-blur-lg text-white rounded-lg font-semibold border-2 border-white/30 hover:bg-white/20 transition-all flex items-center gap-2"
                        >
                            <FaBook />
                            <span>Rule Book</span>
                        </a>
                        <a
                            href="https://whatsapp.com/channel/0029Vb728qhFSAt4kEH0jM1q"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-green-500/20 backdrop-blur-lg text-white rounded-lg font-semibold border-2 border-green-500/30 hover:bg-green-500/30 transition-all flex items-center gap-2"
                        >
                            <FaWhatsapp className="text-xl" />
                            <span>Join for Updates</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Countdown Timer */}
            <div className="mx-4 md:mx-8 my-8">
                <CountdownTimer targetDate="2026-02-14T09:00:00" />
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-8">
                {/* About the Event */}
                <div className="bg-gray-900 rounded-2xl p-6 md:p-8 border-l-4 border-cyan-500">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                        <span className="text-cyan-500">📋</span>
                        About the Event
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                        {event.description}
                    </p>
                </div>

                {/* Two Column Layout - Why Participate & Key Highlights */}
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Why Participate */}
                    <div className="bg-gray-900 rounded-2xl p-6 md:p-8 border-l-4 border-purple-500">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <span className="text-purple-500">✨</span>
                            Why Participate?
                        </h3>
                        <ul className="space-y-4">
                            {event.why.map((reason, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <FaCheckCircle className="text-cyan-400 mt-1 flex-shrink-0" />
                                    <span className="text-gray-300">{reason}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Key Highlights */}
                    <div className="bg-gray-900 rounded-2xl p-6 md:p-8 border-l-4 border-blue-500">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <span className="text-blue-500">🔑</span>
                            Key Highlights
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            {event.highlights}
                        </p>

                        {/* Entry Fee */}
                        <div className="pt-6 border-t border-gray-800">
                            <div className="flex items-center gap-4">
                                <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-600">
                                    <FaMoneyBillWave className="text-2xl text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Entry Fee</p>
                                    <p className="text-xl font-bold text-cyan-400">{event.fee}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Event Rounds */}
                <div className="bg-gray-900 rounded-2xl p-6 md:p-8">
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <span className="text-cyan-500">🎯</span>
                        Event Rounds
                    </h3>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500"></div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {event.events.map((round, index) => (
                                <div key={index} className="relative">
                                    {/* Round Card */}
                                    <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all">
                                        {/* Number Badge */}
                                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${index === 0 ? 'bg-gradient-to-br from-cyan-500 to-blue-600' : 'bg-gradient-to-br from-purple-500 to-pink-600'
                                            }`}>
                                            <span className="text-xl font-bold">{index + 1}</span>
                                        </div>

                                        <h4 className="font-bold text-xl mb-3 text-white">
                                            {round.title}
                                        </h4>
                                        <p className="text-gray-400">
                                            {round.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Event Coordinators */}
                <div className="bg-gray-900 rounded-2xl p-6 md:p-8">
                    <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">
                        <span className="text-cyan-500">👥</span>
                        Event Coordinators
                    </h3>
                    <p className="text-gray-400 mb-8">Get in touch with our event heads for any queries</p>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Main Coordinator */}
                        <div className="group">
                            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all">
                                {/* Profile Image */}
                                <div className="mb-6 flex justify-center">
                                    <div className="relative group-hover:scale-110 transition-transform">
                                        {event.coordinator.image ? (
                                            <img
                                                src={event.coordinator.image}
                                                alt={event.coordinator.name}
                                                className="w-32 h-32 rounded-full object-cover border-4 border-gray-700"
                                            />
                                        ) : (
                                            <div className="p-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600">
                                                <FaUserTie className="text-4xl text-white" />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Badge */}
                                <div className="flex justify-center mb-3">
                                    <span className="px-4 py-1 rounded-full bg-cyan-500 text-white text-xs font-semibold uppercase">
                                        Coordinator
                                    </span>
                                </div>

                                {/* Name */}
                                <h4 className="text-xl font-bold text-center mb-4 text-white">
                                    {event.coordinator.name}
                                </h4>

                                {/* Contact */}
                                <div className="flex items-center justify-center gap-3 p-3 rounded-lg bg-gray-900/50">
                                    <FaPhone className="text-cyan-400" />
                                    <a
                                        href={`tel:${event.coordinator.contact}`}
                                        className="font-mono text-gray-300 hover:text-white transition-colors"
                                    >
                                        {event.coordinator.contact}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Co-Coordinator */}
                        {event.cocoordinator && (
                            <div className="group">
                                <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all">
                                    {/* Profile Image */}
                                    <div className="mb-6 flex justify-center">
                                        <div className="relative group-hover:scale-110 transition-transform">
                                            {event.cocoordinator.image ? (
                                                <img
                                                    src={event.cocoordinator.image}
                                                    alt={event.cocoordinator.name}
                                                    className="w-32 h-32 rounded-full object-cover border-4 border-gray-700"
                                                />
                                            ) : (
                                                <div className="p-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-600">
                                                    <FaUserTie className="text-4xl text-white" />
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Badge */}
                                    <div className="flex justify-center mb-3">
                                        <span className="px-4 py-1 rounded-full bg-purple-500 text-white text-xs font-semibold uppercase">
                                            Coordinator
                                        </span>
                                    </div>

                                    {/* Name */}
                                    <h4 className="text-xl font-bold text-center mb-4 text-white">
                                        {event.cocoordinator.name}
                                    </h4>

                                    {/* Contact */}
                                    <div className="flex items-center justify-center gap-3 p-3 rounded-lg bg-gray-900/50">
                                        <FaPhone className="text-purple-400" />
                                        <a
                                            href={`tel:${event.cocoordinator.contact}`}
                                            className="font-mono text-gray-300 hover:text-white transition-colors"
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
