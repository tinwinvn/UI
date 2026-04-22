export type MenuItem = {
  icon?: string;
  label: string;
  path: string;
  isHeader?: boolean;
  subItems?: subItems[];
};

export type subItems = {
  label: string;
  path: string;
  isActive?: boolean;
};
