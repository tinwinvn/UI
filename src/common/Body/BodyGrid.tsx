import { NewsSection } from "./NewsSection/NewsSection";
import { Achievements } from "./Achievements/Achievements";
import { QuickLinks } from "./QuickLinks/QuickLinks";
import { CampusCarousel } from "./CampusCarousel/CampusCarousel";

export const BodyGrid = () => {
  return (
    <main>
      <NewsSection />
      <Achievements />
      <QuickLinks />
      <CampusCarousel />
    </main>
  );
};
