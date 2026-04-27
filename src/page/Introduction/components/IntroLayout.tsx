import { NavBar } from "../../../common/Navbar/NavBar";
import { Footer } from "../../../common/Footer/Footer";
import { SideNav } from "./SideNav";
import { PageHero } from "./PageHero";

interface IntroLayoutProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export const IntroLayout = ({ title, subtitle, icon, children }: IntroLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      <PageHero title={title} subtitle={subtitle} icon={icon} />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <SideNav />
          <div className="flex-1 min-w-0">{children}</div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
