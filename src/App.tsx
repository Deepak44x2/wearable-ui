import React, { useState, useEffect } from 'react';
import { Eye, Palette, AlertTriangle, Camera, Sun, Moon } from 'lucide-react';

function App() {
  const [showMain, setShowMain] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMain(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Generate floating particles
  const particles = Array.from({ length: 30 }, (_, i) => (
    <div
      key={i}
      className={`absolute rounded-full opacity-20 animate-float-${i % 4}`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${Math.random() * 8 + 3}px`,
        height: `${Math.random() * 8 + 3}px`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${Math.random() * 15 + 15}s`,
      }}
    />
  ));

  return (
    <div className={`min-h-screen transition-all duration-500 overflow-hidden relative ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-blue-900 to-black text-white' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50 text-gray-900'
    }`}>
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className={`absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-30 animate-pulse-slow ${
          isDarkMode ? 'bg-blue-500' : 'bg-blue-300'
        }`} />
        <div className={`absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl opacity-25 animate-pulse-slow ${
          isDarkMode ? 'bg-purple-500' : 'bg-purple-300'
        }`} style={{ animationDelay: '2s' }} />
        <div className={`absolute top-1/2 right-1/3 w-[350px] h-[350px] rounded-full blur-3xl opacity-20 animate-pulse-slow ${
          isDarkMode ? 'bg-pink-500' : 'bg-pink-300'
        }`} style={{ animationDelay: '4s' }} />
        <div className={`absolute top-3/4 left-1/2 w-[300px] h-[300px] rounded-full blur-3xl opacity-15 animate-pulse-slow ${
          isDarkMode ? 'bg-cyan-500' : 'bg-cyan-300'
        }`} style={{ animationDelay: '6s' }} />
        <div className={`absolute top-1/6 right-1/2 w-[250px] h-[250px] rounded-full blur-3xl opacity-18 animate-pulse-slow ${
          isDarkMode ? 'bg-indigo-500' : 'bg-indigo-300'
        }`} style={{ animationDelay: '8s' }} />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {particles.map((particle, i) => (
            <div
              key={i}
              className={`${particle.props.className} ${
                isDarkMode ? 'bg-blue-400' : 'bg-indigo-400'
              }`}
              style={particle.props.style}
            />
          ))}
        </div>

        {/* Geometric Grid */}
        <div className={`absolute inset-0 opacity-5 ${
          isDarkMode ? 'bg-grid-white' : 'bg-grid-gray'
        }`} />
      </div>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-110 ${
          isDarkMode 
            ? 'bg-white/10 border-white/20 text-white hover:bg-white/20' 
            : 'bg-black/10 border-black/20 text-gray-900 hover:bg-black/20'
        }`}
      >
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      {/* Welcome Screen */}
      <div 
        className={`fixed inset-0 flex items-center justify-center transition-opacity duration-1000 z-10 ${
          showMain ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <h1 className={`text-6xl md:text-8xl lg:text-9xl font-bold text-center animate-pulse ${
          isDarkMode ? 'welcome-glow-dark' : 'welcome-glow-light'
        }`}>
          WELCOME
        </h1>
      </div>

      {/* Main UI */}
      <div 
        className={`relative z-20 transition-opacity duration-1000 ${
          showMain ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-8 md:py-16">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black mb-4 ${
              isDarkMode ? 'ai-powered-gradient-dark' : 'ai-powered-gradient-light'
            }`}>
              AI POWERED
            </h1>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
              isDarkMode ? 'text-blue-400' : 'text-blue-600'
            }`}>
              WEARABLE ASSISTANT
            </h2>
            <p className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Experience the future of wearable technology with cutting-edge AI capabilities
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {/* Face Recognition Card */}
            <div className={`feature-card p-6 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 ${
              isDarkMode 
                ? 'bg-gradient-to-br from-pink-500 to-rose-600 hover:shadow-pink-500/25' 
                : 'bg-gradient-to-br from-pink-400 to-rose-500 hover:shadow-pink-400/25'
            }`}>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-white/20 rounded-full backdrop-blur-sm">
                  <Eye size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Face Recognition</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  Advanced facial detection and recognition technology
                </p>
              </div>
            </div>

            {/* Color Detector Card */}
            <div className={`feature-card p-6 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 ${
              isDarkMode 
                ? 'bg-gradient-to-br from-teal-500 to-cyan-600 hover:shadow-teal-500/25' 
                : 'bg-gradient-to-br from-teal-400 to-cyan-500 hover:shadow-teal-400/25'
            }`}>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-white/20 rounded-full backdrop-blur-sm">
                  <Palette size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white" >Color Detector</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  Real-time color identification and analysis
                </p>
              </div>
            </div>

            {/* SOS Card */}
            <div className={`feature-card p-6 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 ${
              isDarkMode 
                ? 'bg-gradient-to-br from-orange-500 to-red-600 hover:shadow-orange-500/25' 
                : 'bg-gradient-to-br from-orange-400 to-red-500 hover:shadow-orange-400/25'
            }`}>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-white/20 rounded-full backdrop-blur-sm">
                  <AlertTriangle size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">SOS</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  Emergency assistance and alert system
                </p>
              </div>
            </div>

            {/* Object Detection Card */}
            <div className={`feature-card p-6 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 ${
              isDarkMode 
                ? 'bg-gradient-to-br from-purple-500 to-indigo-600 hover:shadow-purple-500/25' 
                : 'bg-gradient-to-br from-purple-400 to-indigo-500 hover:shadow-purple-400/25'
            }`}>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-white/20 rounded-full backdrop-blur-sm">
                  <Camera size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Object Detection</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  Intelligent object recognition and identification
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-center">
            <div className={`backdrop-blur-md border rounded-2xl px-8 py-4 ${
              isDarkMode 
                ? 'bg-white/10 border-white/20' 
                : 'bg-black/10 border-black/20'
            }`}>
              <p className={`font-medium text-lg ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Made by Syntax Samaj
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;