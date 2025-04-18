import React, { useState } from "react";

// Button 1: Advanced Gradient Button with Shimmer Effect
export const GradientButton = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden px-6 py-3 font-semibold rounded-lg bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-600 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -skew-x-12 animate-shimmer"></span>
    </button>
  );
};

// Button 2: Elevated Outlined Button with Better Interactions
export const OutlinedButton = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`group relative px-6 py-3 font-semibold rounded-lg border-2 border-blue-500 text-blue-600 overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:text-white ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-blue-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
    </button>
  );
};

// Button 3: Enhanced Neon Button with Pulse Effect
export const NeonButton = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`relative px-6 py-3 font-bold rounded-lg bg-black text-green-400 border-2 border-green-400 shadow-lg shadow-green-500/20 transition-all duration-300 hover:text-green-300 hover:border-green-300 hover:shadow-green-400/50 focus:outline-none ${className}`}
    >
      <span className="relative z-10 mix-blend-screen">{children}</span>
      <span className="absolute inset-0 rounded-lg border-2 border-green-400 opacity-70 animate-pulse"></span>
    </button>
  );
};

// Button 4: Premium Pill Button with Improved Icon Support
export const PillButton = ({ children, onClick, className = "", icon }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center px-6 py-3 font-semibold rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white space-x-2 transform transition-all duration-300 hover:from-pink-600 hover:to-rose-600 hover:shadow-lg hover:shadow-pink-500/30 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

// Button 5: Advanced Glass Button with Better Effects
export const GlassButton = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`group relative px-6 py-3 font-semibold rounded-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg text-white border border-white border-opacity-20 shadow-lg transition-all duration-300 hover:bg-opacity-20 hover:shadow-white/20 focus:outline-none ${className}`}
    >
      <span>{children}</span>
      <span className="absolute inset-0 rounded-lg bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    </button>
  );
};

// Button 6: Premium 3D Button with Enhanced Depth Effect
export const ThreeDButton = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`group relative px-6 py-3 font-bold rounded-lg bg-blue-500 text-white border-b-4 border-blue-700 shadow-lg transform transition-all duration-150 hover:bg-blue-400 hover:translate-y-0.5 hover:border-b-2 active:translate-y-1 active:border-b-0 focus:outline-none ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-t-lg"></span>
    </button>
  );
};

// Button 7: Enhanced Toggle Button with State Animation
export const ToggleButton = ({
  isActive,
  onClick,
  activeIcon,
  inactiveIcon,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`p-4 rounded-full transition-all duration-300 focus:outline-none shadow-md ${
        isActive
          ? "bg-gradient-to-r from-green-400 to-green-500 text-white shadow-green-400/30"
          : "bg-gray-200 text-gray-600 hover:bg-gray-300 shadow-gray-400/20"
      } ${className}`}
    >
      <div className="relative">
        <div
          className={`transition-opacity duration-300 ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
        >
          {activeIcon}
        </div>
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            isActive ? "opacity-0" : "opacity-100"
          }`}
        >
          {inactiveIcon}
        </div>
      </div>
    </button>
  );
};

// Button 8: Premium Arrow Button with Enhanced Animation
export const ArrowButton = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`group relative px-6 py-3 font-semibold rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-700 text-white flex items-center justify-center overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`}
    >
      <span className="mr-2 transform transition-transform duration-300 group-hover:translate-x-[-4px]">
        {children}
      </span>
      <svg
        className="h-5 w-5 transform transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
      <span className="absolute bottom-0 left-0 w-full h-1 bg-white opacity-0 transform origin-left scale-x-0 group-hover:scale-x-100 group-hover:opacity-20 transition-transform duration-300"></span>
    </button>
  );
};

