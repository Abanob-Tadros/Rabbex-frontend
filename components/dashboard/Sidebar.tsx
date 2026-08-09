import Link from "next/link";
import Logo from "../Logo";
import { Icon } from "@iconify/react";
export default function Sidebar() {
  const Links = [
    {
      title: "Dashboard",
      url: "/Dashboard",
      icon: "ci:house-01",
    },
    {
      title: "Users",
      url: "/users",
      icon: "ci:user-02",
    },
    {
      title: "Products",
      url: "/products",
      icon: "proicons:box-add",
    },
    {
      title: "Orders",
      url: "/orders",
      icon: "ci:handbag",
    },
    {
      title: "Analytics",
      url: "/analytics",
      icon: "thesvg:google-analytics",
    },
    {
      title: "Settings",
      url: "/settings",
      icon: "material-symbols:settings-outline-rounded",
    },
    {
      title: "Website",
      url: "/",
      icon: "mingcute:web-line",
    },
  ];
  return (
    <div className="w-full max-w-70 h-screen flex flex-col  border border-border py-4 pr-4 ">
      <Logo followTheme />
      <div className="w-full border border-border mt-3" />

      {Links.map((link, index) => (
        <Link
          key={index}
          href={link.url}
          className="w-full flex px-4 py-3 mx-2 mt-2 rounded-md  text-xl text-primary hover:bg-background-hover cursor-pointer"
        >
          <Icon icon={link.icon} width={25} className="mr-2 text-primary" />
          {link.title}
        </Link>
      ))}
    </div>
  );
}
