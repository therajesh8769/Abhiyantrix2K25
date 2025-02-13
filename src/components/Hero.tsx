// import React, { useState } from 'react';
// import { Rocket } from 'lucide-react';
// // import { Announcement } from './Annoucement';
// // import { RegistrationForm } from './Registration/RegistrationForm';
// export function Hero() {
//   // const [showRegistration, setShowRegistration] = useState(false);
//   return (
//     <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       <div className="absolute inset-0  bg-cover bg-center opacity-20" />
//       <div className="absolute inset-0 bg-black/60" />
//       {/* <Announcement/> */}
//       <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto">
//         <div className="relative">
//           <Rocket 
//             className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-6 md:mb-8 text-blue-400" 
//             style={{
//               animation: 'float 4s ease-in-out infinite',
//               filter: 'drop-shadow(0 0 10px rgba(96, 165, 250, 0.5))'
//             }}
//           />
//         </div>
//         <h1 
//           className="space-title text-4xl sm:text-5xl md:text-7xl font-bold mb-4" 
//           data-text="ABHIYANTRIX"
//         >
//           ABHIYANTRIX
//         </h1>
//         <p 
//           className="text-lg sm:text-xl mb-8 px-4"
//           style={{
//             color: '#a8d8ff',
//             textShadow: '0 0 10px rgba(168, 216, 255, 0.5)',
//             fontFamily: 'Orbitron, sans-serif'
//           }}
//         >
//           Explore the Universe of Innovation
//         </p>
//         {/* <button 
//           onClick={() => setShowRegistration(true)}
//           className="px-6 py-2.5 sm:px-8 sm:py-3 text-white rounded-full relative group overflow-hidden text-sm sm:text-base"
//           style={{
//             background: 'linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)',
//             transition: 'all 0.3s ease',
//             fontFamily: 'Orbitron, sans-serif'
//           }}
//         > */}
//           {/* <span className="relative z-10">Register Now</span>
//           <div 
//             className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
//           />
//         </button> */}
//       </div>

//       {/* {showRegistration && (
//         <RegistrationForm onClose={() => setShowRegistration(false)} />
//       )} */}
//     </div>
//   );
// }



// video play on full screen 

// import { useState, useEffect, useRef } from "react"
// import { Rocket, Sparkles, Volume2, VolumeX } from "lucide-react"
// import { motion, AnimatePresence } from "framer-motion"

// export function Hero() {
//   const [introEnded, setIntroEnded] = useState(false)
//   const [isMuted, setIsMuted] = useState(true)
//   const videoRef = useRef<HTMLVideoElement>(null)

//   useEffect(() => {
//     const video = videoRef.current
//     if (video) {
//       const handleEnded = () => setIntroEnded(true)
//       video.addEventListener("ended", handleEnded)
//       return () => video.removeEventListener("ended", handleEnded)
//     }
//   }, [])

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.muted = isMuted
//     }
//   }, [isMuted])

//   const toggleMute = () => {
//     setIsMuted(!isMuted)
//   }

//   const contentVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//         staggerChildren: 0.2,
//       },
//     },
//   }

//   return (
//     <div className="min-h-screen relative overflow-hidden ">
//       <AnimatePresence>
//         {!introEnded && (
//           <motion.div
//             initial={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1 }}
//             className="absolute inset-0 z-50 flex items-center justify-center bg-black"
//           >
//             <div className="relative w-full h-full">
//               <video
//                 ref={videoRef}
//                 className="w-full h-full object-cover md:object-contain"
//                 autoPlay
//                 playsInline
//                 muted={isMuted}
//               >
//                 <source src="/images/Aero13.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//               <button
//                 onClick={toggleMute}
//                 className="absolute bottom-4 right-4 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition-colors duration-300 z-10"
//               >
//                 {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {introEnded && <div className="absolute inset-0 bg-[url('/stars.png')] opacity-50 animate-twinkle"></div>}

//       <motion.div
//         initial="hidden"
//         animate={introEnded ? "visible" : "hidden"}
//         variants={contentVariants}
//         className="relative z-10 w-full max-w-6xl mx-auto min-h-screen flex items-center justify-center p-4"
//       >
//         <div className="text-center space-y-8">
//           <motion.div variants={contentVariants} className="relative inline-block">
//             <Rocket
//               className="w-16 h-16 md:w-20 md:h-20 mx-auto text-blue-400"
//               style={{
//                 filter: "drop-shadow(0 0 20px rgba(96, 165, 250, 0.8))",
//               }}
//             />
//             <Sparkles className="absolute -top-4 -right-4 w-6 h-6 md:w-8 md:h-8 text-yellow-300 animate-pulse" />
//           </motion.div>

