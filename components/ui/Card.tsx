import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition",
        className
      )}
    >
      {children}
    </div>
  );
}
