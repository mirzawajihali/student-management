import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-gradient-to-b from-[#BDDDFC] to-[#b1d7fe]">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Column */}
                    <div>
                        <h3 className="text-[#384959] text-xl font-bold mb-4">Student Hub</h3>
                        <p className="text-[#6A89A7] mb-4">
                            Your complete resource center for student opportunities, 
                            connecting you with income sources, resources, and community engagement.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="bg-[#384959] text-white p-2 rounded-full hover:bg-[#6A89A7] transition-colors duration-300">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="bg-[#384959] text-white p-2 rounded-full hover:bg-[#6A89A7] transition-colors duration-300">
                                <FaTwitter />
                            </a>
                            <a href="#" className="bg-[#384959] text-white p-2 rounded-full hover:bg-[#6A89A7] transition-colors duration-300">
                                <FaInstagram />
                            </a>
                            <a href="#" className="bg-[#384959] text-white p-2 rounded-full hover:bg-[#6A89A7] transition-colors duration-300">
                                <FaLinkedinIn />
                            </a>
                            <a href="#" className="bg-[#384959] text-white p-2 rounded-full hover:bg-[#6A89A7] transition-colors duration-300">
                                <FaYoutube />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-[#384959] text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-[#6A89A7]">
                            <li>
                                <Link to="/" className="hover:text-[#384959] transition-colors duration-300">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-[#384959] transition-colors duration-300">About Us</Link>
                            </li>
                            <li>
                                <Link to="/tuition" className="hover:text-[#384959] transition-colors duration-300">Tuition Offers</Link>
                            </li>
                            <li>
                                <Link to="/internships" className="hover:text-[#384959] transition-colors duration-300">Internships</Link>
                            </li>
                            <li>
                                <Link to="/food-tokens" className="hover:text-[#384959] transition-colors duration-300">Food Tokens</Link>
                            </li>
                            <li>
                                <Link to="/marketplace" className="hover:text-[#384959] transition-colors duration-300">Marketplace</Link>
                            </li>
                            <li>
                                <Link to="/developer" className="hover:text-[#384959] transition-colors duration-300">Developer</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-[#384959] text-xl font-bold mb-4">Our Services</h3>
                        <ul className="space-y-2 text-[#6A89A7]">
                            <li>
                                <Link to="/tutoring" className="hover:text-[#384959] transition-colors duration-300">Tutoring Services</Link>
                            </li>
                            <li>
                                <Link to="/career" className="hover:text-[#384959] transition-colors duration-300">Career Guidance</Link>
                            </li>
                            <li>
                                <Link to="/study-groups" className="hover:text-[#384959] transition-colors duration-300">Study Groups</Link>
                            </li>
                            <li>
                                <Link to="/events" className="hover:text-[#384959] transition-colors duration-300">Campus Events</Link>
                            </li>
                            <li>
                                <Link to="/resources" className="hover:text-[#384959] transition-colors duration-300">Learning Resources</Link>
                            </li>
                            <li>
                                <Link to="/support" className="hover:text-[#384959] transition-colors duration-300">Student Support</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-[#384959] text-xl font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-4 text-[#6A89A7]">
                            <li className="flex items-start">
                                <FaMapMarkerAlt className="mt-1 mr-3 text-[#384959]" />
                                <span>123 University Avenue, Dhaka, Bangladesh</span>
                            </li>
                            <li className="flex items-center">
                                <FaPhone className="mr-3 text-[#384959]" />
                                <span>+880 1234-567890</span>
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope className="mr-3 text-[#384959]" />
                                <span>info@studenthub.edu</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <form className="flex">
                                <input 
                                    type="email" 
                                    placeholder="Subscribe to newsletter" 
                                    className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#384959]"
                                />
                                <button 
                                    type="submit" 
                                    className="bg-[#384959] text-white px-4 py-2 rounded-r-md hover:bg-[#6A89A7] transition-colors duration-300"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Bottom Footer */}
            <div className="bg-[#384959] py-4">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-white text-sm text-center md:text-left">
                            &copy; {currentYear} Mirza Wajih Ali. All rights reserved.
                        </p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <Link to="/privacy" className="text-white text-sm hover:text-[#BDDDFC] transition-colors duration-300">
                                Privacy Policy
                            </Link>
                            <Link to="/terms" className="text-white text-sm hover:text-[#BDDDFC] transition-colors duration-300">
                                Terms of Service
                            </Link>
                            <Link to="/cookies" className="text-white text-sm hover:text-[#BDDDFC] transition-colors duration-300">
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 