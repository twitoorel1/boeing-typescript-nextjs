import React, { ReactNode, FC } from "react";

interface ISeparatorProps {
  children?: ReactNode;
  title?: string;
}

const SeparatorWrapper: FC<ISeparatorProps> = ({ children, title }) => {
  return (
    <div className="flex items-center gap-2 my-8">
      <hr className="border-t w-full" />
      <span className="text-center text-sm text-gray-500 w-full font-medium">
        {title}
        {children}
      </span>
      <hr className="border-t w-full" />
    </div>
  );
};

export default SeparatorWrapper;
