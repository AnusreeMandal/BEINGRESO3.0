import React, { useState, useEffect } from 'react';
import { Calendar, Users, Award, ChevronRight, ArrowUpRight, Sparkles, Star, MessageCircle, Share2 } from 'lucide-react';

// Floating background shapes component
const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-32 h-32 rounded-full mix-blend-multiply filter blur-xl animate-float-${i + 1}`}
          style={{
            background: `radial-gradient(circle, ${['rgba(147,51,234,0.2)', 'rgba(219,39,119,0.2)', 'rgba(124,58,237,0.2)'][i % 3]} 0%, rgba(255,255,255,0) 70%)`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

const events = [
  {
    id: 1,
    title: "Tech Hackathon 2024",
    date: "2024-12-30",
    time: "09:00 AM",
    location: "Main Campus",
    description: "Join us for a 24-hour coding challenge!",
    category: "hackathon",
    attendees: 45
  },
  {
    id: 2,
    title: "AI Workshop Series",
    date: "2024-12-28",
    time: "02:00 PM",
    location: "Innovation Lab",
    description: "Learn about the latest in artificial intelligence",
    category: "workshop",
    attendees: 32
  }
];

const posts = [
  {
    id: 1,
    type: "achievement",
    author: "Sarah Chen",
    title: "Won First Place in National Coding Competition",
    content: "Excited to share that our team won first place...",
    likes: 45,
    comments: 12,
    shares: 8,
    avatar: "/api/placeholder/32/32",
    category: "competition"
  },
  {
    id: 2,
    type: "project",
    author: "Alex Kumar",
    title: "Seeking Contributors: AR Campus Tour App",
    content: "Building an AR-powered campus tour guide. Need React Native developers...",
    likes: 32,
    comments: 8,
    shares: 5,
    contributors: 3,
    maxContributors: 5,
    avatar: "/api/placeholder/32/32",
    category: "mobile"
  }
];

const BeCommunity = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [likedPosts, setLikedPosts] = useState({});
  const [animatedPosts, setAnimatedPosts] = useState({});

  useEffect(() => {
    // Stagger animation for posts on mount
    posts.forEach((post, index) => {
      setTimeout(() => {
        setAnimatedPosts(prev => ({ ...prev, [post.id]: true }));
      }, index * 200);
    });
  }, []);

  const handleLike = (postId) => {
    setLikedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6 relative">
      <FloatingShapes />
      
      {/* Events and Updates Section */}
      <div className="mb-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 transform transition-all hover:scale-[1.02] duration-300 border border-purple-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full filter blur-2xl opacity-30 transform -translate-y-16 translate-x-16" />
        
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            <Calendar className="text-purple-600 animate-pulse" />
            Upcoming Events
          </h2>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center gap-2 group">
            View All 
            <ChevronRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {events.map((event) => (
            <div 
              key={event.id}
              className="p-4 bg-gradient-to-br from-white to-purple-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-purple-100 group"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg text-purple-800 group-hover:text-purple-600 transition-colors">{event.title}</h3>
                  <p className="text-purple-600 text-sm mt-1 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-purple-400 rounded-full animate-ping" />
                    {event.date} at {event.time}
                  </p>
                  <p className="text-purple-500 text-sm">{event.location}</p>
                </div>
                <button className="text-pink-600 hover:bg-pink-50 p-2 rounded-full transition-colors group-hover:rotate-45 transform duration-300">
                  <ArrowUpRight />
                </button>
              </div>
              <p className="mt-2 text-purple-700">{event.description}</p>
              <div className="mt-3 flex items-center gap-2 text-purple-500">
                <Users size={16} />
                <span>{event.attendees} attending</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Community Posts Section */}
      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-purple-100 relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full filter blur-3xl opacity-30 transform -translate-y-32 translate-x-32" />
        
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            <Users className="text-purple-600" />
            Community Posts
          </h2>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center gap-2 group">
            <Sparkles size={20} className="group-hover:rotate-180 transition-transform duration-500" />
            New Post
          </button>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <div 
              key={post.id}
              className={`bg-gradient-to-br from-white to-purple-50 rounded-xl p-6 hover:shadow-xl transition-all duration-500 border border-purple-100 transform ${
                animatedPosts[post.id] ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="relative group">
                  <img
                    src={post.avatar}
                    alt={post.author}
                    className="w-12 h-12 rounded-full border-2 border-purple-200 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs animate-bounce">
                    {post.type === 'achievement' ? '🏆' : '🚀'}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-purple-800">{post.author}</span>
                    {post.type === "achievement" && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                        <Star size={12} className="animate-spin-slow" />
                        Achievement
                      </span>
                    )}
                    {post.type === "project" && (
                      <span className="bg-gradient-to-r from-green-400 to-emerald-400 text-white text-xs px-3 py-1 rounded-full">
                        Project
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold mt-2 text-purple-900">{post.title}</h3>
                  <p className="text-purple-700 mt-1">{post.content}</p>
                  
                  <div className="flex items-center gap-4 mt-4">
                    <button 
                      onClick={() => handleLike(post.id)}
                      className="flex items-center gap-2 text-pink-600 hover:text-pink-700 transition-colors group"
                    >
                      <span className={`transform transition-transform ${likedPosts[post.id] ? 'scale-125' : 'scale-100'}`}>
                        {likedPosts[post.id] ? '❤️' : '🤍'}
                      </span>
                      <span>{post.likes + (likedPosts[post.id] ? 1 : 0)}</span>
                    </button>
                    <button className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors">
                      <MessageCircle size={20} />
                      <span>{post.comments}</span>
                    </button>
                    <button className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors">
                      <Share2 size={20} className="hover:rotate-45 transform transition-transform" />
                      <span>{post.shares}</span>
                    </button>
                    {post.type === "project" && (
                      <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 group">
                        <span className="group-hover:scale-110 inline-block transform transition-transform">
                          Join ({post.contributors}/{post.maxContributors})
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeCommunity;