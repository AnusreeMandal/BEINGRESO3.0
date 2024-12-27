import React, { useState, useEffect } from "react";
import { Star } from 'lucide-react';
import PostActions from "./PostActions";

const PostCard = ({ post, animated }: { post: any, animated: boolean }) => {
  const [contributors, setContributors] = useState(post.contributors || 0);
  const [progress, setProgress] = useState(post.progress || 0); // Manage project's progress

  const handleJoin = () => {
    if (contributors < post.maxContributors) {
      setContributors(contributors + 1);
    }
  };

  useEffect(() => {
    if (post.type === 'achievement') {
      // Achievement-specific animation
    } else if (post.type === 'project') {
      // Project-specific animation
    }
  }, [post.type]);

  return (
    <div
      className={`group bg-gradient-to-r from-white to-purple-50 p-6 rounded-xl 
                 shadow-md hover:shadow-xl transition-all duration-500 
                 transform hover:translate-y-[-4px] hover:scale-[1.02]
                 relative overflow-hidden max-w-md mx-auto
                 ${animated ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}
                 ${post.type === 'achievement' ? 'glow-effect' : post.type === 'project' ? 'project-glow-effect' : ''}`}
    >
      {/* Animated background gradients */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br 
                   from-purple-200 to-pink-200 rounded-full filter blur-2xl 
                   opacity-20 group-hover:opacity-40 transition-all duration-700
                   animate-pulse transform translate-x-16 -translate-y-8" />

      <div className="relative">
        <div className="flex items-start gap-4">
          {/* Avatar Section */}
          <div className="relative group">
            <img
              src={post.avatar}
              alt={post.author}
              className="w-12 h-12 rounded-full border-2 border-purple-200 group-hover:scale-110 transition-transform duration-300"
            />
            <div className={`absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs animate-bounce 
              ${post.type === 'achievement' ? 'pulse sparkle' : post.type === 'project' ? 'project-pulse project-sparkle' : ''}`}>
              {post.type === 'achievement' ? '🏆' : '🚀'}
            </div>
          </div>
          
          {/* Content Section */}
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-purple-800">{post.author}</span>
              {post.type === "achievement" && (
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 text-xs px-3 py-1 rounded-full flex items-center gap-1">
                  <Star size={12} className="animate-spin-slow" />
                  Achievement
                </span>
              )}
              {post.type === "project" && (
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-gray-900 text-xs px-3 py-1 rounded-full">
                  Project
                </span>
              )}
            </div>
            <h3 className="font-semibold mt-2 text-purple-900 text-shadow">{post.title}</h3>
            <p className="text-gray-800 mt-1">{post.content}</p>
            
            {post.type === "project" && (
              <div className="mt-4">
                <div className="flex items-center gap-2">
                  <progress value={progress} max="100" className="w-full"></progress>
                  <span className="text-sm text-gray-600">{progress}% Complete</span>
                </div>
                <button 
                  onClick={handleJoin}
                  disabled={contributors >= post.maxContributors}
                  className="mt-2 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-medium rounded-lg px-4 py-2 transition-all duration-300"
                >
                  {contributors >= post.maxContributors ? "Full" : "Join Project"}
                </button>
                <span className="text-sm text-gray-600 ml-2">{contributors}/{post.maxContributors} joined</span>
              </div>
            )}
            
            <PostActions post={post} />
          </div>
        </div>
      </div>

      {/* Hover effect with reduced border */}
      <div className="absolute inset-0 border-2 border-transparent 
                     group-hover:border-purple-200 rounded-xl 
                     transition-all duration-500 pointer-events-none" />
    </div>
  );
};

export default PostCard;
