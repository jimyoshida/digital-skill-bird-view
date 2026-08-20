# 09 - プログラミングの概念とパラダイム

## ソフトウェア設計とアーキテクチャ

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > ソフトウェア設計手法

:::

### 設計原則

- [Orthogonality and DRY principle](https://www.artima.com/intv/dry.html) - システム内のあらゆる知識は単一の、曖昧さのない、権威ある表現を持たなければならないという原則です
- [Separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) - コンピュータプログラムを個別のセクションに分離するための設計原則です
- [Design by Contract](https://en.wikipedia.org/wiki/Design_by_contract) - ソフトウェアコンポーネントに対して形式的で正確かつ検証可能なインターフェース仕様を規定する、ソフトウェア設計のアプローチです
- [Law of Demeter](https://en.wikipedia.org/wiki/Law_of_Demeter) - ソフトウェア、特にオブジェクト指向プログラムを開発するための設計ガイドラインです
- [Hyrum's Law](https://www.hyrumslaw.com/) - 暗黙のインターフェースの法則であり、API の利用者が十分な数に達すると、システムの観測可能なすべての振る舞いに誰かが依存するようになるというものです
- [SOLID - The principle of OOD](https://en.wikipedia.org/wiki/SOLID) - オブジェクト指向設計をより理解しやすく、柔軟で保守しやすいものにすることを意図した、5 つの設計原則の頭字語です
  - Single responsibility
  - Open–closed
  - Liskov substitution
  - Interface segregation
  - Dependency inversion
- [The Reactive Manifesto](https://www.reactivemanifesto.org/) - アプリケーションが応答性、耐障害性、弾力性を持ちメッセージ駆動であることを目指す、システムアーキテクチャに対する首尾一貫したアプローチです
- [Unix philosophy](https://en.wikipedia.org/wiki/Unix_philosophy) - ソフトウェア開発に対する文化的規範と哲学的アプローチの集合です
- [KISS principle](https://en.wikipedia.org/wiki/KISS_principle) - ほとんどのシステムは複雑にするよりもシンプルに保つ方がうまく機能するとする設計原則です
- [Wirth's law](https://en.wikipedia.org/wiki/Wirth%27s_law) - ソフトウェアはハードウェアが高速化する以上に急速に低速化しているとするコンピュータ性能に関する格言です

### 設計のベストプラクティス

- [Resource acquisition is initialization (RAII)](https://en.wikipedia.org/wiki/Resource_acquisition_is_initialization) - リソースのライフサイクルをオブジェクトの寿命に結びつけるプログラミングイディオムです
- [Rob Pike's 5 Rules of Programming](https://users.ece.utexas.edu/~adnan/pike.html) - 最適化の努力をどこに向けるべきかについての一連のルールであり、計測とデータ構造の重要性を強調するものです
- [The Zen of Python](https://www.python.org/dev/peps/pep-0020/) - コンピュータプログラムを書くための 19 の指導原則を集めたもので、Python プログラミング言語の設計に影響を与えたものです
- [The twelve-factor app](https://12factor.net/) - 現代的なクラウドプラットフォームでの展開に適した Software-as-a-Service アプリケーションを構築するための方法論です

### デザインパターン

- [Software design pattern](https://en.wikipedia.org/wiki/Software_design_pattern) - ソフトウェア設計において特定の文脈内で頻繁に発生する問題に対する、一般的で再利用可能な解決策です
- [Entity–control–boundary](https://en.wikipedia.org/wiki/Entity%E2%80%93control%E2%80%93boundary) - オブジェクト指向システムにおけるクラスの責務の構造化を助ける、ソフトウェア設計・分析で使用されるアーキテクチャパターンです
- [Command Query Responsibility Segregation](https://en.wikipedia.org/wiki/Command_Query_Responsibility_Segregation) - データストアの読み取り操作と更新操作を分離するパターンです
- [Fluent interface](https://en.wikipedia.org/wiki/Fluent_interface) - メソッドチェーンに基づいてオブジェクト指向 API を設計する手法であり、ソースコードの可読性を通常の文章に近づけることを目標としています
- [Model-view-controller pattern](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) - 関連するプログラムロジックを 3 つの相互接続された要素に分割する、ユーザーインターフェース開発によく使われるソフトウェア設計パターンです
- [Dependency injection](https://en.wikipedia.org/wiki/Dependency_injection) - オブジェクトや関数が依存する他のオブジェクトや関数を受け取る設計パターンです

### アーキテクチャスタイル

- [Three-tier architecture](https://en.wikipedia.org/wiki/Multitier_architecture) - プレゼンテーション、アプリケーション処理、データ管理の各機能が論理的に分離された、クライアントサーバーアーキテクチャです
- [Microservices architecture](https://martinfowler.com/articles/microservices.html) - 単一のアプリケーションを、それぞれが独自のプロセスで動作し軽量な仕組みで通信する小さなサービス群として開発するアプローチです
- [Event-driven architecture](https://en.wikipedia.org/wiki/Event-driven_architecture) - イベントの生成、検知、消費、およびそれへの反応を促進するソフトウェアアーキテクチャパラダイムです
- [Resource-oriented architecture](https://en.wikipedia.org/wiki/Resource-oriented_architecture) - リソースのネットワークという形でソフトウェアを設計・開発するための、ソフトウェアアーキテクチャおよびプログラミングパラダイムのスタイルです
- [Background processing](https://en.wikipedia.org/wiki/Background_process) - メインアプリケーションの応答性を維持しながら、バックグラウンドでタスクを実行することです

### アーキテクチャ記述

- [System](https://en.wikipedia.org/wiki/System) - 一定の規則に従って相互作用または相互関連し、統一された全体を形成する要素の集合です
  - [Systems architecture](https://en.wikipedia.org/wiki/Systems_architecture) - システムの構造、振る舞い、その他の視点を定義する概念モデルです
    - [4+1 architectural view model](https://en.wikipedia.org/wiki/4%2B1_architectural_view_model) - 「複数の並行するビューの使用に基づいてソフトウェア集約型システムのアーキテクチャを記述する」ために使用されるビューモデルです
    - [The C4 model](https://c4model.com/) - 学びやすく開発者に優しい、ソフトウェアアーキテクチャ図の作成アプローチです
    - [UML](https://www.omg.org/spec/UML/About-UML/) - ソフトウェア集約型システムの成果物を可視化、仕様化、構築、文書化するためのグラフィカル言語です
    - [Flowchart](https://en.wikipedia.org/wiki/Flowchart) - ワークフローやプロセスを表現する図の一種です
  - [Conway's law](https://en.wikipedia.org/wiki/Conway%27s_law) - 組織は自らのコミュニケーション構造を反映したシステムを設計するという格言です
- 関連標準
  - [ISO/IEC/IEEE 42010 (Architecture description)](https://en.wikipedia.org/wiki/ISO/IEC_42010) - システムおよびソフトウェアのアーキテクチャ記述に関する国際標準規格です

### ドメイン駆動設計 (DDD)

- [Domain-driven design](https://en.wikipedia.org/wiki/Domain-driven_design) - そのドメインの専門家からの入力に従って、ドメインに一致するようにソフトウェアをモデル化することに重点を置いた、主要なソフトウェア設計アプローチです
  - [Ubiquitous Language](https://martinfowler.com/bliki/UbiquitousLanguage.html) - 開発者とユーザーの間で共通かつ厳密な言語を構築する実践です
  - [Anemic domain model](https://en.wikipedia.org/wiki/Anemic_domain_model) - ドメインオブジェクトが検証、計算、ルールなどのビジネスロジックをほとんど、あるいはまったく含まないプログラミングのアンチパターンです
- [Object-oriented analysis and design](https://en.wikipedia.org/wiki/Object-oriented_analysis_and_design) - オブジェクト指向プログラミングを適用し、ソフトウェア開発プロセス全体を通じて視覚的モデリングを使用することで、アプリケーション、システム、またはビジネスを分析・設計するための技術的アプローチです
  - [Use case](https://en.wikipedia.org/wiki/Use_case) - 目標を達成するために、役割 (Unified Modeling Language ではアクターと呼ばれる) とシステムとの間の相互作用を定義する、一連の行動またはイベントステップの一覧です
- [Ontology](https://en.wikipedia.org/wiki/Ontology_(information_science)) - 1 つ、複数、またはすべての議論領域を構成する概念、データ、実体間のカテゴリ、性質、関係を表現し、形式的に命名・定義したものです
  - [Semantic network](https://en.wikipedia.org/wiki/Semantic_network) - ネットワーク内の概念間の意味的関係を表現するナレッジベースです
    - [WordNet](https://wordnet.princeton.edu/) - 英語の大規模な語彙データベースです
- [Database design](https://en.wikipedia.org/wiki/Database_design) - データベースモデルに従ったデータの編成です

## コアプログラミング概念

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > コンピュータサイエンス

:::

### 言語の仕組みと実行

- [Source code](https://en.wikipedia.org/wiki/Source_code) - 通常はプレーンテキストとして、人間が読めるプログラミング言語を使って書かれた、コメントを含む場合もあるコードの集合です
- [Statement](https://en.wikipedia.org/wiki/Statement_(computer_science)) - 実行すべき何らかの動作を表現する、命令型プログラミング言語の構文単位です
- [Expression](https://en.wikipedia.org/wiki/Expression_(computer_science)) - 評価してその値を決定できる、プログラミング言語における構文的実体です
  - 演算子とオペランド
- [Literal](https://en.wikipedia.org/wiki/Literal_(computer_programming)) - ソースコード内で固定値を表現するための表記法です
  - テンプレート文字列またはリテラル
  - [Heredoc](https://en.wikipedia.org/wiki/Here_document) - ソースコードの一部を、あたかも別のファイルであるかのように扱う、ファイルリテラルまたは入力ストリームリテラルです
- [Constant](https://en.wikipedia.org/wiki/Constant_(computer_programming)) - プログラムの通常の実行中に変更できない値です
- [Variable](https://en.wikipedia.org/wiki/Variable_(computer_science)) - 値と呼ばれる既知または未知の量の情報を含む、シンボリックな名前と対応付けられた抽象的な記憶場所です
- [Scope](https://en.wikipedia.org/wiki/Scope_(computer_science)) - コンピュータプログラム内で、名前とエンティティの束縛 (名前束縛) が有効となる領域です
- [Data type](https://en.wikipedia.org/wiki/Data_type) - 通常は可能な値の集合と許される操作によって指定される、データ値の集合または分類です
  - [Primitives](https://en.wikipedia.org/wiki/Primitive_data_type) - プログラミング言語が基本的な構成要素として提供する、他のデータ型を用いずに定義されるデータ型です
  - [Nominal type system](https://en.wikipedia.org/wiki/Nominal_type_system) - データ型の互換性と同等性が明示的な宣言や型名によって決定される、型システムの主要な分類の 1 つです
  - [Structural type system](https://en.wikipedia.org/wiki/Structural_type_system) - 型の互換性と同等性が型の実際の構造や定義によって決定される、型システムの主要な分類です
  - [Duck typing](https://en.wikipedia.org/wiki/Duck_typing) - 特定のメソッドやプロパティの有無に基づいて型の互換性を判定する、ダックテストの応用です
  - [Union type](https://en.wikipedia.org/wiki/Union_type) - そのインスタンスに格納できる複数の許容されたプリミティブ型を指定するデータ型定義です
  - [Type variance](https://en.wikipedia.org/wiki/Type_variance) - 複合型のサブタイプとその構成要素のサブタイプとの間の関係です
  - [Type safety](https://en.wikipedia.org/wiki/Type_safety) - プログラミング言語が型エラーをどの程度抑止または防止するかの度合いです
- [Reference](https://en.wikipedia.org/wiki/Reference_(computer_science)) - プログラムがコンピュータのメモリや他の記憶装置内の特定のデータに間接的にアクセスできるようにする値です
  - [Null pointer](https://en.wikipedia.org/wiki/Null_pointer) - ポインタや参照が有効なオブジェクトを参照していないことを示すために保存された値です

### メモリ管理

- [Reference counting](https://en.wikipedia.org/wiki/Reference_counting) - リソースへの参照、ポインタ、ハンドルの数を保持するプログラミング技法です
- [Garbage collection](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)) - コレクタがもはや使用されていないオブジェクトが占有するメモリの回収を試みる、自動メモリ管理の一形態です
- [Smart pointer](https://en.wikipedia.org/wiki/Smart_pointer) - ポインタを模倣しつつ、自動メモリ管理や境界チェックなどの追加機能を提供する抽象データ型です
- [Memory safety](https://en.wikipedia.org/wiki/Memory_safety) - メモリアクセスを扱う際に、様々なソフトウェアのバグやセキュリティ脆弱性から保護されている状態です

### 制御フロー構造

- [Control flow](https://en.wikipedia.org/wiki/Control_flow) - 命令型プログラムの個々の文、命令、関数呼び出しが実行または評価される順序です
- [Continuation](https://en.wikipedia.org/wiki/Continuation) - プログラムの計算処理の、ある時点以降の残りを表すデータ構造です
  - [call-with-current-continuation](https://en.wikipedia.org/wiki/Call-with-current-continuation) - 特に Scheme プログラミング言語において継続を捕捉し呼び出すために使用される、制御フロー演算子です
- [Exception handling](https://en.wikipedia.org/wiki/Exception_handling_(programming)) - プログラムの実行中に発生する例外への対応処理です
- [Finite-state machine](https://en.wikipedia.org/wiki/Finite-state_machine) - ある時点で有限個の状態のうちのちょうど 1 つを取り得る抽象機械を表現する、計算の数学的モデルです

### 基礎的な技法と特性

- [State](https://en.wikipedia.org/wiki/State_(computer_science)) - ある瞬間において、コンピュータプログラムまたはシステムがアクセスできる、保存された情報です
- [Function](https://en.wikipedia.org/wiki/Function_(computer_programming)) - 特定のタスクを実行する、1 つの単位としてまとめられたプログラム命令の並びです
  - [Parameter](https://en.wikipedia.org/wiki/Parameter_(computer_programming)) - 入力として与えられるデータの一部を参照するために、サブルーチンや関数で使用される特別な種類の変数です
  - [Anonymous function](https://en.wikipedia.org/wiki/Anonymous_function) - 識別子に束縛されていない関数定義です
- [Immutable object](https://en.wikipedia.org/wiki/Immutable_object) - 作成後に状態を変更できないオブジェクトです
- [Generic Programming](https://en.wikipedia.org/wiki/Generic_programming) - 必要に応じて後からインスタンス化される、後で指定される型を用いてアルゴリズムを記述するプログラミングスタイルです
- [Assertion](https://en.wikipedia.org/wiki/Assertion_(software_development)) - コード内のある地点で、述語 (ブール値を返す関数) が常に真であることが期待されるという表明です
- [Autovivification](https://en.wikipedia.org/wiki/Autovivification) - 新しい変数やデータ構造が初めて使用される際に必要に応じて自動的に作成されることです

### モジュール構造と組織化

- [Cohesion](https://en.wikipedia.org/wiki/Cohesion_(computer_science)) - モジュール内の要素がどの程度まとまっているかの度合いです
- [Coupling](https://en.wikipedia.org/wiki/Coupling_(computer_programming)) - ソフトウェアモジュール間の相互依存の度合いであり、2 つのルーチンやモジュールがどの程度密接に結びついているか、およびモジュール間の関係の強さを測る尺度です

## プログラミングパラダイム

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > コンピュータサイエンス

:::

### オブジェクト指向プログラミング

- [Object-oriented Programming](https://en.wikipedia.org/wiki/Object-oriented_programming) - オブジェクト、すなわちデータと関数をカプセル化するソフトウェアエンティティに基づくプログラミングパラダイムです
  - [Abstraction](https://en.wikipedia.org/wiki/Abstraction_(computer_science)) - 問題に適したクラスをモデル化し、最も関連性の高い詳細レベルで作業することで、システムの複雑さを隠す過程です
  - [Encapsulation](https://en.wikipedia.org/wiki/Encapsulation_(computer_programming)) - データとそのデータを操作するメソッドをひとまとめにすること、またはオブジェクトの一部の構成要素への直接アクセスを制限することです
  - [Polymorphism](https://en.wikipedia.org/wiki/Polymorphism_(computer_science)) - 異なる型のエンティティに対して単一のインターフェースを提供することです
    - [Dynamic dispatch](https://en.wikipedia.org/wiki/Dynamic_dispatch) - 実行時にポリモーフィックな操作 (メソッドまたは関数) のどの実装を呼び出すかを選択する処理です
  - [Inheritance](https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)) - 類似した実装を保持したまま、あるオブジェクトやクラスを別のオブジェクトやクラスに基づいて構成する仕組みです
  - [Class](https://en.wikipedia.org/wiki/Class_(computer_programming)) - 状態の初期値と振る舞いの実装を提供する、オブジェクトを作成するための拡張可能なプログラムコードのテンプレートです
  - [Interface](https://en.wikipedia.org/wiki/Interface_(object-oriented_programming)) - データを含まず、メソッドシグネチャとして振る舞いを定義する抽象型です
  - [Method](https://en.wikipedia.org/wiki/Method_(computer_programming)) - オブジェクトに関連付けられ、暗黙的にそのオブジェクトに対して作用する手続きです
  - [This keyword](https://en.wikipedia.org/wiki/This_(computer_programming)) - 現在の関数呼び出しやメソッド呼び出しに関連付けられたオブジェクトを参照するために、多くのオブジェクト指向プログラミング言語で使用されるキーワードです
  - [Prototype-based programming](https://en.wikipedia.org/wiki/Prototype-based_programming) - プロトタイプとして機能する既存のオブジェクトを再利用する過程を通じて、振る舞いの再利用を行うオブジェクト指向プログラミングのスタイルです

### 関数型プログラミング

- [Functional Programming](https://en.wikipedia.org/wiki/Functional_programming) - 関数の適用と合成によってプログラムを構築するプログラミングパラダイムです
  - [Algebraic data type](https://en.wikipedia.org/wiki/Algebraic_data_type) - 他の型を組み合わせて形成される複合データ型です
  - [Pattern matching](https://en.wikipedia.org/wiki/Pattern_matching) - あるパターンの構成要素が存在するかどうかを、与えられたトークン列に対して確認する行為です
  - [First-class function](https://en.wikipedia.org/wiki/First-class_function) - 関数を第一級オブジェクトとして扱う (例えば変数に代入したり引数として渡したりできる) プログラミング言語の性質です
    - [Map](https://en.wikipedia.org/wiki/Map_(higher-order_function)) - 与えられた関数を並びの各要素に適用し、その結果を含む並びを返す高階関数です
    - [Filter](https://en.wikipedia.org/wiki/Filter_(higher-order_function)) - データ構造を処理し、与えられた述語が真を返す要素のみを含む新しいデータ構造を生成する高階関数です
    - [Reduce](https://en.wikipedia.org/wiki/Fold_(higher-order_function)) - 結合演算を再帰的に適用することでデータ構造を単一の値に縮約する高階関数 (fold とも呼ばれます) です
  - [Referential transparency](https://en.wikipedia.org/wiki/Referential_transparency) - 式をプログラムの振る舞いを変えることなくその対応する値に置き換えられるという、式の性質です
  - [Closure](https://en.wikipedia.org/wiki/Closure_(computer_programming)) - 関数と、その関数の非局所変数のための参照環境とを組み合わせたものです
  - [Side-effect](https://en.wikipedia.org/wiki/Side_effect_(computer_science)) - 操作、関数、式が、そのローカル環境の外部にある状態変数の値を変更する、観測可能な影響です
  - [Monad](https://en.wikipedia.org/wiki/Monad_(functional_programming)) - プログラム断片 (関数) を組み合わせ、その戻り値を追加の計算を伴う型でラップする構造を持つ、ソフトウェア設計パターンです
  - [Currying](https://en.wikipedia.org/wiki/Currying) - 複数の引数を取る関数を、それぞれが単一の引数を取る関数の並びに変換する技法です

### リアクティブプログラミングとその他

- [Reactive Programming](https://en.wikipedia.org/wiki/Reactive_programming) - データストリームと変化の伝播を扱う宣言型プログラミングパラダイムです
  - [Functional Reactive Programming (FRP)](https://en.wikipedia.org/wiki/Functional_reactive_programming) - 関数型プログラミングの構成要素を用いたリアクティブプログラミングのためのプログラミングパラダイムです
  - 言語とフレームワーク
    - [RO](https://ro.samber.dev/) - Go 向けのストリームとリアクティブプログラミングのためのライブラリです
    - [ReactiveX](https://reactivex.io/) - 観測可能なストリームを用いた非同期プログラミングのための API です
    - [Elm](https://elm-lang.org/) - 信頼性の高い Web アプリケーションのための心地よい言語です
- [Aspect-oriented Programming](https://en.wikipedia.org/wiki/Aspect-oriented_programming) - 横断的関心事の分離を可能にすることでモジュール性を高めることを目指すプログラミングパラダイムです
  - [Cross-cutting concern](https://en.wikipedia.org/wiki/Cross-cutting_concern) - プログラムのある側面が、そのいずれにもカプセル化されることなく複数のモジュールに影響を与えることです

## スクリプト言語

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > コンピュータサイエンス

:::

### Python

- [Python](https://www.python.org/) - 素早く作業を行いシステムをより効果的に統合できるようにするプログラミング言語です
  - コア機能
    - [Python import system](https://docs.python.org/3/reference/import.html) - Python コードをモジュールやパッケージに整理し、コードの再利用と大規模アプリケーションの構造化を容易にする仕組みです
    - [Special method names](https://docs.python.org/3/reference/datamodel.html#specialnames) - 先頭と末尾に二重アンダースコアが付くことで識別される、特殊な構文によって呼び出される操作をクラスが実装できるようにするメソッドです
    - [Type Hints](https://peps.python.org/pep-0484/) - 変数、関数パラメータ、戻り値の型注釈のための標準的な構文であり、静的解析に使用されます
      - [typing module](https://docs.python.org/3/library/typing.html) - 型ヒントに対する実行時サポートを提供する標準ライブラリモジュールです
      - [Mypy](https://mypy-lang.org/) - 動的型付けと静的型付けの利点を組み合わせることを目指す、Python 用のオプションの静的型チェッカーです
    - [f-string](https://peps.python.org/pep-0498/) - 'f' または 'F' を接頭辞に持つ文字列リテラルの一種で、最小限の構文で文字列定数の中に式を埋め込むことができます
    - [with statement](https://peps.python.org/pep-0343/) - リソース管理のための try/finally 文の標準的な使用をカプセル化することで、例外処理を簡略化する文です
      - [contextlib](https://docs.python.org/3/library/contextlib.html) - with 文を伴う一般的なタスクのためのユーティリティを提供するモジュールです
    - [Generators](https://peps.python.org/pep-0255/) - yield 文を持つ関数を用いて定義される、イテレータを作成するためのシンプルで強力な方法です
    - [Decorators](https://peps.python.org/pep-0318/) - 関数やメソッドを変換するための '@' 記号を用いた構文で、多くの場合それらを非侵襲的に変更・強化するために使用されます
    - [Coroutine](https://peps.python.org/pep-0492/) - `async def` で定義される特殊なジェネレータ関数であり、実行を中断・再開でき協調的マルチタスクを可能にします
    - [Lambda](https://peps.python.org/pep-0312/) - `lambda` キーワードを用いて定義される、単一の式に限定された小さな無名関数です
    - [Data Classes](https://peps.python.org/pep-0557/) - 主にデータを保存するために使用されるクラスを簡潔に作成する方法を提供する、モジュールおよびデコレータであり、特殊メソッドを自動的に生成します
    - [Pattern Matching](https://docs.python.org/3/reference/compound_stmts.html#match) - シーケンス、マッピング、オブジェクト構造を含む複雑なパターンに対する値のマッチングを可能にする、switch 文に類似した機能を提供する機能です
    - [Unpacking Operator](https://peps.python.org/pep-0448/) - `*` によるイテラブルのアンパック演算子と `**` による辞書のアンパック演算子の拡張された使用法であり、より多くの位置で、任意の回数、かつ追加の状況においてアンパックを可能にします
  - 主要ライブラリ
    - [pathlib](https://docs.python.org/3/library/pathlib.html) - 異なるオペレーティングシステムに適したセマンティクスを持つファイルシステムパスを表現するクラスを提供するモジュールです
    - [dotenv](https://github.com/theskumar/python-dotenv) - .env ファイルからキーと値のペアを読み込み、それらを環境変数として設定できるライブラリです
    - [Pydantic](https://docs.pydantic.dev/) - Python のためのデータ検証・設定管理ライブラリです
    - [Tenacity](https://github.com/jd/tenacity) - Python 向けの汎用リトライライブラリです
  - 開発ツール
    - [IPython](https://ipython.org/) - 履歴機能、タブ補完、特殊なマジックコマンドを備えた、Python に対するリッチな対話型インターフェースです

### JavaScript と TypeScript

- [JavaScript/ECMAScript](https://www.ecma-international.org/publications/standards/Ecma-262.htm) - ECMAScript 言語を定義する標準規格です
  - モジュールシステム
    - [CommonJS](http://commonjs.org/) - ブラウザ外での JavaScript のためのエコシステムを規定することを目標とするプロジェクトです
    - [ES modules](https://nodejs.org/api/esm.html) - 再利用のために JavaScript コードをパッケージ化する公式の標準形式です
    - [UMD](https://github.com/umdjs/umd/) - ブラウザ、および AMD や CommonJS ベースのシステムで使用するための、Universal Module Definition のパターン群です
  - コア機能
    - [Event-driven](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events) - ユーザーの操作、センサーの出力、他のプログラムからのメッセージといったイベントによってプログラムの流れが決定されるプログラミングパラダイムです
    - [Spread and rest operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) - 配列式や文字列などのイテラブルを、0 個以上の引数や要素が期待される場所で展開できるようにする構文です
    - [Generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator) - ジェネレータ関数によって返されるオブジェクトで、イテラブルプロトコルとイテレータプロトコルの両方に準拠します
  - 主要ライブラリ
    - [Lodash](https://lodash.com/) - モジュール性、パフォーマンス、追加機能を提供するモダンな JavaScript ユーティリティライブラリです
    - [dax](https://github.com/dsherret/dax) - zx に触発された、Deno と Node.js のためのクロスプラットフォームシェルツールです
    - [Bun Shell](https://bun.sh/docs/runtime/shell) - シェルスクリプトを実行するための組み込みのシェルライクなインターフェースです
    - [zx](https://google.github.io/zx/) - より良いスクリプトを書くためのツールです
    - [Zod](https://zod.dev/) - 静的型推論を備えた TypeScript ファーストのスキーマ検証ライブラリです
    - [yup](https://github.com/jquense/yup) - 実行時の値の解析と検証のためのスキーマビルダーです
  - [Typescript](https://www.typescriptlang.org/index.html) - JavaScript を基盤として構築される強く型付けされたプログラミング言語で、あらゆる規模でより優れたツールを提供します
    - [Union Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types) - 複数の型を 1 つに組み合わせる方法です
    - [Type Aliases](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases) - 任意の型に対する名前です
    - [Type Assertions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions) - コンパイラに「信じてほしい、自分が何をしているか分かっている」と伝える方法です
    - [Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html) - PropertyKeys の共用体を使用して別の型のキーを反復処理し、新しい型を作成する汎用型です
    - [Nominal typing techniques](https://michalzalecki.com/nominal-typing-in-typescript/) - デフォルトでは構造的型システムを持つ TypeScript において、公称型をシミュレートする方法です
    - [Declaration Files](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html) - ライブラリの型を定義するファイルです
    - [Decorators](https://www.typescriptlang.org/docs/handbook/decorators.html) - クラス宣言、メソッド、アクセサ、プロパティ、パラメータに付与できる特殊な種類の宣言です
  - TS 型ユーティリティ
    - [json-schema-to-typescript](https://github.com/bcherny/json-schema-to-typescript) - JSONSchema を TypeScript の型宣言にコンパイルするツールです
    - [Json Schema to TS](https://github.com/thomasaribart/json-schema-to-ts) - FromSchema メソッドにより JSON スキーマから TS の型を直接推論できます
- チュートリアルと実践
  - [33 JS Concepts](https://github.com/leonardomso/33-js-concepts) - すべての JavaScript 開発者が知っておくべき 33 の概念に関する記事をまとめたリポジトリです
  - [JS Project Guidelines](https://github.com/elsewhencode/project-guidelines) - JavaScript プロジェクトのためのベストプラクティス集です
  - [Callback Hell](http://callbackhell.com/) - 非同期処理を扱う際にコールバック関数がネストしていくことです
  - [NodeSchool](https://nodeschool.io/) - Web ソフトウェアのスキルを教える一連のオープンソースワークショップです
  - [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices) - Node.js のベストプラクティスに関する上位ランクのコンテンツをまとめたものです

### Ruby、Perl とその他

- [Ruby](https://www.ruby-lang.org/en/) - シンプルさと生産性に重点を置いた動的なオープンソースプログラミング言語です
  - コア機能
    - [Percent notation](https://docs.ruby-lang.org/en/master/syntax/literals_rdoc.html) - パーセント記号と区切り文字を使用して、文字列、配列、正規表現などの様々なリテラル型を生成するための簡潔な構文です
    - [Fiber](https://docs.ruby-lang.org/en/master/Fiber.html) - 実行の一時停止と再開によって協調的マルチタスクを可能にする、軽量な並行処理プリミティブです
    - [proc](https://docs.ruby-lang.org/en/master/Kernel.html#method-i-proc) - コードのブロックを、保存、渡し、実行できるオブジェクトにカプセル化する仕組みです
    - [lambda](https://docs.ruby-lang.org/en/master/Kernel.html#method-i-lambda) - 厳密な引数チェックとローカライズされた return の振る舞いを強制する、特殊なブロックオブジェクトです
    - [then](https://docs.ruby-lang.org/en/master/Kernel.html#method-i-then) - オブジェクト自身をブロックに渡してその結果を返すメソッドで、関数型スタイルのメソッドチェーンを容易にします
    - [define_method](https://docs.ruby-lang.org/en/master/Module.html#method-i-define_method) - `define_method` を使用して実行時にメソッドを作成・登録する機能で、コードの柔軟性を高め重複を減らします
    - [instance_eval](https://docs.ruby-lang.org/en/master/BasicObject.html#method-i-instance_eval) - 特定のオブジェクトインスタンスのコンテキスト内でブロックや文字列を評価し、その内部スコープとプライベートメソッドへのアクセスを可能にするメソッドです
  - ライブラリ
    - [io-event](https://socketry.github.io/io-event/) - イベントループを構築するための低レベルなクロスプラットフォームプリミティブです
    - [Async](https://socketry.github.io/async/) - io-event に基づく、Ruby 用の組み合わせ可能な非同期 I/O フレームワークです
    - [ruby-git](https://github.com/ruby-git/ruby-git) - git バイナリへのシステムコールをラップすることで Git リポジトリを作成、読み取り、操作できる Ruby ライブラリです
  - 開発ツール
    - [IRB (Interactive Ruby)](https://ruby.github.io/irb/) - 標準入力から読み込んだ Ruby の式を対話的に実行するツールです
- [Perl](https://www.perl.org/) - 2 つの高水準で汎用的、インタプリタ型かつ動的なプログラミング言語のファミリーです
  - コア機能
    - [Special variables](https://metacpan.org/dist/perl/view/pod/perlvar.pod) - Perl にとって特別な意味を持つ変数です
    - [Built-in regex](https://metacpan.org/dist/perl/view/pod/perlre.pod) - Perl における正規表現の構文です
    - [Context](https://perldoc.perl.org/perldata#Context) - 式が評価される際にどのように振る舞うかを決定する式の性質です
    - [Scalar values](https://perldoc.perl.org/perldata#Scalar-values) - 単一のデータ項目です
      - [Reference](https://perldoc.perl.org/perlreftut#Making-References) - 他のデータを「指し示す」スカラーデータ型です
    - [Quote-like operators](https://metacpan.org/dist/perl/view/pod/perlop.pod#Simpler-Quote-Like-Operators) - 一連の汎用的な引用演算子です
    - [I/O operators](https://metacpan.org/dist/perl/view/pod/perlop.pod#I%2FO-Operators) - ファイルハンドルからの読み取りなど、入出力操作に使用される演算子です
- [Tcl](https://www.tcl-lang.org/) - 幅広い用途に使用される動的プログラミング言語とグラフィカルユーザーインターフェースツールキットです
  - [Event-driven by design](https://wiki.tcl-lang.org/page/event+loop) - GUI とネットワーキングに最適な組み込みのイベントループです
- [Lua](https://www.lua.org/) - 強力で効率的、軽量かつ組み込み可能なスクリプト言語です
- [Emacs Lisp](https://www.gnu.org/software/emacs/manual/html_node/elisp/) - Emacs テキストエディタを拡張・カスタマイズするために使用されるプログラミング言語です
  - [S-expression](https://en.wikipedia.org/wiki/S-expression) - 入れ子になったリスト (木構造) データのための記法です
  - [Homoiconicity](https://en.wikipedia.org/wiki/Homoiconicity) - 一部のプログラミング言語が持つ性質で、プログラムの主要な表現がその言語自体のプリミティブな型のデータ構造でもあるというものです

## 非同期処理と並行性

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > コンピュータサイエンス

:::

- [Concurrent computing](https://en.wikipedia.org/wiki/Concurrent_computing) - 複数の計算を逐次的にではなく並行して実行する計算の形態です
  - [Coroutine](https://en.wikipedia.org/wiki/Coroutine) - 実行を中断・再開できるようにすることで、非プリエンプティブなマルチタスクのためにサブルーチンを一般化したコンピュータプログラムの構成要素です
  - [Async/await](https://en.wikipedia.org/wiki/Async/await) - 非同期でノンブロッキングな関数を、通常の同期的な関数と似た方法で構造化できるようにする構文的機能です
  - [Futures and promises](https://en.wikipedia.org/wiki/Futures_and_promises) - プログラムの実行を同期させるために使用される構造体であり、最初は未知である結果のプロキシを表現します
  - [Semaphore](https://en.wikipedia.org/wiki/Semaphore_(programming)) - 並行システムにおいて複数のスレッドによる共通リソースへのアクセスを制御するために使用される変数または抽象データ型です
  - [Mutex](https://en.wikipedia.org/wiki/Lock_(computer_science)) - 複数の実行スレッドによって状態が同時に変更またはアクセスされることを防ぐ、同期プリミティブです
  - [Channel](https://en.wikipedia.org/wiki/Channel_(programming)) - メッセージパッシングによるプロセス間通信と同期のためのモデルです
  - [Thread safety](https://en.wikipedia.org/wiki/Thread_safety) - マルチスレッド環境に適用可能なコンピュータコードの性質で、共有データ構造の正しい操作を保証するものです
  - [Deadlock](https://en.wikipedia.org/wiki/Deadlock) - あるグループのエンティティの各メンバーが、他のメンバーが行動を起こすのを待っているために誰も先に進めなくなる、並行計算における状況です

## 言語解析

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > コンピュータサイエンス

:::

- 概念
  - [Formal language](https://en.wikipedia.org/wiki/Formal_language) - 単語、すなわち文字、記号、トークンの有限列の集合です
    - [Well-formed formula](https://en.wikipedia.org/wiki/Well-formed_formula) - 形式言語の一部である、与えられたアルファベットからの記号の有限列です
  - [Formal grammar](https://en.wikipedia.org/wiki/Formal_grammar) - 形式言語における文字列の生成規則の集合です
  - [Chomsky hierarchy](https://en.wikipedia.org/wiki/Chomsky_hierarchy) - 形式文法のクラスの包含階層です
  - [Rewriting](https://en.wikipedia.org/wiki/Rewriting) - 式の部分項を他の項で置き換える手法の幅広い範囲です
    - [Confluence](https://en.wikipedia.org/wiki/Confluence_(abstract_rewriting)) - 書き換えシステムの性質であり、そのシステム内のどの項が複数の方法で書き換えられて同じ結果に至るかを記述するものです
  - [Automata theory](https://en.wikipedia.org/wiki/Automata_theory) - 抽象機械とオートマトン、およびそれらを用いて解決できる計算上の問題を研究する分野です
    - [Finite-state machine](https://en.wikipedia.org/wiki/Finite-state_machine) - ある時点で有限個の状態のうちのちょうど 1 つを取り得て、何らかの入力に応じてある状態から別の状態へ遷移する、計算の数学的モデルです
  - [Lexical analysis](https://en.wikipedia.org/wiki/Lexical_analysis) - テキストを、レキサープログラムによって定義されたカテゴリに属する意味のある字句トークンに変換することです
  - [Parsing](https://en.wikipedia.org/wiki/Parsing) - 形式文法の規則に従う記号列を部分に分解して解析する処理です
  - [BNF syntax](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form) - 文脈自由文法のための記法技法であり、計算機で使用される言語の構文を記述するためによく使用されます
  - [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree) - プログラミング言語で書かれたソースコードの抽象的な構文構造を木で表現したものです
- パーサージェネレーター
  - [ANTLR](https://www.antlr.org/) - 構造化されたテキストやバイナリファイルの読み取り、処理、実行、変換のための強力なパーサジェネレータです
  - [Bison](https://www.gnu.org/software/bison/) - 文脈自由文法の文法記述を、その文法を解析する C プログラムに変換する汎用パーサジェネレータです
- レキサージェネレーター
  - [Flex](https://github.com/westes/flex) - 高速なレキシカルアナライザ (スキャナジェネレータ) です
  - [Ragel](https://www.colm.net/open-source/ragel/) - 状態機械コンパイラです
- パーサー/ライブラリ
  - [tree-sitter](https://github.com/tree-sitter/tree-sitter) - パーサジェネレータツールおよびインクリメンタルパーシングライブラリです
  - [ts-morph](https://ts-morph.com/) - TypeScript Compiler API のラッパーです

## プログラム翻訳

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > コンピュータサイエンス

:::

- 概念
  - [Compiler](https://en.wikipedia.org/wiki/Compiler) - あるプログラミング言語で書かれたコンピュータコードを別の言語に翻訳するコンピュータプログラムです
  - [Transpiler](https://en.wikipedia.org/wiki/Source-to-source_compiler) - あるプログラミング言語で書かれたプログラムのソースコードを入力として受け取り、同じまたは別のプログラミング言語で等価なソースコードを生成する翻訳器の一種です
    - [Intermediate representation](https://en.wikipedia.org/wiki/Intermediate_representation) - コンパイラや仮想マシンがソースコードを表現するために内部的に使用するデータ構造またはコードです
  - [Program optimization](https://en.wikipedia.org/wiki/Program_optimization) - ソフトウェアシステムのある側面をより効率的に動作させたり、使用するリソースを削減したりするために変更する過程です
  - [Machine code](https://en.wikipedia.org/wiki/Machine_code) - コンピュータの中央処理装置 (CPU) が直接実行できる機械語命令で書かれたコンピュータプログラムです
  - [Cross compiler](https://en.wikipedia.org/wiki/Cross_compiler) - コンパイラが動作しているプラットフォーム以外のプラットフォーム向けに実行可能コードを生成できるコンパイラです
  - [Linker](https://en.wikipedia.org/wiki/Linker_(computing)) - 1 つ以上のオブジェクトファイルを受け取り、単一の実行可能ファイルに結合するコンピュータシステムプログラムです

### 主要なコンパイラ基盤

- [LLVM Compiler Infrastructure](https://llvm.org/) - モジュール化され再利用可能なコンパイラおよびツールチェーン技術の集合です
  - [Clang](https://clang.llvm.org/) - LLVM のための C 言語ファミリーフロントエンドです
  - [LLD](https://lld.llvm.org/) - LLVM のリンカです
- [gcc](https://www.gnu.org/software/gcc/) - C、C++、Objective-C、Fortran、Ada、Go、D のフロントエンドを含む GNU Compiler Collection です
- [rustc](https://doc.rust-lang.org/rustc/what-is-rustc.html) - Rust プログラミング言語のコンパイラです

### 個別の翻訳系とビルドツール

- [MinGW-w64](https://www.mingw-w64.org/) - Windows システム上で GCC コンパイラをサポートするために作られた、元の mingw.org プロジェクトの発展形です
- [Go build command](https://pkg.go.dev/cmd/go) - Go のソースコードを管理するためのツールです
  - 静的バイナリ実行ファイル
- [GopherJS](https://github.com/gopherjs/gopherjs) - Go から JavaScript へのコンパイラです
- [Bunster](https://bunster.netlify.app/) - シェルスクリプトを自己完結型の実行可能プログラムに変換するシェルコンパイラです

### リンカ (スタンドアロン)

- [mold](https://github.com/rui314/mold/) - モダンなリンカです
- ランタイムライブラリ
  - [glibc](https://sourceware.org/glibc/) - GNU システムおよび GNU/Linux システムのコアライブラリを提供する GNU C Library プロジェクトです
  - [musl libc](https://musl.libc.org/) - Linux カーネルをベースとしたオペレーティングシステム向けの C 標準ライブラリです

## プログラム実行

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > コンピュータサイエンス

:::

- 概念
  - [Runtime System](https://en.wikipedia.org/wiki/Runtime_system) - プログラムが書かれた言語のために、コンピュータ上で実行されるプログラムの部分です
  - [Bytecode](https://en.wikipedia.org/wiki/Bytecode) - ソフトウェアインタプリタによる効率的な実行のために設計された命令セットの一形態です
  - [Just-in-time compilation](https://en.wikipedia.org/wiki/Just-in-time_compilation) - プログラムの実行中にコンパイルを行うことを伴う、コンピュータコードの実行方式です
  - [Global interpreter lock](https://en.wikipedia.org/wiki/Global_interpreter_lock) - Python オブジェクトへのアクセスを保護し、複数のスレッドが同時に Python バイトコードを実行するのを防ぐミューテックスです

### ランタイム実装

- Javascript
  - [Node.js](https://nodejs.org/) - 無料でオープンソースのクロスプラットフォーム JavaScript ランタイム環境です
    - [libuv](https://libuv.org/) - 非同期 I/O に重点を置いたマルチプラットフォーム対応サポートライブラリです
  - [Deno](https://deno.com/) - TypeScript と JavaScript のためのモダンなランタイムです
    - [Deno Deploy](https://deno.com/deploy) - JavaScript、TypeScript、WebAssembly をエッジで実行できる分散型 HTTP サービスです
    - [Deno Subhosting](https://deno.com/subhosting) - SaaS プロバイダが V8 アイソレートを使用して信頼できない顧客のコードを大規模に安全に実行するためのプラットフォームです
  - [Bun](https://bun.sh/) - JavaScript と TypeScript の実行、ビルド、テスト、デバッグのための高速なオールインワンツールキットです
  - [WinterJS](https://github.com/wasmerio/winterjs) - SpiderMonkey エンジンと Tokio ランタイムを使用して Rust 上に構築された、非常に高速な JavaScript ランタイムです
- Python
  - CPython (default)
  - [pypy](https://www.pypy.org/) - Python の高速で準拠したオルタナティブ実装です
  - [Pyodide](https://pyodide.org/en/stable/) - WebAssembly をベースとした、ブラウザと Node.js のための Python ディストリビューションです
- Ruby
  - CRuby (default)
  - [JRuby](https://www.jruby.org/) - Java Virtual Machine 上で動作する Ruby プログラミング言語の実装です
- [Java SE](https://www.oracle.com/java/technologies/java-se-glance.html) - 現代的なアプリケーション開発のための、最も実績があり信頼性が高く安全な開発プラットフォームです
  - [Java HotSpot VM](https://docs.oracle.com/en/java/javase/22/vm/java-virtual-machine-technology-overview.html) - Oracle Corporation が提供する、デスクトップとサーバー向けの主要な Java Virtual Machine です
  - [JMX API](https://docs.oracle.com/en/java/javase/22/jmx/introduction-jmx-technology.html) - Java Platform の標準的な一部である Java Management Extensions 技術です
  - [JDK tools](https://docs.oracle.com/en/java/javase/22/docs/specs/man/index.html) - アプリケーションを作成しビルドするためのコマンドラインツールです
  - [GraalVM](https://oracle.com/java/graalvm/) - アヘッドオブタイムの Native Image コンパイルを備えた先進的な JDK です
  - [OpenJDK](https://openjdk.org/) - Java Platform, Standard Edition のオープンソース実装を共同開発するための場です
  - [Eclipse Temurin](https://adoptium.net/temurin/) - OpenJDK のオープンソースでエンタープライズ対応かつ TCK 認定済みのビルドです
- [.NET](https://dotnet.microsoft.com/en-us/) - モダンなアプリと強力なクラウドサービスを構築するための、無料でオープンソースのクロスプラットフォームフレームワークです
  - [CLR](https://learn.microsoft.com/en-us/dotnet/standard/clr) - .NET Framework の仮想マシンコンポーネントです

- ランタイムユーティリティ
  - [PM2](https://pm2.keymetrics.io/) - アプリケーションをオンラインに保つ管理を助けるデーモンプロセスマネージャです
  - [PyCall](https://github.com/mrkn/pycall.rb) - Ruby から Python の関数を呼び出せるようにする Ruby ライブラリです
  - [VisualVM](https://visualvm.github.io/) - オールインワンの Java トラブルシューティングツールです

## アルゴリズムと計算複雑性

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > コンピュータサイエンス

:::

- 概念
  - [Complexity class](https://en.wikipedia.org/wiki/Complexity_class) - 関連するリソースベースの複雑性を持つ計算問題の集合です

- 参考リソース
  - [NIST Dictionary of Algorithms and Data Structures](https://xlinux.nist.gov/dads/) - アルゴリズム、アルゴリズム的技法、データ構造、典型的な問題、関連する定義の辞書です

### アルゴリズム

- [Algorithm](https://en.wikipedia.org/wiki/Algorithm) - 特定の種類の問題を解決したり計算を実行したりするために通常使用される、厳密な命令の有限列です
  - 解析技法
    - [Amortized analysis](https://en.wikipedia.org/wiki/Amortized_analysis) - 与えられたアルゴリズムの複雑性を分析するための手法です
    - [Big O notation](https://en.wikipedia.org/wiki/Big_O_notation) - 引数が特定の値または無限大に近づくときの関数の極限的な振る舞いを記述する数学的記法です
  - アルゴリズムパラダイム
    - [Recursion](https://en.wikipedia.org/wiki/Recursion_(computer_science)) - 解が同じ問題のより小さなインスタンスの解に依存する、計算問題を解決する方法です
    - [Divide and conquer](https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm) - アルゴリズム設計パラダイムです
    - [Dynamic programming](https://en.wikipedia.org/wiki/Dynamic_programming) - 複雑な問題をより単純な部分問題の集合に分解することで解決する方法です
    - [Backtracking](https://en.wikipedia.org/wiki/Backtracking) - いくつかの計算問題に対する解を見つけるための一群のアルゴリズムです
    - [Greedy algorithm](https://en.wikipedia.org/wiki/Greedy_algorithm) - 各段階で局所的に最適な選択を行うという問題解決のヒューリスティックに従うアルゴリズムパラダイムです
  - ソートアルゴリズム
    - [Quicksort](https://en.wikipedia.org/wiki/Quicksort) - インプレースソートアルゴリズムです
    - [Merge sort](https://en.wikipedia.org/wiki/Merge_sort) - 効率的で汎用的な、比較に基づくソートアルゴリズムです
    - [Heapsort](https://en.wikipedia.org/wiki/Heapsort) - 比較に基づくソートアルゴリズムです
  - 探索アルゴリズム
    - [Binary search](https://en.wikipedia.org/wiki/Binary_search) - ソート済み配列内で目的の値の位置を見つける探索アルゴリズムです
    - [Interpolation search](https://en.wikipedia.org/wiki/Interpolation_search) - キーに割り当てられた数値によって順序付けられたソート済み配列内でキーを探索するアルゴリズムです
  - 文字列アルゴリズム
    - [Knuth–Morris–Pratt algorithm](https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm) - メインのテキスト文字列 T の中に「単語」W が出現する箇所を探索する文字列検索アルゴリズムです
    - [Boyer–Moore algorithm](https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_string-search_algorithm) - 実用的な文字列検索の文献における標準的なベンチマークとなっている文字列検索アルゴリズムです
    - [Longest common subsequence](https://en.wikipedia.org/wiki/Longest_common_subsequence) - ある列の集合内のすべての列に共通する最長の部分列を見つける問題です
  - グラフアルゴリズム
    - 走査
      - [Breadth-first search](https://en.wikipedia.org/wiki/Breadth-first_search) - 木構造やグラフ構造のデータを走査または探索するアルゴリズムです
      - [Depth-first search](https://en.wikipedia.org/wiki/Depth-first_search) - 木構造やグラフ構造のデータを走査または探索するアルゴリズムです
    - 最短経路
      - [Dijkstra's algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm) - 重み付きグラフ内のノード間の最短経路を見つけるアルゴリズムです
      - [Bellman–Ford algorithm](https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm) - 重み付き有向グラフにおいて単一の始点から他のすべての頂点への最短経路を計算するアルゴリズムです
    - [Minimum Spanning Tree](https://en.wikipedia.org/wiki/Minimum_spanning_tree) - 連結で辺に重みが付いた無向グラフのすべての頂点を接続する辺の部分集合です
      - [Prim's algorithm](https://en.wikipedia.org/wiki/Prim's_algorithm) - 重み付き無向グラフに対する最小全域木を見つける貪欲アルゴリズムです
      - [Kruskal's algorithm](https://en.wikipedia.org/wiki/Kruskal's_algorithm) - 森の中の任意の 2 つの木を接続する、可能な限り重みの小さい辺を見つける最小全域木アルゴリズムです
    - その他
      - [Tarjan's strongly connected components algorithm](https://en.wikipedia.org/wiki/Tarjan%27s_strongly_connected_components_algorithm) - 有向グラフの強連結成分 (SCC) を見つけるためのグラフ理論のアルゴリズムです
      - [Topological sorting](https://en.wikipedia.org/wiki/Topological_sorting) - 有向非巡回グラフ (DAG) の頂点の線形順序付けです
  - ハッシュアルゴリズム
    - [Hash function](https://en.wikipedia.org/wiki/Hash_function) - 任意サイズのデータを固定サイズの値に写像するために使用できる任意の関数です

### データ構造

- [Abstract Data Types](https://en.wikipedia.org/wiki/Abstract_data_type) - データ型のための数学的モデルです
  - [String](https://en.wikipedia.org/wiki/String_(computer_science)) - アルファベットと呼ばれる集合から選ばれた記号の有限列です
  - [List](https://en.wikipedia.org/wiki/List_(abstract_data_type)) - 有限個の順序付けられた値を表現する抽象データ型です
  - [Associative array](https://en.wikipedia.org/wiki/Associative_array) - (キー, 値) のペアの集まりを保持できる抽象データ型です
  - [Stack](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)) - push と pop という 2 つの主要な操作を持つ要素の集合として機能する抽象データ型です
  - [Queue](https://en.wikipedia.org/wiki/Queue_(abstract_data_type)) - enqueue と dequeue という 2 つの主要な操作を持つ要素の集合として機能する抽象データ型です
    - [Priority queue](https://en.wikipedia.org/wiki/Priority_queue) - 通常のキューやスタックのデータ構造に似ていますが、さらに各要素に「優先度」が関連付けられている抽象データ型です
  - [Tree](https://en.wikipedia.org/wiki/Tree_(abstract_data_type)) - 接続されたノードの集合を持つ階層的な木構造を表現する抽象データ型です
  - [Graph](https://en.wikipedia.org/wiki/Graph_(abstract_data_type)) - 数学における無向グラフと有向グラフの概念を実装することを意図した抽象データ型です
    - [Directed acyclic graph (DAG)](https://en.wikipedia.org/wiki/Directed_acyclic_graph) - 有向閉路を持たない有向グラフです
- [Data Structures](https://en.wikipedia.org/wiki/Data_structure) - 効率的なアクセスと変更を可能にするよう設計された、データの編成・管理・保存形式です
  - [Passive data structure](https://en.wikipedia.org/wiki/Passive_data_structure) - 公開データフィールドのみを含み、フィールドの読み書き以外のメソッドを暗黙的にしか提供しないレコードデータ構造です
  - [Array](https://en.wikipedia.org/wiki/Array_(data_type)) - 要素 (値または変数) の集まりからなるデータ構造です
    - [Array slicing](https://en.wikipedia.org/wiki/Array_slicing) - 配列から要素の部分集合を抽出し、それを別の配列としてパッケージ化する操作です
    - [Sparse matrix](https://en.wikipedia.org/wiki/Sparse_matrix) - ほとんどの要素がゼロである行列であり、メモリと処理時間を節約するための専用の記憶方式とアルゴリズムを可能にします
  - [Hash table](https://en.wikipedia.org/wiki/Hash_table) - 連想配列という抽象データ型を実装するデータ構造です
    - 衝突解決
      - [Cuckoo hashing](https://en.wikipedia.org/wiki/Cuckoo_hashing) - ハッシュテーブル内のキーのハッシュ衝突を解決するためのコンピュータプログラミングの手法です
      - [Linear probing](https://en.wikipedia.org/wiki/Linear_probing) - ハッシュテーブルにおける衝突を解決するためのコンピュータプログラミングの手法です
  - [Linked data structure](https://en.wikipedia.org/wiki/Linked_data_structure) - 一連のデータレコード (ノード) が参照によって連結され組織化されたデータ構造です
  - [Persistent structure](https://en.wikipedia.org/wiki/Persistent_data_structure) - 変更されても常に以前のバージョンの自身を保持するデータ構造です
  - [Disjoint-set data structure](https://en.wikipedia.org/wiki/Disjoint-set_data_structure) - 互いに素な (重複しない) 集合の集まりを格納するデータ構造です
  - ツリーベース
    - [Search tree](https://en.wikipedia.org/wiki/Search_tree) - ある集合の中から特定のキーを探索するために使用される木構造のデータ構造です
      - [Binary search tree (BST)](https://en.wikipedia.org/wiki/Binary_search_tree) - 各内部ノードのキーが、そのノードの左部分木のすべてのキーより大きく、右部分木のキーより小さい、根付き二分木のデータ構造です
    - [Merkle tree](https://en.wikipedia.org/wiki/Merkle_tree) - すべての葉ノードがデータブロックの暗号学的ハッシュでラベル付けされる木です
    - [Heap](https://en.wikipedia.org/wiki/Heap_(data_structure)) - ヒープ性質を満たす木構造のデータ構造です
    - [Trie](https://en.wikipedia.org/wiki/Trie) - ある集合の中から特定のキーを探索するために使用される探索木のデータ構造です
    - [Fenwick tree](https://en.wikipedia.org/wiki/Fenwick_tree) - 数値の表において要素の更新と接頭辞和の計算を効率的に行えるデータ構造です
  - グラフベース
    - [Adjacency matrix](https://en.wikipedia.org/wiki/Adjacency_matrix) - 有限グラフを表現するために使用される正方行列です
    - [Adjacency list](https://en.wikipedia.org/wiki/Adjacency_list) - 有限グラフを表現するために使用される順序なしリストの集まりです
