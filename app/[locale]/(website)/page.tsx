// import SwitchLanguage from "@/components/SwitchLanguage";
// import ThemeSwitcher from "@/components/ThemeSwitcher";
// import SwitchOnOff from "@/components/SwitchOnOff";
import HeroSection from "@/components/Sections/home/HeroSection";
import CategorySection from "@/components/Sections/home/categorySection";
import NewDrops from "@/components/Sections/home/NewDrops";

export default function Home() {
  return (
    <div>
      {/* <SwitchLanguage />
   <ThemeSwitcher />
   <SwitchOnOff /> */}
      <HeroSection />
      <div className="flex flex-col justify-start  px-4 md:px-12 xl:px-34 gap-10 mt-10">
      <CategorySection />
      <NewDrops />
      </div>
    </div>
  );
}
