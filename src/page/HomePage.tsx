import { Banner } from "../common/Banner/Banner";
import { Footer } from "../common/Footer/Footer";
import { NavBar } from "../common/Navbar/NavBar";
import { BodyGrid } from "../common/Body/BodyGrid";

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <BodyGrid />
      <Footer />
    </>
  );
};
