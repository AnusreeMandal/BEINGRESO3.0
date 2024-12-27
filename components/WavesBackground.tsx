import React from 'react';

const WavesBackground = () => {
  return (
    <div className="relative">
      <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 320">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#6a0dad', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#ff00ff', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path fill="url(#gradient)" fillOpacity="1" d="M0,64L48,85.3C96,107,192,149,288,160C384,171,480,149,576,122.7C672,96,768,64,864,69.3C960,75,1056,117,1152,149.3C1248,181,1344,203,1392,213.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        <path fill="url(#gradient)" fillOpacity="0.6" d="M0,128L48,154.7C96,181,192,235,288,250.7C384,267,480,245,576,213.3C672,181,768,139,864,117.3C960,96,1056,96,1152,101.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
  );
};

export default WavesBackground;




