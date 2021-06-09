import React from 'react';

export interface IGradientSVG {
  startColor: string;
  midColor: string;
  endColor: string;
  rotation: number;
}
export const GradientSVG: React.FC<IGradientSVG> = ({
  startColor,
  midColor,
  endColor,
  rotation,
}) => {
  const gradientTransform = `rotate(${rotation})`;

  return (
    <svg style={{ height: 0 }} className="position-absolute">
      <defs>
        <linearGradient id={"points-bar"} gradientTransform={gradientTransform}>
          <stop offset="5%" stopColor={endColor} />
          <stop offset="30%" stopColor={midColor} />
          <stop offset="95%" stopColor={startColor} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GradientSVG;
