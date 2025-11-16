import type { Item } from "~/types/item";

export const menuItems: Item[] = [
  {
    id: "point_1",
    label: "Dashboard",
    icon: "material-symbols:dashboard",
    to: "/",
    badge: 12,
  },
  {
    id: "point_2",
    label: "Performance",
    icon: "eos-icons:performance",
    to: "/",
  },
  {
    id: "point_3",
    label: "Reports",
    icon: "carbon:report",
    to: "/",
  },
  {
    id: "point_4",
    label: "Audience",
    icon: "fa6-solid:users",
    to: "/",
    badge: 7,
  },
  {
    id: "point_5",
    label: "Calendar",
    icon: "mdi:calendar",
    to: "/",
    badge: 5,
  },
];

export const footerMenu: Item[] = [
  {
    id: "point_6",
    label: "Settings",
    icon: "material-symbols:settings-outline-rounded",
    to: "/",
  },
  {
    id: "point_7",
    label: "Log out",
    icon: "material-symbols:logout",
    to: "/",
  },
];
