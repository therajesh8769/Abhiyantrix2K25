"use client"

import { useState, useEffect, useRef } from "react"
import { Volume2, VolumeX } from "lucide-react"

export function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted
    }
  }, [isMuted])

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const handleLogoClick = () => {
    setIsVideoPlaying(true)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Layered background effects */}
      <div className="absolute inset-0 bg-[url('/stars.png')] opacity-50 animate-twinkle"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.06)_0%,transparent_50%)]" />

      {/* Orbital ring decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full border border-blue-500/[0.07] hero-orbit" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full border border-cyan-400/[0.05] hero-orbit-reverse" />

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <div className="relative text-center space-y-6">

          {/* AES Logo */}
          <div
            className="relative inline-block cursor-pointer group"
            onClick={handleLogoClick}
          >
            <img
              src="/images/AES_LOGO.png"
              alt="Aerospace Engineers' Society"
              className="w-20 h-20 md:w-28 md:h-28 mx-auto transition-transform duration-500 group-hover:scale-110"
              style={{
                filter: "drop-shadow(0 0 25px rgba(96, 165, 250, 0.4))",
              }}
            />
            <div className="absolute inset-0 rounded-full bg-blue-400/10 blur-2xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Edition badge */}
          <div>
            <span className="inline-block px-5 py-1.5 border border-cyan-400/30 rounded-full text-xs md:text-sm tracking-[0.3em] uppercase text-cyan-300/80 font-light" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              5th Edition
            </span>
          </div>

          {/* Main title */}
          <div className="relative py-2">
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-none"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              <span className="hero-title-gradient">ABHIYANTRIX</span>
            </h1>
            <div className="mt-3 md:mt-4">
              <span
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-[0.2em] hero-year-gradient"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                2027
              </span>
            </div>
          </div>

          {/* Tagline */}
          <div className="space-y-3 pt-2">
            <p className="text-lg md:text-xl lg:text-2xl text-blue-200/90 font-light italic">
              Kolkata's Largest Space Technology Fest
            </p>
            <p className="text-xs md:text-sm text-gray-400/80 tracking-[0.4em] uppercase font-light">
              Aerospace • Aircraft • Space
            </p>
          </div>

          {/* Teaser Video */}
          {isVideoPlaying && (
            <div className="relative mt-8 mb-8 transition-all duration-300 ease-in-out">
              <div className="relative w-full max-w-4xl mx-auto">
                <div className="relative w-full pt-[56.25%] overflow-hidden rounded-xl border border-blue-500/20">
                  <video
                    ref={videoRef}
                    className="absolute top-0 left-0 w-full h-full object-contain bg-black"
                    playsInline
                    onEnded={() => {
                      if (videoRef.current) videoRef.current.pause()
                    }}
                    muted={isMuted}
                  >
                    <source src="/images/Aero.mp4" type="video/mp4" />
                  </video>
                  <button
                    onClick={toggleMute}
                    className="absolute bottom-4 right-4 p-3 bg-black/60 backdrop-blur-sm rounded-full text-white hover:bg-black/80 transition-colors z-10"
                  >
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <a
              href="/images/Event brochure.pdf"
              download="Abhiyantrix_2027_Brochure.pdf"
              className="group relative inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm tracking-widest uppercase transition-all duration-300 border border-blue-400/40 text-blue-200 hover:border-blue-400 hover:text-white hover:shadow-[0_0_30px_rgba(96,165,250,0.2)]"
              style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.75rem' }}
            >
              <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 18h16" />
              </svg>
              Download Brochure
            </a>
            <button
              onClick={handleLogoClick}
              className="group relative inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm tracking-widest uppercase transition-all duration-300 bg-blue-500/10 border border-blue-500/30 text-blue-300 hover:bg-blue-500/20 hover:border-blue-400/50 hover:text-white"
              style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.75rem' }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Teaser
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="relative pt-16 pb-4">
            <p className="text-xs text-gray-500 tracking-[0.3em] uppercase mb-4">Explore</p>
            <div className="flex justify-center gap-1.5">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 bg-blue-400/60 rounded-full"
                  style={{
                    animation: `heroPulse 1.5s ease-in-out ${i * 0.2}s infinite`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-title-gradient {
          background: linear-gradient(
            135deg,
            #e0f2fe 0%,
            #7dd3fc 25%,
            #38bdf8 50%,
            #818cf8 75%,
            #c084fc 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 40px rgba(56, 189, 248, 0.3));
        }
        .hero-year-gradient {
          background: linear-gradient(135deg, #94a3b8 0%, #e2e8f0 50%, #94a3b8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-orbit {
          animation: heroOrbit 30s linear infinite;
        }
        .hero-orbit-reverse {
          animation: heroOrbit 25s linear infinite reverse;
        }
        @keyframes heroOrbit {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes heroPulse {
          0%, 100% { transform: scale(0.5); opacity: 0.4; }
          50% { transform: scale(1.2); opacity: 1; }
        }
      `}</style>
    </div>
  )
}
