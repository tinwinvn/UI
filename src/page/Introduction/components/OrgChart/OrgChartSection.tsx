import { OrgGroup } from "./OrgGroup";
import { OrgLeaf } from "./OrgLeaf";
import { OrgBranch } from "./OrgBranch";
import { VerticalLine } from "./Connector";
import { StarIcon, BookIcon, BuildingIcon, MonitorIcon } from "./icons";

export const OrgChartSection = () => (
  <div className="py-6 overflow-x-auto">
    <div className="min-w-175 flex flex-col items-center">
      <OrgGroup
        label="Hội đồng Trường"
        color="bg-amber-500"
        icon={<StarIcon />}
      >
        <OrgLeaf label="Ban Giám hiệu" color="#0054a5" delay={100} />
        <OrgLeaf label="Đảng ủy" color="#0054a5" delay={180} />
        <OrgLeaf label="Công đoàn" color="#0054a5" delay={260} />
      </OrgGroup>

      <VerticalLine delay={300} />

      <OrgBranch>
        <OrgGroup
          label="Các Khoa"
          color="bg-[#0054a5]"
          icon={<BookIcon />}
          delay={350}
        >
          <OrgLeaf label="Kinh tế" delay={450} />
          <OrgLeaf label="QTKD" delay={500} />
          <OrgLeaf label="TC-NH" delay={550} />
        </OrgGroup>

        <OrgGroup
          label="Phòng ban"
          color="bg-emerald-600"
          icon={<BuildingIcon />}
          delay={450}
        >
          <OrgLeaf label="Đào tạo" color="#059669" delay={550} />
          <OrgLeaf label="CTSV" color="#059669" delay={600} />
          <OrgLeaf label="CNTT" color="#059669" delay={650} />
          <OrgLeaf label="KH" color="#059669" delay={700} />
        </OrgGroup>

        <OrgGroup
          label="Trung tâm"
          color="bg-purple-600"
          icon={<MonitorIcon />}
          delay={550}
        >
          <OrgLeaf label="Thư viện" color="#9333ea" delay={650} />
          <OrgLeaf label="CNTT" color="#9333ea" delay={700} />
          <OrgLeaf label="Khảo thí" color="#9333ea" delay={750} />
        </OrgGroup>
      </OrgBranch>
    </div>
  </div>
);
