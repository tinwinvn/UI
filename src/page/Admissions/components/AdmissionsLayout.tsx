import { NavBar } from "../../../common/Navbar/NavBar";
import { Footer } from "../../../common/Footer/Footer";
import { AdmissionsHero } from "./AdmissionsHero";
import { AdmissionsTabNav } from "./AdmissionsTabNav";

interface AdmissionsLayoutProps {
  title: string;
  subtitle: string;
  badge: string;
  children: React.ReactNode;
}

export const AdmissionsLayout = ({ title, subtitle, badge, children }: AdmissionsLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      <AdmissionsHero title={title} subtitle={subtitle} badge={badge} />
      <AdmissionsTabNav />

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-10">
        {children}
      </main>

      <Footer />
    </div>
  );
};
