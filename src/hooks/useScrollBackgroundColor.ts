import { useMotionValue, useMotionValueEvent } from 'motion/react';
import { useEffect } from 'react';

const useScrollBackgroundColor = (startColor: number[], endColor: number[], maxScroll: number) => {
  const y = useMotionValue(0);

  const blendColors = (startColor: number[], endColor: number[], factor: number) => {
    return startColor.map((start, index) => Math.round(start + factor * (endColor[index] - start)));
  };

  useMotionValueEvent(y, 'change', latest => {
    const factor = Math.min(1, latest / maxScroll);
    const [r, g, b] = blendColors(startColor, endColor, factor);

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    document.getElementsByTagName('header')[0].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  });

  useEffect(() => {
    const handleScroll = () => y.set(window.scrollY);

    window.addEventListener('scroll', handleScroll);

    return () => {
      const [r, g, b] = startColor;

      document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      document.getElementsByTagName('header')[0].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

      window.removeEventListener('scroll', handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [y]);
};

export default useScrollBackgroundColor;
