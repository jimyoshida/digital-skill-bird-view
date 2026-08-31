# 05 - データサイエンス & エンジニアリング

## 基礎概念

:::note[Relevant DSS-P Skills]

- 2\. データ整備・活用 > 2\.1 データ・AIの戦略的活用 > データ・AI理解・活用

:::

### 一般的なデータ概念 & 原則

- [Data](https://en.wikipedia.org/wiki/Data_(computer_science)) - 1 つ以上の記号からなる任意のシーケンスであり、datum は単一のデータ記号です
- [Metadata](https://en.wikipedia.org/wiki/Metadata) - 他のデータに関する情報を提供するデータであり、データそのものの内容ではありません
- [Big data](https://en.wikipedia.org/wiki/Big_data) - 従来のデータ処理アプリケーションソフトウェアでは扱いきれないほど巨大または複雑なデータセットです
- [Unstructured data](https://en.wikipedia.org/wiki/Unstructured_data) - 事前定義されたデータモデルを持たない、または事前定義された方法で編成されていない情報です
- [Data model](https://en.wikipedia.org/wiki/Data_model) - データの要素を編成し、それらの相互関係や実世界のエンティティのプロパティとの関係を標準化する抽象モデルです
  - [Entity–relationship model](https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model) - 特定の知識領域における関心対象の相互関連するものについての抽象的な記述です
- [Data orientation](https://en.wikipedia.org/wiki/Data_orientation) - データを使用するアプリケーションではなく、データそのものを重視するデータの捉え方です
- [DIKW pyramid](https://en.wikipedia.org/wiki/DIKW_pyramid) - データ、情報、知識、知恵の間に存在するとされる構造的・機能的関係を表すモデル群です
- [Garbage in, garbage out](https://en.wikipedia.org/wiki/Garbage_in,_garbage_out) - 出力の品質は入力の品質によって決まるという、コンピュータサイエンスと情報通信技術における概念です
- [Data cleansing](https://en.wikipedia.org/wiki/Data_cleansing) - レコードセット、テーブル、またはデータベースから破損または不正確なレコードを検出して修正 (または削除) するプロセスです
- [Data lifecycle management](https://en.wikipedia.org/wiki/Data_lifecycle_management) - 情報システムのデータのライフサイクル全体にわたる流れを管理するポリシーベースのアプローチです
- [Master data](https://en.wikipedia.org/wiki/Master_data) - ビジネストランザクションに文脈を与えるビジネスエンティティに関するデータです
- [Master data management](https://en.wikipedia.org/wiki/Master_data_management) - ビジネスと IT が協力し、企業の公式な共有マスターデータ資産の均一性、正確性、管理体制、意味的一貫性、説明責任を確保する、テクノロジーに支えられた規律です
- [Data quality](https://en.wikipedia.org/wiki/Data_quality) - 正確性、完全性、一貫性、信頼性、最新性などの要因に基づいてデータの状態を測る指標です
- [Single source of truth](https://en.wikipedia.org/wiki/Single_source_of_truth) - すべてのデータ要素が 1 か所でのみ管理 (または編集) されるように情報モデルと関連データスキーマを構築する実践です

### コアデータエンジニアリング & データベース概念

- [Concurrency control](https://en.wikipedia.org/wiki/Concurrency_control) - 並行操作に対して正しい結果が効率的に生成されることを保証するメカニズムです
- [CRUD operations](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) - 永続ストレージにおける 4 つの基本操作、すなわち作成・読み取り・更新・削除です
- [Shard](https://en.wikipedia.org/wiki/Shard_(database_architecture)) - データベースまたは検索エンジンにおけるデータの水平分割です
- [ETL](https://en.wikipedia.org/wiki/Extract,_transform,_load) - 入力元からデータを抽出し、変換し、出力先のデータコンテナに読み込む 3 段階のプロセスです
- [ELT](https://www.ibm.com/think/topics/elt) - 生データをソースシステムからデータウェアハウスなどの宛先リソースに移動し、その後利用のために変換するデータ統合プロセスです
- [Data pipeline](https://en.wikipedia.org/wiki/Pipeline_(computing)) - 直列に接続された一連のデータ処理要素であり、ある要素の出力が次の要素の入力となるものです
- [Data governance](https://en.wikipedia.org/wiki/Data_governance) - データのライフサイクル全体を通じて高いデータ品質を確保できるようにする組織の能力に関するデータ管理の概念です
- [Data lineage](https://en.wikipedia.org/wiki/Data_lineage) - データソースから消費に至るまでのデータの流れを理解し、記録し、可視化するプロセスです
- [Online transaction processing (OLTP)](https://en.wikipedia.org/wiki/Online_transaction_processing) - 同時に発生する多数のトランザクションを実行することからなるデータ処理の一種です
- [Online analytical processing (OLAP)](https://en.wikipedia.org/wiki/Online_analytical_processing) - コンピューティングにおいて多次元の分析クエリに迅速に答えるためのアプローチです
- [Search engine indexing](https://en.wikipedia.org/wiki/Search_engine_indexing) - 高速かつ正確な情報検索を可能にするためにデータを収集し、解析し、格納することです

### データガバナンス、品質 & アーキテクチャ

- [Data Catalog](https://en.wikipedia.org/wiki/Data_catalog) - 組織がデータ資産を管理・発見するのに役立つ集中型メタデータリポジトリです
- [Data Stewardship](https://en.wikipedia.org/wiki/Data_stewardship) - 品質、セキュリティ、コンプライアンスを確保するために組織のデータ資産を管理する一連のプラクティスとプロセスです
- [Data Privacy](https://en.wikipedia.org/wiki/Information_privacy) - 個人が自分自身に関する情報がどう扱われるかを決定できる権利と能力です
- [Data Security](https://en.wikipedia.org/wiki/Data_security) - デジタル情報をオンラインの脅威から保護するために保全するプロセスです
- [ISO 8000](https://en.wikipedia.org/wiki/ISO_8000) - データ品質とマスターデータに関する国際標準です
- [Data Contract](https://docs.getdbt.com/docs/collaborate/govern/model-contracts) - データの構造、品質、意味論についてデータ生産者と消費者の間で結ばれる明示的な合意です
- [Schema Evolution](https://en.wikipedia.org/wiki/Schema_evolution) - 既存のデータやアプリケーションとの互換性を維持しながらデータベーススキーマを変更するプロセスです
- [Dimensional Modeling](https://en.wikipedia.org/wiki/Dimensional_modeling) - ファクトとディメンションを用いて分析クエリ向けにデータウェアハウスを最適化するデータベース設計手法です

## データサイエンスツールキット

:::note[Relevant DSS-P Skills]

- 2\. データ整備・活用 > 2\.2 AI・データサイエンス > 数理統計・多変量解析・データ可視化

:::

### プログラミング言語 & ライブラリ

- [Python](https://www.python.org/) - 素早く作業でき、システムをより効果的に統合できるプログラミング言語です
  - [Awesome Python](https://awesome-python.com/) - Python のフレームワーク、ライブラリ、ツール、リソースを集めた厳選リストです
  - [Pandas](https://pandas.pydata.org/) - 高速で強力、柔軟かつ使いやすいオープンソースのデータ分析・操作ツールです
  - [Polars](https://pola.rs/) - 構造化データを操作するための非常に高速な DataFrame ライブラリです
  - [Narwhals](https://narwhals-dev.github.io/narwhals/) - Python 向けの遅延評価優先で、型やフレームワークに依存しない dataframe ライブラリです
  - [NumPy](https://numpy.org/) - Python で科学計算を行うための基盤パッケージです
  - [SciPy](https://scipy.org/) - Python における科学計算のための基本的なアルゴリズム群です
  - [SymPy](https://www.sympy.org/en/index.html) - 記号数学のための Python ライブラリです
  - [SageMath](https://www.sagemath.org/) - GPL の下でライセンスされた無料のオープンソース数学ソフトウェアシステムです
  - [statsmodels](https://www.statsmodels.org/stable/index.html) - さまざまな統計モデルの推定、統計検定の実施、統計データ探索のためのクラスと関数を提供する Python モジュールです
- [R](https://www.r-project.org/) - 統計計算とグラフィックスのための無料のソフトウェア環境です
  - [Tidyverse](https://www.tidyverse.org/) - データサイエンス向けに設計された、思想の一貫した R パッケージ群です
- [GNU Octave](https://octave.org/) - 主に数値計算を目的とした高水準言語です
- [Wolfram Language](https://www.wolfram.com/language/) - 強力なプログラムを迅速に開発するために必要な広さと統一性を意図的に備えたシンボリック言語です

### 専門 & 科学ツール

- [latexify](https://github.com/google/latexify_py) - Python のソースコード断片を対応する LaTeX 式にコンパイルする Python パッケージです
- [handcalcs](https://github.com/connorferster/handcalcs) - Python の計算コードを LaTeX で自動的にレンダリングする、鉛筆書きの計算のような書式を模した Python ライブラリです
- [NetworkX](https://networkx.org/) - 複雑なネットワークの構造、ダイナミクス、機能の作成、操作、研究のための Python パッケージです
- [JAX](https://jax.readthedocs.io/en/latest/) - アクセラレータ指向の配列計算とプログラム変換のための Python ライブラリです

### データソース & 地理空間

- [GeoLite2](https://dev.maxmind.com/geoip/geolite2-free-geolocation-data) - ダウンロード可能なデータベース形式や Web サービス形式で提供される、無料のジオロケーションおよび ASN データセットです

### スプレッドシート & コラボレーティブデータプラットフォーム

- [Microsoft Excel](https://www.microsoft.com/en-us/microsoft-365/excel) - 業界をリードするスプレッドシートソフトウェアであり、強力なデータ可視化・分析ツールです
- [Grist](https://www.getgrist.com/) - スプレッドシートの馴染みのあるインターフェースとリレーショナルデータベースの力・構造を組み合わせたリレーショナルスプレッドシートです
- [NocoBase](https://www.nocobase.com/) - 複雑な業務アプリケーションや社内ツールの構築向けに設計された、拡張性を最優先するオープンソースのノーコードプラットフォームです
- [NocoDB](https://nocodb.com/) - あらゆるデータベースをスマートなスプレッドシートに変え、リレーショナルデータベース向けのコラボレーティブなインターフェースを提供するオープンソースのノーコードプラットフォームです
- [Airtable](https://www.airtable.com/) - スプレッドシートの柔軟性とデータベースの力を組み合わせ、チームの業務管理を支援するプラットフォームです

### インタラクティブコンピューティング環境

- [JupyterLab](https://jupyter.org/) - ノートブック、コード、データのための Web ベースのインタラクティブな開発環境です
- [Jupyter Notebook](https://jupyter.org/) - 計算ドキュメントの作成と共有のためのオリジナルの Web アプリケーションです
  - [VSCode Jupyter Extension](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter) - 環境でサポートされる言語カーネル向けに基本的なノートブックサポートを提供する VS Code 拡張機能です
- [nbviewer](https://nbviewer.org/) - Jupyter Notebook を共有するためのシンプルな方法です
- [R Markdown](https://rmarkdown.rstudio.com/) - コード、レンダリングされた出力、文章を組み合わせた動的な分析ドキュメントの作成を支援する執筆フレームワークです
- [Wolfram Notebooks](https://www.wolfram.com/notebooks/) - テキスト、リテラルプログラミング、グラフィックス、カスタムのインタラクティブ要素を組み合わせた、探索とコミュニケーションのための強力な環境です
- [Voila](https://voila.readthedocs.io/en/stable/) - Jupyter Notebook をスタンドアロンの Web アプリケーションに変えるツールです

## データ可視化

:::note[Relevant DSS-P Skills]

- 2\. データ整備・活用 > 2\.2 AI・データサイエンス > 数理統計・多変量解析・データ可視化

:::

### 一般的なチャートタイプ

- [Histogram](https://en.wikipedia.org/wiki/Histogram) - 数値データの分布を表現したものです
- [Scatter plot](https://en.wikipedia.org/wiki/Scatter_plot) - デカルト座標を用いて、データセットの通常 2 つの変数の値を表示するプロットまたは数学的な図の一種です
- [Box plot](https://en.wikipedia.org/wiki/Box_plot) - 数値データの四分位数を通じて、その位置、広がり、歪みのグループをグラフで示す方法です
- [Error bar](https://en.wikipedia.org/wiki/Error_bar) - 報告された測定値の不確かさを示すためにグラフ上で使われる、データのばらつきを表すグラフィカルな表現です
- [Heat map](https://en.wikipedia.org/wiki/Heat_map) - ある現象の大きさを 2 次元上で色として示す手法です
- [Choropleth map](https://en.wikipedia.org/wiki/Choropleth_map) - 事前定義された一連の領域が、統計変数に比例して色付けまたはパターン化される主題図の一種です
- [Proportional symbol map](https://en.wikipedia.org/wiki/Proportional_symbol_map) - 量的変数を表すためにサイズが変化するシンボルを用いる主題図の一種です
- [Tag cloud](https://en.wikipedia.org/wiki/Tag_cloud) - テキストデータの目新しい視覚表現です

### 可視化ツール & ライブラリ

- Python ライブラリ
  - [matplotlib](https://matplotlib.org/) - Python で静的、アニメーション、インタラクティブな可視化を作成するための包括的なライブラリです
  - [seaborn](https://seaborn.pydata.org/) - matplotlib をベースにした Python のデータ可視化ライブラリです
  - [Plotly](https://plotly.com/python/) - Python 向けのインタラクティブでオープンソース、ブラウザベースのグラフ描画ライブラリです (Plotly Express を含む)
  - [WordCloud for Python](https://amueller.github.io/word_cloud/) - Python でのちょっとしたワードクラウドジェネレータです
- JavaScript ライブラリ
  - [D3](https://d3js.org/) - オーダーメイドのデータ可視化のための JavaScript ライブラリです
  - [GoJS](https://gojs.net/latest/) - Web ブラウザ上でインタラクティブな図表を簡単に作成できる JavaScript ライブラリです
  - [Chart.js](https://www.chartjs.org/) - モダンな Web 向けのシンプルかつ柔軟な JavaScript チャートライブラリです
  - [Recharts](https://recharts.org/) - React コンポーネントをベースに構築された組み立て可能なチャートライブラリです
  - [Tabulator](https://tabulator.info/) - テーブルやデータグリッドを作成するための、使いやすくシンプルにコーディングでき、機能満載でインタラクティブな JavaScript ライブラリです
- 文法 & その他
  - [gnuplot](http://gnuplot.info/) - 移植性のあるコマンドライン駆動のグラフ描画ユーティリティです
  - [ggplot2](https://ggplot2.tidyverse.org/) - The Grammar of Graphics に基づいて宣言的にグラフィックスを作成するシステムです
  - [Vega](https://vega.github.io/vega/) - インタラクティブな可視化デザインを作成、保存、共有するための宣言型言語である可視化文法です
  - [Vega-Lite](https://vega.github.io/vega-lite/) - インタラクティブなグラフィックスの高水準文法です

### ダッシュボード & ウェブアプリ

- [Dash](https://dash.plotly.com/) - Python、R、Julia、F# でデータアプリを迅速に構築するためのオリジナルのローコードフレームワークです
- [Panel](https://panel.holoviz.org/) - インタラクティブな Web アプリやダッシュボードを作成できる強力な Python ライブラリです
- [Streamlit](https://streamlit.io/) - データアプリをより速く構築・共有する方法です

## 分散システム

:::note[Relevant DSS-P Skills]

- 2\. データ整備・活用 > 2\.3 データマネジメント > データエンジニアリング（設計・収集・統合・提供）

:::

### 分散コンピューティングの原則

- [Distributed computing](https://en.wikipedia.org/wiki/Distributed_computing) - このようなシステムを研究するコンピュータサイエンスの分野です
- [Single point of failure](https://en.wikipedia.org/wiki/Single_point_of_failure) - 故障するとシステム全体の動作が停止してしまうシステムの一部分です
- [Fault tolerance](https://en.wikipedia.org/wiki/Fault_tolerance) - 一部のコンポーネントが故障した場合でも、システムが正常に動作し続けられるようにする特性です
- [Load balancing](https://en.wikipedia.org/wiki/Load_balancing_(computing)) - 全体としての処理をより効率的にすることを目的として、一連のタスクを一連のリソースに分散させるプロセスです
- [Fallacies of distributed computing](https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing) - 分散アプリケーションに不慣れなプログラマーが決まって行ってしまう誤った前提を記述した一連の主張です
- [Byzantine fault](https://en.wikipedia.org/wiki/Byzantine_fault) - コンポーネントが故障する可能性があり、故障したかどうかについて不完全な情報しか得られない分散システムの状態です
  - [Consensus](https://en.wikipedia.org/wiki/Consensus_(computer_science)) - 分散したプロセスやシステムの間で単一のデータ値について必要な合意を得るために分散システムで用いられる耐障害性メカニズムです
- [CAP theorem](https://en.wikipedia.org/wiki/CAP_theorem) - あらゆる分散データストアは、一貫性、可用性、分断耐性という 3 つの保証のうち 2 つしか提供できないとする定理です
- [BASE properties](https://aws.amazon.com/compare/the-difference-between-acid-and-base-database/) - 一貫性よりも可用性を優先するデータベースモデルです
- [Amdahl's law](https://en.wikipedia.org/wiki/Amdahl%27s_law) - タスクを実行するシステムにリソースを追加した際の高速化の限界を示す式です

### コンセンサス & レプリケーション戦略

- [Raft Consensus Algorithm](https://raft.github.io/) - Paxos よりも理解しやすくなるよう設計され、クラスタ全体で安全な状態機械レプリケーションを可能にするコンセンサスアルゴリズムです
- [Paxos Algorithm](https://en.wikipedia.org/wiki/Paxos_(computer_science)) - 信頼性の低い、あるいは非同期なプロセッサのネットワークにおいてコンセンサスを解決するための一連のプロトコル群です
- [Data Replication](https://en.wikipedia.org/wiki/Replication_(computing)) - あるコンピュータやサーバーから別の場所、コンピュータ、サーバーへとデータを頻繁に電子的にコピーすることです
  - Master-Slave Replication - 1 つのプライマリノードが書き込みを受け付け、スレーブがデータをレプリケートするパターンです
  - [Consensus](https://en.wikipedia.org/wiki/Consensus_(computer_science)) - 分散したプロセスやシステムの間で単一のデータ値について必要な合意を得るために分散システムで用いられる耐障害性メカニズムです

### 分散パターン & オブザーバビリティ

- [Circuit Breaker Pattern](https://martinfowler.com/bliki/CircuitBreaker.html) - 分散システムにおける連鎖的な障害を防ぐための設計パターンです
- [Distributed Tracing](https://opentelemetry.io/docs/concepts/observability-primer/#distributed-traces) - 特にマイクロサービスアーキテクチャで構築されたアプリケーションのプロファイリングとモニタリングのための手法です
- [Event Sourcing](https://martinfowler.com/eaaDev/EventSourcing.html) - アプリケーションの状態に対するすべての変更を不変のイベント列として保存するパターンです

### 分散ストレージシステム

- 分散ファイルシステム
  - [HDFS](https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html) - コモディティハードウェア上で動作するよう設計された分散ファイルシステムです
  - [IPFS](https://en.wikipedia.org/wiki/InterPlanetary_File_System) - Web をより速く、安全に、そしてよりオープンにすることを目的として設計された、ピアツーピアのハイパーメディアプロトコルです
    - [Kubo](https://github.com/ipfs/kubo) - IPFS の Go 言語による実装です
- [Object storage](https://en.wikipedia.org/wiki/Object_storage) - データをオブジェクトとして管理するコンピュータデータストレージアーキテクチャです
  - [Amazon S3](https://aws.amazon.com/s3/) - 業界最高水準のスケーラビリティ、データ可用性、セキュリティ、パフォーマンスを提供するオブジェクトストレージサービスです
  - [Azure Blob Storage](https://azure.microsoft.com/en-us/services/storage/blobs/) - 大量の非構造化データの保存に最適化された、Microsoft のクラウド向けオブジェクトストレージソリューションです
  - [Azure Data Lake Storage (ADLS)](https://azure.microsoft.com/en-us/services/storage/data-lake-storage/) - 高性能な分析ワークロード向けのスケーラブルで安全なデータレイクです
  - [Google Cloud Storage](https://cloud.google.com/storage/) - Google Cloud Platform のインフラストラクチャ上でデータを保存・アクセスするための RESTful なオンラインファイルストレージ Web サービスです
  - [Cloud Storage for Firebase](https://firebase.google.com/docs/storage) - 画像や動画などのユーザー生成コンテンツをアップロード・共有できるようにするサービスです
  - [Supabase Storage](https://supabase.com/docs/guides/storage) - 写真や動画のような大容量ファイルの保存・配信をシンプルにするサービスです
  - セルフホスト型 (上級)
    - [Ceph](https://ceph.com/en/) - オープンソースの分散ストレージシステムです
    - [MinIO](https://min.io/) - 高性能で S3 互換のオブジェクトストアです
  - ツール
    - [s5cmd](https://github.com/peak/s5cmd) - 非常に高速な S3 およびローカルファイルシステム実行ツールです
    - [Rclone](https://rclone.org/) - クラウドストレージ上のファイルを管理するためのコマンドラインプログラムです
    - [Azure Storage Explorer](https://azure.microsoft.com/en-us/products/storage/storage-explorer/) - Windows、macOS、Linux で Azure Storage のデータを簡単に扱えるスタンドアロンアプリです
    - [Azurite](https://github.com/Azure/Azurite) - オープンソースの Azure Storage エミュレータです

## 数学 & 統計学

:::note[Relevant DSS-P Skills]

- 2\. データ整備・活用 > 2\.2 AI・データサイエンス > 数理統計・多変量解析・データ可視化

:::

### 基礎数学

- [Algebra](https://en.wikipedia.org/wiki/Algebra) - 代数的構造と呼ばれる抽象的な体系や、それらの体系内での式の操作を扱う数学の一分野です
  - [Boolean algebra](https://en.wikipedia.org/wiki/Boolean_algebra) - 変数の値が真と偽という真理値 (通常は 1 と 0 で表される) であり、論理積 (and)、論理和 (or)、否定 (not) といった論理演算子を用いる点で初等代数と異なる代数の一分野です
  - [Elementary algebra](https://en.wikipedia.org/wiki/Elementary_algebra) - 代数の基本概念を包含する数学の一分野です
    - [Equation](https://en.wikipedia.org/wiki/Equation) - 等号 = で 2 つの式を結び付けることで、それらの相等性を表す数学の式です
    - [Logarithm](https://en.wikipedia.org/wiki/Logarithm) - ある固定された値である底を何乗すればその数になるかを示す指数です
  - [Abstract algebra](https://en.wikipedia.org/wiki/Abstract_algebra) - 要素に作用する特定の演算を持つ集合である代数的構造を研究する分野です
  - [Linear algebra](https://en.wikipedia.org/wiki/Linear_algebra) - 線形方程式、線形写像、およびそれらのベクトル空間や行列における表現を扱う数学の分野です
    - [Vector space](https://en.wikipedia.org/wiki/Vector_space) - しばしばベクトルと呼ばれる要素同士を足し合わせたり、スカラーと呼ばれる数によって (「スケーリング」) 乗じたりできる集合です
    - [Matrix](https://en.wikipedia.org/wiki/Matrix_(mathematics)) - 通常は加算と乗算に関する一定の性質を満たす、要素や項目が行と列に並んだ数値や他の数学的対象の矩形配列です
    - [Sparse matrix](https://en.wikipedia.org/wiki/Sparse_matrix) - ほとんどの要素がゼロである行列です
    - [Rank](https://en.wikipedia.org/wiki/Rank_(linear_algebra)) - その列によって生成 (張られる) されるベクトル空間の次元です
    - [Determinant](https://en.wikipedia.org/wiki/Determinant) - 正方行列の要素に対するスカラー値関数です
- [Calculus](https://en.wikipedia.org/wiki/Calculus) - 幾何学が形の研究、代数学が算術演算の一般化の研究であるのと同様に、連続的な変化を数学的に研究する分野です
  - [Differential calculus](https://en.wikipedia.org/wiki/Differential_calculus) - 量が変化する割合を研究する微積分学の一分野です
  - [Integral calculus](https://en.wikipedia.org/wiki/Integral) - 和の連続的な類似物であり、面積、体積、およびそれらの一般化を計算するために用いられます
  - [Differential equation](https://en.wikipedia.org/wiki/Differential_equation) - 1 つ以上の未知関数とその導関数を関係付ける方程式です
- [Geometry](https://en.wikipedia.org/wiki/Geometry) - 距離、形、大きさ、図形の相対的な位置といった空間の性質を扱う数学の一分野です
  - [Trigonometry](https://en.wikipedia.org/wiki/Trigonometry) - 三角形の角と辺の長さの関係を扱う数学の一分野です
  - [Coordinate system](https://en.wikipedia.org/wiki/Coordinate_system) - ユークリッド空間のような多様体上の点や他の幾何学的要素の位置を一意に決定・標準化するために、1 つ以上の数値 (座標) を用いるシステムです
  - [Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance) - ユークリッド空間における 2 点間を結ぶ線分の長さです
- [Category theory](https://en.wikipedia.org/wiki/Category_theory) - 数学的構造とそれらの関係性についての一般理論です
  - [Functor](https://en.wikipedia.org/wiki/Functor) - 圏 (カテゴリ) の間の写像です
- [Root mean square](https://en.wikipedia.org/wiki/Root_mean_square) - 一連の数値の二乗の平均の平方根です
- 変換
  - [Discrete cosine transform](https://en.wikipedia.org/wiki/Discrete_cosine_transform) - 有限のデータ点の列を、異なる周波数で振動する余弦関数の和として表現する変換です
  - [Discrete Fourier transform](https://en.wikipedia.org/wiki/Discrete_Fourier_transform) - 関数の等間隔サンプルの有限列を、離散時間フーリエ変換 (DTFT) の同じ長さの等間隔サンプル列に変換する、フーリエ変換の離散版です
- 関連リソース
  - [NIST Digital Library of Mathematical Functions](https://dlmf.nist.gov/) - 応用数学における特殊関数の決定版のリファレンスです
    - [Notations](https://dlmf.nist.gov/not/) - このライブラリで使われる表記法の一覧です

### 確率論 & 情報理論

- [Probability theory](https://en.wikipedia.org/wiki/Probability_theory) - 確率を扱う数学の一分野です
  - [Bayes' theorem](https://en.wikipedia.org/wiki/Bayes%27_theorem) - 条件付き確率を反転させるための数学的規則であり、結果から原因の確率を求めることを可能にします
  - [Central limit theorem (CLT)](https://en.wikipedia.org/wiki/Central_limit_theorem) - 適切な条件下では、標本平均を正規化したものの分布が標準正規分布に収束するとする定理です
- [Information theory](https://en.wikipedia.org/wiki/Information_theory) - デジタル情報の定量化、保存、伝達に関する科学的研究です
  - [Entropy](https://en.wikipedia.org/wiki/Entropy_(information_theory)) - 確率変数の取りうる結果に内在する「情報」「驚き」「不確実性」の平均的な水準です

### 統計学 & 数値解析手法

- [Statistics](https://en.wikipedia.org/wiki/Statistics) - データの収集、整理、分析、解釈、提示に関わる学問分野です
  - [Sampling](https://en.wikipedia.org/wiki/Sampling_(statistics)) - 母集団全体の特性を推定するために、統計的母集団の中から個体の部分集合を選び出すことです
    - [Sampling error](https://en.wikipedia.org/wiki/Sampling_error) - 母集団全体ではなく標本を観測することによって生じる誤差です
  - [Errors and residuals](https://en.wikipedia.org/wiki/Errors_and_residuals) - 統計標本の要素の観測値が「真の値」からどれだけ逸脱しているかを測る尺度です
  - [Frequency](https://en.wikipedia.org/wiki/Frequency_(statistics)) - 実験や調査においてその観測が発生または記録された回数です
    - [Contingency table](https://en.wikipedia.org/wiki/Contingency_table) - 変数の多変量頻度分布を表示する行列形式のテーブルの一種です
  - [Confounding](https://en.wikipedia.org/wiki/Confounding) - 従属変数と独立変数の両方に影響を及ぼし、見せかけの関連を引き起こす変数です
  - [Standard deviation](https://en.wikipedia.org/wiki/Standard_deviation) - ある変数の値がその平均の周りでどれだけばらついているかを測る尺度です
  - [Root mean square deviation](https://en.wikipedia.org/wiki/Root_mean_square_deviation) - 予測値と実際の値の差の二乗の平均の平方根です
  - [F-score](https://en.wikipedia.org/wiki/F-score) - 二値分類や情報検索システムの統計分析における予測性能の尺度です
  - [Correlation](https://en.wikipedia.org/wiki/Correlation) - 2 つの確率変数または 2 変量データの間に存在する統計的な関係の一種です
    - [Pearson correlation coefficient](https://en.wikipedia.org/wiki/Pearson_correlation_coefficient) - 2 つのデータ集合間の線形相関を測定する相関係数です
  - [Hypothesis testing](https://en.wikipedia.org/wiki/Statistical_hypothesis_testing) - データが特定の仮説を棄却するのに十分な証拠を提供しているかどうかを判断するために用いられる統計的推論の方法です
    - [Null hypothesis](https://en.wikipedia.org/wiki/Null_hypothesis) - ある単一の観測変数について、観測されたデータの 2 つの集合と測定された現象との間に統計的な関係や有意性が存在しないことを示唆する典型的な統計理論です
    - [Confidence interval (CI)](https://en.wikipedia.org/wiki/Confidence_interval) - 母平均のような未知の統計パラメータの真の値を (反復サンプリングにおいて) 含む可能性が高い値の範囲です
    - [P-value](https://en.wikipedia.org/wiki/P-value) - 帰無仮説が正しいと仮定した場合に、実際に観測された結果と同程度以上に極端な検定結果が得られる確率です
- 数値解析手法
  - [Significant figures](https://en.wikipedia.org/wiki/Significant_figures) - 位取り記数法で書かれた数値のうち、特定の量を伝える上で信頼性と必要性の両方を担う特定の桁です
- リソース
  - [Openstax Introductory Statistics](https://openstax.org/details/books/introductory-statistics/) - 統計学入門コース向けのオープンソース教科書です
  - [OpenIntro Statistics](https://www.openintro.org/book/os/) - コミュニティカレッジからアイビーリーグまでで実際に使われている、伝統的なカリキュラムを現代的に捉え直したものです

## データフォーマット & アーキテクチャ

:::note[Relevant DSS-P Skills]

- 2\. データ整備・活用 > 2\.3 データマネジメント > データエンジニアリング（設計・収集・統合・提供）
- 2\. データ整備・活用 > 2\.3 データマネジメント > データの品質・安全性向上

:::

### データフォーマット & テーブルフォーマット

- [Apache Parquet](https://parquet.apache.org/) - 効率的なデータ保存と取得のために設計された、オープンソースの列指向データファイルフォーマットです
- [Apache ORC](https://orc.apache.org/) - Hadoop のワークロード向けの、最小かつ最速の列指向ストレージです
- [Apache Arrow](https://arrow.apache.org/) - 高速なデータ交換とインメモリ分析のための汎用的な列指向フォーマットであり、多言語対応のツールボックスです
- [BSON](https://bsonspec.org/) - JSON ライクなドキュメントをバイナリエンコードしたシリアライゼーション形式です
- [Apache Avro](https://avro.apache.org/) - レコードデータ向けの主要なシリアライゼーションフォーマットであり、ストリーミングデータパイプラインの第一選択です
- [Delta Lake](https://delta.io/) - フォーマットにとらわれないレイクハウスアーキテクチャを各種コンピュートエンジンで構築できるようにするオープンソースのストレージフレームワークです
- [Apache Iceberg](https://iceberg.apache.org/) - 巨大な分析用データセット向けのオープンなテーブルフォーマットです
- [Apache Hudi](https://hudi.apache.org/) - ストリーミングデータレイクプラットフォームです

### データアーキテクチャ & 方法論

- [Data warehouse](https://en.wikipedia.org/wiki/Data_warehouse) - レポーティングとデータ分析に使われるシステムであり、ビジネスインテリジェンスの中核的な構成要素です
- [Data lake](https://en.wikipedia.org/wiki/Data_lake) - 自然な、あるいは生の形式 (通常はオブジェクトの塊やファイル) で保存されたデータのシステムまたはリポジトリです
- [Data lakehouse](https://www.databricks.com/blog/2020/01/30/what-is-a-data-lakehouse.html) - データレイクとデータウェアハウスの優れた要素を組み合わせた新しいオープンなアーキテクチャです
- [Medallion Architecture](https://www.databricks.com/glossary/medallion-architecture) - レイクハウス内のデータを論理的に整理するために用いられるデータ設計パターンです
- [CRISP-DM](https://en.wikipedia.org/wiki/Cross-industry_standard_process_for_data_mining) - データマイニングの専門家が用いる一般的なアプローチを記述したオープンな標準プロセスモデルです
- [PPDAC (Problem, Plan, Data, Analysis, Conclusion)](https://dataschools.education/about-data-literacy/ppdac-the-data-problem-solving-cycle/) - データを使って現実世界の課題を解決するための、統計リテラシーに関する確立されたアプローチであり、循環的なフレームワークです
- [Data architecture](https://en.wikipedia.org/wiki/Data_architecture) - どのデータを収集し、それをどのように保存、編成、統合し、データシステムおよび組織内で活用するかを規定する一連のモデル、ポリシー、ルール、標準です
- [DAMA-DMBOK](https://dama.org/dmbok2r-infographics/) - データ管理の 13 の機能領域にわたるフレームワークと用語を概説する、DAMA によるデータ管理知識体系ガイドです

### データガバナンス & メタデータ管理

- [Apache Atlas](https://atlas.apache.org/) - 企業がコンプライアンス要件を満たせるようにする、スケーラブルで拡張可能な中核的ガバナンスサービス群です
- [Collibra](https://www.collibra.com/) - データ管理のための共通言語を提供するエンタープライズデータガバナンスプラットフォームです
- [Informatica Metadata Manager](https://www.informatica.com/products/data-integration/metadata-management.html) - エンタープライズデータガバナンス向けの包括的なメタデータ管理ソリューションです
- [OpenMetadata](https://github.com/open-metadata/OpenMetadata) - データ発見、ガバナンス、コラボレーションのためのオープンソースのメタデータ管理プラットフォームです

### データ品質 & 検証

- [Great Expectations](https://greatexpectations.io/) - データ品質を定義、文書化、テストするための Python ライブラリです
- [Apache Griffin](https://griffin.apache.org/) - Apache Spark と Apache Hadoop 上に構築された、分散データ品質測定のためのデータ品質ソリューションです
- [Soda](https://www.soda.co/) - モダンなデータスタックと統合するデータ品質モニタリングソリューションです

### データバージョニング & スキーマ管理

- [Schema Registry](https://www.confluent.io/confluent-schema-registry/) - Kafka トピック向けのスキーマを一元管理する、ホスト型のスキーマ管理サービスです
- Git ベースのスキーマ管理 - Git リポジトリを使ってデータベーススキーマをバージョン管理することです
- [DBT Contracts](https://docs.getdbt.com/docs/collaborate/govern/model-contracts) - 入力と出力のデータ要件を定義する明示的なデータ契約です

## リレーショナルデータベース (SQL)

:::note[Relevant DSS-P Skills]

- 2\. データ整備・活用 > 2\.3 データマネジメント > データエンジニアリング（設計・収集・統合・提供）

:::

### SQL の基礎

- 基礎概念
  - [Relational model](https://en.wikipedia.org/wiki/Relational_model) - 一階述語論理と整合的な構造と言語を用いてデータを管理するアプローチです
  - [ACID properties](https://en.wikipedia.org/wiki/ACID) - エラー、電源障害、その他の不測の事態が発生してもデータの正当性を保証することを意図した、データベーストランザクションの一連の性質です
    - 原子性、一貫性、独立性、永続性
  - [Codd's Twelve Rules](https://en.wikipedia.org/wiki/Codd%27s_12_rules) - データベース管理システムがリレーショナルであると見なされるために求められる要件を定義するために Edgar F. Codd が提唱した、13 のルールからなる規則群です
  - [Database normalization](https://en.wikipedia.org/wiki/Database_normalization) - データの冗長性を最小化するために、リレーショナルデータベースの列 (属性) とテーブル (リレーション) を整理するプロセスです
- 言語 & 方言
  - [Structured Query Language (SQL)](https://en.wikipedia.org/wiki/SQL) - リレーショナルデータベース管理システムに保持されたデータを管理するために使われるドメイン特化言語です
    - コマンドカテゴリ
      - DDL - データ定義言語
      - DQL - データ問い合わせ言語
      - DML - データ操作言語
      - DCL - データ制御言語
      - TCL - トランザクション制御言語
    - [SQL Join](https://en.wikipedia.org/wiki/Join_(SQL)) - リレーショナルデータベース内の 1 つまたは複数のテーブルから列を組み合わせる句です
    - [Aggregate function](https://en.wikipedia.org/wiki/Aggregate_function) - 複数行の値をまとめて 1 つの要約値を形成する関数です
  - [Transact-SQL](https://docs.microsoft.com/en-us/sql/t-sql/language-reference) - SQL Server のプログラミングと管理に使われる、SQL への独自拡張です

### データベース管理システム (DBMS)

- クライアントサーバー型 RDBMS
  - [PostgreSQL](https://www.postgresql.org/) - カリフォルニア大学バークレー校コンピュータサイエンス学部で開発された POSTGRES バージョン 4.2 をベースとしたオブジェクトリレーショナルデータベース管理システム (ORDBMS) です
  - [MySQL](https://www.mysql.com/) - 最も人気のあるオープンソースの SQL データベース管理システムであり、Oracle Corporation によって開発、配布、サポートされています
  - [MariaDB community Server](https://mariadb.com/products/community-server/) - MySQL からコミュニティによってフォークされたオープンソースのリレーショナルデータベースです
- 分散 SQL
  - [TiDB](https://www.pingcap.com/tidb/) - トランザクション処理と分析処理を組み合わせたハイブリッドワークロード (HTAP) をサポートするオープンソースの分散 SQL データベースです
- 組み込み / インプロセス
  - [SQLite](https://www.sqlite.org/index.html) - 小型で高速、自己完結型、高信頼性、フル機能のデータベースエンジンを実装した C 言語ライブラリです
  - [PGlite](https://pglite.dev/) - TypeScript/JavaScript クライアントライブラリにパッケージ化された WASM ビルドであり、ブラウザ、Node.js、Bun でデータベースを実行できるようにします
  - [DuckDB](https://duckdb.org/) - インプロセスで動作する SQL OLAP データベース管理システムです
- ストレージエンジン
  - [Storage Engine](https://en.wikipedia.org/wiki/Storage_engine) - データベース管理システムがデータベースに対してデータの作成、読み取り、更新、削除 (CRUD) を行うために使用するソフトウェアコンポーネントです
  - [InnoDB](https://dev.mysql.com/doc/refman/8.0/en/innodb-storage-engine.html) - MySQL と MariaDB 向けのトランザクション対応ストレージエンジンです

### クラウド & マネージドサービス

- マネージドデータベースサービス
  - [Amazon RDS](https://aws.amazon.com/rds/) - クラウド上でデータベースのセットアップ、運用、スケーリングをシンプルにするマネージドサービス群です
  - [Amazon Aurora](https://aws.amazon.com/rds/aurora/) - PostgreSQL、MySQL、DSQL 向けにグローバル規模で高いパフォーマンスと可用性を提供する、フルマネージドなリレーショナルデータベースエンジンです
  - [Azure SQL Database](https://azure.microsoft.com/en-us/products/azure-sql/database/) - クラウド向けに構築されたインテリジェントでスケーラブルなリレーショナルデータベースサービスです
  - [Azure HorizonDB](https://azure.microsoft.com/en-us/products/horizondb) - 最大 3,072 vCore、128 TB のストレージをサポートするスケールアウトアーキテクチャを備え、高スループットで AI 駆動のアプリケーション向けに設計された、フルマネージドでクラウドネイティブな PostgreSQL 互換のデータベースサービスです
  - [Google Cloud SQL](https://cloud.google.com/sql) - Google Cloud 上でリレーショナルデータベースのセットアップ、保守、管理、運用を支援するフルマネージドのデータベースサービスです
  - [Neon](https://neon.tech/) - サーバーレスで耐障害性があり、寛大な無料枠を備えたスケーラブルな Postgres です
  - [Turso](https://turso.tech/) - SQLite をゼロから書き直した上に構築された SQLite 互換のデータベースであり、複製しても軽量で、どこで実行しても十分に高速です

### 接続性 & ツール

- 接続 API & ORM
  - [Connection pool](https://en.wikipedia.org/wiki/Connection_pool) - 将来のデータベースへのリクエストが発生した際に再利用できるよう保持される、データベース接続のキャッシュです
  - [ODBC](https://en.wikipedia.org/wiki/Open_Database_Connectivity) - データベース管理システムにアクセスするための標準的なアプリケーションプログラミングインターフェースです
  - [JDBC](https://www.oracle.com/java/technologies/javase/javase-tech-database.html) - Java プログラミング言語からほぼあらゆる表形式のデータソースへのアクセスを可能にする API です
    - [Jdbi](https://jdbi.org/) - Java Database Connectivity API をより慣用的な方法で使用できるようにするライブラリです
  - [Object-Relational Mapping (ORM)](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping) - オブジェクト指向プログラミング言語を用いて、非互換な型システム間でデータを変換するプログラミング手法です
    - [Prisma](https://www.prisma.io/) - データベースを使った信頼性が高くスケーラブルなアプリケーションを容易に構築できる次世代の ORM です
    - [Drizzle ORM](https://orm.drizzle.team/) - 開発者体験を重視した軽量で高性能な TypeScript ORM です
    - [Hibernate](https://hibernate.org/orm/) - Java プログラミング言語向けのオブジェクトリレーショナルマッピングツールです
    - [SQLAlchemy](https://www.sqlalchemy.org/) - アプリケーション開発者に SQL のフルパワーと柔軟性を提供する、Python の SQL ツールキット兼オブジェクトリレーショナルマッパーです
    - [GORM](https://gorm.io/) - 開発者フレンドリーを目指す、Golang 向けの素晴らしい ORM ライブラリです
    - [XORM](https://xorm.io/) - Go 向けのシンプルかつ強力な ORM です
    - [Diesel](https://diesel.rs/) - Rust 向けの安全で拡張可能な ORM 兼クエリビルダーです
- 開発者向けライブラリ & ドライバー
  - [Vanna.AI](https://vanna.ai/) - 検索拡張を用いて LLM による正確な SQL クエリの生成を支援する Python パッケージです
  - [Psycopg](https://www.psycopg.org/) - Python プログラミング言語向けの最も人気のある PostgreSQL アダプタです
- データベースクライアント & IDE
  - [pgAdmin](https://www.pgadmin.org/) - PostgreSQL 向けの最も人気があり機能豊富なオープンソースの管理・開発プラットフォームです
  - [SSMS (SQL Server Management Studio)](https://learn.microsoft.com/en-us/sql/ssms/sql-server-management-studio-ssms) - SQL Server から Azure SQL Database まで、あらゆる SQL インフラストラクチャを管理するための統合環境です
  - [DB Browser for SQLite](https://sqlitebrowser.org/) - SQLite 互換のデータベースファイルを作成、設計、編集できる高品質でビジュアルなオープンソースツールです
  - [Azure Data Studio](https://azure.microsoft.com/en-us/products/data-studio/) - データランドスケープをシンプルにするために設計された、モダンでオープンソース、クロスプラットフォームのハイブリッドデータ分析ツールです
  - [Beekeeper Studio](https://www.beekeeperstudio.io/) - モダンで使いやすく、見た目も良い SQL エディタ兼データベースマネージャーです
- コマンドライン & デプロイユーティリティ
  - [sqlcmd utility](https://learn.microsoft.com/en-us/sql/tools/sqlcmd/sqlcmd-utility) - Transact-SQL の文やスクリプトをアドホックかつインタラクティブに実行し、T-SQL スクリプティング作業を自動化するためのコマンドラインユーティリティです
  - [sqlpackage](https://learn.microsoft.com/en-us/sql/tools/sqlpackage/sqlpackage) - いくつかのデータベース開発タスクを自動化するコマンドラインユーティリティです
  - [DAC (Data-tier Applications)](https://learn.microsoft.com/en-us/sql/relational-databases/data-tier-applications/data-tier-applications) - ユーザーのデータベースに関連するすべての SQL Server オブジェクトを定義する論理的なデータベース管理概念です
  - [pgroll](https://pgroll.com/) - PostgreSQL 向けのゼロダウンタイムで可逆的なスキーママイグレーションツールです
- モニタリング & 分析
  - [pgBadger](https://pgbadger.darold.net/) - 速度を重視して構築された、詳細なレポートとプロフェッショナルな描画を備えた PostgreSQL のログアナライザーです
- パフォーマンスベンチマーク
  - [TPC-H](https://www.tpc.org/tpch/) - ビジネス指向のアドホッククエリと大量データに対するデータ変更を通じてデータベースシステムを評価する意思決定支援ベンチマークです
  - [TPC-DS](https://www.tpc.org/tpcds/) - 複雑なデータベースクエリとビッグデータ環境をシミュレートし、システムのパフォーマンスと価格性能指標を評価する意思決定支援ベンチマークです

## NoSQL & 専門データベース

:::note[Relevant DSS-P Skills]

- 2\. データ整備・活用 > 2\.3 データマネジメント > データエンジニアリング（設計・収集・統合・提供）

:::

### NoSQL データモデル

- [Object-relational impedance mismatch](https://en.wikipedia.org/wiki/Object%E2%80%93relational_impedance_mismatch) - オブジェクト指向プログラミング言語やスタイルで書かれたプログラムがリレーショナルデータベース管理システム (RDBMS) を使用する際にしばしば直面する、概念上・技術上の一連の困難です
- ドキュメントデータベース
  - [MongoDB](https://www.mongodb.com/) - アプリケーション開発の容易さとスケーリングを念頭に設計されたドキュメントデータベースです
  - [DocumentDB](https://documentdb.io/) - モダンなアプリケーション向けに構築された、強力でスケーラブルなオープンソースのドキュメントデータベースです
- キーバリューストア
  - [etcd](https://etcd.io/) - 分散システムにとって最も重要なデータのための、分散型で信頼性の高いキーバリューストアです
  - [Redis](https://redis.io/) - キャッシュ、ベクトルデータベース、ドキュメントデータベース、ストリーミングエンジンとして何百万人もの開発者に使われているインメモリデータストアです
  - [Dragonfly](https://www.dragonflydb.io/) - Redis のドロップイン代替品です
- グラフデータベース
  - [Neo4j](https://neo4j.com/) - 際限のないスケール、セキュリティ、データ整合性を備えた高速なグラフデータベースです
    - [Cypher](https://neo4j.com/docs/cypher-manual/current/introduction/) - プロパティグラフデータベース向けの宣言型クエリ言語です
  - [LadybugDB](https://ladybugdb.com/) - 規制の厳しい業界向けに構築された組み込み型の列指向グラフデータベースです
- ワイドカラムデータベース
  - [Apache Cassandra](https://cassandra.apache.org/) - オープンソースの NoSQL 分散データベースです
  - [Apache HBase](https://hbase.apache.org/) - Hadoop のデータベースであり、分散型でスケーラブルなビッグデータストアです
  - [ClickHouse](https://clickhouse.com/) - リアルタイム分析向けに設計された、高速なオープンソースの OLAP (オンライン分析処理) データベース管理システムです

### ベクトル & AI データベース

- コンセプト
  - [HNSW (Hierarchical Navigable Small Worlds)](https://www.pinecone.io/learn/series/faiss/hnsw/) - ベクトル類似検索のためのトップクラスのインデックスです
- ベクトルデータベース
  - [Pinecone](https://www.pinecone.io/) - あらゆる規模で関連性の高い結果を返すために特化して構築されたベクトルデータベースです
  - [pgvector](https://github.com/pgvector/pgvector) - Postgres 向けのオープンソースのベクトル類似検索です
  - [ElasticSearch vector database](https://www.elastic.co/elasticsearch/vector-database) - 世界で最も広く導入されているオープンソースのベクトルデータベースです
  - [Weaviate](https://weaviate.io/) - AI アプリケーションの開発を簡素化するオープンソースのベクトルデータベースです
  - [Milvus](https://zilliz.com/what-is-milvus) - 数十億のベクトルを扱えるように構築された高性能なオープンソースのベクトルデータベースです
  - [Chroma](https://www.trychroma.com/) - AI ネイティブなオープンソースの埋め込みデータベースです
  - [Qdrant](https://qdrant.tech/) - Rust だけで構築された高性能なベクトル検索エンジンであり、開発者があらゆる規模で AI 検索を構築できるようにします

### クラウド NoSQL サービス

- マルチモデルデータベース
  - [Azure Cosmos DB](https://azure.microsoft.com/en-us/products/cosmos-db/) - モダンなアプリ開発向けのフルマネージドでサーバーレスな分散データベースです
  - [Amazon DynamoDB](https://aws.amazon.com/dynamodb/) - あらゆる規模で高性能なアプリケーションを実行できるように設計された、フルマネージドでサーバーレスなキーバリュー型 NoSQL データベースです
- ドキュメントデータベース
  - [Cloud Firestore](https://firebase.google.com/docs/firestore) - Apple、Android、Web アプリからネイティブ SDK 経由で直接アクセスできるクラウドホスト型の NoSQL データベースです
- グラフデータベース
  - [Amazon Neptune](https://aws.amazon.com/neptune/) - 高度に接続されたデータセットを扱うアプリケーションを簡単に構築・実行できる、高速で信頼性が高くフルマネージドなグラフデータベースサービスです
- ワイドカラムデータベース
  - [Google Cloud Bigtable](https://cloud.google.com/bigtable/) - 大規模な分析・運用ワークロード向けの NoSQL ワイドカラムデータベースサービスです

## データ処理 & メッセージング

:::note[Relevant DSS-P Skills]

- 2\. データ整備・活用 > 2\.3 データマネジメント > データエンジニアリング（設計・収集・統合・提供）

:::

### エンタープライズ統合

- [Enterprise Integration Patterns](https://www.enterpriseintegrationpatterns.com/) - 開発者が分散アプリケーションを設計・構築したり、既存のアプリケーションを統合したりするのに役立つ 65 個の統合パターンからなるパターン言語です
- [Apache Camel](https://camel.apache.org/) - データを消費または生成するさまざまなシステムを迅速かつ容易に統合できるようにするオープンソースの統合フレームワークです

### メッセージキューイング & イベントストリーミング

- コンセプト
  - [Message Brokers](https://en.wikipedia.org/wiki/Message_broker) - 送信者の正式なメッセージングプロトコルから受信者の正式なメッセージングプロトコルへメッセージを変換する、仲介役のコンピュータプログラムモジュールです
  - [Dead-letter queue](https://en.wikipedia.org/wiki/Dead_letter_queue) - 正常に配信または処理できなかったメッセージを保存するために、メッセージキューイングシステムで使われる特殊なキューです
- プロトコル
  - [AMQP](https://www.amqp.org/) - メッセージ指向ミドルウェアのためのオープンな標準アプリケーション層プロトコルです
- メッセージング & ストリーミングプラットフォーム (ソフトウェア)
  - [Apache Kafka](https://kafka.apache.org/) - オープンソースの分散イベントストリーミングプラットフォームです
    - Apache Kafka エコシステム
      - [Kafbat UI](https://kafbat.io/) - Apache Kafka クラスタのモニタリングと管理を目的として設計された、多機能で高速、軽量かつ柔軟な Web インターフェースです
  - [RabbitMQ](https://www.rabbitmq.com/) - 信頼性が高く成熟したメッセージング & ストリーミングブローカーです
- クラウドサービス
  - [Amazon Kinesis](https://aws.amazon.com/kinesis/) - リアルタイムのストリーミングデータを簡単に収集、処理、分析できるようにするサービスです
  - [Azure Event Hubs](https://azure.microsoft.com/en-us/products/event-hubs/) - 毎秒数百万件のイベントを取り込める、高いスケーラビリティと信頼性を備えたイベントストリーミングプラットフォームです
  - [Azure Service Bus](https://azure.microsoft.com/en-us/products/service-bus/) - メッセージキューとパブリッシュ・サブスクライブ型トピックを備えた、フルマネージドなエンタープライズメッセージブローカーです

### バッチ処理 (ETL/ELT)

- 基盤フレームワーク
  - [Apache Hadoop](https://hadoop.apache.org/) - 大規模なデータセットの分散処理を可能にするフレームワークです
    - [mrjob](https://mrjob.readthedocs.io/en/latest/) - このフレームワーク上で動く Python プログラムを書く最も簡単な方法です
  - [Apache Spark](https://spark.apache.org/) - 大規模データ分析のための統合エンジンです
    - [PySpark](https://spark.apache.org/docs/latest/api/python/index.html) - このエンジン向けの Python API であり、Python でビッグデータ処理を行えるようにします
  - [RAY](https://www.ray.io/) - AI や Python のワークロードを簡単にスケールできるようにする、オープンソースの統合コンピュートフレームワークです
  - [Joblib](https://joblib.readthedocs.io/en/stable/) - Python で軽量なパイプライン処理を提供する一連のツールです
- ワークフローオーケストレーション & ETL ツール (ソフトウェア)
  - [Apache NiFi](https://nifi.apache.org/) - データを処理・配信するための使いやすく強力で信頼性の高いシステムです
  - [Apache Airflow](https://airflow.apache.org/) - ワークフローをプログラムによって作成、スケジュール、モニタリングするためのプラットフォームです
  - [dbt](https://www.getdbt.com/) - チームが信頼性が高くガバナンスの効いたデータを大規模に提供できるようにする、信頼できるデータを届けるための統合プラットフォームです
  - [Dagu](https://docs.dagu.sh/) - 単一のバイナリからノートパソコンから分散クラスタまでスケールするタスクオーケストレーションを、宣言的でファイルベース、自己完結型のプラットフォームとして提供する、ローカルファーストなワークフローエンジンです
- マネージド ETL & データ統合サービス
  - [Azure Data Factory](https://azure.microsoft.com/en-us/products/data-factory/) - スケールアウト可能なサーバーレスのデータ統合・データ変換のためのクラウド ETL サービスです
  - [AWS Glue](https://aws.amazon.com/glue/) - 複数のソースからのデータの発見、準備、移動、統合を容易にするサーバーレスのデータ統合サービスです
  - [Google Cloud Data Fusion](https://cloud.google.com/data-fusion) - ユーザーが ETL/ELT データパイプラインを効率的に構築・管理できるよう支援する、フルマネージドでクラウドネイティブなデータ統合サービスです

### ストリーム処理

- ストリーム処理エンジン (ソフトウェア)
  - [Spark Structured Streaming](https://spark.apache.org/streaming/) - Spark SQL エンジン上に構築された、スケーラブルで耐障害性のあるストリーム処理エンジンです
  - [Apache Storm](https://storm.apache.org/) - 無料でオープンソースの分散リアルタイム計算システムです
  - [Apache Flink](https://flink.apache.org/) - 境界の有無を問わないデータストリームに対するステートフルな計算のためのフレームワーク兼分散処理エンジンです
- クラウドサービス
  - [Google Cloud Dataflow](https://cloud.google.com/products/dataflow) - オートスケーリングとバッチ処理により、レイテンシ、処理時間、コストを最小化するフルマネージドのストリーミング分析サービスです

## データ分析 & 検索

:::note[Relevant DSS-P Skills]

- 2\. データ整備・活用 > 2\.1 データ・AIの戦略的活用 > データ・AI理解・活用

:::

### 検索エンジン & プラットフォーム

- ウェブ検索エンジン
  - [Google Search](https://www.google.com/) - ウェブページ、画像、動画など、世界中の情報を検索できる検索エンジンです
  - [DuckDuckGo](https://duckduckgo.com/) - あなたを追跡しない検索エンジンです
- 回答エンジン
  - [Wolfram|Alpha](https://www.wolframalpha.com/) - 画期的なアルゴリズム、ナレッジベース、AI テクノロジーを使って専門家レベルの回答を計算する計算知識エンジンです
  - [Perplexity AI](https://www.perplexity.ai/) - あらゆる質問に対して正確で信頼でき、リアルタイムな回答を提供する AI 駆動の回答エンジンです
- 検索プラットフォームとツール
  - [Azure AI Search](https://azure.microsoft.com/en-us/products/ai-services/ai-search) - AI を活用した検索と検索拡張生成のために、エンタープライズコンテンツと Web コンテンツへのアクセスを統一する、フルマネージドのクラウドホスト型サービスです
    - [Reciprocal Rank Fusion (RRF)](https://learn.microsoft.com/en-us/azure/search/hybrid-search-ranking) - 過去に実行された複数のクエリの検索スコアを評価し、統一された結果セットを生成するアルゴリズムです
    - [BM25 relevance scoring](https://learn.microsoft.com/en-us/azure/search/index-similarity-and-scoring) - 全文検索において一致するドキュメントの関連性スコアを計算するために使われる Okapi BM25 ランキング関数です
  - [ElasticSearch](https://www.elastic.co/elasticsearch/) - オープンソースの分散型 RESTful 検索・分析エンジンであり、スケーラブルなデータストア兼ベクトルデータベースです
    - [Painless](https://www.elastic.co/guide/en/elasticsearch/painless/current/index.html) - このエンジンでの利用を目的として特別に設計された、シンプルで安全なスクリプト言語です
    - [ES|QL](https://www.elastic.co/docs/explore-analyze/query-filter/languages/esql) - このエンジンに保存されたデータをフィルタリング、変換、分析できるパイプ形式の言語です
    - [Kibana](https://www.elastic.co/kibana) - このエンジンに保存されたデータをクエリ、分析、可視化、管理するためのオープンソースのインターフェースです
    - [Kibana Query Language](https://www.elastic.co/guide/en/kibana/current/kuery-query.html) - データをフィルタリングするためのシンプルなテキストベースのクエリ言語です
  - [Apache Solr](https://solr.apache.org/) - Apache Lucene 上に構築された、人気の高い超高速オープンソースのエンタープライズ検索プラットフォームです
    - [Apache Lucene](https://lucene.apache.org/) - 強力なインデックス作成・検索機能を提供する Java ライブラリです
  - [Faiss](https://faiss.ai/) - 密なベクトルの効率的な類似検索とクラスタリングのためのライブラリです
  - [Meilisearch](https://www.meilisearch.com/) - アプリやウェブサイト、ワークフローに手間なく組み込める超高速な検索エンジンです
  - [TypeSense](https://typesense.org/) - 快適な検索体験を構築するための、超高速でオープンソースな入力補完型検索エンジンです

### 分析エンジン & プラットフォーム

- ソフトウェア & マネージドサービス
  - [Apache Hive](https://hive.apache.org/) - 大規模な分析を可能にする、分散型で耐障害性のあるデータウェアハウスシステムです
  - [Presto](https://prestodb.io/) - あらゆる規模で高速かつ信頼性が高く効率的な分析を実現するために設計された分散 SQL クエリエンジンです
  - [Trino](https://trino.io/) - 1 つまたは複数の異種データソースに分散した大規模データセットに問い合わせるために設計された分散 SQL クエリエンジンです
  - [Amazon EMR](https://aws.amazon.com/emr/) - 大規模な分散データ処理ジョブ、インタラクティブな SQL クエリ、機械学習アプリケーションを実行するためのクラウドビッグデータプラットフォームです
  - [Amazon Redshift](https://aws.amazon.com/redshift/) - クラウド上のペタバイト規模のフルマネージドデータウェアハウスサービスです
  - [Amazon Athena](https://aws.amazon.com/athena/) - 標準的な SQL を使って Amazon S3 やその他のデータストア内のデータを直接簡単に分析できるインタラクティブなクエリサービスです
  - [Databricks](https://www.databricks.com/product/data-intelligence-platform) - 組織全体でデータと AI を活用できるようにするプラットフォームです
    - [Declarative Automation Bundles](https://docs.databricks.com/aws/en/dev-tools/bundles/) - データおよび AI プロジェクトにおいて、ソース管理、コードレビュー、テスト、継続的インテグレーション・デリバリー (CI/CD) といったソフトウェアエンジニアリングのベストプラクティスの採用を促進するツールであり、以前は Databricks Asset Bundles と呼ばれていました
  - [Snowflake](https://www.snowflake.com/en/) - ほぼ無制限のスケールでデータを動員し、単一のフルマネージドプラットフォーム上で分析、アプリケーション、AI を強化する AI データクラウドです
  - [Microsoft Fabric](https://www.microsoft.com/en-us/microsoft-fabric) - データ移動、データレイク、データエンジニアリング、データ統合、データサイエンス、リアルタイム分析、ビジネスインテリジェンスを含むフルサービスの機能を備えた、エンドツーエンドの分析ソリューションです
    - [Microsoft OneLake](https://learn.microsoft.com/en-us/fabric/onelake/) - 組織全体のための単一の統一された論理データレイクです
    - [Real-Time Intelligence](https://learn.microsoft.com/en-us/fabric/real-time-intelligence/overview) - 取り込み、変換、保存、分析、可視化、時間ベースのイベントに対するリアルタイムアクションまでをエンドツーエンドでカバーするソリューションにより、動きのあるストリーミングデータからインサイトを抽出するサービスです
    - [Rayfin CLI](https://learn.microsoft.com/en-us/fabric/apps/cli-reference) - プロジェクトの雛形作成、リモートデプロイ、構成管理の機能を備え、Fabric アプリケーションの作成、デプロイ、管理を行うコマンドラインツールです
    - [Lakehouse vs Data Warehouse](https://learn.microsoft.com/en-us/fabric/fundamentals/decision-guide-lakehouse-warehouse) - データ量、構造、処理要件に基づいてレイクハウスとデータウェアハウスのどちらを選ぶべきかを判断するためのガイドです
  - [Azure Synapse Analytics](https://azure.microsoft.com/en-us/products/synapse-analytics/) - データウェアハウスとビッグデータシステム全体にわたってインサイト獲得までの時間を短縮するエンタープライズ分析サービスです
  - [Google Cloud BigQuery](https://cloud.google.com/bigquery) - データから最大限の価値を引き出すのに役立つ、マルチエンジン、マルチフォーマット、マルチクラウドを念頭に設計されたフルマネージドで AI 対応のデータ分析プラットフォームです
  - [Amazon QuickSight](https://aws.amazon.com/quicksight/) - ユーザーがさまざまなエンタープライズデータソースからデータを分析し、可視化を作成し、インサイトを得られるようにする AI 駆動のビジネスインテリジェンスサービスです

### セマンティックレイヤー

- [Cube](https://cube.dev/) - データのモデリング、分析、レポーティングを行う AI エージェントをデプロイするエージェント型分析プラットフォームです
- [Open Semantic Interchange (OSI)](https://open-semantic-interchange.org/) - 分析、AI、BI プラットフォーム間でセマンティックメタデータを相互運用できるようにする、セマンティックモデル交換のための普遍的な標準です
