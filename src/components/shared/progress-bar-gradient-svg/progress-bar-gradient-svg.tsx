import React from 'react';

import GradientSVG from '../gradient-svg/gradient-svg';

export interface IProgressBarGradientSVG {}

export const ProgressBarGradientSVG: React.FC<IProgressBarGradientSVG> = () => {
  return (
    <GradientSVG
      startColor="#FF0000"
      midColor="#ffff00"
      endColor="#00FF00"
      rotation={-20}
    />
  );
};

export default ProgressBarGradientSVG;
