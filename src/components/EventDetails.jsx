
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaPhone, FaUserTie, FaMoneyBillWave, FaBook, FaCheckCircle, FaWhatsapp, FaTrophy, FaClock, FaInfoCircle, FaStar, FaBullseye, FaUsers, FaAward, FaFlagCheckered } from 'react-icons/fa';
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
        type: "non-technical",
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
        type: "non-technical",
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
            <div className="min-h-screen flex items-center justify-center bg-gray-950">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4 text-white">Event not found</h2>
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
        <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white pb-20 pt-20">
            {/* Modern Hero Section with Glassmorphism */}
            <div className="relative overflow-hidden mx-2 md:mx-8 mb-8 md:mb-12">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center rounded-2xl md:rounded-3xl"
                    style={{ backgroundImage: `url('${event.backgroundImage}')` }}
                ></div>

                {/* Dark Overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70 rounded-2xl md:rounded-3xl"></div>

                {/* Animated Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/30 via-transparent to-purple-600/30 animate-gradient rounded-2xl md:rounded-3xl"></div>

                {/* Glass Morphism Layer */}
                <div className="absolute inset-0 backdrop-blur-sm bg-white/5 rounded-2xl md:rounded-3xl"></div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/30 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-400/30 to-transparent rounded-full blur-3xl"></div>

                {/* Content */}
                <div className="relative z-10 p-4 sm:p-6 md:p-12">
                    {/* Back Button - Modern Glass */}
                    <button
                        onClick={() => navigate('/')}
                        className="mb-6 md:mb-8 px-4 md:px-6 py-2 md:py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center gap-2 md:gap-3 text-white hover:bg-white/20 transition-all group text-sm md:text-base"
                    >
                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform text-sm md:text-base" />
                        <span className="font-medium">Back to Events</span>
                    </button>

                    {/* Type Badge - Floating Glass pill - Repositioned for mobile */}
                    <div className="mb-4 md:absolute md:top-8 md:right-8 z-20">
                        <span className={`inline-flex px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider shadow-2xl backdrop-blur-md border-2 transition-all duration-300 hover:scale-110 items-center gap-2 ${event.type === 'technical'
                            ? 'bg-gradient-to-r from-teal-600/90 to-emerald-700/90 text-white border-teal-400/50'
                            : 'bg-gradient-to-r from-amber-600/90 to-orange-700/90 text-white border-amber-400/50'
                            }`}>
                            {event.type === 'technical' ? <><FaBook className="text-sm md:text-lg" /> Technical</> : <><FaBullseye className="text-sm md:text-lg" /> Non-Technical</>}
                        </span>
                    </div>

                    {/* Title - Large and Bold */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-3 md:mb-4 text-white drop-shadow-2xl leading-tight">
                        {event.title}
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white/90 mb-6 md:mb-10 leading-relaxed">
                        {event.subtitle}
                    </p>

                    {/* CTA Buttons - Premium Style - Mobile Optimized */}
                    <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
                        <button
                            onClick={handleRegister}
                            className="group w-full sm:w-auto px-6 md:px-10 py-3 md:py-4 bg-gradient-to-r from-slate-100 to-slate-50 text-slate-900 rounded-xl md:rounded-2xl font-bold text-base md:text-lg shadow-2xl hover:shadow-slate-400/30 transition-all duration-300 hover:scale-105 md:hover:scale-110 flex items-center justify-center gap-2 md:gap-3 border-2 border-slate-200"
                        >
                            <FaTrophy className="text-xl md:text-2xl text-amber-600 group-hover:rotate-12 transition-transform" />
                            Register Now
                        </button>
                        {/* View Rules - Glass Button */}
                        <a
                            href="https://drive.google.com/drive/folders/16J1xM3P9myi2vcOLEBYdAbYqYy0xW2eW?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group w-full sm:w-auto px-6 md:px-10 py-3 md:py-4 bg-slate-800/40 backdrop-blur-md text-slate-100 rounded-xl md:rounded-2xl font-semibold text-base md:text-lg border-2 border-slate-600/30 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 md:gap-3"
                        >
                            <FaBook className="text-lg md:text-xl text-teal-400" />
                            View Rules
                        </a>
                        <a
                            href="https://whatsapp.com/channel/0029Vb728qhFSAt4kEH0jM1q"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-emerald-600/20 to-green-700/20 backdrop-blur-md border-2 border-emerald-500/50 text-white rounded-xl font-semibold text-base md:text-lg hover:from-emerald-600/30 hover:to-green-700/30 transition-all flex items-center justify-center gap-2 hover:scale-105"
                        >
                            <FaWhatsapp className="text-xl md:text-2xl" />
                            <span>Join Updates</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Countdown Timer */}
            <div className="mx-4 md:mx-8 mb-12">
                <CountdownTimer targetDate="2026-02-14T09:00:00" />
            </div>

            {/* Main Content - Premium Cards Layout */}
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8 space-y-6 md:space-y-8">
                {/* About Section - Glass Card */}
                <div className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 p-5 sm:p-6 md:p-8 lg:p-10 hover:border-teal-500/50 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative">
                        <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                            <div className="p-3 md:p-4 bg-gradient-to-br from-teal-600 to-emerald-700 rounded-xl md:rounded-2xl shadow-lg shadow-teal-600/50">
                                <FaInfoCircle className="text-2xl md:text-3xl text-white" />
                            </div>
                            <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
                                About the Event
                            </h3>
                        </div>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed md:pl-20">
                            {event.description}
                        </p>
                    </div>
                </div>

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-5 md:gap-8">
                    {/* Why Participate - Glass Card */}
                    <div className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 p-5 sm:p-6 md:p-8 hover:border-amber-500/50 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative">
                            <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-8">
                                <div className="p-3 md:p-4 bg-gradient-to-br from-amber-600 to-orange-700 rounded-xl md:rounded-2xl shadow-lg shadow-amber-600/50">
                                    <FaAward className="text-2xl md:text-3xl text-white" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                                    Why Participate?
                                </h3>
                            </div>
                            <ul className="space-y-3 md:space-y-4">
                                {event.why.map((reason, index) => (
                                    <li key={index} className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-slate-800/30 hover:bg-slate-700/40 transition-colors border border-slate-700/30">
                                        <div className="p-1.5 md:p-2 bg-gradient-to-br from-amber-600 to-orange-700 rounded-lg mt-0.5 flex-shrink-0">
                                            <FaCheckCircle className="text-white text-base md:text-lg" />
                                        </div>
                                        <span className="text-gray-200 text-sm md:text-base flex-1">{reason}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Key Highlights - Glass Card */}
                    <div className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 p-5 sm:p-6 md:p-8 hover:border-emerald-500/50 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative">
                            <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-8">
                                <div className="p-3 md:p-4 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-xl md:rounded-2xl shadow-lg shadow-emerald-600/50">
                                    <FaFlagCheckered className="text-2xl md:text-3xl text-white" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                                    Key Highlights
                                </h3>
                            </div>
                            <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                                {event.highlights}
                            </p>

                            {/* Entry Fee - Featured */}
                            <div className="pt-4 md:pt-6 border-t border-white/10">
                                <div className="mb-4 md:mb-6 p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-r from-teal-700/20 to-emerald-700/20 border border-teal-600/30">
                                    <div className="flex items-center gap-2 md:gap-3 mb-2">
                                        <FaMoneyBillWave className="text-2xl md:text-3xl text-teal-400" />
                                        <p className="text-xs md:text-sm text-slate-400 uppercase tracking-wider">Entry Fee</p>
                                    </div>
                                    <p className="text-3xl md:text-4xl font-black bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
                                        {event.fee}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Event Rounds - Premium Timeline Design */}
                <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/30 p-5 sm:p-6 md:p-8 lg:p-10">
                    <div className="mb-6 md:mb-8">
                        <div className="flex items-center gap-3 md:gap-4 mb-2">
                            <div className="p-3 md:p-4 bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl md:rounded-2xl shadow-lg shadow-teal-600/30">
                                <FaClock className="text-2xl md:text-3xl text-white" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
                                Event Rounds
                            </h3>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Connecting Line - Gradient */}
                        <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-emerald-500 to-amber-500 rounded-full opacity-50"></div>

                        <div className="grid lg:grid-cols-2 gap-5 md:gap-8">
                            {event.events.map((round, index) => (
                                <div key={index} className="group relative">
                                    <div className="relative overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/30 p-5 md:p-8 hover:scale-105 hover:border-teal-600/50 transition-all duration-500 hover:shadow-2xl">
                                        {/* Round Number Badge - Large Floating */}
                                        <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-teal-600 to-emerald-700 rounded-full flex items-center justify-center text-xl md:text-2xl font-black text-white shadow-2xl shadow-teal-600/30 group-hover:scale-125 transition-transform">
                                            {index + 1}
                                        </div>

                                        <div className="flex items-start gap-3 md:gap-6">
                                            <div className="p-2.5 md:p-4 bg-gradient-to-br from-amber-600 to-orange-700 rounded-xl md:rounded-2xl shadow-lg flex-shrink-0">
                                                <FaFlagCheckered className="text-2xl md:text-3xl text-white" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg md:text-2xl font-bold text-slate-100 mb-2 md:mb-3">{round.title}</h4>
                                                <p className="text-slate-300 text-sm md:text-lg leading-relaxed">{round.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Event Coordinators - Premium Metallic Design */}
                <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-xl border border-slate-700/50 p-5 sm:p-6 md:p-8 lg:p-10">
                    {/* Metallic shine overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-400/5 to-transparent -skew-x-12 animate-pulse pointer-events-none"></div>

                    <div className="relative z-10 mb-6 md:mb-10">
                        <div className="flex items-center gap-3 md:gap-4 mb-2">
                            <div className="relative p-3 md:p-4 rounded-xl md:rounded-2xl overflow-hidden group">
                                {/* Metallic background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-400 via-slate-300 to-slate-500 opacity-90"></div>
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent animate-pulse"></div>
                                <FaUsers className="relative text-2xl md:text-3xl text-slate-800" />
                            </div>
                            <div>
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-slate-300 via-slate-100 to-slate-400 bg-clip-text text-transparent drop-shadow-lg">
                                    Meet Your Event Leaders
                                </h3>
                                <p className="text-slate-400 mt-1 text-xs md:text-base">Connect with our coordinators for guidance and support</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-5 md:gap-8">
                        {/* Main Coordinator - Premium Metallic Card */}
                        <div className="group relative">
                            {/* 3D Card Effect */}
                            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border-2 border-slate-600/30 p-6 transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl">
                                {/* Metallic shine effect - animated */}
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-300/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-pulse"></div>

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Profile Image */}
                                    <div className="mb-6 flex justify-center">
                                        <div className="relative group-hover:scale-110 transition-all duration-500">
                                            {event.coordinator.image ? (
                                                <div className="relative">
                                                    <img
                                                        src={event.coordinator.image}
                                                        alt={event.coordinator.name}
                                                        className="w-36 h-36 rounded-full object-cover border-4 border-gray-700/50 shadow-2xl"
                                                    />
                                                    {/* Metallic gloss overlay */}
                                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
                                                </div>
                                            ) : (
                                                <div className="relative p-8 rounded-full bg-gradient-to-br from-gray-300 via-gray-100 to-gray-400 shadow-2xl">
                                                    <FaUserTie className="text-5xl text-gray-700" />
                                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-transparent to-transparent"></div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Badge - Metallic Chrome */}
                                    <div className="flex justify-center mb-5">
                                        <div className="relative px-6 py-2 rounded-full overflow-hidden group/badge">
                                            {/* Metallic background layers */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400"></div>
                                            <div className="absolute inset-0 bg-gradient-to-r from-teal-400/50 via-emerald-500/50 to-teal-400/50 opacity-0 group-hover/badge:opacity-100 transition-opacity"></div>
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 group-hover/badge:animate-pulse"></div>

                                            <span className="relative text-sm font-black uppercase tracking-wider text-slate-800 drop-shadow-sm flex items-center gap-2">
                                                <FaStar className="text-amber-600" /> Coordinator
                                            </span>
                                        </div>
                                    </div>

                                    {/* Name - Metallic Text */}
                                    <h4 className="text-3xl font-black text-center mb-6 bg-gradient-to-r from-slate-300 via-slate-100 to-slate-300 bg-clip-text text-transparent drop-shadow-lg">
                                        {event.coordinator.name}
                                    </h4>

                                    {/* Contact - Premium Metallic Style */}
                                    <div className="relative group/contact overflow-hidden rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-600/30 p-4 hover:border-teal-500/50 transition-all">
                                        {/* Shine effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/contact:translate-x-full transition-transform duration-1000"></div>

                                        <div className="relative flex items-center justify-center gap-4">
                                            <div className="p-3 bg-gradient-to-br from-teal-400 via-emerald-500 to-teal-600 rounded-lg shadow-lg">
                                                <FaPhone className="text-white text-lg" />
                                            </div>
                                            <a
                                                href={`tel:${event.coordinator.contact}`}
                                                className="font-mono text-xl font-bold bg-gradient-to-r from-slate-300 to-slate-100 bg-clip-text text-transparent hover:from-teal-400 hover:to-emerald-500 transition-all"
                                            >
                                                {event.coordinator.contact}
                                            </a>
                                        </div>
                                    </div>

                                    {/* Decorative corner accents */}
                                    <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-slate-600/40 rounded-tr-2xl"></div>
                                    <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-slate-600/40 rounded-bl-2xl"></div>
                                </div>
                            </div>
                        </div>

                        {/* Co-Coordinator - Premium Metallic Card */}
                        {event.cocoordinator && (
                            <div className="group relative">
                                {/* 3D Card Effect */}
                                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border-2 border-slate-600/30 p-6 transform transition-all duration-500 hover:scale-105 hover:-rotate-1 hover:shadow-2xl">
                                    {/* Metallic shine effect - animated */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-300/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-pulse"></div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Profile Image */}
                                        <div className="mb-6 flex justify-center">
                                            <div className="relative group-hover:scale-110 transition-all duration-500">
                                                {event.cocoordinator.image ? (
                                                    <div className="relative">
                                                        <img
                                                            src={event.cocoordinator.image}
                                                            alt={event.cocoordinator.name}
                                                            className="w-36 h-36 rounded-full object-cover border-4 border-gray-700/50 shadow-2xl"
                                                        />
                                                        {/* Metallic gloss overlay */}
                                                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
                                                    </div>
                                                ) : (
                                                    <div className="relative p-8 rounded-full bg-gradient-to-br from-gray-300 via-gray-100 to-gray-400 shadow-2xl">
                                                        <FaUserTie className="text-5xl text-gray-700" />
                                                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-transparent to-transparent"></div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Badge - Metallic Chrome */}
                                        <div className="flex justify-center mb-5">
                                            <div className="relative px-6 py-2 rounded-full overflow-hidden group/badge">
                                                {/* Metallic background layers */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400"></div>
                                                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/50 via-orange-500/50 to-amber-400/50 opacity-0 group-hover/badge:opacity-100 transition-opacity"></div>
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 group-hover/badge:animate-pulse"></div>

                                                <span className="relative text-sm font-black uppercase tracking-wider text-slate-800 drop-shadow-sm flex items-center gap-2">
                                                    <FaUserTie className="text-amber-600" /> Coordinator
                                                </span>
                                            </div>
                                        </div>

                                        {/* Name - Metallic Text */}
                                        <h4 className="text-3xl font-black text-center mb-6 bg-gradient-to-r from-slate-300 via-slate-100 to-slate-300 bg-clip-text text-transparent drop-shadow-lg">
                                            {event.cocoordinator.name}
                                        </h4>

                                        {/* Contact - Premium Metallic Style */}
                                        <div className="relative group/contact overflow-hidden rounded-xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-600/30 p-4 hover:border-amber-600/50 transition-all">
                                            {/* Shine effect */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-300/10 to-transparent -translate-x-full group-hover/contact:translate-x-full transition-transform duration-1000"></div>

                                            <div className="relative flex items-center justify-center gap-4">
                                                <div className="p-3 bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 rounded-lg shadow-lg">
                                                    <FaPhone className="text-white text-lg" />
                                                </div>
                                                <a
                                                    href={`tel:${event.cocoordinator.contact}`}
                                                    className="font-mono text-xl font-bold bg-gradient-to-r from-slate-300 to-slate-100 bg-clip-text text-transparent hover:from-amber-400 hover:to-orange-500 transition-all"
                                                >
                                                    {event.cocoordinator.contact}
                                                </a>
                                            </div>
                                        </div>

                                        {/* Decorative corner accents */}
                                        <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-slate-600/40 rounded-tr-2xl"></div>
                                        <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-slate-600/40 rounded-bl-2xl"></div>
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
