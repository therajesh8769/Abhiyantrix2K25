
'use client'

import React, { useState, useEffect } from 'react';
import { Sparkles, Clock, X, Edit2, Check } from 'lucide-react';
import axios from 'axios';

interface AnnouncementData {
  _id: string;
  content: string;
  isVisible: boolean;
}

export function Announcement() {
  const [isVisible, setIsVisible] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [announcement, setAnnouncement] = useState<AnnouncementData | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 

  axios.defaults.baseURL = 'https://abhiyantrix-backend-puaf-hofv0uucl-rajeshs-projects-837c11be.vercel.app';
  axios.defaults.withCredentials = true;

  useEffect(() => {
    const checkLoginStatus = () => {
      const authData = localStorage.getItem("authData");
      setIsLoggedIn(!!authData);
    };

    const loadAnnouncement = async () => {
      try {
        const response = await axios.get<AnnouncementData>('/api/announcements');
        if (response.data && response.data._id) {
          setAnnouncement(response.data);
          setIsVisible(true); // Always set to true when loading
        } else {
          console.error('Invalid announcement data received:', response.data);
        }
      } catch (error) {
        console.error('Error fetching announcement:', error);
      }
    };

    checkLoginStatus();
    loadAnnouncement();

    window.addEventListener("storage", checkLoginStatus);
    return () => {
      window.removeEventListener("storage", checkLoginStatus);
    };
  }, []);

  const handleUpdate = async () => {
    if (!announcement || !announcement._id) {
      console.error('No valid announcement to update');
      return;
    }

    try {
      const response = await axios.patch<AnnouncementData>(`/api/announcements/${announcement._id}`, {
        content: announcement.content,
        isVisible: true // Always set to true when updating
      });
      setAnnouncement(response.data);
      setIsEditing(false);
      setIsVisible(true);
    } catch (error) {
      console.error('Error updating announcement:', error);
      if (axios.isAxiosError(error)) {
        console.error('Response data:', error.response?.data);
        console.error('Response status:', error.response?.status);
      }
    }
  };

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible || !announcement) return null;

  return (
    <div className="absolute top-20 left-0 right-0 z-20 flex justify-center px-4 py-2">
      <div 
        className="relative bg-gradient-to-r from-blue-900/40 via-indigo-900/40 to-blue-900/40 backdrop-blur-sm 
                   border border-blue-500/20 rounded-full px-4 py-2 flex items-center space-x-2 max-w-xl mx-auto 
                   transform hover:scale-105 transition-transform duration-300 animate-pulse-glow"
      >
        <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
        {isEditing ? (
          <input
            type="text"
            value={announcement.content}
            onChange={(e) => setAnnouncement({ ...announcement, content: e.target.value })}
            className="bg-transparent text-blue-100 text-sm md:text-base font-sans focus:outline-none"
          />
        ) : (
          <span className="text-blue-100 text-sm md:text-base font-sans">
            {announcement.content}
          </span>
        )}
        <Clock className="w-4 h-4 text-blue-400" />
        {isLoggedIn && (
          <button
            onClick={isEditing ? handleUpdate : () => setIsEditing(true)}
            className="ml-2 p-1 rounded-full hover:bg-blue-500/20 transition-colors duration-200 group"
            aria-label={isEditing ? "Save announcement" : "Edit announcement"}
          >
            {isEditing ? (
              <Check className="w-4 h-4 text-blue-300 group-hover:text-blue-100" />
            ) : (
              <Edit2 className="w-4 h-4 text-blue-300 group-hover:text-blue-100" />
            )}
          </button>
        )}
        <button
          onClick={handleDismiss}
          className="ml-2 p-1 rounded-full hover:bg-blue-500/20 transition-colors duration-200 group"
          aria-label="Dismiss announcement"
        >
          <X className="w-4 h-4 text-blue-300 group-hover:text-blue-100" />
        </button>
      </div>
    </div>
  );
}

