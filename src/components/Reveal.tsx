import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

function Reveal({ children, className = '', delay = 0, y = 24 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, scale: 0.98, filter: 'blur(8px)' }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.18 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
