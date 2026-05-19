import firstImage from "../assets/first.webp";

export type PostCategory = "travel" | "city" | "reflection";
export type PhotoCategory = "past-day" | "china" | "future";

export interface PostEntry {
  slug: string;
  title: string;
  excerpt: string;
  publishDate: string;
  category: PostCategory;
  featured: boolean;
  cover: { src: string };
  coverAlt: string;
  seoTitle?: string;
  seoDescription?: string;
  content: string;
}

export interface PhotoEntry {
  slug: string;
  title: string;
  description: string;
  category: PhotoCategory;
  captureDate: string;
  featured: boolean;
  image: { src: string };
  alt: string;
  location: string;
}

export const posts: PostEntry[] = [
  {
    slug: "hokkaido-ten-day-trip",
    title: "日本巡禮：北海道十日遊",
    excerpt: "從雪夜街景到清晨市場，記錄北海道十日旅程中的城市節奏與飲食印象。",
    publishDate: "2024-11-18",
    category: "travel",
    featured: true,
    cover: firstImage,
    coverAlt: "北海道冬季街景與路燈",
    seoTitle: "日本巡禮：北海道十日遊｜Lockon 賴世原",
    seoDescription: "北海道十日旅程的街景、飲食與夜色觀察，收錄攝影作品與旅行故事。",
    content: `
      <h2>冬夜的城市節奏</h2>
      <p>北海道的夜晚安靜得很有層次。車流不算多，風聲卻把街燈的暖色拉得很長，讓人一邊走一邊忍不住放慢速度。</p>
      <h2>食物與移動</h2>
      <p>這趟旅程沒有刻意安排太滿的景點，反而把時間留給街頭、拉麵店與市場。拉麵依舊偏鹹，但在寒冷空氣裡反而顯得剛好；海鮮的新鮮感也比預期更直接。</p>
      <h2>旅行後記</h2>
      <p>回頭看照片時，最想留下的不是單一名勝，而是走路時看見的那些普通片刻。對我來說，旅行真正珍貴的地方，是重新感受到自己對城市與光線的敏感度。</p>
    `,
  },
  {
    slug: "tokyo-morning-observations",
    title: "東京清晨觀察",
    excerpt: "用步行速度重新認識東京，記下通勤節奏、街角店鋪與城市早晨的秩序感。",
    publishDate: "2025-03-02",
    category: "city",
    featured: false,
    cover: firstImage,
    coverAlt: "東京街道與晨光",
    seoTitle: "東京清晨觀察｜Lockon 賴世原",
    seoDescription: "透過清晨散步記錄東京的通勤節奏、街角景象與城市秩序。",
    content: `
      <p>東京的早晨很少喧鬧，但充滿密度。每一條街似乎都已經準備好迎接一天的開始，便利商店、車站出口與小型咖啡店都維持著自己的節奏。</p>
      <p>我喜歡在這種時候拍照，因為光線還沒有變得太硬，人的移動也還保留著一點剛醒來的遲疑。這些細節讓照片不只是紀錄地點，也更像是在記錄狀態。</p>
    `,
  },
  {
    slug: "why-i-still-shoot-travel",
    title: "為什麼我還是持續拍旅行",
    excerpt: "旅行攝影對我來說不是打卡，而是重新整理觀察方式與生活感受的練習。",
    publishDate: "2025-08-09",
    category: "reflection",
    featured: false,
    cover: firstImage,
    coverAlt: "旅行途中拍攝的街頭照片",
    seoTitle: "為什麼我還是持續拍旅行｜Lockon 賴世原",
    seoDescription: "談旅行攝影如何成為整理觀察、保留節奏與重新認識生活的方式。",
    content: `
      <p>每次旅行回來後，我都會重新思考自己到底在拍什麼。比起蒐集景點，我更在意那些讓人停下來的光線、材質與人物距離。</p>
      <p>旅行攝影對我來說比較像是一種訓練。它讓我持續保持觀察，也提醒我不要把日常看得太理所當然。</p>
    `,
  },
];

export const photos: PhotoEntry[] = [
  {
    slug: "sapporo-street-light",
    title: "Sapporo Street Light",
    description: "夜色裡的路燈把街道切成幾個靜止的層次，留下很乾淨的黑白對比。",
    category: "past-day",
    captureDate: "2024-11-16",
    featured: true,
    image: firstImage,
    alt: "札幌夜晚街道與路燈",
    location: "Sapporo, Japan",
  },
  {
    slug: "harbor-reflection",
    title: "Harbor Reflection",
    description: "水面的反光把原本平淡的港口線條變得更柔和，也更有未來感。",
    category: "future",
    captureDate: "2025-01-08",
    featured: true,
    image: firstImage,
    alt: "港口邊的倒影與建築線條",
    location: "Yokohama, Japan",
  },
  {
    slug: "old-alley-beijing",
    title: "Old Alley Beijing",
    description: "老巷與新招牌同時出現在畫面裡，是我最喜歡的城市張力。",
    category: "china",
    captureDate: "2024-09-21",
    featured: false,
    image: firstImage,
    alt: "北京胡同街景",
    location: "Beijing, China",
  },
  {
    slug: "market-opening",
    title: "Market Opening",
    description: "清晨市場剛開門時的忙碌感，讓整張照片多了準備出發的動能。",
    category: "past-day",
    captureDate: "2025-02-11",
    featured: false,
    image: firstImage,
    alt: "清晨市場攤位與人潮",
    location: "Tokyo, Japan",
  },
  {
    slug: "fog-platform",
    title: "Fog Platform",
    description: "月台上的霧氣讓列車進站前的幾秒鐘有了近乎靜止的情緒。",
    category: "future",
    captureDate: "2025-04-19",
    featured: false,
    image: firstImage,
    alt: "有霧氣的列車月台",
    location: "Kyoto, Japan",
  },
  {
    slug: "window-evening",
    title: "Window Evening",
    description: "透過窗框向外看的傍晚城市，有一種很適合慢慢閱讀的節奏。",
    category: "china",
    captureDate: "2024-12-03",
    featured: false,
    image: firstImage,
    alt: "透過窗戶看向傍晚城市街景",
    location: "Shanghai, China",
  },
];
