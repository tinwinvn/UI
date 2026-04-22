import { useParams } from "react-router-dom";
import { ALL_NEWS } from "../data/newsData";
import { NavBar } from "../common/Navbar/NavBar";
import { Footer } from "../common/Footer/Footer";
import { NewsList } from "./NewsPage/NewsList";
import { ArticleView } from "./NewsPage/ArticleView";

export const NewsPage = () => {
  const { id } = useParams<{ id?: string }>();

  const parsed = id !== undefined ? parseInt(id, 10) : NaN;
  const selectedId = Number.isNaN(parsed) ? ALL_NEWS[0]?.id ?? 0 : parsed;

  const selectedItem = ALL_NEWS.find((n) => n.id === selectedId) ?? null;

  return (
    <>
      <NavBar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="order-2 md:order-1 md:col-span-1">
            <NewsList items={ALL_NEWS} selectedId={selectedId} />
          </div>
          <div className="order-1 md:order-2 md:col-span-2">
            <ArticleView item={selectedItem} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
