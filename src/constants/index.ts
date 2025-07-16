export const FEATURES = [
  {
    id: "smart-categorization",
    title: "Smart Email Categorization",
    description:
      "AI-powered automatic email sorting and labeling for perfect inbox organization",
    icon: "brain",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    id: "template-generation",
    title: "Intelligent Response Templates",
    description:
      "Generate contextual email responses with advanced AI understanding",
    icon: "messageSquare",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    id: "schedule-sending",
    title: "Smart Scheduling",
    description:
      "Send emails at optimal times based on recipient behavior patterns",
    icon: "clock",
    gradient: "from-pink-500 to-red-600",
  },
  {
    id: "signature-management",
    title: "Dynamic Signatures",
    description:
      "Contextual email signatures that adapt to recipients and situations",
    icon: "pen",
    gradient: "from-red-500 to-orange-600",
  },
  {
    id: "analytics",
    title: "Email Analytics",
    description:
      "Deep insights into email performance, engagement, and productivity",
    icon: "barChart",
    gradient: "from-orange-500 to-yellow-600",
  },
  {
    id: "automation",
    title: "Workflow Automation",
    description: "Create custom email workflows and automate repetitive tasks",
    icon: "zap",
    gradient: "from-yellow-500 to-green-600",
  },
] as const;

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content:
      "This email assistant transformed our communication workflow. We save 3+ hours daily!",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director",
    content:
      "The AI responses are incredibly natural. Our email engagement increased by 40%.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Operations Manager",
    content:
      "Smart categorization keeps our team organized. Best productivity tool we've ever used!",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
] as const;

export const PRICING_PLANS = [
  {
    id: "starter",
    name: "Starter",
    price: "$9",
    period: "/month",
    description: "Perfect for individuals getting started",
    features: [
      "Up to 500 emails/month",
      "Basic AI categorization",
      "Email templates",
      "Standard support",
    ],
    popular: false,
    buttonText: "Get Started",
  },
  {
    id: "professional",
    name: "Professional",
    price: "$29",
    period: "/month",
    description: "Ideal for busy professionals and small teams",
    features: [
      "Up to 5,000 emails/month",
      "Advanced AI features",
      "Smart scheduling",
      "Analytics dashboard",
      "Priority support",
      "Custom signatures",
    ],
    popular: true,
    buttonText: "Start Free Trial",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "$99",
    period: "/month",
    description: "For large teams and organizations",
    features: [
      "Unlimited emails",
      "Full automation suite",
      "Advanced analytics",
      "Custom integrations",
      "Dedicated support",
      "White-label options",
      "API access",
    ],
    popular: false,
    buttonText: "Contact Sales",
  },
] as const;
