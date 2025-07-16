import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

interface AnimatedIconProps {
  name: keyof typeof LucideIcons;
  className?: string;
  size?: number;
  animate?: boolean;
}

export const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  name,
  className = "",
  size = 24,
  animate = true,
}) => {
  const IconComponent = LucideIcons[name] as React.ComponentType<any>;

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in lucide-react`);
    return null;
  }

  if (!animate) {
    return <IconComponent size={size} className={className} />;
  }

  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className={className}
    >
      <IconComponent size={size} />
    </motion.div>
  );
};
