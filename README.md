# Lockon Personal Blog & Portfolio

Astro + Tailwind 的個人網站，展示 Lockon 的攝影作品、旅遊日誌與聯絡方式。
目前已改為內容驅動架構，文章與作品集中管理在 `src/data/site-content.ts`，
不需要手改列表頁模板。

## 環境需求

- Node.js `22.12.0` 以上
- npm `10` 以上

建議直接使用 `.nvmrc`：

```bash
nvm use
```

## 開發指令

```bash
npm install
npm run dev
npm run check
npm run build
npm run smoke
npm run validate
```

## 內容結構

```text
src/data/
└─ site-content.ts  # 文章、作品、slug、SEO 與展示資料
```

- `posts` 會自動生成 `/journal` 列表與 `/journal/[slug]` 文章頁
- `photos` 會自動生成 `/photography` 作品牆
- Header 導覽與 canonical 已統一改用小寫路由

## 路由

- `/` 首頁
- `/photography` 攝影作品集
- `/journal` 文章列表
- `/journal/[slug]` 單篇文章

舊路由 `/Photograph`、`/Journal`、`/blog` 已保留轉址，避免舊連結失效。

## 品質檢查

- `npm run check`：執行 Astro 型別與內容檢查
- `npm run build`：產生靜態網站
- `npm run smoke`：驗證主要頁面與導覽輸出
- `npm run validate`：串起完整檢查流程

## SEO 與內容維護

- 共用 meta 與 JSON-LD 由 `src/layouts/Layout.astro` 注入
- 列表頁與內容頁會自動輸出對應的 schema 與 canonical
- 若更換正式網域，請同步更新 `astro.config.ts` 的 `site`
