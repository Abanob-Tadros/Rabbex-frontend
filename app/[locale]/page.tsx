import SwitchLanguage from "@/components/SwitchLanguage";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import SwitchOnOff from "@/components/SwitchOnOff";
import Image from "next/image";

export default function Home() {
  return (
   <div>
   <SwitchLanguage />
   <ThemeSwitcher />
   <SwitchOnOff />
   </div>
  );
}
