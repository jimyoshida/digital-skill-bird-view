# 02 - ウェブアプリケーション開発

## ウェブプラットフォーム基礎

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > Webアプリケーション基本技術

:::

### ウェブの基本概念

- [World Wide Web](https://en.wikipedia.org/wiki/World_Wide_Web) - ドキュメントやその他のウェブリソースが Uniform Resource Locator (URL) によって識別され、ハイパーテキストリンクで相互にリンクされ、インターネット経由でアクセスできる情報空間です
  - [Hypertext](https://en.wikipedia.org/wiki/Hypertext) - コンピュータのディスプレイやその他の電子機器に表示されるテキストで、読者がすぐにアクセスできる他のテキストへの参照 (ハイパーリンク) を持つものです
  - [Semantic Web](https://en.wikipedia.org/wiki/Semantic_Web) - W3C が定めた標準によってインターネット上のデータを機械可読にする World Wide Web の拡張で、自動化されたエージェントがより高度に情報を処理できるようにします
  - [URI](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier) - 論理的または物理的なリソースを識別する一意の文字列です
  - [URL](https://url.spec.whatwg.org/) - URL、ドメイン、IP アドレス、application/x-www-form-urlencoded フォーマット、およびそれらの API を定義する標準です
- コアウェブプロトコルおよび言語
  - [HTTP](https://en.wikipedia.org/wiki/HTTP) - 分散協調型のハイパーメディア情報システムのためのアプリケーションプロトコルです
    - [HTTP cookie](https://en.wikipedia.org/wiki/HTTP_cookie) - サーバーがユーザーのウェブブラウザに送信する小さなデータです
  - [HTML](https://html.spec.whatwg.org/) - World Wide Web の中核となるマークアップ言語です
  - [CSS](https://www.w3.org/Style/CSS/) - ウェブドキュメントにスタイル (フォント、色、間隔など) を付加するためのシンプルな仕組みです
- リアルタイムおよびメッセージングプロトコル
  - [WebSockets](https://websockets.spec.whatwg.org/) - ユーザーのブラウザとサーバーの間で双方向のインタラクティブな通信セッションを開くことを可能にする技術です
  - [WebRTC](https://webrtc.org/) - ウェブブラウザやモバイルアプリケーションにリアルタイム通信 (RTC) を提供する無料でオープンソースのプロジェクトです
  - [Server-sent events](https://html.spec.whatwg.org/multipage/server-sent-events.html#server-sent-events) - サーバーが HTTP または専用のサーバープッシュプロトコルを使ってウェブページにデータをプッシュできるようにする技術です
- データおよびイベントの仕様
  - [CloudEvents](https://cloudevents.io/) - イベントデータを共通の方法で記述するための仕様です
  - [JSON Merge Patch](https://datatracker.ietf.org/doc/html/rfc7396) - 対象の JSON ドキュメントに加える変更を記述する JSON フォーマットです
  - [OpenAPI spec](https://www.openapis.org/) - HTTP API のための標準的で言語に依存しないインターフェースです
  - [TypeSpec](https://typespec.io/) - 開発者が慣れ親しんだ方法で API の形状を記述できるようにする最小限の言語です
  - API ツーリング
    - [Redocly CLI](https://redocly.com/) - OpenAPI 定義のリント、バンドル、プレビューを助けるオープンソースのコマンドラインツールです
- クローラーとインデックスの制御
  - [robots.txt](https://en.wikipedia.org/wiki/Robots.txt) - ウェブサイトを訪問するウェブクローラーやその他のウェブロボットに対して、サイトのどの部分へのアクセスが許可されているかを示すために用いられる標準です
- ウェブパフォーマンスの概念
  - [DNS Prefetching](https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/dns-prefetch) - ユーザーがリンクをたどろうとする前にドメイン名を解決しておく仕組みです
- ウェブアプリケーションの種類
  - [Progressive web app](https://en.wikipedia.org/wiki/Progressive_web_app) - HTML、CSS、JavaScript、WebAssembly など共通のウェブ技術を用いて構築され、ウェブを通じて配信されるアプリケーションソフトウェアの一種です

### ブラウザ技術と DOM

- ブラウザ
  - [Chrome](https://www.google.com/chrome/) - Google が開発したフリーウェアのクロスプラットフォームウェブブラウザです
  - [Chromium](https://www.chromium.org/Home/) - すべてのユーザーがより安全で高速かつ安定した方法でウェブを体験できるようにすることを目指すオープンソースのブラウザプロジェクトです
  - [Firefox](https://www.mozilla.org/en-US/firefox/) - Mozilla Foundation が開発した無料でオープンソースのウェブブラウザです
  - [w3m](https://w3m.sourceforge.net/) - テキストベースのウェブブラウザであり、ページャーでもあります
  - [EWW](https://www.gnu.org/software/emacs/manual/html_mono/eww.html) - Emacs Web Wowser の略で、Emacs 向けのウェブブラウザです
- レンダリングエンジン
  - [WebKit](https://developer.apple.com/documentation/webkit) - アプリ内でリッチでインタラクティブなウェブコンテンツを表示するためのフレームワークです
  - [Gecko](https://developer.mozilla.org/en-US/docs/Glossary/Gecko) - Mozilla が開発したウェブブラウザエンジンです
  - [Blink](https://www.chromium.org/blink/) - Chromium が使用するレンダリングエンジンです
  - [Servo](https://servo.org/) - アプリケーション用途と組み込み用途の双方向けに設計された最新の高性能ブラウザエンジンです
- スクリプトエンジン
  - [V8 (JavaScript engine)](https://v8.dev/) - C++ で書かれた、Google のオープンソースで高性能な JavaScript および WebAssembly エンジンです
  - [JavaScriptCore](https://developer.apple.com/documentation/javascriptcore) - Safari をはじめとする Apple プラットフォーム上のアプリを支える JavaScript エンジンです
- クライアントスクリプティング API
  - [XMLHttpRequest (XHR)](https://xhr.spec.whatwg.org/) - クライアントとサーバー間でデータを転送するためのスクリプトによるクライアント機能を提供する API です
  - [Fetch Standard](https://fetch.spec.whatwg.org/) - リクエスト、レスポンス、およびそれらを結び付けるプロセス (フェッチ) を定義するリビングスタンダードです
  - [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) - JavaScript と HTML の `<canvas>` 要素を使ってグラフィックスを描画するための手段です
  - [WebGL API](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API) - プラグインを使わずに互換性のあるあらゆるウェブブラウザ内で高性能なインタラクティブ 3D および 2D グラフィックスをレンダリングするための JavaScript API です
  - [Web Neural Network API (WebNN)](https://www.w3.org/TR/webnn/) - GPU、CPU、NPU などのオンデバイスハードウェアを使ってウェブアプリやフレームワークがディープニューラルネットワークを高速化できるようにする、新しく登場したウェブ標準です
- サイト分析ツール
  - 🪙 [Wappalyzer](https://www.wappalyzer.com/) - ウェブサイトが何で構築されているかを示すテクノロジープロファイラーです

### ウェブアプリケーションアーキテクチャ

- [Single-page application](https://en.wikipedia.org/wiki/Single-page_application) - ウェブサーバーから取得した新しいデータで現在のページを動的に書き換えることでユーザーとやり取りするウェブアプリケーションまたはウェブサイトです
- [Multi-page application](https://www.sanity.io/glossary/multipage-application) - 複数のページを持つ従来型のウェブ構造で、各ページが独自の URL を持ち、ユーザーがリクエストするたびに個別にダウンロード・読み込みされます
- [Microfrontend](https://en.wikipedia.org/wiki/Microfrontend) - 独立して開発されたフロントエンドを組み合わせて一つの全体を構成する、ウェブ開発のためのアーキテクチャパターンです
- [Islands Architecture](https://docs.astro.build/en/concepts/islands/) - ページを高速な静的 HTML としてレンダリングし、インタラクティブ性が必要な箇所にのみ選択的に JavaScript の「島」を追加するフロントエンドパターンです
- [Backend for Frontend](https://samnewman.io/patterns/architectural/bff/) - 異なるフロントエンドアプリケーションごとに専用のバックエンドサービスを作成するアーキテクチャパターンです
- [Multitier architecture](https://en.wikipedia.org/wiki/Multitier_architecture) - ソフトウェアアーキテクチャの各レベルをプレゼンテーション、アプリケーション処理、データ管理の各機能に物理的に分離するクライアントサーバーアーキテクチャです
- [Server-side rendering](https://en.wikipedia.org/wiki/Server-side_rendering) - サーバーから静的な HTML をクライアントに送信し、その後クライアント側の JavaScript がハイドレーションと呼ばれる過程でイベントハンドラーを付与してウェブページを動的にする手法です
- [Incremental Static Regeneration](https://nextjs.org/docs/pages/guides/incremental-static-regeneration) - サイト全体を再構築することなくページ単位で静的生成を行える技術で、デプロイ後も静的コンテンツを更新できます
- [JAMstack](https://jamstack.org/) - ウェブ体験レイヤーをデータやビジネスロジックから切り離し、柔軟性、スケーラビリティ、パフォーマンス、保守性を向上させるアーキテクチャアプローチです

## フロントエンド開発

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > フロントエンドシステム開発
- 1\. ビジネス変革 > 1\.4 デザイン > デジタルプロダクト設計

:::

### UI フレームワークとコアライブラリ

- コア SPA フレームワーク
  - [React](https://reactjs.org/) - ウェブとネイティブのユーザーインターフェースのためのライブラリです
    - 基本概念
      - [Component](https://react.dev/learn/your-first-component) - ユーザーインターフェースを組み立てるための基本的な構成要素です
      - [Props](https://react.dev/learn/passing-props-to-a-component) - 親コンポーネントから子コンポーネントへデータを渡すための仕組みです
      - [Children](https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children) - コンポーネントを合成できるようにする特別な prop です
      - [Key Props](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key) - 要素のリストを作成する際に含める必要がある特別な文字列属性です
      - [Rendering](https://react.dev/learn/render-and-commit) - React がコンポーネントに対して、見た目をどう表現したいかを問い合わせるプロセスです
      - [Event Handler](https://react.dev/learn/responding-to-events) - イベントに応答して実行される関数です
      - [State](https://react.dev/learn/state-a-components-memory) - コンポーネントの動的なデータを保持する JavaScript オブジェクトです
      - [Controlled Component](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components) - React の state が入力要素の値を制御するコンポーネントです
      - [Hooks](https://react.dev/reference/react/hooks) - 関数コンポーネントから React の state やライフサイクル機能に「フック」できるようにする一連の関数です
      - [Strict Mode](https://react.dev/reference/react/StrictMode) - アプリケーション内の潜在的な問題を浮き彫りにするためのツールです
      - [Side-effect](https://react.dev/learn/synchronizing-with-effects) - 実行中の関数の外側にある何かに影響を与える操作を指す用語です
      - [Refs](https://react.dev/learn/referencing-values-with-refs) - レンダーメソッド内で作成された DOM ノードや React 要素にアクセスする手段を提供する機能です
      - [Context](https://react.dev/learn/passing-data-deeply-with-context) - すべての階層で手動で prop を渡すことなく、コンポーネントツリーを通じてデータを渡す方法です
      - [Portals](https://react.dev/reference/react-dom/createPortal) - 親コンポーネントの DOM 階層の外にある DOM ノードへ子要素をレンダリングする正式な手段を提供する機能です
      - [Suspense](https://react.dev/reference/react/Suspense) - コンポーネントツリーの一部に対してローディングインジケーターを指定できるコンポーネントです
      - [Error Boundary](https://react.dev/reference/react/Component#error-boundaries) - 子コンポーネントツリーのどこで発生した JavaScript エラーもキャッチする React コンポーネントです
  - [Preact](https://preactjs.com/) - React と同じ最新の API を備えた、わずか 3kB の高速な代替ライブラリです
  - [Vue.js](https://vuejs.org/) - ユーザーインターフェースを構築するための JavaScript フレームワークです
  - [Angular](https://angular.dev/) - 開発者が高速で信頼性の高いアプリケーションを構築できるようにするウェブフレームワークです
  - [Svelte](https://svelte.dev/) - コンパイラーを利用し、すでに知っている言語 (HTML、CSS、JavaScript) を使ってブラウザ上での処理を最小限に抑えた、驚くほど簡潔なコンポーネントを書けるようにする UI フレームワークです
  - [Ember.js](https://emberjs.com/) - 野心的なウェブ開発者のためのフレームワークです
- HTML ファーストなフレームワーク
  - [htmx](https://htmx.org/) - 属性を使うことで HTML から直接 AJAX、CSS Transitions、WebSockets、Server Sent Events にアクセスできるようにするライブラリです
  - [htm](https://github.com/developit/htm) - トランスパイラーを必要としない、標準のタグ付きテンプレートを使った JSX の代替手段です
- フレームワーク非依存のコアライブラリ
  - [TanStack](https://tanstack.com/) - ウェブ開発のための高品質でフレームワークに依存しないオープンソースライブラリ群です
    - [TanStack Query](https://tanstack.com/query) - TS/JS、React、Solid、Vue、Svelte、Angular 向けの強力な非同期状態管理ライブラリです
    - [TanStack Router](https://tanstack.com/router) - モダンなウェブアプリケーションを構築するための強力で型安全、かつフレームワークに依存しないルーターです
    - [TanStack Table](https://tanstack.com/table) - TS/JS、React、Vue、Solid、Svelte 向けに強力なテーブルやデータグリッドを構築するためのヘッドレス UI です
    - [TanStack Form](https://tanstack.com/form) - React、Vue、Solid、Svelte 向けの型安全でフレームワークに依存しないフォーム状態管理ライブラリです
    - [TanStack Virtual](https://tanstack.com/virtual) - React、Vue、Svelte、Solid、JS で大きなリストやグリッドを仮想化するためのヘッドレス UI です

### 状態管理、ルーティング、ロジック

- 状態管理
  - [Redux](https://redux.js.org/) - 予測可能で保守しやすいグローバルな状態管理のための JS ライブラリです
    - [React-Redux](https://react-redux.js.org/) - Redux の公式 React バインディングです
  - [Zustand](https://github.com/pmndrs/zustand) - 簡略化された flux の原則を用いた、小さく高速でスケーラブルな最小構成の状態管理ソリューションです
  - [Recoil](https://recoiljs.org/) - React のための状態管理ライブラリです
  - [XState](https://stately.ai/docs) - 有限状態機械やステートチャートを作成、解釈、実行するためのライブラリです
- ルーティング
  - [React Router](https://reactrouter.com/) - ユーザーを第一に考え、標準に重きを置いた、どこにでもデプロイできるマルチストラテジーのルーターです
- 構文とテンプレート
  - [JSX](https://react.dev/learn/writing-markup-with-jsx) - JavaScript ファイルの中に HTML のようなマークアップを書けるようにする JavaScript の構文拡張です
  - [MDX](https://mdxjs.com/) - Markdown ドキュメントの中にシームレスに JSX を書けるようにする執筆用フォーマットです
- WASM ランタイム
  - [PyScript](https://pyscript.net/) - Python アプリケーションの作成、デプロイ、共有を容易にする無料のオープンソースソフトウェア (OSS) です

### スタイリングと UI コンポーネント

- CSS エコシステム
  - フレームワークと UI キット
    - [Bootstrap](https://getbootstrap.com/) - 世界で最も人気のあるフロントエンド向けオープンソースツールキットです
    - [Tailwind CSS](https://tailwindcss.com/) - クラスを詰め込んだユーティリティファーストの CSS フレームワークです
    - [Oat](https://oat.ink/) - 最小限で標準に基づいた CSS と JS を提供する、超軽量でセマンティック、かつゼロ依存の HTML UI コンポーネントライブラリです
  - Tailwind コンポーネントライブラリ
    - [daisyUI](https://daisyui.com/) - Tailwind CSS 向けで最も人気のあるコンポーネントライブラリです
  - CSS-in-JS
    - [Emotion](https://emotion.sh/) - JavaScript で CSS スタイルを書くために設計されたライブラリです
    - [Linaria](https://linaria.dev/) - ゼロランタイムの CSS-in-JS ライブラリです
  - プリプロセッサ
    - [Sass language](https://sass-lang.com/) - CSS にコンパイルされるスタイルシート言語です
  - 変形
    - [CSS Transforms 1](https://www.w3.org/TR/css-transforms-1/) - 要素を 2 次元空間で変形できるようにする CSS モジュールです
    - [CSS Transforms 2](https://www.w3.org/TR/css-transforms-2/) - 要素を 3 次元空間で変形できるようにする CSS モジュールです
- UI コンポーネントライブラリ
  - 🪙 [templUI](https://templui.io/) - Go と templ 向けの、美しくデザインされた UI コンポーネント集です
  - 🪙 [Material UI](https://mui.com/material-ui/) - Google の Material Design を実装したオープンソースの React コンポーネントライブラリです
  - [Chakra UI](https://www.chakra-ui.com/) - スピーディーにプロダクトを構築するためのコンポーネントシステムです
  - [Vuetify](https://vuetifyjs.com/en/) - デザインスキルを必要としない、美しく作り込まれた Vue コンポーネントを備えたオープンソース UI ライブラリです
- 特殊な UI ウィジェット
  - リッチテキストエディター
    - 🪙 [Tiptap](https://tiptap.dev/) - ウェブ開発者向けに設計された、ヘッドレスでオープンソースのエディターフレームワークです
  - インタラクションとメディア
    - [Swiper.js](https://swiperjs.com/) - ハードウェアアクセラレーションによるトランジションと優れたネイティブの挙動を備えた、最もモダンなモバイルタッチスライダーです
    - [Hammer.js](https://hammerjs.github.io/) - マルチタッチジェスチャーのための JavaScript ライブラリです
  - キャンバスとホワイトボード
    - 🔒 [tldraw](https://tldraw.dev/) - 高性能なウェブキャンバスでホワイトボードやダイアグラム、キャンバスツールを構築するための React ベースの SDK です

### ビルドと開発ツール

- 開発環境
  - [Storybook](https://storybook.js.org/) - UI コンポーネントやページを分離した状態で構築するためのフロントエンドワークショップです
- バンドラー
  - [Vite](https://vitejs.dev/) - モダンなウェブプロジェクトに対してより高速で無駄のない開発体験を提供することを目指すビルドツールです
  - [Parcel](https://parceljs.org/) - 設定不要のビルドツールです
  - [webpack](https://webpack.js.org/) - モダンな JavaScript アプリケーションのための静的モジュールバンドラーです
  - [Rspack](https://rspack.rs/) - Rust で書かれた高性能な JavaScript バンドラーです
  - [Rsbuild](https://rsbuild.rs/) - Rspack をベースにしたウェブビルドツールです
- トランスパイラー
  - [babel](https://babeljs.io/) - JavaScript コンパイラーです
- ミニファイア
  - [JSMin](https://www.crockford.com/jsmin.html) - JavaScript ファイルからコメントと不要な空白を取り除くミニフィケーションツールです
- リンターとフォーマッター
  - [Biome](https://biomejs.dev/) - JavaScript、TypeScript、JSX、TSX、JSON、HTML、CSS、GraphQL 向けの高速なフォーマッター兼リンターで、ウェブプロジェクトに一貫したツールチェーンを提供します
  - [Knip](https://knip.dev/) - JavaScript および TypeScript プロジェクトで使われていない依存関係、エクスポート、ファイルを見つけて修正するツールです

## フルスタックおよび静的サイトフレームワーク

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > フロントエンドシステム開発
- 3\. テクノロジー > 3\.1 ソフトウェア開発 > バックエンドシステム開発

:::

### フルスタックフレームワーク

- JS/TS フルスタックフレームワーク
  - [Next.js](https://nextjs.org/) - フルスタックのウェブアプリケーションを構築するための React フレームワークです
  - [Nuxt.js](https://nuxtjs.org/) - Vue.js を使って型安全で高性能、本番運用に耐えるフルスタックウェブアプリケーションやウェブサイトを直感的かつ拡張可能な方法で作成できる、無料のオープンソースフレームワークです
  - [Astro](https://astro.build/) - コンテンツ主導のウェブサイトのためのウェブフレームワークです
  - [Fresh](https://fresh.deno.dev/) - 速度、信頼性、シンプルさのために構築された次世代ウェブフレームワークです
- Rust フルスタックフレームワーク
  - [Leptos](https://leptos.dev/) - モダンなウェブのための最先端の Rust フレームワークです

### 静的サイトジェネレーター

- [Docusaurus](https://docusaurus.io/) - 静的サイトジェネレーターであり、React の力を最大限に活用して高速なクライアント側ナビゲーションを実現するシングルページアプリケーションを構築し、サイトをインタラクティブにします
- [mdBook](https://github.com/rust-lang/mdBook) - Markdown ファイルからモダンなオンライン書籍を作成するためのユーティリティです
- [VuePress](https://v2.vuepress.vuejs.org/) - Vue を基盤とした静的サイトジェネレーターです
- [Hugo](https://gohugo.io/) - ウェブサイト構築のための世界最速のフレームワークです
  - [Docsy](https://www.docsy.dev/) - 使いやすいサイトナビゲーションや構造などを提供する、技術文書サイト向けの Hugo テーマです
- [Jekyll](https://jekyllrb.com/) - 個人サイト、プロジェクトサイト、組織サイトに最適な、シンプルでブログに対応した静的サイトジェネレーターです
- [Eleventy](https://www.11ty.dev/) - JavaScript で書かれたよりシンプルな静的サイトジェネレーターです
- [Sphinx](http://www.sphinx-doc.org/en/master/) - 知的で美しいドキュメントを簡単に作成できるツールです
- [MkDocs](https://www.mkdocs.org/) - プロジェクトドキュメントの構築に特化した、高速でシンプル、そして見た目にも美しい静的サイトジェネレーターです
  - 🔒 [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) - MkDocs 静的サイトジェネレーターのための強力で美しいテーマです
- [Nanoc](https://nanoc.app/) - 小さな個人ブログから大規模な企業サイトまで何でも構築できる静的サイトジェネレーターです
- [gitmal](https://github.com/antonmedv/gitmal) - Git リポジトリ向けに設計された静的ページジェネレーターです

### ヘッドレス CMS

- クラウドネイティブかつ API ファーストの CMS
  - 💲 [Contentful](https://www.contentful.com/) - コンテンツファーストのアプローチでデジタルプロダクトの構築を支えるヘッドレスコンテンツ管理システムです
  - 🔒 [Strapi](https://strapi.io/) - 業界をリードするオープンソースのヘッドレス CMS です
  - 🪙 [Sanity](https://www.sanity.io/) - より優れたデジタル体験を構築できるようにする、構造化コンテンツのためのプラットフォームです

## バックエンド開発

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > バックエンドシステム開発

:::

### API アーキテクチャスタイル

- [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) - World Wide Web のアーキテクチャの設計と開発を導くために作られたソフトウェアアーキテクチャスタイルです
- [SOAP (legacy)](https://en.wikipedia.org/wiki/SOAP) - ウェブサービスの実装において構造化された情報を交換するためのメッセージングプロトコル仕様です
- [GraphQL](https://graphql.org/) - API のためのクエリ言語であり、既存のデータを使ってそれらのクエリを満たすためのランタイムです
- [gRPC](https://grpc.io/) - あらゆる環境で動作できる、モダンでオープンソースかつ高性能なリモートプロシージャコール (RPC) フレームワークです
- [json-rpc](https://www.jsonrpc.org/) - ステートレスで軽量なリモートプロシージャコール (RPC) プロトコルです
- [Webhook](https://en.wikipedia.org/wiki/Webhook) - カスタムコールバックによってウェブページやウェブアプリケーションの挙動を拡張・変更する方法です

### バックエンドフレームワーク

- JS/TS バックエンドフレームワーク
  - [Fastify](https://www.fastify.io/) - 最適なパフォーマンスと開発者体験のために設計された、Node.js 向けの高速で低オーバーヘッドなウェブフレームワークです
  - [Express.js](https://expressjs.com/) - 最小限で柔軟な Node.js のウェブアプリケーションフレームワークです
  - [Koa](https://koajs.com/) - Express の開発チームが設計した新しいウェブフレームワークです
  - [Nest.js](https://nestjs.com/) - 効率的で信頼性が高くスケーラブルなサーバーサイドアプリケーションを構築するための先進的な Node.js フレームワークです
  - [Hono](https://hono.dev/) - エッジ向けの小さくシンプルで超高速なウェブフレームワークです
- API ツール
  - [tRPC](https://trpc.io/) - スキーマやコード生成なしに完全に型安全な API を簡単に構築・利用できるようにするツールです
- Go バックエンドフレームワーク
  - [Echo](https://echo.labstack.com/) - 高性能で拡張性のあるミニマリストな Go のウェブフレームワークです
  - [Fiber](https://gofiber.io/) - Go 向けで最速の HTTP エンジンである Fasthttp の上に構築された、Express に着想を得たウェブフレームワークで、パフォーマンスを意識した開発を容易にするよう設計されています
  - [Gin Web Framework](https://gin-gonic.com/) - Go で書かれたウェブフレームワークです
  - [Gorilla web toolkit](https://www.gorillatoolkit.org/) - HTTP ベースのアプリケーションを書くための便利で組み合わせ可能なパッケージ群を提供するツールキットです
  - [Yokai](https://ankorstore.github.io/yokai/) - バックエンドアプリケーションのためのシンプルでモジュール式、可観測性を備えた Go フレームワークです
  - [Kratos](https://github.com/go-kratos/kratos) - トランスポート、ミドルウェア、レジストリ、設定、ロギング、コード生成のための API を備えた、クラウドネイティブなマイクロサービスを構築するための軽量な Go フレームワークです
- Python バックエンドフレームワークとサーバー
  - [WSGI](https://wsgi.readthedocs.io/en/latest/index.html) - Web Server Gateway Interface の略です
    - [Gunicorn](https://gunicorn.org/) - UNIX 向けの Python WSGI HTTP サーバーです
    - [Flask](https://palletsprojects.com/p/flask/) - 軽量な WSGI ウェブアプリケーションフレームワークです
  - [ASGI](https://asgi.readthedocs.io/en/latest/specs/main.html) - ウェブサーバー、フレームワーク、アプリケーション間の互換性のための長年の Python 標準である WSGI の精神的な後継です
    - [Uvicorn](https://www.uvicorn.org/) - uvloop と httptools を使って高性能を実現する、Python 向けの超高速な ASGI サーバー実装です
    - [Hypercorn](https://hypercorn.readthedocs.io/en/latest/) - sans-io の hyper、h11、h2、wsproto ライブラリをベースにした ASGI/WSGI ウェブサーバーで、HTTP/1、HTTP/2、HTTP/3 をサポートします
    - [FastAPI](https://fastapi.tiangolo.com/) - 標準的な Python の型ヒントに基づいて Python で API を構築するための、モダンで高速 (高性能) なウェブフレームワークです
    - [SlowAPI](https://github.com/laurents/slowapi) - ASGI アプリケーションにレート制限をかけるための小さなライブラリです
- Ruby バックエンドフレームワークとサーバー
  - [Ruby on Rails](https://rubyonrails.org/) - Model-View-Controller (MVC) パターンに従ったデータベース連携のウェブアプリケーションを作成するために必要なすべてを含むウェブアプリケーションフレームワークです
  - [Rack](https://rack.github.io/) - モジュール式の Ruby ウェブサーバーインターフェースです
    - [Puma](https://puma.io/) - Ruby と Rack のための高速で並行処理に対応したウェブサーバーです
    - [Falcon](https://socketry.github.io/falcon/) - async、async-container、async-http の上に構築された、マルチプロセス・マルチファイバーで Rack と互換性のある HTTP サーバーです
    - [Sinatra](https://sinatrarb.com/) - 最小限の手間で Ruby のウェブアプリケーションを素早く作成するための DSL です
  - 🔒 [Sidekiq](https://sidekiq.org/) - Ruby 向けのシンプルで効率的なバックグラウンド処理ツールです
  - [Shrine](https://shrinerb.com/) - Ruby アプリケーションのためのファイル添付ツールキットです
- Perl バックエンドフレームワーク (レガシー)
  - クラシック CGI
    - [mod_cgi](https://httpd.apache.org/docs/current/mod/mod_cgi.html) - CGI スクリプトの実行のためのモジュールです
    - [CGI.pm](https://metacpan.org/pod/CGI) - Common Gateway Interface のリクエストとレスポンスを扱うためのモジュールです
  - Fast CGI
    - [mod_fcgid](https://httpd.apache.org/mod_fcgid/) - mod_cgi や mod_cgid に代わる高性能な選択肢です
    - [FCGI.pm](https://metacpan.org/pod/FCGI) - FastCGI アプリケーションのためのモジュールです
- Java バックエンドフレームワーク
  - [Jakarta EE](https://jakarta.ee/) - エンタープライズソフトウェア開発のための Java API を定義する仕様の集合です
    - [Apache Tomcat](https://tomcat.apache.org/) - オープンソースのウェブサーバーおよびサーブレットコンテナです
  - [Spring](https://spring.io/) - Java をシンプルでモダン、生産的、リアクティブ、そしてクラウド対応にするプロジェクトです
    - [Spring Boot](https://spring.io/projects/spring-boot) - Spring プラットフォームとサードパーティライブラリに対して見解を示すことで、最小限の手間で開発を始められるようにするツールです
- .NET バックエンドフレームワーク
  - [ASP.NET](https://dotnet.microsoft.com/en-us/apps/aspnet) - .NET と C# を使ってウェブアプリケーションやサービスを構築するための、無料でクロスプラットフォームなオープンソースフレームワークです
- Elixir バックエンドフレームワーク
  - [Phoenix](https://www.phoenixframework.org/) - より少ないコードと少ない可動部分で、リッチでインタラクティブなウェブアプリケーションを素早く構築でき、API や HTML5 アプリなどを大規模に作り上げるために使われるウェブフレームワークです
- GraphQL サーバー
  - [Apollo Server](https://www.apollographql.com/docs/apollo-server) - あらゆる GraphQL クライアントと互換性のある、オープンソースで仕様に準拠した GraphQL サーバーです

## ウェブインフラストラクチャ

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > クラウドインフラ活用

:::

### ウェブサーバーとプロキシ

- ウェブサーバーとリバースプロキシサーバー
  - [NGINX](https://www.nginx.com/) - ウェブ配信、リバースプロキシ、キャッシング、ロードバランシング、メディアストリーミングなどのためのオープンソースソフトウェアです
  - [Apache HTTP Server](https://httpd.apache.org/) - UNIX や Windows を含むモダンなオペレーティングシステム向けのオープンソース HTTP サーバーを開発・保守するプロジェクトです
  - [Caddy](https://caddyserver.com/) - サイトやサービス、アプリを配信するための強力で拡張可能なプラットフォームで、Go で書かれています
  - [HAProxy](https://www.haproxy.org/) - TCP や HTTP ベースのアプリケーションに高可用性、ロードバランシング、プロキシを提供する、無料で非常に高速かつ信頼性の高いリバースプロキシです
  - [nodejs http-server](https://github.com/http-party/http-server#readme) - シンプルな静的 HTTP サーバーです
  - [goshs](https://github.com/patrickhener/goshs) - HTTP/S、WebDAV、SFTP、SMB、LDAP/S、NTLM ハッシュキャプチャ、DNS/SMTP コールバック、TLS、認証、共有リンクをサポートする、レッドチームや開発者向けの機能豊富なシングルバイナリのファイルサーバーです
- API 管理
  - 🪙 [Unkey](https://www.unkey.com/) - 開発者が API を保護、管理、拡張できるように支援するオープンソースの API 管理プラットフォームです
  - 🔒 [Kong API gateway](https://konghq.com/products/kong-gateway) - 軽量で高速、柔軟なクラウドネイティブ API ゲートウェイです
  - 💲 [Azure API Management](https://azure.microsoft.com/en-us/services/api-management/) - あらゆる環境の API を管理するためのハイブリッドなマルチクラウド管理プラットフォームです
  - 💲 [Amazon API Gateway](https://aws.amazon.com/api-gateway/) - 開発者があらゆる規模で API を作成、公開、保守、監視、保護しやすくするフルマネージドサービスです
  - 💲 [Google Cloud Apigee](https://cloud.google.com/apigee) - API サービスの開発と管理のためのプラットフォームです
  - 🔒 [Gravitee](https://www.gravitee.io/) - あらゆるインフラストラクチャ上の API を単一のビューで管理・保護・統治できる、統合された API 可視化・ガバナンスプラットフォームです

### CDN とエッジコンピューティング

- 概念
  - [Web cache](https://en.wikipedia.org/wiki/Web_cache) - 帯域幅の使用量やサーバー負荷、体感的な遅延を減らすために、HTML ページや画像などのウェブ文書を一時的に保存 (キャッシュ) する情報技術です
  - [Content delivery network](https://en.wikipedia.org/wiki/Content_delivery_network) - プロキシサーバーとそのデータセンターからなる地理的に分散したネットワークです
    - [Point of presence](https://en.wikipedia.org/wiki/Point_of_presence) - 通信を行う主体間の人為的な境界点、あるいはインターフェースとなる地点です
- フォワードプロキシサーバー
  - [Squid](http://www.squid-cache.org/) - HTTP、HTTPS、FTP などに対応したウェブ向けのキャッシングプロキシです
- CDN プロバイダー
  - 🪙 [Cloudflare](https://www.cloudflare.com/) - インターネットに接続するあらゆるものを安全でプライベート、高速、信頼できるものにすることを目指すグローバルネットワークです
    - 🪙 [Cloudflare Workers](https://workers.cloudflare.com/) - インフラストラクチャの設定や保守を行うことなく、まったく新しいアプリケーションを作成したり既存のアプリケーションを拡張したりできるサーバーレス実行環境です
    - [Cloudflare Workers Bindings](https://developers.cloudflare.com/workers/runtime-apis/bindings/) - Worker が Cloudflare Developer Platform 上のリソースとやり取りできるようにする仕組みで、REST API 経由でリソースにアクセスするよりも高いパフォーマンスと少ない制約を提供します
  - 🪙 [Amazon CloudFront](https://aws.amazon.com/cloudfront/) - 高性能、セキュリティ、開発者の利便性のために構築されたコンテンツデリバリーネットワーク (CDN) サービスです
    - 💲 [Lambda@Edge](https://aws.amazon.com/lambda/edge/) - アプリケーションの利用者に近い場所でコードを実行できるようにする Amazon CloudFront の機能です
  - 💲 [Google Cloud CDN](https://cloud.google.com/cdn) - ウェブおよび動画コンテンツの配信を高速化するコンテンツデリバリーネットワーク (CDN) です
  - 💲 [Azure Front Door](https://azure.microsoft.com/en-us/products/frontdoor/) - グローバルなウェブアプリケーションやコンテンツを高速に配信するための安全でスケーラブルなエントリポイントを提供する、モダンなクラウドコンテンツデリバリーネットワーク (CDN) です
- JAMstack ホスティング
  - 🪙 [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/) - GitLab のリポジトリから静的ウェブサイトを直接公開できるようにする機能です
  - 🪙 [Cloudflare Pages](https://pages.cloudflare.com/) - フロントエンド開発者が共同作業しながらウェブサイトをデプロイできる JAMstack プラットフォームです

## 分散型ウェブ

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.2 デジタルテクノロジー > その他先端技術

:::

### ブロックチェーン技術

- [Web3](https://en.wikipedia.org/wiki/Web3) - 分散化、ブロックチェーン技術、トークンベースの経済などの概念を組み込んだ、World Wide Web の新しいイテレーションに関する構想です
- [Blockchain](https://en.wikipedia.org/wiki/Blockchain) - 増え続けるレコードのリストを持つ分散型台帳です
  - [Hashcash](https://en.wikipedia.org/wiki/Hashcash) - 迷惑メールやサービス拒否攻撃を制限するために使われるプルーフオブワークシステムです
  - [Proof of work](https://en.wikipedia.org/wiki/Proof_of_work) - ある当事者が特定の計算作業を一定量費やしたことを他者に証明する、暗号学的な証明の一形態です
- [Smart contract](https://en.wikipedia.org/wiki/Smart_contract) - 契約条件に従ってイベントやアクションを自動的に実行、制御、記録するように設計されたコンピュータプログラムまたはトランザクションプロトコルです
- [Bitcoin](https://bitcoin.org/) - ピアツーピアの bitcoin ネットワーク上で送金できる分散型のデジタル通貨です
- [Ethereum](https://ethereum.org/) - 中央の権威による許可を必要とせずに、デジタル資産、データ、アイデンティティを直接所有できるようにするグローバルな分散型ネットワークです
- [Non-fungible token](https://en.wikipedia.org/wiki/Non-fungible_token) - ブロックチェーンに記録され、所有権と真正性を証明するために使われる一意のデジタル識別子です
- [Decentralized autonomous organization](https://en.wikipedia.org/wiki/Decentralized_autonomous_organization) - 中央集権的な指導者を持たず、投票や資金管理をブロックチェーン上で処理する分散型のコンピュータプログラムによって運営される、メンバー所有のコミュニティです
- [Solidity](https://en.wikipedia.org/wiki/Solidity) - Ethereum をはじめとするさまざまなブロックチェーンプラットフォーム上でスマートコントラクトを実装するためのプログラミング言語です
- [Web3.js](https://web3js.org/) - 開発者が Ethereum やその他の EVM 互換ブロックチェーンに接続してやり取りできるようにする TypeScript/JavaScript ライブラリです
- [ethers.js](https://ethers.org/) - Ethereum に関するあらゆるニーズに応える、シンプルでコンパクト、かつ完成度の高い JavaScript ライブラリです
- [MetaMask](https://metamask.io/) - ユーザーが自分のデータや資産を管理し続けながら暗号資産の購入、売却、交換、保管を行えるようにする暗号資産ウォレットです
- [WalletConnect](https://walletconnect.com/) - モバイルの暗号資産ウォレットとデスクトップベースの分散型アプリケーションの間に暗号化された接続を確立するオープンソースプロトコルです
- [Hardhat](https://hardhat.org/) - Ethereum や EVM 互換ブロックチェーンのための開発環境で、開発者が Solidity のスマートコントラクトをコンパイル、デプロイ、テスト、デバッグするのを助けます

### 分散型ソーシャル

- [ActivityPub](https://activitypub.rocks/) - ActivityStreams 2.0 のデータフォーマットに基づく分散型ソーシャルネットワーキングプロトコルです
- [AT Protocol](https://atproto.com/) - ユーザーが自分のアイデンティティを所有し、コンテンツが相互にリンクした JSON レコードとして表現される、ソーシャルアプリケーション構築のためのオープンなデータネットワークです
- [Fediverse](https://en.wikipedia.org/wiki/Fediverse) - ウェブ公開やファイルホスティングに使われつつ、互いに通信できる相互接続されたサーバー群の集合です
- [Mastodon](https://joinmastodon.org/) - アルゴリズムや広告に頼ることなくユーザーが自分のフィードを管理でき、独立したサーバー同士が ActivityPub プロトコルを通じて相互運用できるようにする、無料でオープンソースの分散型ソーシャルメディアプラットフォームです
- [Bluesky](https://en.wikipedia.org/wiki/Bluesky) - アメリカに拠点を置くマイクロブログ型ソーシャルメディアサービスであり、公益法人でもあります
- [Nostr](https://nostr.com/) - 暗号署名を用いることで、リレーと呼ばれる複数の独立したサーバーにまたがる検閲耐性のある通信を可能にする、オープンな分散型ソーシャルプロトコルです
- [Matrix](https://en.wikipedia.org/wiki/Matrix_(protocol)) - 異なるサービスプロバイダー間でシームレスな通信を可能にする、リアルタイム通信のためのオープン標準かつ通信プロトコルです
- [PeerTube](https://joinpeertube.org/) - 独立した動画ホスティングプラットフォームを作成できる無料でオープンソースのツールで、それらが接続して分散型ネットワークを形成し、中央集権的なサービスに代わる選択肢を提供します
- [Lemmy](https://join-lemmy.org/) - 企業による追跡や広告に頼ることなく、ユーザーが自分の体験をコントロールできるようにする分散型ディスカッションプラットフォームです
- [Diaspora](https://diasporafoundation.org/) - pod と呼ばれる独立して所有されたノードが相互運用してネットワークを形成する、非営利でユーザー所有の分散型ソーシャルネットワークです
- [Secure Scuttlebutt](https://scuttlebutt.nz/) - 企業によるデータ収集から解放された、地域コミュニティの発展を可能にする分散型ソーシャルネットワークプラットフォームです

## 開発・テストツール

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > コンピュータサイエンス
- 3\. テクノロジー > 3\.1 ソフトウェア開発 > チーム開発

:::

### ウェブ/HTTP クライアント

- HTTP CLI ツール
  - [cURL](https://curl.haxx.se/) - URL を使ってデータを転送するためのコマンドラインツールおよびライブラリです
  - [Wget](https://www.gnu.org/software/wget/) - HTTP、HTTPS、FTP、FTPS を使ってファイルを取得するための無料のソフトウェアパッケージです
  - [curlie](https://github.com/rs/curlie) - curl のパワーと httpie の使いやすさを兼ね備えたツールです
  - [hurl](https://hurl.dev/) - シンプルなプレーンテキスト形式で定義された HTTP リクエストを実行するコマンドラインツールです
  - [httpie cli](https://httpie.io/cli) - API の時代のための、シンプルながら強力なコマンドライン HTTP/API テストクライアントです
  - [wuzz](https://github.com/asciimoo/wuzz) - HTTP を検査するためのインタラクティブな CLI ツールです
  - [httptap](https://github.com/monasticacademy/httptap) - 任意の Linux プログラムが行う HTTP および HTTPS リクエストを可視化するツールです
- HTTP クライアントライブラリ
  - [Python Requests](https://docs.python-requests.org/en/latest/) - 人間のために作られた、エレガントでシンプルな Python 向け HTTP ライブラリです
  - [JS Axios](https://axios-http.com/) - Node.js とブラウザのための Promise ベースの HTTP クライアントです
  - [Go Resty](https://github.com/go-resty/resty) - Go のためのシンプルな HTTP/REST クライアントライブラリです
  - [Go FastHTTP](https://github.com/valyala/fasthttp) - Go のための高速な HTTP パッケージです
  - [Surf](https://github.com/enetx/surf) - Chrome/Firefox ブラウザのなりすまし、QUIC フィンガープリンティングを伴う HTTP/3、JA3/JA4 の TLS エミュレーション、アンチボット回避機能を備えた、高度な Go 製 HTTP クライアントです
  - [Typhoeus](https://github.com/typhoeus/typhoeus) - libcurl をラップして高速かつ信頼性の高いリクエストを行うためのライブラリです
  - [Ruby Net](https://docs.ruby-lang.org/en/master/Net.html) - クライアント側のインターネットプロトコルを実装するクラス群です
  - [httpx](https://gitlab.com/os85/httpx) - Ruby 言語のための HTTP クライアントライブラリです
  - [wreq-ruby](https://github.com/SearchApi/wreq-ruby) - 精緻な TLS/HTTP2 シグネチャでさまざまなブラウザを正確にエミュレートする高度なブラウザフィンガープリンティングを備えた、簡単かつ強力な Ruby HTTP クライアントです
  - [Rust reqwest](https://docs.rs/reqwest/latest/reqwest/) - 扱いやすい非同期 HTTP クライアントです
- GraphQL ライブラリ
  - [URQL](https://commerce.nearform.com/open-source/urql/) - React、Svelte、Vue、あるいは素の JavaScript 向けの、高度にカスタマイズ可能で汎用性の高い GraphQL クライアントです
- API テストプラットフォーム
  - 🪙 [Bruno](https://www.usebruno.com/) - Git と統合された、完全オフラインで動作するオープンソースの API クライアントです
  - 🪙 [Postman/Newman](https://www.postman.com/) - API の構築と利用のための API プラットフォームです
- クラシックなウェブオートメーション
  - [Mechanize](https://metacpan.org/pod/WWW::Mechanize) - ウェブサイトとのやり取りを自動化するのに役立つモジュールです
  - [Mechanize (Ruby)](https://github.com/sparklemotion/mechanize) - 自動化されたウェブ操作を簡単にする Ruby ライブラリです

### ウェブデバッグツール

- [Chrome DevTools](https://developer.chrome.com/docs/devtools/) - Google Chrome ブラウザに直接組み込まれたウェブ開発者向けツール群です
- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/) - HTML、CSS、JavaScript の検査、編集、デバッグを可能にする、Firefox に組み込まれたウェブ開発者向けツール群です
- [React Developer Tools](https://react.dev/learn/react-developer-tools) - React コンポーネントを検査し、props や state を編集し、React アプリケーションのパフォーマンス問題を特定できるようにする、ブラウザ拡張機能兼スタンドアロンデバッガーです
- [Vue.js devtools](https://devtools.vuejs.org/) - コンポーネントの検査や状態管理のデバッグを提供する、Vue.js アプリケーションをデバッグするためのブラウザ拡張機能です
- [Redux DevTools](https://github.com/reduxjs/redux-devtools) - ホットリロード、アクションのリプレイ、カスタマイズ可能な UI など、Redux の開発ワークフローを強化する機能を提供する開発ツールです
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) - パフォーマンス、アクセシビリティ、SEO、ベストプラクティスを監査することでウェブページの品質向上を助ける、オープンソースの自動化ツールです
- 🪙 [Fiddler](https://www.telerik.com/fiddler) - あらゆるブラウザ、システム、プラットフォームで使える無料のウェブデバッグプロキシです
- 💲 [Charles Proxy](https://www.charlesproxy.com/) - 開発者が自分のマシンとインターネットの間でやり取りされるすべての HTTP および SSL/HTTPS トラフィック (リクエスト、レスポンス、ヘッダーを含む) を確認できるようにする HTTP プロキシ兼モニターです
- [mitmproxy](https://mitmproxy.org/) - デバッグ、テスト、ペネトレーションテストの目的でウェブトラフィックを傍受、検査、変更、再生できる、無料でオープンソースのインタラクティブな HTTPS プロキシです
- 🪙 [Requestly](https://requestly.com/) - 開発者がデバッグやテストのために URL やヘッダー、API レスポンスをリアルタイムで変更できるようにする HTTP インターセプターです

### ウェブテスト自動化フレームワーク

- ブラウザ自動化とテスト
  - [Puppeteer](https://developer.chrome.com/docs/puppeteer/) - DevTools プロトコル経由で Chrome/Chromium を制御するための高レベル API を提供する Node.js ライブラリです
  - [Playwright](https://playwright.dev/) - Chromium、Firefox、WebKit に対して単一の API でモダンなウェブアプリの信頼性の高いエンドツーエンドテストを行うためのフレームワークです
    - [Playwright for Go](https://playwright-community.github.io/playwright-go/) - 単一の API で Chromium、Firefox、WebKit を自動化する Go ライブラリです
  - 🪙 [Cypress](https://www.cypress.io/) - モダンなウェブアプリケーションに対して、ブラウザ内で直接エンドツーエンドテストやコンポーネントテストを記述、実行、デバッグできるようにする、オープンソースの JavaScript ベースのテストフレームワークです
  - [WebDriver](https://www.w3.org/TR/webdriver2/) - ユーザーエージェントの内部調査と制御を可能にする、遠隔操作インターフェースです
    - [Selenium WebDriver](https://www.selenium.dev/documentation/webdriver/) - ローカルまたはリモートのマシン上で、ユーザーがするようにブラウザをネイティブに操作するツールです
    - [WebDriver BiDi](https://www.w3.org/TR/webdriver-bidi/) - 双方向 WebDriver プロトコルのことで、ユーザーエージェントを遠隔操作するための仕組みです
  - [Selenium IDE](https://www.selenium.dev/selenium-ide/) - ウェブのためのオープンソースの記録・再生型テスト自動化ツールです
  - [Chrome DevTools Protocol (CDP)](https://chromedevtools.github.io/devtools-protocol/) - 外部ツールが Chromium ベースのブラウザを計測、検査、デバッグ、プロファイリングできるようにする低レベル API です
  - [Karma](https://karma-runner.github.io) - ウェブサーバーを起動し、接続された各ブラウザに対してテストコードによりソースコードを実行するテストランナーです
  - サポートツール
    - [Chrome for Testing](https://googlechromelabs.github.io/chrome-for-testing/) - ウェブアプリのテストや自動化のユースケースを特に対象とした、新しいタイプの Chrome です
- アクセシビリティテスト
  - [axe-core](https://www.deque.com/axe/) - ウェブサイトやその他の HTML ベースのユーザーインターフェースのためのアクセシビリティテストエンジンです
- AI 活用のウェブ自動化
  - [browser-use](https://docs.browser-use.com/) - AI エージェントが自然言語を使ってウェブブラウザとやり取りできるようにする、オープンソースの Python ライブラリです
- ウェブスクレイピング
  - [Crawlee](https://crawlee.dev/) - ウェブスクレイピングとブラウザ自動化のためのライブラリです
  - [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/) - スクリーンスクレイピングなど、素早く仕上げたいプロジェクト向けに設計された Python ライブラリです
  - [Scrapy](https://scrapy.org/) - ウェブサイトから必要なデータを抽出するためのオープンソースかつ協調的なフレームワークです
  - [Colly](https://go-colly.org/) - ウェブスクレイパーを構築するための Golang フレームワークです
  - [Katana](https://github.com/projectdiscovery/katana) - 次世代のクローリングおよびスパイダリングフレームワークです
  - [Trafilatura](https://trafilatura.readthedocs.io/en/latest/) - ウェブ上のテキストを収集するための Python パッケージおよびコマンドラインツールです
