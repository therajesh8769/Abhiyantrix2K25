import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

export function About() {
  return (
    <div className="bg-gray-900 text-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6"> 
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16"></h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <div className="text-center p-6  bg-cover bg-center opacity-100 rounded-lg transform hover:scale-105 transition-transform">
            <Calendar className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-blue-400" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">March 29-31, 2024</h3>
            <p className="text-gray-400 text-sm md:text-base">Three days of innovation</p>
          </div>
          <div className="text-center p-6  bg-cover bg-center opacity-100 rounded-lg transform hover:scale-105 transition-transform">
            <MapPin className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-blue-400" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">Main Building,IIEST Shibpur</h3>
            <p className="text-gray-400 text-sm md:text-base">Netaji Bhawan</p>
          </div>
          <div className="text-center p-6  bg-cover bg-center opacity-100 rounded-lg transform hover:scale-105 transition-transform sm:col-span-2 md:col-span-1">
            <Users className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-blue-400" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">1000+ Participants</h3>
            <p className="text-gray-400 text-sm md:text-base">From across the nation</p>
          </div>
        </div>
      </div>
    </div>
  );
}