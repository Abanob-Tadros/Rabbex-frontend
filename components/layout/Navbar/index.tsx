// i18n
import { getTranslations } from "next-intl/server";

// Components
import HorizontalNavbar from "./HorizontalNavbar";
// import VerticalNavbar from "./VerticalNavbar";
import Logo from "@/components/Logo";

// Data

export interface INavLinkes {
  title: string;
  url: string;
}
type Props = {
  locale: string;
};
const navLinkes: INavLinkes[] = [
  { title: "Shop", url: "/Shop" },
  { title: "Collections", url: "/Collections" },
  { title: "About", url: "/About" },
];
// -----------------------------
export const Navbar = async ({ locale }: Props) => {
  // const t = await getTranslations("NavbarLinks");
  // const navbarData = createNavbarData(t);

  return (
    <div >
      {/* Mobile */}
      <div className=" block md:hidden">
        <div className="" >
          {/* <VerticalNavbar navbarData={navbarData} followTheme /> */}
        </div>
      </div>
      {/* --------------- */}
      {/* Disctop */}
     <div className="hidden md:block" >
        <HorizontalNavbar Links={navLinkes} locale={locale} />
      </div>
    </div>
  );
};
