"use client";

import { PropsWithChildren, useMemo } from "react";

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type: "primary" | "secondary" | "box" | "rounded" | "rounded-dark";
  className?: string;
  color: string;
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  onClick,
  type,
  children,
  className,
  color,
}) => {
  const typeClassName = useMemo(() => {
    switch (type) {
      case "primary":
        return "text-blue-400 text-lg hover:text-blue-500";
      case "secondary":
        return "text-neutral-400 text-lg";
      case "box":
        return "text-neutral-900 font-lg bg-sky-500 rounded-sm px-4 py-2";
      case "rounded":
        return "text-stone-950 font-lg bg-zinc-300 rounded-full px-3 py-2";
      case "rounded-dark":
        return "text-white font-lg bg-neutral-800 rounded-full px-3 py-2";
      default:
        return "";
    }
  }, [type]);

  return (
    <button onClick={onClick} className={`${typeClassName} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
