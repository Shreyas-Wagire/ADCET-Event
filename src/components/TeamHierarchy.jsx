import React from 'react';
import { FaLinkedin, FaUserTie } from 'react-icons/fa';

const TeamHierarchy = () => {
    const teamMembers = [
        // Overall Leads
        {
            name: "Gourav Hirwadekar",
            role: "Student Coordinator",
            contact: "+91 9511807471",
            image: "/head/gourav.jpeg",
            category: "overall",
            badgeColor: "bg-purple-600"
        },
        {
            name: "Barsha Gupta",
            role: "Student Coordinator",
            contact: "+91 7889812227",
            image: "/head/barsha.jpeg",
            category: "overall",
            badgeColor: "bg-purple-600"
        },
        // Technical Event Heads
        {
            name: "Pratik Jadhav",
            role: "Mini Hackathon",
            contact: "+91 9356481821",
            image: "/head/pratik jadhav.jpeg",
            category: "technical",
            badgeColor: "bg-blue-600"
        },
        {
            name: "Shruti Khanchanale",
            role: "Mini Hackathon",
            contact: "+91 9421277748",
            image: "/head/Shruti.jpeg",
            category: "technical",
            badgeColor: "bg-blue-600"
        },
        {
            name: "Sakshi Mohite",
            role: "Innoprotex",
            contact: "+91 9604507650",
            image: "/head/sakshi.jpeg",
            category: "technical",
            badgeColor: "bg-green-600"
        },
        {
            name: "Pranav Chavan",
            role: "Innoprotex",
            contact: "+91 7058608709",
            image: "/head/Pranav Chavan.jpeg",
            category: "technical",
            badgeColor: "bg-green-600"
        },
        // Non-Technical Event Heads
        {
            name: "Shreya Chougule",
            role: "Group Discussion",
            contact: "+91 9356603103",
            image: "/head/Shreya.jpeg",
            category: "non-technical",
            badgeColor: "bg-pink-600"
        },
        {
            name: "Shreyas Wagire",
            role: "Group Discussion",
            contact: "+91 7499321428",
            image: "/head/shreyas.jpg",
            category: "non-technical",
            badgeColor: "bg-pink-600"
        },
        {
            name: "Tanvi Patil",
            role: "Apti Master",
            contact: "+91 9022573574",
            image: "/head/Tanvi patil.jpeg",
            category: "non-technical",
            badgeColor: "bg-orange-600"
        },
        {
            name: "Prathmesh Sutar",
            role: "Apti Master",
            contact: "+91 9370657289",
            image: "/head/PS.jpeg",
            category: "non-technical",
            badgeColor: "bg-orange-600"
        },
        {
            name: "Manasi Suryawanshi",
            role: "GAT Master",
            contact: "+91 9130271171",
            image: "/head/Mansi.jpeg",
            category: "non-technical",
            badgeColor: "bg-cyan-600"
        },
        {
            name: "Pruthviraj Thorbole",
            role: "GAT Master",
            contact: "+91 8262968845",
            image: "/head/pruthviraj.jpeg",
            category: "non-technical",
            badgeColor: "bg-cyan-600"
        }
    ];

    const overallLeads = teamMembers.filter(m => m.category === "overall");
    const technicalHeads = teamMembers.filter(m => m.category === "technical");
    const nonTechnicalHeads = teamMembers.filter(m => m.category === "non-technical");

    const MemberCard = ({ member }) => {
        const [tilt, setTilt] = React.useState({ x: 0, y: 0 });

        // 3D tilt effect on mouse move
        const handleMouseMove = (e) => {
            const card = e.currentTarget;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            setTilt({ x: rotateX, y: rotateY });
        };

        const handleMouseLeave = () => {
            setTilt({ x: 0, y: 0 });
        };

        return (
            <div
                className="group max-w-xs mx-auto w-full"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(${tilt.x !== 0 || tilt.y !== 0 ? '-12px' : '0'})`,
                    transition: tilt.x === 0 && tilt.y === 0 ? 'transform 0.5s ease' : 'none'
                }}
            >
                {/* Metallic border wrapper */}
                <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-gray-400 via-gray-200 to-gray-500 hover:from-gray-300 hover:via-gray-100 hover:to-gray-400 transition-all duration-500">
                    {/* Card content */}
                    <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-5 h-full flex flex-col shadow-xl relative overflow-hidden">
                        {/* Metallic shine overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                        {/* Profile Image */}
                        <div className="mb-4 flex justify-center relative z-10">
                            <div className="relative w-32 h-32 rounded-xl overflow-hidden ring-2 ring-gray-700 group-hover:ring-gray-400 transition-all duration-300">
                                {member.image ? (
                                    <img
                                        src={member.image || "/placeholder.svg"}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                                        <FaUserTie className="text-5xl text-gray-500" />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Name */}
                        <h3 className="text-lg font-bold text-white text-center mb-2 line-clamp-2 relative z-10">
                            {member.name}
                        </h3>

                        {/* Event/Role Badge - Metallic Chrome */}
                        <div className="flex justify-center mb-3 relative z-10">
                            <span className="relative px-3 py-1 rounded-full text-[10px] font-bold uppercase shadow-lg overflow-hidden group/badge">
                                {/* Metallic chrome background */}
                                <span className="absolute inset-0 bg-gradient-to-br from-gray-400 via-gray-200 to-gray-500"></span>

                                {/* Metallic shine overlay */}
                                <span className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-black/30"></span>

                                {/* Animated shine effect */}
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent -translate-x-full group-hover/badge:translate-x-full transition-transform duration-700"></span>

                                {/* Subtle glow */}
                                <span className="absolute inset-0 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3),inset_0_1px_2px_rgba(255,255,255,0.5)]"></span>

                                {/* Text with dark gradient */}
                                <span className="relative text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-black to-gray-800 font-black tracking-wide">
                                    {member.role}
                                </span>
                            </span>
                        </div>

                        {/* Tag (HEAD/SUB-HEAD) - Metallic Chrome */}
                        {member.tag && (
                            <div className="flex justify-center mb-3 relative z-10">
                                <span className="relative px-2 py-0.5 rounded-full text-[8px] font-bold uppercase shadow-md overflow-hidden group/tag">
                                    {/* Metallic chrome background */}
                                    <span className="absolute inset-0 bg-gradient-to-br from-gray-400 via-gray-200 to-gray-500"></span>

                                    {/* Metallic shine overlay */}
                                    <span className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-black/30"></span>

                                    {/* Animated shine */}
                                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent -translate-x-full group-hover/tag:translate-x-full transition-transform duration-700"></span>

                                    {/* Border glow */}
                                    <span className="absolute inset-0 rounded-full border border-white/40 shadow-[0_0_8px_rgba(255,255,255,0.3)]"></span>

                                    {/* Text */}
                                    <span className="relative text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-black to-gray-800 font-black">
                                        {member.tag}
                                    </span>
                                </span>
                            </div>
                        )}

                        {/* Contact */}
                        <div className="flex items-center justify-center gap-2 text-white mt-auto pt-3 border-t border-gray-800 relative z-10">
                            <a href={`tel:${member.contact}`} className="text-xs font-medium hover:text-gray-300 transition-colors truncate">
                                {member.contact}
                            </a>
                            <FaLinkedin className="text-base text-blue-400 hover:text-blue-300 cursor-pointer transition-colors flex-shrink-0" />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="my-8">
            {/* Section Header */}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    <span className="relative inline-block">
                        <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-100 to-gray-400 blur-sm"></span>
                        <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-50 to-gray-300">
                            Our Team
                        </span>
                    </span>
                </h2>
                <p className="text-gray-400 text-lg">Meet the amazing people behind SPARK 2K26</p>
            </div>

            {/* Row 1: Overall Leadership - 2 cards */}
            <div className="mb-16">
                <h3 className="text-2xl font-bold text-white text-center mb-8">Leadership</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto px-4">
                    {overallLeads.map((member, idx) => (
                        <MemberCard key={idx} member={member} />
                    ))}
                </div>
            </div>

            {/* Row 2: Non-Technical Events - 4 cards in a row */}
            <div className="mb-16">
                <h3 className="text-2xl font-bold text-white text-center mb-8">Non-Technical Events</h3>
                <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto px-4">
                    {nonTechnicalHeads.map((member, idx) => (
                        <MemberCard key={idx} member={member} />
                    ))}
                </div>
            </div>

            {/* Row 3: Technical Events - 4 cards */}
            <div className="mb-12">
                <h3 className="text-2xl font-bold text-white text-center mb-8">Technical Events</h3>
                <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto px-4">
                    {technicalHeads.map((member, idx) => (
                        <MemberCard key={idx} member={member} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamHierarchy;
