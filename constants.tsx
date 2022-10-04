import { Category } from "@prisma/client";

export const BRAND_NAME = "العاب+";
export const DRAWER_ID = "Drawer";
export const CATEGORY_BASE_PATH = "/c";
export const GAME_BASE_PATH = "/g";

export const CATEGORIES: Category[] = [
  {
    id: 1,
    title: "العاب بنات",
    color: "#be185d",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/al3ab-plus.appspot.com/o/categories%2Fgirls-games.webp?alt=media&token=ade16d23-d699-4116-98c4-972660bb5655",
    path: "العاب-بنات",
  },
  {
    id: 2,
    title: "العاب سيارات",
    color: "#b91c1c",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/al3ab-plus.appspot.com/o/categories%2Fcar-games.webp?alt=media&token=5b6a237a-fd12-4305-9841-b00052fdb669",
    path: "العاب-سيارات",
  },
  {
    id: 3,
    title: "العاب اكشن",
    color: "#334155",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/al3ab-plus.appspot.com/o/categories%2Faction-games.webp?alt=media&token=ff8e0589-006c-4397-b70e-a509db1b36a2",
    path: "العاب-اكشن",
  },
  {
    id: 4,
    title: "العاب طبخ",
    color: "#334155",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/al3ab-plus.appspot.com/o/categories%2Fcooking-games.webp?alt=media&token=a4d2a3f1-79c4-4c7b-9093-7ae523a6e84a",
    path: "العاب-طبخ",
  },
  {
    id: 5,
    title: "العاب حرب",
    color: "#047857",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/al3ab-plus.appspot.com/o/categories%2Fstrategy-games.webp?alt=media&token=5f1ac8ce-aedb-43c6-b2c1-e96691cfd8e4",
    path: "العاب-حربية",
  },
  {
    id: 6,
    title: "العاب رياضية",
    color: "#44403c",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/al3ab-plus.appspot.com/o/categories%2Fsport-games.webp?alt=media&token=98344a60-b399-4079-89c3-7a08c3215eaa",
    path: "العاب-رياضية",
  },
  {
    id: 7,
    title: "العاب بازل",
    color: "#4338ca",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/al3ab-plus.appspot.com/o/categories%2Fpuzzle-games.webp?alt=media&token=84110a6b-a327-4d2e-8f9f-c45b2164d6f6",
    path: "العاب-بازل",
  },
  {
    id: 8,
    title: "متعددة اللاعبين",
    color: "#0369a1",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/al3ab-plus.appspot.com/o/categories%2Fmultiplayer-games.webp?alt=media&token=76ed6c11-b2ea-4081-9813-82c2da9bdc07",
    path: "متعددة-اللاعبين",
  },
  {
    id: 9,
    title: "العاب مغامرات",
    color: "#b45309",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/al3ab-plus.appspot.com/o/categories%2Fadventure-games.webp?alt=media&token=32a24788-849b-4f0b-a5aa-7580cfd15d5f",
    path: "العاب-مغامرات",
  },
  {
    id: 10,
    title: "العاب اطفال",
    color: "#0e7490",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/al3ab-plus.appspot.com/o/categories%2Fkids-games.webp?alt=media&token=d7d6b681-43eb-4e94-9e9f-b3f7bcd402af",
    path: "العاب-اطفال",
  },

  {
    id: 11,
    title: "العاب 3D",
    color: "#be123c",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/al3ab-plus.appspot.com/o/categories%2F3d-games.webp?alt=media&token=14013ded-982b-46be-b732-8cb82220a720",
    path: "العاب-3D",
  },
  {
    id: 12,
    title: "العاب منوعة",
    color: "#b91c1c",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/al3ab-plus.appspot.com/o/categories%2Farcade-game.webp?alt=media&token=e69fccad-136c-4fbf-bb0c-e663f58914cf",
    path: "العاب-منوعة",
  },
];

export const INTRO =
  "العاب+ هو موقع العاب عربي يحتوي على مجموعة كبيرة من افضل الالعاب المجانية الجديدة والمتنوعة اونلاين بدون تحميل. تم اختبار كافة الالعاب وانتقائها للتأكد من انها تناسب الفئة العمرية المستخدمة للموقع كما تتشرف ادارة الموقع بسماع استفساراتكم او الابلاغ عن اي مشكلة من خلال صفحة اتصل بنا. نتمنى لكم الاستمرار في زيارة الموقع والاستمتاع بوقتكم.";

export const KEYWORDS: string = `${[
  "العاب",
  "العا ب",
  "العاب مجانية",
  "العاب ماهر",
  "العاب فلاش",
  "العاب كرتون نتورك",
  "ألعاب مجانية",
  "العاب 250",
  "لعبه صب واي",
  "العاب بوكي",
  "العاب اولاد",
  "الالعاب",
  "العاب poki",
  "العاب مجانا",
  "العاب نت",
  "ألعاب حرب",
  "العب مجانا",
  "ألعاب ماهر",
  "العاب مجاني",
  "العاب الاولاد",
  "ألعاب مجانًا",
  "ألعاب طبخ",
  "ألعاب فلاش",
].join(" - ")} العاب اون لا ين`;
