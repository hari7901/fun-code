import { motion, useInView } from "framer-motion";
import {
  Sparkles,
  Brain,
  Shield,
  Rocket,
  Globe,
  ArrowRight,
  Eye,
  Zap as Lightning,
  MessageSquare,
  Wand2,
  Target,
  TrendingUp,
} from "lucide-react";
import { useRef, useState } from "react";

export const ExtendedFeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeDemo, setActiveDemo] = useState(0);

  // Interactive AI Demo Features
  const demoFeatures = [
    {
      id: 1,
      icon: Wand2,
      title: "AI Magic",
      description: "Watch AI transform your thoughts into perfect emails",
      demoText: "Meeting tomorrow...",
      result:
        "Hi Sarah, I hope this message finds you well. I wanted to confirm our meeting scheduled for tomorrow at 2 PM. Looking forward to discussing the project details with you. Best regards!",
      color: "violet",
      gradient: "from-violet-500 to-purple-600",
    },
    {
      id: 2,
      icon: Target,
      title: "Smart Targeting",
      description: "AI analyzes recipient and context for perfect tone",
      demoText: "Apology to client...",
      result:
        "Dear Mr. Johnson, I sincerely apologize for the delay in our project delivery. We've implemented additional quality measures to ensure this doesn't happen again. Thank you for your patience.",
      color: "blue",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "Performance Boost",
      description: "Real-time optimization for maximum engagement",
      demoText: "Sales follow-up...",
      result:
        "Hi Alex! Thanks for your interest in our product. Based on our conversation, I believe our premium package would be perfect for your team's needs. Shall we schedule a demo?",
      color: "emerald",
      gradient: "from-emerald-500 to-green-600",
    },
  ];

  // Core capabilities - reduced to 3
  const coreCapabilities = [
    {
      icon: Lightning,
      title: "Lightning Speed",
      description:
        "Process and generate emails 10x faster with quantum-optimized algorithms",
      metrics: "10x faster",
      color: "blue",
    },
    {
      icon: Globe,
      title: "Universal Integration",
      description:
        "Seamlessly connect with 50+ email platforms and productivity tools",
      metrics: "50+ platforms",
      color: "purple",
    },
    {
      icon: Eye,
      title: "Smart Analytics",
      description: "Get deep insights with 95% accuracy into email performance",
      metrics: "95% accuracy",
      color: "emerald",
    },
  ];

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Clean background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 mb-8 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-full backdrop-blur-lg shadow-2xl"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="h-5 w-5 text-blue-400" />
            </motion.div>
            <span className="text-base font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Advanced AI Features
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              AI-Powered
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="block bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent"
            >
              Email Intelligence
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Watch AI transform simple thoughts into professional, contextually
            perfect emails
          </motion.p>
        </motion.div>

        {/* Interactive AI Demo Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              See AI in Action
            </h3>
            <p className="text-gray-400 text-lg">
              Experience the magic of intelligent email composition
            </p>
          </div>

          {/* Demo Interface */}
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl backdrop-blur-xl p-8 shadow-2xl">
              {/* Demo Tabs */}
              <div className="flex flex-wrap gap-4 mb-8 justify-center">
                {demoFeatures.map((demo, index) => (
                  <motion.button
                    key={demo.id}
                    onClick={() => setActiveDemo(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                      activeDemo === index
                        ? `bg-gradient-to-r ${demo.gradient} text-white shadow-lg`
                        : "bg-white/5 text-gray-300 hover:bg-white/10"
                    }`}
                  >
                    <demo.icon className="h-5 w-5" />
                    <span className="font-medium">{demo.title}</span>
                  </motion.button>
                ))}
              </div>

              {/* Demo Content */}
              <motion.div
                key={activeDemo}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-8"
              >
                {/* Input Side */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Your Input
                  </h4>
                  <div className="relative">
                    <MessageSquare className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
                    <div className="bg-gray-800/50 border border-gray-600 rounded-xl pl-12 pr-4 py-3 text-gray-300">
                      {demoFeatures[activeDemo].demoText}
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="text-blue-400"
                      >
                        |
                      </motion.span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">
                    {demoFeatures[activeDemo].description}
                  </p>
                </div>

                {/* Output Side */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    AI Generated Result
                  </h4>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-xl p-4 text-gray-200 leading-relaxed"
                  >
                    {demoFeatures[activeDemo].result}
                  </motion.div>
                  <div className="flex items-center gap-2 text-sm text-green-400">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Generated in 0.3 seconds
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Core Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Core Capabilities
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Powerful features that transform how you communicate
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.2 * index,
                  type: "spring",
                  bounce: 0.4,
                }}
                whileHover={{
                  y: -15,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="group relative"
              >
                <div className="relative p-8 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl backdrop-blur-xl hover:from-white/15 hover:to-white/10 transition-all duration-500 shadow-xl">
                  {/* Animated icon */}
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      rotate: [0, -5, 5, 0],
                    }}
                    transition={{ duration: 0.4 }}
                    className="mb-6"
                  >
                    <capability.icon
                      className={`h-10 w-10 text-${capability.color}-400`}
                    />
                  </motion.div>

                  <h4 className="text-xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors duration-300">
                    {capability.title}
                  </h4>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {capability.description}
                  </p>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`text-sm font-semibold text-${capability.color}-400 bg-${capability.color}-400/10 px-4 py-2 rounded-full inline-block border border-${capability.color}-400/20`}
                  >
                    {capability.metrics}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Interactive Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
          className="relative"
        >
          <div className="relative p-12 bg-gradient-to-br from-white/10 via-white/5 to-white/10 border border-white/20 rounded-3xl backdrop-blur-2xl shadow-2xl overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-emerald-600/10 opacity-50" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mb-12 relative z-10"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Experience the Revolution
              </h3>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Join thousands of professionals who've transformed their email
                workflow with our AI-powered platform
              </p>
            </motion.div>

            {/* Enhanced stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid md:grid-cols-3 gap-8 mb-12 relative z-10"
            >
              {[
                {
                  value: "10x",
                  label: "Faster Processing",
                  color: "blue",
                  icon: Lightning,
                },
                {
                  value: "50+",
                  label: "Platform Integrations",
                  color: "purple",
                  icon: Globe,
                },
                {
                  value: "95%",
                  label: "Accuracy Rate",
                  color: "emerald",
                  icon: Eye,
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 1.2 + index * 0.1,
                    type: "spring",
                    bounce: 0.4,
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.3 },
                  }}
                  className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    className="mb-4"
                  >
                    <stat.icon
                      className={`h-8 w-8 text-${stat.color}-400 mx-auto`}
                    />
                  </motion.div>
                  <div
                    className={`text-4xl font-bold text-${stat.color}-400 mb-2`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-gray-200 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="text-center relative z-10"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 text-white font-bold text-lg rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
              >
                {/* Animated background shine */}
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />

                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <Rocket className="h-6 w-6" />
                </motion.div>

                <span className="relative z-10">Start Your AI Journey</span>

                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight className="h-6 w-6" />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
