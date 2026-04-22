export type NewsItem = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
  featured?: boolean;
};

export const CATEGORY_BADGE: Record<string, string> = {
  "Tin nhà trường": "bg-blue-100 text-blue-700",
  "Sự kiện": "bg-green-100 text-green-700",
  "Thành tích": "bg-yellow-100 text-yellow-700",
  "Nghiên cứu": "bg-purple-100 text-purple-700",
  "Hợp tác": "bg-orange-100 text-orange-700",
  "Học bổng": "bg-red-100 text-red-700",
  "Tuyển sinh": "bg-teal-100 text-teal-700",
};
