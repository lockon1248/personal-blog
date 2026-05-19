## Context

目前程式碼已經採用集中網站資料、公開小寫路由、共用 SEO 組裝方式，
以及 legacy redirect。Spectra 之前看起來像空專案，原因不是沒有做，
而是 repo 內只有一份自由格式的 markdown 筆記，沒有正式 change 與
capability spec。這份 design 的作用，是把目前已經成立的架構正式接進
spec workflow。

## Goals / Non-Goals

**Goals:**

- 讓 Spectra 顯示有意義的專案背景，而不是空白設定
- 用正式 capability spec 表達目前的內容架構
- 為 repo 內已存在的內容來源、路由與 SEO 契約建立可追蹤的 change 記錄

**Non-Goals:**

- 不是重新實作一次網站功能
- 不引入 CMS 或外部內容後端
- 不在這次變更裡擴張超出目前網站架構說明所需的 spec 範圍

## Decisions

### Use one capability for the current site contract

目前已實作的行為高度相關：集中內容來源、小寫路由、內容頁 SEO，
本質上都屬於同一份網站公開契約。先用單一 `content-architecture`
capability 表達，可以讓 spec 集合維持精簡，也比較容易閱讀。

考慮過的替代方案：拆成 routing capability 與 SEO capability。
未採用原因：專案目前規模仍小，拆分只會增加 UI 與維護複雜度，
但不會帶來足夠清晰度。

### Store the formal spec in the directory structure Spectra indexes

Spectra 會索引 `openspec/specs/<capability>/spec.md` 這種結構。
遵守這個結構後，UI 才能正確統計並顯示 capability。

考慮過的替代方案：保留自由格式的 `openspec/specs/*.md` 筆記。
未採用原因：這種格式不一定會被 Spectra 穩定辨識。

## Implementation Contract

這個 repository 的 OpenSpec 層必須對外呈現三種可見 artifact：

1. `openspec/config.yaml` 內的 project context，用來說明技術棧、
   專案慣例與驗證指令。
2. 一份名為 `content-architecture` 的 capability spec，用來描述
   集中內容來源、小寫路由行為、legacy redirect 與 SEO metadata 期待。
3. 一筆名為 `improve-content-architecture` 的 Spectra change，
   內含 proposal、design 與 tasks，用來對應目前程式碼中的既有行為。

驗收標準：

- Spectra 能在 `openspec/specs/` 下辨識至少一個 capability
- Spectra 能在 `openspec/changes/` 下辨識一筆 active change
- reviewer 不需要先打開實作檔案，也能從 config、spec、change artifacts
  理解目前網站架構

範圍界線：

- In scope: OpenSpec 結構、artifact 內容、以及 Spectra UI 可見性
- Out of scope: 超出目前已實作範圍的新增 runtime feature

## Risks / Trade-offs

- [Risk] 正式 spec 之後可能落後於程式碼變動
  → Mitigation: 後續修改持續走新的 Spectra change
- [Risk] 隨著專案成長，單一 capability 可能變得太寬
  → Mitigation: 等 routing 或 SEO 獨立演化時再拆分
