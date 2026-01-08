// components/ui/Button.tsx
import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string; // ✅ Make className optional
}

export default function Button({ children, variant, className }: ButtonProps) {
  const base =
    "px-6 py-3 rounded-md font-semibold text-center transition-colors duration-200";

  const styles =
    variant === "outline"
      ? "border border-indigo-600 text-indigo-600 bg-white hover:bg-indigo-50"
      : "bg-indigo-600 text-white hover:bg-indigo-700";

  return <button className={clsx(base, styles, className)}>{children}</button>;
}
