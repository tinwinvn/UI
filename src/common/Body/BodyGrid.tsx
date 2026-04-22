import { NewsSection } from "./NewsSection/NewsSection";
import { Admissions } from "./Admissions/Admissions";
import { Education } from "./Education/Education";
import { Collaboration } from "./Collaboration/Collaboration";
import { Achievements } from "./Achievements/Achievements";
import { QuickLinks } from "./QuickLinks/QuickLinks";
import { CampusCarousel } from "./CampusCarousel/CampusCarousel";

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
