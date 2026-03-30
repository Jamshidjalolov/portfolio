import {
  MotionStyle,
  MotionValue,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { ReactNode } from 'react';

type MotionPanelProps = {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'article';
  glow?: string;
  float?: boolean;
  spotlight?: boolean;
  style?: MotionStyle;
};

function MotionPanel({
  children,
  className = '',
  as = 'div',
  glow = 'rgba(103,232,249,0.16)',
  float = true,
  spotlight = true,
  style,
}: MotionPanelProps) {
  const rotateXValue = useMotionValue(0);
  const rotateYValue = useMotionValue(0);
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);
  const hoverOpacity = useMotionValue(0);

  const rotateX = useSpring(rotateXValue, { stiffness: 180, damping: 18, mass: 0.6 });
  const rotateY = useSpring(rotateYValue, { stiffness: 180, damping: 18, mass: 0.6 });
  const opacity = useSpring(hoverOpacity, { stiffness: 220, damping: 24, mass: 0.6 });
  const shadowX = useTransform(rotateY as MotionValue<number>, [-10, 10], [-18, 18]);
  const shadowY = useTransform(rotateX as MotionValue<number>, [-10, 10], [18, -18]);
  const spotlightBackground = useMotionTemplate`radial-gradient(circle at ${pointerX}% ${pointerY}%, ${glow}, transparent 42%)`;
  const shadow = useMotionTemplate`${shadowX}px ${shadowY}px 55px rgba(4, 8, 22, 0.28)`;

  const MotionTag = as === 'article' ? motion.article : motion.div;

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const normalizedX = x / rect.width;
    const normalizedY = y / rect.height;

    rotateYValue.set((normalizedX - 0.5) * 10);
    rotateXValue.set((0.5 - normalizedY) * 10);
    pointerX.set(normalizedX * 100);
    pointerY.set(normalizedY * 100);
    hoverOpacity.set(1);
  };

  const resetPointer = () => {
    rotateXValue.set(0);
    rotateYValue.set(0);
    hoverOpacity.set(0);
  };

  return (
    <div className="perspective-[1400px]">
      <MotionTag
        className={`group relative isolate ${className}`}
        onPointerLeave={resetPointer}
        onPointerMove={handlePointerMove}
        style={{
          ...style,
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          boxShadow: shadow,
        }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        whileHover={float ? { y: -8, scale: 1.01 } : undefined}
      >
        {spotlight ? (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{
              opacity,
              backgroundImage: spotlightBackground,
            }}
          />
        ) : null}
        <div className="relative z-10 h-full">{children}</div>
      </MotionTag>
    </div>
  );
}

export default MotionPanel;
