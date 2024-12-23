// import React from 'react';
// import { Calendar, MapPin, Users } from 'lucide-react';

// export function About() {
//   return (
//     <div className=" text-white py-16 md:py-20">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 z">
//         {/* Heading Section */}
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 opacity-70">
//           About Abhiyantrix 2024
//         </h2>
        
//         {/* Introduction Section */}
//         <div className="bg-black bg-opacity-50 rounded-lg p-6 md:p-10 mb-12 text-gray-300">
//           <p className="leading-relaxed text-lg md:text-xl">
//             <span className="font-bold text-white">ABHIYANTRIX</span>, one of the biggest fests in West Bengal, is unique in being centeblue around 
//             <span className="font-bold text-blue-400"> Space and Technology</span>. Conducted by the Aerospace Engineers' Society of the Department of 
//             Aerospace Engineering and Applied Mechanics, Indian Institute of Engineering Science and Technology, Shibpur, this event stands as a beacon 
//             of innovation and collaboration. 
//           </p>
//           <p className="mt-4 leading-relaxed text-lg md:text-xl">
//             <span className="font-bold text-white">Abhiyantrix 2024</span> will be held from <span className="text-blue-400">April 1 to April 3</span>. 
//             The fest ignites technological curiosity, providing an inclusive platform for participants to come together and contribute to groundbreaking 
//             innovations in the fields of Space and Technology.
//           </p>
//         </div>

//         {/* Key Details Section */}
//         <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 bg-cover bg-center opacity-90">
//           <div className="text-center p-6 bg-black bg-opacity-70   rounded-lg transform hover:scale-105 transition-transform">
//             <Calendar className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-blue-400" />
//             <h3 className="text-lg md:text-xl font-semibold mb-2">April 1-3, 2024</h3>
//             <p className="text-gray-400 text-sm md:text-base">Three days of innovation</p>
//           </div>
//           <div className="text-center p-6 bg-black bg-opacity-70 rounded-lg transform hover:scale-105 transition-transform bg-cover bg-center opacity-100">
//             <MapPin className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-blue-400" />
//             <h3 className="text-lg md:text-xl font-semibold mb-2">Main Building, IIEST Shibpur</h3>
//             <p className="text-gray-400 text-sm md:text-base">Netaji Bhawan</p>
//           </div>
//           <div className="text-center p-6 bg-black bg-opacity-70 rounded-lg transform hover:scale-105 transition-transform sm:col-span-2 md:col-span-1  bg-cover bg-center opacity-100">
//             <Users className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-blue-400" />
//             <h3 className="text-lg md:text-xl font-semibold mb-2">1000+ Participants</h3>
//             <p className="text-gray-400 text-sm md:text-base">From across the nation</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
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
            About Abhiyantrix 2024
          </span>
        </h2>
        
        {/* Introduction Section with Hover Effects */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-25 
                         group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
          <div className="relative bg-black/80 backdrop-blur-sm rounded-lg p-6 md:p-10 mb-12 
                         border border-blue-500/20 hover:border-blue-500/40 transition-colors duration-300">
            <p className="leading-relaxed text-lg md:text-xl text-gray-300 space-y-4">
              <span className="font-orbitron text-white inline-block transform hover:scale-105 transition-transform">
                ABHIYANTRIX
              </span>
              , one of the biggest fests in West Bengal, is unique in being centered around 
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 
                             inline-block transform hover:scale-105 transition-transform">
                {" Space and Technology"}
              </span>
              . Conducted by the Aerospace Engineers' Society of the Department of Aerospace Engineering 
              and Applied Mechanics, Indian Institute of Engineering Science and Technology, Shibpur, 
              this event stands as a beacon of innovation and collaboration.
            </p>
            <p className="mt-4 leading-relaxed text-lg md:text-xl text-gray-300">
              <span className="font-orbitron text-white inline-block transform hover:scale-105 transition-transform">
                Abhiyantrix 2024
              </span>{" "}
              will be held from{" "}
              <span className="text-blue-400 font-bold">April 1 to April 3</span>. 
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
              title: "April 1-3, 2024",
              subtitle: "Three days of innovation"
            },
            {
              icon: <MapPin className="w-10 h-10 md:w-12 md:h-12" />,
              title: "Main Building, IIEST Shibpur",
              subtitle: "Netaji Bhawan"
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