
// import React, { useState, useCallback } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// interface Sponsor {
//     title: string;
//     description: string;
//     logo: string;
// }

// export function Sponsors() {
//     const [sponsors] = useState<Sponsor[]>([
//         {
//             title: "Quantum Technologies",
//             description: "Pioneering the future of innovation",
//             logo: "https://images.unsplash.com/photo-1551150441-3f3828204ef0?auto=format&fit=crop&w=200&h=200",
//         },
//         {
//             title: "Stellar Systems",
//             description: "Reaching for the stars in technology",
//             logo: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=200&h=200",
//         },
//         {
//             title: "Nova Dynamics",
//             description: "Illuminating the path to progress",
//             logo: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=200&h=200",
//         },
//     ]);

//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [isAnimating, setIsAnimating] = useState(false);
//     const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');

//     const changeSponsor = useCallback((direction: 'left' | 'right') => {
//         if (isAnimating) return;
        
//         setIsAnimating(true);
//         setSlideDirection(direction);
        
//         const newIndex = direction === 'right'
//             ? (currentIndex + 1) % sponsors.length
//             : (currentIndex - 1 + sponsors.length) % sponsors.length;

//         // Use requestAnimationFrame for smoother animation
//         requestAnimationFrame(() => {
//             setTimeout(() => {
//                 setCurrentIndex(newIndex);
//                 requestAnimationFrame(() => {
//                     setTimeout(() => {
//                         setIsAnimating(false);
//                     }, 50);
//                 });
//             }, 300);
//         });
//     }, [currentIndex, isAnimating, sponsors.length]);

//     return (
//         <section className="min-h-screen  text-white py-16 md:py-24 relative overflow-hidden">
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,123,255,0.1)_0%,transparent_70%)]" />
            
//             <div className="max-w-6xl mx-auto px-4 sm:px-6">
//                 <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
//                     <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
//                         Our Sponsors
//                     </span>
//                 </h2>

//                 <div className="relative h-[400px] perspective-3000">
//                     <div className="absolute inset-0 flex items-center justify-center">
//                         <div 
//                             className={`
//                                 relative w-full max-w-lg transform transition-all duration-300 ease-out
//                                 ${isAnimating 
//                                     ? slideDirection === 'right'
//                                         ? 'translate-x-[100%] opacity-0 rotate-y-90'
//                                         : '-translate-x-[100%] opacity-0 -rotate-y-90'
//                                     : 'translate-x-0 opacity-100 rotate-y-0'
//                                 }
//                             `}
//                             style={{
//                                 transformStyle: 'preserve-3d',
//                                 backfaceVisibility: 'hidden'
//                             }}
//                         >
//                             <div className="relative group">
//                                 {/* Animated glow effect */}
//                                 <div 
//                                     className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur-lg opacity-20 
//                                              group-hover:opacity-40 transition-opacity duration-500"
//                                     style={{
//                                         animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
//                                     }}
//                                 />
                                
//                                 <div className="relative p-8 bg-gradient-to-b from-blue-900/40 to-black/80 backdrop-blur-xl rounded-lg 
//                                             border border-blue-500/20 shadow-2xl transform hover:scale-105 transition-transform duration-500">
//                                     <div className="flex flex-col items-center space-y-6">
//                                         <div className="w-32 h-32 relative">
//                                             <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-pulse" />
//                                             <img
//                                                 src={sponsors[currentIndex].logo}
//                                                 alt={`${sponsors[currentIndex].title} logo`}
//                                                 className="rounded-full object-cover w-full h-full relative z-10 border-2 border-blue-400/30 
//                                                          transform transition-transform duration-500 group-hover:scale-105"
//                                             />
//                                         </div>
                                        
