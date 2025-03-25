import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaUniversity, FaCheck, FaPaperPlane } from 'react-icons/fa';

import Loader from './Loader';

const ContactUs = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState(null); // null, 'sending', 'success', 'error'
    const [activeTab, setActiveTab] = useState('contact'); // 'contact' or 'faq'

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('sending');
        
        // Simulate form submission
        setTimeout(() => {
            setFormStatus('success');
            setFormState({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            
            // Reset form status after 3 seconds
            setTimeout(() => {
                setFormStatus(null);
            }, 3000);
        }, 1500);
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2
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

    // FAQ data
    const faqs = [
        {
            question: "How can I apply for tutoring services?",
            answer: "You can apply for tutoring services by registering an account and navigating to the Tutoring section. Submit your requirements and available time slots, and we will match you with suitable tutors."
        },
        {
            question: "What payment methods are accepted for food tokens?",
            answer: "We accept various payment methods including credit/debit cards, bKash, Nagad, and Rocket. All payments are processed securely through our platform."
        },
        {
            question: "How do I list my second-hand items in the marketplace?",
            answer: "After logging in, go to the Marketplace section and click on 'List an Item'. Fill out the item details, upload clear photos, set your price, and submit the listing for approval."
        },
        {
            question: "Are internship opportunities verified by the university?",
            answer: "Yes, all internship opportunities listed on our platform are verified by our team to ensure they are legitimate and suitable for our student community."
        },
        {
            question: "How can I report an issue with the platform?",
            answer: "You can report any issues through the Contact Us form or by emailing our support team directly at support@studenthub.edu."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-[#BDDDFC]/30">
            {/* Header Banner */}
            <div className="bg-[#384959] text-white py-16 md:py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-pattern"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Get In Touch</h1>
                        <p className="text-lg md:text-xl text-[#BDDDFC] max-w-3xl mx-auto">
                            We're here to help and answer any questions you might have. 
                            We look forward to hearing from you!
                        </p>
                    </motion.div>
                </div>
                
                {/* Decorative elements */}
                <motion.div 
                    className="absolute -bottom-10 left-1/4 w-20 h-20 rounded-full bg-[#88BDF2] opacity-40"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                ></motion.div>
                <motion.div 
                    className="absolute -top-10 right-1/4 w-32 h-32 rounded-full bg-[#BDDDFC] opacity-20"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                ></motion.div>
            </div>
            
            {/* Tab Navigation */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                <div className="flex justify-center mb-8">
                    <div className="inline-flex rounded-md shadow-sm bg-white p-1">
                        <button
                            type="button"
                            className={`px-4 py-2 text-sm font-medium rounded-md ${
                                activeTab === 'contact' 
                                ? 'bg-[#384959] text-white' 
                                : 'text-[#384959] hover:bg-gray-100'
                            }`}
                            onClick={() => setActiveTab('contact')}
                        >
                            Contact Us
                        </button>
                        <button
                            type="button"
                            className={`px-4 py-2 text-sm font-medium rounded-md ${
                                activeTab === 'faq' 
                                ? 'bg-[#384959] text-white' 
                                : 'text-[#384959] hover:bg-gray-100'
                            }`}
                            onClick={() => setActiveTab('faq')}
                        >
                            FAQs
                        </button>
                    </div>
                </div>
            
                {/* Contact Section */}
                {activeTab === 'contact' && (
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-16"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Contact Information */}
                        <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="bg-[#384959] p-6 text-white">
                                <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
                                <p className="text-[#BDDDFC]">Reach out to us using any of the following methods</p>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-6">
                                    <motion.li 
                                        className="flex items-start"
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className="bg-[#88BDF2] p-3 rounded-full mr-4 text-[#384959]">
                                            <FaMapMarkerAlt />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-[#384959]">Our Location</p>
                                            <p className="text-[#6A89A7]">RUET, Rajshahi-6204, Bangladesh</p>
                                        </div>
                                    </motion.li>
                                    <motion.li 
                                        className="flex items-start"
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className="bg-[#88BDF2] p-3 rounded-full mr-4 text-[#384959]">
                                            <FaPhoneAlt />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-[#384959]">Phone Number</p>
                                            <p className="text-[#6A89A7]">+880 1234-567890</p>
                                        </div>
                                    </motion.li>
                                    <motion.li 
                                        className="flex items-start"
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className="bg-[#88BDF2] p-3 rounded-full mr-4 text-[#384959]">
                                            <FaEnvelope />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-[#384959]">Email Address</p>
                                            <p className="text-[#6A89A7]">info@studenthub.edu</p>
                                        </div>
                                    </motion.li>
                                    <motion.li 
                                        className="flex items-start"
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className="bg-[#88BDF2] p-3 rounded-full mr-4 text-[#384959]">
                                            <FaUniversity />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-[#384959]">Office Hours</p>
                                            <p className="text-[#6A89A7]">Sunday - Thursday, 9am - 5pm</p>
                                        </div>
                                    </motion.li>
                                </ul>
                                
                                {/* Google Map */}
                                <div className="mt-8 h-48 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-300">
                                    <iframe 
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.251409012278!2d88.62817641497858!3d24.36237348429523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbefd0a55ea957%3A0x2f9cac3357d62617!2sRajshahi%20University%20of%20Engineering%20%26%20Technology%20(RUET)!5e0!3m2!1sen!2sbd!4v1627982214726!5m2!1sen!2sbd" 
                                        width="100%" 
                                        height="100%" 
                                        style={{ border: 0 }} 
                                        allowFullScreen="" 
                                        loading="lazy"
                                        title="RUET Google Map"
                                    ></iframe>
                                </div>
                            </div>
                        </motion.div>
                        
                        {/* Contact Form */}
                        <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="bg-[#384959] p-6 text-white">
                                <h3 className="text-2xl font-bold mb-2">Send Us A Message</h3>
                                <p className="text-[#BDDDFC]">We'll get back to you as soon as possible</p>
                            </div>
                            <div className="p-6">
                                {formStatus === 'success' ? (
                                    <motion.div
                                        className="flex flex-col items-center justify-center h-full py-10"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                            <FaCheck className="text-green-500 text-3xl" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#384959] mb-2">Message Sent!</h3>
                                        <p className="text-[#6A89A7] text-center">
                                            Thanks for reaching out. We'll get back to you shortly.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-4">
                                            <label htmlFor="name" className="block text-sm font-medium text-[#384959] mb-1">Full Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formState.name}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#88BDF2]"
                                                placeholder="Your name"
                                                required
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="email" className="block text-sm font-medium text-[#384959] mb-1">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formState.email}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#88BDF2]"
                                                placeholder="your.email@example.com"
                                                required
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="subject" className="block text-sm font-medium text-[#384959] mb-1">Subject</label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formState.subject}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#88BDF2]"
                                                placeholder="How can we help you?"
                                                required
                                            />
                                        </div>
                                        <div className="mb-6">
                                            <label htmlFor="message" className="block text-sm font-medium text-[#384959] mb-1">Message</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows="5"
                                                value={formState.message}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#88BDF2]"
                                                placeholder="Your message here..."
                                                required
                                            ></textarea>
                                        </div>
                                        <div>
                                            <motion.button
                                                type="submit"
                                                className="w-full bg-[#384959] text-white py-3 px-6 rounded-md hover:bg-[#6A89A7] transition-colors duration-300 flex items-center justify-center"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                disabled={formStatus === 'sending'}
                                            >
                                                {formStatus === 'sending' ? (
                                                    <Loader />
                                                ) : (
                                                    <>
                                                        <FaPaperPlane className="mr-2" />
                                                        Send Message
                                                    </>
                                                )}
                                            </motion.button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
                
                {/* FAQ Section */}
                {activeTab === 'faq' && (
                    <motion.div
                        className="max-w-3xl mx-auto pb-16"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h2 
                            className="text-3xl font-bold text-[#384959] mb-8 text-center"
                            variants={itemVariants}
                        >
                            Frequently Asked Questions
                        </motion.h2>
                        
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white rounded-lg shadow-md overflow-hidden"
                                    variants={itemVariants}
                                >
                                    <details className="group">
                                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 bg-white hover:bg-gray-50">
                                            <span className="text-[#384959] font-semibold">{faq.question}</span>
                                            <span className="transition group-open:rotate-180 text-[#88BDF2]">
                                                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                                    <path d="M6 9l6 6 6-6"></path>
                                                </svg>
                                            </span>
                                        </summary>
                                        <motion.div 
                                            className="p-4 border-t border-gray-100 text-[#6A89A7]"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <p>{faq.answer}</p>
                                        </motion.div>
                                    </details>
                                </motion.div>
                            ))}
                        </div>
                        
                        <motion.div 
                            className="mt-10 text-center"
                            variants={itemVariants}
                        >
                            <p className="text-[#6A89A7] mb-4">
                                Didn't find what you're looking for?
                            </p>
                            <motion.button
                                onClick={() => setActiveTab('contact')}
                                className="bg-[#384959] text-white py-2 px-6 rounded-md hover:bg-[#6A89A7] transition-colors duration-300 inline-flex items-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaEnvelope className="mr-2" />
                                Contact Us Directly
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </div>
            
         
        </div>
    );
};

export default ContactUs; 