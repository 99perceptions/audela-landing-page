import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedSection = ({ children, className, delay = 0, yOffset = 30 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1],
        delay: delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
