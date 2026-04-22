import { Linked } from "./Linked/Linked";
import { News } from "./News/News";
import { Notifications } from "./Notifications/Notifications";
import { Achievements } from "./Achievements/Achievements";
import { CampusCarousel } from "./CampusCarousel/CampusCarousel";

export const BodyGrid = () => {
  return (
    <main>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          <section className="w-full">
            <Notifications />
          </section>
          <section className="w-full">
            <News />
          </section>
          <section className="w-full">
            <Linked />
          </section>
        </div>
      </div>

      <Achievements />

      <CampusCarousel />
    </main>
  );
};
