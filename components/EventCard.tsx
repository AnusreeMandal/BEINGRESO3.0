import React from "react";
import { ArrowUpRight, Users } from 'lucide-react';

const EventCard = ({ event }: { event: any }) => {
  return (
    <div className="p-6 bg-gradient-to-br from-white to-purple-50 rounded-xl shadow-md 
                    hover:shadow-xl transition-all duration-500 ease-out
                    border border-purple-100 group relative overflow-hidden
                    hover:translate-y-[-4px] hover:scale-[1.02]">
      {/* Animated background shapes */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br 
                      from-purple-200 to-pink-200 rounded-full filter blur-2xl 
                      opacity-30 group-hover:opacity-50 transition-all duration-700
                      animate-pulse transform translate-x-16 -translate-y-8" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr 
                      from-fuchsia-200 to-purple-200 rounded-full filter blur-xl 
                      opacity-20 group-hover:opacity-40 transition-all duration-700
                      animate-pulse delay-150 transform -translate-x-8 translate-y-8" />
      
      <div className="relative flex justify-between items-start">
        <div className="transform transition-all duration-300 group-hover:translate-x-2">
          <h3 className="font-bold text-lg bg-gradient-to-r from-purple-700 to-pink-600 
                         bg-clip-text text-transparent group-hover:from-purple-800 
                         group-hover:to-pink-700 transition-all duration-300">
            {event.title}
          </h3>
          <p className="text-purple-600 text-sm mt-1 flex items-center gap-2 font-medium">
            <span className="inline-flex">
              <span className="inline-flex h-2 w-2 bg-purple-500 rounded-full animate-ping absolute" />
              <span className="inline-flex h-2 w-2 bg-purple-500 rounded-full relative" />
            </span>
            {event.date} at {event.time}
          </p>
          <p className="text-purple-500 text-sm font-medium">{event.location}</p>
        </div>
        <button className="text-pink-600 hover:text-pink-700 p-2 rounded-full
                         transition-all duration-500 hover:bg-pink-100
                         transform group-hover:rotate-45 group-hover:scale-110
                         active:scale-95">
          <ArrowUpRight className="w-5 h-5" />
        </button>
      </div>
      
      <p className="mt-3 text-gray-600 group-hover:text-gray-800 transition-colors duration-300
                    relative transform group-hover:translate-x-2">{event.description}</p>
      
      <div className="mt-4 flex items-center gap-2 text-purple-600 font-medium
                      transform transition-all duration-300 group-hover:translate-x-2">
        <Users size={16} className="group-hover:animate-bounce" />
        <span className="group-hover:text-purple-700 transition-colors duration-300">
          {event.attendees} attending
        </span>
      </div>

      {/* Hover border effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-200
                      rounded-xl transition-all duration-500 pointer-events-none" />
    </div>
  );
};

export default EventCard;