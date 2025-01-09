import { useCallback, useEffect, useState } from 'react';
import { ResizeablePanelProps } from '../types';

const ResizeablePanel = ({
  children,
  initialHeight,
  minHeight,
  maxHeight,
}: ResizeablePanelProps) => {
  const [height, setHeight] = useState(initialHeight);
  const [isDragging, setIsDragging] = useState(false);

  const handleStart = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleMove = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientY = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
      const newHeight = window.innerHeight - clientY;
      setHeight(Math.min(Math.max(newHeight, minHeight), maxHeight));
    },
    [isDragging, minHeight, maxHeight],
  );

  const handleEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchmove', handleMove);
      window.addEventListener('touchend', handleEnd);
    } else {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, handleMove, handleEnd]);

  return (
    <div
      className="absolute bottom-0 left-0 right-0 z-30 bg-white transition-transform duration-300 ease-out"
      style={{ height: `${height}px` }}
    >
      <div
        className="flex items-center justify-center w-full h-7 cursor-ns-resize"
        onMouseDown={handleStart}
        onTouchStart={handleStart}
      >
        <div className="w-16 h-1.5 bg-[#A4D6EB] rounded-full" />
      </div>
      <div className="overflow-auto h-[calc(100%-28px)] px-6 pt-6">{children}</div>
    </div>
  );
};

export default ResizeablePanel;
