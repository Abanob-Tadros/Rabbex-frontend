"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";

export default function SwitchLanguage() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const newLocale = locale === "en" ? "ar" : "en";

  const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);

  return (
    <button onClick={() => router.replace(newPath)}>
      {newLocale === "ar" ? "العربية" : "English"}
    </button>
  );
}