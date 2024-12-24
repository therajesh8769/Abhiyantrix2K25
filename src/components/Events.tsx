
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



'use client'

import React, { useState, useEffect } from 'react';
import { Rocket, Plane, Laptop, Bot, Edit2,Trash2, Check, Plus } from 'lucide-react';
import axios from 'axios';

interface Event {
  _id: string;
  title: string;
  date: string;
  time: string;
  status: string;
  description: string;
  iconType: string;
  imageName?: string;
}

const eventImages: { [key: string]: string } = {
  "cad": "/images/cad.png",
  "hoverpod": "/images/hoverpod.png",
  "rocket": "/images/rocket.png",
  "paperPlane": "/images/paperPlane.png"
};

// Configure axios defaults for development
axios.defaults.baseURL = 'https://abhiyantrix-backend-puaf-hofv0uucl-rajeshs-projects-837c11be.vercel.app';
axios.defaults.withCredentials = true;

export function Events() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [editingEvent, setEditingEvent] = useState<string | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAddingEvent, setIsAddingEvent] = useState(false);
  const [newEvent, setNewEvent] = useState<Omit<Event, '_id'>>({
    title: '',
    date: '',
    time: '',
    status: 'scheduled',
    description: '',
    iconType: 'Laptop',
    imageName: ''
  });

  useEffect(() => {
    const checkLoginStatus = () => {
      const authData = localStorage.getItem("authData");
      setIsLoggedIn(!!authData);
    };

    checkLoginStatus();
    window.addEventListener("storage", checkLoginStatus);
    return () => {
      window.removeEventListener("storage", checkLoginStatus);
    };
  }, []);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get('/events');
      console.log('API Response:', response.data);
      if (Array.isArray(response.data)) {
        setEvents(response.data);
      } else if (typeof response.data === 'object' && response.data !== null) {
        const eventData = response.data.events || response.data.data || response.data;
        if (Array.isArray(eventData)) {
          setEvents(eventData);
        } else {
          throw new Error('Received invalid data format');
        }
      } else {
        throw new Error('Received invalid data format');
      }
    } catch (error: any) {
      console.error('Error fetching events:', error);
      setError(error.response?.data?.message || 'Failed to fetch events. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddEvent = async () => {
    try {
      const response = await axios.post('/events', newEvent);
      console.log('Response:', response.data);
      setEvents([...events, response.data]);
      setIsAddingEvent(false);
      setNewEvent({
        title: '',
        date: '',
        time: '',
        status: 'scheduled',
        description: '',
        iconType: 'Laptop',
        imageName: ''
      });
    } catch (error: any) {
      console.error('Error adding event:', error.response?.data || error);
      setError(error.response?.data?.message || 'Failed to add event. Please try again.');
    }
  };

  const getIconComponent = (iconType: string) => {
    switch (iconType) {
      case "Laptop":
        return <Laptop className="w-6 h-6 md:w-8 md:h-8" />;
      case "Bot":
        return <Bot className="w-6 h-6 md:w-8 md:h-8" />;
      case "Rocket":
        return <Rocket className="w-6 h-6 md:w-8 md:h-8" />;
      case "Plane":
        return <Plane className="w-6 h-6 md:w-8 md:h-8" />;
      default:
        return <Laptop className="w-6 h-6 md:w-8 md:h-8" />;
    }
  };

  const handleEdit = (id: string) => {
    setEditingEvent(id);
  };

  const handleSave = async (event: Event) => {
    try {
      await axios.patch(`/events/${event._id}`, event);
      setEditingEvent(null);
      fetchEvents();
    } catch (error) {
      console.error('Error updating event:', error);
      setError('Failed to update event. Please try again.');
    }
  };
  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/events/${id}`);
      setEvents(events.filter((event) => event._id !== id));
    } catch (error: any) {
      setError('Failed to delete event. Please try again.');
    }
  };

  const handleChange = (id: string, field: string, value: string) => {
    const updatedEvents = events.map(event => 
      event._id === id ? { ...event, [field]: value } : event
    );
    setEvents(updatedEvents);
  };

  const handleNewEventChange = (field: string, value: string) => {
    setNewEvent({ ...newEvent, [field]: value });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled':
        return 'text-green-400';
      case 'delayed':
        return 'text-yellow-400';
      case 'cancelled':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const getImagePath = (imageName: string) => {
    return eventImages[imageName] || '/placeholder.svg';
  };

  if (isLoading) {
    return <div className="text-white text-center">Loading events...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="relative inset-0 bg-cover bg-center opacity-70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10 md:mb-20">Featured Events</h2>
        {isLoggedIn && (
          <button
            onClick={() => setIsAddingEvent(true)}
            className="mb-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            <Plus className="inline-block mr-2" />
            Add New Event
          </button>
        )}
        {isAddingEvent && (
          <div className="mb-8 p-4 bg-gray-800 rounded">
            <input
              type="text"
              placeholder="Title"
              value={newEvent.title}
              onChange={(e) => handleNewEventChange('title', e.target.value)}
              className="mb-2 w-full p-2 bg-gray-700 text-white rounded"
            />
            <input
              type="text"
              placeholder="Date"
              value={newEvent.date}
              onChange={(e) => handleNewEventChange('date', e.target.value)}
              className="mb-2 w-full p-2 bg-gray-700 text-white rounded"
            />
            <input
              type="text"
              placeholder="Time"
              value={newEvent.time}
              onChange={(e) => handleNewEventChange('time', e.target.value)}
              className="mb-2 w-full p-2 bg-gray-700 text-white rounded"
            />
            <select
              value={newEvent.status}
              onChange={(e) => handleNewEventChange('status', e.target.value)}
              className="mb-2 w-full p-2 bg-gray-700 text-white rounded"
            >
              <option value="scheduled">Scheduled</option>
              <option value="delayed">Delayed</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <textarea
              placeholder="Description"
              value={newEvent.description}
              onChange={(e) => handleNewEventChange('description', e.target.value)}
              className="mb-2 w-full p-2 bg-gray-700 text-white rounded"
            />
            <select
              value={newEvent.iconType}
              onChange={(e) => handleNewEventChange('iconType', e.target.value)}
              className="mb-2 w-full p-2 bg-gray-700 text-white rounded"
            >
              <option value="Laptop">Laptop</option>
              <option value="Bot">Bot</option>
              <option value="Rocket">Rocket</option>
              <option value="Plane">Plane</option>
            </select>
            <select
              value={newEvent.imageName}
              onChange={(e) => handleNewEventChange('imageName', e.target.value)}
              className="mb-2 w-full p-2 bg-gray-700 text-white rounded"
            >
              <option value="">Select an image</option>
              {Object.keys(eventImages).map((imageName) => (
                <option key={imageName} value={imageName}>
                  {imageName}
                </option>
              ))}
            </select>
            <button
              onClick={handleAddEvent}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
              Save New Event
            </button>
          </div>
        )}
        <div className="space-y-8 md:space-y-32">
          {events.map((event, index) => (
            <div 
              key={event._id}
              className="flex flex-row items-center justify-between gap-4 md:gap-16"
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                <div className="space-y-2 md:space-y-4 bg-black bg-opacity-70 backdrop-blur-sm p-3 md:p-6 rounded-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
                  <div className="text-blue-400">{getIconComponent(event.iconType)}</div>
                  <h3 className="text-base md:text-2xl lg:text-3xl font-bold text-white">{event.title}</h3>
                  <div className="space-y-1 md:space-y-2">
                    {editingEvent === event._id ? (
                      <>
                        <input
                          type="text"
                          value={event.date}
                          onChange={(e) => handleChange(event._id, 'date', e.target.value)}
                          className="text-xs md:text-sm lg:text-base text-gray-800 bg-gray-200 rounded px-2 py-1 w-full"
                        />
                        <input
                          type="text"
                          value={event.time}
                          onChange={(e) => handleChange(event._id, 'time', e.target.value)}
                          className="text-xs md:text-sm lg:text-base text-gray-800 bg-gray-200 rounded px-2 py-1 w-full"
                        />
                        <select
                          value={event.status}
                          onChange={(e) => handleChange(event._id, 'status', e.target.value)}
                          className={`text-xs md:text-sm lg:text-base ${getStatusColor(event.status)} bg-gray-800 rounded px-2 py-1 w-full border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        >
                          <option value="scheduled" className="bg-gray-800 text-green-400">Scheduled</option>
                          <option value="delayed" className="bg-gray-800 text-yellow-400">Delayed</option>
                          <option value="cancelled" className="bg-gray-800 text-red-400">Cancelled</option>
                        </select>
                        <select
                          value={event.imageName}
                          onChange={(e) => handleChange(event._id, 'imageName', e.target.value)}
                          className="text-xs md:text-sm lg:text-base text-gray-800 bg-gray-200 rounded px-2 py-1 w-full"
                        >
                          <option value="">Select an image</option>
                          {Object.keys(eventImages).map((imageName) => (
                            <option key={imageName} value={imageName}>
                              {imageName}
                            </option>
                          ))}
                        </select>
                      </>
                    ) : (
                      <>
                        <p className="text-xs md:text-sm lg:text-base text-gray-300">{event.date}</p>
                        <p className="text-xs md:text-sm lg:text-base text-gray-300">{event.time}</p>
                        <p className={`text-xs md:text-sm lg:text-base ${getStatusColor(event.status)} font-medium capitalize`}>{event.status}</p>
                      </>
                    )}
                  </div>
                  {editingEvent === event._id ? (
                    <textarea
                      value={event.description}
                      onChange={(e) => handleChange(event._id, 'description', e.target.value)}
                      className="text-xs md:text-sm lg:text-base text-gray-800 bg-gray-200 rounded px-2 py-1 w-full h-24"
                    />
                  ) : (
                    <p className="text-xs md:text-sm lg:text-base text-gray-200 leading-relaxed line-clamp-3 md:line-clamp-none">{event.description}</p>
                  )}
                  {isLoggedIn && (
                    <div>
                      <button
                      onClick={() => editingEvent === event._id ? handleSave(event) : handleEdit(event._id)}
                      className="mt-2 p-1 rounded-full hover:bg-blue-500/20 transition-colors duration-200 group"
                      aria-label={editingEvent === event._id ? "Save changes" : "Edit event"}
                    >
                      {editingEvent === event._id ? (
                        <Check className="w-4 h-4 text-blue-300 group-hover:text-blue-100" />
                      ) : (
                        <Edit2 className="w-4 h-4 text-blue-300 group-hover:text-blue-100" />
                      )}
                    </button>
                    {/* Delete Button */}
                    <button
                    onClick={() => handleDelete(event._id)}
                    className="p-1 rounded-full hover:bg-red-500/20 transition"
                  >
                    <Trash2 className="text-red-300" />
                  </button>
                      </div>

                  )}
                </div>
              </div>
              <div className={`w-1/2 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                <div className="aspect-[4/3] w-full bg-opacity-70 rounded-lg flex items-center justify-center">
                  <span className="transform hover:scale-105 transition-all duration-300 ease-in-out">
                    <img
                      src={getImagePath(event.imageName || '')}
                      alt={event.title} 
                      width={500} 
                      height={300} 
                      className="w-full h-auto object-cover rounded-lg"
                    />
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





