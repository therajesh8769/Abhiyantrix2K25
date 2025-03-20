
//   const [events, setEvents] = useState([
//     {
//       icon: <Laptop className="w-6 h-6 md:w-8 md:h-8" />,
//       title: "CAD-A-THON",
//       date: "October 15, 2024",
//       time: "10:00 AM - 4:00 PM",
//       status: "Registrations Open",
//       image: "/images/cad.png",
//       description: "Showcase your artistry and precision by letting your skilled hands bring complex machine designs to life in this dynamic fusion of art and engineering."
//     },
//     {
//       icon: <Bot className="w-6 h-6 md:w-8 md:h-8" />,
//       title: "HOVER-HAVOC",
//       date: "March 29, 2024",
//       time: "11:00 AM - 3:00 PM",
//       status: "Coming Soon",
//       image: "/images/hoverpod.png",
//       description: "Dive into our charged arena of our hovercraft competition where you can show-off your speed and precision by swiftly navigating through an obstacle course."
//     },
//     {
//       icon: <Rocket className="w-6 h-6 md:w-8 md:h-8" />,
//       title: "JALSTRA",
//       date: "March 28, 2024",
//       time: "9:00 AM - 2:00 PM",
//       status: "Registrations Open",
//       image: "/images/rocket.png",
//       description: "Put your creativity and innovation to test and take flight with your handcrafted rockets to touch the skies!"
//     },
//     {
//       icon: <Plane className="w-6 h-6 md:w-8 md:h-8" />,
//       title: "AIR-O-FOLD",
//       date: "March 28, 2024",
//       time: "1:00 PM - 5:00 PM",
//       status: "Coming Soon",
//       image: "/images/paperPlane.png",
//       description: "Showcase your mastery at origami and let your creativity take flight!"
//     }



// 'use client'

// import React, { useState, useEffect } from 'react';
// import { Rocket, Plane, Laptop, Bot, Edit2,Trash2, Check, Plus } from 'lucide-react';
// import axios from 'axios';

// interface Event {
//   _id: string;
//   title: string;
//   date: string;
//   time: string;
//   status: string;
//   description: string;
//   iconType: string;
//   imageName?: string;
// }

// const eventImages: { [key: string]: string } = {
//   "cad": "/images/cad.png",
//   "hoverpod": "/images/hoverpod.png",
//   "rocket": "/images/rocket.png",
//   "paperPlane": "/images/paperPlane.png"
// };

// // Configure axios defaults for development
// axios.defaults.baseURL = 'https://abhiyantrixbackend.onrender.com';
// axios.defaults.withCredentials = true;

// export function Events() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [editingEvent, setEditingEvent] = useState<string | null>(null);
//   const [events, setEvents] = useState<Event[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [isAddingEvent, setIsAddingEvent] = useState(false);
//   const [newEvent, setNewEvent] = useState<Omit<Event, '_id'>>({
//     title: '',
//     date: '',
//     time: '',
//     status: 'scheduled',
//     description: '',
//     iconType: 'Laptop',
//     imageName: ''
//   });

//   useEffect(() => {
//     const checkLoginStatus = () => {
//       const authData = localStorage.getItem("authData");
//       setIsLoggedIn(!!authData);
//     };

//     checkLoginStatus();
//     window.addEventListener("storage", checkLoginStatus);
//     return () => {
//       window.removeEventListener("storage", checkLoginStatus);
//     };
//   }, []);

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const fetchEvents = async () => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await axios.get('/events');
//       console.log('API Response:', response.data);
//       if (Array.isArray(response.data)) {
//         setEvents(response.data);
//       } else if (typeof response.data === 'object' && response.data !== null) {
//         const eventData = response.data.events || response.data.data || response.data;
//         if (Array.isArray(eventData)) {
//           setEvents(eventData);
//         } else {
//           throw new Error('Received invalid data format');
//         }
//       } else {
//         throw new Error('Received invalid data format');
//       }
//     } catch (error: any) {
//       console.error('Error fetching events:', error);
//       setError(error.response?.data?.message || 'Failed to fetch events. Please try again later.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleAddEvent = async () => {
//     try {
//       const response = await axios.post('/events', newEvent);
//       console.log('Response:', response.data);
//       setEvents([...events, response.data]);
//       setIsAddingEvent(false);
//       setNewEvent({
//         title: '',
//         date: '',
//         time: '',
//         status: 'scheduled',
//         description: '',
//         iconType: 'Laptop',
//         imageName: ''
//       });
//     } catch (error: any) {
//       console.error('Error adding event:', error.response?.data || error);
//       setError(error.response?.data?.message || 'Failed to add event. Please try again.');
//     }
//   };

