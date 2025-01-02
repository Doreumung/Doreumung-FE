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
      className="absolute -bottom-4 left-0 right-0 bg-white transition-transform duration-300 ease-out transform bottom-sheet"
      style={{ height: `${height}px` }}
    >
      <div
        className="h-3 w-full bg-gray-200 cursor-ns-resize"
        onMouseDown={handleStart}
        onTouchStart={handleStart}
      />
      <div className="overflow-auto h-[calc(100%-8px)] p-8">{children}</div>
    </div>
  );
};

export default ResizeablePanel;
