'use client'

import React from 'react';
import { Rocket, Plane, Laptop, Bot } from 'lucide-react';

export function Events() {
  const events = [
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "CAD-A-THON",
      date: "October 15, 2024",
      time: "10:00 AM - 4:00 PM",
      status: "Registrations Open",
      image:"/images/cad.png",
      description: "Showcase your artistry and precision by letting your skilled hands bring complex machine designs to life in this dynamic fusion of art and engineering."
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "HOVER-HAVOC",
      date: "March 29, 2024",
      time: "11:00 AM - 3:00 PM",
      status: "Coming Soon",
      image:"/images/hoverpod.png",
      description: "Dive into our charged arena of our hovercraft competition where you can show-off your speed and precision by swiftly navigating through an obstacle course."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "JALSTRA",
      date: "March 28, 2024",
      time: "9:00 AM - 2:00 PM",
      status: "Registrations Open",
      image:"/images/rocket.png",
      description: "Put your creativity and innovation to test and take flight with your handcrafted rockets to touch the skies!"
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "AIR-O-FOLD",
      date: "March 28, 2024",
      time: "1:00 PM - 5:00 PM",
      status: "Coming Soon",
      image:"/images/paperPlane.png",
      description: "Showcase your mastery at origami and let your creativity take flight!"
    }
  ];

  return (
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986')] bg-cover bg-center opacity-70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-20">Featured Events</h2>
        <div className="space-y-32">
          {events.map((event, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16"
            >
              <div className={`w-full md:w-1/2 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="space-y-6 bg-black bg-opacity-70 backdrop-blur-sm p-6 rounded-lg">
                  <div className="text-blue-400">{event.icon}</div>
                  <h3 className="text-3xl font-bold text-white">{event.title}</h3>
                  <div className="space-y-2">
                    <p className="text-gray-300">{event.date}</p>
                    <p className="text-gray-300">{event.time}</p>
                    <p className="text-green-400 font-medium">{event.status}</p>
                  </div>
                  <p className="text-gray-200 leading-relaxed">{event.description}</p>
                </div>
              </div>
              <div className={`w-full md:w-1/2 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="aspect-[4/3] w-full bg-opacity-100 rounded-lg flex items-center justify-center">
                  <span className="text-white text-opacity-10">
                    <img src={event.image}></img>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

