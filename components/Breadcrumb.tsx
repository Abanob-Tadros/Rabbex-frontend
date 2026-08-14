"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const locales = ["en", "ar"];



export default function Breadcrumb() {
  const pathname = usePathname();

  const segments = pathname
    .split("/")
    .filter(Boolean)
    .filter((segment) => !locales.includes(segment));

  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-5">
      <Link
        href="/"
        className="font-extralight text-xl md:text-xl text-primary hover:text-primary/70"
      >
        Home
      </Link>

      {segments.map((segment, index) => {
        const isLast = index === segments.length - 1;

        const href = "/" + segments.slice(0, index + 1).join("/");

        const label = decodeURIComponent(segment).replace(/-/g, " ");

        return (
          <div key={href} className="flex items-center gap-2">
            <Icon
              icon="material-symbols:chevron-right-rounded"
              className="text-gray-400 text-xl mt-1"
            />

            {isLast ? (
              <span className="font-extralight text-xl  text-primary">{label}</span>
            ) : (
              <Link
                href={href}
                className="font-semibold text-xl text-primary hover:text-primary/70"
              >
                {label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
