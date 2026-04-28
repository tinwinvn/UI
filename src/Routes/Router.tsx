import { Route, Routes, Navigate } from "react-router-dom";
import { HomePage } from "../page/HomePage";
import { NewsPage } from "../page/NewsPage";
import { History } from "../page/Introduction/History/History";
import { Mission } from "../page/Introduction/Mission/Mission";
import { Leader } from "../page/Introduction/Leader/Leader";
import { OrgStructure } from "../page/Introduction/OrgStructure/OrgStructure";
import { RegularProgram } from "../page/Admissions/RegularProgram/RegularProgram";
import { GraduateProgram } from "../page/Admissions/GraduateProgram/GraduateProgram";
import { Scholarship } from "../page/Admissions/Scholarship/Scholarship";
import { International } from "../page/Admissions/International/International";

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
      <Route path="/tuyen-sinh" element={<Navigate to="/dai-hoc-chinh-quy" replace />} />
      <Route path="/dai-hoc-chinh-quy" element={<RegularProgram />} />
      <Route path="/sau-dai-hoc" element={<GraduateProgram />} />
      <Route path="/hoc-bong" element={<Scholarship />} />
      <Route path="/tuyen-sinh-quoc-te" element={<International />} />
    </Routes>
  );
};
