import Sidebar from "@/components/dashboard/Sidebar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const cookieStore = await cookies();

  // const token = cookieStore.get("token");

  // if (!token) {
  //   redirect("/login");
  // }

  return (
    <div className="w-full flex flex-row ">
      <Sidebar />
      <div className="w-full">{children}</div>
    </div>
  );
}