//   const getIconComponent = (iconType: string) => {
//     switch (iconType) {
//       case "Laptop":
//         return <Laptop className="w-6 h-6 md:w-8 md:h-8" />;
//       case "Bot":
//         return <Bot className="w-6 h-6 md:w-8 md:h-8" />;
//       case "Rocket":
//         return <Rocket className="w-6 h-6 md:w-8 md:h-8" />;
//       case "Plane":
//         return <Plane className="w-6 h-6 md:w-8 md:h-8" />;
//       default:
//         return <Laptop className="w-6 h-6 md:w-8 md:h-8" />;
//     }
//   };

//   const handleEdit = (id: string) => {
//     setEditingEvent(id);
//   };

//   const handleSave = async (event: Event) => {
//     try {
//       await axios.patch(`/events/${event._id}`, event);
//       setEditingEvent(null);
//       fetchEvents();
//     } catch (error) {
//       console.error('Error updating event:', error);
//       setError('Failed to update event. Please try again.');
//     }
//   };
//   const handleDelete = async (id: string) => {
//     try {
//       await axios.delete(`/events/${id}`);
//       setEvents(events.filter((event) => event._id !== id));
//     } catch (error: any) {
//       setError('Failed to delete event. Please try again.');
//     }
//   };

//   const handleChange = (id: string, field: string, value: string) => {
//     const updatedEvents = events.map(event => 
//       event._id === id ? { ...event, [field]: value } : event
//     );
//     setEvents(updatedEvents);
//   };

//   const handleNewEventChange = (field: string, value: string) => {
//     setNewEvent({ ...newEvent, [field]: value });
//   };

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case 'scheduled':
//         return 'text-green-400';
//       case 'delayed':
//         return 'text-yellow-400';
//       case 'cancelled':
//         return 'text-red-400';
//       default:
//         return 'text-gray-400';
//     }
//   };

//   const getImagePath = (imageName: string) => {
//     return eventImages[imageName] || '/placeholder.svg';
//   };

//   if (isLoading) {
//     return <div className="text-white text-center">Loading events...</div>;
//   }

//   if (error) {
//     return <div className="text-red-500 text-center">{error}</div>;
//   }

