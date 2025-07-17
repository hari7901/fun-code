import { motion, useScroll, useTransform } from "framer-motion";
import {
  Menu,
  X,
  Mail,
  Sparkles,
  Zap,
  Brain,
  Star,
  Shield,
  ArrowRight,
  User,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "../ui/Button";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const { user, isAuthenticated, logout } = useAuth();

  // Parallax effect for header
  const headerY = useTransform(scrollY, [0, 300], [0, -50]);
  const headerOpacity = useTransform(scrollY, [0, 100, 200], [1, 0.9, 0.8]);

  // Track scroll position for dynamic effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setIsUserMenuOpen(false);
      }
    };

    if (isUserMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isUserMenuOpen]);

  const handleLogout = async () => {
    await logout();
    setIsUserMenuOpen(false);
  };

  const menuItems = [
    { label: "Features", href: "#features", icon: Sparkles },
    { label: "Pricing", href: "#pricing", icon: Zap },
    { label: "Testimonials", href: "#testimonials", icon: Star },
    { label: "Contact", href: "#contact", icon: Shield },
  ];

  // Floating particles for background
  const particles = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    x: 20 + i * 20,
    delay: i * 0.8,
    duration: 8 + i * 2,
  }));

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        y: headerY,
        opacity: headerOpacity,
        boxShadow: scrolled
          ? "0 8px 32px rgba(0, 0, 0, 0.4), 0 0 50px rgba(59, 130, 246, 0.1)"
          : "0 4px 16px rgba(0, 0, 0, 0.2)",
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-morphism backdrop-blur-xl bg-black/90 border-b border-gray-800/50 shadow-2xl"
          : "glass-morphism backdrop-blur-xl bg-black/70 border-b border-gray-800/30"
      }`}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
              y: [100, -20],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeOut",
            }}
            className="absolute w-1 h-1 bg-blue-400/50 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: "100%",
            }}
          />
        ))}
      </div>

      <nav className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo with Advanced Animations */}
          <motion.div
            whileHover={{
              scale: 1.05,
              rotateY: 5,
            }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-3 cursor-pointer max-w-fit group"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Logo Container with 3D Effect */}
            <div className="relative flex-shrink-0">
              {/* Holographic Background Glow */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-emerald-500/30 rounded-xl blur-md"
              />

              {/* Orbital Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-12 h-12 border border-blue-400/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-12 h-12 border border-purple-400/20 rounded-full scale-90"
              />

              {/* Main Logo with Floating Effect */}
              <motion.div
                animate={{
                  y: [0, -3, 0],
                  rotateX: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 p-3 rounded-xl shadow-2xl border border-blue-500/30 group-hover:border-blue-400/50"
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Mail className="h-6 w-6 text-white drop-shadow-lg" />
                </motion.div>

                {/* Inner Glow Effect */}
                <motion.div
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl"
                />
              </motion.div>

              {/* AI Indicator with Pulse */}
              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full border-2 border-black shadow-lg"
              >
                <motion.div
                  animate={{
                    scale: [0, 1.5, 0],
                    opacity: [0.8, 0, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className="absolute inset-0 bg-emerald-400/50 rounded-full"
                />
              </motion.div>

              {/* Floating Sparkles */}
              {Array.from({ length: 3 }, (_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    x: [0, (i - 1) * 20],
                    y: [0, -15 - i * 5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.8,
                    ease: "easeOut",
                  }}
                  className="absolute top-0 left-1/2 w-1 h-1 bg-white rounded-full"
                />
              ))}
            </div>

            {/* Enhanced Brand Text */}
            <div className="flex flex-col justify-center min-w-0">
              <div className="flex items-center space-x-2">
                <motion.h1
                  whileHover={{
                    scale: 1.02,
                    textShadow: "0 0 8px rgba(59, 130, 246, 0.5)",
                  }}
                  className="text-xl sm:text-2xl font-bold text-white tracking-tight"
                >
                  SmartMail
                </motion.h1>
                <motion.span
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent"
                  style={{ backgroundSize: "200% 200%" }}
                >
                  AI
                </motion.span>
              </div>

              {/* Enhanced Subtitle */}
              <div className="hidden sm:flex items-center space-x-2 mt-1">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Brain className="h-3 w-3 text-blue-400" />
                </motion.div>
                <motion.span
                  animate={{
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-xs text-gray-300 font-medium truncate"
                >
                  Neural Intelligence
                </motion.span>
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="w-1 h-1 bg-emerald-400 rounded-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation with Enhanced Animations */}
          <div className="hidden md:flex items-center space-x-10">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1 + 0.5,
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{
                  y: -2,
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.98 }}
                className="relative text-white hover:text-blue-400 font-semibold transition-colors duration-200 group"
              >
                {item.label}

                {/* Animated Underline */}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Enhanced CTA Buttons / User Profile */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              // User Profile Section
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors p-2 rounded-lg hover:bg-gray-800/50"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium">{user?.name}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* User Dropdown Menu */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg shadow-xl z-50">
                    <div className="p-3 border-b border-white/10">
                      <p className="text-white text-sm font-medium">
                        {user?.name}
                      </p>
                      <p className="text-gray-300 text-xs">{user?.email}</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-white hover:bg-red-600/20 transition-colors text-sm"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              // Auth Buttons for non-authenticated users
              <>
                <div>
                  <Link to="/login">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white hover:text-white hover:bg-gray-800/50 border-gray-700/50"
                    >
                      Sign In
                    </Button>
                  </Link>
                </div>

                <div>
                  <Link to="/signup">
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                    >
                      Sign Up
                    </Button>
                  </Link>
                </div>
              </>
            )}
          </div>

          {/* Ultra-Enhanced Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{
              delay: 1,
              duration: 0.8,
              type: "spring",
              stiffness: 200,
            }}
            whileTap={{ scale: 0.9, rotate: 10 }}
            whileHover={{
              scale: 1.1,
              rotateY: 10,
              rotateX: 5,
            }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative p-3 rounded-xl bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-emerald-600/20 border border-blue-500/30 backdrop-blur-xl text-white transition-all duration-300 group overflow-hidden"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Dynamic Background Effects */}
            <motion.div
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20 rounded-xl blur-md"
            />

            {/* Orbital Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-blue-400/30 rounded-xl"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-purple-400/20 rounded-xl scale-90"
            />

            {/* Enhanced Menu Icon with Morphing Animation */}
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
              className="relative z-10"
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                {isMenuOpen ? (
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 90 }}
                    transition={{ duration: 0.3, type: "spring" }}
                  >
                    <X className="h-6 w-6 text-white drop-shadow-lg" />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ scale: 0, rotate: 90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: -90 }}
                    transition={{ duration: 0.3, type: "spring" }}
                    className="relative"
                  >
                    <Menu className="h-6 w-6 text-white drop-shadow-lg" />

                    {/* Floating Dots Around Menu Icon */}
                    {Array.from({ length: 4 }, (_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          x: [0, Math.cos((i * Math.PI) / 2) * 12],
                          y: [0, Math.sin((i * Math.PI) / 2) * 12],
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.5,
                          ease: "easeInOut",
                        }}
                        className="absolute top-1/2 left-1/2 w-1 h-1 bg-blue-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                      />
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Click Wave Effect */}
            <motion.div
              animate={
                isMenuOpen
                  ? {
                      scale: [0, 2, 0],
                      opacity: [0.8, 0.2, 0],
                    }
                  : {}
              }
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-purple-500/40 rounded-xl"
            />

            {/* Pulse Ring on Hover */}
            <motion.div
              initial={{ scale: 1, opacity: 0 }}
              whileHover={{
                scale: [1, 1.3, 1.6],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="absolute inset-0 border-2 border-blue-400/50 rounded-xl"
            />
          </motion.button>
        </div>

        {/* Revolutionary Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="md:hidden overflow-hidden"
        >
          <motion.div
            className="relative py-8 space-y-6 mx-4 mb-4 rounded-3xl border border-blue-500/20 backdrop-blur-xl overflow-hidden"
            initial={{ y: -30, scale: 0.95 }}
            animate={{
              y: isMenuOpen ? 0 : -30,
              scale: isMenuOpen ? 1 : 0.95,
            }}
            transition={{
              delay: 0.1,
              duration: 0.5,
              type: "spring",
              stiffness: 200,
            }}
            style={{
              background:
                "linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(17,24,39,0.9) 50%, rgba(0,0,0,0.95) 100%)",
            }}
          >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Flowing Gradient Overlay */}
              <motion.div
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 opacity-20"
                style={{
                  background:
                    "linear-gradient(45deg, #3b82f6, #8b5cf6, #10b981, #3b82f6)",
                  backgroundSize: "300% 300%",
                }}
              />

              {/* Floating Particles */}
              {Array.from({ length: 12 }, (_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    x: [0, Math.random() * 100 - 50],
                    y: [0, Math.random() * 200 - 100],
                    opacity: [0, 0.6, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 6 + Math.random() * 4,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut",
                  }}
                  className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                  style={{
                    left: `${10 + i * 8}%`,
                    top: `${10 + i * 7}%`,
                  }}
                />
              ))}

              {/* Neural Network Lines */}
              <svg className="absolute inset-0 w-full h-full">
                {Array.from({ length: 6 }, (_, i) => (
                  <motion.line
                    key={i}
                    x1={`${i * 20}%`}
                    y1="0%"
                    x2={`${100 - i * 15}%`}
                    y2="100%"
                    stroke="url(#gradient)"
                    strokeWidth="1"
                    opacity="0.3"
                    animate={{
                      pathLength: [0, 1, 0],
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut",
                    }}
                  />
                ))}
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Enhanced Mobile Menu Items */}
            <div className="relative z-10 space-y-4">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -50, rotateY: -30 }}
                  animate={{
                    opacity: isMenuOpen ? 1 : 0,
                    x: isMenuOpen ? 0 : -50,
                    rotateY: isMenuOpen ? 0 : -30,
                  }}
                  transition={{
                    delay: index * 0.1 + 0.3,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{
                    x: 10,
                    scale: 1.02,
                    rotateY: 5,
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                  }}
                  whileTap={{
                    scale: 0.98,
                    x: 5,
                  }}
                  className="relative block text-gray-200 hover:text-white font-semibold transition-all duration-300 px-6 py-4 rounded-xl border border-transparent hover:border-blue-500/30 group overflow-hidden"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Menu Item Background Glow */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{
                      scale: 1,
                      opacity: 0.3,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl"
                  />

                  {/* Menu Item Content */}
                  <div className="relative flex items-center space-x-3">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="text-blue-400 flex items-center justify-center"
                    >
                      <item.icon className="h-5 w-5" />
                    </motion.div>
                    <span className="font-medium tracking-wide">
                      {item.label}
                    </span>

                    {/* Hover Arrow */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-auto"
                    >
                      <ArrowRight className="h-4 w-4 text-blue-400" />
                    </motion.div>
                  </div>

                  {/* Ripple Effect */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileTap={{
                      scale: [0, 1.5, 0],
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-xl"
                  />
                </motion.a>
              ))}
            </div>

            {/* Enhanced Mobile CTA Buttons */}
            <div className="relative z-10 pt-6 space-y-4 px-6 border-t border-gray-700/30">
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{
                  opacity: isMenuOpen ? 1 : 0,
                  y: isMenuOpen ? 0 : 30,
                  scale: isMenuOpen ? 1 : 0.9,
                }}
                transition={{
                  delay: 0.7,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="ghost"
                  className="w-full justify-center text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 py-3 rounded-xl backdrop-blur-sm"
                >
                  <motion.span
                    whileHover={{ x: [0, 2, 0] }}
                    transition={{ duration: 0.3 }}
                  >
                    Sign In
                  </motion.span>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{
                  opacity: isMenuOpen ? 1 : 0,
                  y: isMenuOpen ? 0 : 30,
                  scale: isMenuOpen ? 1 : 0.9,
                }}
                transition={{
                  delay: 0.8,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="gradient"
                  className="w-full group relative overflow-hidden py-3 rounded-xl"
                >
                  {/* Dynamic Gradient Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600"
                    animate={{
                      x: ["-100%", "100%"],
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      x: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                      backgroundPosition: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      },
                    }}
                    style={{ backgroundSize: "200% 200%" }}
                  />

                  {/* Button Content */}
                  <span className="relative z-10 flex items-center justify-center space-x-2 font-semibold">
                    <motion.span
                      whileHover={{ x: [0, 3, 0] }}
                      transition={{ duration: 0.4 }}
                    >
                      Get Started Free
                    </motion.span>
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </span>

                  {/* Shimmer Effect */}
                  <motion.div
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                  />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </nav>
    </motion.header>
  );
};
