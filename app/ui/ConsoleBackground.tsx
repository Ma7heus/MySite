import React, { FC, HTMLAttributes } from 'react';

interface ConsoleBackgroundProps extends HTMLAttributes<HTMLDivElement> {}

const ConsoleBackground: FC<ConsoleBackgroundProps> = ({ children, ...props }) => {
  return (
    <div
      className="w-full h-screen overflow-y-hidden overflow-x-hidden relative"
      style={{
        backgroundImage: 'url("/backgrounds/dark-brick.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default ConsoleBackground;