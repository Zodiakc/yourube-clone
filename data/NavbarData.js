import { nanoid } from "nanoid";
export const NavbarData = [
  {
    id: nanoid(),
    icon: "/home.svg",
    text: "Главная",
    path: "/"
  },
  {
    id: nanoid(),
    icon: "/shorts.svg",
    text: "Shorts",
    path: "/shorts"
  },
  {
    id: nanoid(),
    icon: "/sub.svg",
    text: "Подписки",
    path: "/subs"
  },
  {
    id: nanoid(),
    icon: "/lib.svg",
    text: "Библиотека",
    path: "/library"
  },
  {
    id: nanoid(),
    icon: "/history.svg",
    text: "История",
    path: "/history"
  },
  {
    id: nanoid(),
    icon: "/videos.svg",
    text: "Ваши видео",
    path: "/yourVideos"
  },
  {
    id: nanoid(),
    icon: "/later.svg",
    text: "Смотреть позже",
    path: "/seeLater"
  },
];
