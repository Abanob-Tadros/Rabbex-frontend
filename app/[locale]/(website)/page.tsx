import SwitchLanguage from "@/components/SwitchLanguage";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import SwitchOnOff from "@/components/SwitchOnOff";
import Image from "next/image";
import HeroSection from "@/components/Sections/home/HeroSection";

export default function Home() {
  return (
   <div>
   {/* <SwitchLanguage />
   <ThemeSwitcher />
   <SwitchOnOff /> */}
   <HeroSection />
   </div>
  );
}
