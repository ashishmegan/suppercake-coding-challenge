import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export function Button({
  variant = "default",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-lg transition",
        variant === "default"
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "border border-gray-300 text-gray-700 hover:bg-gray-100",
        className
      )}
      {...props}
    />
  );
}
