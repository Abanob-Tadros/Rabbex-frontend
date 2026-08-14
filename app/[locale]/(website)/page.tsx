// import SwitchLanguage from "@/components/SwitchLanguage";

// import SwitchOnOff from "@/components/SwitchOnOff";
import HeroSection from "@/components/web/home/HeroSection";
import CategorySection from "@/components/web/home/categorySection";
import NewDrops from "@/components/web/home/NewDrops";
// import Logo from "@/components/Logo";

export default function Home() {
  return (
    <div>
     
      <HeroSection />
      <div className="flex flex-col justify-start  px-4 md:px-12 xl:px-34 gap-10 mt-10">
      <CategorySection />
      <NewDrops />
      
      
      </div>
    </div>
  );
}
 {/* <SwitchLanguage />
  
   <SwitchOnOff /> */}