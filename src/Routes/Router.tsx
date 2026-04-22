import { Route, Routes } from "react-router-dom";
import { HomePage } from "../page/HomePage";
import { NewsPage } from "../page/NewsPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tin-tuc" element={<NewsPage />} />
      <Route path="/tin-tuc/:id" element={<NewsPage />} />
    </Routes>
  );
};
