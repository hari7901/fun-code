import { motion, useInView } from "framer-motion";
import {
  Brain,
  Zap,
  Shield,
  Clock,
  BarChart3,
  Target,
  Rocket,
  ArrowRight,
  Sparkles,
  Users,
  Bot,
  Database,
  Mail,
  MessageSquare,
  Settings,
  Star,
  TrendingUp,
  Globe,
  Lock,
  Cpu,
} from "lucide-react";
import { useRef, useState } from "react";

export const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  const mainFeatures = [
    {
      id: 1,
      icon: Brain,
      title: "Neural AI Engine",
      subtitle: "Advanced Cognitive Processing",
      description:
        "Revolutionary neural networks that understand context, sentiment, and intent with human-like comprehension. Our AI doesn't just read emails—it understands them.",
      gradient: "from-purple-500 to-violet-600",
      bgGradient: "from-purple-500/10 to-violet-600/10",
      iconColor: "text-purple-400",
      features: [
        "Context Understanding",
        "Sentiment Analysis",
        "Intent Recognition",
        "Learning Adaptation",
      ],
      stats: { value: "99.7%", label: "Accuracy Rate" },
    },
    {
      id: 2,
      icon: Zap,
      title: "Quantum Speed",
      subtitle: "Lightning-Fast Processing",
      description:
        "Process millions of emails in microseconds with our quantum-inspired algorithms. Real-time analysis that scales infinitely without compromising performance.",
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-500/10 to-cyan-600/10",
      iconColor: "text-blue-400",
      features: [
        "Instant Processing",
        "Real-time Sync",
        "Infinite Scaling",
        "Zero Latency",
      ],
      stats: { value: "0.3ms", label: "Response Time" },
    },
    {
      id: 3,
      icon: Shield,
      title: "Fortress Security",
      subtitle: "Military-Grade Protection",
      description:
        "Zero-trust architecture with quantum-resistant encryption. Your data is protected by the same technology used by intelligence agencies worldwide.",
      gradient: "from-emerald-500 to-green-600",
      bgGradient: "from-emerald-500/10 to-green-600/10",
      iconColor: "text-emerald-400",
      features: [
        "Quantum Encryption",
        "Zero-Trust Model",
        "Biometric Auth",
        "Blockchain Verified",
      ],
      stats: { value: "256-bit", label: "Encryption" },
    },
  ];

  const quickStats = [
    {
      icon: Clock,
      label: "Smart Timing",
      value: "40%",
      desc: "Better Engagement",
      color: "text-orange-400",
    },
    {
      icon: Target,
      label: "Priority AI",
      value: "5x",
      desc: "Faster Response",
      color: "text-red-400",
    },
    {
      icon: BarChart3,
      label: "Analytics",
      value: "25+",
      desc: "Deep Insights",
      color: "text-blue-400",
    },
    {
      icon: Users,
      label: "Team Sync",
      value: "100%",
      desc: "Collaboration",
      color: "text-green-400",
    },
    {
      icon: Bot,
      label: "Automation",
      value: "80%",
      desc: "Time Saved",
      color: "text-purple-400",
    },
    {
      icon: Database,
      label: "Storage",
      value: "∞",
      desc: "Unlimited",
      color: "text-cyan-400",
    },
  ];

  // Floating particles data - More numerous for richer background
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: 5 + ((i * 6) % 90),
    y: 10 + ((i * 8) % 80),
    size: 1 + (i % 4) * 0.5,
    delay: i * 0.2,
    duration: 8 + (i % 4) * 3,
    moveX: i % 2 === 0 ? 50 : -50,
    moveY: i % 3 === 0 ? -40 : 40,
  }));

  // Floating icons data - More icons for features section
  const floatingIcons = [
    { icon: Mail, delay: 0, color: "text-blue-400", moveX: 60, moveY: -40 },
    {
      icon: MessageSquare,
      delay: 0.8,
      color: "text-purple-400",
      moveX: -50,
      moveY: 50,
    },
    {
      icon: Settings,
      delay: 1.6,
      color: "text-green-400",
      moveX: 70,
      moveY: 30,
    },
    {
      icon: Star,
      delay: 2.4,
      color: "text-yellow-400",
      moveX: -40,
      moveY: -60,
    },
    {
      icon: TrendingUp,
      delay: 3.2,
      color: "text-orange-400",
      moveX: 50,
      moveY: 70,
    },
    { icon: Globe, delay: 4, color: "text-cyan-400", moveX: -70, moveY: -30 },
    { icon: Lock, delay: 4.8, color: "text-red-400", moveX: 40, moveY: -50 },
    { icon: Cpu, delay: 5.6, color: "text-indigo-400", moveX: -60, moveY: 40 },
    { icon: Brain, delay: 6.4, color: "text-pink-400", moveX: 80, moveY: -20 },
    { icon: Zap, delay: 7.2, color: "text-lime-400", moveX: -30, moveY: 60 },
    {
      icon: Shield,
      delay: 8,
      color: "text-emerald-400",
      moveX: 45,
      moveY: -70,
    },
    {
      icon: Rocket,
      delay: 8.8,
      color: "text-violet-400",
      moveX: -80,
      moveY: 20,
    },
  ];

  return (
    <section ref={ref} id="features" className="relative pt-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10,
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Particles - Enhanced for features section */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            opacity: 0,
            scale: 0,
            x: 0,
            y: 0,
          }}
          animate={{
            opacity: [0, 0.3, 0.5, 0.3, 0],
            scale: [0, 0.7, 1, 0.7, 0],
            x: [0, particle.moveX * 0.5, particle.moveX],
            y: [0, particle.moveY * 0.5, particle.moveY],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: [0.25, 0.46, 0.45, 0.94],
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
          className="absolute rounded-full bg-gradient-to-r from-purple-500/50 to-blue-500/50 pointer-events-none will-change-transform"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
          }}
        />
      ))}

      {/* Floating Icons - Enhanced for features section */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            scale: 0,
            rotate: 0,
            x: 0,
            y: 0,
          }}
          animate={{
            opacity: [0, 0.2, 0.4, 0.2, 0],
            scale: [0, 0.8, 1, 0.8, 0],
            rotate: [0, 180, 360],
            x: [0, item.moveX * 0.6, item.moveX],
            y: [0, item.moveY * 0.6, item.moveY],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            delay: item.delay,
            ease: [0.25, 0.46, 0.45, 0.94],
            times: [0, 0.3, 0.5, 0.7, 1],
          }}
          className={`absolute ${item.color} opacity-25 pointer-events-none will-change-transform`}
          style={{
            left: `${15 + index * 7}%`,
            top: `${10 + index * 8}%`,
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
          }}
        >
          <item.icon size={16} />
        </motion.div>
      ))}

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span className="text-sm font-medium text-gray-300">
              Powerful Features
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
          >
            Experience The Future
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Advanced email intelligence with cutting-edge features that
            transform how you manage communications
          </motion.p>
        </motion.div>

        {/* Main Feature Showcase */}
        <div className="max-w-7xl mx-auto mb-24">
          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center mb-16"
            style={{
              scrollBehavior: "auto",
              contain: "layout style",
            }}
          >
            <div
              className="flex bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-2"
              style={{
                scrollMargin: 0,
                contain: "layout",
              }}
            >
              {mainFeatures.map((feature, index) => (
                <button
                  key={feature.id}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setActiveTab(index);
                  }}
                  onFocus={(e) => {
                    e.preventDefault();
                  }}
                  className={`relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeTab === index
                      ? "text-white"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                  style={{
                    scrollMargin: 0,
                    WebkitTapHighlightColor: "transparent",
                  }}
                >
                  {activeTab === index && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-xl`}
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                      style={{
                        transformOrigin: "center",
                        willChange: "transform",
                      }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <feature.icon className="h-4 w-4" />
                    {feature.title}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Feature Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Content Side */}
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className={`inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r ${mainFeatures[activeTab].bgGradient} border border-white/10 rounded-full`}
              >
                {(() => {
                  const IconComponent = mainFeatures[activeTab].icon;
                  return (
                    <IconComponent
                      className={`h-5 w-5 ${mainFeatures[activeTab].iconColor}`}
                    />
                  );
                })()}
                <span className="text-sm font-medium text-gray-300">
                  {mainFeatures[activeTab].subtitle}
                </span>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                {mainFeatures[activeTab].title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-gray-300 leading-relaxed mb-8"
              >
                {mainFeatures[activeTab].description}
              </motion.p>

              {/* Feature List */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="grid grid-cols-2 gap-4 mb-8"
              >
                {mainFeatures[activeTab].features.map((feature, idx) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + idx * 0.1, duration: 0.4 }}
                    className="flex items-center gap-3"
                  >
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${mainFeatures[activeTab].gradient}`}
                    />
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
              >
                <div
                  className={`text-4xl font-bold bg-gradient-to-r ${mainFeatures[activeTab].gradient} bg-clip-text text-transparent mb-2`}
                >
                  {mainFeatures[activeTab].stats.value}
                </div>
                <div className="text-gray-400">
                  {mainFeatures[activeTab].stats.label}
                </div>
              </motion.div>
            </div>

            {/* Visual Side */}
            <div className="order-1 lg:order-2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative"
              >
                {/* Main Circle */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className={`w-80 h-80 rounded-full bg-gradient-to-r ${mainFeatures[activeTab].gradient} p-1`}
                >
                  <div className="w-full h-full rounded-full bg-gray-900/90 backdrop-blur-xl flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {(() => {
                        const IconComponent = mainFeatures[activeTab].icon;
                        return (
                          <IconComponent className="h-24 w-24 text-white" />
                        );
                      })()}
                    </motion.div>
                  </div>
                </motion.div>

                {/* Orbiting Dots */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.5,
                    }}
                    className="absolute inset-0"
                  >
                    <div
                      className="absolute w-3 h-3 bg-white/40 rounded-full"
                      style={{
                        top: "10%",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Quick Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            At a Glance
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {quickStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <stat.icon className={`h-8 w-8 mx-auto mb-4 ${stat.color}`} />
                </motion.div>
                <div className="text-2xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 mb-1">{stat.desc}</div>
                <div className="text-sm font-medium text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl text-white font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
          >
            <Rocket className="h-6 w-6 group-hover:scale-110 transition-transform" />
            <span>Start Your Journey</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowRight className="h-6 w-6" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
