import React from 'react';
import { motion } from 'framer-motion';

interface SponsorPlanetProps {
  name: string;
  amount: string;
  icon: React.ReactNode;
  color: string;
  orbit: number;
  duration: number;
}

export function SponsorPlanet({ 
  name, 
  amount, 
  icon, 
  color, 
  orbit, 
  duration 
}: SponsorPlanetProps) {
  return (
    <motion.div
      className="absolute"
      animate={{
        rotate: 360
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{
        width: orbit * 2,
        height: orbit * 2,
        left: '50%',
        top: '50%',
        marginLeft: -orbit,
        marginTop: -orbit,
      }}
    >
      <motion.div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 ${color} rounded-full flex flex-col items-center justify-center text-white text-xs font-bold p-2 cursor-pointer`}
        whileHover={{ scale: 1.2 }}
      >
        {icon}
        <span className="mt-2 mb-2">{name}</span>