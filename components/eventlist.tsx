import React, { useState } from "react";
import { MapPin, Clock } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Sample event data
const events = [
  {
    id: 1,
    name: "Tech Talk: AI in 2024",
    startDate: "20241215T100000Z",
    endDate: "20241215T120000Z",
    description: "A tech talk about the latest trends in AI.",
    location: "Room 101, IIEST Campus",
  },
  {
    id: 2,
    name: "Coding Bootcamp",
    startDate: "20241220T090000Z",
    endDate: "20241220T170000Z",
    description: "A full-day coding bootcamp for beginners.",
    location: "Room 202, IIEST Campus",
  },
  {
    id: 3,
    name: "Bootcamp for Kotlin developers",
    startDate: "20241230T170000Z",
    endDate: "20241230T190000Z",
    description: "A bootcamp for Kotlin developers.",
    location: "CSD205, MN Dastur Building",
  },
  {
    id: 4,
    name: "Bootcamp for Python developers",
    startDate: "20250101T100000Z",
    endDate: "20250101T120000Z",
    description: "A bootcamp for Python developers.",
    location: "CSD205, MN Dastur Building",
  },
  {
    id: 5,
    name: "Workshop: Introduction to Blockchain",
    startDate: "20250115T100000Z",
    endDate: "20250115T120000Z",
    description: "A workshop about the basics of blockchain.",
    location: "Room 103, IIEST Campus",
  }
];

const EventsList = () => {
    const router = useRouter();
  
    const handleEventClick = (eventId: number) => {
      router.push(`/event/${eventId}`); // Navigate to event details page
    };
  
    return (
      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="group">
            <button
              onClick={() => handleEventClick(event.id)}
              className="w-full text-left text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600 hover:from-purple-800 hover:to-pink-700 transition-colors duration-300"
            >
              {event.name}
            </button>
            <hr className="border-t-2 border-purple-200 my-2" />
          </div>
        ))}
      </div>
    );
  };
  
  export default EventsList;