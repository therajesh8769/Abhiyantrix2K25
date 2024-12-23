import React, { useState } from 'react';
import {
    Send,
    Instagram,
    Linkedin,
    Facebook,
    Mail,
    MapPin,
    Phone,
    Rocket
} from 'lucide-react';
import { Teams } from './Teams';

export function Footer() {
    const socialLinks = [
        { Icon: Instagram, url: 'https://www.instagram.com/' },
        { Icon: Linkedin, url: 'https://www.linkedin.com/company/' },

        { Icon: Facebook, url: 'https://www.facebook.com/' },

    ];
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setEmail('');
    };

    return (
        <footer className="bg-gradient-to-b from-black via-blue-900/20 to-black text-white py-12 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <Rocket className="w-6 h-6 text-blue-400" />
                            <h3 className="font-orbitron text-xl font-bold">ABHIYANTRIX</h3>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Join us for the most innovative technical festival that pushes the boundaries
                            of technology and creativity.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-orbitron text-lg mb-4 text-blue-400">Quick Links</h4>
                        <ul className="space-y-2">
                            {['Home', 'About', 'Events', 'Sponsors'].map((link) => (
                                <li key={link}>
                                    <a
                                        href={`#${link.toLowerCase()}`}
                                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-orbitron text-lg mb-4 text-blue-400">Contact Us</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center space-x-2 text-sm">
                                <Mail className="w-4 h-4 text-blue-400" />
                                <span className="text-gray-400">contact@abhiyantrix.com</span>
                            </li>
                            <li className="flex items-center space-x-2 text-sm">
                                <Phone className="w-4 h-4 text-blue-400" />
                                <span className="text-gray-400">+91 1234567890</span>
                            </li>
                            <li className="flex items-center space-x-2 text-sm">
                                <MapPin className="w-4 h-4 text-blue-400" />
                                <span className="text-gray-400">Main Building, IIEST SHIBPUR</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-orbitron text-lg mb-4 text-blue-400">Stay Updated</h4>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full bg-black/50 border border-blue-500/30 rounded-full py-2 px-4 text-sm
                           focus:outline-none focus:border-blue-400 text-white placeholder-gray-400"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-1 top-1 p-1.5 bg-blue-500/20 hover:bg-blue-500/40 
                           rounded-full transition-colors duration-300"
                                >
                                    <Send className="w-4 h-4 text-blue-400" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Teams Section */}
                <div className="mt-8 pt-8 border-t border-blue-500/20">
                    <Teams />
                </div>

                {/* Social Links & Copyright */}
                <div className="mt-8 pt-8 border-t border-blue-500/20">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex space-x-4">
                        {socialLinks.map(({ Icon, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-500/10 rounded-full hover:bg-blue-500/20 
                         transition-colors duration-300 group"
              >
                <Icon className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
              </a>
            ))}
                        </div>
                        <p className="text-gray-400 text-sm">
                            © 2024 Abhiyantrix. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}