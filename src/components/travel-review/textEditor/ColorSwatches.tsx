import { Square, SquareSlash } from 'lucide-react';
import { COLOR_SWATCH_STYLES, COLOR_SWATCHES } from '../constants';
import { ColorSwatchesProps } from '../types';

const ColorSwatches = ({ type, onClick }: ColorSwatchesProps) => {
  const clickReset = () =>
    type === 'text' ? onClick().setColor('#151515').run() : onClick().unsetHighlight().run();
  const clickColor = (color: string) =>
    type === 'text' ? onClick().setColor(color).run() : onClick().toggleHighlight({ color }).run();

  return (
    <div className="grid grid-cols-6 justify-items-stretch gap-2 absolute top-8 z-20 w-56 p-3 border border-darkGray rounded-md bg-white text-darkGray drop-shadow-md ">
      <button type="button">
        <SquareSlash
          size={26}
          strokeWidth={1}
          className={COLOR_SWATCH_STYLES}
          onClick={clickReset}
        />
      </button>
      {COLOR_SWATCHES.map(color => (
        <button key={color} type="button">
          <Square
            size={26}
            strokeWidth={1}
            style={{ fill: color }}
            className={COLOR_SWATCH_STYLES}
            onClick={() => clickColor(color)}
          />
        </button>
      ))}
    </div>
  );
};

export default ColorSwatches;
