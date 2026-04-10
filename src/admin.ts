const TEXT_MAP: Record<string, string> = {
  Dashboard: "ダッシュボード",
  Content: "コンテンツ",
  "Content Types": "コンテンツタイプ",
  Media: "メディア",
  Comments: "コメント",
  Menus: "メニュー",
  Plugins: "プラグイン",
  Settings: "設定",
  Users: "ユーザー",
  Bylines: "バイライン",
  Widgets: "ウィジェット",
  Sections: "セクション",
  Taxonomies: "タクソノミー",
  Redirects: "リダイレクト",
  Search: "検索",
  Filter: "絞り込み",
  Actions: "操作",
  Title: "タイトル",
  Status: "状態",
  Date: "日付",
  Author: "作成者",
  Edit: "編集",
  Delete: "削除",
  Duplicate: "複製",
  Restore: "復元",
  Cancel: "キャンセル",
  Close: "閉じる",
  Save: "保存",
  "Save Changes": "変更を保存",
  "Saving...": "保存中...",
  Create: "作成",
  "Create New": "新規作成",
  New: "新規",
  Update: "更新",
  Publish: "公開",
  Unpublish: "公開解除",
  Draft: "下書き",
  Published: "公開済み",
  Scheduled: "予約済み",
  Loading: "読み込み中",
  "Loading...": "読み込み中...",
  "Load more": "さらに読み込む",
  "No results": "結果がありません",
  "All locales": "すべてのロケール",
  default: "デフォルト",
  Categories: "カテゴリー",
  Tags: "タグ",
  Pages: "ページ",
  Posts: "投稿",
  Trash: "ゴミ箱",
  All: "すべて",
  "Add New": "新規追加",
  "View Site": "サイトを表示",
  draft: "下書き",
  published: "公開済み",
  Deleted: "削除日",
  "Trash is empty": "ゴミ箱は空です",
  "Media Library": "メディアライブラリ",
  "Upload to Library": "ライブラリにアップロード",
  // Dashboard
  "Upload Media": "メディアをアップロード",
  "Recent Activity": "最近の活動",
  "Recent Submissions": "最近の送信",
  "Webhooks": "Webhook",
  // Posts Page
  "Featured Image": "アイキャッチ画像",
  "Select image": "画像を選択",
  "Used as the main visual for this post on listing pages and at the top of the post": "この投稿のメインビジュアルとして、リストページや投稿の上部に使用されます。",
  "Excerpt": "抜粋",
  // Media Page
  // Comments Page
  Pending: "保留中",
  Approved: "承認済み",
  Spam: "スパム",
  Comment: "コメント",
  "No comments awaiting moderation.": "承認待ちのコメントはありません",
  "No approved comments yet.": "承認されたコメントはまだありません",
  "No spam comments.": "スパムコメントはありません",
  "Trash is empty.": "ゴミ箱は空です",
  "Search comments...": "コメントを検索...",
  "All collections": "すべてのコレクション",
  // Menus Page
  "Manage navigation menus for your site": "サイトのナビゲーションメニューを管理します。",
  "Create Menu": "メニューを作成",
  "Create New Menu": "新しいメニューを作成",
  Name: "名前",
  "URL-friendly identifier (e.g., \"primary\", \"footer\")": "URLフレンドリーな識別子（例: primary、footer）",
  Label: "ラベル",
  "Display name for admin interface": "管理画面での表示名",
  "Edit Menu Item": "メニューアイテムを編集",
  "Edit menu items": "メニューアイテムを編集",
  "Add Content": "コンテンツを追加",
  "Add Custom Link": "カスタムリンクを追加",
  Target: "ターゲット",
  "Same window": "同じウィンドウ",
  "New window": "新しいウィンドウ",
  "Select Content": "コンテンツを選択",
  "Search content...": "コンテンツを検索...",
  pages: "ページ",
  posts: "投稿",
  // Redirects Page
  "Manage URL redirects and view 404 errors.": "URLリダイレクトを管理し、404エラーを表示します。",
  "New Redirect": "新しいリダイレクト",
  "Use [param] or [...rest] in paths for pattern matching.": "パスに[param]や[...rest]を使用してパターンマッチングを行います。",
  "Source path": "ソースパス",
  "Destination path": "宛先パス",
  "Status code": "ステータスコード",
  "Group (optional)": "グループ（任意）",
  Enabled: "有効",
  "No redirects yet": "まだリダイレクトはありません。",
  "Create redirect rules to manage URL changes.": "URLの変更を管理するためのリダイレクトルールを作成します。",
  "No 404 errors recorded yet.": "まだ404エラーは記録されていません。",
  // Widgets Page
  Description: "説明",
  "Loading EmDash...": "EmDashを読み込み中...",
  "Loading configuration...": "設定を読み込み中...",
  "EmDash": "EmDash",
  "Forms": "フォーム",
  // "Submissions": "送信",
  "Webhook Settings": "Webhook設定",
  "EmDash CMS v": "EmDash CMS v",
  "Toggle theme (current:": "テーマを切り替え（現在: ",
  "System (dark)": "システム（ダーク）",
  "User": "ユーザー",
  "Loading widgets...": "ウィジェットを読み込み中...",
  "Admin": "管理者",
  "Marketplace": "マーケットプレイス",
  "Themes": "テーマ",
  "Import": "インポート",
  "Manage content widgets in your widget areas": "ウィジェットエリアのコンテンツウィジェットを管理",
  "Add Widget Area": "ウィジェットエリアを追加",
  "Available Widgets": "利用可能なウィジェット",
  "Drag widgets into an area to add them": "ウィジェットをエリアにドラッグして追加",
  "Content Block": "コンテンツブロック",
  "Rich text content": "リッチテキストコンテンツ",
  "Menu": "メニュー",
  "Display a navigation menu": "ナビゲーションメニューを表示",
  "Recent Posts": "最近の投稿",
  "Display a list of recent posts": "最近の投稿のリストを表示",
  "Display category list": "カテゴリーリストを表示",
  "Display tag cloud": "タグクラウドを表示",
  "Search form": "検索フォーム",
  "Archives": "アーカイブ",
  "Monthly/yearly archives": "月別/年別アーカイブ",
  "Footer": "フッター",
  "Widget area displayed in the site footer": "サイトのフッターに表示されるウィジェットエリア",
  "content": "コンテンツ",
  "Sidebar": "サイドバー",
  "Widget area displayed on single post pages": "個別投稿ページに表示されるウィジェットエリア",
  "component": "コンポーネント",
  "To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.": "ドラッグ可能なアイテムを選択するには、スペースバーを押します。ドラッグ中は、矢印キーを使用してアイテムを移動します。再度スペースバーを押すと、新しい位置にアイテムをドロップします。キャンセルするには、エスケープキーを押します。",
  // Sections Page
  "Reusable content blocks you can insert into any content": "任意のコンテンツに挿入できる再利用可能なコンテンツブロック",
  "New Section": "新しいセクション",
  "Loading sections...": "セクションを読み込み中...",
  "About the Author": "著者について",
  "about-author": "著者について",
  "Theme": "テーマ",
  "Brief author bio for use in posts or pages": "投稿やページで使用する簡単な著者紹介",
  "author": "著者",
  "bio": "紹介",
  "about": "について",
  "Newsletter Signup": "ニュースレター登録",
  "newsletter-signup": "ニュースレター登録",
  "A call-to-action block for newsletter subscriptions": "ニュースレター登録のためのコールトゥアクションブロック",
  "newsletter": "ニュースレター",
  "subscribe": "登録",
  "email": "メール",
  "more": "もっと見る",
  "なし preview": "プレビューなし",
  Slug: "スラッグ",
  "Used to identify this section. Lowercase letters, numbers, and hyphens only.": "このセクションを識別するために使用されます。小文字の英字、数字、ハイフンのみ。",
  "作成 Section": "セクションを作成",
  "Copy slug": "スラッグをコピー",
  "Theme Section": "テーマセクション",
  "Saved": "保存済み",
  "words": "単語",
  "characters": "文字",
  "min read": "分で読む",
  "Section Details": "セクションの詳細",
  "Keywords": "キーワード",
  "Comma-separated keywords for search.": "検索用のカンマ区切りのキーワード。",
  "Source": "ソース",
  "This section is provided by the theme. Editing will create a custom copy that overrides the theme version.": "このセクションはテーマによって提供されています。編集すると、テーマバージョンを上書きするカスタムコピーが作成されます。",
  "Theme ID:": "テーマID:",
  // Category Page
  "New Taxonomy": "新しい分類",
  "Add Category": "カテゴリーを追加",
  Category: "カテゴリー",
  Count: "カウント",
  "Loading terms...": "用語を読み込み中...",
  "Manage categories for 投稿": "投稿カテゴリーを管理",
  "作成 Taxonomy": "分類を作成",
  "Define a new taxonomy for classifying content.": "コンテンツを分類するための新しい分類を定義します。",
  "Hierarchical (like categories, with parent/child relationships)": "階層型（カテゴリーのように、親子関係があります）",
  "Add カテゴリー": "カテゴリーを追加",
  "作成 a new category": "新しいカテゴリーを作成",
  Parent: "親",
  "Description (optional)": "説明（任意）",
  "更新 the category details": "カテゴリーの詳細を更新",
  // Tag Page
  "Manage tags for 投稿": "投稿タグを管理",
  "Add Tag": "タグを追加",
  Tag: "タグ",
  tags: "タグ",
  // byline Page
  "Define a new taxonomy for classifying content": "コンテンツを分類するための新しい分類を定義します。",
  "Used as the identifier. Lowercase letters, numbers, and underscores only.": "識別子として使用されます。小文字の英字、数字、アンダースコアのみ。",
  "Collections": "コレクション",
  "Which content types can use this taxonomy": "どのコンテンツタイプがこの分類を使用できるか",
  "Auto-generated from name (you can edit)": "名前から自動生成（編集可能）",
  "作成 a new tag": "新しいタグを作成",
  "Guest Contributor": "ゲスト寄稿者",
  "guest-contributor": "ゲスト寄稿者",
  "- Guest": "- ゲスト",
  "EmDash Editorial": "EmDash 編集部",
  "emdash-editorial": "EmDash 編集部",
  "Display name": "表示名",
  "Website URL": "ウェブサイトURL",
  "Bio": "紹介",
  "Linked user": "リンクされたユーザー",
  "Guest byline": "ゲスト署名",
  "作成 byline": "署名を作成",
  // Content Types Page
  "Define the structure of your content": "コンテンツの構造を定義",
  "New Content Type": "新しいコンテンツタイプ",
  "Features": "機能",
  "Loading collections...": "コレクションを読み込み中...",
  "drafts": "下書き",
  "revisions": "リビジョン",
  "search": "検索",
  "Label (Singular)": "ラベル（単数）",
  "Label (Plural)": "ラベル（複数）",
  "Used in URLs and API endpoints": "URLおよびAPIエンドポイントで使用",
  "URL Pattern": "URLパターン",
  "Pattern for generating URLs, e.g. /blog/": "URL生成のためのパターン、例: /blog/",
  "{slug}": "{スラッグ}",
  "Drafts": "下書き",
  "Save content as draft before publishing": "公開前にコンテンツを下書きとして保存",
  "Revisions": "リビジョン",
  "Track content history": "コンテンツの履歴を追跡",
  "Preview": "プレビュー",
  "Preview content before publishing": "公開前にコンテンツをプレビュー",
  "Enable full-text search on this collection": "このコレクションで全文検索を有効にする",
  "SEO": "SEO",
  "Add SEO metadata fields (title, description, image) and include in sitemap": "SEOメタデータフィールド（タイトル、説明、画像）を追加し、サイトマップに含める",
  "作成 Content Type": "コンテンツタイプを作成",
  "Invite User": "ユーザーを招待",
  "All roles": "すべての役割",
  "Role": "役割",
  "Last Login": "最終ログイン",
  "Passkeys": "パスキー",
  "Active": "アクティブ",
  "Send an invitation email to a new team member.": "新しいチームメンバーに招待メールを送信します。",
  "Email address": "メールアドレス",
  "The invited user will have this role once they complete registration.": "招待されたユーザーは、登録を完了するとこの役割を持ちます。",
  "Send Invite": "招待を送信",
  "Subscriber": "購読者",
  "Contributor": "寄稿者",
  "Editor": "編集者",
  "User Details": "ユーザー詳細",
  "Email": "メール",
  "Account Info": "アカウント情報",
  "Created": "作成日",
  "Last updated": "最終更新日",
  "Last login": "最終ログイン",
  "Email verified": "メール確認済み",
  "No": "いいえ",
  "Yes": "はい",
  "Passkeys (": "パスキー（",
  "Setup passkey": "パスキーを設定",
  "Device-bound": "デバイスに紐付け",
  "Last used": "最終使用",
  "Disable": "無効化",
  "Send Recovery Link": "回復リンクを送信",
  "Can view content": "コンテンツを表示可能",
  "Can create content": "コンテンツを作成可能",
  "Can publish own content": "自身のコンテンツを公開可能",
  "Can manage all content": "すべてのコンテンツを管理可能",
  "Full access": "フルアクセス",
  // Plugins Page
  "plugins": "プラグイン",
  "Loading plugins...": "プラグインを読み込み中...",
  "Manage installed plugins. Enable or disable plugins to control their functionality.": "インストールされたプラグインを管理します。プラグインを有効または無効にして、その機能を制御します。",
  // marketplace
  "permission": "権限",
  "Expand": "展開",
  "details": "詳細",
  "Collapse": "折りたたむ",
  "Browse and install plugins to extend your site.": "サイトを拡張するためのプラグインを閲覧およびインストールします。",
  // Themes Page
  "Browse themes and preview them with your own content.": "テーマを閲覧し、独自のコンテンツでプレビューします。",
  "The theme marketplace is empty. Check back later.": "テーママーケットプレイスは空です。後で再度確認してください。",
  "なし themes found": "テーマが見つかりません",
  // Import from WordPress Page
  "Import from WordPress": "WordPressからインポート",
  "Import posts, pages, and custom post types from WordPress.": "WordPressから投稿、ページ、カスタム投稿タイプをインポートします。",
  "Connect": "接続",
  "Review": "確認",
  "Enter your WordPress site URL": "WordPressサイトのURLを入力",
  "We'll check what import options are available for your site.": "サイトで利用可能なインポートオプションを確認します。",
  "Check Site": "サイトを確認",
  "or upload directly": "または直接アップロード",
  "Upload WordPress export file": "WordPressエクスポートファイルをアップロード",
  "Drag and drop or click to browse (.xml)": "ドラッグアンドドロップまたはクリックして参照 (.xml)",
  "Browse Files": "ファイルを参照",
  // Settings Page
  "General": "一般",
  "Site identity, logo, favicon, and reading preferences": "サイトのアイデンティティ、ロゴ、ファビコン、および表示設定",
  "Social Links": "ソーシャルリンク",
  "Social media profile links": "ソーシャルメディアのプロフィールリンク",
  "Search engine optimization and verification": "検索エンジン最適化と確認",
  "Security": "セキュリティ",
  "Manage your passkeys and authentication": "パスキーと認証を管理",
  "Self-Signup Domains": "自己登録ドメイン",
  "Allow users from specific domains to sign up": "特定のドメインのユーザーが登録できるようにする",
  "API Tokens": "APIトークン",
  "View email provider status and send test emails": "メールプロバイダーのステータスを確認し、テストメールを送信",
  "作成 personal access tokens for programmatic API access": "プログラムによるAPIアクセスのための個人用アクセストークンを作成",
  // allowed domains
  "Allowed Domains": "許可されたドメイン",
  "Users with email addresses from these domains can sign up without an invite. They will be assigned the specified role automatically.": "これらのドメインのメールアドレスを持つユーザーは、招待なしで登録できます。指定された役割が自動的に割り当てられます。",
  "Add Domain": "ドメインを追加",
  "なし domains configured. Users must be invited individually.": "ドメインが設定されていません。ユーザーは個別に招待する必要があります。",
  "Add an allowed domain": "許可されたドメインを追加",
  "Domain": "ドメイン",
  "Default Role": "デフォルトの役割",
  "なし forms yet.": "フォームはまだありません。",
};

