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
            role: "Student Co-Coordinator",
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

    const MemberCard = ({ member }) => (
        <div className="group max-w-xs mx-auto w-full">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-5 border border-gray-800 hover:border-purple-500/60 transition-all duration-300 h-full flex flex-col shadow-lg hover:shadow-purple-500/20">
                {/* Profile Image */}
                <div className="mb-4 flex justify-center">
                    <div className="relative w-32 h-32 rounded-xl overflow-hidden">
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
                <h3 className="text-lg font-bold text-white text-center mb-2 line-clamp-2">
                    {member.name}
                </h3>

                {/* Event/Role Badge */}
                <div className="flex justify-center mb-3">
                    <span className={`px-3 py-1.5 rounded-full ${member.badgeColor || 'bg-gray-600'} text-white text-xs font-semibold whitespace-nowrap`}>
                        {member.role}
                    </span>
                </div>

                {/* Tag (HEAD/SUB-HEAD) */}
                {member.tag && (
                    <div className="flex justify-center mb-3">
                        <span className="px-2 py-0.5 rounded-full bg-purple-600 text-white text-[9px] font-bold uppercase">
                            {member.tag}
                        </span>
                    </div>
                )}

                {/* Contact */}
                <div className="flex items-center justify-center gap-2 text-white mt-auto pt-3 border-t border-gray-800">
                    <a href={`tel:${member.contact}`} className="text-xs font-medium hover:text-purple-300 transition-colors truncate">
                        {member.contact}
                    </a>
                    <FaLinkedin className="text-base text-blue-400 hover:text-blue-300 cursor-pointer transition-colors flex-shrink-0" />
                </div>
            </div>
        </div>
    );

    return (
        <div className="my-8">
            {/* Section Header */}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
                        Our Team
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
                <div className="grid grid-cols-4 gap-8 max-w-6xl mx-auto px-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                    {nonTechnicalHeads.map((member, idx) => (
                        <MemberCard key={idx} member={member} />
                    ))}
                </div>
            </div>

            {/* Row 3: Technical Events - 4 cards */}
            <div className="mb-12">
                <h3 className="text-2xl font-bold text-white text-center mb-8">Technical Events</h3>
                <div className="grid grid-cols-4 gap-8 max-w-6xl mx-auto px-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                    {technicalHeads.map((member, idx) => (
                        <MemberCard key={idx} member={member} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamHierarchy;
