## Why

目前 README 主要提供安裝、指令與少量技術資訊，但還不足以作為協作者與工程師
理解專案定位、頁面行為、內容模型、路由契約與 SEO 規則的中文入口。這份變更
要把既有實作整理為人類可讀的專案規格，並用 Spectra 持續追蹤。

## What Changes

- 建立新的 `readme-documentation` capability，定義 README 應承載的中文
  專案規格內容
- 建立新的 active change，描述 README 中文規格補全的範圍、設計與任務
- 將 README 補寫需求界定為文件產品化，而非新增 runtime 功能
- 要求 README 與 OpenSpec 規格互相對應，讓人類可讀說明與正式規範長期一致

## Non-Goals

- 不新增網站頁面、內容資料欄位或 runtime 功能
- 不引入 CMS、後端管理介面或新的內容流程
- 不把 README 改寫成 OpenSpec 規範語法的直接複製品

## Capabilities

### New Capabilities

- `readme-documentation`: 定義 README 的中文專案定位、頁面功能、內容模型、
  路由／SEO 摘要與驗證流程說明

### Modified Capabilities

(none)

## Impact

- Affected specs: `readme-documentation`
- Affected code:
  - New: `openspec/specs/readme-documentation/spec.md`,
    `openspec/changes/improve-readme-documentation/proposal.md`,
    `openspec/changes/improve-readme-documentation/design.md`,
    `openspec/changes/improve-readme-documentation/tasks.md`
  - Modified: `README.md`
  - Removed: (none)
