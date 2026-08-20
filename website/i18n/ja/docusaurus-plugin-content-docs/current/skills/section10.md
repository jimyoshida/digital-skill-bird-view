# 10 - 高度なプログラミング

## 手続き型・システムプログラミング

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > コンピュータサイエンス

:::

### Rust 言語

- [Rust](https://www.rust-lang.org/) - 誰もが信頼性が高く効率的なソフトウェアを構築できるようにするプログラミング言語です
  - [Ownership and borrowing](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html) - Rust プログラムがメモリをどのように管理するかを規定する一連の規則です
  - [Interior mutability](https://doc.rust-lang.org/book/ch15-05-interior-mutability.html) - そのデータへの不変参照が存在する場合でも、データを変更できるようにする Rust の設計パターンです
  - [Closure](https://doc.rust-lang.org/book/ch13-01-closures.html) - 変数に保存したり、他の関数への引数として渡したりできる匿名関数です
  - [Trait-based generics](https://doc.rust-lang.org/book/ch10-02-traits.html) - 型が提供しなければならない振る舞いを定義する方法であり、指定された振る舞いを実装する任意の型に対して動作する汎用的なコードを可能にするものです
  - [Lifetime](https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html) - すべての借用が有効であることを保証するためにコンパイラが使用する構成要素です
  - [Module Pin](https://doc.rust-lang.org/std/pin/index.html) - データをメモリ上の位置に固定する型を提供するモジュールです
  - ツール
    - [C2Rust](https://c2rust.com/) - ほとんどの C モジュールを意味的に等価な Rust コードに変換できるツールです
  - チュートリアル
    - [Rust by Example](https://doc.rust-lang.org/rust-by-example/) - さまざまな Rust の概念と標準ライブラリを説明する、実行可能なサンプルのコレクションです

### Go 言語

- [Go](https://go.dev/) - Google がサポートするオープンソースのプログラミング言語です
  - コア機能
    - [Go Modules](https://go.dev/wiki/Modules) - Go プログラミング言語のための依存関係管理システムです
    - [Defer, panic and recover](https://go.dev/blog/defer-panic-and-recover) - Go における強力ですが特異な制御フロー機構です
    - [Pointer receiver](https://go.dev/tour/methods/4) - 型へのポインタに対して動作し、レシーバーが指す値を変更できるようにするメソッドです
    - [Interface](https://go.dev/tour/methods/9) - メソッドシグネチャの集合として定義される型です
    - [Goroutine](https://go.dev/tour/concurrency/1) - Go ランタイムによって管理される軽量スレッドです
    - [Channel](https://go.dev/tour/concurrency/2) - チャネル演算子 `<-` を使って値を送受信できる、型付けされた導管です
  - ライブラリ
    - [Awesome Go](https://awesome-go.com/) - 優れた Go のフレームワーク、ライブラリ、ソフトウェアを厳選したリストです
    - [lo](https://github.com/samber/lo) - Lodash スタイルの Go ライブラリです
    - [fp-go](https://github.com/repeale/fp-go) - 関数型プログラミングのヘルパー集です
    - [shortuuid](https://github.com/lithammer/shortuuid) - 簡潔で曖昧さがなく URL セーフな UUID を生成するライブラリです
  - ツール
    - [Go binary size SVG treemap](https://github.com/nikolaydubina/go-binsize-treemap) - Go 実行ファイルのサイズのツリーマップを作成する CLI ツールです
    - [mvm](https://mvm.sh/) - コンパイルなしでソースコードから直接 Go プログラムを実行できるようにする、Go 用の高速な仮想マシンです
  - チュートリアル
    - [Effective Go](https://golang.org/doc/effective_go.html) - 明確でイディオマティックな Go コードを書くためのヒントを提供するドキュメントです
    - [Go by Example](https://gobyexample.com/) - 注釈付きのサンプルプログラムを使った Go の実践的な入門です
    - [Learn Go with tests](https://quii.gitbook.io/learn-go-with-tests) - 初日からテストを含む Go の基礎を教えるリソースです

### C とその他の手続き型言語

- [C](https://www.open-std.org/jtc1/sc22/wg14/) - 構造化プログラミング、レキシカルな変数スコープ、再帰をサポートする、静的型システムを備えた汎用手続き型コンピュータプログラミング言語です
  - [Macros](https://gcc.gnu.org/onlinedocs/cpp/Macros.html) - 名前が付けられたコードの断片です
- [Zig](https://ziglang.org/) - 堅牢で最適かつ再利用可能なソフトウェアを保守するための汎用プログラミング言語およびツールチェーンです
  - [Comptime](https://zig.guide/language-basics/comptime/) - コンパイル時にコードを実行できるようにする仕組みです

## 関数型・ハイブリッドプログラミング

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > コンピュータサイエンス

:::

### 関数型優先・マルチパラダイム言語

- [F#](https://fsharp.org/) - 簡潔で堅牢かつ高性能なコードを書くための汎用プログラミング言語です
  - 不変データ構造
  - [Discriminated union](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/discriminated-unions) - いくつかの異なる、しかし固定された型のいずれかの値を格納できる型です
  - [Active pattern](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/active-patterns) - 入力データを分割する名前付きのパーティションを定義できる機能であり、これらの名前をパターンマッチング式で使用できるようにするものです
  - [Computation expression](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/computation-expressions) - 制御フロー構造とバインディングを使って順序付けたり組み合わせたりできる計算を記述するための、便利な構文を提供する機能です
- [OCaml](https://ocaml.org/) - 表現力と安全性を重視した、実用に耐える関数型プログラミング言語です
  - [Functor](https://ocaml.org/manual/latest/moduleexamples.html#s:module-functors) - 別のモジュールによってパラメータ化されたモジュールです
- [Haskell](https://www.haskell.org/) - 高度な純粋関数型プログラミング言語です
  - 純粋関数型
  - [Lazy evaluation](https://wiki.haskell.org/Lazy_evaluation) - 式の値が必要になるまで、その評価を遅らせる評価戦略です
- [Elixir](https://elixir-lang.org/) - スケーラブルで保守しやすいアプリケーションを構築するための動的な関数型言語です
  - [Process](https://elixir-lang.org/getting-started/processes.html) - 分離されており、メッセージを介して情報をやり取りする軽量な実行スレッドです
- [Power Fx](https://learn.microsoft.com/en-us/power-platform/power-fx/overview) - Microsoft Power Platform 全体で使用される、汎用的で強く型付けされた宣言型かつ関数型のローコード言語です

### マルチパラダイム・ハイブリッド言語

- [Java](https://www.oracle.com/java/) - 第 1 位のプログラミング言語であり開発プラットフォームです
  - [Built-in concurrency support](https://docs.oracle.com/javase/tutorial/essential/concurrency/sync.html) - 並行プログラミングをサポートするために根本から設計された Java プラットフォームの機能です
- [C#](https://learn.microsoft.com/en-us/dotnet/csharp/) - モダンでオブジェクト指向かつ型安全なプログラミング言語です
  - [Language-Integrated Query (LINQ)](https://learn.microsoft.com/en-us/dotnet/csharp/linq/) - クエリ機能を C# 言語に直接統合することに基づく一連の技術の名称です
  - [Delegate](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/delegates/) - 特定のパラメータリストと戻り値の型を持つメソッドへの参照を表す型です
  - [Lambda expression](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/lambda-expressions) - 匿名関数を作成する方法です
- [Scala](https://www.scala-lang.org/) - 一般的なプログラミングパターンを簡潔でエレガントかつ型安全な方法で表現できるように設計された、モダンなマルチパラダイムプログラミング言語です
  - [Hybrid OO/functional](https://docs.scala-lang.org/tour/tour-of-scala.html) - 静的型付けの環境でオブジェクト指向プログラミングと関数型プログラミングを融合させた言語の特性です
- [Groovy](http://groovy-lang.org/) - 静的型付けと静的コンパイルの機能を備えた、Java プラットフォーム向けの強力でオプション型付け可能な動的言語です
- [Dart](https://dart.dev/) - あらゆるプラットフォームで高速なアプリを実現する、クライアント最適化言語です

## データ・フォーマット標準

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > コンピュータサイエンス

:::

### テキスト形式と文字コード

- [ASCII](https://en.wikipedia.org/wiki/ASCII) - 電子通信のための文字符号化標準です
- [Unicode](https://home.unicode.org/) - 普遍的な文字符号化標準です
  - [UTF-8](https://en.wikipedia.org/wiki/UTF-8) - 電子通信に使用される可変長文字符号化方式です
  - [Unicode Emoji](https://home.unicode.org/emoji/) - 顔文字のように使用される、標準化された文字の集合です
- [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) - 値をカンマで区切る区切りテキストファイルです
- [TSV](https://en.wikipedia.org/wiki/Tab-separated_values) - 表内の値をタブ文字で区切る区切りテキストファイル形式です
- ライブラリ
  - [ICU](https://icu.unicode.org/) - Unicode とグローバリゼーションを提供する、成熟し広く使われている C/C++ と Java のライブラリ群です
  - [Python emoji](https://github.com/carpedm20/emoji/) - Python 用の絵文字ライブラリです
  - [Go emoji](https://github.com/kyokomi/emoji) - Go 用のミニマルな絵文字パッケージです

### 日時形式

- [UTC](https://en.wikipedia.org/wiki/Coordinated_Universal_Time) - 時計と時刻を規制するために世界的に使用されている主要な時間標準です
- [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) - 日付・時刻に関連するデータの世界的な交換と伝達を対象とする国際標準です
- [Unix time](https://en.wikipedia.org/wiki/Unix_time) - ある時点を記述するための方式です
- ライブラリ
  - [Ruby Time](https://docs.ruby-lang.org/en/master/Time.html) - 日付と時刻の抽象化です
  - [Python delorean](https://delorean.readthedocs.io/en/latest/index.html) - Python で日時を扱う際に生じる不都合な真実を解消するためのライブラリです
  - [Python arrow](https://arrow.readthedocs.io/en/latest/) - 日付、時刻、タイムスタンプの作成、操作、フォーマット、変換に対して、理にかなった人間に優しいアプローチを提供する Python ライブラリです
  - [Luxon](https://moment.github.io/luxon/#/) - JavaScript の日付と時刻のための強力でモダン、かつ使いやすいラッパーです
  - [date-fns](https://date-fns.org/) - ブラウザと Node.js で JavaScript の日付を操作するための、最も包括的でありながらシンプルで一貫性のあるツールセットを提供する、モダンな JavaScript 日付ユーティリティライブラリです
  - [Day.js](https://day.js.org/) - Moment.js とほぼ互換性のある API を持ち、モダンブラウザ向けに日付と時刻の解析、検証、操作、表示を行う、ミニマルな JavaScript ライブラリです
  - [Go time](https://pkg.go.dev/time) - 時間の計測と表示のための機能を提供するパッケージです
  - [Go when](https://github.com/olebedev/when) - 依存関係のない自然言語の日時パーサーです
- [iCalendar](https://en.wikipedia.org/wiki/ICalendar) - カレンダーとスケジュールの情報を保存・交換できるようにするメディアタイプです

### データ交換言語

- [JSON](https://www.json.org/json-en.html) - 軽量なデータ交換フォーマットです
  - [jq](https://stedolan.github.io/jq/) - 軽量で柔軟なコマンドライン JSON プロセッサです
  - [gojq](https://github.com/itchyny/gojq) - jq の純粋な Go 実装です
  - [gron](https://github.com/tomnomnom/gron) - JSON を個別の代入文に変換し、探したいものを grep しやすくし、その絶対的な「パス」を確認しやすくするツールです
  - [JMESPath](https://jmespath.org/) - JSON のためのクエリ言語です
  - [JSON::Tiny](https://metacpan.org/pod/JSON::Tiny) - 依存関係のないミニマルな JSON モジュールです
  - [Python json](https://docs.python.org/3/library/json.html) - JSON のエンコーダーとデコーダーを実装するモジュールです
  - [Jackson](https://github.com/FasterXML/jackson) - ストリーミング JSON パーサー・ジェネレーターライブラリと、それに対応するデータバインディングライブラリを含む、Java 向けのデータ処理ツール群です
- [XML](https://www.w3.org/XML/) - SGML (ISO 8879) から派生した、シンプルで非常に柔軟なテキストフォーマットです
  - [XPath](https://www.w3.org/TR/xpath/) - XQuery および XPath データモデルに準拠した値の処理を可能にする式言語です
  - [DOM](https://dom.spec.whatwg.org/) - イベント、処理の中断、ノードツリーのためのプラットフォーム中立なモデルです
  - [Python xml.etree.ElementTree](https://docs.python.org/3/library/xml.etree.elementtree.html) - XML データの解析と生成のためのシンプルで効率的な API を実装するモジュールです
  - [Nokogiri](https://nokogiri.org/) - ドキュメントの読み取り、書き込み、変更、クエリのためのツールを提供し、XML と HTML の操作を簡単で苦労なく行えるようにする Ruby ライブラリです
- [logfmt](https://brandur.org/logfmt) - シンプルで高速、かつ人間にもマシンにも解析しやすいログフォーマットです
- [JSON Lines](https://jsonlines.org/) - 一度に 1 レコードずつ処理できる構造化データを保存するための便利なフォーマットです
- 関連ツール
  - [fx](https://fx.wtf/) - ターミナル向けの JSON ビューアーです
  - [jnv](https://github.com/ynqa/jnv) - JSON のナビゲーション用に設計された、対話型の JSON ビューアーおよび jq フィルターエディタです

### 設定言語

- JSON Superset
  - [Jsonnet](https://jsonnet.org/) - アプリとツールの開発者向けのデータテンプレート言語です
  - [Hjson](https://hjson.github.io/) - JSON のためのユーザーインターフェースです
  - [YAML](https://yaml.org/) - すべてのプログラミング言語向けの、人間に優しいデータシリアライゼーション言語です
    - [yq (python)](https://github.com/kislyuk/yq) - YAML、XML、TOML ドキュメント向けの、コマンドライン YAML、XML、TOML プロセッサ兼 jq ラッパーです
    - [yq (go)](https://github.com/mikefarah/yq) - ポータブルなコマンドライン YAML、JSON、XML、CSV、TOML、プロパティプロセッサです
    - [YAML::Tiny](https://metacpan.org/pod/YAML::Tiny) - できる限り少ないコードで書かれた、YAML スタイルのファイルを読み書きするための Perl クラスです
    - [PyYAML](https://github.com/yaml/pyyaml) - Python 用の YAML パーサーおよびエミッターです
  - [StrictYAML](https://hitchdev.com/strictyaml/) - YAML 仕様の制限されたサブセットを解析・検証する、型安全な YAML パーサーです
  - [JSON with comments](https://github.com/muhammadmuzzammil1998/jsonc) - JSONC (コメント付き JSON) を解析・文字列化する JS ライブラリです
  - [CUE](https://cuelang.org/) - 論理プログラミングにルーツを持つ、オープンソースのデータ検証言語兼推論エンジンです
- その他の設定言語
  - [TOML](https://toml.io/en/) - 読みやすいミニマルな設定ファイルフォーマットです
    - [TOML::Tiny](https://metacpan.org/pod/TOML::Tiny) - ミニマルな、純粋な Perl 製の TOML パーサー兼シリアライザです
    - [Python tomllib](https://docs.python.org/3/library/tomllib.html) - TOML を解析するためのインターフェースを提供するモジュールです
  - [HCL](https://github.com/hashicorp/hcl) - 人間にもマシンにも優しい構造化された設定言語を作成するためのツールキットです
- 関連ツール
  - [yj](https://github.com/sclevine/yj) - YAML、TOML、JSON、HCL 間の変換を行うコマンドラインインターフェースツールです
- 汎用式言語
  - [CEL](https://cel.dev/) - 高速でポータブル、かつ安全に実行できるように設計された汎用式言語です

## テキスト処理と操作

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > コンピュータサイエンス

:::

### 正規表現

- [Regex](https://en.wikipedia.org/wiki/Regular_expression) - テキスト内の検索パターンを指定する文字列です
  - [PCRE](https://en.wikipedia.org/wiki/Perl_Compatible_Regular_Expressions) - Perl 5 と同じ構文と意味論を用いて正規表現パターンマッチングを実装するライブラリです
  - [Onigmo](https://github.com/k-takata/Onigmo) - Oniguruma からフォークされた正規表現ライブラリです
  - [Python re](https://docs.python.org/3/library/re.html) - Perl にあるものと同様の正規表現マッチング操作を提供するモジュールです
  - [Go regexp](https://pkg.go.dev/regexp) - 正規表現検索を実装するパッケージです
  - [RE2](https://github.com/google/re2) - バックトラック型の正規表現エンジンに代わる、高速で安全かつスレッドフレンドリーな代替エンジンです
- [PRegEx](https://github.com/manoss96/pregex) - 正規表現をプログラム的に作成できるようにする Python ライブラリです
- 正規表現ツール
  - [Rubular](https://rubular.com/) - Ruby ベースの正規表現エディタです
  - [rubree](https://aim2bpg.github.io/rubree/) - Rubular にインスパイアされた Ruby の正規表現エディタです
  - [Wubular](https://rubyelders.github.io/wubular/) - Rubular にインスパイアされた、Javascript ベースの正規表現エディタです
  - [RegEx101](https://regex101.com/) - オンラインの正規表現エディタ兼デバッガーです

### テキストツール

- 汎用ツール
  - [GNU sed](https://www.gnu.org/software/sed/) - 入力ストリームに対して基本的なテキスト変換を行うために使用されるストリームエディタです
  - [sd](https://github.com/chmln/sd) - 直感的な検索・置換コマンドラインツールです
  - [GNU diffutils](https://www.gnu.org/software/diffutils/) - ファイル間の差分を見つけるための複数のプログラムからなるパッケージです
  - [colordiff](https://www.colordiff.org/) - diff と同じ出力を、可読性を高める色付きのシンタックスハイライト付きで生成するツールです

### 表形式データ

- CLI ツール
  - [csvkit](https://csvkit.readthedocs.io/en/latest/) - CSV への変換や CSV を扱うためのコマンドラインツール群です
  - [xsv](https://github.com/BurntSushi/xsv) - Rust で書かれた高速な CSV コマンドラインツールキットです
  - [qsv](https://github.com/jqnatividad/qsv) - CSV ファイルのインデックス作成、スライス、分析、分割、拡充、変換、結合を行うコマンドラインプログラムです
  - [GNU awk](https://www.gnu.org/software/gawk/) - ファイル内の特定のレコードを選択し、それらに対して操作を行うために使用できるプログラムです
  - [GoAWK](https://github.com/benhoyt/goawk) - CSV をサポートする、Go で書かれた POSIX 準拠の AWK インタプリタです
- ライブラリ
  - [Text::CSV](https://metacpan.org/pod/Text::CSV) - カンマ区切り値 (CSV) の操作を行うモジュールです (XS または PurePerl を使用)
  - [Python csv](https://docs.python.org/3/library/csv.html) - CSV 形式の表形式データを読み書きするクラスを実装するモジュールです
  - [Ruby csv](https://ruby.github.io/csv/) - CSV ファイルとデータへの完全なインターフェースです
  - [smarter_csv](https://github.com/tilo/smarter_csv) - CSV ファイルの読み書きを便利に行うための Ruby Gem です
  - [Go csv](https://pkg.go.dev/encoding/csv) - カンマ区切り値 (CSV) ファイルを読み書きするパッケージです
  - [Papa Parse](https://www.papaparse.com/) - JavaScript 向けの強力なブラウザ内 CSV パーサーです
  - [Python tabulate](https://github.com/astanin/python-tabulate) - データを視覚的に見やすい形式で表示するライブラリ兼コマンドラインユーティリティです
  - [Text::MarkdownTable](https://metacpan.org/pod/Text::MarkdownTable) - MultiMarkdown 構文でフォーマットされた表形式でデータを書き出すために使用できるモジュールです
  - [Terminal Table](https://github.com/tj/terminal-table) - シンプルで機能豊富な、Ruby 向けの ASCII テーブル生成ライブラリです
  - [go-pretty](https://github.com/jedib0t/go-pretty) - golang 製のテーブルライターほか多機能を備えたライブラリです

### テンプレートエンジン

- テンプレート言語とエンジン
  - [gomplate](https://gomplate.ca/) - 多数のデータソースと数百の関数をサポートする高速なテンプレートレンダラーです
  - [Go template](https://pkg.go.dev/text/template) - テキスト出力を生成するためのデータ駆動型テンプレートを実装するパッケージです
    - [sprig](https://masterminds.github.io/sprig/) - Go のテンプレート言語向けのテンプレート関数を提供するライブラリです
  - [mustache](https://mustache.github.io/) - ロジックレスなテンプレート構文です
  - [Jinja](https://www.palletsprojects.com/p/jinja/) - Python 向けの高機能なテンプレートエンジンです
  - [Perl Text::Template](https://metacpan.org/pod/Text::Template) - 定型文の作成、HTML ページの構築など、あらゆる用途に使えるライブラリです
  - [Perl HTML::Template](https://metacpan.org/pod/HTML::Template) - HTML テンプレートを作成するためのシステムです
  - [Template Toolkit](https://template-toolkit.org/) - 高速で柔軟、かつ高度に拡張可能なテンプレート処理システムです
  - [ERB](https://github.com/ruby/erb) - 使いやすくパワフルな、Ruby 向けのテンプレートシステムです
  - [Haml](https://haml.info/) - インラインコードを使用せずに、あらゆる Web ドキュメントの HTML をクリーンかつシンプルに記述するために使用されるマークアップ言語です
  - [Liquid](https://shopify.github.io/liquid/) - 柔軟な Web アプリ向けの、安全で顧客向けのテンプレート言語です
  - [envsubst in gettext](https://www.gnu.org/software/gettext/manual/gettext.html#envsubst-Invocation) - 環境変数の値を置換するプログラムです

### マークアップ・ドキュメント処理

- [unified](https://unifiedjs.com/) - コンテンツの作成と操作のために構築されたプラグインのエコシステムに支えられた、使いやすいインターフェースです
  - [remark](https://remark.js.org/) - プラグインによって駆動される Markdown プロセッサです
- [markdown-it](https://github.com/markdown-it/markdown-it) - 100% の CommonMark サポート、拡張機能、シンタックスプラグインを備えた Markdown パーサーです
  - [markdown-it-py](https://markdown-it-py.readthedocs.io/en/latest/) - markdown-it プロジェクトの Python 移植版です
- [markdownify](https://github.com/matthewwithanm/python-markdownify) - タグ、フォーマット、スタイリングの扱いをカスタマイズできるオプションを備えた、HTML を Markdown に変換する Python ライブラリです

## デバッグ

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > コンピュータサイエンス

:::

- デバッガー
  - Python
    - [VSCode Python extension](https://marketplace.visualstudio.com/items?itemName=ms-python.python) - Python 言語を豊富にサポートする拡張機能です
    - [debugpy](https://github.com/microsoft/debugpy/) - Python 3 向けの Debug Adapter Protocol の実装です
  - Node.js
    - [VSCode built-in debugger](https://code.visualstudio.com/docs/nodejs/nodejs-debugging) - 編集・コンパイル・デバッグのループを高速化するのに役立つ、組み込みのデバッガーです
    - [Node.js built-in inspector](https://nodejs.org/en/learn/getting-started/debugging) - デバッグとプロファイリングのために Chrome DevTools を Node.js インスタンスにアタッチできるインスペクタです
  - Go
    - [VSCode Go extension](https://marketplace.visualstudio.com/items?itemName=golang.Go) - Go プログラミング言語向けの豊富な言語サポートを提供する拡張機能です
    - [Delve](https://github.com/go-delve/delve) - Go プログラミング言語向けのデバッガーです
  - Ruby
    - [VSCode rdbg Ruby Debugger](https://marketplace.visualstudio.com/items?itemName=KoichiSasada.vscode-rdbg) - debug.gem をベースにした Ruby デバッガー拡張機能です
    - [debug.rb](https://github.com/ruby/debug) - Ruby 向けのデバッグ機能です
  - その他
    - [VSCode Bash Debug](https://marketplace.visualstudio.com/items?itemName=rogalmic.bash-debug) - bashdb をベースにした bash デバッガーの GUI フロントエンドです
    - [BASH Debugger](https://bashdb.sourceforge.net/) - bash シェルのコマンドラインデバッガーです
    - [GDB](https://www.gnu.org/software/gdb/) - GNU プロジェクトのデバッガーです
- デバッガープロトコル
  - [DAP](https://microsoft.github.io/debug-adapter-protocol/) - 開発ツール (IDE やエディタなど) とデバッガーの間で使用される抽象プロトコルです
  - [V8 V8 Inspector Protocol](https://v8.dev/docs/inspector) - JavaScript アプリケーションのデバッグとプロファイリングのために、ツールが V8 を計測できるようにするプロトコルです

### ロギング

- ロギングライブラリ
  - Python
    - [Python logging](https://docs.python.org/3/library/logging.html) - アプリケーションやライブラリのための柔軟なイベントロギングシステムを実装する関数とクラスを定義するモジュールです
    - [loguru](https://github.com/Delgan/loguru) - Python で楽しいロギング体験をもたらすことを目指すライブラリです
  - Javascript/Typescript
    - [bunyan](https://github.com/trentm/node-bunyan) - node.js サービス向けのシンプルで高速な JSON ロギングライブラリです
    - [winston](https://github.com/winstonjs/winston) - ほぼあらゆる用途に使えるロガーです
    - [debug](https://github.com/debug-js/debug) - Node.js コアのデバッグ手法をモデルにした、小さな JavaScript デバッグユーティリティです
  - Go
    - [Charmbracelet log](https://github.com/charmbracelet/log) - ミニマルでカラフルな Go ロギングライブラリです
    - [Go log](https://pkg.go.dev/log) - シンプルなロギング機能を実装するパッケージです
    - [zap](https://github.com/uber-go/zap/) - Go における非常に高速で構造化された、レベル分けされたロギングです
    - [Logrus](https://github.com/sirupsen/logrus) - Go (golang) 向けの構造化ロガーであり、標準ライブラリのロガーと完全に API 互換です
    - [Zero Allocation JSON Logger](https://github.com/rs/zerolog) - JSON 出力に特化した、高速でシンプルなロガーを提供するパッケージです
  - その他
    - [logger](https://man7.org/linux/man-pages/man1/logger.1.html) - システムログにメッセージを記録するツールです
    - [log4j](https://logging.apache.org/log4j/2.x/index.html) - 汎用性の高い、実運用レベルの Java ロギングフレームワークです
    - [log4sh](https://github.com/kward/log4sh) - シェルスクリプト向けの高度なロギングフレームワークです
    - [log4net](https://logging.apache.org/log4net/) - 優れた Apache log4j フレームワークを Microsoft .NET ランタイムに移植したものです

## テストフレームワークとツール

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > ソフトウェア開発プロセス

:::

- テストの概念とベストプラクティス
  - [Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html) - バランスの取れたポートフォリオを作るために、異なる種類のテストをどのように使うべきかについての考え方です
  - [Test case](https://en.wikipedia.org/wiki/Test_case) - 1 つのテストを定義する、入力、実行条件、テスト手順、期待される結果の仕様です
  - [Test double](https://en.wikipedia.org/wiki/Test_double) - テストにおいて実際のオブジェクトの代役を務めることができるオブジェクトです
  - [Arrange-Act-Assert Pattern](https://xp123.com/3a-arrange-act-assert/) - テスト対象のオブジェクトをセットアップし、何らかのミューテーターを通じてそれに作用させ、そのオブジェクトや協調オブジェクト、パラメータについて主張を行うという形でテストを構造化するパターンです
  - [DAMP (Descriptive And Meaningful Phrases)](https://testing.googleblog.com/2019/12/testing-on-toilet-tests-too-dry-make.html) - 単体テストを書く際に、DRY よりも重視すべき原則です
  - [Unit testing best practices with .NET](https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-best-practices) - 堅牢で保守しやすいテストを書く助けとなる一連のベストプラクティスです
  - [JS Testing Best Practices](https://github.com/goldbergyoni/javascript-testing-best-practices) - JavaScript 向けの主要なテストプラクティスをまとめたものです
- テストプロトコル
  - [Test Anything Protocol](http://testanything.org/) - テストモジュールとテストハーネスの間のシンプルなテキストベースのインターフェースです
    - [tappy](https://tappy.readthedocs.io/en/latest/) - Test Anything Protocol (TAP) を扱うための一連のツールです
    - [Node-Tap](https://node-tap.org/) - JavaScript 向けの Test-Anything-Protocol ライブラリです

### テストフレームワーク

- Bash
  - [Bats-core](https://bats-core.readthedocs.io/en/stable/) - Bash 用の自動テストシステムです
  - [shUnit2](https://github.com/kward/shunit2) - Bourne 系のシェルスクリプト向けの単体テストフレームワークです
  - [shellspec](https://shellspec.info/) - dash、bash、ksh、zsh、そしてすべての POSIX シェル向けの高機能な BDD 単体テストフレームワークです
- Ruby
  - [Minitest](https://github.com/minitest/minitest) - TDD、BDD、モック、ベンチマークをサポートする、完全なテスト機能一式です
  - [RSpec](https://rspec.info/) - Ruby プログラミング言語向けのテストツールです
  - [aruba](https://github.com/cucumber/aruba) - Cucumber-Ruby、RSpec、Minitest を使ってコマンドラインアプリケーションをテストするツールです
- Python
  - [Python unittest](https://docs.python.org/3/library/unittest.html) - 「PyUnit」とも呼ばれる単体テストフレームワークで、JUnit の Python 言語版です
  - [pytest](https://docs.pytest.org/) - 小さく読みやすいテストを簡単に書けるようにし、複雑な機能テストをサポートするためにスケールできるフレームワークです
  - [pytest-mock](https://github.com/pytest-dev/pytest-mock/) - 標準の `unittest.mock` パッケージの薄いラッパーである `mocker` フィクスチャを提供する pytest プラグインです
- Javascript/Typescript
  - [Vitest](https://vitest.dev) - Vite が搭載された、非常に高速な単体テストフレームワークです
  - [Jest](https://jestjs.io/) - シンプルさに重点を置いた、心地よい JavaScript テストフレームワークです
  - [Mocha](https://mochajs.org/) - Node.js とブラウザ上で動作する、機能豊富な JavaScript テストフレームワークです
  - ランタイム統合型
    - [bun test](https://bun.sh/docs/cli/test) - Bun に組み込まれた、高速で Jest 互換のテストランナーです
    - [deno test](https://docs.deno.com/runtime/fundamentals/testing/) - JavaScript と TypeScript のコードをテストするために使用できる、組み込みのテストランナーです
- Go
  - [Go testing](https://pkg.go.dev/testing) - Go パッケージの自動テストをサポートするパッケージです
  - [Ginkgo](https://onsi.github.io/ginkgo/) - Go 向けの BDD スタイルのテストフレームワークです
- その他
  - [JUnit](https://junit.org/junit5/) - Java と JVM 向けのプログラマーフレンドリーなテストフレームワークの、第 5 メジャーバージョンです
  - [xUnit.net](https://xunit.net/) - .NET Framework 向けの、無料でオープンソースかつコミュニティ主導の単体テストツールです

### アサーションライブラリ

- [Chai](https://www.chaijs.com/) - node とブラウザ向けの BDD / TDD アサーションライブラリです
- [Gomega](https://onsi.github.io/gomega/) - Go 向けのマッチャー兼アサーションライブラリです

### コードカバレッジツール

- [Go cover](https://pkg.go.dev/cmd/cover) - Go プログラムのコードカバレッジ統計を提供するツールです
- [Istanbul](https://istanbul.js.org/) - もう 1 つの JS コードカバレッジツールです
- [cobertura](https://cobertura.github.io/cobertura/) - テストによってアクセスされたコードの割合を計算する、無料の Java ツールです
- [LCOV](https://github.com/linux-test-project/lcov) - プログラムのどの部分が実際に実行されたかについての情報を提供する GNU ツール GCOV の拡張です
- [kcov](https://simonkagstrom.github.io/kcov/) - コンパイルされたプログラム向けのコードカバレッジテスターです
- [SimpleCov](https://github.com/simplecov-ruby/simplecov) - 強力な設定ライブラリと、テストスイート間でのカバレッジの自動マージ機能を備えた、Ruby 向けのコードカバレッジツールです

### テスト支援ツール

- モックライブラリ
  - Jest / Vitest 組み込みのもの
  - [mock](https://dhuan.github.io/mock/) - HTTP レスポンスをモックするためのコマンドラインツールです
  - [unittest.mock](https://docs.python.org/3/library/unittest.mock.html) - テスト対象システムの一部をモックオブジェクトに置き換えられるようにする、Python のテスト用ライブラリです
  - [sinon.js](https://sinonjs.org/) - スタンドアロンでテストフレームワークに依存しない、JavaScript のテストスパイ・スタブ・モックです
  - [mockery](https://vektra.github.io/mockery/latest/) - Golang のインターフェースのモック実装を作成するプロジェクトです
- テストデータジェネレーター
  - [Databricks Labs Data Generator](https://github.com/databrickslabs/dbldatagen) - Spark を使って Databricks 環境内で合成データを生成するための Python ライブラリです
  - [generatedata.com](https://github.com/benkeen/generatedata) - 強力で機能豊富な、ランダムテストデータジェネレーターです
  - [gofakeit](https://github.com/brianvoe/gofakeit) - go で書かれたランダムデータジェネレーターです
  - [Fake-rs](https://github.com/cksac/fake-rs) - Rust で偽データを生成するためのライブラリです
- マルチ環境テストランナー
  - [nox](https://nox.thea.codes/) - tox と同様に、複数の Python 環境でのテストを自動化するコマンドラインツールです
  - [tox](https://tox.wiki/en) - Python 向けの、コマンドラインで駆動する自動テストツールです

### ミューテーションテスト

- [Mutation testing](https://en.wikipedia.org/wiki/Mutation_testing) - ソースコードの特定の文を変更し、テストスイートがそのエラーを検出できるかどうかを確認する、ソフトウェアテストの一種です
  - [cargo-mutants](https://mutants.rs/) - テストを失敗させることなくバグを挿入できる箇所を見つけることで、プログラムの品質向上を助ける Rust 向けのツールです
  - [Stryker Mutator](https://stryker-mutator.io/) - ミュータントを使ってテスト自体をテストするツールです
  - [PIT Mutation Testing](https://pitest.org/) - Java と JVM に対してゴールドスタンダードなテストカバレッジを提供する、最先端のシステムです

## ビルド自動化

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > コンピュータサイエンス
- 3\. テクノロジー > 3\.1 ソフトウェア開発 > クラウドインフラ活用

:::

- ビルド自動化ツール
  - [GNU Make](https://www.gnu.org/software/make/) - プログラムの実行可能ファイルやその他の非ソースファイルの生成を制御するツールです
    - [Remake](https://bashdb.sourceforge.net/remake/) - エラーレポートの改善、トレーシングとプロファイリングの向上、そしてデバッガーを追加した GNU Make の拡張版です
    - [makefile-graph](https://github.com/dnaeon/makefile-graph) - GNU Make の内部データベースを解析してグラフを生成する、Go モジュール兼 CLI アプリケーションです
  - [Bazel](https://bazel.build/) - 高速でスケーラブル、マルチ言語対応かつ拡張可能なビルドシステムです
  - [Gradle](https://gradle.org/) - ほぼあらゆる種類のソフトウェアをビルドできるほど柔軟に設計された、オープンソースのビルド自動化ツールです
  - [Maven](https://maven.apache.org/) - ソフトウェアプロジェクトの管理と理解のためのツールです
  - [Task](https://taskfile.dev/) - GNU Make よりもシンプルで使いやすいことを目指す、タスクランナー兼ビルドツールです
  - [CMake](https://cmake.org/) - ソフトウェアのビルド、テスト、パッケージ化のために設計された、オープンソースのクロスプラットフォームなツール群です
    - [CPack](https://cmake.org/cmake/help/latest/module/CPack.html) - バイナリインストーラーとソースパッケージ用のジェネレーターを設定するツールです
  - [Meson](https://mesonbuild.com/) - 非常に高速であり、さらに重要なこととして可能な限りユーザーフレンドリーであることを目指した、オープンソースのビルドシステムです
  - [Dune](https://dune.build/) - OCaml、OCaml 関連言語、Coq 向けの構成可能なビルドシステムです
  - [Rake](https://ruby.github.io/rake/) - Ruby で実装された Make のようなプログラムです
  - [fpm](https://fpm.readthedocs.io/) - Debian、Ubuntu、Fedora、CentOS、RHEL、Arch Linux などのパッケージを簡単に作成できるツールです
- チュートリアル
  - [Makefile Tutorial by Example](https://makefiletutorial.com/) - Makefile の基礎を教えるチュートリアルです

### モノレポ管理

- モノレポツール
  - [Turborepo](https://turbo.build/repo) - JavaScript と TypeScript のモノレポ向けの高性能ビルドシステムです
  - [Nx](https://nx.dev/) - ファーストクラスのモノレポサポートと強力な統合機能を備えた、スマートで高速かつ拡張可能なビルドシステムです
  - [Lerna](https://lerna.js.org/) - JavaScript/TypeScript 向けの元祖モノレポツールです
- リソース
  - [Monorepo Tools](https://monorepo.tools/) - モノレポ向けのツールとリソースを掲載したウェブサイトです

### プログラムドキュメント

- プログラムドキュメントツール
  - [apiDoc](http://apidocjs.com/) - ソースコード内の API 記述からドキュメントを作成するツールです
  - [JSDoc](https://jsdoc.app/) - JavaScript 向けの API ドキュメントジェネレーターです
  - [perldoc](https://metacpan.org/dist/Pod-Perldoc/view/perldoc.pod) - perl のインストールツリーに埋め込まれた .pod 形式のドキュメントを検索するツールです
    - [Pod](https://metacpan.org/pod/perlpod) - Perl、Perl プログラム、Perl モジュールのドキュメントを書くために使用される、使いやすいマークアップ言語です
  - [pydoc](https://docs.python.org/3/library/pydoc.html) - Python モジュールからドキュメントを自動生成するツールです
    - [Docstring](https://www.python.org/dev/peps/pep-0257/) - モジュール、関数、クラス、メソッドの定義において最初の文として現れる文字列リテラルです
  - [godoc](https://pkg.go.dev/golang.org/x/tools/cmd/godoc) - Go プログラム向けのドキュメントを抽出・生成するツールです
  - [rustdoc](https://doc.rust-lang.org/rustdoc/) - Rust プロジェクト向けのドキュメントを生成するツールです
  - [RDoc](https://ruby.github.io/rdoc/) - Ruby プロジェクト向けの HTML およびコマンドラインドキュメントを生成するツールです
  - [Javadoc](https://www.oracle.com/java/technologies/javase/javadoc-tool.html) - ソースコード内のドキュメントコメントから HTML 形式の API ドキュメントを生成する、Oracle 製のツールです

## パッケージ依存関係管理

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > コンピュータサイエンス

:::

- JavaScript と Web エコシステム
  - [npm CLI](https://www.npmjs.com/) - 世界最大のソフトウェアレジストリです
    - [npm-check-updates](https://github.com/raineorshine/npm-check-updates) - package.json の依存関係を最新バージョンにアップグレードできるコマンドラインツールです
    - [npmgraph](https://npmgraph.js.org/) - npm の依存関係グラフを探索するためのツールです
  - [yarn](https://yarnpkg.com/) - プロジェクトマネージャーとしても機能するパッケージマネージャーです
  - [pNPm](https://pnpm.io) - 高速でディスク容量効率の良いパッケージマネージャーです
  - [Corepack](https://github.com/nodejs/corepack#readme) - Node.js プロジェクトと、開発中に使用されることを意図したパッケージマネージャーとの橋渡しをする、ランタイム依存のない Node.js スクリプトです
  - [dpmland](https://dpmland.deno.dev/) - Deno のモジュールと依存関係を管理するための、シンプルでモダン、かつ簡単な方法です
  - [Bun package manager](https://bun.sh/package-manager) - Bun に組み込まれた、高速で npm 互換のパッケージマネージャーです
  - [orogene](https://orogene.dev/) - JavaScript エコシステム向けの次世代パッケージマネージャーです
  - [vlt](https://www.vlt.io/home) - npm 互換パッケージを安全な npm ミラーおよび完全に解決された依存関係グラフとともに提供する、素早く動くチーム向けの JavaScript パッケージレジストリです
- Python 開発
  - [pip](https://pip.pypa.io/) - Python 向けのパッケージインストーラーです
  - [poetry](https://python-poetry.org/) - Python における依存関係管理とパッケージングのためのツールです
  - [pdm](https://pdm-project.org/en/latest/) - 最新の PEP 標準をサポートする、モダンな Python パッケージ・依存関係マネージャーです
  - [uv](https://docs.astral.sh/uv/) - Rust で書かれた、非常に高速な Python パッケージ・プロジェクトマネージャーです
- システム言語・ネイティブ言語
  - [go mod](https://pkg.go.dev/cmd/go) - Go のソースコードを管理するためのツールです
  - [Cargo](https://doc.rust-lang.org/stable/cargo/) - Rust のパッケージマネージャーです
  - [Conan](https://conan.io/) - C 言語と C++ 言語向けの依存関係・パッケージマネージャーです
  - [vcpkg](https://vcpkg.io/) - ライブラリの取得と管理のための、無料の C/C++ パッケージマネージャーです
  - [bpkg](https://bpkg.sh/bpkg/) - 軽量な bash パッケージマネージャーです
- JVM と .NET フレームワーク
  - [Maven](https://maven.apache.org/) - ソフトウェアプロジェクトの管理と理解のためのツールです
  - [Gradle](https://gradle.org/) - ほぼあらゆる種類のソフトウェアをビルドできるほど柔軟に設計された、オープンソースのビルド自動化ツールです
  - [NuGet CLI](https://www.nuget.org/) - .NET 向けのパッケージマネージャーです
- その他の言語エコシステム
  - [RubyGems CLI](https://rubygems.org/) - Ruby 公式のパッケージマネージャーです
  - [Bundler](https://bundler.io/) - Ruby プロジェクトに一貫した環境を提供するツールです
  - [LuaRocks CLI](https://luarocks.org/) - Lua モジュール向けのパッケージマネージャーです
  - [cpanminus](https://metacpan.org/pod/App::cpanminus) - CPAN からモジュールを取得・展開・ビルド・インストールするツールです
  - [stack](https://docs.haskellstack.org/en/stable/) - Haskell プロジェクトを開発するためのクロスプラットフォームプログラムです
  - [opam](https://opam.ocaml.org/) - OCaml コミュニティ向けのソースベースのパッケージマネージャーです
  - [Pub](https://pub.dev/) - Dart と Flutter 公式のパッケージマネージャーです
  - [Hex](https://hex.pm/) - Erlang エコシステム向けのパッケージマネージャーです

## 仮想環境

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > コンピュータサイエンス

:::

- 仮想環境マネージャー
  - [Python venv](https://docs.python.org/3/library/venv.html) - 仮想環境の作成のためのモジュールです
  - [pyenv](https://github.com/pyenv/pyenv) - シンプルな Python バージョン管理のためのツールです
  - [nodeenv](https://ekalinin.github.io/nodeenv/) - 分離された node.js 環境を作成するツールです
  - [nvm](https://github.com/nvm-sh/nvm) - 複数のアクティブな node.js バージョンを管理するための、POSIX 準拠の bash スクリプトです
  - [nvm-windows](https://github.com/coreybutler/nvm-windows) - Windows 向けの node.js バージョンマネージャーです
  - [rv](https://github.com/spinel-coop/rv) - Rust で書かれた、シンプルで強力な Ruby バージョンマネージャーです
  - [frum](https://github.com/TaKO8Ki/frum) - Rust で書かれた、高速でモダンな Ruby バージョンマネージャーです
  - [g](https://github.com/stefanmaric/g) - シンプルな Go バージョンマネージャーで、グルテンフリーです
  - [perlbrew](https://perlbrew.pl/) - $HOME ディレクトリ内で複数の perl インストールを管理するツールです
  - [asdf](https://asdf-vm.com/) - ツールバージョンマネージャーです
  - [mise](https://mise.jdx.dev/) - 多言語対応のツールバージョンマネージャーです
  - [tenv](https://github.com/tofuutils/tenv) - OpenTofu、Terraform、Terragrunt、Atmos 向けの多用途バージョンマネージャーです
