import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";

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
    category: "competition",
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
    category: "mobile",
  },
  {
    id: 3,
    type: "achievement",
    author: "Emma Watson",
    title: "Published a Research Paper on Quantum Computing",
    content: "Our paper on quantum computing has been accepted...",
    likes: 50,
    comments: 15,
    shares: 10,
    avatar: "/api/placeholder/32/32",
    category: "research",
  },
  {
    id: 4,
    type: "project",
    author: "John Doe",
    title: "Launching a Startup: Eco-Friendly Packaging",
    content: "Looking for partners to join a startup focused on eco-friendly packaging solutions...",
    likes: 40,
    comments: 10,
    shares: 7,
    contributors: 2,
    maxContributors: 4,
    avatar: "/api/placeholder/32/32",
    category: "startup",
  },
  {
    id: 5,
    type: "achievement",
    author: "Alice Johnson",
    title: "Completed a Marathon",
    content: "Proud to have completed my first marathon with a great time...",
    likes: 60,
    comments: 20,
    shares: 12,
    avatar: "/api/placeholder/32/32",
    category: "sport",
  },
];

const PostList = () => {
  const [animatedPosts, setAnimatedPosts] = useState<any>({});

  useEffect(() => {
    posts.forEach((post, index) => {
      setTimeout(() => {
        setAnimatedPosts((prev: Record<number, boolean>) => ({
          ...prev,
          [post.id]: true,
        }));
      }, index * 200);
    });
  }, []);

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <div
          key={post.id}
          className={`group bg-gradient-to-r from-white to-purple-50 p-6 rounded-xl 
                     shadow-md hover:shadow-xl transition-all duration-500 
                     transform hover:translate-y-[-4px] hover:scale-[1.02]
                     relative overflow-hidden max-w-md mx-auto border-2 border-purple-100 border-animate`}
        >
          {/* Animated background gradients */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br 
                         from-purple-200 to-pink-200 rounded-full filter blur-2xl 
                         opacity-20 group-hover:opacity-40 transition-all duration-700
                         animate-pulse transform translate-x-16 -translate-y-8" />

          <div className="relative">
            <PostCard post={post} animated={animatedPosts[post.id]} />
          </div>

          {/* Hover effect without border */}
          <div className="absolute inset-0 border-2 border-transparent 
                         group-hover:border-purple-200 rounded-xl 
                         transition-all duration-500 pointer-events-none" />
        </div>
      ))}
    </div>
  );
};

export default PostList;