//   return (
//     <div className="relative inset-0 bg-cover bg-center opacity-70">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-20">
//         <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10 md:mb-20">Featured Events</h2>
//         {isLoggedIn && (
//           <button
//             onClick={() => setIsAddingEvent(true)}
//             className="mb-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
//           >
//             <Plus className="inline-block mr-2" />
//             Add New Event
//           </button>
//         )}
//         {isAddingEvent && (
//           <div className="mb-8 p-4 bg-gray-800 rounded">
//             <input
//               type="text"
//               placeholder="Title"
//               value={newEvent.title}
//               onChange={(e) => handleNewEventChange('title', e.target.value)}
//               className="mb-2 w-full p-2 bg-gray-700 text-white rounded"
//             />
//             <input
//               type="text"
//               placeholder="Date"
//               value={newEvent.date}
//               onChange={(e) => handleNewEventChange('date', e.target.value)}
//               className="mb-2 w-full p-2 bg-gray-700 text-white rounded"
//             />
//             <input
//               type="text"
//               placeholder="Time"
//               value={newEvent.time}
//               onChange={(e) => handleNewEventChange('time', e.target.value)}
//               className="mb-2 w-full p-2 bg-gray-700 text-white rounded"
//             />
//             <select
//               value={newEvent.status}
//               onChange={(e) => handleNewEventChange('status', e.target.value)}
//               className="mb-2 w-full p-2 bg-gray-700 text-white rounded"
//             >
//               <option value="scheduled">Scheduled</option>
//               <option value="delayed">Delayed</option>
//               <option value="cancelled">Cancelled</option>
//             </select>
//             <textarea
//               placeholder="Description"
//               value={newEvent.description}
//               onChange={(e) => handleNewEventChange('description', e.target.value)}
//               className="mb-2 w-full p-2 bg-gray-700 text-white rounded"
//             />
//             <select
//               value={newEvent.iconType}
//               onChange={(e) => handleNewEventChange('iconType', e.target.value)}
//               className="mb-2 w-full p-2 bg-gray-700 text-white rounded"
//             >
//               <option value="Laptop">Laptop</option>
//               <option value="Bot">Bot</option>
//               <option value="Rocket">Rocket</option>
//               <option value="Plane">Plane</option>
//             </select>
//             <select
//               value={newEvent.imageName}
//               onChange={(e) => handleNewEventChange('imageName', e.target.value)}
//               className="mb-2 w-full p-2 bg-gray-700 text-white rounded"
//             >
//               <option value="">Select an image</option>
//               {Object.keys(eventImages).map((imageName) => (
//                 <option key={imageName} value={imageName}>
//                   {imageName}
//                 </option>
//               ))}
//             </select>
//             <button
//               onClick={handleAddEvent}
//               className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
//             >
//               Save New Event
//             </button>
//           </div>
//         )}
//         <div className="space-y-8 md:space-y-32">
//           {events.map((event, index) => (
//             <div 
//               key={event._id}
//               className="flex flex-row items-center justify-between gap-4 md:gap-16"
//             >
//               <div className={`w-1/2 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
//                 <div className="space-y-2 md:space-y-4 bg-black bg-opacity-70 backdrop-blur-sm p-3 md:p-6 rounded-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
//                   <div className="text-blue-400">{getIconComponent(event.iconType)}</div>
//                   <h3 className="text-base md:text-2xl lg:text-3xl font-bold text-white">{event.title}</h3>
//                   <div className="space-y-1 md:space-y-2">
//                     {editingEvent === event._id ? (
//                       <>
//                         <input
//                           type="text"
//                           value={event.date}
//                           onChange={(e) => handleChange(event._id, 'date', e.target.value)}
//                           className="text-xs md:text-sm lg:text-base text-gray-800 bg-gray-200 rounded px-2 py-1 w-full"
//                         />
//                         <input
//                           type="text"
//                           value={event.time}
//                           onChange={(e) => handleChange(event._id, 'time', e.target.value)}
//                           className="text-xs md:text-sm lg:text-base text-gray-800 bg-gray-200 rounded px-2 py-1 w-full"
//                         />
//                         <select
//                           value={event.status}
//                           onChange={(e) => handleChange(event._id, 'status', e.target.value)}
//                           className={`text-xs md:text-sm lg:text-base ${getStatusColor(event.status)} bg-gray-800 rounded px-2 py-1 w-full border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                         >
//                           <option value="scheduled" className="bg-gray-800 text-green-400">Scheduled</option>
//                           <option value="delayed" className="bg-gray-800 text-yellow-400">Delayed</option>
//                           <option value="cancelled" className="bg-gray-800 text-red-400">Cancelled</option>
//                         </select>
//                         <select
//                           value={event.imageName}
//                           onChange={(e) => handleChange(event._id, 'imageName', e.target.value)}
//                           className="text-xs md:text-sm lg:text-base text-gray-800 bg-gray-200 rounded px-2 py-1 w-full"
//                         >
//                           <option value="">Select an image</option>
//                           {Object.keys(eventImages).map((imageName) => (
//                             <option key={imageName} value={imageName}>
//                               {imageName}
//                             </option>
//                           ))}
//                         </select>
//                       </>
//                     ) : (
//                       <>
//                         <p className="text-xs md:text-sm lg:text-base text-gray-300">{event.date}</p>
//                         <p className="text-xs md:text-sm lg:text-base text-gray-300">{event.time}</p>
//                         <p className={`text-xs md:text-sm lg:text-base ${getStatusColor(event.status)} font-medium capitalize`}>{event.status}</p>
//                       </>
//                     )}
//                   </div>
//                   {editingEvent === event._id ? (
//                     <textarea
//                       value={event.description}
//                       onChange={(e) => handleChange(event._id, 'description', e.target.value)}
//                       className="text-xs md:text-sm lg:text-base text-gray-800 bg-gray-200 rounded px-2 py-1 w-full h-24"
//                     />
//                   ) : (
//                     <p className="text-xs md:text-sm lg:text-base text-gray-200 leading-relaxed line-clamp-3 md:line-clamp-none">{event.description}</p>
//                   )}
//                   {isLoggedIn && (
//                     <div>
//                       <button
//                       onClick={() => editingEvent === event._id ? handleSave(event) : handleEdit(event._id)}
//                       className="mt-2 p-1 rounded-full hover:bg-blue-500/20 transition-colors duration-200 group"
//                       aria-label={editingEvent === event._id ? "Save changes" : "Edit event"}
//                     >
//                       {editingEvent === event._id ? (
//                         <Check className="w-4 h-4 text-blue-300 group-hover:text-blue-100" />
//                       ) : (
//                         <Edit2 className="w-4 h-4 text-blue-300 group-hover:text-blue-100" />
//                       )}
//                     </button>
//                     {/* Delete Button */}
//                     <button
//                     onClick={() => handleDelete(event._id)}
//                     className="p-1 rounded-full hover:bg-red-500/20 transition"
//                   >
//                     <Trash2 className="text-red-300" />
//                   </button>
//                       </div>

