import { NewsSection } from "./NewsSection/NewsSection";
import { Achievements } from "./Achievements/Achievements";
import { QuickLinks } from "./QuickLinks/QuickLinks";
import { CampusCarousel } from "./CampusCarousel/CampusCarousel";
import { Admissions } from "./Admissions/Admissions";
import { Education } from "./Education/Education";
import { Collaboration } from "./Collaboration/Collaboration";

export const BodyGrid = () => {
  return (
    <main>
      <NewsSection />
      <Admissions />
      <Education />
      <Collaboration />
      <Achievements />
      <QuickLinks />
      <CampusCarousel />
    </main>
  );
};
