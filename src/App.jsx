import styles from "./App.module.css";
import UsersList from "./components/UsersList";

import userBanner from "./assets/userBanner.jpg";
import userPhoto from "./assets/userPhoto.jpg";

function App() {
  const user = {
    id: 1,
    firstName: "Іван",
    lastName: "Маслюков",
    nickname: "EvansWick",
    age: 21,
    isOnline: true,
    isMale: true,
    imgSrc:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    userBanner:
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&auto=format&fit=crop&q=80",
    stats: {
      likes: 124,
      followers: 530,
      posts: 12,
    },
  };

  const users = [
    {
      id: 1,
      firstName: "Яна",
      lastName: "Шибко",
      nickname: "Yan_Sh1b",
      age: 21,
      isOnline: true,
      isMale: false,
      imgSrc:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      userBanner:
        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&auto=format&fit=crop&q=80",
      stats: {
        likes: 124,
        followers: 530,
        posts: 12,
      },
    },
    {
      id: 2,
      firstName: "Олена",
      lastName: "Коваль",
      nickname: "helencov",
      age: 23,
      isOnline: false,
      isMale: false,
      imgSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
      userBanner:
        "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600&auto=format&fit=crop&q=80",
      stats: {
        likes: 89,
        followers: 320,
        posts: 5,
      },
    },
    {
      id: 3,
      firstName: "Максим",
      lastName: "Шевченко",
      nickname: "max_sheva",
      age: 25,
      isOnline: true,
      isMale: true,
      imgSrc:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      userBanner:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
      stats: {
        likes: 412,
        followers: 1200,
        posts: 34,
      },
    },
    {
      id: 4,
      firstName: "Анна",
      lastName: "Мельник",
      nickname: "anya_m",
      age: 19,
      isOnline: true,
      isMale: false,
      imgSrc:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80",
      userBanner:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80",
      stats: {
        likes: 15,
        followers: 98,
        posts: 3,
      },
    },
    {
      id: 5,
      firstName: "Дмитро",
      lastName: "Бондаренко",
      nickname: "dima_bond",
      age: 27,
      isOnline: false,
      isMale: true,
      imgSrc:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      userBanner:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80",
      stats: {
        likes: 275,
        followers: 840,
        posts: 19,
      },
    },
    {
      id: 6,
      firstName: "Катерина",
      lastName: "Іванова",
      nickname: "katya_iv",
      age: 22,
      isOnline: true,
      isMale: false,
      imgSrc:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
      userBanner:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600&auto=format&fit=crop&q=80",
      stats: {
        likes: 340,
        followers: 950,
        posts: 42,
      },
    },
    {
      id: 7,
      firstName: "Олександр",
      lastName: "Ткаченко",
      nickname: "alex_tk",
      age: 24,
      isOnline: false,
      isMale: true,
      imgSrc:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80",
      userBanner:
        "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=600&auto=format&fit=crop&q=80",
      stats: {
        likes: 210,
        followers: 415,
        posts: 8,
      },
    },
    {
      id: 8,
      firstName: "Вікторія",
      lastName: "Савченко",
      nickname: "vika_sav",
      age: 20,
      isOnline: true,
      isMale: false,
      imgSrc:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80",
      userBanner:
        "https://images.unsplash.com/photo-1483232539664-d89822fb1478?w=600&auto=format&fit=crop&q=80",
      stats: {
        likes: 560,
        followers: 1400,
        posts: 25,
      },
    },
    {
      id: 9,
      firstName: "Андрій",
      lastName: "Лисенко",
      nickname: "andrey_lys",
      age: 26,
      isOnline: true,
      isMale: true,
      imgSrc:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
      userBanner:
        "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=600&auto=format&fit=crop&q=80",
      stats: {
        likes: 115,
        followers: 290,
        posts: 4,
      },
    },
    {
      id: 10,
      firstName: "Софія",
      lastName: "Григоренко",
      nickname: "sofi_gr",
      age: 21,
      isOnline: false,
      isMale: false,
      imgSrc:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&auto=format&fit=crop&q=80",
      userBanner:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&auto=format&fit=crop&q=80",
      stats: {
        likes: 720,
        followers: 2100,
        posts: 55,
      },
    },
    {
      id: 11,
      firstName: "Тарас",
      lastName: "Петренко",
      nickname: "taras_p",
      age: 28,
      isOnline: true,
      isMale: true,
      imgSrc:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
      userBanner:
        "https://images.unsplash.com/photo-1464802686167-b939a6910659?w=600&auto=format&fit=crop&q=80",
      stats: {
        likes: 85,
        followers: 150,
        posts: 2,
      },
    },
    {
      id: 12,
      firstName: "Марія",
      lastName: "Бойко",
      nickname: "masha_b",
      age: 23,
      isOnline: false,
      isMale: false,
      imgSrc:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&auto=format&fit=crop&q=80",
      userBanner:
        "https://images.unsplash.com/photo-1502759683299-cdcd6974244f?w=600&auto=format&fit=crop&q=80",
      stats: {
        likes: 490,
        followers: 1100,
        posts: 21,
      },
    },
  ];

  return <UsersList users={users}></UsersList>;
}

export default App;