//                   )}
//                 </div>
//               </div>
//               <div className={`w-1/2 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
//                 <div className="aspect-[4/3] w-full bg-opacity-70 rounded-lg flex items-center justify-center">
//                   <span className="transform hover:scale-105 transition-all duration-300 ease-in-out">
//                     <img
//                       src={getImagePath(event.imageName || '')}
//                       alt={event.title} 
//                       width={500} 
//                       height={300} 
//                       className="w-full h-auto object-cover rounded-lg"
//                     />
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// 'use client'

// import React, { useState } from 'react';
// import { Laptop, Bot, Rocket, Plane, X } from 'lucide-react';

// interface Event {
//   id: string;
//   icon: React.ReactNode;
//   title: string;
//   date: string;
//   time: string;
//   prize: string;
//   image: string;
//   description: string;
// }

// const events: Event[] = [
//   {
//     id: '1',
//     icon: <Laptop className="w-6 h-6 md:w-8 md:h-8" />,
//     title: "CAD-A-THON",
//     date: "October 15, 2024",
//     time: "10:00 AM - 4:00 PM",
//     prize: "₹10,000",
//     image: "/images/cad.png",
//     description: "Showcase your artistry and precision by letting your skilled hands bring complex machine designs to life in this dynamic fusion of art and engineering."
//   },
//   {
//     id: '2',
//     icon: <Bot className="w-6 h-6 md:w-8 md:h-8" />,
//     title: "HOVER-HAVOC",
//     date: "March 29, 2024",
//     time: "11:00 AM - 3:00 PM",
//     prize: "₹8,000",
//     image: "/images/hoverpod.png",
//     description: "Dive into our charged arena of our hovercraft competition where you can show-off your speed and precision by swiftly navigating through an obstacle course."
//   },
//   {
//     id: '3',
//     icon: <Rocket className="w-6 h-6 md:w-8 md:h-8" />,
//     title: "JALSTRA",
//     date: "March 28, 2024",
//     time: "9:00 AM - 2:00 PM",
//     prize: "₹12,000",
//     image: "/images/rocket.png",
//     description: "Put your creativity and innovation to test and take flight with your handcrafted rockets to touch the skies!"
//   },
//   {
//     id: '4',
//     icon: <Plane className="w-6 h-6 md:w-8 md:h-8" />,
//     title: "AIR-O-FOLD",
//     date: "March 28, 2024",
//     time: "1:00 PM - 5:00 PM",
//     prize: "₹5,000",
//     image: "/images/paperPlane.png",
//     description: "Showcase your mastery at origami and let your creativity take flight!"
//   }
// ];

// export function Events() {
//   const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

//   return (
//     <div className="relative inset-0 bg-cover bg-center opacity-70">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-20">
//         <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10 md:mb-20">
//           Featured Events
//         </h2>

