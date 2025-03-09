import React, { useState } from 'react';
import { X, Github, Linkedin, Mail, ChevronLeft, ChevronRight } from 'lucide-react';

interface TeamMember {
  name: string;
  position: string;
  image: string;
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

interface TeamDialogProps {
  isOpen: boolean;
  onClose: () => void;
  teamName: string;
  members: TeamMember[];
}

export function TeamDialog({ isOpen, onClose, teamName, members }: TeamDialogProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const currentMember = members[currentIndex];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % members.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + members.length) % members.length);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 flex items-center justify-center">
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
        
        <div className="relative bg-gradient-to-b from-blue-900/40 to-black/90 rounded-lg p-6 w-full max-w-md border border-blue-500/30">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-1 rounded-full hover:bg-blue-500/20 transition-colors"
          >
            <X className="w-6 h-6 text-blue-400" />
          </button>

          <h2 className="font-orbitron text-2xl text-blue-400 mb-6">{teamName}</h2>

          <div className="relative">
            <div
              className="bg-black/50 rounded-lg p-3 border border-blue-500/20 hover:border-blue-500/40 
                       transition-all duration-300 group"
            >
              <div className="aspect-square mb-3 overflow-hidden rounded-lg">
                <img
                  src={currentMember.image}
                  alt={currentMember.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-orbitron text-base text-white mb-0.5 truncate">{currentMember.name}</h3>
              <p className="text-blue-400 text-xs mb-2 truncate">{currentMember.position}</p>
              <div className="flex space-x-2">
                {currentMember.social.github && (
                  <a
                    href={currentMember.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-1.5 bg-blue-500/10 rounded-full hover:bg-blue-500/20 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5 text-blue-400" />
                  </a>
                )}
                {currentMember.social.linkedin && (
                  <a
                  href={currentMember.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={{ pointerEvents: "auto" }}
                  className="p-1.5 bg-blue-500/10 rounded-full hover:bg-blue-500/20 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                </a>
                )}
                {currentMember.social.email && (
                  <a
                    href={`mailto:${currentMember.social.email}`}
                    onClick={(e) => e.stopPropagation()}
                    className="p-1.5 bg-blue-500/10 rounded-full hover:bg-blue-500/20 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-blue-400" />
                  </a>
                )}
              </div>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4">
              <button
                onClick={goToPrevious}
                className="p-2 bg-blue-500/10 rounded-full hover:bg-blue-500/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-blue-400" />
              </button>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4">
              <button
                onClick={goToNext}
                className="p-2 bg-blue-500/10 rounded-full hover:bg-blue-500/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-blue-400" />
              </button>
            </div>
          </div>

          <div className="mt-4 text-center text-blue-400">
            {currentIndex + 1} / {members.length}
          </div>
        </div>
      </div>
    </div>
  );
}

