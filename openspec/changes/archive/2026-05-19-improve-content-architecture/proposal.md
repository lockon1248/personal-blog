## Why

專案其實已經完成內容驅動頁面、統一路由與 SEO 的程式調整，但 Spectra
先前無法正確顯示專案背景與規格，因為 OpenSpec 檔案不是它預期的結構。
這份正式變更的目的，就是把目前已經落地的網站架構記錄成可被 Spectra
理解與延續的基線。

## What Changes

- 在 `openspec/config.yaml` 補上專案背景與 artifact 規則
- 將原本零散的內容架構說明提升為正式 capability spec，放入
  `openspec/specs/content-architecture/spec.md`
- 建立一筆可被追蹤的 Spectra change，記錄目前已實作的內容架構、
  路由與 SEO 規則
- 補齊 implementation contract 與 verification checklist，讓後續變更
  能從這份基線繼續擴充

## Capabilities

### New Capabilities

- `content-architecture`: 定義個人網站的集中內容來源、小寫路由契約，
  以及內容頁 SEO 規則

### Modified Capabilities

(none)

## Impact

- Affected specs: `content-architecture`
- Affected code:
  - Modified: `openspec/config.yaml`
  - New: `openspec/specs/content-architecture/spec.md`,
    `openspec/changes/improve-content-architecture/proposal.md`,
    `openspec/changes/improve-content-architecture/design.md`,
    `openspec/changes/improve-content-architecture/tasks.md`
  - Removed: `openspec/specs/content-architecture.md`
