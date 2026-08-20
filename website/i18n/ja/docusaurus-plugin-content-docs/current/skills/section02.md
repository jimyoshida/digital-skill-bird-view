# 02 - ウェブアプリケーション開発

## ウェブプラットフォーム基礎

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > Webアプリケーション基本技術

:::

### ウェブコンセプト

- [World Wide Web](https://en.wikipedia.org/wiki/World_Wide_Web) - ドキュメントおよびその他のウェブリソースが Uniform Resource Locator (URL) で識別され、ハイパーテキストリンクで相互に関連付けられ、インターネットを通じてアクセスできる情報空間です
  - [Hypertext](https://en.wikipedia.org/wiki/Hypertext) - コンピュータディスプレイやその他の電子デバイスに表示されるテキストで、読者が即座にアクセスできる他のテキストへの参照 (ハイパーリンク) を含むテキストです
  - [Semantic Web](https://en.wikipedia.org/wiki/Semantic_Web) - W3C によって設定された標準を通じてインターネットデータをマシンリーダブルにする World Wide Web の拡張で、自動エージェントがより知的に情報を処理できるようにします
  - [URI](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier) - 論理的または物理的なリソースを識別する一意の文字列です
  - [URL](https://url.spec.whatwg.org/) - URL 、ドメイン、IP アドレス、application/x-www-form-urlencoded フォーマット、およびそれらの API を定義する標準です
- コアウェブプロトコル及び言語
  - [HTTP](https://en.wikipedia.org/wiki/HTTP) - 分散型の協調的なハイパーメディア情報システム用のアプリケーションプロトコルです
    - [HTTP cookie](https://en.wikipedia.org/wiki/HTTP_cookie) - サーバーがユーザーのウェブブラウザに送信する小さなデータです
  - [HTML](https://html.spec.whatwg.org/) - World Wide Web のコアマークアップ言語です
  - [CSS](https://www.w3.org/Style/CSS/) - ウェブドキュメントにスタイル (フォント、色、間隔など) を追加するシンプルなメカニズムです
- リアルタイム及びメッセージングプロトコル
  - [WebSockets](https://websockets.spec.whatwg.org/) - ユーザーのブラウザとサーバー間で双方向対話型通信セッションを開くことを可能にするテクノロジーです
  - [WebRTC](https://webrtc.org/) - ウェブブラウザとモバイルアプリケーションにリアルタイム通信 (RTC) を提供する無料のオープンソースプロジェクトです
  - [Server-sent events](https://html.spec.whatwg.org/multipage/server-sent-events.html#server-sent-events) - サーバーが HTTP またはデディケートサーバープッシュプロトコルを使用してウェブページにデータをプッシュできるようにするテクノロジーです
  - [MQTT](https://mqtt.org/) - メッセージキュー / メッセージキューイングサービス用の軽量で publish-subscribe な machine to machine ネットワークプロトコルです
  - [AMQP](https://www.amqp.org/) - メッセージ指向ミドルウェア用のオープンな標準アプリケーション層プロトコルです
- データ及びイベント仕様
  - [CloudEvents](https://cloudevents.io/) - イベントデータを共通の方法で説明するための仕様です
  - [JSON Merge Patch](https://datatracker.ietf.org/doc/html/rfc7396) - ターゲット JSON ドキュメントに対して行われる変更を記述する JSON フォーマットです
  - [OpenAPI spec](https://www.openapis.org/) - HTTP API への標準的で言語に依存しないインターフェースです
  - [TypeSpec](https://typespec.io/) - 開発者が使い慣れた方法で API 形状を説明するのに役立つ最小限の言語です
  - API ツーリング
    - [Redocly CLI](https://redocly.com/) - OpenAPI 定義をリント、バンドル、およびプレビューするのに役立つオープンソースコマンドラインツールです
- ウェブパフォーマンスコンセプト
  - [DNS Prefetching](https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/dns-prefetch) - ユーザーがリンクをたどる前にドメイン名を解決するメカニズムです
- ウェブアプリケーションタイプ
  - [Progressive web app](https://en.wikipedia.org/wiki/Progressive_web_app) - HTML 、CSS 、JavaScript 、および WebAssembly を含む共通ウェブテクノロジーを使用して構築されたウェブを通じて配信されるアプリケーションソフトウェアの一種です

### ブラウザテクノロジー及び DOM

- ブラウザ
  - [Chrome](https://www.google.com/chrome/) - Google が開発したフリーウェアのクロスプラットフォームウェブブラウザです
  - [Chromium](https://www.chromium.org/Home/) - すべてのユーザーがウェブをより安全で高速で安定した方法で体験できるようにすることを目指すオープンソースブラウザプロジェクトです
  - [Firefox](https://www.mozilla.org/en-US/firefox/) - Mozilla Foundation によって開発された無料でオープンソースのウェブブラウザです
  - [w3m](https://w3m.sourceforge.net/) - テキストベースのウェブブラウザおよびページャーです
  - [EWW](https://www.gnu.org/software/emacs/manual/html_mono/eww.html) - Emacs Web Wowser で、Emacs 用のウェブブラウザです
- レンダリングエンジン
  - [WebKit](https://developer.apple.com/documentation/webkit) - アプリケーションに豊富でインタラクティブなウェブコンテンツを表示するためのフレームワークです
  - [Gecko](https://developer.mozilla.org/en-US/docs/Glossary/Gecko) - Mozilla が開発したウェブブラウザエンジンです
  - [Blink](https://www.chromium.org/blink/) - Chromium で使用されるレンダリングエンジンです
  - [Servo](https://servo.org/) - アプリケーションと組み込み使用の両方向けに設計された最新の高性能ブラウザエンジンです
- スクリプトエンジン
  - [V8 (JavaScript engine)](https://v8.dev/) - Google のオープンソースで高性能な JavaScript および WebAssembly エンジンで、C++ で書かれています
  - [JavaScriptCore](https://developer.apple.com/documentation/javascriptcore) - Apple プラットフォームの Safari およびその他のアプリケーションを動かす JavaScript エンジンです
- クライアントスクリプティング API
  - [XMLHttpRequest (XHR)](https://xhr.spec.whatwg.org/) - クライアントとサーバー間のデータ転送のためのスクリプト付きクライアント機能を提供する API です
  - [Fetch Standard](https://fetch.spec.whatwg.org/) - リクエスト、レスポンス、およびそれらをバインドするプロセス (フェッチ) を定義する現行標準です
  - [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) - JavaScript および HTML `<canvas>` 要素を使用してグラフィックスを描画するための手段です
  - [WebGL API](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API) - プラグインを使用せずに互換性のあるウェブブラウザ内で高性能なインタラクティブ 3D および 2D グラフィックスをレンダリングするための JavaScript API です
  - [Web Neural Network API (WebNN)](https://www.w3.org/TR/webnn/) - GPU、CPU、NPU などのオンデバイスハードウェアを利用して、ウェブアプリやフレームワークがディープニューラルネットワークを高速化できるようにする新興のウェブ標準です
- サイト分析ツール
  - [Wappalyzer](https://www.wappalyzer.com/) - ウェブサイトが何で構築されているかを表示するテクノロジープロファイラーです

### ウェブアプリケーションアーキテクチャ

- [Single-page application](https://en.wikipedia.org/wiki/Single-page_application) - ウェブサーバーからの新しいデータを使用して現在のウェブページを動的に書き直すことでユーザーと相互作用するウェブアプリケーションまたはウェブサイトです
- [Multi-page application](https://www.sanity.io/glossary/multipage-application) - 複数ページを備えた従来のウェブ構造で、各ページが独自の URL を持ち、ユーザーがリクエストしたときに個別にダウンロードおよび読み込まれます
- [Microfrontend](https://en.wikipedia.org/wiki/Microfrontend) - 独立して開発されたフロントエンドが全体に構成されるウェブ開発のためのアーキテクチャパターンです
- [Islands Architecture](https://docs.astro.build/en/concepts/islands/) - ページを高速な静的 HTML にレンダリングし、インタラクティビティが必要な場所にのみ JavaScript の選択的な「島」を追加するフロントエンドパターンです
- [Backend for Frontend](https://samnewman.io/patterns/architectural/bff/) - 異なるフロントエンドアプリケーション向けに特別に作成されたバックエンドサービスの別々のセットが作成されるアーキテクチャパターンです
- [Multitier architecture](https://en.wikipedia.org/wiki/Multitier_architecture) - ソフトウェアアーキテクチャの異なるレベルがプレゼンテーション、アプリケーション処理、およびデータマネジメント機能に物理的に分離されている client-server アーキテクチャです
- [Server-side rendering](https://en.wikipedia.org/wiki/Server-side_rendering) - サーバーから静的 HTML をクライアントに送信し、クライアント側の JavaScript がハイドレーションと呼ばれるプロセスでイベントハンドラーを接続してウェブページを動的にする方法です
- [Incremental Static Regeneration](https://nextjs.org/docs/pages/guides/incremental-static-regeneration) - サイト全体を再構築する必要なく、ページごとに静的生成を有効にし、デプロイ後に静的コンテンツを更新できるテクニックです
- [JAMstack](https://jamstack.org/) - ウェブエクスペリエンスレイヤーをデータとビジネスロジックから切り離し、柔軟性、スケーラビリティ、パフォーマンス、および保守性を向上させるアーキテクチャアプローチです

## フロントエンド開発

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > フロントエンドシステム開発
- 1\. ビジネス変革 > 1\.4 デザイン > デジタルプロダクト設計

:::

### UI フレームワーク及びコアライブラリ

- コア SPA フレームワーク
  - [React](https://reactjs.org/) - ウェブおよびネイティブユーザーインターフェース用のライブラリです
    - コアコンセプト
      - [Component](https://react.dev/learn/your-first-component) - ユーザーインターフェースを作成するために使用される基本的なビルディングブロックです
      - [Props](https://react.dev/learn/passing-props-to-a-component) - 親コンポーネントから子コンポーネントへデータを渡すためのメカニズムです
      - [Children](https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children) - コンポーネントを構成できるようにする特別なプロップです
      - [Key Props](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key) - 要素のリストを作成する際に含める必要がある特別な文字列属性です
      - [Rendering](https://react.dev/learn/render-and-commit) - React がコンポーネントに外観を説明するよう要求するプロセスです
      - [Event Handler](https://react.dev/learn/responding-to-events) - イベントに応答して実行される関数です
      - [State](https://react.dev/learn/state-a-components-memory) - コンポーネントの動的データを格納する JavaScript オブジェクトです
      - [Controlled Component](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components) - React state が入力要素の値を制御するコンポーネントです
      - [Hooks](https://react.dev/reference/react/hooks) - 関数コンポーネントから React state およびライフサイクル機能に「フック」できる関数のセットです
      - [Strict Mode](https://react.dev/reference/react/StrictMode) - アプリケーションの潜在的な問題を強調するためのツールです
      - [Side-effect](https://react.dev/learn/synchronizing-with-effects) - 実行中の関数の外側の何かに影響を与える操作を指す用語です
      - [Refs](https://react.dev/learn/referencing-values-with-refs) - レンダーメソッドで作成された DOM ノードまたは React 要素にアクセスする方法を提供する機能です
      - [Context](https://react.dev/learn/passing-data-deeply-with-context) - すべてのレベルでプロップを手動で渡す必要なく、コンポーネントツリーを通じてデータを渡す方法です
      - [Portals](https://react.dev/reference/react-dom/createPortal) - 親コンポーネントの DOM 階層の外に存在する DOM ノードに子をレンダリングするための第一級の方法を提供する機能です
      - [Suspense](https://react.dev/reference/react/Suspense) - コンポーネントツリーの一部に対してローディングインジケーターを指定できるコンポーネントです
      - [Error Boundary](https://react.dev/reference/react/Component#error-boundaries) - 子コンポーネントツリーの任意の場所で JavaScript エラーをキャッチする React コンポーネントです
  - [Preact](https://preactjs.com/) - 同じ最新 API を備えた React への高速な 3kB 代替です
  - [Vue.js](https://vuejs.org/) - ユーザーインターフェースを構築するための JavaScript フレームワークです
  - [Angular](https://angular.dev/) - 開発者が高速で信頼性の高いアプリケーションを構築できるようにするウェブフレームワークです
  - [Svelte](https://svelte.dev/) - コンパイラーを使用して、HTML 、CSS 、JavaScript という言語を使用して簡潔なコンポーネントを記述し、ブラウザで最小限の処理を行う UI フレームワークです
  - [Ember.js](https://emberjs.com/) - 野心的なウェブ開発者向けのフレームワークです
- HTML -First フレームワーク
  - [htmx](https://htmx.org/) - HTML 属性を使用して AJAX 、CSS Transitions 、WebSockets 、Server Sent Events に直接アクセスできるライブラリです
  - [htm](https://github.com/developit/htm) - トランスパイラーが不要な標準的なタグ付きテンプレートを使用した JSX 代替です
- フレームワークに依存しないコアライブラリ
  - [TanStack](https://tanstack.com/) - ウェブ開発向けの高品質でフレームワークに依存しないオープンソースライブラリの集合です
    - [TanStack Query](https://tanstack.com/query) - TS /JS 、React 、Solid 、Vue 、Svelte 、Angular 向けの強力な非同期 state management です
    - [TanStack Router](https://tanstack.com/router) - 最新のウェブアプリケーションを構築するための強力で型安全でフレームワークに依存しないルーターです
    - [TanStack Table](https://tanstack.com/table) - TS /JS 、React 、Vue 、Solid 、Svelte 向けの強力なテーブル及びデータグリッドを構築するためのヘッドレス UI です
    - [TanStack Form](https://tanstack.com/form) - React 、Vue 、Solid 、Svelte 向けの型安全でフレームワークに依存しないフォーム state management です
    - [TanStack Virtual](https://tanstack.com/virtual) - React 、Vue 、Svelte 、Solid 、JS で大きなリスト及びグリッドを仮想化するためのヘッドレス UI です

### State 、ルーティング及びロジック

- State Management
  - [Redux](https://redux.js.org/) - 予測可能で保守可能なグローバル state management のための JS ライブラリです
    - [React-Redux](https://react-redux.js.org/) - Redux の公式 React バインディングです
  - [Zustand](https://github.com/pmndrs/zustand) - 簡略化された flux 原則を使用した小型で高速でスケーラブルなベアボーン state management ソリューションです
  - [Recoil](https://recoiljs.org/) - React 用の state management ライブラリです
  - [XState](https://stately.ai/docs) - 有限状態マシンおよび statechart を作成、解釈、実行するためのライブラリです
- ルーティング
  - [React Router](https://reactrouter.com/) - ユーザーを重視した標準に焦点を当てた、どこにでもデプロイできるマルチストラテジールーターです
- 構文及びテンプレート
  - [JSX](https://react.dev/learn/writing-markup-with-jsx) - JavaScript ファイル内に HTML のようなマークアップを記述できる JavaScript の構文拡張です
  - [MDX](https://mdxjs.com/) - Markdown ドキュメント内で JSX をシームレスに記述できるようにする作者向けフォーマットです
- WASM ランタイム
  - [PyScript](https://pyscript.net/) - Python アプリケーションの作成、デプロイ、および共有を容易にする無料のオープンソースソフトウェア (OSS) です

### スタイリング及び UI コンポーネント

- CSS エコシステム
  - フレームワーク及び UI キット
    - [Bootstrap](https://getbootstrap.com/) - 世界で最も人気のあるフロントエンドオープンソースツールキットです
    - [Tailwind CSS](https://tailwindcss.com/) - クラスが充実したユーティリティファースト CSS フレームワークです
    - [Oat](https://oat.ink/) - 最小限で標準ベースの CSS および JS を提供する超軽量でセマンティックでゼロ依存の HTML UI コンポーネントライブラリです
  - Tailwind コンポーネントライブラリ
    - [daisyUI](https://daisyui.com/) - Tailwind CSS で最も人気のあるコンポーネントライブラリです
  - CSS -in-JS
    - [Emotion](https://emotion.sh/) - JavaScript でスタイルを記述するように設計されたライブラリです
    - [Linaria](https://linaria.dev/) - ゼロランタイム CSS in JS ライブラリです
  - プリプロセッサ
    - [Sass language](https://sass-lang.com/) - CSS にコンパイルされるスタイルシート言語です
  - 変換
    - [CSS Transforms 1](https://www.w3.org/TR/css-transforms-1/) - 要素を 2 次元空間で変換できる CSS モジュールです
    - [CSS Transforms 2](https://www.w3.org/TR/css-transforms-2/) - 要素を 3 次元空間で変換できる CSS モジュールです
- UI コンポーネントライブラリ
  - [templUI](https://templui.io/) - Go および templ 向けに美しく設計された UI コンポーネントの増加するコレクションです
  - [Material UI](https://mui.com/material-ui/) - Google の Material Design を実装するオープンソース React コンポーネントライブラリです
  - [Chakra UI](https://www.chakra-ui.com/) - 製品を高速に構築するためのコンポーネントシステムです
  - [Vuetify](https://vuetifyjs.com/en/) - デザインスキルが不要なオープンソース UI ライブラリで、美しく丁寧に作られた Vue コンポーネントです
- 特殊な UI ウィジェット
  - リッチテキストエディター
    - [Tiptap](https://tiptap.dev/) - ウェブ開発者向けに設計されたヘッドレスでオープンソースのエディターフレームワークです
  - インタラクション及びメディア
    - [Swiper.js](https://swiperjs.com/) - ハードウェアアクセル付きトランジションと素晴らしいネイティブな動作を備えた最新のモバイルタッチスライダーです
    - [Hammer.js](https://hammerjs.github.io/) - マルチタッチジェスチャー用の JavaScript ライブラリです
  - キャンバス及びホワイトボード
    - [tldraw](https://tldraw.dev/) - 高性能な Web キャンバスでホワイトボード、ダイアグラム、キャンバスツールを構築するための React ベースの SDK です

### ビルド及び開発ツーリング

- 開発環境
  - [Storybook](https://storybook.js.org/) - UI コンポーネントおよびページを分離して構築するためのフロントエンドワークショップです
- バンドラー
  - [Vite](https://vitejs.dev/) - 最新のウェブプロジェクトのためにより高速でより充実した開発体験を提供することを目指すビルドツールです
  - [Parcel](https://parceljs.org/) - ゼロ設定ビルドツールです
  - [webpack](https://webpack.js.org/) - 最新の JavaScript アプリケーション向けの静的モジュールバンドラーです
  - [Rspack](https://rspack.rs/) - Rust で書かれた高性能な JavaScript バンドラーです
  - [Rsbuild](https://rsbuild.rs/) - Rspack ベースのウェブビルドツールです
- トランスパイラー
  - [babel](https://babeljs.io/) - JavaScript コンパイラーです
- ミニファイアー
  - [JSMin](https://www.crockford.com/jsmin.html) - JavaScript ファイルからコメントと不要な空白を削除するミニフィケーションツールです
- リンター及びフォーマッター
  - [Biome](https://biomejs.dev/) - JavaScript 、TypeScript 、JSX 、TSX 、JSON 、HTML 、CSS 、GraphQL 用の高速フォーマッター及びリンターで、ウェブプロジェクト向けの統合的なツールチェーンを提供します
  - [Knip](https://knip.dev/) - JavaScript および TypeScript プロジェクトで未使用の依存関係、エクスポート、およびファイルを検出して修正するツールです

## フルスタック及び静的サイトフレームワーク

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > フロントエンドシステム開発
- 3\. テクノロジー > 3\.1 ソフトウェア開発 > バックエンドシステム開発

:::

### フルスタックフレームワーク

- JS /TS フルスタックフレームワーク
  - [Next.js](https://nextjs.org/) - フルスタックウェブアプリケーションを構築するための React フレームワークです
  - [Nuxt.js](https://nuxtjs.org/) - Vue.js を使用してタイプセーフで高性能で本番環境対応のフルスタックウェブアプリケーションおよびウェブサイトを作成するための直感的でかつ拡張可能な無料のオープンソースフレームワークです
  - [Astro](https://astro.build/) - コンテンツ駆動型ウェブサイト向けのウェブフレームワークです
  - [Fresh](https://fresh.deno.dev/) - 速度、信頼性、シンプルさのために構築された次世代ウェブフレームワークです
- Rust フルスタックフレームワーク
  - [Leptos](https://leptos.dev/) - 最新ウェブ向けの最先端の Rust フレームワークです

### 静的サイトジェネレーター

- [Docusaurus](https://docusaurus.io/) - 静的サイトジェネレーター。Markdown ファイルから単一ページアプリケーションを構築し、React の全力を活用して高速なクライアント側ナビゲーションを活かしてサイトをインタラクティブにします
- [mdBook](https://github.com/rust-lang/mdBook) - Markdown ファイルから最新のオンライン書籍を作成するユーティリティです
- [VuePress](https://v2.vuepress.vuejs.org/) - Vue -powered 静的サイトジェネレーターです
- [Hugo](https://gohugo.io/) - ウェブサイト構築向けの世界で最速のフレームワークです
  - [Docsy](https://www.docsy.dev/) - テクニカルドキュメンテーションサイト向けの Hugo テーマで、簡単なサイトナビゲーション、構造などを提供します
- [Jekyll](https://jekyllrb.com/) - 個人、プロジェクト、または組織向けサイトに完璧なシンプルでブログ対応の静的サイトジェネレーターです
- [Eleventy](https://www.11ty.dev/) - JavaScript で書かれたシンプルな静的サイトジェネレーターです
- [Sphinx](http://www.sphinx-doc.org/en/master/) - インテリジェントで美しいドキュメンテーションを簡単に作成できるツールです
- [MkDocs](https://www.mkdocs.org/) - プロジェクトドキュメント構築向けに重視されたシンプルで美しい静的サイトジェネレーターです
  - [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) - MkDocs 静的サイトジェネレーター向けの強力で美しいテーマです
- [Nanoc](https://nanoc.app/) - 小さな個人ブログから大きな企業ウェブサイトまで、何でも構築するのに適した静的サイトジェネレーターです
- [gitmal](https://github.com/antonmedv/gitmal) - Git リポジトリ向けに設計された静的ページジェネレーターです

### ヘッドレス CMS

- クラウドネイティブ及び API -first CMS
  - [Contentful](https://www.contentful.com/) - コンテンツファースト方式でデジタル製品構築を可能にするヘッドレスコンテンツ管理システムです
  - [Strapi](https://strapi.io/) - 最先端のオープンソースヘッドレス CMS です
  - [Sanity](https://www.sanity.io/) - より良いデジタル体験を構築できるようにする構造化コンテンツ用プラットフォームです

## バックエンド開発

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > バックエンドシステム開発

:::

### API アーキテクチャスタイル

- [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) - World Wide Web のアーキテクチャをガイドし開発するために作成されたソフトウェアアーキテクチャスタイルです
- [SOAP (legacy)](https://en.wikipedia.org/wiki/SOAP) - ウェブサービスの実装で構造化情報を交換するためのメッセージングプロトコル仕様です
- [GraphQL](https://graphql.org/) - API のクエリ言語および既存データを使用してそれらのクエリを満たすためのランタイムです
- [gRPC](https://grpc.io/) - あらゆる環境で実行できる最新のオープンソースで高性能なリモートプロシージャコール (RPC) フレームワークです
- [json-rpc](https://www.jsonrpc.org/) - ステートレスで軽量なリモートプロシージャコール (RPC) プロトコルです
- [Webhook](https://en.wikipedia.org/wiki/Webhook) - ウェブページまたはウェブアプリケーションの動作をカスタムコールバックで拡張または変更する方法です

### バックエンドフレームワーク

- JS /TS バックエンドフレームワーク
  - [Fastify](https://www.fastify.io/) - Node.js 向けの高速で低オーバーヘッドのウェブフレームワークで、最適なパフォーマンスと開発者体験のために設計されています
  - [Express.js](https://expressjs.com/) - 最小限で柔軟な Node.js ウェブアプリケーションフレームワークです
  - [Koa](https://koajs.com/) - Express の背後にあるチームによって設計された新しいウェブフレームワークです
  - [Nest.js](https://nestjs.com/) - 効率的で信頼性の高いスケーラブルなサーバー側アプリケーション構築向けの進歩的な Node.js フレームワークです
  - [Hono](https://hono.dev/) - エッジ向けの小型でシンプルで超高速なウェブフレームワークです
- API ツール
  - [tRPC](https://trpc.io/) - スキーマまたはコード生成なしに完全にタイプセーフな API を簡単に構築して消費できるツールです
- Go バックエンドフレームワーク
  - [Echo](https://echo.labstack.com/) - 高性能で拡張可能なミニマリスト Go ウェブフレームワークです
  - [Fiber](https://gofiber.io/) - Go 向けの最速の HTTP エンジンである Fasthttp の上に構築された Express にインスパイアされたウェブフレームワークで、パフォーマンスに配慮した開発を容易にするように設計されています
  - [Gin Web Framework](https://gin-gonic.com/) - Go で書かれたウェブフレームワークです
  - [Gorilla web toolkit](https://www.gorillatoolkit.org/) - HTTP ベースのアプリケーション記述向けに有用で構成可能なパッケージを提供する有益なツールキットです
  - [Yokai](https://ankorstore.github.io/yokai/) - バックエンドアプリケーション向けのシンプルでモジュール式で監視可能な Go フレームワークです
  - [Kratos](https://github.com/go-kratos/kratos) - トランスポート、ミドルウェア、レジストリ、設定、ロギング、コード生成のための API を備えた、クラウドネイティブなマイクロサービスを構築するための軽量な Go フレームワークです
- Python バックエンドフレームワーク及びサーバー
  - [WSGI](https://wsgi.readthedocs.io/en/latest/index.html) - Web Server Gateway Interface
    - [Gunicorn](https://gunicorn.org/) - UNIX 向けの Python WSGI HTTP サーバーです
    - [Flask](https://palletsprojects.com/p/flask/) - 軽量な WSGI ウェブアプリケーションフレームワークです
  - [ASGI](https://asgi.readthedocs.io/en/latest/specs/main.html) - WSGI の精神的後継で、ウェブサーバー、フレームワーク、アプリケーション間の互換性のための長年の Python 標準です
    - [Uvicorn](https://www.uvicorn.org/) - uvloop と httptools を使用した高性能向けの Python 用の稲妻高速 ASGI サーバー実装です
    - [Hypercorn](https://hypercorn.readthedocs.io/en/latest/) - sans-io hyper 、h11 、h2 、wsproto ライブラリベースの ASGI および WSGI ウェブサーバーで、HTTP /1 、HTTP /2 、HTTP /3 のサポート付きです
    - [FastAPI](https://fastapi.tiangolo.com/) - 標準 Python 型ヒントに基づいて Python で API を構築するための最新で高速 (高性能) なウェブフレームワークです
    - [SlowAPI](https://github.com/laurents/slowapi) - ASGI アプリケーションをレート制限するための小さなライブラリです
- Ruby バックエンドフレームワーク及びサーバー
  - [Ruby on Rails](https://rubyonrails.org/) - Model - View - Controller (MVC) パターンに従うデータベース-バック型ウェブアプリケーション作成に必要なすべてを含むウェブアプリケーションフレームワークです
  - [Rack](https://rack.github.io/) - モジュール式 Ruby ウェブサーバーインターフェースです
    - [Puma](https://puma.io/) - Ruby 及び Rack 向けの高速で並行処理対応のウェブサーバーです
    - [Falcon](https://socketry.github.io/falcon/) - async 、async -container 、async -http の上に構築された multi -process 、multi -fiber rack -compatible HTTP サーバーです
    - [Sinatra](https://sinatrarb.com/) - 最小限の手間で Ruby でウェブアプリケーションを迅速に作成するための DSL です
  - [Sidekiq](https://sidekiq.org/) - Ruby 向けのシンプルで効率的なバックグラウンド処理ツールです
  - [Shrine](https://shrinerb.com/) - Ruby アプリケーション向けのファイル添付ツールキットです
- Perl バックエンドフレームワーク (legacy)
  - クラシック CGI
    - [mod_cgi](https://httpd.apache.org/docs/current/mod/mod_cgi.html) - CGI スクリプト実行向けのモジュールです
    - [CGI.pm](https://metacpan.org/pod/CGI) - Common Gateway Interface リクエストおよびレスポンス処理向けのモジュールです
  - Fast CGI
    - [mod_fcgid](https://httpd.apache.org/mod_fcgid/) - mod_cgi または cgid に代わる高性能です
    - [FCGI.pm](https://metacpan.org/pod/FCGI) - FastCGI アプリケーション向けのモジュールです
- Java バックエンドフレームワーク
  - [Jakarta EE](https://jakarta.ee/) - エンタープライズソフトウェア開発向けの Java API を定義する仕様のセットです
    - [Apache Tomcat](https://tomcat.apache.org/) - オープンソースのウェブサーバーおよびサーブレットコンテナーです
  - [Spring](https://spring.io/) - Java をシンプルで最新で生産的でリアクティブでクラウドレディにするプロジェクトです
    - [Spring Boot](https://spring.io/projects/spring-boot) - Spring プラットフォームおよびサードパーティーライブラリに対して意見を提供するツールで、最小限の手間で開始できます
- .NET バックエンドフレームワーク
  - [ASP.NET](https://dotnet.microsoft.com/en-us/apps/aspnet) - .NET および C# でウェブアプリケーションおよびサービスを構築するための無料でクロスプラットフォームのオープンソースフレームワークです
- Elixir バックエンドフレームワーク
  - [Phoenix](https://www.phoenixframework.org/) - より少ないコードおよびより少ない可動部でより豊かでインタラクティブなウェブアプリケーションを迅速に構築し、API 、HTML5 アプリケーションなど大規模で構築するためのウェブフレームワークです
- GraphQL サーバー
  - [Apollo Server](https://www.apollographql.com/docs/apollo-server) - オープンソースで仕様準拠の GraphQL サーバーで、任意の GraphQL クライアントと互換性があります

## ウェブインフラストラクチャ

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > クラウドインフラ活用

:::

### ウェブサーバー及びプロキシ

- ウェブサーバー及びリバースプロキシサーバー
  - [NGINX](https://www.nginx.com/) - ウェブサービス、リバースプロキシ、キャッシング、ロードバランシング、メディアストリーミング、およびその他のためのオープンソースソフトウェアです
  - [Apache HTTP Server](https://httpd.apache.org/) - UNIX および Windows を含む最新のオペレーティングシステム向けのオープンソース HTTP サーバーを開発および保守するプロジェクトです
  - [Caddy](https://caddyserver.com/) - サイト、サービス、およびアプリケーションを提供するための強力で拡張可能なプラットフォームで、Go で書かれています
  - [HAProxy](https://www.haproxy.org/) - TCP および HTTP ベースのアプリケーション向けに高可用性、ロードバランシング、およびプロキシを提供する無料で非常に高速で信頼性の高いリバースプロキシです
  - [nodejs http-server](https://github.com/http-party/http-server#readme) - シンプルな静的 HTTP サーバーです
  - [goshs](https://github.com/patrickhener/goshs) - HTTP /S 、WebDAV 、SFTP 、SMB 、LDAP /S 、NTLM ハッシュキャプチャ、DNS /SMTP コールバック、TLS 、認証、共有リンクをサポートする赤チーム及び開発者向けの機能豊富なシングルバイナリファイルサーバーです
- API マネジメント
  - [Unkey](https://www.unkey.com/) - 開発者が API をセキュア、管理、スケールするのに役立つようにオープンソースの API 管理プラットフォームです
  - [Kong API gateway](https://konghq.com/products/kong-gateway) - 軽量で高速で柔軟なクラウドネイティブ API ゲートウェイです
  - [Azure API Management](https://azure.microsoft.com/en-us/services/api-management/) - すべての環境の API を管理するためのハイブリッドで multicloud マネジメントプラットフォームです
  - [Amazon API Gateway](https://aws.amazon.com/api-gateway/) - 開発者があらゆるスケールで API を作成、公開、保守、監視、セキュアに行うのを容易にする完全に管理されたサービスです
  - [Google Cloud Apigee](https://cloud.google.com/apigee) - API サービスの開発と管理向けのプラットフォームです
  - [Gravitee](https://www.gravitee.io/) - あらゆるインフラストラクチャ全体の API を管理、セキュア化、統治するための単一ペインガラスを提供する統一 API 可視性及び統治プラットフォームです

### CDN 及びエッジコンピューティング

- コンセプト
  - [Web cache](https://en.wikipedia.org/wiki/Web_cache) - 帯域幅使用量、サーバー負荷、および認識遅延を削減するために HTML ページおよび画像などのウェブドキュメントの一時保管 (キャッシング) のための情報技術です
  - [Content delivery network](https://en.wikipedia.org/wiki/Content_delivery_network) - プロキシサーバーおよびそれらのデータセンターの地理的に分散されたネットワークです
    - [Point of presence](https://en.wikipedia.org/wiki/Point_of_presence) - 通信エンティティ間の人工的な分界点またはインターフェースポイントです
- フォワードプロキシサーバー
  - [Squid](http://www.squid-cache.org/) - HTTP 、HTTPS 、FTP などをサポートするウェブ向けのキャッシングプロキシです
- CDN プロバイダー
  - [Cloudflare](https://www.cloudflare.com/) - インターネットに接続するすべてのものをセキュア、プライベート、高速、信頼性の高くするために設計されたグローバルネットワークです
    - [Cloudflare Workers](https://workers.cloudflare.com/) - インフラストラクチャの設定や保守なしで、まったく新しいアプリケーションを作成したり既存のアプリケーションを拡張したりできるサーバーレス実行環境です
    - [Cloudflare Workers Bindings](https://developers.cloudflare.com/workers/runtime-apis/bindings/) - Worker が Cloudflare Developer Platform のリソースと相互作用できるようにするメカニズムで、Worker からリソースにアクセスするための REST API よりも優れたパフォーマンスおよびより少ない制限を提供します
  - [Amazon CloudFront](https://aws.amazon.com/cloudfront/) - 高性能、セキュリティ、開発者の利便性のために構築されたコンテンツ配信ネットワーク (CDN) サービスです
    - [Lambda@Edge](https://aws.amazon.com/lambda/edge/) - アプリケーションのユーザーに近い場所でコードを実行できるようにする Amazon CloudFront の機能です
  - [Google Cloud CDN](https://cloud.google.com/cdn) - ウェブおよびビデオコンテンツ配信を加速化するコンテンツ配信ネットワーク (CDN) です
  - [Azure Front Door](https://azure.microsoft.com/en-us/products/frontdoor/) - グローバルウェブアプリケーション及びコンテンツの高速配信向けのセキュアでスケーラブルなエントリポイントを提供する最新のクラウドコンテンツ配信ネットワーク (CDN) です
- JAMstack ホスティング
  - [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/) - GitLab リポジトリから静的ウェブサイトを直接公開できるようにする機能です
  - [Cloudflare Pages](https://pages.cloudflare.com/) - フロントエンド開発者がウェブサイトで協力および デプロイするための JAMstack プラットフォームです

## 分散型ウェブ

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.2 デジタルテクノロジー > その他先端技術

:::

### ブロックチェーンテクノロジー

- [Web3](https://en.wikipedia.org/wiki/Web3) - 分散化、ブロックチェーンテクノロジー、トークンベースの経済学などの概念を組み込む World Wide Web の新しいイテレーションのアイデアです
- [Blockchain](https://en.wikipedia.org/wiki/Blockchain) - レコードの増加するリストを持つ分散台帳です
  - [Hashcash](https://en.wikipedia.org/wiki/Hashcash) - メールスパムおよびサービス拒否攻撃を制限するために使用される proof-of -work システムです
  - [Proof of work](https://en.wikipedia.org/wiki/Proof_of_work) - 一方の当事者が一定量の特定の計算努力が消費されたことを他者に証明する暗号証明の形式です
- [Smart contract](https://en.wikipedia.org/wiki/Smart_contract) - 契約条件に従ってイベントおよびアクションを自動的に実行、制御、またはドキュメント化するコンピュータプログラムまたはトランザクションプロトコルです
- [Bitcoin](https://bitcoin.org/) - ピアツーピア bitcoin ネットワークで転送できる分散化されたデジタル通貨です
- [Ethereum](https://ethereum.org/) - 集中管理当局からの許可を必要としないデジタル資産、データ、およびアイデンティティの直接所有権を提供するグローバルな分散化ネットワークです
- [Non-fungible token](https://en.wikipedia.org/wiki/Non-fungible_token) - ブロックチェーンに記録され、所有権および真正性を証明するために使用される一意のデジタル識別子です
- [Decentralized autonomous organization](https://en.wikipedia.org/wiki/Decentralized_autonomous_organization) - 集中管理上のリーダーシップなしのメンバー所有コミュニティで、投票およびファイナンスをブロックチェーンで処理する分散化コンピュータプログラムによって管理されます
- [Solidity](https://en.wikipedia.org/wiki/Solidity) - 様々なブロックチェーンプラットフォーム、最も顕著には Ethereum でスマートコントラクトを実装するためのプログラミング言語です
- [Web3.js](https://web3js.org/) - 開発者が Ethereum および他の EVM -compatible ブロックチェーンに接続および相互作用できるようにする TypeScript /JavaScript ライブラリです
- [ethers.js](https://ethers.org/) - Ethereum のすべての必要のための シンプルで、コンパクトで完全な JavaScript ライブラリです
- [MetaMask](https://metamask.io/) - ユーザーがデータおよび資産に対する制御を維持しながら、暗号化通貨の購入、販売、スワップ、および保存を有効にする暗号化ウォレットです
- [WalletConnect](https://walletconnect.com/) - モバイル暗号化ウォレットおよびデスクトップベースの分散化アプリケーション間で暗号化接続を確立するオープンソースプロトコルです
- [Hardhat](https://hardhat.org/) - Ethereum および EVM -compatible ブロックチェーン向けの開発環境で、開発者が Solidity スマートコントラクトをコンパイル、デプロイ、テスト、デバッグするのに役立ちます

### 分散化ソーシャル

- [ActivityPub](https://activitypub.rocks/) - ActivityStreams 2.0 データフォーマットに基づく分散化ソーシャルネットワーキングプロトコルです
- [AT Protocol](https://atproto.com/) - ユーザーがアイデンティティを所有し、コンテンツが相互に関連した JSON レコードとして表現されるソーシャルアプリケーション構築向けのオープンデータネットワークです
- [Fediverse](https://en.wikipedia.org/wiki/Fediverse) - ウェブパブリッシングおよびファイルホスティング向けに使用され、相互に通信できる相互接続サーバーのアンサンブルです
- [Mastodon](https://joinmastodon.org/) - ユーザーにアルゴリズムまたは広告なしでフィードを制御させ、独立したサーバーが ActivityPub プロトコルを通じて相互運用することを許可する無料でオープンソースの分散化ソーシャルメディアプラットフォームです
- [Bluesky](https://en.wikipedia.org/wiki/Bluesky) - アメリカを拠点とする公益企業であるマイクロブログソーシャルメディアサービスおよび公益企業です
- [Nostr](https://nostr.com/) - 暗号署名を使用して複数の独立したサーバー ( リレー ) と呼ばれる検閲耐性通信を有効にするオープンで分散化ソーシャルプロトコルです
- [Matrix](https://en.wikipedia.org/wiki/Matrix_(protocol)) - 異なるサービスプロバイダー間でシームレスな通信を可能にするリアルタイム通信向けのオープン標準および通信プロトコルです
- [PeerTube](https://joinpeertube.org/) - 独立したビデオホスティングプラットフォーム作成向けの無料でオープンソースのツールで、分散化ネットワークを形成するために接続され、集中型サービスに代わるものを提供します
- [Lemmy](https://join-lemmy.org/) - ユーザーが企業追跡またはコマーケティングなしで経験を制御できるようにする分散化ディスカッションプラットフォームです
- [Diaspora](https://diasporafoundation.org/) - ネットワークを形成するために相互運用する pod と呼ばれる独立して所有されたノードで構成される非営利でユーザー所有の分散ソーシャルネットワークです
- [Secure Scuttlebutt](https://scuttlebutt.nz/) - 企業データ収集から自由なローカルコミュニティ開発を有効にする分散化ソーシャルネットワークプラットフォームです

## 開発及びテストツール

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > コンピュータサイエンス
- 3\. テクノロジー > 3\.1 ソフトウェア開発 > チーム開発

:::

### ウェブ /HTTP クライアント

- HTTP CLI ツール
  - [cURL](https://curl.haxx.se/) - URL でデータを転送するためのコマンドラインツール及びライブラリです
  - [Wget](https://www.gnu.org/software/wget/) - HTTP 、HTTPS 、FTP 、FTPS を使用してファイルを取得するための無料ソフトウェアパッケージです
  - [curlie](https://github.com/rs/curlie) - curl のパワーと httpie の使いやすさです
  - [hurl](https://hurl.dev/) - シンプルなプレーンテキストフォーマットで定義された HTTP リクエストを実行するコマンドラインツールです
  - [httpie cli](https://httpie.io/cli) - API エラについての シンプルで強力なコマンドライン HTTP および API テストクライアントです
  - [wuzz](https://github.com/asciimoo/wuzz) - HTTP 検査向けのインタラクティブ CLI ツールです
  - [httptap](https://github.com/monasticacademy/httptap) - Linux プログラムによって行われた HTTP および HTTPS リクエストを表示するツールです
- HTTP クライアントライブラリ
  - [Python Requests](https://docs.python-requests.org/en/latest/) - 人間のために構築された優雅でシンプルな Python 向け HTTP ライブラリです
  - [JS Axios](https://axios-http.com/) - node .js およびブラウザ向けの promise ベースの HTTP クライアントです
  - [Go Resty](https://github.com/go-resty/resty) - Go 向けのシンプルな HTTP および REST クライアントライブラリです
  - [Go FastHTTP](https://github.com/valyala/fasthttp) - Go 向けの高速 HTTP パッケージです
  - [Surf](https://github.com/enetx/surf) - Chrome /Firefox ブラウザ偽装、HTTP /3 と QUIC フィンガープリント、JA3 /JA4 TLS エミュレーション、アンチボット回避を備えた高度な Go HTTP クライアントです
  - [Typhoeus](https://github.com/typhoeus/typhoeus) - libcurl をラップして高速で信頼性の高いリクエストを行うライブラリです
  - [Ruby Net](https://docs.ruby-lang.org/en/master/Net.html) - client -side インターネットプロトコルを実装するクラスの集合です
  - [httpx](https://gitlab.com/os85/httpx) - Ruby プログラミング言語向けの HTTP クライアントライブラリです
  - [wreq-ruby](https://github.com/SearchApi/wreq-ruby) - 正確に様々なブラウザを TLS /HTTP2 署名で エミュレートする高度なブラウザフィンガープリント付きの簡単で強力な Ruby HTTP クライアントです
  - [Rust reqwest](https://docs.rs/reqwest/latest/reqwest/) - エルゴノミックで非同期 HTTP クライアントです
- GraphQL ライブラリ
  - [URQL](https://commerce.nearform.com/open-source/urql/) - React 、Svelte 、Vue 、またはプレーン JavaScript 向けの高度にカスタマイズ可能で多目的な GraphQL クライアントです
- API テストプラットフォーム
  - [Bruno](https://www.usebruno.com/) - Git 統合でフルオフラインでオープンソースの API クライアントです
  - [Postman/Newman](https://www.postman.com/) - API 構築および使用向けの API プラットフォームです
- クラシックウェブオートメーション
  - [Mechanize](https://metacpan.org/pod/WWW::Mechanize) - ウェブサイトとの相互作用を自動化するのに役立つモジュールです
  - [Mechanize (Ruby)](https://github.com/sparklemotion/mechanize) - 自動化されたウェブ相互作用を簡単にする ruby ライブラリです

### ウェブデバッグツール

- [Chrome DevTools](https://developer.chrome.com/docs/devtools/) - Google Chrome ブラウザに直接組み込まれたウェブ開発者ツールのセットです
- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/) - HTML 、CSS 、JavaScript を検査、編集、デバッグできるようにする Firefox に組み込まれたウェブ開発者ツールのセットです
- [React Developer Tools](https://react.dev/learn/react-developer-tools) - React コンポーネント を検査し、props および state を編集し、React アプリケーション内のパフォーマンス問題を特定できるブラウザ拡張及びスタンドアロンデバッガーです
- [Vue.js devtools](https://devtools.vuejs.org/) - コンポーネント検査および state management デバッグを提供する Vue .js アプリケーションデバッグ向けのブラウザ拡張です
- [Redux DevTools](https://github.com/reduxjs/redux-devtools) - ホットリロード、アクション再生、カスタマイズ可能な UI を含む Redux 開発ワークフロー向けの power-ups を提供する開発ツールです
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) - パフォーマンス、アクセシビリティ、SEO 、ベストプラクティスを監査することでウェブページの品質を向上させるのに役立つオープンソースで自動化されたツールです
- [Fiddler](https://www.telerik.com/fiddler) - あらゆるブラウザ、システム、プラットフォーム向けの無料ウェブデバッグプロキシです
- [Charles Proxy](https://www.charlesproxy.com/) - 開発者がマシンとインターネット間のすべての HTTP および SSL /HTTPS トラフィック (リクエスト、レスポンス、ヘッダーを含む) を表示できるようにする HTTP プロキシ /モニターです
- [mitmproxy](https://mitmproxy.org/) - デバッグ、テスト、ペネトレーションテスト向けウェブトラフィックをインターセプト、検査、修正、再生できる無料でオープンソースのインタラクティブ HTTPS プロキシです
- [Requestly](https://requestly.com/) - 開発者がデバッグとテスト向けにリアルタイムで URL 、ヘッダー、API レスポンスを修正できるようにする HTTP インターセプターです

### ウェブテストオートメーションフレームワーク

- ブラウザオートメーション及びテスト
  - [Puppeteer](https://developer.chrome.com/docs/puppeteer/) - DevTools Protocol を通じて Chrome /Chromium を制御する高レベルの API を提供する Node .js ライブラリです
  - [Playwright](https://playwright.dev/) - Chromium 、Firefox 、WebKit 向けの単一 API で最新のウェブアプリケーションの信頼性の高いエンドツーエンドテスト向けのフレームワークです
    - [Playwright for Go](https://playwright-community.github.io/playwright-go/) - 単一 API で Chromium 、Firefox 、WebKit を自動化する Go ライブラリです
  - [Cypress](https://www.cypress.io/) - 開発者が最新のウェブアプリケーション向けブラウザー内でエンドツーエンド及びコンポーネントテストを直接記述、実行、デバッグできるようにするオープンソースの JavaScript ベーステストフレームワークです
  - [WebDriver](https://www.w3.org/TR/webdriver2/) - user agent の遠隔制御インターフェースを有効にする仕様です
    - [Selenium WebDriver](https://www.selenium.dev/documentation/webdriver/) - ローカルまたはリモートマシンで user agent をネイティブにドライブするツールです
    - [WebDriver BiDi](https://www.w3.org/TR/webdriver-bidi/) - Bidirectional WebDriver Protocol で、user agent のリモート制御向けのメカニズムです
  - [Selenium IDE](https://www.selenium.dev/selenium-ide/) - ウェブ向けのオープンソースレコード及びプレイバックテストオートメーションです
  - [Chrome DevTools Protocol (CDP)](https://chromedevtools.github.io/devtools-protocol/) - Chromium ベースのブラウザーをインストルメント、検査、デバッグ、及びプロファイルするために外部ツールを有効にするする低レベル API です
  - [Karma](https://karma-runner.github.io) - ウェブサーバーをスポーンし、接続された各ブラウザーのテストコードに対してソースコードを実行するテストランナーです
  - サポーティングツール
    - [Chrome for Testing](https://googlechromelabs.github.io/chrome-for-testing/) - ウェブアプリケーション テスト及びオートメーション使用例を特別に対象とする Chrome の新しいフレーバーです
- アクセシビリティテスト
  - [axe-core](https://www.deque.com/axe/) - ウェブサイト及びその他の HTML ベースのユーザーインターフェース向けのアクセシビリティテストエンジンです
- AI -powered ウェブオートメーション
  - [browser-use](https://docs.browser-use.com/) - AI エージェントが自然言語を使用してウェブブラウザーと相互作用できるようにするオープンソース Python ライブラリです
- ウェブスクレイピング
  - [Crawlee](https://crawlee.dev/) - ウェブスクレイピング及びブラウザオートメーションライブラリです
  - [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/) - スクリーン-スクレイピングなど迅速な周期プロジェクト向けに設計された Python ライブラリです
  - [Scrapy](https://scrapy.org/) - ウェブサイトから必要なデータを抽出するためのオープンソース及び協調的なフレームワークです
  - [Colly](https://go-colly.org/) - ウェブスクレイパー構築向けの Golang フレームワークです
  - [Katana](https://github.com/projectdiscovery/katana) - 次世代クローリング及びスパイダリングフレームワークです
  - [Trafilatura](https://trafilatura.readthedocs.io/en/latest/) - ウェブからテキストを収集するための Python パッケージ及びコマンドラインツールです
