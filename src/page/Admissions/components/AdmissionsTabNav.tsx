import { NavLink } from "react-router-dom";

interface TabItem {
  label: string;
  path: string;
  icon: React.ReactNode;
}

const tabs: TabItem[] = [
  {
    label: "Đại học chính quy",
    path: "/dai-hoc-chinh-quy",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347"
        />
      </svg>
    ),
  },
  {
    label: "Thạc sĩ & Tiến sĩ",
    path: "/sau-dai-hoc",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
  },
  {
    label: "Học bổng",
    path: "/hoc-bong",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872"
        />
      </svg>
    ),
  },
  {
    label: "Tuyển sinh quốc tế",
    path: "/tuyen-sinh-quoc-te",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3"
        />
      </svg>
    ),
  },
];

export const AdmissionsTabNav = () => (
  <div className="bg-white border-b border-gray-200 sticky top-18 z-40">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <nav
        className="flex gap-1 overflow-x-auto scrollbar-hide -mb-px py-1"
        role="tablist"
      >
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            role="tab"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-3 text-sm font-semibold whitespace-nowrap rounded-t-lg border-b-2 transition-all duration-200 shrink-0 ${
                isActive
                  ? "border-orange-500 text-orange-600 bg-orange-50/60"
                  : "border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300 hover:bg-gray-50"
              }`
            }
          >
            {tab.icon}
            <span className="hidden sm:inline">{tab.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  </div>
);
