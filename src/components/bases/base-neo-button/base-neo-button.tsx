import './base-neo-button.scss';

import classnames from 'classnames';
import React, { useEffect, useState } from 'react';

export interface IBaseNeoButton {
  className?: string;
  rounded?: boolean;
  onClick?: () => void;
  pressed?: boolean;
  isNavLink?: boolean;
  width?: string;
  height?: string;
  // TODO: type this
  style?: any;
  title?: string;
}

export const BaseNeoButton: React.FC<IBaseNeoButton> = ({
  children,
  className,
  rounded = true,
  onClick,
  pressed,
  isNavLink,
  width = "100%",
  height = "100%",
  style,
  title,
}) => {
  const [isPressed, setIsPressed] = useState(pressed);

  useEffect(() => {
    setIsPressed(pressed);
  }, [pressed]);

  const handleClick = () => {
    setIsPressed((isPressed) => !isPressed);
    if (onClick) onClick();
  };

  return (
    <div
      title={title}
      className={classnames(
        "text-center base-neo-btn cursor-pointer p-2",
        className,
        {
          "neo-btn-rounded": rounded,
        },
        {
          "nav-link-btn": isNavLink,
        },
        {
          "pressed-btn": isPressed && !isNavLink,
        }
      )}
      onClick={handleClick}
      style={{ ...style, width, height }}
    >
      {children}
    </div>
  );
};

export default BaseNeoButton;
