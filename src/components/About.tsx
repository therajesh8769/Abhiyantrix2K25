
import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

export function About() {
  return (
    <div className="relative text-white py-16 md:py-20 overflow-hidden bg-black opacity-80">
      {/* Space-themed background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.15),transparent_50%)]" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Animated Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 
                         animate-[shimmer_3s_infinite] bg-[length:200%_100%]">
            About Abhiyantrix
          </span>
        </h2>
        
        {/* Introduction Section with Hover Effects */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-25 
                         group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
          <div className="relative bg-black/80 backdrop-blur-sm rounded-lg p-6 md:p-10 mb-12 
                         border border-blue-500/20 hover:border-blue-500/40 transition-colors duration-300">
            <p className="leading-relaxed text-lg md:text-xl text-gray-300 space-y-4">
              <span className="font-mono text-white inline-block transform hover:scale-105 transition-transform">
                ABHIYANTRIX
              </span>
              , one of the biggest fests in West Bengal, is unique in being centered around,
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 
                             inline-block transform hover:scale-105 transition-transform">
                {"Space and Technology"}
              </span>
              . Conducted by the Aerospace Engineers' Society of the Department of Aerospace Engineering 
              and Applied Mechanics, Indian Institute of Engineering Science and Technology, Shibpur, 
              this event stands as a beacon of innovation and collaboration.
            </p>
            <p className="mt-4 leading-relaxed text-lg md:text-xl text-gray-300">
              <span className="font-mono text-white inline-block transform hover:scale-105 transition-transform">
                Abhiyantrix 2025
              </span>{" "}
              will be held from{" "}
              <span className="text-blue-400 font-bold">March 21 to March 23</span>. 
              The fest ignites technological curiosity, providing an inclusive platform for participants 
              to come together and contribute to groundbreaking innovations in the fields of Space and Technology.
            </p>
          </div>
        </div>

        {/* Animated Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              icon: <Calendar className="w-10 h-10 md:w-12 md:h-12" />,
              title: "March 21-23, 2025",
              subtitle: "Three days of innovation"
            },
            {
              icon: <MapPin className="w-10 h-10 md:w-12 md:h-12" />,
              title: "1st floor,2nd lobby, IIEST Shibpur",
              subtitle: "Main building"
            },
            {
              icon: <Users className="w-10 h-10 md:w-12 md:h-12" />,
              title: "1000+ Participants",
              subtitle: "From across the nation"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Animated border gradient */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-25 
                           group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt" />
              
              <div className="relative flex flex-col items-center p-6 bg-black/70 backdrop-blur-sm rounded-lg
                           border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300
                           transform hover:scale-105 hover:-translate-y-1 opacity-80">
                {/* Animated icon */}
                <div className="text-blue-400 mb-4 transform group-hover:scale-110 transition-transform duration-300
                             group-hover:text-cyan-400">
                  {item.icon}
                </div>
                
                {/* Content with hover effects */}
                <h3 className="text-lg md:text-xl font-orbitron font-semibold mb-2 
                             text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base group-hover:text-gray-300 transition-colors">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}