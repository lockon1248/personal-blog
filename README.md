# Lockon Personal Blog & Portfolio (Astro)

Astro + Tailwind 的極簡個人網站，展示 Lockon 的攝影作品、旅遊日誌與聯絡方式，並透過結構化 FAQ Schema 與 sitemap 提升 SEO。

## 環境需求
- Node.js 18.20.8（建議 18 LTS 同級）
- npm（隨 Node 18 內建）

## 特色
- Astro 5 + Tailwind 3 靜態網站，預設 `bg-custom-beige` 與 `gold-100` 品牌色。
- 首頁全幅 Swiper 輪播，覆寫導航箭頭與分頁點樣式。
- 專屬頁面：`/Photograph` 作品牆、`/Journal` 文章列表、`/blog` 單篇示例。
- 內建 `astro-icon` 圖示（`src/icons`）、FAQ JSON-LD（`src/seo/FAQSchema.json`）、自訂 robots.txt 與 sitemap。
- 共用版型：`src/layouts/Layout.astro` 內含 Header/Footer、Meta 與 FAQ Schema 注入。

## 快速開始
```bash
npm install
npm run dev    # http://localhost:4321
npm run build
npm run preview
```

## 專案結構
```
/
├─ public/              # 靜態資產 (favicon、avatar、circle、robots)
├─ src/
│  ├─ pages/            # 頁面：index, Photograph, Journal, blog/index
│  ├─ components/       # PhotoWall, BlogCard, Pagination
│  ├─ layouts/          # Layout, Header, Footer
│  ├─ icons/            # astro-icon SVG 集合
│  ├─ seo/FAQSchema.json# FAQ 結構化資料
│  └─ style/global.css  # 全域樣式（Tailwind 已啟用）
├─ astro.config.ts      # site URL、Tailwind、icon、sitemap 整合（TypeScript）
├─ tailwind.config.mjs  # 自訂色與掃描路徑
├─ package.json         # 腳本與依賴
└─ tsconfig.json
```

## 技術棧
- Astro 5
- Tailwind CSS
- Swiper
- astro-icon
- @astrojs/sitemap

## 主要套件版本
- astro: ^5.3.0
- @astrojs/tailwind: ^6.0.0
- tailwindcss: ^3.4.11
- astro-icon: ^1.1.5
- swiper: ^11.1.14
- @astrojs/sitemap: ^3.6.0

## 部署
- 產出靜態檔案在 `dist/`，可部署至 Vercel、Netlify 或任意靜態託管。
- `astro.config.ts` 的 `site` 目前指向 `https://personal-blog-beige-mu.vercel.app/`，若更換網域請同步更新以正確生成 sitemap。

## 客製化
- 品牌色/字體：更新 `tailwind.config.mjs` 或 `src/style/global.css`。
- Icon：將 SVG 放入 `src/icons`，於組件中 `<Icon name="...">` 使用。
- FAQ/SEO：編輯 `src/seo/FAQSchema.json`；若需額外 meta 請修改 `src/layouts/Layout.astro`。
- 內容：首頁、作品牆、日誌列表與單篇內容可直接改寫對應 `.astro`；圖片目前使用外部 Firebase URL，可改放 `public/`。
