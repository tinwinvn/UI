export type NotificationsType = {
  id: number;
  title: string;
  date: string;
  status: "new" | "old";
};

type Category = "Thông báo" | "Học bổng" | "Sự kiện" | "Lịch thi" | "Đào tạo";

export type NotifItem = NotificationsType & { category: Category };

export const CATEGORY_BADGE: Record<Category, string> = {
  "Thông báo": "bg-blue-100 text-blue-700",
  "Học bổng": "bg-yellow-100 text-yellow-700",
  "Sự kiện": "bg-green-100 text-green-700",
  "Lịch thi": "bg-red-100 text-red-700",
  "Đào tạo": "bg-purple-100 text-purple-700",
};

export const CATEGORY_BAR: Record<Category, string> = {
  "Thông báo": "bg-blue-500",
  "Học bổng": "bg-yellow-400",
  "Sự kiện": "bg-green-500",
  "Lịch thi": "bg-red-500",
  "Đào tạo": "bg-purple-500",
};
