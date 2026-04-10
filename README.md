# EmDash管理画面日本語化プラグイン

EmDash 管理画面の英語UI文言を日本語に置き換えるローカル向けプラグインです。

## Install

```bash
npm i @mammosu/emdash-plugin-admin-ja
```

## Usage

```ts
// astro.config.mjs
import { adminJapanesePlugin } from "@mammosu/emdash-plugin-admin-ja";

emdash({
  plugins: [
    adminJapanesePlugin(),
  ],
});
```

## Optional debug mode (development only)

未翻訳候補の収集ログを有効化:
DevTools Console に未翻訳候補のログを出力します。

```env
PUBLIC_EMDASH_ADMIN_JA_DEBUG=1
```

## Notes

- 辞書ベース + 部分一致 + MutationObserver で動的UIにも追従します。
- 入力欄や ProseMirror エディタ本文は翻訳対象から除外しています。