//           <motion.div variants={contentVariants}>
//             <img
//               src="/images/AbhiyantrixLogo1.png"
//               alt="ABHIYANTRIX Logo"
//               className="w-auto h-auto max-h-48 md:max-h-56 lg:max-h-64 mx-auto"
//               style={{
//                 filter: "drop-shadow(0 0 20px rgba(96, 165, 250, 0.3))",
//               }}
//             />
//           </motion.div>

//           <motion.p
//             variants={contentVariants}
//             className="text-xl md:text-2xl lg:text-3xl text-blue-200 font-light italic"
//           >
//             Revolutionizing the future of technology
//           </motion.p>

//           <motion.div variants={contentVariants} className="relative">
//             <p className="text-2xl md:text-3xl lg:text-4xl text-blue-200 font-light tracking-widest">LAUNCHING SOON</p>
//             <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
//               {[0, 1, 2].map((i) => (
//                 <div
//                   key={i}
//                   className="w-2 h-2 bg-blue-400 rounded-full"
//                   style={{
//                     animation: `pulse 1.5s ease-in-out ${i * 0.2}s infinite`,
//                   }}
//                 />
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>

//       <style jsx>{`
//         @keyframes pulse {
//           0%, 100% { transform: scale(0.5); opacity: 0.5; }
//           50% { transform: scale(1); opacity: 1; }
//         }
//         @keyframes twinkle {
//           0%, 100% { opacity: 0.5; }
//           50% { opacity: 1; }
//         }
//       `}</style>
//     </div>
//   )
// }

//full screen but onlce one view video
// "use client"

// import { useState, useEffect, useRef } from "react"
// import { Rocket, Sparkles, Volume2, VolumeX } from "lucide-react"
// import { motion, AnimatePresence } from "framer-motion"

// export function Hero() {
//   const [introEnded, setIntroEnded] = useState(() => {
//     // Check localStorage on initial render
//     if (typeof window !== "undefined") {
//       return localStorage.getItem("introPlayed") === "true"
//     }
//     return false
//   })
//   const [isMuted, setIsMuted] = useState(true)
//   const videoRef = useRef<HTMLVideoElement>(null)

//   useEffect(() => {
//     const video = videoRef.current
//     if (video && !introEnded) {
//       const handleEnded = () => {
//         setIntroEnded(true)
//         // Set flag in localStorage when video ends
//         localStorage.setItem("introPlayed", "true")
//       }
//       video.addEventListener("ended", handleEnded)
//       return () => video.removeEventListener("ended", handleEnded)
//     }
//   }, [introEnded])

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.muted = isMuted
//     }
//   }, [isMuted])

//   const toggleMute = () => {
//     setIsMuted(!isMuted)
//   }

//   const contentVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//         staggerChildren: 0.2,
//       },
//     },
//   }

//   return (
//     <div className="min-h-screen relative overflow-hidden">
//       <AnimatePresence>
//         {!introEnded && (
//           <motion.div
//             initial={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1 }}
//             className="absolute inset-0 z-50 flex items-center justify-center bg-black"
//           >
//             <div className="relative w-full h-full">
//               <video
//                 ref={videoRef}
//                 className="w-full h-full object-cover md:object-contain"
//                 autoPlay
//                 playsInline
//                 muted={isMuted}
//               >
//                 <source src="/images/Aero13.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//               <button
//                 onClick={toggleMute}
//                 className="absolute bottom-4 right-4 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition-colors duration-300 z-10"
//               >
//                 {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <div className="absolute inset-0 bg-[url('/stars.png')] opacity-50 animate-twinkle"></div>

//       <motion.div
//         initial="hidden"
//         animate={introEnded ? "visible" : "hidden"}
//         variants={contentVariants}
//         className="relative z-10 w-full max-w-6xl mx-auto min-h-screen flex items-center justify-center p-4"
//       >
//         <div className="text-center space-y-8">
//           <motion.div variants={contentVariants} className="relative inline-block">
//             <Rocket
//               className="w-16 h-16 md:w-20 md:h-20 mx-auto text-blue-400"
//               style={{
//                 filter: "drop-shadow(0 0 20px rgba(96, 165, 250, 0.8))",
//               }}
//             />
//             <Sparkles className="absolute -top-4 -right-4 w-6 h-6 md:w-8 md:h-8 text-yellow-300 animate-pulse" />
//           </motion.div>

