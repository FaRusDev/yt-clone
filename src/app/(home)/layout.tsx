import { HomeLayout } from "@/modules/home/ui/layouts/home-layout"

interface LayoutProps {
  children: React.ReactNode
}

const LayoutPage = ({ children }: LayoutProps) => {
  return (
    <div>
      <HomeLayout>{children}</HomeLayout>
    </div>
  )
}

export default LayoutPage
