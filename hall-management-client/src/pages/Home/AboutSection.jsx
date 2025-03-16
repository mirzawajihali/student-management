import React from 'react';
import { FaGraduationCap, FaBriefcase, FaUtensils, FaExchangeAlt, FaUsers, FaCalendarAlt } from 'react-icons/fa';

const AboutSection = () => {
    const features = [
        {
            icon: <FaGraduationCap className="text-4xl text-blue-600 group-hover:text-white mb-4 transition-colors duration-300" />,
            title: "Tuition Opportunities",
            description: "Find tutoring positions that match your academic strengths and schedule. Earn while helping others learn."
        },
        {
            icon: <FaBriefcase className="text-4xl text-green-600 group-hover:text-white mb-4 transition-colors duration-300" />,
            title: "Internship Offers",
            description: "Access exclusive internship opportunities with our partner companies to gain valuable industry experience."
        },
        {
            icon: <FaUtensils className="text-4xl text-orange-600 group-hover:text-white mb-4 transition-colors duration-300" />,
            title: "Food Token Exchange",
            description: "Buy and sell meal tokens with other students when you can't use your dining hall credits."
        },
        {
            icon: <FaExchangeAlt className="text-4xl text-purple-600 group-hover:text-white mb-4 transition-colors duration-300" />,
            title: "Second-hand Marketplace",
            description: "Trade textbooks, electronics, furniture and more with fellow students at affordable prices."
        },
        {
            icon: <FaUsers className="text-4xl text-red-600 group-hover:text-white mb-4 transition-colors duration-300" />,
            title: "Study Groups",
            description: "Form or join study groups with peers taking the same courses to enhance your learning experience."
        },
        {
            icon: <FaCalendarAlt className="text-4xl text-teal-600 group-hover:text-white mb-4 transition-colors duration-300" />,
            title: "Event Networking",
            description: "Discover campus events, workshops, and networking opportunities to expand your professional connections."
        }
    ];

    const getGradientClass = (index) => {
        const gradients = [
            "from-blue-500 to-blue-700",
            "from-green-500 to-green-700",
            "from-orange-500 to-orange-700",
            "from-purple-500 to-purple-700",
            "from-red-500 to-red-700",
            "from-teal-500 to-teal-700"
        ];
        return gradients[index % gradients.length];
    };

    return (
        <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Section Header with Animation */}
                <div className="text-center mb-20 relative">
                    <div className="absolute inset-0 flex items-center justify-center opacity-5">
                        <FaGraduationCap className="text-[400px] text-blue-900" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 relative">
                        Your Complete Student Resource Hub
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto relative">
                        We're dedicated to enhancing your student experience by connecting you with opportunities 
                        for income, resources, and community engagement all in one place.
                    </p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <p className="text-3xl md:text-4xl font-bold text-blue-600">5000+</p>
                        <p className="text-gray-600">Active Students</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <p className="text-3xl md:text-4xl font-bold text-green-600">200+</p>
                        <p className="text-gray-600">Partner Companies</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <p className="text-3xl md:text-4xl font-bold text-orange-600">1500+</p>
                        <p className="text-gray-600">Monthly Exchanges</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <p className="text-3xl md:text-4xl font-bold text-purple-600">50+</p>
                        <p className="text-gray-600">Universities</p>
                    </div>
                </div>

                {/* Main Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <div 
                            key={index} 
                            className={`group bg-white hover:bg-gradient-to-br ${getGradientClass(index)} p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center hover:transform hover:-translate-y-2 hover:text-white`}
                        >
                            {feature.icon}
                            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white mb-3 transition-colors duration-300">{feature.title}</h3>
                            <p className="text-gray-600 group-hover:text-white transition-colors duration-300">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Testimonial */}
                <div className="bg-blue-50 p-8 md:p-12 rounded-2xl shadow-md mb-16">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gray-300 mb-6 md:mb-0 md:mr-8 flex-shrink-0 overflow-hidden">
                            <img 
                                src="https://avatars.githubusercontent.com/u/159119082?v=4" 
                                alt="Student testimonial" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-lg md:text-xl text-gray-700 italic mb-4">
                                "This platform has completely transformed my college experience. I found a part-time tutoring job that pays well and fits perfectly with my class schedule. I've also saved hundreds of dollars buying second-hand textbooks from other students!"
                            </p>
                            <p className="font-semibold text-gray-900">Suhail Ahmed Toha</p>
                            <p className="text-sm text-gray-600">Deparment of Computer Science and Engineering, 22 Series</p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-700 p-10 rounded-2xl shadow-xl">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        Ready to Maximize Your Student Experience?
                    </h3>
                    <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                        Join thousands of students who are already benefiting from our platform.
                        Create your account today and start exploring all the opportunities available to you.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-white text-blue-700 hover:bg-blue-50 font-medium py-3 px-8 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg">
                            Sign Up Now
                        </button>
                        <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-full transition-colors duration-300">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection; 