const ATTR_MAP: Record<string, string> = {
  Search: "検索",
  "Search...": "検索...",
  Title: "タイトル",
  Slug: "スラッグ",
  Save: "保存",
  Delete: "削除",
  "Notifications": "通知",
  "Loading": "読み込み中",
  "Admin navigation": "管理ナビゲーション",
  "Toggle sidebar": "サイドバーを切り替え",
  "Toggle theme (current: System (dark))": "テーマを切り替え（現在: システム（ダーク））",
  "Theme": "テーマ",
  "Copy about-author to clipboard": "著者についてをクリップボードにコピー",
  "Copy newsletter-signup to clipboard": "ニュースレター登録をクリップボードにコピー",
  "No forms yet": "フォームはまだありません。",
  "Create a form first, then submissions will appear here.": "最初にフォームを作成してください。送信はここに表示されます。",
 };

const SUBSTRING_MAP: Array<[string, string]> = [
  ["Edit ", "編集 "],
  ["Delete ", "削除 "],
  ["Update ", "更新 "],
  ["Publish ", "公開 "],
  ["Unpublish ", "公開解除 "],
  ["Load ", "読み込み "],
];

const missingTexts = new Set<string>();
const missingAttrs = new Set<string>();
let reportTimer: number | null = null;
const debugEnabled =
  import.meta.env.DEV &&
  /^(1|true|on)$/i.test(import.meta.env.PUBLIC_EMDASH_ADMIN_JA_DEBUG ?? "");

