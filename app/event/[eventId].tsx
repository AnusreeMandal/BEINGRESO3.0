'use client';
import React from "react";
import { useRouter } from 'next/router';
import { MapPin, Clock ,Calendar, ArrowUpRight} from 'lucide-react';

// Sample event data (In a real app, this should be fetched based on the event ID)
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

const EventDetails = () => {
  const router = useRouter();
  const { eventId } = router.query;
  const event = events.find((e) => e.id === Number(eventId));

  if (!event) {
    return <div className="text-center mt-16 text-2xl font-semibold text-gray-800">Event not found</div>;
  }

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

  const generateGoogleCalendarLink = () => {
    return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.name
    )}&dates=${event.startDate}/${event.endDate}&details=${encodeURIComponent(
      event.description
    )}&location=${encodeURIComponent(event.location)}`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 hover:from-purple-800 hover:via-fuchsia-700 hover:to-pink-700 transition-colors duration-300 animate-fade-in">
          {event.name}
        </h1>
      </div>

      <div className="bg-gradient-to-r from-white via-purple-50 to-white p-8 rounded-xl shadow-md border-2 border-animate">
        <div className="text-center mb-6">
          <div className="flex justify-center items-center gap-2 text-purple-600 text-xl">
            <MapPin size={24} />
            <span>{event.location}</span>
          </div>
          <div className="flex justify-center items-center gap-2 text-purple-600 text-xl mt-2">
            <Clock size={24} />
            <span>{formatDate(event.startDate)}</span>
          </div>
        </div>
        <p className="text-gray-800 leading-relaxed">{event.description}</p>

        <div className="flex justify-center mt-6">
          <a
            href={generateGoogleCalendarLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
          >
            <Calendar size={24} className="transition-transform duration-300 group-hover:scale-110" />
            Add to Calendar
            <ArrowUpRight size={24} className="transition-transform duration-300 group-hover:rotate-45" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;