//           <motion.div variants={contentVariants}>
//             <img
//               src="/images/AbhiyantrixLogo1.png"
//               alt="ABHIYANTRIX Logo"
//               className="w-auto h-auto max-h-48 md:max-h-56 lg:max-h-64 mx-auto"
//               style={{
//                 filter: "drop-shadow(0 0 20px rgba(96, 165, 250, 0.3))",
//               }}
//             />
//           </motion.div>

//           <motion.p
//             variants={contentVariants}
//             className="text-xl md:text-2xl lg:text-3xl text-blue-200 font-light italic"
//           >
//             Revolutionizing the future of technology
//           </motion.p>

//           <motion.div variants={contentVariants} className="relative">
//             <p className="text-2xl md:text-3xl lg:text-4xl text-blue-200 font-light tracking-widest">LAUNCHING SOON</p>
//             <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
//               {[0, 1, 2].map((i) => (
//                 <div
//                   key={i}
//                   className="w-2 h-2 bg-blue-400 rounded-full"
//                   style={{
//                     animation: `pulse 1.5s ease-in-out ${i * 0.2}s infinite`,
//                   }}
//                 />
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>

//       <style jsx>{`
//         @keyframes pulse {
//           0%, 100% { transform: scale(0.5); opacity: 0.5; }
//           50% { transform: scale(1); opacity: 1; }
//         }
//         @keyframes twinkle {
//           0%, 100% { opacity: 0.5; }
//           50% { opacity: 1; }
//         }
//       `}</style>
//     </div>
//   )
// }




//vidoe play automatically on fixed container floating effect 
"use client"

import { useState, useEffect, useRef } from "react"
import { Rocket, Sparkles, Volume2, VolumeX } from "lucide-react"

export function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const logoRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted
    }
  }, [isMuted])

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const handleLogoHover = () => {
    setIsVideoPlaying(true)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/stars.png')] opacity-50 animate-twinkle"></div>
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="relative text-center space-y-8">
          {/* Rocket with trail effect */}
          <div className="relative inline-block mb-2 z-5">
            <Rocket
              className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-6 md:mb-8 text-blue-400"
              style={{
                animation: "float 4s ease-in-out infinite",
                filter: "drop-shadow(0 0 20px rgba(96, 165, 250, 0.8))",
              }}
            />
            <Sparkles className="absolute -top-4 -right-4 w-5 h-5 md:w-6 md:h-6 text-yellow-300 animate-pulse" />
          </div>

          {/* Logo with adjusted size */}
          <div className="my-2 relative cursor-pointer" onMouseEnter={handleLogoHover}>
            <img
              ref={logoRef}
              src="/images/AbhiyantrixLogo2.png"
              alt="https://vzjmqivzndfloheg.public.blob.vercel-storage.com/AbhiyantrixLogo2-pVB6fkjLJsOcp8ybf5ZRbUOVw2VY36.png"
              className="w-auto h-auto max-h-48 md:max-h-48 xl:max-h-48 2xl:max-h-48 mx-auto"
              style={{
                filter: "drop-shadow(0 0 20px rgba(96, 165, 250, 0.3))",
              }}
            />
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl lg:text-2xl text-blue-200 font-light italic mt-4 mb-4">
            Revolutionizing the future of technology
          </p>

          {/* Teaser Video */}
          {isVideoPlaying && (
            <div className="relative mt-8 mb-16 perspective-1000 transition-all duration-300 ease-in-out">
              <div
                className="relative w-full max-w-4xl mx-auto transform transition-transform duration-1000 animate-float flex items-center justify-center"
                onMouseEnter={() => {
                  if (videoRef.current) {
                    videoRef.current.currentTime = 0
                    videoRef.current.play()
                  }
                }}
              >
                <div className="relative w-full pt-[40%] overflow-hidden rounded-lg">
                  <video
                    ref={videoRef}
                    className="absolute top-0 left-0 w-full h-80vh object-cover"
                    playsInline
                    onEnded={() => {
                      if (videoRef.current) {
                        videoRef.current.pause()
                      }
                    }}
                    muted={isMuted}
                  >
                    <source src="/images/Aero.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <button
                    onClick={toggleMute}
                    className="absolute bottom-4 right-4 p-3 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition-colors duration-300 z-50"
                  >
                    {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Coming soon text with animated dots */}
          <div className="relative mt-16 mb-16">
            <p className="text-xl font-sarif md:text-2xl lg:text-3xl text-blue-200 font-light tracking-widest">EXPLORE THE SPACE</p>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 mb12">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-blue-400 rounded-full"
                  style={{
                    animation: `pulse 1.5s ease-in-out ${i * 0.2}s infinite`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add keyframe animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(0.5); opacity: 0.5; }
          50% { transform: scale(1); opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
