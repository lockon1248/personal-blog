## 1. OpenSpec Baseline

- [x] 1.1 讓 Spectra 顯示專案背景：在 `openspec/config.yaml` 補上 repo context 與 artifact 規則；驗證方式是查看 Spectra project overview，確認 config 面板不再是空白。
- [x] 1.2 讓 `content-architecture` capability 可被辨識：將架構說明移到 `openspec/specs/content-architecture/spec.md`；驗證方式是確認 spec 採用 capability-directory 結構，且 Spectra 能索引到一個 spec capability。

## 2. Change Visibility

- [x] 2.1 讓 `improve-content-architecture` change 在 Spectra 可見：新增 proposal，說明目前內容架構契約；驗證方式是確認 `openspec/changes/improve-content-architecture/proposal.md` 存在，且 `spectra status --change improve-content-architecture --json` 能回報 proposal artifact。
- [x] 2.2 讓目前架構可只靠 Spectra 理解：新增 design 與 task artifacts，描述 content-architecture 的決策與驗證方式；驗證方式是檢查 `design.md`、`tasks.md`，並確認此 change 會出現在 Spectra 的 active change 列表。
