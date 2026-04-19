import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
};

export function Button({ className, type = "button", ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-brand-gradient px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5",
        className,
      )}
      {...props}
    />
  );
}
