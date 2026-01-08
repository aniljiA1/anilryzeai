// components/ui/Button.tsx
import clsx from "clsx";

export default function Button({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "outline";
}) {
  return (
    <button
      className={clsx(
        "px-6 py-3 rounded-lg font-medium transition",
        variant === "primary"
          ? "bg-indigo-600 text-white hover:bg-indigo-700"
          : "border border-gray-300 hover:bg-gray-100"
      )}
    >
      {children}
    </button>
  );
}
