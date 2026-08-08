import Link from "next/link";
import type { ButtonContent } from "@/types/content";
import { cn } from "@/lib/cn";

const sizeClasses = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-3.5 text-base",
} as const;

const variantClasses = {
  primary:
    "bg-primary-500 text-white shadow-sm hover:bg-primary-700 hover:shadow-md active:bg-primary-800",
  secondary:
    "border border-primary-500 bg-transparent text-primary-600 hover:bg-primary-50 active:bg-primary-100",
  tertiary: "bg-transparent text-primary-600 hover:bg-primary-50 active:bg-primary-100",
  link: "bg-transparent p-0 text-primary-600 hover:text-primary-700",
} as const;

type ButtonProps = ButtonContent & {
  className?: string;
};

export function Button({
  label,
  href,
  variant = "primary",
  size = "md",
  showArrow = false,
  className,
}: ButtonProps) {
  const isLink = variant === "link";

  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-[1.34px] font-medium transition-all duration-200 ease-out",
        !isLink && "hover:-translate-y-0.5 active:translate-y-0",
        !isLink && sizeClasses[size],
        variantClasses[variant],
        className,
      )}
    >
      <span>{label}</span>
      {showArrow && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1"
          aria-hidden="true"
        >
          <path
            d="M3.333 8h9.334M8.667 3.667 13 8l-4.333 4.333"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </Link>
  );
}
