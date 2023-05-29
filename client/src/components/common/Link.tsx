import React, { FC, ReactNode } from "react";
import NextLink from "next/link";

interface ILinkProps {
  children?: ReactNode;
  label?: string;
  href: string;
  className?: string;
}

const Link: FC<ILinkProps> = ({ children, label, href = "/", className }) => {
  return (
    <NextLink className={`${className} text-[#1f76c2]`} href={href}>
      {label}
      {children}
    </NextLink>
  );
};

export default Link;
