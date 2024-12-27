import React from "react";

const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-32 h-32 rounded-full mix-blend-multiply filter blur-xl animate-float-${i + 1}`}
          style={{
            background: `radial-gradient(circle, ${[
              "rgba(52, 211, 153, 0.2)",  // Soft green
              "rgba(29, 78, 216, 0.2)",   // Soft blue
              "rgba(255, 165, 0, 0.2)",   // Soft orange
            ][i % 3]} 0%, rgba(255,255,255,0) 70%)`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;
