## 1. Spectra Baseline

- [x] 1.1 建立 `improve-readme-documentation` change，讓 README 中文規格補全工作能以 proposal/design/specs/tasks 形式被 Spectra 追蹤；驗證方式是執行 `spectra list --json` 並看到新的 active change。
- [x] 1.2 建立 `readme-documentation` capability 定義 README 中文規格範圍；驗證方式是確認 `openspec/specs/readme-documentation/spec.md` 存在，且其 requirements 覆蓋專案定位、頁面功能、內容模型、路由／SEO 與驗證流程。

## 2. Documentation Contract

- [x] 2.1 在 proposal 中明確界定 README 中文規格補全是文件產品化而非 runtime 功能變更；驗證方式是檢查 proposal 已列出交付內容與 non-goals，且未要求新增網站功能。
- [x] 2.2 在 design 中定義 README 與 OpenSpec 的角色分工，讓協作者知道 README 是人類可讀入口、OpenSpec 是正式規格來源；驗證方式是檢查 design 的 Decisions 與 Implementation Contract 明確描述這個關係。
- [x] 2.3 在 tasks 中記錄下一次實作 README 時的交付行為與驗證方式，讓 apply 階段可直接接手；驗證方式是確認每個 task 都同時描述預期行為與驗證目標。
