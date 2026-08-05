import SwitchLanguage from "@/components/SwitchLanguage";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import SwitchOnOff from "@/components/SwitchOnOff";
import Image from "next/image";
import HeroSection from "@/components/Sections/home/HeroSection";
import CategorySection from "@/components/Sections/home/categorySection";

export default function Home() {
  return (
   <div>
   {/* <SwitchLanguage />
   <ThemeSwitcher />
   <SwitchOnOff /> */}
   <HeroSection />
   <div className="flex flex-col px-4 md:px-30">

   <CategorySection />
   </div>

   </div>
  );
}
