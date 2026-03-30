import { motion } from 'framer-motion';
import { useScrollProgress } from '../hooks/useScrollProgress';

function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-1 bg-white/[0.03]">
      <motion.div
        className="h-full origin-left bg-[linear-gradient(90deg,rgba(103,232,249,0.95),rgba(245,183,95,0.95))]"
        style={{ scaleX: progress }}
      />
    </div>
  );
}

export default ScrollProgress;

