import React, { FC } from "react";
import Link from "./Link";
import Image from "next/image";

// link: string;
// text: string;
interface IAppLogo {
  title?: string;
  fontSize?: string;
  showTitle?: boolean;
  className?: string;
}

const AppLogo: FC<IAppLogo> = ({
  title = "",
  fontSize = "text-2xl",
  showTitle = true,
  className,
}) => {
  switch (fontSize) {
    case "xs":
      fontSize = "text-xs";
      break;

    case "sm":
      fontSize = "text-sm";
      break;

    case "md":
      fontSize = "text-md";
      break;

    case "lg":
      fontSize = "text-lg";
      break;

    case "xl":
      fontSize = "text-xl";
      break;

    default:
      fontSize = fontSize;
  }

  return (
    <Link href="/" className="flex items-center mx-3 w-fit py-3">
      <Image src={"/images/Icon_big.png"} width={40} height={40} alt="Logo" />
      {showTitle && (
        <div
          className={`text-[#333333] font-normal mx-3 ${fontSize} ${className}`}
        >
          {title}
        </div>
      )}
    </Link>
  );
};

export default AppLogo;