//         <div className="space-y-16 md:space-y-32">
//           {events.map((event, index) => (
//             <div 
//               key={event.id}
//               className="flex flex-row items-center justify-between gap-8 md:gap-16 cursor-pointer"
//               onClick={() => setSelectedEvent(event)}
//               role="button"
//               tabIndex={0}
//               onKeyDown={(e) => {
//                 if (e.key === 'Enter' || e.key === ' ') {
//                   setSelectedEvent(event);
//                 }
//               }}
//             >
//               <div className={`w-1/2 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
//                 <div className="relative">
//                   <div className="bg-black/60 backdrop-blur-sm p-3 rounded-lg border border-blue-500/30 shadow-2xl">
//                     <div className="text-blue-400 mb-4">
//                       {event.icon}
//                     </div>
//                     <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{event.title}</h3>

//                     <div className="space-y-2 mb-4">
//                       <p className="text-sm text-gray-300">{event.date}</p>
//                       <p className="text-sm text-gray-300">{event.time}</p>
//                       <p className="text-sm text-green-400 font-medium">Prize: {event.prize}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className={`w-1/2 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
//                 <div className="aspect-[4/3] w-full rounded-lg overflow-hidden">
//                   <img
//                     src={event.image}
//                     alt={event.title}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {selectedEvent && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 z-50">
//             <div className="bg-black/80 backdrop-blur-sm border border-blue-500/30 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//               <div className="flex items-center justify-between mb-4">
//                 <div className="flex items-center gap-2">
//                   {selectedEvent.icon}
//                   <h3 className="text-2xl font-bold text-white">{selectedEvent.title}</h3>
//                 </div>
//                 <button 
//                   onClick={() => setSelectedEvent(null)}
//                   className="text-gray-400 hover:text-white"
//                 >
//                   <X size={24} />
//                 </button>
//               </div>

//               <div className="aspect-[16/9] w-full rounded-lg overflow-hidden mb-4">
//                 <img
//                   src={selectedEvent.image}
//                   alt={selectedEvent.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               <div className="space-y-4">
//                 <div className="space-y-2">
//                   <p className="text-gray-300">{selectedEvent.date}</p>
//                   <p className="text-gray-300">{selectedEvent.time}</p>
//                   <p className="text-green-400 font-medium">Prize: {selectedEvent.prize}</p>
//                 </div>

//                 <p className="text-gray-300">{selectedEvent.description}</p>
//               </div>

//               <button 
//                 className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
//                 onClick={() => setSelectedEvent(null)}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

"use client"

import type React from "react"
import { useState } from "react"
import { Laptop, Bot, Rocket, Landmark, X, HelpCircle, Mic, Send, Monitor, Telescope,SmilePlus,Users } from "lucide-react"

interface Event {
  id: string
  icon: React.ReactNode
  title: string
  tagline: string
  date: string
  time:string
  venue:string
  prize: string
  image: string
  description: string
  registrationLink: string
}

