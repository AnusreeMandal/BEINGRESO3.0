
'use client';
import React, { useState } from "react";
import { Plus } from 'lucide-react'; // Import icon
import EventsList from "../../components/eventlist";
import PostList from "../../components/PostList";
import WavesBackground from "../../components/WavesBackground";

const BeCommunity = () => {
  const [showCreatePost, setShowCreatePost] = useState(false);

  const handleCreatePost = () => {
    setShowCreatePost(true);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
      {/* Waves Background */}
      <WavesBackground />

      <div className="container mx-auto px-4 py-4">
        <div className="text-center mb-4">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 hover:from-purple-800 hover:via-fuchsia-700 hover:to-pink-700 transition-colors duration-300 animate-fade-in">
            Welcome to BeCommunity
          </h1>
          <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 mt-4 animate-fade-in-delay">
            Where IIEST students connect, collaborate, and grow.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar */}
        <div className="w-full lg:w-1/4 space-y-8">
          <section className="bg-gradient-to-r from-white via-purple-50 to-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 animate-slide-in-right border-2 border-animate">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 hover:from-purple-700 hover:via-fuchsia-700 hover:to-pink-700 transition-colors duration-300 mb-6 text-center">
              Upcoming Events
            </h2>
            <div className="space-y-4">
              <EventsList />
            </div>
            <button className="mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors shadow-md hover:shadow-lg">
              View All Events
            </button>
          </section>
        </div>

        {/* Main Content Area */}
        <div className="w-full lg:w-2/4 space-y-4">
          <div className="flex justify-between items-center p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 hover:from-purple-700 hover:via-fuchsia-700 hover:to-pink-700 transition-colors duration-300 mb-6 text-center mx-auto">
              Community Posts
            </h2>
            <button
              onClick={handleCreatePost}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-colors shadow-md hover:shadow-lg"
            >
              <Plus size={24} />
            </button>
          </div>

          {showCreatePost && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              {/* Post Creation Area */}
              <textarea
                className="w-full p-4 border border-gray-300 rounded-lg mb-4"
                placeholder="What's on your mind?"
              />
              <div className="flex gap-4">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors shadow-md hover:shadow-lg">
                  Add Image/Video
                </button>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors shadow-md hover:shadow-lg">
                  Tag Users
                </button>
              </div>
            </div>
          )}

          <div className="h-[600px] overflow-y-auto custom-scrollbar">
            <PostList />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-1/4 space-y-8">
          <div className="bg-gradient-to-r from-white via-purple-50 to-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 animate-slide-in-right border-2 border-animate">
            {/* Placeholder for future content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeCommunity;