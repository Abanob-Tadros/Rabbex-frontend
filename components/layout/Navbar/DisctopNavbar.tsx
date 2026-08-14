"use client";
//Next
import Link from "next/link";
//Logo
import Logo from "@/components/Logo";
//interfaces
import { INavLinkes } from "./index";
//components
import AnimatedThemeTogglerDemo from "@/components/AnimatedThemeTogglerDemo";
import GlassLayout from "./GlassLayout";
//Iconify
import { Icon } from "@iconify/react";
//types
type Props = {
  Links: INavLinkes[];
  locale: string;
};
//----------------------------
export default function HorizontalNavbar({ Links, locale }: Props) {
  const styleBtn =
    "border-2 border-[#5757572d] rounded-full flex items-center px-2 py-2";
  return (
    <nav className="w-full px-30 fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <GlassLayout className="flex justify-between items-center px-2 ">
        <Logo variant="white" className="w-60 pb-2 pl-6 mr-10" />
        <div>
          {Links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className="w-full px-4 py-2 mx-2 font-semibold text-white cursor-pointer"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* //TODO: add search bar  */}

        <div className="flex items-center px-5 gap-4">
           <Link href={"/Dashboard"} className={`${styleBtn} `}>
            <Icon icon="thesvg:dash" width={25} className="text-white " />
          </Link>
          <div className={`${styleBtn}`}>
            <AnimatedThemeTogglerDemo />
          </div>

          <Link href={"/login"} className={`${styleBtn} `}>
            <Icon icon="griddy-icons:user" width={25} className="text-white " />
          </Link>

          <div className={`${styleBtn}`}>
            <Icon icon="ph:bag" width={25} className="text-white " />
          </div>

        </div>
      </GlassLayout>
    </nav>
  );
}
