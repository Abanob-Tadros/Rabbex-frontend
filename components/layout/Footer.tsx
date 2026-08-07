"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import Logo from "../Logo";

const shopLinks = [
  "All Products",
  "T-Shirts",
  "Hoodies",
  "Sweat Pants",
  "Shoes",
  "Bags & Accessories",
];

const companyLinks = [
  "About Us",
  "Our Story",
  "Lookbook",
  "Careers",
  "Sustainability",
  "Press",
];

const helpLinks = [
  "FAQs",
  "Shipping & Delivery",
  "Returns & Exchanges",
  "Size Guide",
  "Track Your Order",
  "Contact Us",
];

const features = [
  {
    icon: "mdi:truck-fast-outline",
    title: "FREE SHIPPING",
    text: "On orders over $100",
  },
  {
    icon: "mdi:refresh",
    title: "EASY RETURNS",
    text: "30 day return policy",
  },
  {
    icon: "mdi:shield-check-outline",
    title: "SECURE PAYMENT",
    text: "100% secure checkout",
  },
  {
    icon: "mdi:headset",
    title: "24/7 SUPPORT",
    text: "We're here to help",
  },
];

const socialIcons = [
  "mdi:instagram",
  "ic:baseline-tiktok",
  "mdi:facebook",
  "mdi:youtube",
];

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-gray-400">
      <div className="mx-auto px-4 md:px-30 py-7">
        {/* Top */}
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.5fr]">
          {/* Logo */}
          <div>
            <Logo variant="white" className="pb-2 w-2xl"/>

            <p className="mt-6 max-w-xs text-sm leading-7">
              Minimal. Premium. Designed for movement. Built to stand out.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-3">
                <Icon icon="mdi:email-outline" className="text-xl text-white" />
                <span>support@rabbex.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Icon icon="mdi:phone-outline" className="text-xl text-white" />
                <span>+20 123 456 7890</span>
              </div>

              <div className="flex items-center gap-3">
                <Icon
                  icon="mdi:map-marker-outline"
                  className="text-xl text-white"
                />
                <span>Cairo, Egypt</span>
              </div>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
              SHOP
            </h3>

            <ul className="space-y-4">
              {shopLinks.map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
              COMPANY
            </h3>

            <ul className="space-y-4">
              {companyLinks.map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
              HELP
            </h3>

            <ul className="space-y-4">
              {helpLinks.map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              JOIN THE MOVEMENT
            </h3>

            <p className="mt-5 text-sm leading-7">
              Subscribe to get special offers, free giveaways, and
              once-in-a-lifetime deals.
            </p>

            <div className="mt-6 flex overflow-hidden rounded-xl bg-[#1a1a1a]">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-transparent px-5 py-4 outline-none placeholder:text-gray-500"
              />

              <button className="flex w-16 items-center justify-center bg-white text-black transition hover:bg-gray-200">
                <Icon icon="mdi:arrow-right" className="text-xl" />
              </button>
            </div>

            <div className="mt-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                FOLLOW US
              </p>

              <div className="flex gap-3">
                {socialIcons.map((icon) => (
                  <button
                    key={icon}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1b1b1b] transition hover:bg-white hover:text-black"
                  >
                    <Icon icon={icon} className="text-xl" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-white/10"></div>

        {/* Features */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-4 border-r border-white/10 pr-4 last:border-none"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1a1a1a]">
                <Icon icon={item.icon} className="text-2xl text-white" />
              </div>

              <div>
                <h4 className="font-semibold text-white">{item.title}</h4>

                <p className="text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/10"></div>

        {/* Bottom */}

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-sm">
            © 2024 <span className="font-semibold text-white">RABBEX</span>. All
            rights reserved.
          </p>

          <div className="flex flex-wrap gap-8 text-sm">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>

            <Link href="#" className="hover:text-white">
              Terms of Service
            </Link>

            <Link href="#" className="hover:text-white">
              Cookie Policy
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Icon icon="logos:visa" className="text-5xl" />

            <Icon icon="logos:mastercard" className="text-5xl" />

            <Icon icon="logos:apple-pay" className="text-5xl" />

            <Icon icon="simple-icons:meeza" className="text-3xl text-white" />
          </div>
        </div>
      </div>
    </footer>
  );
}