// Button 9: Advanced Pulse Button with Better Animation
export const PulseButton = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`relative px-6 py-3 font-semibold rounded-lg bg-gradient-to-r from-yellow-400 to-amber-500 text-white transition-all duration-300 hover:from-yellow-500 hover:to-amber-600 hover:shadow-lg hover:shadow-amber-400/30 focus:outline-none ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-400 to-amber-500 animate-pulse-slow opacity-60"></span>
      <span className="absolute -inset-1 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 opacity-30 blur-sm animate-pulse"></span>
    </button>
  );
};

// Button 10: Premium Minimal Button with Enhanced Hover Effect
export const MinimalButton = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`group relative px-6 py-3 font-medium text-gray-700 hover:text-gray-900 overflow-hidden transition-all duration-300 focus:outline-none ${className}`}
    >
      <span>{children}</span>
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
      <span className="absolute -bottom-1 left-0 w-2 h-2 rounded-full bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300"></span>
    </button>
  );
};

// Button 11: NEW - Floating Action Button
export const FloatingActionButton = ({ icon, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`p-4 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 text-white shadow-lg shadow-indigo-600/30 transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-indigo-600/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`}
    >
      <span className="flex items-center justify-center">{icon}</span>
    </button>
  );
};

// Button 12: NEW - Splash Effect Button
export const SplashButton = ({ children, onClick, className = "" }) => {
  const [rippleEffect, setRippleEffect] = useState({
    active: false,
    x: 0,
    y: 0,
  });

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setRippleEffect({
      active: true,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    setTimeout(() => {
      setRippleEffect({ active: false, x: 0, y: 0 });
    }, 600);

    if (onClick) onClick(e);
  };

  return (
    <button
      onClick={handleClick}
      className={`relative px-6 py-3 font-semibold rounded-lg bg-teal-500 text-white overflow-hidden transition-all duration-300 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {rippleEffect.active && (
        <span
          className="absolute rounded-full bg-white/30 animate-ripple"
          style={{
            top: rippleEffect.y,
            left: rippleEffect.x,
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
    </button>
  );
};

export const UnderlineRevealButton = ({
  children,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`group relative px-6 py-3 font-medium text-indigo-600 transition-all duration-300 focus:outline-none ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute left-0 bottom-0 h-0.5 w-full bg-indigo-600 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      <span className="absolute right-0 bottom-0 h-0.5 w-0 bg-indigo-600 transition-all duration-300 delay-300 group-hover:w-full"></span>
    </button>
  );
};

// Button 14: NEW - Border Slide Button
export const BorderSlideButton = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`group relative px-6 py-3 font-semibold text-gray-800 transition-colors duration-300 ease-in-out hover:text-indigo-600 focus:outline-none ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {/* Top border */}
      <span className="absolute left-0 top-0 h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
      {/* Right border */}
      <span className="absolute right-0 top-0 h-0 w-0.5 bg-indigo-600 transition-all duration-300 delay-100 group-hover:h-full"></span>
      {/* Bottom border */}
      <span className="absolute right-0 bottom-0 h-0.5 w-0 bg-indigo-600 transition-all duration-300 delay-200 group-hover:w-full"></span>
      {/* Left border */}
      <span className="absolute left-0 bottom-0 h-0 w-0.5 bg-indigo-600 transition-all duration-300 delay-300 group-hover:h-full"></span>
    </button>
  );
};

// Button 15: NEW - Spotlight Hover Button
export const SpotlightButton = ({ children, onClick, className = "" }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <button
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`relative px-6 py-3 font-semibold text-white bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {isHovering && (
        <span
          className="absolute bg-gradient-to-r from-gray-700 to-gray-600 w-32 h-32 rounded-full opacity-60 blur-md transition-all duration-300"
          style={{
            top: mousePosition.y,
            left: mousePosition.x,
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
    </button>
  );
};

// Button 16: NEW - Scale Icon Button
export const ScaleIconButton = ({
  children,
  icon,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`group flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${className}`}
    >
      <span className="transform transition-transform duration-300 group-hover:scale-95">
        {children}
      </span>
      <span className="transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
        {icon}
      </span>
    </button>
  );
};

// Button 17: NEW - Classic Slide Fill Button
export const SlideFillButton = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`group relative px-6 py-3 font-semibold rounded-lg border-2 border-emerald-500 text-emerald-500 transition-colors duration-300 overflow-hidden hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-emerald-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
    </button>
  );
};

// Add CSS to your global styles
const cssForButtons = `
@keyframes shimmer {
  0% { transform: translateX(-100%) skewX(-12deg); }
  100% { transform: translateX(200%) skewX(-12deg); }
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 0.3; }
}

@keyframes ripple {
  0% {
    width: 0;
    height: 0;
    opacity: 0.6;
  }
  100% {
    width: 500px;
    height: 500px;
    opacity: 0;
  }
}

.animate-shimmer {
  animation: shimmer 2.5s infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 3s infinite;
}

.animate-ripple {
  animation: ripple 0.6s linear;
}
`;

// Export all buttons as a collection
const CoolButtons = {
  GradientButton,
  OutlinedButton,
  NeonButton,
  PillButton,
  GlassButton,
  ThreeDButton,
  ToggleButton,
  ArrowButton,
  PulseButton,
  MinimalButton,
  FloatingActionButton,
  SplashButton,
  UnderlineRevealButton,
  BorderSlideButton,
  SpotlightButton,
  ScaleIconButton,
  SlideFillButton,
  cssForButtons,
};

export default CoolButtons;

// You can also add these additional CSS animations to your global styles
const additionalCss = `
@keyframes border-pulse {
  0%, 100% { 
    box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.4);
  }
  50% { 
    box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.2);
  }
}

.animate-border-pulse {
  animation: border-pulse 2s infinite;
}
`;
