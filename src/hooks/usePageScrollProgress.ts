import { useEffect, useState } from 'react';

export default () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    let progress = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    progress = Math.min(Math.max(progress, 0), 1);

    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollProgress;
};
