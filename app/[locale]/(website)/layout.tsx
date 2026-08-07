import Footer from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { getLocale } from "next-intl/server";
export default async function WebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("WebLayout Rendered");
  const locale = await getLocale();
  return (
    <div >
      <Navbar locale={locale} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
