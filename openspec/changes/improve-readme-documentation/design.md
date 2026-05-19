## Context

目前專案已經有穩定的網站實作與 `content-architecture` capability，但 README
仍偏向技術命令清單，對第一次接手的協作者來說，不足以快速理解網站用途、
頁面構成、資料來源、路由規則與驗證方式。這次變更需要補上一份偏文件產品、
偏交接導向的中文規格入口，並讓它和 OpenSpec 能互相對應。

## Goals / Non-Goals

**Goals:**

- 讓 README 成為協作者與工程師可直接閱讀的中文專案規格入口
- 以獨立 capability 記錄 README 應承載的資訊範圍與品質要求
- 讓 README 的中文描述與既有 `content-architecture` 規格保持一致
- 為下一次文件補寫工作建立完整可 apply 的 Spectra 變更

**Non-Goals:**

- 不改變既有頁面功能、路由或 SEO runtime 行為
- 不在這次變更中發明新的內容欄位、CMS 工作流或部署策略
- 不要求 README 承擔所有正式規範語句，OpenSpec 仍是正式規格來源

## Decisions

### Use a separate readme-documentation capability

README 的目標是人類可讀性與交接效率，和 `content-architecture` 著重 runtime
行為與公開契約不同。把它拆成獨立 capability，可以清楚界定這是文件層的需求，
並降低未來維護時混淆功能規格與文件規格的風險。

Alternative considered: extend `content-architecture` directly.
Rejected because README quality and documentation scope would become hidden
inside a runtime-oriented capability.

### README is the human-readable entrypoint, OpenSpec remains the normative source

README 應使用自然中文整理專案定位、核心頁面、內容模型、路由／SEO 與驗證流程；
OpenSpec 則保留 capability requirements 與 change history。這樣可以同時滿足
協作者閱讀需求與規格可追蹤性。

Alternative considered: write everything only in OpenSpec and keep README short.
Rejected because contributors usually open README first, not the Spectra UI.

### The change is documentation-only but still needs a concrete implementation contract

雖然這筆變更不涉及 runtime 程式碼，但它仍會改變協作者如何理解與維護專案。
因此需要明確定義 README 必須覆蓋哪些內容、如何與 OpenSpec 對齊，以及如何驗證
文字沒有脫離現有實作。

## Implementation Contract

這筆變更完成後，repository SHALL 提供下列可觀察結果：

1. 存在一個 active Spectra change `improve-readme-documentation`，包含
   proposal、design、specs、tasks 四種 artifact。
2. 存在一個 capability `readme-documentation`，定義 README 的中文規格範圍：
   專案定位、核心頁面與功能、內容模型與維護方式、路由與 SEO 規則、
   驗證流程與 OpenSpec 對應關係。
3. 下一次實作這筆 change 時，README 會被補成可讀的中文規格入口，且內容必須
   能從 `src/pages`、`src/data/site-content.ts`、`package.json`、`Layout.astro`
   與既有 `content-architecture` capability 找到對應事實。

Acceptance criteria:

- `spectra status --change improve-readme-documentation --json` 顯示 proposal、
  design、specs、tasks 都存在
- `openspec/specs/readme-documentation/spec.md` 被 Spectra 正常索引
- reviewer 只看這筆 change artifacts，就能知道下次 README 需要補哪些章節、
  用什麼語氣、如何驗證一致性

Scope boundaries:

- In scope: README 補寫規格、OpenSpec 文件能力、README 與既有規格的對應方式
- Out of scope: README 實際內容改寫以外的網站功能調整

## Risks / Trade-offs

- [Risk] README 可能比 OpenSpec 更常被手動修改而產生漂移
  → Mitigation: 在 spec 中要求 README 必須對照既有 capability 與實作事實
- [Risk] 新 capability 讓規格數量增加
  → Mitigation: 將它限定在文件入口需求，不與 runtime 能力重疊
