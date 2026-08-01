# 05 - データサイエンス・エンジニアリング

## 基礎概念

:::note[関連する DX 推進スキル標準のスキル]

- 2\. データ整備・活用 > 2\.1 データ・AI の戦略的活用 > データ・AI 理解・活用

:::

### 一般的なデータコンセプトと原則

- [Data](https://en.wikipedia.org/wiki/Data_(computer_science)) - 1 つ以上のシンボルの任意のシーケンス。datum は単一のデータシンボルです
- [Metadata](https://en.wikipedia.org/wiki/Metadata) - その他のデータに関する情報を提供する情報であり、データの内容ではありません
- [Big data](https://en.wikipedia.org/wiki/Big_data) - 従来のデータ処理アプリケーションソフトウェアでは処理するには大きすぎたり複雑すぎたりするデータセット
- [Unstructured data](https://en.wikipedia.org/wiki/Unstructured_data) - 事前定義されたデータモデルを持たない、または事前定義されたやり方で編成されていない情報
- [Data model](https://en.wikipedia.org/wiki/Data_model) - データの要素を編成し、それらが相互にどのように関連するか、および実世界のエンティティのプロパティとどのように関連するかを標準化する抽象モデル
  - [Entity–relationship model](https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model) - 特定の知識領域での関心のある相互関連するものの抽象的な説明
- [Data orientation](https://en.wikipedia.org/wiki/Data_orientation) - データ自体を強調するデータの視点であり、データを使用するアプリケーションではありません
- [DIKW pyramid](https://en.wikipedia.org/wiki/DIKW_pyramid) - データ、情報、知識、および知恵の間の構造的および/または機能的な関係を表す一連のモデルのクラス
- [Garbage in, garbage out](https://en.wikipedia.org/wiki/Garbage_in,_garbage_out) - 出力の品質は入力の品質によって決定されるというコンピュータサイエンスと情報通信技術の概念
- [Data cleansing](https://en.wikipedia.org/wiki/Data_cleansing) - レコードセット、テーブル、またはデータベースから破損または不正確なレコードを検出して修正する（または削除する）プロセス
- [Data lifecycle management](https://en.wikipedia.org/wiki/Data_lifecycle_management) - 情報システムのデータをそのライフサイクル全体を通じて管理する流れを管理するポリシーベースのアプローチ
- [Master data](https://en.wikipedia.org/wiki/Master_data) - ビジネストランザクションの文脈を提供するビジネスエンティティについてのデータ
- [Master data management](https://en.wikipedia.org/wiki/Master_data_management) - ビジネスと IT が連携して、企業の公式共有マスターデータアセットの均一性、精度、管理、セマンティック一貫性、および説明責任を確保する技術対応規律
- [Data quality](https://en.wikipedia.org/wiki/Data_quality) - 精度、完全性、一貫性、信頼性、および最新性などの要因に基づいて、データの状態を測定する指標
- [Single source of truth](https://en.wikipedia.org/wiki/Single_source_of_truth) - すべてのデータ要素が 1 つの場所でのみマスター（または編集）されるように情報モデルと関連データスキーマを構築する実践

### コアデータエンジニアリングおよびデータベース概念

- [Concurrency control](https://en.wikipedia.org/wiki/Concurrency_control) - 同時実行操作の正しい結果が効率的に生成されることを確保するメカニズム
- [CRUD operations](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) - 永続的なストレージの 4 つの基本操作：作成、読み取り、更新、削除
- [Shard](https://en.wikipedia.org/wiki/Shard_(database_architecture)) - データベースまたは検索エンジンのデータの水平パーティション
- [ETL](https://en.wikipedia.org/wiki/Extract,_transform,_load) - データが入力ソースから抽出され、変換され、出力データコンテナに読み込まれる 3 段階のプロセス
- [ELT](https://www.ibm.com/think/topics/elt) - 生データをソースシステムからデータウェアハウスなどの宛先リソースに移動し、その後使用のために変換するデータ統合プロセス
- [Data pipeline](https://en.wikipedia.org/wiki/Pipeline_(computing)) - 直列に接続されたデータ処理要素のセット。1 つの要素の出力は次の要素への入力です
- [Data governance](https://en.wikipedia.org/wiki/Data_governance) - データのライフサイクル全体を通じて高いデータ品質が存在することを組織が確保できるようにするデータ管理概念
- [Data lineage](https://en.wikipedia.org/wiki/Data_lineage) - データソースから消費まで、データが流れる様子を理解、記録、可視化するプロセス
- [Online transaction processing (OLTP)](https://en.wikipedia.org/wiki/Online_transaction_processing) - 同時に発生する多数のトランザクションを実行するデータ処理タイプ
- [Online analytical processing (OLAP)](https://en.wikipedia.org/wiki/Online_analytical_processing) - 多次元分析クエリに迅速に対応するコンピューティング内のアプローチ
- [Search engine indexing](https://en.wikipedia.org/wiki/Search_engine_indexing) - 高速で正確な情報検索を容易にするためのデータの収集、解析、および保存

### データガバナンス、品質、およびアーキテクチャ

- [Data Catalog](https://en.wikipedia.org/wiki/Data_catalog) - 組織がデータアセットを管理し、発見するのを支援する一元化されたメタデータリポジトリ
- [Data Stewardship](https://en.wikipedia.org/wiki/Data_stewardship) - 品質、セキュリティ、および準拠を確保するために組織のデータアセットを管理するための実践およびプロセスのセット
- [Data Privacy](https://en.wikipedia.org/wiki/Information_privacy) - 個人が自身に関する情報に何が起こるかを決定する権利と能力
- [Data Security](https://en.wikipedia.org/wiki/Data_security) - デジタル情報をオンライン脅威から保護するためのセキュリティ保護プロセス
- [ISO 8000](https://en.wikipedia.org/wiki/ISO_8000) - データ品質およびマスターデータの国際規格
- [Data Contract](https://docs.getdbt.com/docs/collaborate/govern/model-contracts) - データプロデューサーとコンシューマー間のデータ構造、品質、およびセマンティクスに関する明示的な合意
- [Schema Evolution](https://en.wikipedia.org/wiki/Schema_evolution) - 既存のデータおよびアプリケーションとの互換性を維持しながらデータベーススキーマを変更するプロセス
- [Dimensional Modeling](https://en.wikipedia.org/wiki/Dimensional_modeling) - 事実と次元を使用して分析クエリの対象のデータウェアハウスを最適化するために使用されるデータベース設計手法

## データサイエンスツールキット

:::note[関連する DX 推進スキル標準のスキル]

- 2\. データ整備・活用 > 2\.2 AI・データサイエンス > 数理統計・多変量解析・データ可視化

:::

### プログラミング言語とライブラリ

- [Python](https://www.python.org/) - 素早く作業し、システムをより効果的に統合できるプログラミング言語
  - [Awesome Python](https://awesome-python.com/) - 素晴らしい Python フレームワーク、ライブラリ、ツール、リソースのキュレーションされたリスト
  - [Pandas](https://pandas.pydata.org/) - 高速で強力で柔軟で使いやすいオープンソースのデータ分析および操作ツール
  - [Polars](https://pola.rs/) - 構造化データを操作するためのかなり高速な DataFrame ライブラリ
  - [Narwhals](https://narwhals-dev.github.io/narwhals/) - Python の遅延評価優先、型非依存、フレームワーク非依存の dataframe ライブラリ
  - [NumPy](https://numpy.org/) - Python での科学計算の基礎パッケージ
  - [SciPy](https://scipy.org/) - Python での科学計算のための基本的なアルゴリズム
  - [SymPy](https://www.sympy.org/en/index.html) - シンボリック数学用の Python ライブラリ
  - [SageMath](https://www.sagemath.org/) - GPL ライセンスの無料オープンソース数学ソフトウェアシステム
  - [statsmodels](https://www.statsmodels.org/stable/index.html) - 多くの異なる統計モデルの推定用のクラスと関数を提供する Python モジュール。統計テストの実施と統計データの探索用
- [R](https://www.r-project.org/) - 統計計算とグラフィックス用のフリーソフトウェア環境
  - [Tidyverse](https://www.tidyverse.org/) - データサイエンス用に設計された R パッケージの意見的なコレクション
- [GNU Octave](https://octave.org/) - 主に数値計算を目的とした高級言語
- [Wolfram Language](https://www.wolfram.com/language/) - シンボリック言語であり、強力なプログラムを迅速に開発するために必要な幅と統一性を意図的に備えています

### 特殊科学ツール

- [latexify](https://github.com/google/latexify_py) - Python ソースコードの断片を対応する LaTeX 式にコンパイルする Python パッケージ
- [handcalcs](https://github.com/connorferster/handcalcs) - Python 計算コードを LaTeX で自動的に描画する Python ライブラリ。ただし、鉛筆で書いた場合の形式を模倣しています
- [NetworkX](https://networkx.org/) - 複雑なネットワークの構造、ダイナミクス、および機能を作成、操作、および研究するための Python パッケージ
- [JAX](https://jax.readthedocs.io/en/latest/) - アクセラレーター指向の配列計算およびプログラム変換用の Python ライブラリ

### データソースおよび地理空間情報

- [GeoLite2](https://dev.maxmind.com/geoip/geolite2-free-geolocation-data) - ダウンロード可能なデータベースおよび Web サービス形式の無料の地理位置情報および ASN データのセット

### スプレッドシートおよびコラボレーティブデータプラットフォーム

- [Microsoft Excel](https://www.microsoft.com/en-us/microsoft-365/excel) - 業界最高のスプレッドシートソフトウェアプログラムおよび強力なデータ可視化および分析ツール
- [Grist](https://www.getgrist.com/) - スプレッドシートの親しみやすいインターフェイスとリレーショナルデータベースのパワーと構造を組み合わせたリレーショナルスプレッドシート
- [NocoBase](https://www.nocobase.com/) - 複雑なビジネスアプリケーションと内部ツールを構築するために設計されたスケーラビリティ優先のオープンソースノーコードプラットフォーム
- [NocoDB](https://nocodb.com/) - あらゆるデータベースをスマートスプレッドシートに変え、リレーショナルデータベース用のコラボレーティブインターフェイスを提供するオープンソースノーコードプラットフォーム
- [Airtable](https://www.airtable.com/) - スプレッドシートの柔軟性とデータベースの強力さを組み合わせて、チームが自分たちの仕事を管理するのを支援するプラットフォーム

### インタラクティブコンピューティング環境

- [JupyterLab](https://jupyter.org/) - ノートブック、コード、およびデータ用の Web ベースの対話的開発環境
- [Jupyter Notebook](https://jupyter.org/) - 計算ドキュメントを作成して共有するための元の Web アプリケーション
  - [VSCode Jupyter Extension](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter) - 環境でサポートされている言語カーネルの基本的なノートブックサポートを提供する VS Code 拡張機能
- [nbviewer](https://nbviewer.org/) - Jupyter Notebook を共有する簡単な方法
- [R Markdown](https://rmarkdown.rstudio.com/) - コード、描画出力、および散文を組み合わせて動的な分析ドキュメントを作成するのを支援するオーサリングフレームワーク
- [Wolfram Notebooks](https://www.wolfram.com/notebooks/) - 強力な環境であり、テキスト、識字的なプログラミング、グラフィックス、カスタムインタラクティブ要素を組み合わせた探索と通信
- [Voila](https://voila.readthedocs.io/en/stable/) - Jupyter ノートブックをスタンドアロン Web アプリケーションに変えるツール

## データ可視化

:::note[関連する DX 推進スキル標準のスキル]

- 2\. データ整備・活用 > 2\.2 AI・データサイエンス > 数理統計・多変量解析・データ可視化

:::

### 一般的なチャートタイプ

- [Histogram](https://en.wikipedia.org/wiki/Histogram) - 数値データの分布の表現
- [Scatter plot](https://en.wikipedia.org/wiki/Scatter_plot) - デカルト座標を使用してデータセットの通常 2 つの変数の値を表示するプロットまたは数学図の類型
- [Box plot](https://en.wikipedia.org/wiki/Box_plot) - 四分位数を通じた数値データのグループの位置、スプレッド、スキューを図的に実証する方法
- [Error bar](https://en.wikipedia.org/wiki/Error_bar) - グラフで使用される、報告された測定の不確実性を示すデータの可変性のグラフィック表現
- [Heat map](https://en.wikipedia.org/wiki/Heat_map) - 現象の大きさを 2 次元の色として表示する手法
- [Choropleth map](https://en.wikipedia.org/wiki/Choropleth_map) - 事前定義された領域のセットが統計変数に比例して色または図案化される主題図の類型
- [Proportional symbol map](https://en.wikipedia.org/wiki/Proportional_symbol_map) - 定量変数を表すために異なるサイズのシンボルを使用する主題図の類型
- [Tag cloud](https://en.wikipedia.org/wiki/Tag_cloud) - テキストデータの目新しいビジュアル表現

### 可視化ツールとライブラリ

- Python ライブラリ
  - [matplotlib](https://matplotlib.org/) - Python での静的、アニメーション、対話的な可視化を作成するための包括的なライブラリ
  - [seaborn](https://seaborn.pydata.org/) - matplotlib に基づく Python データ可視化ライブラリ
  - [Plotly](https://plotly.com/python/) - Python 用のインタラクティブでオープンソースでブラウザベースのグラフィングライブラリ（Plotly Express を含む）
  - [WordCloud for Python](https://amueller.github.io/word_cloud/) - Python での少し単語クラウドジェネレーター
- JavaScript ライブラリ
  - [D3](https://d3js.org/) - カスタムデータ可視化用の JavaScript ライブラリ
  - [GoJS](https://gojs.net/latest/) - Web ブラウザでインタラクティブな図を簡単に作成できる JavaScript ライブラリ
  - [Chart.js](https://www.chartjs.org/) - 最新の Web 用のシンプルで柔軟な JavaScript チャートライブラリ
  - [Recharts](https://recharts.org/) - React コンポーネント上に構築された構成可能なチャートライブラリ
  - [Tabulator](https://tabulator.info/) - テーブルとデータグリッドを作成するための、使いやすく、コーディングが簡単で、フル機能でインタラクティブな JavaScript ライブラリ
- 文法とその他
  - [gnuplot](http://gnuplot.info/) - ポータブルなコマンドラインドリブングラフユーティリティ
  - [ggplot2](https://ggplot2.tidyverse.org/) - グラフィックス文法に基づいた宣言的にグラフィックスを作成するシステム
  - [Vega](https://vega.github.io/vega/) - 可視化文法であり、インタラクティブな可視化デザインを作成、保存、共有するための宣言型言語
  - [Vega-Lite](https://vega.github.io/vega-lite/) - インタラクティブグラフィックスの高レベルの文法

### ダッシュボーディングと Web アプリ

- [Dash](https://dash.plotly.com/) - Python、R、Julia、F# でデータアプリを迅速に構築するための元のローコードフレームワーク
- [Panel](https://panel.holoviz.org/) - インタラクティブな Web アプリとダッシュボードを作成できる強力な Python ライブラリ
- [Streamlit](https://streamlit.io/) - データアプリをより速く構築して共有する方法

## 分散システム

:::note[関連する DX 推進スキル標準のスキル]

- 2\. データ整備・活用 > 2\.3 データマネジメント > データエンジニアリング（設計・収集・統合・提供）

:::

### 分散コンピューティングの原則

- [Distributed computing](https://en.wikipedia.org/wiki/Distributed_computing) - このようなシステムを研究するコンピュータサイエンスの分野
- [Single point of failure](https://en.wikipedia.org/wiki/Single_point_of_failure) - システムの一部。失敗すると、システム全体が動作を停止します
- [Fault tolerance](https://en.wikipedia.org/wiki/Fault_tolerance) - システムのコンポーネントの一部が失敗した場合でも、システムが適切に動作し続ける機能
- [Load balancing](https://en.wikipedia.org/wiki/Load_balancing_(computing)) - タスクのセットをリソースのセットに配分する処理。全体的な処理をより効率的にする目的で
- [Fallacies of distributed computing](https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing) - 分散アプリケーションに新しいプログラマーが必然的に行う誤った仮定を説明する一連の主張
- [Byzantine fault](https://en.wikipedia.org/wiki/Byzantine_fault) - 分散システムの状態であり、コンポーネントが失敗する可能性があり、コンポーネントが失敗したかどうかに関する不完全な情報があります
  - [Consensus](https://en.wikipedia.org/wiki/Consensus_(computer_science)) - 分散プロセスまたはシステム間で単一のデータ値について必要な同意を達成するために分散システムで使用される耐障害性メカニズム
- [CAP theorem](https://en.wikipedia.org/wiki/CAP_theorem) - 分散データストアは、一貫性、可用性、およびパーティション耐性の 3 つの保証のうち 2 つのみを提供できるという定理
- [BASE properties](https://aws.amazon.com/compare/the-difference-between-acid-and-base-database/) - 一貫性よりも可用性を優先するデータベースモデル
- [Amdahl's law](https://en.wikipedia.org/wiki/Amdahl%27s_law) - リソースがシステムに追加されるにつれて、タスクのスピードアップを制限する式

### コンセンサスとレプリケーション戦略

- [Raft Consensus Algorithm](https://raft.github.io/) - Paxos より理解しやすいように設計されたコンセンサスアルゴリズムであり、クラスタ全体での安全な状態マシンレプリケーションを有効にします
- [Paxos Algorithm](https://en.wikipedia.org/wiki/Paxos_(computer_science)) - 信頼できないまたは非同期プロセッサのネットワークでコンセンサスを解決するためのプロトコルファミリー
- [Data Replication](https://en.wikipedia.org/wiki/Replication_(computing)) - コンピュータまたはサーバーから別の場所、コンピュータ、またはサーバーへのデータの頻繁な電子コピー
  - Master-Slave Replication - 1 つのプライマリノードが書き込みを受け入れ、スレーブがデータをレプリケートするパターン
  - [Consensus](https://en.wikipedia.org/wiki/Consensus_(computer_science)) - 分散プロセスまたはシステム間で単一のデータ値について必要な同意を達成するために分散システムで使用される耐障害性メカニズム

### 分散パターンと監視可能性

- [Circuit Breaker Pattern](https://martinfowler.com/bliki/CircuitBreaker.html) - 分散システムでのカスケード障害を防ぐための設計パターン
- [Distributed Tracing](https://opentelemetry.io/docs/concepts/observability-primer/#distributed-traces) - アプリケーション、特にマイクロサービスアーキテクチャを使用して構築されたアプリケーションのプロファイリングおよび監視方法
- [Event Sourcing](https://martinfowler.com/eaaDev/EventSourcing.html) - アプリケーション状態へのすべての変更が不変イベントのシーケンスとして保存されるパターン

### 分散ストレージシステム

- 分散ファイルシステム
  - [HDFS](https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html) - コモディティハードウェアで実行するために設計された分散ファイルシステム
  - [IPFS](https://en.wikipedia.org/wiki/InterPlanetary_File_System) - Web をより高速、より安全、よりオープンにすることを目的とした P2P ハイパーメディアプロトコル
    - [Kubo](https://github.com/ipfs/kubo) - IPFS の Go 実装
- [Object storage](https://en.wikipedia.org/wiki/Object_storage) - オブジェクトとしてデータを管理するコンピュータデータストレージアーキテクチャ
  - [Amazon S3](https://aws.amazon.com/s3/) - 業界をリードするスケーラビリティ、データ可用性、セキュリティ、パフォーマンスを備えたオブジェクトストレージサービス
  - [Azure Blob Storage](https://azure.microsoft.com/en-us/services/storage/blobs/) - 大量の非構造化データの保存に最適化された Microsoft のクラウドオブジェクトストレージソリューション
  - [Azure Data Lake Storage (ADLS)](https://azure.microsoft.com/en-us/services/storage/data-lake-storage/) - 高性能分析ワークロード用のスケーラブルで安全なデータレイク
  - [Google Cloud Storage](https://cloud.google.com/storage/) - Google Cloud Platform インフラストラクチャ上のデータを保存およびアクセスするための RESTful オンラインファイルストレージ Web サービス
  - [Cloud Storage for Firebase](https://firebase.google.com/docs/storage) - ユーザー生成コンテンツ（画像やビデオなど）をアップロードして共有できるサービス
  - [Supabase Storage](https://supabase.com/docs/guides/storage) - 写真やビデオなどの大きなファイルの保存と配信を簡単にするサービス
  - 自己ホスト型（高度）
    - [Ceph](https://ceph.com/en/) - オープンソースの分散ストレージシステム
    - [MinIO](https://min.io/) - 高性能で S3 互換のオブジェクトストア
  - ツール
    - [s5cmd](https://github.com/peak/s5cmd) - 非常に高速な S3 とローカルファイルシステム実行ツール
    - [Rclone](https://rclone.org/) - クラウドストレージ上のファイルを管理するためのコマンドラインプログラム
    - [Azure Storage Explorer](https://azure.microsoft.com/en-us/products/storage/storage-explorer/) - Windows、macOS、Linux 上で Azure Storage データを簡単に操作できるスタンドアロンアプリ
    - [Azurite](https://github.com/Azure/Azurite) - オープンソースの Azure Storage エミュレーター

## 数学と統計

:::note[関連する DX 推進スキル標準のスキル]

- 2\. データ整備・活用 > 2\.2 AI・データサイエンス > 数理統計・多変量解析・データ可視化

:::

### 基本数学

- [Algebra](https://en.wikipedia.org/wiki/Algebra) - 代数的構造として知られる抽象システムと、これらのシステム内の式の操作を扱う数学の一分野
  - [Boolean algebra](https://en.wikipedia.org/wiki/Boolean_algebra) - 変数の値が true と false の真理値（通常は 1 と 0 で示される）であり、論理演算子（and、or、not）を使用するという点で初等代数とは異なる代数の分野
  - [Elementary algebra](https://en.wikipedia.org/wiki/Elementary_algebra) - 代数の基本概念を含む数学の一分野
    - [Equation](https://en.wikipedia.org/wiki/Equation) - 2 つの式の等式を等号 = で接続することで表現する数式
    - [Logarithm](https://en.wikipedia.org/wiki/Logarithm) - その数を生成するために別の固定値である底を上げる必要がある指数
  - [Abstract algebra](https://en.wikipedia.org/wiki/Abstract_algebra) - 要素に特定の操作を行う代数的構造のセットの研究
  - [Linear algebra](https://en.wikipedia.org/wiki/Linear_algebra) - 線形方程式、線形マップ、およびベクトル空間での表現を通じたそれらの表現に関する数学の分野
    - [Vector space](https://en.wikipedia.org/wiki/Vector_space) - 要素（多くの場合ベクトルと呼ばれる）を追加して、スカラーと呼ばれる数で「スケール」できるセット
    - [Matrix](https://en.wikipedia.org/wiki/Matrix_(mathematics)) - 行と列に配置された要素またはエントリを持つ数値またはその他の数学的オブジェクトの矩形配列。通常、加算と乗算の特定の特性を満たしています
    - [Sparse matrix](https://en.wikipedia.org/wiki/Sparse_matrix) - ほとんどの要素がゼロである行列
    - [Rank](https://en.wikipedia.org/wiki/Rank_(linear_algebra)) - その列によって生成（またはスパン）されるベクトル空間の次元
    - [Determinant](https://en.wikipedia.org/wiki/Determinant) - 正方行列のエントリのスカラー値関数
- [Calculus](https://en.wikipedia.org/wiki/Calculus) - ジオメトリが図形の研究である方法と同じように、代数が算術操作の一般化の研究である方法と同じように、継続的な変化の数学的研究
  - [Differential calculus](https://en.wikipedia.org/wiki/Differential_calculus) - 量が変化する速度を研究するカルキュラスの分野
  - [Integral calculus](https://en.wikipedia.org/wiki/Integral) - 合計の連続類似物であり、面積、体積、およびそれらの一般化を計算するために使用されます
  - [Differential equation](https://en.wikipedia.org/wiki/Differential_equation) - 1 つ以上の未知の関数とそれらの導関数を関連付ける方程式
- [Geometry](https://en.wikipedia.org/wiki/Geometry) - 距離、形状、サイズ、図の相対的な位置などの空間の特性に関する数学の一分野
  - [Trigonometry](https://en.wikipedia.org/wiki/Trigonometry) - 三角形の角度と辺の長さの関係に関する数学の分野
  - [Coordinate system](https://en.wikipedia.org/wiki/Coordinate_system) - ユークリッド空間などの多様体上の点またはその他の幾何学的要素の位置を一意に決定して標準化するために 1 つ以上の数値または座標を使用するシステム
  - [Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance) - ユークリッド空間内の 2 つのポイント間の線分の長さ
- [Category theory](https://en.wikipedia.org/wiki/Category_theory) - 数学的構造とそれらの関係の一般理論
  - [Functor](https://en.wikipedia.org/wiki/Functor) - カテゴリ間のマッピング
- [Root mean square](https://en.wikipedia.org/wiki/Root_mean_square) - 数値のセットの二乗の平均の平方根
- 変換
  - [Discrete cosine transform](https://en.wikipedia.org/wiki/Discrete_cosine_transform) - 異なる周波数で振動するコサイン関数の合計の観点から、有限の一連のデータポイントを表現する変換
  - [Discrete Fourier transform](https://en.wikipedia.org/wiki/Discrete_Fourier_transform) - 均等に配置されたサンプル関数の有限シーケンスを離散時間フーリエ変換の均等に配置されたサンプルの同じ長さのシーケンスに変換するフーリエ変換のディスクリート版
- 関連リソース
  - [NIST Digital Library of Mathematical Functions](https://dlmf.nist.gov/) - 応用数学の特殊関数の決定的なリファレンス
    - [Notations](https://dlmf.nist.gov/not/) - ライブラリで使用されている表記法のリスト

### 確率と情報理論

- [Probability theory](https://en.wikipedia.org/wiki/Probability_theory) - 確率に関する数学の分野
  - [Bayes' theorem](https://en.wikipedia.org/wiki/Bayes%27_theorem) - 条件付き確率を反転させるための数学的規則であり、その効果が与えられて原因の確率を見つけることができます
  - [Central limit theorem (CLT)](https://en.wikipedia.org/wiki/Central_limit_theorem) - 適切な条件の下で、サンプル平均の正規化されたバージョンの分布が標準正規分布に収束するという定理
- [Information theory](https://en.wikipedia.org/wiki/Information_theory) - デジタル情報の定量化、保存、および通信の科学的研究
  - [Entropy](https://en.wikipedia.org/wiki/Entropy_(information_theory)) - ランダム変数の可能な結果に固有の「情報」、「驚き」、または「不確実性」の平均レベル

### 統計と数値方法

- [Statistics](https://en.wikipedia.org/wiki/Statistics) - データの収集、組織化、分析、解釈、および提示に関する規律
  - [Sampling](https://en.wikipedia.org/wiki/Sampling_(statistics)) - 統計母集団全体の特性を推定するために、統計母集団内の個人のサブセットの選択
    - [Sampling error](https://en.wikipedia.org/wiki/Sampling_error) - 全体の母集団ではなく、サンプルを観測することによって引き起こされるエラー
  - [Errors and residuals](https://en.wikipedia.org/wiki/Errors_and_residuals) - 統計サンプルの要素の観測値とその「真の値」からの偏差の測定
  - [Frequency](https://en.wikipedia.org/wiki/Frequency_(statistics)) - 観察が実験またはスタディで発生または記録された回数
    - [Contingency table](https://en.wikipedia.org/wiki/Contingency_table) - 変数の多変量頻度分布を表示する行列形式のテーブルの類型
  - [Confounding](https://en.wikipedia.org/wiki/Confounding) - 従属変数と独立変数の両方に影響を与え、見せかけの関連を引き起こす変数
  - [Standard deviation](https://en.wikipedia.org/wiki/Standard_deviation) - 変数の値の平均に関する変動量の測定
  - [Root mean square deviation](https://en.wikipedia.org/wiki/Root_mean_square_deviation) - 予測値と実際の値の間の二乗差の平均の平方根
  - [F-score](https://en.wikipedia.org/wiki/F-score) - 二値分類および情報検索システムの統計分析の予測パフォーマンスの測定
  - [Correlation](https://en.wikipedia.org/wiki/Correlation) - 2 つの確率変数またはビバリエートデータ間の統計関係
    - [Pearson correlation coefficient](https://en.wikipedia.org/wiki/Pearson_correlation_coefficient) - 2 つのデータセット間の線形相関を測定する相関係数
  - [Hypothesis testing](https://en.wikipedia.org/wiki/Statistical_hypothesis_testing) - データが特定の仮説を拒否するために十分な証拠を提供するかどうかを決定するために使用される統計的推論の方法
    - [Null hypothesis](https://en.wikipedia.org/wiki/Null_hypothesis) - 統計的関係と有意性が、単一の観測変数の特定のセットの間、または 2 つの観測データセットと測定現象の間に存在しないことを示唆する典型的な統計理論
    - [Confidence interval (CI)](https://en.wikipedia.org/wiki/Confidence_interval) - 母集団平均など、未知の統計パラメータの真の値を含む可能性がある（反復サンプリング）値の範囲
    - [P-value](https://en.wikipedia.org/wiki/P-value) - null 仮説が正しいという仮定の下で、実際に観測された結果と同等に極端な検査結果を取得する確率
- 数値方法
  - [Significant figures](https://en.wikipedia.org/wiki/Significant_figures) - 位置標記で書かれた数値内の特定のデジタルであり、特定の量の伝達における信頼性と必要性の両方を持ちます
- リソース
  - [Openstax Introductory Statistics](https://openstax.org/details/books/introductory-statistics/) - 統計入門コース向けのオープンソースの教科書
  - [OpenIntro Statistics](https://www.openintro.org/book/os/) - 従来のカリキュラムの動的な見方であり、コミュニティカレッジから Ivy League までで正常に使用されています

## データ形式とアーキテクチャ

:::note[関連する DX 推進スキル標準のスキル]

- 2\. データ整備・活用 > 2\.3 データマネジメント > データエンジニアリング（設計・収集・統合・提供）
- 2\. データ整備・活用 > 2\.3 データマネジメント > データの品質・安全性向上

:::

### データ形式とテーブル形式

- [Apache Parquet](https://parquet.apache.org/) - 効率的なデータストレージと検索のために設計されたオープンソースの列指向データファイル形式
- [Apache ORC](https://orc.apache.org/) - Hadoop ワークロード用の最小で最速の列ストレージ
- [Apache Arrow](https://arrow.apache.org/) - 普遍的な列フォーマットおよび高速データ交換と in-memory 分析用のマルチ言語ツールボックス
- [BSON](https://bsonspec.org/) - JSON のような文書のバイナリエンコード シリアル化
- [Apache Avro](https://avro.apache.org/) - レコードデータ用の主要なシリアル化形式、ストリーミングデータパイプラインの最初の選択肢
- [Delta Lake](https://delta.io/) - コンピュートエンジンでフォーマット非依存の Lakehouse アーキテクチャを構築できるオープンソースストレージフレームワーク
- [Apache Iceberg](https://iceberg.apache.org/) - 巨大な分析データセット用のオープンテーブル形式
- [Apache Hudi](https://hudi.apache.org/) - ストリーミングデータレイクプラットフォーム

### データアーキテクチャと方法論

- [Data warehouse](https://en.wikipedia.org/wiki/Data_warehouse) - レポートとデータ分析に使用されるシステムであり、ビジネスインテリジェンスのコアコンポーネント
- [Data lake](https://en.wikipedia.org/wiki/Data_lake) - その自然/生フォーマット（通常のオブジェクト blob またはファイル）で保存されたデータのシステムまたはリポジトリ
- [Data lakehouse](https://www.databricks.com/blog/2020/01/30/what-is-a-data-lakehouse.html) - データレイクとデータウェアハウスの最高の要素を組み合わせた新しいオープンアーキテクチャ
- [Medallion Architecture](https://www.databricks.com/glossary/medallion-architecture) - レイクハウスのデータを論理的に編成するために使用されるデータ設計パターン
- [CRISP-DM](https://en.wikipedia.org/wiki/Cross-industry_standard_process_for_data_mining) - データマイニングの専門家が使用する一般的なアプローチを説明するオープン標準プロセスモデル
- [PPDAC (Problem, Plan, Data, Analysis, Conclusion)](https://dataschools.education/about-data-literacy/ppdac-the-data-problem-solving-cycle/) - データを使用した実世界の課題を解決するための統計識字率と循環フレームワークへのよく確立されたアプローチ
- [Data architecture](https://en.wikipedia.org/wiki/Data_architecture) - どのデータが収集され、データシステムおよび組織で保存、配置、統合、および使用されるかを管理するモデル、ポリシー、ルール、および標準のセット
- [DAMA-DMBOK](https://dama.org/dmbok2r-infographics/) - データ管理知識体ガイド。データ管理の 13 の機能領域全体のフレームワークと用語を概説しています

### データガバナンスとメタデータ管理

- [Apache Atlas](https://atlas.apache.org/) - 企業が準拠要件を満たすことを可能にするスケーラブルで拡張可能なコア基礎ガバナンスサービスのセット
- [Collibra](https://www.collibra.com/) - データ管理用の共通言語を提供するエンタープライズデータガバナンスプラットフォーム
- [Informatica Metadata Manager](https://www.informatica.com/products/data-integration/metadata-management.html) - エンタープライズデータガバナンス用の包括的なメタデータ管理ソリューション
- [OpenMetadata](https://github.com/open-metadata/OpenMetadata) - データ検出、ガバナンス、およびコラボレーション用のオープンソースメタデータ管理プラットフォーム

### データ品質と検証

- [Great Expectations](https://greatexpectations.io/) - データ品質を定義、ドキュメント化、テストするための Python ライブラリ
- [Apache Griffin](https://griffin.apache.org/) - 分散データ品質測定用に Apache Spark と Apache Hadoop 上に構築されたデータ品質ソリューション
- [Soda](https://www.soda.co/) - 最新のデータスタックと統合するデータ品質監視ソリューション

### データバージョニングとスキーマ管理

- [Schema Registry](https://www.confluent.io/confluent-schema-registry/) - Kafka トピック用のスキーマを一元化するホストスキーマ管理サービス
- Git ベースのスキーマ管理 - Git リポジトリを使用してデータベーススキーマをバージョン制御
- [DBT Contracts](https://docs.getdbt.com/docs/collaborate/govern/model-contracts) - 入出力データ要件を定義する明示的なデータコントラクト

## リレーショナルデータベース（SQL）

:::note[関連する DX 推進スキル標準のスキル]

- 2\. データ整備・活用 > 2\.3 データマネジメント > データエンジニアリング（設計・収集・統合・提供）

:::

### SQL 基礎

- 基礎的な概念
  - [Relational model](https://en.wikipedia.org/wiki/Relational_model) - 一階述語論理と一貫した構造と言語を使用してデータを管理するアプローチ
  - [ACID properties](https://en.wikipedia.org/wiki/ACID) - エラー、電源障害、およびその他の不幸にもかかわらず、データの有効性を保証することを意図した一連のデータベーストランザクションプロパティ
    - Atomicity、Consistency、Isolation、Durability
  - [Codd's Twelve Rules](https://en.wikipedia.org/wiki/Codd%27s_12_rules) - リレーショナルデータベース管理システムが関連すると見なされるために必要なことを定義するために Edgar F. Codd によって提案された 13 の規則のセット
  - [Database normalization](https://en.wikipedia.org/wiki/Database_normalization) - リレーショナルデータベースのデータ冗長性を最小化するために、列（属性）およびテーブル（リレーション）を編成するプロセス
- 言語とダイアレクト
  - [Structured Query Language (SQL)](https://en.wikipedia.org/wiki/SQL) - リレーショナルデータベース管理システムに保持されているデータを管理するために使用されるドメイン固有言語
    - コマンドカテゴリ
      - DDL - データ定義言語
      - DQL - データクエリ言語
      - DML - データ操作言語
      - DCL - データ制御言語
      - TCL - トランザクション制御言語
    - [SQL Join](https://en.wikipedia.org/wiki/Join_(SQL)) - リレーショナルデータベース内の 1 つ以上のテーブルから列を組み合わせるクローズ
    - [Aggregate function](https://en.wikipedia.org/wiki/Aggregate_function) - 複数の行の値がグループ化されて、単一の要約値を形成する関数
  - [Transact-SQL](https://docs.microsoft.com/en-us/sql/t-sql/language-reference) - SQL Server をプログラムおよび管理するために使用される SQL への独自の拡張

### データベース管理システム（DBMS）

- クライアント サーバー RDBMS
  - [PostgreSQL](https://www.postgresql.org/) - ユニバーシティ オブ カリフォルニア バークレー コンピュータ サイエンス部門で開発されたバージョン 4.2 に基づく POSTGRES に基づくオブジェクト関連のデータベース管理システム（ORDBMS）
  - [MySQL](https://www.mysql.com/) - 最も人気のあるオープンソース SQL データベース管理システムであり、Oracle Corporation によって開発、配布、サポートされています
  - [MariaDB community Server](https://mariadb.com/products/community-server/) - MySQL のコミュニティが開発したオープンソースリレーショナルデータベースのフォーク
- 分散 SQL
  - [TiDB](https://www.pingcap.com/tidb/) - ハイブリッドトランザクション分析処理（HTAP）ワークロードをサポートするオープンソース分散 SQL データベース
- 組み込み/インプロセス
  - [SQLite](https://www.sqlite.org/index.html) - 小さく、高速で、自己完結型で、高信頼性とフル機能のデータベースエンジンを実装する C 言語ライブラリ
  - [PGlite](https://pglite.dev/) - ブラウザ、Node.js、および Bun でデータベースを実行できるようにする TypeScript/JavaScript クライアントライブラリにパッケージ化された WASM ビルド
  - [DuckDB](https://duckdb.org/) - インプロセス SQL OLAP データベース管理システム
- ストレージエンジン
  - [Storage Engine](https://en.wikipedia.org/wiki/Storage_engine) - データベース管理システムが、データベースからデータを作成、読み取り、更新、削除（CRUD）するために使用するソフトウェアコンポーネント
  - [InnoDB](https://dev.mysql.com/doc/refman/8.0/en/innodb-storage-engine.html) - MySQL および MariaDB 用のトランザクショナルストレージエンジン

### クラウドおよび管理サービス

- 管理データベースサービス
  - [Amazon RDS](https://aws.amazon.com/rds/) - クラウドでデータベースを設定、操作、スケーリングすることを簡単にする管理サービスのコレクション
  - [Amazon Aurora](https://aws.amazon.com/rds/aurora/) - PostgreSQL、MySQL、および DSQL 用にグローバルスケールで高性能と可用性を提供する完全に管理されたリレーショナルデータベースエンジン
  - [Azure SQL Database](https://azure.microsoft.com/en-us/products/azure-sql/database/) - クラウド用に構築された知的でスケーラブルなリレーショナルデータベースサービス
  - [Azure HorizonDB](https://azure.microsoft.com/en-us/products/horizondb) - 最大 3,072 vCores と 128 TB ストレージをサポートするスケールアウトアーキテクチャを備えた、高スループット AI 対応アプリケーション向けに設計された完全に管理された PostgreSQL 互換クラウドネイティブデータベースサービス
  - [Google Cloud SQL](https://cloud.google.com/sql) - Google Cloud 上のリレーショナルデータベースを設定、保守、管理、実装するのに役立つ完全に管理されたデータベースサービス
  - [Neon](https://neon.tech/) - サーバーレスで耐障害性があり、スケーラブルな Postgres。寛容な無料層を備えています
  - [Turso](https://turso.tech/) - SQLite の完全な書き直しで構築された SQLite 互換のデータベース。どこでも実行するのに十分に軽く、十分に高速です

### 接続とツール

- 接続 API と ORM
  - [Connection pool](https://en.wikipedia.org/wiki/Connection_pool) - 将来のデータベースへのリクエストが必要な場合に接続を再利用できるように、保持されるデータベース接続のキャッシュ
  - [ODBC](https://en.wikipedia.org/wiki/Open_Database_Connectivity) - データベース管理システムにアクセスするための標準アプリケーションプログラミングインターフェイス
  - [JDBC](https://www.oracle.com/java/technologies/javase/javase-tech-database.html) - Java プログラミング言語からほぼすべてのテーブル形式のデータソースにアクセスできるようにする API
    - [Jdbi](https://jdbi.org/) - Java データベース接続 API をより慣用的な方法で使用する方法を提供するライブラリ
  - [Object-Relational Mapping (ORM)](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping) - オブジェクト指向プログラミング言語を使用して、互換性のない型システム間でデータを変換するプログラミング技術
    - [Prisma](https://www.prisma.io/) - 次世代 ORM。データベース付きの信頼性とスケーラビリティに優れたアプリケーションを簡単に構築できます
    - [Drizzle ORM](https://orm.drizzle.team/) - 開発者の経験を念頭に置いた軽量でパフォーマンスの高い TypeScript ORM
    - [Hibernate](https://hibernate.org/orm/) - Java プログラミング言語用のオブジェクト関連マッピングツール
    - [SQLAlchemy](https://www.sqlalchemy.org/) - Python SQL ツールキットおよびオブジェクトリレーショナルマッパー。アプリケーション開発者に SQL の完全なパワーと柔軟性を提供します
    - [GORM](https://gorm.io/) - Golang 用の素晴らしい ORM ライブラリであり、開発者に優しいことを目指しています
    - [XORM](https://xorm.io/) - Go 用のシンプルで強力な ORM
    - [Diesel](https://diesel.rs/) - Rust 用の安全で拡張可能な ORM とクエリビルダー
- 開発者ライブラリとドライバー
  - [Vanna.AI](https://vanna.ai/) - 検索拡張を使用して LLM を使用して正確な SQL クエリを生成するのに役立つ Python パッケージ
  - [Psycopg](https://www.psycopg.org/) - Python プログラミング言語用の最も一般的な PostgreSQL アダプター
- データベースクライアントと IDE
  - [pgAdmin](https://www.pgadmin.org/) - PostgreSQL の最も一般的でフル機能のオープンソース管理および開発プラットフォーム
  - [SSMS (SQL Server Management Studio)](https://learn.microsoft.com/en-us/sql/ssms/sql-server-management-studio-ssms) - SQL Server から Azure SQL Database まで、あらゆる SQL インフラストラクチャを管理するための統合環境
  - [DB Browser for SQLite](https://sqlitebrowser.org/) - SQLite と互換性のあるデータベースファイルを作成、設計、編集するための高品質でビジュアルなオープンソースツール
  - [Azure Data Studio](https://azure.microsoft.com/en-us/products/data-studio/) - データランドスケープを簡略化するために設計された最新のオープンソースのクロスプラットフォームハイブリッドデータ分析ツール
  - [Beekeeper Studio](https://www.beekeeperstudio.io/) - 最新で使いやすく、見栄えの良い SQL エディターおよびデータベースマネージャー
- コマンドラインおよびデプロイメントユーティリティ
  - [sqlcmd utility](https://learn.microsoft.com/en-us/sql/tools/sqlcmd/sqlcmd-utility) - Transact-SQL ステートメントおよびスクリプト用のアドホック対話的実行のコマンドラインユーティリティ。および T-SQL スクリプティングタスクの自動化
  - [sqlpackage](https://learn.microsoft.com/en-us/sql/tools/sqlpackage/sqlpackage) - いくつかのデータベース開発タスクを自動化するコマンドラインユーティリティ
  - [DAC (Data-tier Applications)](https://learn.microsoft.com/en-us/sql/relational-databases/data-tier-applications/data-tier-applications) - ユーザーのデータベースに関連する SQL Server オブジェクトのすべてを定義する論理データベース管理概念
  - [pgroll](https://pgroll.com/) - PostgreSQL のゼロダウンタイムで反転可能なスキーマ移行ツール
- 監視と分析
  - [pgBadger](https://pgbadger.darold.net/) - 速度のために構築された PostgreSQL ログアナライザーであり、完全に詳細なレポートと専門的なレンダリング
- パフォーマンスベンチマーク
  - [TPC-H](https://www.tpc.org/tpch/) - ビジネス指向のアドホッククエリおよびデータ変更に対する大量のデータを通じてデータベースシステムを評価する意思決定サポートベンチマーク
  - [TPC-DS](https://www.tpc.org/tpcds/) - 複雑なデータベースクエリとビッグデータ環境をシミュレートして、システムパフォーマンスと価格/パフォーマンスメトリクスを評価する意思決定サポートベンチマーク

## NoSQL と特殊なデータベース

:::note[関連する DX 推進スキル標準のスキル]

- 2\. データ整備・活用 > 2\.3 データマネジメント > データエンジニアリング（設計・収集・統合・提供）

:::

### NoSQL データモデル

- [Object-relational impedance mismatch](https://en.wikipedia.org/wiki/Object%E2%80%93relational_impedance_mismatch) - オブジェクト指向プログラミング言語またはスタイルで書かれたプログラムでリレーショナルデータベース管理システム（RDBMS）が使用されている場合、しばしば遭遇する概念的および技術的な困難
- ドキュメントデータベース
  - [MongoDB](https://www.mongodb.com/) - アプリケーション開発とスケーリングの容易さのために設計されたドキュメントデータベース
  - [DocumentDB](https://documentdb.io/) - 最新のアプリケーション用に構築された強力でスケーラブルなオープンソースドキュメントデータベース
- キー値ストア
  - [etcd](https://etcd.io/) - 分散システムの最も重要なデータのための分散で信頼性の高いキー値ストア
  - [Redis](https://redis.io/) - 数百万の開発者によってキャッシュ、ベクトルデータベース、ドキュメントデータベース、ストリーミングエンジンとして使用される in-memory データストア
  - [Dragonfly](https://www.dragonflydb.io/) - Redis の代替ドロップイン
- グラフデータベース
  - [Neo4j](https://neo4j.com/) - 無制限のスケール、セキュリティ、データ整合性を備えた高速グラフデータベース
    - [Cypher](https://neo4j.com/docs/cypher-manual/current/introduction/) - プロパティグラフデータベース用の宣言型クエリ言語
  - [LadybugDB](https://ladybugdb.com/) - 高度に規制された業界向けに構築された組み込み列グラフデータベース
- ワイド列データベース
  - [Apache Cassandra](https://cassandra.apache.org/) - オープンソースの NoSQL 分散データベース
  - [Apache HBase](https://hbase.apache.org/) - Hadoop データベース。分散型でスケーラブルなビッグデータストア
  - [ClickHouse](https://clickhouse.com/) - リアルタイム分析用に設計された高速でオープンソースの OLAP（オンライン分析処理）データベース管理システム

### ベクトルと AI データベース

- 概念
  - [HNSW (Hierarchical Navigable Small Worlds)](https://www.pinecone.io/learn/series/faiss/hnsw/) - ベクトル類似性検索のための最高パフォーマンスのインデックス
- ベクトルデータベース
  - [Pinecone](https://www.pinecone.io/) - あらゆる規模で関連する結果を提供するために構築されたベクトルデータベース
  - [pgvector](https://github.com/pgvector/pgvector) - Postgres のオープンソースベクトル類似性検索
  - [ElasticSearch vector database](https://www.elastic.co/elasticsearch/vector-database) - 世界で最も広く展開されているオープンソースベクトルデータベース
  - [Weaviate](https://weaviate.io/) - AI アプリケーション開発を簡素化するオープンソースベクトルデータベース
  - [Milvus](https://zilliz.com/what-is-milvus) - 数十億のベクトルを処理するために構築された高性能なオープンソースベクトルデータベース
  - [Chroma](https://www.trychroma.com/) - AI ネイティブオープンソース埋め込みデータベース
  - [Qdrant](https://qdrant.tech/) - あらゆる規模での AI 検索構築を支援するために Rust で完全に構築された高性能ベクトル検索エンジン

### クラウド NoSQL サービス

- マルチモデルデータベース
  - [Azure Cosmos DB](https://azure.microsoft.com/en-us/products/cosmos-db/) - 最新のアプリケーション開発用の完全に管理されたサーバーレス分散データベース
  - [Amazon DynamoDB](https://aws.amazon.com/dynamodb/) - あらゆる規模で高性能アプリケーションを実行するために設計された完全に管理された、サーバーレス、キー値 NoSQL データベース
- ドキュメントデータベース
  - [Cloud Firestore](https://firebase.google.com/docs/firestore) - Apple、Android、Web アプリがネイティブ SDK を通じて直接アクセスできるクラウドホストの NoSQL データベース
- グラフデータベース
  - [Amazon Neptune](https://aws.amazon.com/neptune/) - 高度に接続されたデータセットで動作するアプリケーションを簡単に構築および実行できる高速で信頼性が高く、完全に管理されたグラフデータベースサービス
- ワイド列データベース
  - [Google Cloud Bigtable](https://cloud.google.com/bigtable/) - 大規模な分析および運用ワークロード用の NoSQL ワイド列データベースサービス

## データ処理とメッセージング

:::note[関連する DX 推進スキル標準のスキル]

- 2\. データ整備・活用 > 2\.3 データマネジメント > データエンジニアリング（設計・収集・統合・提供）

:::

### エンタープライズ統合

- [Enterprise Integration Patterns](https://www.enterpriseintegrationpatterns.com/) - 分散アプリケーションの設計と構築、または既存のパターン言語である 65 統合パターンの支援
- [Apache Camel](https://camel.apache.org/) - 様々なシステムの消費または生産するデータを統合するすばやく簡単に統合できるオープンソース統合フレームワーク

### メッセージキューイングとイベントストリーミング

- 概念
  - [Message Brokers](https://en.wikipedia.org/wiki/Message_broker) - 送信者の正式なメッセージング プロトコルから受信者の正式なメッセージング プロトコルにメッセージを翻訳する中間コンピュータプログラムモジュール
  - [Dead-letter queue](https://en.wikipedia.org/wiki/Dead_letter_queue) - 正常に配信または処理できなかったメッセージを保存するためにメッセージキューイングシステムで使用される特殊なキュー
- メッセージングとストリーミングプラットフォーム（ソフトウェア）
  - [Apache Kafka](https://kafka.apache.org/) - オープンソースの分散イベントストリーミングプラットフォーム
    - Apache Kafka エコシステム
      - [Kafbat UI](https://kafbat.io/) - Apache Kafka クラスタを監視および管理するために設計された多機能で、高速で、軽量で柔軟な Web インターフェイス
  - [RabbitMQ](https://www.rabbitmq.com/) - 信頼性の高い成熟したメッセージングおよびストリーミングブローカー
- クラウドサービス
  - [Amazon Kinesis](https://aws.amazon.com/kinesis/) - リアルタイムストリーミングデータを簡単に収集、処理、分析できるようにするサービス
  - [Azure Event Hubs](https://azure.microsoft.com/en-us/products/event-hubs/) - 秒単位で数百万のイベントを取り込むことができるスケーラビリティに優れた信頼性の高いイベントストリーミングプラットフォーム
  - [Azure Service Bus](https://azure.microsoft.com/en-us/products/service-bus/) - メッセージキューと発行購読トピック付きの完全に管理されたエンタープライズメッセージブローカー

### バッチ処理（ETL/ELT）

- ベースフレームワーク
  - [Apache Hadoop](https://hadoop.apache.org/) - 大規模なデータセットの分散処理を可能にするフレームワーク
    - [mrjob](https://mrjob.readthedocs.io/en/latest/) - フレームワーク上で実行される Python プログラムを書く最も簡単なルート
  - [Apache Spark](https://spark.apache.org/) - 大規模データ分析の統合エンジン
    - [PySpark](https://spark.apache.org/docs/latest/api/python/index.html) - エンジン用の Python API。言語でビッグデータ処理を許可します
  - [RAY](https://www.ray.io/) - AI と Python ワークロードのスケーリングを簡単にするオープンソース統合計算フレームワーク
  - [Joblib](https://joblib.readthedocs.io/en/stable/) - Python で軽量なパイプラインを提供するためのツールのセット
- ワークフロー編成および ETL ツール（ソフトウェア）
  - [Apache NiFi](https://nifi.apache.org/) - データを処理および配布する簡単で強力で信頼性の高いシステム
  - [Apache Airflow](https://airflow.apache.org/) - ワークフローをプログラムで作成、スケジュール、監視するプラットフォーム
  - [dbt](https://www.getdbt.com/) - チームが大規模に信頼できるガバナンスの効いたデータを提供できるようにする、信頼できるデータ配信のための統合プラットフォーム
  - [Dagu](https://docs.dagu.sh/) - ラップトップから分散クラスタにスケーリングする単一のバイナリからタスクをオーケストレーションする宣言的でファイルベースの自己完結型プラットフォームを提供するローカルファーストワークフローエンジン
- 管理された ETL およびデータ統合サービス
  - [Azure Data Factory](https://azure.microsoft.com/en-us/products/data-factory/) - スケールアウトサーバーレスデータ統合およびデータ変換用のクラウド ETL サービス
  - [AWS Glue](https://aws.amazon.com/glue/) - 複数のソースからデータを検出、準備、移動、統合することを容易にするサーバーレスデータ統合サービス
  - [Google Cloud Data Fusion](https://cloud.google.com/data-fusion) - ユーザーが ETL/ELT データパイプラインを効率的に構築および管理するのに役立つ完全に管理されたクラウドネイティブデータ統合サービス

### ストリーム処理

- ストリーム処理エンジン（ソフトウェア）
  - [Spark Structured Streaming](https://spark.apache.org/streaming/) - Spark SQL エンジン上に構築されたスケーラブルで耐障害性のあるストリーム処理エンジン
  - [Apache Storm](https://storm.apache.org/) - 無料でオープンソースの分散リアルタイム計算システム
  - [Apache Flink](https://flink.apache.org/) - 非バウンドおよびバウンドデータストリーム上の状態計算用のフレームワークおよび分散処理エンジン
- クラウドサービス
  - [Google Cloud Dataflow](https://cloud.google.com/products/dataflow) - 自動スケーリングとバッチ処理を通じてレイテンシ、処理時間、コストを最小化する完全に管理されたストリーミング分析サービス

## データ分析と検索

:::note[関連する DX 推進スキル標準のスキル]

- 2\. データ整備・活用 > 2\.1 データ・AI の戦略的活用 > データ・AI 理解・活用

:::

### 検索エンジンとプラットフォーム

- Web 検索エンジン
  - [Google Search](https://www.google.com/) - Webページ、画像、ビデオなど、世界の情報を検索できる検索エンジン
  - [DuckDuckGo](https://duckduckgo.com/) - あなたを追跡しない検索エンジン
- 回答エンジン
  - [Wolfram|Alpha](https://www.wolframalpha.com/) - 革新的なアルゴリズム、ナレッジベース、AI テクノロジーを使用して専門家レベルの回答を計算する計算知識エンジン
  - [Perplexity AI](https://www.perplexity.ai/) - あらゆる質問に正確で信頼できるリアルタイムの回答を提供する AI 駆動型回答エンジン
- 検索プラットフォームとツール
  - [Azure AI Search](https://azure.microsoft.com/en-us/products/ai-services/ai-search) - エンタープライズおよび Web コンテンツへのアクセスを統合し、AI 駆動検索と検索拡張生成を行う完全に管理されたクラウドホスト型サービス
    - [Reciprocal Rank Fusion (RRF)](https://learn.microsoft.com/en-us/azure/search/hybrid-search-ranking) - 複数の以前に実行されたクエリからの検索スコアを評価して、統一された結果セットを生成するアルゴリズム
    - [BM25 relevance scoring](https://learn.microsoft.com/en-us/azure/search/index-similarity-and-scoring) - フルテキスト検索の一致ドキュメントの関連度スコアを計算するために使用される Okapi BM25 ランキング関数
  - [ElasticSearch](https://www.elastic.co/elasticsearch/) - オープンソースの分散型、RESTful 検索と分析エンジン。スケーラブルなデータストアおよびベクトルデータベース
    - [Painless](https://www.elastic.co/guide/en/elasticsearch/painless/current/index.html) - エンジンでの使用専用に設計されたシンプルで安全なスクリプト言語
    - [ES|QL](https://www.elastic.co/docs/explore-analyze/query-filter/languages/esql) - エンジンに保存されたデータをフィルタ、変換、分析できるパイプライン言語
    - [Kibana](https://www.elastic.co/kibana) - エンジンに保存されているデータをクエリ、分析、可視化、管理するためのオープンソースインターフェイス
    - [Kibana Query Language](https://www.elastic.co/guide/en/kibana/current/kuery-query.html) - データをフィルタリングするためのシンプルなテキストベースのクエリ言語
  - [Apache Solr](https://solr.apache.org/) - Apache Lucene 上に構築された人気のあり、かなり高速でオープンソースのエンタープライズ検索プラットフォーム
    - [Apache Lucene](https://lucene.apache.org/) - 強力なインデックス作成と検索機能を提供する Java ライブラリ
  - [Faiss](https://faiss.ai/) - 高密度ベクトルの効率的な類似性検索とクラスタリングのためのライブラリ
  - [Meilisearch](https://www.meilisearch.com/) - アプリ、Web サイト、ワークフローに簡単にフィットする高速検索エンジン
  - [TypeSense](https://typesense.org/) - 高速で、オープンソースで、喜ばしい検索体験を構築するための検索型エンジン

### 分析エンジンとプラットフォーム

- ソフトウェアと管理サービス
  - [Apache Hive](https://hive.apache.org/) - 分散で耐障害性のあるデータウェアハウスシステムであり、大規模な規模での分析を実現します
  - [Presto](https://prestodb.io/) - あらゆる規模での高速で信頼できる効率的な分析のために設計された分散 SQL クエリエンジン
  - [Trino](https://trino.io/) - 1 つ以上の異機種データソースに分散する大規模なデータセットをクエリするように設計された分散 SQL クエリエンジン
  - [Amazon EMR](https://aws.amazon.com/emr/) - 大規模な分散データ処理ジョブ、対話型 SQL クエリ、機械学習アプリケーション実行用のクラウドビッグデータプラットフォーム
  - [Amazon Redshift](https://aws.amazon.com/redshift/) - クラウドの完全に管理されたペタバイトスケールデータウェアハウスサービス
  - [Amazon Athena](https://aws.amazon.com/athena/) - Amazon S3 およびその他のデータストアのデータを標準 SQL を使用して簡単に分析できるインタラクティブクエリサービス
  - [Databricks](https://www.databricks.com/product/data-intelligence-platform) - 組織全体がデータと AI を使用できるようにするプラットフォーム
    - [Declarative Automation Bundles](https://docs.databricks.com/aws/en/dev-tools/bundles/) - 以前は Databricks Asset Bundles として知られていた、データと AI プロジェクト用のソフトウェア エンジニアリング ベストプラクティス（ソースコントロール、コードレビュー、テスト、継続的統合と配信（CI/CD））の採用を促進するツール
  - [Snowflake](https://www.snowflake.com/en/) - 分析、アプリケーション、AI を単一の完全に管理されたプラットフォームで実行するための近くの無制限のスケールでデータを動員する AI データクラウド
  - [Microsoft Fabric](https://www.microsoft.com/en-us/microsoft-fabric) - データ移動、データレイク、データエンジニアリング、データ統合、データサイエンス、リアルタイム分析、ビジネスインテリジェンスなどの全サービス機能を備えたエンドツーエンド分析ソリューション
    - [Microsoft OneLake](https://learn.microsoft.com/en-us/fabric/onelake/) - 組織全体向けの単一で統一された論理的なデータレイク
    - [Real-Time Intelligence](https://learn.microsoft.com/en-us/fabric/real-time-intelligence/overview) - 動きのストリーミングデータから洞察を抽出するサービス。摂取、変換、ストレージ、分析、可視化、および時間ベースイベントでのリアルタイムアクション用のエンドツーエンドソリューション
    - [Rayfin CLI](https://learn.microsoft.com/en-us/fabric/apps/cli-reference) - プロジェクトスキャフォルディング、リモート配置、構成管理機能を備えた Fabric アプリケーションを作成、デプロイ、管理するためのコマンドラインツール
    - [Lakehouse vs Data Warehouse](https://learn.microsoft.com/en-us/fabric/fundamentals/decision-guide-lakehouse-warehouse) - データ量、構造、処理要件に基づいてレイクハウスとデータウェアハウスを選択するためのガイド
  - [Azure Synapse Analytics](https://azure.microsoft.com/en-us/products/synapse-analytics/) - データウェアハウスおよびビッグデータシステム全体で洞察への時間を加速するエンタープライズ分析サービス
  - [Google Cloud BigQuery](https://cloud.google.com/bigquery) - データから価値を最大化するのに役立つ、マルチエンジン、マルチフォーマット、マルチクラウド向けに設計された完全に管理された AI 対応データ分析プラットフォーム
  - [Amazon QuickSight](https://aws.amazon.com/quicksight/) - ユーザーがデータを分析し、可視化を作成し、様々なエンタープライズデータソースから洞察を得ることができる AI 駆動型ビジネスインテリジェンスサービス

### セマンティックレイヤー

- [Cube](https://cube.dev/) - AI エージェントをデプロイしてデータをモデル化、分析、レポートするエージェント分析プラットフォーム
- [Open Semantic Interchange (OSI)](https://open-semantic-interchange.org/) - 分析、AI、BI プラットフォーム全体でセマンティックメタデータ交換を可能にするセマンティックモデル交換の普遍的な標準
