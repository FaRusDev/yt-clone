import { HomeNavbar } from "../components/home-navbar"
import { SidebarProvider } from "@/components/ui/sidebar"

interface HomeLayoutProps {
  children: React.ReactNode
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="w-full">
        <HomeNavbar />
        <div className="flex min-h-screen pt-[4rem]">{children}</div>
      </div>
    </SidebarProvider>
  )
}
