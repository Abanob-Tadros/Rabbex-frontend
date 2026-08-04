import { ButtonHTMLAttributes } from "react";
import { VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";
import { buttonVariants } from "./buttonVariants";

type ButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export default function Button({
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}