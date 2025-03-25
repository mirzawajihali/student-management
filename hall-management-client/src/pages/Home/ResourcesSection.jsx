import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { FaBook, FaTools, FaLaptopCode, FaGlobe, FaFlask, FaDownload, FaArrowRight } from 'react-icons/fa';

const ResourcesSection = () => {
    const [activeResource, setActiveResource] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const sectionRef = useRef(null);
    const particles = Array.from({ length: 30 });
    
    const resources = [
        {
            id: 1,
            icon: <FaBook className="text-3xl" />,
            title: "Academic Resources",
            description: "Access lecture notes, past exams, and study guides tailored to your courses.",
            color: "#88BDF2",
            items: ["Lecture Notes", "Past Exam Papers", "Study Guides", "Textbook Solutions"]
        },
        {
            id: 2,
            icon: <FaTools className="text-3xl" />,
            title: "Engineering Tools",
            description: "Specialized tools and calculators for engineering students to simplify complex calculations.",
            color: "#6A89A7",
            items: ["Circuit Simulators", "Structural Analysis Tools", "CAD Resources", "Material Databases"]
        },
        {
            id: 3,
            icon: <FaLaptopCode className="text-3xl" />,
            title: "Coding Resources",
            description: "Programming tutorials, project examples, and development environments for tech courses.",
            color: "#384959",
            items: ["Code Repositories", "Programming Tutorials", "Project Templates", "Algorithm Examples"]
        },
        {
            id: 4,
            icon: <FaGlobe className="text-3xl" />,
            title: "Language Learning",
            description: "Resources for improving English and other languages crucial for your global career.",
            color: "#BDDDFC",
            items: ["Language Practice", "Technical Writing Guides", "Presentation Skills", "Global Communication"]
        },
        {
            id: 5,
            icon: <FaFlask className="text-3xl" />,
            title: "Research Materials",
            description: "Access journals, methodologies, and thesis examples to support your research work.",
            color: "#88BDF2",
            items: ["Journal Access", "Research Methods", "Thesis Examples", "Citation Tools"]
        },
        {
            id: 6,
            icon: <FaDownload className="text-3xl" />,
            title: "Software Access",
            description: "Free and discounted software licenses for professional tools essential for your studies.",
            color: "#6A89A7",
            items: ["Student Software Licenses", "Development Environments", "Design Software", "Simulation Tools"]
        }
    ];

    // Track mouse position for the interactive background
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                setMousePosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                });
            }
        };
        
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Particle animation for background
    const particleVariants = {
        initial: (i) => ({
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            opacity: Math.random() * 0.5 + 0.1,
            scale: Math.random() * 0.5 + 0.5
        }),
        animate: (i) => ({
            x: mousePosition.x * 0.02 + (Math.random() * 20 - 10),
            y: mousePosition.y * 0.02 + (Math.random() * 20 - 10),
            transition: {
                duration: 2 + Math.random() * 2,
                ease: "easeInOut"
            }
        })
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    // Card flip animation
    const cardVariants = {
        front: {
            rotateY: 0,
            transition: { duration: 0.5 }
        },
        back: {
            rotateY: 180,
            transition: { duration: 0.5 }
        }
    };

    const frontContentVariants = {
        front: {
            opacity: 1,
            transition: { duration: 0.2, delay: 0.3 }
        },
        back: {
            opacity: 0,
            transition: { duration: 0.2 }
        }
    };

    const backContentVariants = {
        front: {
            opacity: 0,
            transition: { duration: 0.2 }
        },
        back: {
            opacity: 1,
            transition: { duration: 0.2, delay: 0.3 }
        }
    };

    const handleCardClick = (id) => {
        setActiveResource(activeResource === id ? null : id);
    };

    return (
        <section 
            ref={sectionRef}
            className="py-16 relative overflow-hidden bg-gradient-to-b from-white to-[#BDDDFC]/30"
        >
            {/* Interactive background particles */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {particles.map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full"
                        style={{ 
                            backgroundColor: resources[i % resources.length].color,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                        }}
                        custom={i}
                        variants={particleVariants}
                        initial="initial"
                        animate="animate"
                    />
                ))}
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-[#384959] mb-4">Interactive Student Resources</h2>
                    <div className="w-24 h-1 bg-[#88BDF2] mx-auto mb-6"></div>
                    <p className="text-lg text-[#6A89A7] max-w-3xl mx-auto">
                        Discover our curated collection of resources designed to enhance your academic journey.
                        Click on any card to explore more.
                    </p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {resources.map((resource) => (
                        <motion.div
                            key={resource.id}
                            className="perspective-1000"
                            variants={itemVariants}
                        >
                            <motion.div 
                                className="w-full h-64 relative preserve-3d cursor-pointer"
                                animate={activeResource === resource.id ? 'back' : 'front'}
                                variants={cardVariants}
                                onClick={() => handleCardClick(resource.id)}
                            >
                                {/* Front of card */}
                                <motion.div 
                                    className="absolute inset-0 backface-hidden rounded-xl shadow-lg overflow-hidden bg-white"
                                    variants={frontContentVariants}
                                    style={{
                                        borderTop: `5px solid ${resource.color}`
                                    }}
                                >
                                    <div className="absolute top-0 right-0 h-20 w-20">
                                        <div 
                                            className="absolute transform rotate-45 bg-gradient-to-r from-transparent to-opacity-20 w-20 h-6 -top-1 -right-6"
                                            style={{ backgroundColor: resource.color, opacity: 0.1 }}
                                        ></div>
                                    </div>
                                    <div className="p-6 h-full flex flex-col justify-between">
                                        <div>
                                            <div 
                                                className="w-16 h-16 rounded-lg mb-4 flex items-center justify-center text-white"
                                                style={{ backgroundColor: resource.color }}
                                            >
                                                {resource.icon}
                                            </div>
                                            <h3 className="text-xl font-bold text-[#384959] mb-2">{resource.title}</h3>
                                            <p className="text-[#6A89A7]">{resource.description}</p>
                                        </div>
                                        <div className="flex justify-end mt-4">
                                            <motion.div 
                                                className="w-8 h-8 rounded-full flex items-center justify-center"
                                                style={{ backgroundColor: resource.color }}
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                <FaArrowRight className="text-white text-sm" />
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                                
                                {/* Back of card */}
                                <motion.div 
                                    className="absolute inset-0 backface-hidden rotateY-180 rounded-xl shadow-lg overflow-hidden"
                                    style={{ backgroundColor: resource.color }}
                                    variants={backContentVariants}
                                >
                                    <div className="p-6 h-full flex flex-col justify-between text-white">
                                        <div>
                                            <h3 className="text-xl font-bold mb-4">{resource.title} Resources</h3>
                                            <ul className="space-y-2">
                                                {resource.items.map((item, idx) => (
                                                    <motion.li 
                                                        key={idx} 
                                                        className="flex items-center"
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.5 + (idx * 0.1) }}
                                                    >
                                                        <span className="mr-2 text-xs">•</span>
                                                        {item}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                        <motion.button
                                            className="mt-4 bg-white text-[#384959] py-2 px-4 rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors duration-300 inline-flex items-center"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Explore All Resources
                                        </motion.button>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <style jsx>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                .preserve-3d {
                    transform-style: preserve-3d;
                }
                .backface-hidden {
                    backface-visibility: hidden;
                }
                .rotateY-180 {
                    transform: rotateY(180deg);
                }
            `}</style>
        </section>
    );
};

export default ResourcesSection; 