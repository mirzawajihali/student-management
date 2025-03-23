import React, { useEffect } from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaEnvelope, FaCode, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

import developerImage from '../assets/photos/developer.png';

const Developer = () => {
    // Animation variants for staggered animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
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

    // Skills array
    const skills = [
        "JavaScript", "React", "Node.js", "Express", "MongoDB", 
        "Tailwind CSS", "Firebase", "Git", "TypeScript", 
        "Next.js", "Redux", "RESTful APIs"
    ];

    // Projects array
    const projects = [
        {
            title: "Student Management System",
            description: "A comprehensive platform for students to find tutoring, internships, and exchange food tokens.",
            technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"]
        },
        {
            title: "E-commerce Platform",
            description: "Full-featured online shopping platform with cart, payment integration, and admin dashboard.",
            technologies: ["React", "Redux", "Node.js", "MongoDB"]
        },
        {
            title: "Real-time Chat Application",
            description: "Instant messaging application with real-time updates and user authentication.",
            technologies: ["React", "Socket.io", "Firebase", "Tailwind CSS"]
        }
    ];

    return (
        <div className="bg-gradient-to-b from-white to-[#b5d9fd] min-h-screen">
            {/* Hero Section */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative pt-16 pb-32 overflow-hidden"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Profile Image and Social Media */}
                        <motion.div 
                            className="flex lg:mr-10 flex-col items-center lg:items-end"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className="relative">
                                <div className="w-64 h-64 lg:mr-10 rounded-full overflow-hidden border-4 border-[#384959] shadow-xl">
                                    <img 
                                        src={developerImage} 
                                        alt="Developer" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <motion.div 
                                    className="absolute -bottom-4 -right-4 bg-[#88BDF2] rounded-full p-3 shadow-lg"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 1, type: 'spring', stiffness: 200 }}
                                >
                                    <FaCode className="text-[#384959] text-2xl" />
                                </motion.div>
                            </div>
                            <div className="flex space-x-4 mt-8">
                                <motion.a 
                                    href="https://github.com/yourusername" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-[#384959] text-white p-3 rounded-full hover:bg-[#6A89A7] transition-colors duration-300"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                >
                                    <FaGithub className="text-xl" />
                                </motion.a>
                                <motion.a 
                                    href="https://linkedin.com/in/yourusername" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-[#384959] text-white p-3 rounded-full hover:bg-[#6A89A7] transition-colors duration-300"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                >
                                    <FaLinkedinIn className="text-xl" />
                                </motion.a>
                                <motion.a 
                                    href="https://twitter.com/yourusername" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-[#384959] text-white p-3 rounded-full hover:bg-[#6A89A7] transition-colors duration-300"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                >
                                    <FaTwitter className="text-xl" />
                                </motion.a>
                                <motion.a 
                                    href="https://instagram.com/yourusername" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-[#384959] text-white p-3 rounded-full hover:bg-[#6A89A7] transition-colors duration-300"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                >
                                    <FaInstagram className="text-xl" />
                                </motion.a>
                                <motion.a 
                                    href="mailto:your.email@example.com" 
                                    className="bg-[#384959] text-white p-3 rounded-full hover:bg-[#6A89A7] transition-colors duration-300"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                >
                                    <FaEnvelope className="text-xl" />
                                </motion.a>
                            </div>
                        </motion.div>

                        {/* Bio and Info */}
                        <motion.div 
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <h1 className="text-4xl font-bold text-[#384959] mb-4">
                                Hi, I'm <span className="text-[#88BDF2]">Mirza Wajih Ali</span>
                            </h1>
                            <h2 className="text-2xl text-[#6A89A7] mb-6">Full Stack Developer</h2>
                            <p className="text-lg text-[#6A89A7] mb-8">
                                I'm passionate about creating intuitive and impactful web applications that solve real-world problems. 
                                With expertise in both frontend and backend technologies, I specialize in building 
                                end-to-end solutions that deliver exceptional user experiences.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <motion.a
                                    href="/resume.pdf" 
                                    download
                                    className="bg-[#384959] text-white px-6 py-3 rounded-full hover:bg-[#6A89A7] transition-colors duration-300 inline-flex items-center gap-2"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <FaGraduationCap /> Download Resume
                                </motion.a>
                                <motion.a
                                    href="#contact"
                                    className="bg-transparent border-2 border-[#384959] text-[#384959] px-6 py-3 rounded-full hover:bg-[#384959] hover:text-white transition-colors duration-300 inline-flex items-center gap-2"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <FaEnvelope /> Contact Me
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </div>
                
                {/* Background decorative elements */}
                <div className="absolute top-1/4 right-0 w-72 h-72 bg-[#BDDDFC] rounded-full filter blur-3xl opacity-20"></div>
                <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-[#88BDF2] rounded-full filter blur-3xl opacity-20"></div>
            </motion.div>

            {/* About Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold text-[#384959] mb-4">About Me</h2>
                        <div className="w-24 h-1 bg-[#88BDF2] mx-auto mb-6"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <motion.div 
                            className="bg-gradient-to-br from-[#BDDDFC]/50 to-white p-8 rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            <div className="bg-[#384959] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                                <FaGraduationCap className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-[#384959] mb-4 text-center">Education</h3>
                            <div className="border-l-2 border-[#88BDF2] pl-4 mb-4">
                                <p className="text-[#384959] font-semibold">B.Sc in Computer Science & Engineering</p>
                                <p className="text-[#6A89A7]">Rajshahi University of Engineering & Technology</p>
                                <p className="text-[#6A89A7]">2020 - Present</p>
                            </div>
                            <div className="border-l-2 border-[#88BDF2] pl-4">
                                <p className="text-[#384959] font-semibold">Higher Secondary Certificate</p>
                                <p className="text-[#6A89A7]"></p>
                                <p className="text-[#6A89A7]">2018 - 2020</p>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="bg-gradient-to-br from-[#BDDDFC]/50 to-white p-8 rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <div className="bg-[#384959] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                                <FaLaptopCode className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-[#384959] mb-4 text-center">Experience</h3>
                            <div className="border-l-2 border-[#88BDF2] pl-4 mb-4">
                                <p className="text-[#384959] font-semibold">Frontend Developer Intern</p>
                                <p className="text-[#6A89A7]">Tech Solutions Inc.</p>
                                <p className="text-[#6A89A7]">2023 - Present</p>
                            </div>
                            <div className="border-l-2 border-[#88BDF2] pl-4">
                                <p className="text-[#384959] font-semibold">Web Development Freelancer</p>
                                <p className="text-[#6A89A7]">Self-employed</p>
                                <p className="text-[#6A89A7]">2022 - Present</p>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="bg-gradient-to-br from-[#BDDDFC]/50 to-white p-8 rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <div className="bg-[#384959] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                                <FaCode className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-[#384959] mb-4 text-center">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <motion.span
                                        key={index}
                                        className="bg-[#384959] text-white px-3 py-1 rounded-full text-sm"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.1 * index }}
                                        whileHover={{ scale: 1.1, backgroundColor: '#6A89A7' }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-16 bg-gradient-to-b from-white to-[#BDDDFC]/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold text-[#384959] mb-4">My Projects</h2>
                        <div className="w-24 h-1 bg-[#88BDF2] mx-auto mb-6"></div>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {projects.map((project, index) => (
                            <motion.div 
                                key={index}
                                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                                variants={itemVariants}
                            >
                                <div className="h-48 bg-gradient-to-r from-[#88BDF2] to-[#384959] flex items-center justify-center">
                                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                </div>
                                <div className="p-6">
                                    <p className="text-[#6A89A7] mb-6">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span key={techIndex} className="bg-[#BDDDFC]/30 text-[#384959] px-3 py-1 rounded-full text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 bg-[#384959]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
                        <div className="w-24 h-1 bg-[#88BDF2] mx-auto mb-6"></div>
                        <p className="text-[#BDDDFC] max-w-3xl mx-auto">
                            Have a project in mind or want to collaborate? Feel free to reach out to me. I'm open to new opportunities and challenges.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-[#BDDDFC] mb-1">Your Name</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 bg-[#2D3E4F] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88BDF2]"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-[#BDDDFC] mb-1">Your Email</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        placeholder="john@example.com"
                                        className="w-full px-4 py-3 bg-[#2D3E4F] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88BDF2]"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-[#BDDDFC] mb-1">Your Message</label>
                                    <textarea 
                                        id="message" 
                                        name="message" 
                                        rows={6}
                                        placeholder="Hello, I'd like to talk about..."
                                        className="w-full px-4 py-3 bg-[#2D3E4F] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88BDF2]"
                                    ></textarea>
                                </div>
                                <motion.button
                                    type="submit"
                                    className="w-full bg-[#88BDF2] text-[#384959] font-bold py-3 px-6 rounded-lg hover:bg-[#BDDDFC] transition-colors duration-300"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Send Message
                                </motion.button>
                            </form>
                        </motion.div>

                        <motion.div
                            className="flex flex-col justify-center"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="bg-[#2D3E4F] p-8 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                                <ul className="space-y-6">
                                    <li className="flex items-start">
                                        <div className="bg-[#88BDF2] p-3 rounded-full mr-4">
                                            <FaEnvelope className="text-[#384959]" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-[#BDDDFC]">Email</p>
                                            <p className="text-white">mirza.wajih@example.com</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-[#88BDF2] p-3 rounded-full mr-4">
                                            <FaGraduationCap className="text-[#384959]" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-[#BDDDFC]">University</p>
                                            <p className="text-white">Rajshahi University of Engineering & Technology</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-[#88BDF2] p-3 rounded-full mr-4">
                                            <FaCode className="text-[#384959]" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-[#BDDDFC]">Portfolio</p>
                                            <p className="text-white">www.mirzawajih.dev</p>
                                        </div>
                                    </li>
                                </ul>
                                <div className="mt-8">
                                    <p className="text-[#BDDDFC] mb-4">Connect with me on social media:</p>
                                    <div className="flex space-x-4">
                                        <motion.a 
                                            href="https://github.com/yourusername" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="bg-[#88BDF2] text-[#384959] p-3 rounded-full hover:bg-[#BDDDFC] transition-colors duration-300"
                                            whileHover={{ y: -5 }}
                                        >
                                            <FaGithub />
                                        </motion.a>
                                        <motion.a 
                                            href="https://linkedin.com/in/yourusername" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="bg-[#88BDF2] text-[#384959] p-3 rounded-full hover:bg-[#BDDDFC] transition-colors duration-300"
                                            whileHover={{ y: -5 }}
                                        >
                                            <FaLinkedinIn />
                                        </motion.a>
                                        <motion.a 
                                            href="https://twitter.com/yourusername" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="bg-[#88BDF2] text-[#384959] p-3 rounded-full hover:bg-[#BDDDFC] transition-colors duration-300"
                                            whileHover={{ y: -5 }}
                                        >
                                            <FaTwitter />
                                        </motion.a>
                                        <motion.a 
                                            href="https://instagram.com/yourusername" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="bg-[#88BDF2] text-[#384959] p-3 rounded-full hover:bg-[#BDDDFC] transition-colors duration-300"
                                            whileHover={{ y: -5 }}
                                        >
                                            <FaInstagram />
                                        </motion.a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Developer; 