const events: Event[] = [
  {
    id: "1",
    icon: <Laptop className="w-6 h-6 md:w-8 md:h-8" />,
    title: "CAD-Crusade",
    tagline: "'Ready your blueprints'",
    date: "Round-1:22nd March,2025,5:30 PM",
    time: "Round-2:23rd March,2025,5:00 PM",
    venue:"Gallery-3",
    prize: "Worth  ₹3,000",
    image: "/images/cad.png",
    description:
      "Showcase your artistry and precision by letting your skilled hands bring complex machine designs to life in this dynamic fusion of art and engineering.",
    registrationLink: "https://unstop.com/o/poPyCLJ?lb=wCdWBIno",
  },
  {
    id: "2",
    icon: <Bot className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Floating Frenzy",
    tagline: "'Ready,Set,Hover!'",
    date: "Round-1:22nd March,2025,7:00 PM",
    time: "Round-2:23rd March,2025,6:00 PM",
    venue:"Parade Ground",
    prize: "Worth ₹8,000",
    image: "/images/hoverpod.png",
    description:
      "Dive into our charged arena of our hovercraft competition where you can show-off your speed and precision by swiftly navigating through an obstacle course.",
    registrationLink: "https://unstop.com/o/XSaM1pj?lb=wCdWBIno",
  },
  {
    id: "3",
    icon: <Send className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Airborne Adventure",
    tagline: "'Fly Beyond the limits!'",
    date: "Round-1:22nd March, 2025,10:00am",
    time: "Round-2:22nd March, 2025,1:30pm",
    venue:"Lords Ground",
    prize: "Worth ₹8,000",
    image: "/images/rcplane.png",
    description:
      "Ready for the challenge? Compete in our RC Plane Competition and soar through the skies with skill and speed.",
    registrationLink: "https://unstop.com/o/vUAkDp8?lb=wCdWBIno",
  },
  {
    id: "4",
    icon: <Rocket className="w-6 h-6 md:w-8 md:h-8" />,
    title: "JALAASTRA",
    tagline: "'Launching Dreams:Soaring Heights'",
    date: "Round-1:22nd March,2025,11:30 AM",
    time:"Round-2:22nd March,2025,3:00 PM",
    venue:"Lords Ground",
    prize: "Worth ₹4,000",
    image: "/images/rocket.png",
    description:
      "Step into the excitement of our water rocket competition, where you can test your ingenuity and precision by launching rockets through a thrilling flight challenge.",
    registrationLink: "https://unstop.com/o/9WMc5Tu?lb=wCdWBIno",
  },
  {
    id: "5",
    icon: <Send className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Falcon's Flight",
    tagline: "'Soar. Glide. Conquer. Repeat.'",
    date: "22nd March,2025,4:30 PM",
    time: "",
    venue:"Lords Ground",
    prize: "To be decided",
    image: "/images/glider.png",
    description:
      "Unleash your inner engineer and let your creation take flight! Build a glider that embodies innovation and soar to new heights in our challenge.",
    registrationLink: "https://unstop.com/o/z7GtI24?lb=wCdWBIno",
  },
  {
    id: "6",
    icon: <Monitor className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Flying Ace",
    tagline: "'Take your wings to the skies'",
    date: "",
    time: "",
    venue:"Parade Ground",
    prize: "Open event",
    image: "/images/flighsimulator.png",
    description:
      "Experience the thrill of aviation in our Flight Simulator event! Navigate the skies and put your piloting skills to the test.",
    registrationLink: "https://unstop.com/o/oYyvbxk?lb=wCdWBIno",
  },
  
  {
    id: "7",
    icon: <Telescope className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Steller Odyssey",
    tagline: "'Gaze into the infinite'",
    date: "23rd March,2025",
    time: "6:00 PM:8:00 PM",
    venue:"BEC-Modal Ground",
    prize: "Open event",
    image: "/images/skyWatching.png",
    description:
      "A captivating sky-watching experience, where you can discover constellations, planets, and celestial wonders while exploring the vast beauty of the cosmos.",
    registrationLink: "https://unstop.com/o/2mGjNXp?lb=wCdWBIno",
  },
  {
    id: "8",
    icon: <HelpCircle className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Galactic Quiz Bowl",
    tagline: "'Blast off with Knowledge'",
    date: "Round-1:21st March, 2025,7:00 PM",
    time: "Round-2:21st March, 2025,8:00 PM",
    venue:"Gallery-3",
    prize: "Worth ₹3,000",
    image: "/images/quiz.png",
    description:
      "Prepare for liftoff in the Galactic Quiz Bowl! Challenge your mind and compete in a fast-paced, out-of-this-world trivia showdown.",
    registrationLink: "https://unstop.com/o/by8A6nw?lb=wCdWBIno",
  },
  {
    id: "9",
    icon: <Mic className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Star Wars",
    tagline: "'Debate.Discuss.Decide'",
    date: "Round-1:23rd March,2025,3:00 PM",
    time: "Round-2:23rd March,2025,4:00 PM",
     venue:"Gallery-3",
    prize: "Worth ₹2,000",
    image: "/images/debate.png",
    description:
      "Prepare to debate! Showcase your skills in argumentation and critical thinking while engaging in dynamic discussions with fellow competitors.",
    registrationLink: "https://unstop.com/o/SFnwqI0?lb=wCdWBIno",
  },
  
  {
    id: "10",
    icon: <SmilePlus className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Mach Meme",
    tagline: "'Got Memes? Prove It!'",
    date: "Online submission",
    time: "",
    venue:"Online",
    prize: "Worth ₹1,000",
    image: "/images/meme.png",
    description:
      "Join the ultimate showdown of wit and humor! Submit your best memes and battle for the title of Meme Master in a fun, fast-paced competition.",
    registrationLink: "https://unstop.com/o/gdjNrby?lb=wCdWBInohttps://unstop.com/o/gdjNrby?lb=wCdWBIno",
  },
 
  
  
]

