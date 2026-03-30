import { useEffect, useState } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const nextProgress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
      setProgress(Math.min(1, Math.max(0, nextProgress)));
      frame = 0;
    };

    const onScroll = () => {
      if (frame === 0) {
        frame = window.requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);

      if (frame !== 0) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return progress;
}