declare global {
  interface Window {
    __emdashAdminJa?: {
      getMissing: () => { texts: string[]; attrs: string[] };
      copyMissing: () => string;
      translateNow: () => void;
      clearMissing: () => void;
    };
  }
}

function isExcludedElement(element: Element | null): boolean {
  if (!element) return true;
  if (element.closest("script,style,noscript,textarea,input,select,option")) return true;
  if (element.closest("[contenteditable='true']")) return true;
  if (element.closest(".ProseMirror")) return true;
  return false;
}

function preserveWhitespace(source: string, target: string): string {
  const leading = source.match(/^\s*/)?.[0] ?? "";
  const trailing = source.match(/\s*$/)?.[0] ?? "";
  return `${leading}${target}${trailing}`;
}

function normalizeCandidate(source: string): string {
  return source.replace(/\s+/g, " ").trim();
}

function isUsefulCandidate(text: string): boolean {
  if (text.length <= 1) return false;
  if (/^\d+$/.test(text)) return false;
  if (/^[\W_]+$/.test(text)) return false;
  if (text.startsWith("http://") || text.startsWith("https://")) return false;
  return /[A-Za-z]/.test(text);
}

function applySubstringMap(value: string): string {
  let out = value;
  for (const [from, to] of SUBSTRING_MAP) {
    if (out.includes(from)) out = out.split(from).join(to);
  }
  return out;
}

