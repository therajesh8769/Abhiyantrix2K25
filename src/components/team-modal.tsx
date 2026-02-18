
"use client"

import { useEffect } from "react"
import {
  X,
  Github,
  Linkedin,
  Mail,
  Crown,
  Code,
  Banknote,
  Briefcase,
  CalendarClock,
  Truck,
  Users2,
  Users,
  Palette,
  Megaphone,
  Music,
} from "lucide-react"
import type { TeamData } from "../data/teams"

interface TeamModalProps {
  isOpen: boolean
  onClose: () => void
  teams: TeamData[]
}

export function TeamModal({ isOpen, onClose, teams }: TeamModalProps) {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      // Save the current scroll position
      const scrollY = window.scrollY

      // Prevent scrolling on the body
      document.body.style.position = "fixed"
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = "100%"
    } else {
      // Restore scrolling and position when modal closes
      const scrollY = document.body.style.top
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""

      // Scroll back to the original position
      if (scrollY) {
        window.scrollTo(0, Number.parseInt(scrollY || "0", 10) * -1)
      }
    }

    return () => {
      // Cleanup in case component unmounts while modal is open
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
    }
  }, [isOpen])

  // Main coordinators and secretary details
  const coordinators = [
    {
      name: "Dr. Indrajit Mukherjee",
      position: "Convener",
      phone: "",
      image: "./images/teams/in.png",
      social: { linkedin: "", email: "" },
    },
    {
      name: "Sandeep Sankuru",
      position: "Main Coordinator (4th Year)",
      phone: "",
      image: "./images/teams/san.jpeg",
      social: { linkedin: "", email: "" },
    },
    {
      name: "Mehul Mehta",
      position: "Main Coordinator (3rd Year)",
      phone: "",
      image: "./images/teams/mehul.jpg",
      social: { linkedin: "", email: "" },
    },
    {
      name: "Navonil Chatterjee",
      position: "Secretary-AES",
      phone: "",
      image: "./images/teams/navonil.jpg",
      social: { linkedin: "", email: "" },
    },
  ]

  if (!isOpen) return null

  // Function to render the appropriate icon based on iconName
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Crown":
        return <Crown className="w-5 h-5 text-blue-400" />
      case "Code":
        return <Code className="w-5 h-5 text-blue-400" />
      case "Banknote":
        return <Banknote className="w-5 h-5 text-blue-400" />
      case "Briefcase":
        return <Briefcase className="w-5 h-5 text-blue-400" />
      case "CalendarClock":
        return <CalendarClock className="w-5 h-5 text-blue-400" />
      case "Truck":
        return <Truck className="w-5 h-5 text-blue-400" />
      case "Users2":
        return <Users2 className="w-5 h-5 text-blue-400" />
      case "Users":
        return <Users className="w-5 h-5 text-blue-400" />
      case "Palette":
        return <Palette className="w-5 h-5 text-blue-400" />
      case "Megaphone":
        return <Megaphone className="w-5 h-5 text-blue-400" />
      case "Music":
        return <Music className="w-5 h-5 text-blue-400" />
      default:
        return <Users className="w-5 h-5 text-blue-400" />
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      aria-modal="true"
      role="dialog"
      onClick={(e) => {
        // Only close if the backdrop was clicked directly
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      <div className="min-h-screen px-4 flex items-center justify-center">
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

        <div
          className="relative bg-gradient-to-b from-blue-900/40 to-black/90 rounded-lg p-6 w-full max-w-6xl border border-blue-500/30 max-h-[85vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-1 rounded-full hover:bg-blue-500/20 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-blue-400" />
          </button>

          <h2 className="font-orbitron text-2xl text-blue-400 mb-8">Our Teams</h2>

          {/* Leadership Section */}
          <div className="mb-10">
            <h3 className="font-orbitron text-xl text-blue-400 mb-4"></h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {coordinators.map((person, index) => (
                <div
                  key={index}
                  className="bg-black/50 rounded-lg p-3 border border-blue-500/20 hover:border-blue-500/40 
                           transition-all duration-300 group"
                >
                  <div className="aspect-square mb-3 overflow-hidden rounded-lg">
                    <img
                      src={person.image || "/placeholder.svg?height=200&width=200"}
                      alt={person.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-orbitron text-base text-white mb-0.5 truncate">{person.name}</h4>
                  <p className="text-blue-400 text-xs mb-1 truncate">{person.position}</p>
                  <p className="text-gray-400 text-xs mb-2 truncate">{person.phone}</p>
                </div>
              ))}
            </div>
          </div>

          {/* All Teams Section */}
          {teams.map((team, teamIndex) => (
            <div key={teamIndex} className="mb-10">
              <h3 className="font-orbitron text-xl text-blue-400 flex items-center gap-2 mb-4">
                {renderIcon(team.iconName)}
                <span>{team.name} </span>
              </h3>

              <div className="relative">
                <div className="flex overflow-x-auto pb-4 snap-x snap-mandatory sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {team.members.map((member, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-[85vw] sm:w-auto snap-center bg-black/50 rounded-lg p-3 border border-blue-500/20 hover:border-blue-500/40 
                     transition-all duration-300 group"
                    >
                      <div className="aspect-square mb-3 overflow-hidden rounded-lg">
                        <img
                          src={member.image || "/placeholder.svg?height=200&width=200"}
                          alt={member.name}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h4 className="font-orbitron text-base text-white mb-0.5 truncate">{member.name}</h4>
                      <p className="text-blue-400 text-xs mb-2 truncate">{member.position}</p>
                      <div className="flex space-x-2">
                        {member.social.github && (
                          <a
                            href={member.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-1.5 bg-blue-500/10 rounded-full hover:bg-blue-500/20 transition-colors"
                          >
                            <Github className="w-3.5 h-3.5 text-blue-400" />
                          </a>
                        )}
                        {member.social.linkedin && (
                          <a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-1.5 bg-blue-500/10 rounded-full hover:bg-blue-500/20 transition-colors"
                          >
                            <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                          </a>
                        )}
                        {member.social.email && (
                          <a
                            href={`mailto:${member.social.email}`}
                            onClick={(e) => e.stopPropagation()}
                            className="p-1.5 bg-blue-500/10 rounded-full hover:bg-blue-500/20 transition-colors"
                          >
                            <Mail className="w-3.5 h-3.5 text-blue-400" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


