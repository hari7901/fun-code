import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Play,
  Sparkles,
  Star,
  Globe,
  Shield,
  Brain,
  Zap,
  Mail,
  Bot,
  MessageSquare,
  Activity,
  Wifi,
  Battery,
  Clock,
} from "lucide-react";
import { Button } from "../ui/Button";
import { useRef } from "react";

export const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Simplified floating elements for cleaner design
  const floatingElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: 10 + ((i * 12) % 80),
    y: 15 + ((i * 15) % 70),
    delay: i * 1.2,
    duration: 15 + (i % 3) * 5,
  }));

  const elegantIcons = [
    { icon: Sparkles, delay: 0, color: "text-blue-300", scale: 1.2 },
    { icon: Star, delay: 1.5, color: "text-purple-300", scale: 1 },
    { icon: Globe, delay: 3, color: "text-emerald-300", scale: 1.1 },
    { icon: Shield, delay: 4.5, color: "text-amber-300", scale: 0.9 },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-950 to-black"
    >
      {/* Elegant Background */}
      <div className="absolute inset-0">
        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20" />

        {/* Subtle animated mesh */}
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.15) 0%, transparent 30%),
                             radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.15) 0%, transparent 30%)`,
          }}
        />
      </div>

      {/* Minimal floating elements */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0, 1.2, 0],
            y: [0, -120],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeOut",
          }}
          className="absolute w-1 h-1 bg-white/50 rounded-full"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
        />
      ))}

      {/* Elegant floating icons */}
      {elegantIcons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0, 0.8, 0],
            y: [20, -40],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
          className={`absolute ${item.color} pointer-events-none`}
          style={{
            left: `${15 + index * 18}%`,
            top: `${25 + index * 12}%`,
            transform: `scale(${item.scale})`,
          }}
        >
          <item.icon size={24} />
        </motion.div>
      ))}

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[85vh]">
          {/* Left Column - Clean Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Elegant badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-md"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-5 w-5 text-blue-400" />
              </motion.div>
              <span className="text-sm font-medium text-slate-300">
                Next-Generation Email Intelligence
              </span>
            </motion.div>

            {/* Clean main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="text-white">Email Made</span>
              <br />
              <motion.span
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                Effortless
              </motion.span>
            </motion.h1>

            {/* Clean subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-slate-300 leading-relaxed max-w-2xl"
            >
              Transform your inbox into an intelligent workspace. Our AI
              understands, organizes, and responds—so you can focus on what
              matters most.
            </motion.p>

            {/* Elegant CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="gradient"
                  size="xl"
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl"
                >
                  <span className="flex items-center gap-2">
                    Get Started Free
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.div>
                  </span>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  size="xl"
                  className="border-slate-600 text-slate-300 hover:bg-white hover:border-slate-500"
                >
                  <span className="flex items-center gap-2">
                    <Play className="h-5 w-5" />
                    Watch Demo
                  </span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Clean stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-12 pt-8 border-t border-slate-700/50"
            >
              {[
                { value: "50K+", label: "Users" },
                { value: "5hrs", label: "Saved Daily" },
                { value: "99.9%", label: "Uptime" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    delay: 1.2 + index * 0.1,
                    duration: 0.6,
                  }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Revolutionary AI Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Main Holographic Dashboard */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotateY: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="w-[440px] h-[580px] bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-2xl border border-purple-500/30 rounded-3xl shadow-2xl overflow-hidden relative">
                {/* Holographic Glow Effect */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-emerald-500/10 rounded-3xl"
                />

                {/* Dynamic Status Bar */}
                <div className="p-4 border-b border-gray-700/50 bg-gradient-to-r from-gray-900/80 to-gray-800/80">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={{
                          rotate: 360,
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          rotate: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                          },
                          scale: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                        }}
                        className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center"
                      >
                        <Brain className="h-4 w-4 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-white font-bold text-lg">
                          SmartMail AI
                        </h3>
                        <motion.div
                          className="text-emerald-400 text-xs flex items-center gap-1"
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <motion.div
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-2 h-2 bg-emerald-400 rounded-full"
                          />
                          Neural Network Active
                        </motion.div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <Wifi className="h-4 w-4 text-blue-400" />
                      </motion.div>
                      <motion.div
                        animate={{
                          scaleX: [0.8, 1, 0.8],
                          opacity: [0.6, 1, 0.6],
                        }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                        className="flex items-center gap-1"
                      >
                        <Battery className="h-4 w-4 text-green-400" />
                        <span className="text-xs text-green-400">98%</span>
                      </motion.div>
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="text-xs text-gray-400"
                      >
                        <Clock className="h-4 w-4" />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* AI Processing Center */}
                <div className="p-6">
                  {/* Real-time Analytics */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="mb-6"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-white font-semibold flex items-center gap-2">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Activity className="h-5 w-5 text-purple-400" />
                        </motion.div>
                        Live Processing
                      </h4>
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-emerald-400 text-sm font-mono"
                      >
                        1,247 emails/min
                      </motion.div>
                    </div>

                    {/* Animated Processing Bars */}
                    <div className="space-y-3">
                      {[
                        {
                          label: "Priority Detection",
                          value: 94,
                          color: "bg-purple-500",
                          delay: 0,
                        },
                        {
                          label: "Sentiment Analysis",
                          value: 87,
                          color: "bg-blue-500",
                          delay: 0.5,
                        },
                        {
                          label: "Auto-Categorization",
                          value: 91,
                          color: "bg-emerald-500",
                          delay: 1,
                        },
                        {
                          label: "Response Generation",
                          value: 96,
                          color: "bg-orange-500",
                          delay: 1.5,
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            delay: 1.5 + item.delay,
                            duration: 0.6,
                          }}
                          className="space-y-1"
                        >
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-300">{item.label}</span>
                            <motion.span
                              animate={{
                                color: ["#9CA3AF", "#FFFFFF", "#9CA3AF"],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: item.delay,
                              }}
                              className="font-mono"
                            >
                              {item.value}%
                            </motion.span>
                          </div>
                          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: "0%" }}
                              animate={
                                isInView ? { width: `${item.value}%` } : {}
                              }
                              transition={{
                                delay: 1.5 + item.delay,
                                duration: 2,
                                ease: "easeOut",
                              }}
                              className={`h-full ${item.color} rounded-full relative`}
                            >
                              <motion.div
                                animate={{
                                  x: ["-100%", "100%"],
                                  opacity: [0, 1, 0],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: 2 + item.delay,
                                  ease: "easeInOut",
                                }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              />
                            </motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Neural Network Visualization */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 2, duration: 0.8 }}
                    className="relative h-40 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/30 p-4 mb-6 overflow-hidden"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <Zap className="h-5 w-5 text-yellow-400" />
                      </motion.div>
                      <span className="text-white font-medium">
                        Neural Activity
                      </span>
                    </div>

                    {/* Animated Neural Nodes */}
                    <div className="relative h-24">
                      {Array.from({ length: 8 }, (_, i) => (
                        <motion.div
                          key={i}
                          initial={{
                            opacity: 0,
                            scale: 0,
                          }}
                          animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0],
                            x: [
                              Math.random() * 350,
                              Math.random() * 350,
                              Math.random() * 350,
                            ],
                            y: [
                              Math.random() * 80,
                              Math.random() * 80,
                              Math.random() * 80,
                            ],
                          }}
                          transition={{
                            duration: 4 + Math.random() * 2,
                            repeat: Infinity,
                            delay: i * 0.5,
                            ease: "easeInOut",
                          }}
                          className={`absolute w-2 h-2 rounded-full ${
                            i % 4 === 0
                              ? "bg-purple-400"
                              : i % 4 === 1
                              ? "bg-blue-400"
                              : i % 4 === 2
                              ? "bg-emerald-400"
                              : "bg-orange-400"
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>

                  {/* Smart Inbox Preview */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 2.5, duration: 0.8 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <motion.div
                        animate={{
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <Mail className="h-5 w-5 text-blue-400" />
                      </motion.div>
                      <span className="text-white font-medium">
                        Smart Inbox
                      </span>
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="ml-auto text-xs text-emerald-400 flex items-center gap-1"
                      >
                        <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                        Auto-sorting
                      </motion.div>
                    </div>

                    {[
                      {
                        title: "Urgent: Client Meeting",
                        from: "Sarah Johnson",
                        priority: "high",
                        ai: "Priority detected",
                        color: "border-red-500/30 bg-red-500/5",
                      },
                      {
                        title: "Project Update Required",
                        from: "Dev Team",
                        priority: "medium",
                        ai: "Action needed",
                        color: "border-orange-500/30 bg-orange-500/5",
                      },
                      {
                        title: "Weekly Newsletter",
                        from: "TechNews",
                        priority: "low",
                        ai: "Auto-categorized",
                        color: "border-blue-500/30 bg-blue-500/5",
                      },
                    ].map((email, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 3 + index * 0.2, duration: 0.6 }}
                        whileHover={{
                          scale: 1.02,
                          x: 8,
                          transition: { duration: 0.2 },
                        }}
                        className={`p-3 rounded-xl border ${email.color} cursor-pointer`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="text-white font-medium text-sm mb-1">
                              {email.title}
                            </div>
                            <div className="text-gray-400 text-xs mb-2">
                              From: {email.from}
                            </div>
                            <motion.div
                              animate={{ opacity: [0.7, 1, 0.7] }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.5,
                              }}
                              className="flex items-center gap-1 text-xs text-purple-400"
                            >
                              <Bot className="h-3 w-3" />
                              {email.ai}
                            </motion.div>
                          </div>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 8,
                              repeat: Infinity,
                              ease: "linear",
                              delay: index * 2,
                            }}
                            className={`w-3 h-3 rounded-full ${
                              email.priority === "high"
                                ? "bg-red-400"
                                : email.priority === "medium"
                                ? "bg-orange-400"
                                : "bg-blue-400"
                            }`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* Floating AI Assistants */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                  x: [0, 10, 0],
                  y: [0, -10, 0],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  x: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-xl border border-purple-400/40 rounded-3xl flex items-center justify-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Brain className="h-8 w-8 text-purple-400" />
                </motion.div>
              </motion.div>

              <motion.div
                animate={{
                  rotate: -360,
                  scale: [1.1, 1, 1.1],
                  x: [0, -8, 0],
                  y: [0, 8, 0],
                }}
                transition={{
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  x: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 backdrop-blur-xl border border-emerald-400/40 rounded-3xl flex items-center justify-center"
              >
                <motion.div
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="h-8 w-8 text-emerald-400" />
                </motion.div>
              </motion.div>

              <motion.div
                animate={{
                  rotate: 180,
                  scale: [1, 1.15, 1],
                  x: [0, 6, 0],
                  y: [0, -6, 0],
                }}
                transition={{
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                  scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                  x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute top-1/2 -right-6 w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-xl border border-orange-400/40 rounded-2xl flex items-center justify-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <MessageSquare className="h-6 w-6 text-orange-400" />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
