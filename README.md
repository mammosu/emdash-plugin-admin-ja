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

## Githubから直接src/plugins/に入れて使用する場合

1. `src/plugins/emdash-plugin-admin-ja` にリポジトリをクローンします。

```bash
cd src/plugins
git clone https://github.com/mammosu/emdash-plugin-admin-ja.git
```
2. `astro.config.mjs` でプラグインをインポートして使用します。

```ts
import { adminJapanesePlugin } from "./src/plugins/emdash-admin-ja/index";

export default defineConfig({
  ...,
  integrations: [
    react(),
    emdash({
      ...,
      plugins: [
        ...,
        adminJapanesePlugin()
      ],
      ...
    }),
  ],
  ...,
});
```

## Optional debug mode (development only)

未翻訳候補の収集ログを有効化:
envファイルに `PUBLIC_EMDASH_ADMIN_JA_DEBUG=1` を設定すると、DevTools Console に未翻訳候補のログを出力します。

```env
PUBLIC_EMDASH_ADMIN_JA_DEBUG=1
```

## Notes

- 辞書ベース + 部分一致 + MutationObserver で動的UIにも追従します。
- 入力欄や ProseMirror エディタ本文は翻訳対象から除外しています。
