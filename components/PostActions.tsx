import React, { useState } from "react";
import { MessageCircle, Share2 } from 'lucide-react';

const PostActions = ({ post }: { post: any }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="flex items-center gap-6 mt-6">
      {/* Like Button */}
      <button 
        onClick={handleLike}
        className="flex items-center gap-2 text-purple-600 hover:text-red-500 transition-colors group"
      >
        <span className={`transform transition-transform ${liked ? 'scale-125' : 'scale-100'}`}>
          {liked ? '❤️' : '🤍'}
        </span>
        <span className="font-semibold">{post.likes + (liked ? 1 : 0)}</span>
      </button>
      
      {/* Comments Button */}
      <button className="flex items-center gap-2 text-purple-600 hover:text-purple-400 transition-colors group">
        <MessageCircle size={20} />
        <span className="font-semibold">{post.comments}</span>
      </button>
      
      {/* Share Button */}
      <button className="flex items-center gap-2 text-purple-600 hover:text-blue-400 transition-colors group">
        <Share2 size={20} />
        <span className="font-semibold">{post.shares}</span>
      </button>
    </div>
  );
};

export default PostActions;
