import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaPhone, FaUserTie, FaMoneyBillWave, FaCheckCircle, FaTrophy, FaClock, FaInfoCircle, FaStar, FaAward, FaUsers, FaCalendarAlt, FaDownload } from 'react-icons/fa';
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
        highlights: "Single entry competition with two challenging rounds: Round 1 (Pen & Paper MCQ test) and Round 2 (Pen & Paper MCQ test). Top performers from Round 1 qualify for Round 2, and winners are decided based on top scores.",
        events: [
            {
                title: "Round 1",
                description: "Pen-paper MCQ test based on aptitude, logical reasoning and problemsolving skills. Only shortlisted students will appear for 2nd round."
            },
            {
                title: "Round 2",
                description: "Pen-paper MCQ test.Questions will be based on Quantitative Aptitude, Verbal."
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
        fee: "₹50 per participant",
        type: "technical",
        registrationLink: "https://forms.gle/TmyrFpK3LXfyJbfx8",
        backgroundImage: "/background/apti-master.png"
    },
    2: {
        title: "Mini Hackathon",
        subtitle: "Think, Build, Present",
        description: "A competitive innovation event where teams present creative solutions to real-world problems. The hackathon encourages critical thinking, teamwork, and impactful idea presentation.",
        why: [
            "Present innovative ideas to a judging panel",
            "Solve real-world problems",
            "Enhance presentation and teamwork skills",
            "Gain recognition and certificates"
        ],
        highlights: "Team Size: 2–4 members. Registration Fee: ₹50 per student. Fixed teams after registration. Focus on real-world domains such as Social, Technical, Healthcare, Education, and Sustainability. Presentation-based evaluation.",
        events: [
            {
                title: "Idea Presentation",
                description: "Each team gets 5–7 minutes for presentation followed by 2–3 minutes of Q&A. PPT, PDF, or Poster formats are allowed."
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
        fee: "₹100 - ₹200 per team",
        type: "technical",
        registrationLink: "https://forms.gle/TmyrFpK3LXfyJbfx8",
        backgroundImage: "/background/mini-hack.png",
        templateFile: "/ppt/mINi HACKathon Spark2k26.pptx"
    },
    3: {
        title: "Group Discussion",
        subtitle: "Voice Your Thoughts",
        description: "A structured discussion event where participants demonstrate communication skills, analytical thinking, and confidence while discussing on-the-spot topics in a moderated environment.",
        why: [
            "Enhance communication and public speaking skills",
            "Strengthen analytical and critical thinking",
            "Understand group dynamics and teamwork",
            "Develop leadership and decision-making abilities"
        ],
        highlights: "Single entry event. Entry fee: ₹50 per participant. Groups of 8–10 members formed on the spot. Topics provided on the spot. 2 minutes preparation time. 10 minutes discussion duration. English language only. Mobile phones not allowed during discussion.",
        events: [
            {
                title: "Preparation Time",
                description: "2 minutes of spontaneous preparation for the given topic"
            },
            {
                title: "Discussion Round",
                description: "10 minutes moderated group discussion evaluated by judges"
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
        fee: "₹50 per participant",
        type: "technical",
        registrationLink: "https://forms.gle/TmyrFpK3LXfyJbfx8",
        backgroundImage: "/background/gd.png"
    },
    4: {
        title: "Innoprotex",
        subtitle: "Design Your Innovation",
        description: "An Innovative Idea Prototype Design Competition, encouraging teams to present original, feasible prototype ideas that solve real-world challenges.",
        why: [
            "Present innovative and original solutions",
            "Develop prototype design and presentation skills",
            "Receive expert evaluation and feedback",
            "Opportunity for further development or funding"
        ],
        highlights: "Team size: 2–3 members. Abstract submission (max 300 words) at registration. 8–10 minutes presentation time. Real-world problem focus. Live prototype demonstration allowed.",
        events: [
            {
                title: "Idea Presentation",
                description: "Present the problem statement, innovation, feasibility, materials & technology, and expected impact."
            },
            {
                title: "Prototype Demo",
                description: "Demonstrate a live or conceptual prototype if available using PPT, poster, video, or working model."
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
        fee: "₹100 - ₹150 per team",
        type: "technical",
        registrationLink: "https://forms.gle/TmyrFpK3LXfyJbfx8",
        backgroundImage: "/background/innoprotex.png",
        templateFile: "/ppt/INNOPROTEX_2026.pptx"
    },
    5: {
        title: "GAT Master",
        subtitle: "Test Your Knowledge & Speed",
        description: "A two-round team-based quiz competition that evaluates participants on Current Affairs, General Knowledge, and Technology through written and buzzer-based rounds.",
        why: [
            "Enhance awareness of current affairs and GK",
            "Improve quick thinking and team coordination",
            "Experience an exciting buzzer quiz round",
            "Win recognition and prizes"
        ],
        highlights: "Team size: 2 members only. Entry fee: ₹50 per student. Round 1: Pen-paper MCQ test on Current Affairs & General Knowledge (40 questions, 30 minutes, one paper per team). Round 2: Technology-based buzzer round with 60 seconds per question. Shortlisting after Round 1.",
        events: [
            {
                title: "Round 1: MCQ Test",
                description: "Pen-paper MCQ test based on Current Affairs and General Knowledge."
            },
            {
                title: "Round 2: Buzzer Round",
                description: "Technology-based quiz where each team gets 60 seconds to answer."
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
        fee: "₹100 per team",
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
                        {event.templateFile && (
                            <a
                                href={event.templateFile}
                                download
                                className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 rounded-xl font-bold text-sm md:text-base shadow-xl hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
                            >
                                <FaDownload />
                                <span>Download Template</span>
                            </a>
                        )}
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
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Coordinator Card */}
                        <div className="group relative glass-strong rounded-2xl p-6 border border-gray-700 hover:border-teal-500/50 transition-all duration-500 hover:-translate-y-2">
                            {/* Shimmer effect on hover */}
                            <div className="absolute inset-0 overflow-hidden rounded-2xl">
                                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                            </div>

                            {/* Glow effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>

                            <div className="relative text-center">
                                {/* Profile Image */}
                                <div className="mb-4 flex justify-center">
                                    {event.coordinator.image ? (
                                        <div className="relative">
                                            <img
                                                src={event.coordinator.image}
                                                alt={event.coordinator.name}
                                                className="w-28 h-28 rounded-full object-cover border-4 border-gray-700 group-hover:border-teal-500/50 transition-all duration-300 group-hover:scale-105"
                                            />
                                            {/* Ring effect */}
                                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-500/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
                                        </div>
                                    ) : (
                                        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                                            <FaUserTie className="text-4xl text-white" />
                                        </div>
                                    )}
                                </div>

                                {/* Badge */}
                                <div className="mb-3 inline-block px-3 py-1 bg-teal-500/20 border border-teal-500/50 rounded-full text-xs font-bold uppercase tracking-wider">
                                    Coordinator
                                </div>

                                {/* Name with gradient */}
                                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                    {event.coordinator.name}
                                </h3>

                                {/* Contact Button */}
                                <a
                                    href={`tel:${event.coordinator.contact}`}
                                    className="relative inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-teal-600 to-cyan-700 rounded-xl hover:from-teal-500 hover:to-cyan-600 transition-all duration-300 overflow-hidden group/btn shadow-lg hover:shadow-teal-500/50"
                                >
                                    <FaPhone className="text-white relative z-10" />
                                    <span className="font-mono text-sm text-white relative z-10">{event.coordinator.contact}</span>
                                    {/* Button shine effect */}
                                    <div className="absolute inset-0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                                </a>
                            </div>
                        </div>

                        {/* Co-Coordinator Card */}
                        {event.cocoordinator && (
                            <div className="group relative glass-strong rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2">
                                {/* Shimmer effect on hover */}
                                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                                </div>

                                {/* Glow effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>

                                <div className="relative text-center">
                                    {/* Profile Image */}
                                    <div className="mb-4 flex justify-center">
                                        {event.cocoordinator.image ? (
                                            <div className="relative">
                                                <img
                                                    src={event.cocoordinator.image}
                                                    alt={event.cocoordinator.name}
                                                    className="w-28 h-28 rounded-full object-cover border-4 border-gray-700 group-hover:border-purple-500/50 transition-all duration-300 group-hover:scale-105"
                                                />
                                                {/* Ring effect */}
                                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
                                            </div>
                                        ) : (
                                            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                                                <FaUserTie className="text-4xl text-white" />
                                            </div>
                                        )}
                                    </div>

                                    {/* Badge */}
                                    <div className="mb-3 inline-block px-3 py-1 bg-purple-500/20 border border-purple-500/50 rounded-full text-xs font-bold uppercase tracking-wider">
                                        Coordinator
                                    </div>

                                    {/* Name with gradient */}
                                    <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                        {event.cocoordinator.name}
                                    </h3>

                                    {/* Contact Button */}
                                    <a
                                        href={`tel:${event.cocoordinator.contact}`}
                                        className="relative inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-700 rounded-xl hover:from-purple-500 hover:to-pink-600 transition-all duration-300 overflow-hidden group/btn shadow-lg hover:shadow-purple-500/50"
                                    >
                                        <FaPhone className="text-white relative z-10" />
                                        <span className="font-mono text-sm text-white relative z-10">{event.cocoordinator.contact}</span>
                                        {/* Button shine effect */}
                                        <div className="absolute inset-0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                                    </a>
                                </div>
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