export function Events() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null)

  return (
    <div className="relative inset-0 bg-cover bg-center opacity-70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10 md:mb-20">Featured Events</h2>

        <div className="space-y-16 md:space-y-32">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`flex flex-row items-center justify-between gap-8 md:gap-16 cursor-pointer transition-transform ${hoveredEvent === event.id ? "scale-105" : "scale-100"
                }`}
              onClick={() => setSelectedEvent(event)}
              onMouseEnter={() => setHoveredEvent(event.id)}
              onMouseLeave={() => setHoveredEvent(null)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSelectedEvent(event)
                }
              }}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? "order-1" : "order-2"}`}>
                <div className="relative">
                  <div
                    className={`p-3 rounded-lg border ${hoveredEvent === event.id
                        ? "bg-blue-500/30 border-blue-400 shadow-lg"
                        : "bg-black/60 border-blue-500/30"
                      } backdrop-blur-sm`}
                  >
                    <div className="text-blue-400 mb-4">{event.icon}</div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{event.title}</h3>

                    <div className="space-y-1 mb-4">
                      <p className="text-sm text-gray-300 font-sarif mb-6">{event.tagline}</p>
                      {/* <p className="text-sm text-gray-300 mb-2">{event.date}</p>
                      <p className="text-sm text-gray-300 mb-2">{event.time}</p>
                      <p className="text-sm text-sky-300 mb-2">Venue:{event.venue}</p> */}
                      <p className="text-sm text-green-400 font-medium">Prize: {event.prize}</p>
                    </div>
                    <a
                      href={event.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 bg-blue-500 text-white text-sm py-1.5 px-3 rounded-full hover:bg-blue-600 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Register
                    </a>
                  </div>
                </div>
              </div>

              <div className={`w-1/2 ${index % 2 === 0 ? "order-2" : "order-1"}`}>
                <div className="aspect-[4/3] w-full rounded-lg overflow-hidden">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 z-50">
            <div className="bg-black/80 backdrop-blur-sm border border-blue-500/30 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  {selectedEvent.icon}
                  <h3 className="text-2xl font-bold text-white">{selectedEvent.title}</h3>
                </div>
                <button onClick={() => setSelectedEvent(null)} className="text-gray-400 hover:text-white">
                  <X size={24} />
                </button>
              </div>

              <div className="aspect-[16/9] w-full rounded-lg overflow-hidden mb-4">
                <img
                  src={selectedEvent.image }
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-gray-300">{selectedEvent.tagline}</p>
                  <p className="text-gray-300">{selectedEvent.date}</p>
                  <p className="text-gray-300">{selectedEvent.time}</p>
                  <p className="text-sky-300">Venue:{selectedEvent.venue}</p>

                  <p className="text-green-400 font-medium">Prize: {selectedEvent.prize}</p>
                </div>

                <p className="text-gray-300">{selectedEvent.description}</p>
              </div>
              <div className="flex justify-between items-center mt-6">
                <button
                  className="bg-gray-500 text-white text-sm py-1.5 px-3 rounded-full hover:bg-gray-600 transition-colors"
                  onClick={() => setSelectedEvent(null)}
                >
                  Close
                </button>
                {selectedEvent?.registrationLink ? (
                  <a
                    onClick={() => window.open(selectedEvent?.registrationLink, "_blank")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white text-sm py-1.5 px-3 rounded-full hover:bg-blue-600 transition-colors"
                  >
                    Register
                  </a>
                ) : (
                  <p className="text-red-500">Registration link not available</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

