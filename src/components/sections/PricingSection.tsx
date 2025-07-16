import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import {
  Check,
  Zap,
  Crown,
  Rocket,
  Star,
  Shield,
  Brain,
  Target,
} from "lucide-react";
import { Button } from "../ui/Button";

interface PricingPlan {
  id: string;
  name: string;
  icon: React.ElementType;
  price: number;
  originalPrice?: number;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  isEnterprise?: boolean;
  gradient: string;
  particleColor: string;
  glowColor: string;
}

export const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Dynamic scroll-based animations
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const headerY = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const pricingPlans: PricingPlan[] = [
    {
      id: "starter",
      name: "Starter",
      icon: Zap,
      price: isAnnual ? 9 : 12,
      originalPrice: isAnnual ? 15 : 18,
      period: isAnnual ? "/month" : "/month",
      description:
        "Perfect for individuals getting started with AI email assistance",
      features: [
        "1,000 AI-processed emails/month",
        "Smart categorization",
        "Basic analytics",
        "Email templates",
        "Mobile app access",
        "24/7 support",
      ],
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      particleColor: "bg-blue-400",
      glowColor: "shadow-blue-500/25",
    },
    {
      id: "professional",
      name: "Professional",
      icon: Crown,
      price: isAnnual ? 29 : 35,
      originalPrice: isAnnual ? 45 : 55,
      period: isAnnual ? "/month" : "/month",
      description:
        "Advanced AI features for productivity-focused professionals",
      features: [
        "10,000 AI-processed emails/month",
        "Advanced AI insights",
        "Smart scheduling",
        "Custom automations",
        "Priority support",
        "Team collaboration",
        "Advanced analytics",
        "API access",
      ],
      isPopular: true,
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      particleColor: "bg-purple-400",
      glowColor: "shadow-purple-500/25",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      icon: Rocket,
      price: isAnnual ? 99 : 120,
      originalPrice: isAnnual ? 150 : 180,
      period: isAnnual ? "/month" : "/month",
      description:
        "Complete AI email solution for growing teams and enterprises",
      features: [
        "Unlimited AI processing",
        "Custom AI training",
        "Advanced security",
        "White-label options",
        "Dedicated support",
        "Custom integrations",
        "Advanced reporting",
        "SLA guarantee",
        "Multi-domain support",
      ],
      isEnterprise: true,
      gradient: "from-emerald-500 via-green-500 to-lime-500",
      particleColor: "bg-emerald-400",
      glowColor: "shadow-emerald-500/25",
    },
  ];

  // Floating particles animation
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 4,
    size: 2 + Math.random() * 3,
  }));

  return (
    <motion.section
      ref={sectionRef}
      className="relative min-h-screen py-24 bg-gradient-to-br from-black via-gray-950 to-black overflow-hidden"
      style={{ y: backgroundY }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Dynamic Gradient Mesh */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)
            `,
            backgroundSize: "300% 300%",
          }}
        />

        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 30, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Neural Network Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          {Array.from({ length: 8 }, (_, i) => (
            <motion.path
              key={i}
              d={`M ${i * 150} 0 Q ${i * 150 + 75} 200 ${i * 150 + 150} 400 T ${
                i * 150 + 300
              } 800`}
              stroke={`url(#pricing-gradient-${i})`}
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{
                duration: 3,
                delay: i * 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
          <defs>
            {Array.from({ length: 8 }, (_, i) => (
              <linearGradient
                key={i}
                id={`pricing-gradient-${i}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            ))}
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Revolutionary Header */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="text-center mb-20"
        >
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-2 mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="p-2 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30"
            >
              <Crown className="h-5 w-5 text-blue-400" />
            </motion.div>
            <span className="text-sm font-semibold text-gray-300 tracking-wide uppercase">
              Choose Your AI Power
            </span>
          </motion.div>

          {/* Dynamic Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 mb-8"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent"
                style={{ backgroundSize: "200% 200%" }}
              >
                Revolutionary
              </motion.span>
              <br />
              <span className="text-white">Pricing</span>
            </h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Experience the future of email intelligence with plans designed to
              scale with your ambitions
            </motion.p>
          </motion.div>

          {/* Billing Toggle with Holographic Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative inline-flex items-center space-x-4 p-2 rounded-2xl bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-xl"
          >
            {/* Holographic Background */}
            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 rounded-2xl blur-sm"
            />

            <div className="relative flex items-center space-x-4">
              <motion.button
                onClick={() => setIsAnnual(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  !isAnnual
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Monthly
              </motion.button>

              <motion.button
                onClick={() => setIsAnnual(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  isAnnual
                    ? "bg-gradient-to-r from-purple-600 to-emerald-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Annual
                {isAnnual && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute -top-2 -right-2 bg-gradient-to-r from-emerald-400 to-green-500 text-xs font-bold px-2 py-1 rounded-full text-black"
                  >
                    Save 25%
                  </motion.div>
                )}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Simplified Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1 + 0.3,
                ease: "easeOut",
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              {/* Card Container */}
              <div
                className={`relative h-full p-8 rounded-2xl border transition-all duration-300 ${
                  plan.isPopular
                    ? "border-purple-500/50 bg-gradient-to-b from-purple-900/10 to-black/50 shadow-xl shadow-purple-500/10"
                    : "border-gray-700/50 bg-gradient-to-b from-gray-900/30 to-black/50 hover:border-gray-600/50"
                } backdrop-blur-sm`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4" />
                        <span>Most Popular</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${plan.gradient} mb-4`}
                  >
                    <plan.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center space-x-2 mb-2">
                    {plan.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        ${plan.originalPrice}
                      </span>
                    )}
                    <span className="text-5xl font-bold text-white">
                      ${plan.price}
                    </span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  {plan.originalPrice && (
                    <div className="text-emerald-400 text-sm font-medium">
                      Save $
                      {(plan.originalPrice - plan.price) * (isAnnual ? 12 : 1)}
                      /year
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center space-x-3 text-sm"
                    >
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center`}
                      >
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                  <Button
                    variant="outline"
                    className={`w-full py-3 rounded-lg font-medium text-white border transition-all duration-300 hover:text-white ${
                      plan.isPopular
                        ? "border-purple-500 bg-purple-600 hover:bg-purple-700 hover:text-white"
                        : "border-gray-600 hover:border-gray-500 hover:bg-gray-800 hover:text-white"
                    }`}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="text-center mt-20 space-y-8"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-emerald-400" />
              <span className="font-semibold">30-day money back</span>
            </div>
            <div className="flex items-center space-x-2">
              <Brain className="h-5 w-5 text-blue-400" />
              <span className="font-semibold">AI-powered insights</span>
            </div>
            <div className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-purple-400" />
              <span className="font-semibold">99.9% uptime SLA</span>
            </div>
          </div>

          <motion.p
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            Join thousands of professionals who have revolutionized their email
            workflow with SmartMail AI
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};