//                                         <div className="text-center space-y-3">
//                                             <h3 className="text-2xl font-orbitron text-blue-400 font-bold 
//                                                        transform transition-all duration-500 group-hover:text-blue-300">
//                                                 {sponsors[currentIndex].title}
//                                             </h3>
//                                             <p className="text-gray-300 transition-colors duration-500 group-hover:text-gray-200">
//                                                 {sponsors[currentIndex].description}
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="flex justify-center mt-12 space-x-6">
//                     <button 
//                         onClick={() => changeSponsor('left')}
//                         disabled={isAnimating}
//                         className="p-3 rounded-full bg-gradient-to-r from-blue-900/40 to-blue-800/40 hover:from-blue-800/60 hover:to-blue-700/60 
//                                  border border-blue-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
//                                  focus:outline-none focus:ring-2 focus:ring-blue-500/50 group transform hover:scale-105"
//                         aria-label="Previous sponsor"
//                     >
//                         <ChevronLeft className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
//                     </button>
//                     <button 
//                         onClick={() => changeSponsor('right')}
//                         disabled={isAnimating}
//                         className="p-3 rounded-full bg-gradient-to-r from-blue-900/40 to-blue-800/40 hover:from-blue-800/60 hover:to-blue-700/60 
//                                  border border-blue-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
//                                  focus:outline-none focus:ring-2 focus:ring-blue-500/50 group transform hover:scale-105"
//                         aria-label="Next sponsor"
//                     >
//                         <ChevronRight className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
//                     </button>
//                 </div>
//             </div>
//         </section>
//     );
// }
import React, { useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { SponsorDialog } from './SponsorDialog'

interface Sponsor {
  title: string
  description: string
  logo: string
}

export function Sponsors() {
  const [sponsors] = useState<Sponsor[]>([
    {
      title: "Want to Sponsor Us?",
      description: "Join our galaxy of innovative partners",
      logo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=200&h=200",
    },
    {
      title: "Quantum Technologies",
      description: "Pioneering the future of innovation",
      logo: "https://images.unsplash.com/photo-1551150441-3f3828204ef0?auto=format&fit=crop&w=200&h=200",
    },
    {
      title: "Stellar Systems",
      description: "Reaching for the stars in technology",
      logo: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=200&h=200",
    },
  ])

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right')
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const changeSponsor = useCallback((direction: 'left' | 'right') => {
    if (isAnimating) return
    
    setIsAnimating(true)
    setSlideDirection(direction)
    
    const newIndex = direction === 'right'
      ? (currentIndex + 1) % sponsors.length
      : (currentIndex - 1 + sponsors.length) % sponsors.length

    requestAnimationFrame(() => {
      setTimeout(() => {
        setCurrentIndex(newIndex)
        requestAnimationFrame(() => {
          setTimeout(() => {
            setIsAnimating(false)
          }, 50)
        })
      }, 300)
    })
  }, [currentIndex, isAnimating, sponsors.length])

  return (
    <section className="min-h-screen text-white py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,123,255,0.1)_0%,transparent_70%)]">
        <div className="stars" />
        <div className="twinkling" />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Our Sponsors
          </span>
        </h2>

        <div className="relative h-[400px] perspective-3000">
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className={`
                relative w-full max-w-lg transform transition-all duration-300 ease-out
                ${isAnimating 
                  ? slideDirection === 'right'
                    ? 'translate-x-[100%] opacity-0 rotate-y-90'
                    : '-translate-x-[100%] opacity-0 -rotate-y-90'
                  : 'translate-x-0 opacity-100 rotate-y-0'
                }
              `}
              style={{
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden'
              }}
            >
              <div className="relative group">
                <div 
                  className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur-lg opacity-20 
                           group-hover:opacity-40 transition-opacity duration-500"
                  style={{
                    animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                  }}
                />
                
                <div className="relative p-8 bg-gradient-to-b from-blue-900/40 to-black/80 backdrop-blur-xl rounded-lg 
                          border border-blue-500/20 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <div className="flex flex-col items-center space-y-6">
                    <div className="w-32 h-32 relative">
                      <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-pulse" />
                      <img
                        src={sponsors[currentIndex].logo}
                        alt={`${sponsors[currentIndex].title} logo`}
                        className="rounded-full object-cover w-full h-full relative z-10 border-2 border-blue-400/30 
                                 transform transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    
                    <div className="text-center space-y-3">
                      <h3 className="text-2xl font-bold text-blue-400 
                                 transform transition-all duration-500 group-hover:text-blue-300">
                        {sponsors[currentIndex].title}
                      </h3>
                      <p className="text-gray-300 transition-colors duration-500 group-hover:text-gray-200">
                        {sponsors[currentIndex].description}
                      </p>
                      
                      {currentIndex === 0 && (
                        <>
                        <button
                          onClick={() => setIsDialogOpen(true)}
                          className="mt-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 
                                   hover:to-cyan-600 text-white font-semibold py-2 px-6 rounded-full 
                                   transform hover:scale-105 transition-all duration-300 animate-pulse"
                        >
                          Learn More
                          
                        </button>
                        <p>click next for past sponsors</p>
                        </>
                       
                        
                      )}
                      
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12 space-x-6">
          <button 
            onClick={() => changeSponsor('left')}
            disabled={isAnimating}
            className="p-3 rounded-full bg-gradient-to-r from-blue-900/40 to-blue-800/40 hover:from-blue-800/60 hover:to-blue-700/60 
                 border border-blue-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
                 focus:outline-none focus:ring-2 focus:ring-blue-500/50 group transform hover:scale-105"
            aria-label="Previous sponsor"
          >
            <ChevronLeft className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
          </button>
          <button 
            onClick={() => changeSponsor('right')}
            disabled={isAnimating}
            className="p-3 rounded-full bg-gradient-to-r from-blue-900/40 to-blue-800/40 hover:from-blue-800/60 hover:to-blue-700/60 
                     border border-blue-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
                     focus:outline-none focus:ring-2 focus:ring-blue-500/50 group transform hover:scale-105"
            aria-label="Next sponsor"
          >
            <ChevronRight className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
          </button>
        </div>
      </div>

      <SponsorDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </section>
  )
}

