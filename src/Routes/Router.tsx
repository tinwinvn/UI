import { Route, Routes, Navigate } from "react-router-dom";
import { HomePage } from "../page/HomePage";
import { NewsPage } from "../page/NewsPage";
import { History } from "../page/Introduction/History/History";
import { Mission } from "../page/Introduction/Mission/Mission";
import { Leader } from "../page/Introduction/Leader/Leader";
import { OrgStructure } from "../page/Introduction/OrgStructure/OrgStructure";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tin-tuc" element={<NewsPage />} />
      <Route path="/tin-tuc/:id" element={<NewsPage />} />
      <Route path="/gioi-thieu" element={<Navigate to="/lich-su" replace />} />
      <Route path="/lich-su" element={<History />} />
      <Route path="/su-mang" element={<Mission />} />
      <Route path="/lanh-dao" element={<Leader />} />
      <Route path="/co-cau" element={<OrgStructure />} />
    </Routes>
  );
};
