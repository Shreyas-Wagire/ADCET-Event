import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is Spark 2K26?",
            answer: "Spark 2K26 is an annual technical fest organized by the Computer Science Department at ADCET. It features multiple technical and non-technical events, competitions, and workshops designed to showcase student talent and innovation."
        },
        {
            question: "Who can participate?",
            answer: "The event is open to all college students. Both ADCET students and students from other colleges are welcome to participate in the various competitions and events."
        },
        {
            question: "How do I register?",
            answer: "You can register for events by clicking the 'Register Now' button on any event card or details page. Fill out the Google Form with your details and pay the registration fee if applicable. You'll receive a confirmation email with further details."
        },
        {
            question: "What is the registration fee?",
            answer: "Registration fees vary by event. Technical events like Mini Hackathon cost ₹200 per team, while individual events like Apti-Master and Group Discussion cost ₹50 per participant. Some events like Innoprotex are free for ADCET students."
        },
        {
            question: "Can I participate in multiple events?",
            answer: "Yes! You can participate in as many events as you like, provided there are no time conflicts. We encourage participants to explore different categories and challenge themselves."
        },
        {
            question: "What are the prizes?",
            answer: "Each event has its own prize pool with cash prizes and certificates for winners. The total prize pool exceeds ₹50,000. Specific prize details for each event are mentioned in the rulebook."
        },
        {
            question: "Where can I find the event rules?",
            answer: "Detailed rules for all events are available in our comprehensive rulebook. You can access it by clicking the 'Rule Book' button on any event details page or from the main event sections."
        },
        {
            question: "How can I contact the organizers?",
            answer: "Each event has dedicated coordinators whose contact information is available on the event details page. You can also reach out to the CESA (Computer Engineering Students Association) team for general queries."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-8 md:py-12 relative">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                        Frequently Asked Questions
                    </span>
                </h2>
                <p className="text-center text-gray-400 mb-12">
                    Got questions? We've got answers!
                </p>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`glass rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'ring-2 ring-purple-500/50' : ''
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-200"
                            >
                                <span className="text-lg font-semibold text-gray-200 pr-4">
                                    {faq.question}
                                </span>
                                <FaChevronDown
                                    className={`text-purple-400 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <div className="px-6 pb-5 pt-2">
                                    <p className="text-gray-400 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