function scheduleMissingReport(): void {
  if (!debugEnabled) return;
  if (reportTimer !== null) return;
  reportTimer = window.setTimeout(() => {
    reportTimer = null;
    if (missingTexts.size === 0 && missingAttrs.size === 0) return;
    console.info("[admin-ja] 未翻訳候補", {
      texts: Array.from(missingTexts).slice(0, 200),
      attrs: Array.from(missingAttrs).slice(0, 200),
      textCount: missingTexts.size,
      attrCount: missingAttrs.size,
    });
  }, 1200);
}

function translateTextNode(textNode: Text): void {
  const parent = textNode.parentElement;
  if (isExcludedElement(parent)) return;

  const source = textNode.nodeValue ?? "";
  const trimmed = normalizeCandidate(source);
  if (!trimmed) return;

  const translated = TEXT_MAP[trimmed];
  if (translated && translated !== trimmed) {
    textNode.nodeValue = preserveWhitespace(source, translated);
    return;
  }

  const partial = applySubstringMap(trimmed);
  if (partial !== trimmed) {
    textNode.nodeValue = preserveWhitespace(source, partial);
    return;
  }

  if (debugEnabled && isUsefulCandidate(trimmed)) {
    missingTexts.add(trimmed);
    scheduleMissingReport();
  }
}

