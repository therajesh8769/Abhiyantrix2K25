import React, { useState } from 'react';
import { Rocket } from 'lucide-react';
import { Announcement } from './Annoucement';
import { RegistrationForm } from './Registration/RegistrationForm';
export function Hero() {
  const [showRegistration, setShowRegistration] = useState(false);
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0  bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-black/60" />
      <Announcement/>
      <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto">
        <div className="relative">
          <Rocket 
            className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-6 md:mb-8 text-blue-400" 
            style={{
              animation: 'float 4s ease-in-out infinite',
              filter: 'drop-shadow(0 0 10px rgba(96, 165, 250, 0.5))'
            }}
          />
        </div>
        <h1 
          className="space-title text-4xl sm:text-5xl md:text-7xl font-bold mb-4" 
          data-text="ABHIYANTRIX"
        >
          ABHIYANTRIX
        </h1>
        <p 
          className="text-lg sm:text-xl mb-8 px-4"
          style={{
            color: '#a8d8ff',
            textShadow: '0 0 10px rgba(168, 216, 255, 0.5)',
            fontFamily: 'Orbitron, sans-serif'
          }}
        >
          Explore the Universe of Innovation
        </p>
        <button 
          onClick={() => setShowRegistration(true)}
          className="px-6 py-2.5 sm:px-8 sm:py-3 text-white rounded-full relative group overflow-hidden text-sm sm:text-base"
          style={{
            background: 'linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)',
            transition: 'all 0.3s ease',
            fontFamily: 'Orbitron, sans-serif'
          }}
        >
          <span className="relative z-10">Register Now</span>
          <div 
            className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
          />
        </button>
      </div>

      {showRegistration && (
        <RegistrationForm onClose={() => setShowRegistration(false)} />
      )}
    </div>
  );
}