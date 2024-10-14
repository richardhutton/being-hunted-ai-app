import SideBarLayout from "@/components/side-bar/layout"

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <SideBarLayout>{children}</SideBarLayout>;
}