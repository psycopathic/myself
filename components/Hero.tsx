'use client';
import { useState } from 'react';
import Galaxy from './Galaxy';
import SplitText from './SplitText';

export default function Hero() {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Galaxy Background */}
      <div className="absolute inset-0 z-0 bg-slate-950">
        <Galaxy
          mouseRepulsion
          mouseInteraction
          density={1.5}
          glowIntensity={0.8}
          saturation={0}
          hueShift={0}
          twinkleIntensity={0.5}
          rotationSpeed={0.02}
          repulsionStrength={2.5}
          starSpeed={0.3}
          speed={0.8}
          transparent={false}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto text-center">
          <SplitText
            text="Hello, I'm Harsh"
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg block"
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 font-light drop-shadow-md">
            Full Stack MERN Developer | Building Beautiful Web Experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-200 transform hover:scale-105">
              Download Resume
            </button>
            <button className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200">
              View My Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
