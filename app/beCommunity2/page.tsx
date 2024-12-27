// app/becommunity/page.tsx

'use client';
import React from "react";
import FloatingShapes from "../../components/FloatingShapes";
import EventsList from "../../components/EventsList";
import PostList from "../../components/PostList";
import WavesBackground from "../../components/WavesBackground";

const BeCommunity = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
      {/* Floating Background Shapes */}
      <FloatingShapes />

      {/* Waves Background */}
      <WavesBackground />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 hover:from-purple-800 hover:via-fuchsia-700 hover:to-pink-700 transition-colors duration-300 animate-fade-in">
            Welcome to BeCommunity
          </h1>
          <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 mt-4 animate-fade-in-delay">
            Where IIEST students connect, collaborate, and grow.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {/* Events Section */}
          <section className="bg-gradient-to-r from-white via-purple-50 to-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 animate-slide-in-right border-2 border-animate">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 hover:from-purple-700 hover:via-fuchsia-700 hover:to-pink-700 transition-colors duration-300 mb-6 text-center">
              Upcoming Events
            </h2>
            <div className="h-[600px] overflow-y-auto custom-scrollbar">
              <EventsList />
            </div>
          </section>

          {/* Posts Section */}
          <section className="bg-gradient-to-r from-white via-blue-50 to-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 animate-slide-in-left border-2 border-animate">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 hover:from-purple-700 hover:via-fuchsia-700 hover:to-pink-700 transition-colors duration-300 mb-6 text-center">
              Latest Posts
            </h2>
            <div className="h-[600px] overflow-y-auto custom-scrollbar">
              <PostList />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BeCommunity;
