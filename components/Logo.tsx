"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

import logoWhite from "@/public/Image/Logo/Logo.png";
import logoDark from "@/public/Image/Logo/Logo dark.png";

import { cn } from "@/lib/cn";

interface LogoProps {
  className?: string;
  variant?: "default" | "white";
  followTheme?: boolean;
  inverseTheme?: boolean;
}

export default function Logo({
  className = "w-28 sm:w-36 md:w-44 lg:w-52",
  variant = "default",
  followTheme = false,
  inverseTheme = false,
}: LogoProps) {
  const { resolvedTheme } = useTheme();

  let logoSrc = logoDark;

  if (followTheme) {
    logoSrc = resolvedTheme === "dark" ? logoWhite : logoDark;
  } else if (inverseTheme) {
    logoSrc = resolvedTheme === "dark" ? logoDark : logoWhite;
  } else {
    logoSrc = variant === "white" ? logoWhite : logoDark;
  }

  return (
    <Image
      src={logoSrc}
      alt="Logo"
      priority
      className={cn("h-auto cursor-pointer", className)}
    />
  );
}