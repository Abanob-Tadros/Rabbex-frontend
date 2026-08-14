// i18n
import { getTranslations } from "next-intl/server";

// Components
import HorizontalNavbar from "./DisctopNavbar";
import MobileNavbar from "./MobileNavbar";

export interface INavLinkes {
  title: string;
  url: string;
}
type Props = {
  locale: string;
};
// Linkes
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
    <div>
      {/* Mobile */}
      <div className=" block md:hidden  ">
          <MobileNavbar  Links={navLinkes} locale={locale}/>
      </div>
      {/* --------------- */}
      {/* Disctop */}
      <div className="hidden md:block">
        <HorizontalNavbar Links={navLinkes} locale={locale} />
      </div>
    </div>
  );
};
