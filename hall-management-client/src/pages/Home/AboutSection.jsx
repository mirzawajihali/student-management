import React from 'react';
import { FaGraduationCap, FaBriefcase, FaUtensils, FaExchangeAlt, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import TestimonialSection from './TestimonialSection';
import { motion } from 'framer-motion';

const AboutSection = () => {
    const features = [
        {
            icon: <FaGraduationCap className="text-4xl text-[#384959] group-hover:text-white mb-4 transition-colors duration-300" />,
            title: "Tuition Opportunities",
            description: "Find tutoring positions that match your academic strengths and schedule. Earn while helping others learn."
        },
        {
            icon: <FaBriefcase className="text-4xl text-[#384959] group-hover:text-white mb-4 transition-colors duration-300" />,
            title: "Internship Offers",
            description: "Access exclusive internship opportunities with our partner companies to gain valuable industry experience."
        },
        {
            icon: <FaUtensils className="text-4xl text-[#384959] group-hover:text-white mb-4 transition-colors duration-300" />,
            title: "Food Token Exchange",
            description: "Buy and sell meal tokens with other students when you can't use your dining hall credits."
        },
        {
            icon: <FaExchangeAlt className="text-4xl text-[#384959] group-hover:text-white mb-4 transition-colors duration-300" />,
            title: "Second-hand Marketplace",
            description: "Trade textbooks, electronics, furniture and more with fellow students at affordable prices."
        },
        {
            icon: <FaUsers className="text-4xl text-[#384959] group-hover:text-white mb-4 transition-colors duration-300" />,
            title: "Study Groups",
            description: "Form or join study groups with peers taking the same courses to enhance your learning experience."
        },
        {
            icon: <FaCalendarAlt className="text-4xl text-[#384959] group-hover:text-white mb-4 transition-colors duration-300" />,
            title: "Event Networking",
            description: "Discover campus events, workshops, and networking opportunities to expand your professional connections."
        }
    ];

    const getGradientClass = (index) => {
        const gradients = [
            "from-[#88BDF2] to-[#6A89A7]",
            "from-[#BDDDFC] to-[#6A89A7]",
            "from-[#88BDF2] to-[#384959]",
            "from-[#BDDDFC] to-[#384959]",
            "from-[#6A89A7] to-[#384959]",
            "from-[#88BDF2] to-[#BDDDFC]"
        ];
        return gradients[index % gradients.length];
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 10
            }
        }
    };

    const statVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 80,
                damping: 10
            }
        }
    };

    return (
        <>
            <section className="py-20 px-4 bg-gradient-to-b from-white to-[#BDDDFC] overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header with Animation */}
                    <motion.div 
                        className="text-center mb-20 relative"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div 
                            className="absolute inset-0 flex items-center justify-center opacity-5"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.2 }}
                        >
                            <FaGraduationCap className="text-[400px] text-[#384959]" />
                        </motion.div>
                        <motion.h2 
                            className="text-3xl md:text-5xl font-bold text-[#384959] mb-4 relative"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            Your Complete Student Resource Hub
                        </motion.h2>
                        <motion.div 
                            className="w-24 h-1 bg-[#88BDF2] mx-auto mb-6"
                            initial={{ width: 0 }}
                            whileInView={{ width: 96 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        ></motion.div>
                        <motion.p 
                            className="text-lg md:text-xl text-[#6A89A7] max-w-3xl mx-auto relative"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            We're dedicated to enhancing your student experience by connecting you with opportunities 
                            for income, resources, and community engagement all in one place.
                        </motion.p>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div 
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div 
                            className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300"
                            variants={statVariants}
                            whileHover={{ y: -5 }}
                        >
                            <motion.p 
                                className="text-3xl md:text-4xl font-bold text-[#88BDF2]"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                5000+
                            </motion.p>
                            <p className="text-[#6A89A7]">Active Students</p>
                        </motion.div>
                        <motion.div 
                            className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300"
                            variants={statVariants}
                            whileHover={{ y: -5 }}
                        >
                            <motion.p 
                                className="text-3xl md:text-4xl font-bold text-[#88BDF2]"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.2 }}
                            >
                                200+
                            </motion.p>
                            <p className="text-[#6A89A7]">Partner Companies</p>
                        </motion.div>
                        <motion.div 
                            className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300"
                            variants={statVariants}
                            whileHover={{ y: -5 }}
                        >
                            <motion.p 
                                className="text-3xl md:text-4xl font-bold text-[#88BDF2]"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.4 }}
                            >
                                1500+
                            </motion.p>
                            <p className="text-[#6A89A7]">Monthly Exchanges</p>
                        </motion.div>
                        <motion.div 
                            className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300"
                            variants={statVariants}
                            whileHover={{ y: -5 }}
                        >
                            <motion.p 
                                className="text-3xl md:text-4xl font-bold text-[#88BDF2]"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.6 }}
                            >
                                500+
                            </motion.p>
                            <p className="text-[#6A89A7]">Tuitions</p>
                        </motion.div>
                    </motion.div>

                    {/* Main Features */}
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {features.map((feature, index) => (
                            <motion.div 
                                key={index} 
                                className={`group bg-white hover:bg-gradient-to-br ${getGradientClass(index)} p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center hover:transform hover:-translate-y-2 hover:text-white`}
                                variants={itemVariants}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            >
                                {feature.icon}
                                <h3 className="text-xl font-semibold text-[#384959] group-hover:text-white mb-3 transition-colors duration-300">{feature.title}</h3>
                                <p className="text-[#6A89A7] group-hover:text-white transition-colors duration-300">{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Call to Action */}
                    <motion.div 
                        className="text-center bg-gray-900 p-10 rounded-2xl shadow-xl"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h3 
                            className="text-2xl md:text-3xl font-bold text-white mb-6"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Ready to Maximize Your Student Experience?
                        </motion.h3>
                        <motion.p 
                            className="text-lg text-[#BDDDFC] mb-8 max-w-2xl mx-auto"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Join thousands of students who are already benefiting from our platform.
                            Create your account today and start exploring all the opportunities available to you.
                        </motion.p>
                        <motion.div 
                            className="flex flex-col sm:flex-row justify-center gap-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <motion.button
                                className="bg-white text-[#384959] hover:bg-[#BDDDFC] hover:text-[#384959] font-medium py-3 px-8 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Sign Up Now
                            </motion.button>
                            <motion.button
                                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-full transition-colors duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Learn More
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
            
            {/* Testimonials Section */}
            <TestimonialSection />
        </>
    );
};

export default AboutSection; 