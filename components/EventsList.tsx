import React from "react";
import { Calendar, MapPin, Clock, ArrowUpRight } from 'lucide-react';

// Sample event data
const events = [
  {
    name: "Tech Talk: AI in 2024",
    startDate: "20241215T100000Z",
    endDate: "20241215T120000Z",
    description: "A tech talk about the latest trends in AI.",
    location: "Room 101, IIEST Campus",
  },
  {
    name: "Coding Bootcamp",
    startDate: "20241220T090000Z",
    endDate: "20241220T170000Z",
    description: "A full-day coding bootcamp for beginners.",
    location: "Room 202, IIEST Campus",
  },
  {
    name: "Bootcamp for Kotlin developers",
    startDate: "20241230T170000Z",
    endDate: "20241230T190000Z",
    description: "A bootcamp for Kotlin developers.",
    location: "CSD205, MN Dastur Building",
  },
  {
    name: "Bootcamp for Python developers",
    startDate: "20250101T100000Z",
    endDate: "20250101T120000Z",
    description: "A bootcamp for Python developers.",
    location: "CSD205, MN Dastur Building",
  },
  {
    name: "Workshop: Introduction to Blockchain",
    startDate: "20250115T100000Z",
    endDate: "20250115T120000Z",
    description: "A workshop about the basics of blockchain.",
    location: "Room 103, IIEST Campus",
  }
];

const EventsList = () => {
  const generateGoogleCalendarLink = (event: any) => {
    const { name, startDate, endDate, description, location } = event;
    return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      name
    )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(
      description
    )}&location=${encodeURIComponent(location)}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-6">
      {events.map((event, index) => (
        <div
          key={index}
          className="group bg-gradient-to-r from-white to-purple-50 p-6 rounded-xl 
                     shadow-md hover:shadow-xl transition-all duration-500 
                     transform hover:translate-y-[-4px] hover:scale-[1.02]
                     border-2 border-purple-100 relative overflow-hidden max-w-md mx-auto
                     border-animate"
        >
          {/* Animated background gradients */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br 
                         from-purple-200 to-pink-200 rounded-full filter blur-2xl 
                         opacity-20 group-hover:opacity-40 transition-all duration-700
                         animate-pulse transform translate-x-16 -translate-y-8" />

          <div className="relative">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-700 to-pink-600 
                          bg-clip-text text-transparent group-hover:from-purple-800 
                          group-hover:to-pink-700 transition-all duration-300
                          transform group-hover:translate-x-2">
              {event.name}
            </h3>

            <p className="mt-3 text-gray-800 group-hover:text-gray-900 
                         transition-colors duration-300 leading-relaxed
                         transform group-hover:translate-x-2 max-h-24 overflow-hidden">
              {event.description}
            </p>

            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-purple-600 
                            transform transition-all duration-300 group-hover:translate-x-2">
                <MapPin size={16} className="group-hover:animate-bounce" />
                <span>{event.location}</span>
              </div>

              <div className="flex items-center gap-2 text-purple-600
                            transform transition-all duration-300 group-hover:translate-x-2">
                <Clock size={16} className="group-hover:animate-bounce" />
                <span>{formatDate(event.startDate)}</span>
              </div>
            </div>

            <a
              href={generateGoogleCalendarLink(event)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 
                         bg-gradient-to-r from-purple-600 to-pink-600 
                         hover:from-purple-700 hover:to-pink-700
                         text-white font-medium rounded-lg
                         transform transition-all duration-300
                         hover:translate-x-2 hover:shadow-lg
                         active:scale-95 group"
            >
              <Calendar size={16} className="transition-transform duration-300 group-hover:scale-110" />
              Add to Calendar
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:rotate-45" />
            </a>
          </div>

          {/* Hover border effect */}
          <div className="absolute inset-0 border-2 border-transparent 
                         group-hover:border-purple-200 rounded-xl 
                         transition-all duration-500 pointer-events-none" />
        </div>
      ))}
    </div>
  );
};

export default EventsList;