function translateAttributes(element: Element): void {
  if (isExcludedElement(element)) return;
  const attrs = ["placeholder", "title", "aria-label"] as const;

  for (const name of attrs) {
    const value = element.getAttribute(name);
    if (!value) continue;
    const normalized = normalizeCandidate(value);
    const translated = ATTR_MAP[normalized];
    if (translated && translated !== normalized) {
      element.setAttribute(name, preserveWhitespace(value, translated));
      continue;
    }
    const partial = applySubstringMap(normalized);
    if (partial !== normalized) {
      element.setAttribute(name, preserveWhitespace(value, partial));
      continue;
    }
    if (debugEnabled && isUsefulCandidate(normalized)) {
      missingAttrs.add(normalized);
      scheduleMissingReport();
    }
  }
}

function applyTranslations(root: ParentNode): void {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let current = walker.nextNode();
  while (current) {
    translateTextNode(current as Text);
    current = walker.nextNode();
  }

  if ("querySelectorAll" in root) {
    (root as ParentNode & { querySelectorAll: (s: string) => NodeListOf<Element> })
      .querySelectorAll("[placeholder],[title],[aria-label]")
      .forEach(translateAttributes);
  }
}

function boot(): void {
  applyTranslations(document.body);
  window.__emdashAdminJa = {
    getMissing: () => ({ texts: Array.from(missingTexts), attrs: Array.from(missingAttrs) }),
    copyMissing: () => {
      const payload = JSON.stringify(
        {
          texts: Array.from(missingTexts),
          attrs: Array.from(missingAttrs),
        },
        null,
        2,
      );
      void navigator.clipboard?.writeText(payload);
      return payload;
    },
    translateNow: () => applyTranslations(document.body),
    clearMissing: () => {
      missingTexts.clear();
      missingAttrs.clear();
    },
  };

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === "characterData") {
        translateTextNode(mutation.target as Text);
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.nodeType === Node.TEXT_NODE) {
          translateTextNode(node as Text);
          continue;
        }
        if (node.nodeType === Node.ELEMENT_NODE) {
          translateAttributes(node as Element);
          applyTranslations(node as ParentNode);
        }
      }
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true,
  });
}

if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
}

export const pages = {};
export const widgets = {};
