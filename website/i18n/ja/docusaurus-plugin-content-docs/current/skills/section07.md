# 07 - 開発者の基礎スキル

## ソフトウェア開発手法

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > ソフトウェア開発プロセス
- 5\. パーソナルスキル > 5\.2 コンセプチュアルスキル > 適応力

:::

### アジャイル開発

- [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development) - The Agile Alliance が合意した価値観と原則を反映した、ソフトウェア開発アプローチの総称です
  - [Agile Manifesto](https://agilemanifesto.org/) - プロセスやツールよりも個人と対話を、包括的なドキュメントよりも動くソフトウェアを、契約交渉よりも顧客との協調を、計画に従うことよりも変化への対応を重視することで、より良いソフトウェア開発の方法を宣言した文書です
  - [Software prototyping](https://en.wikipedia.org/wiki/Software_prototyping) - 開発中のソフトウェアプログラムの不完全なバージョン、すなわちソフトウェアアプリケーションのプロトタイプを作成する活動です
  - [Minimum viable product](https://en.wikipedia.org/wiki/Minimum_viable_product) - 将来のプロダクト開発のためのフィードバックを提供できる初期の顧客が使用できるだけの、十分な機能を備えたプロダクトのバージョンです
  - [User story](https://en.wikipedia.org/wiki/User_story) - ソフトウェアシステムの機能を非公式な自然言語で記述したものです
    - [Card, Conversation, Confirmation](https://ronjeffries.com/xprog/articles/expcardconversationconfirmation/) - Card が要件を表すトークンであり、Conversation が詳細を引き出す場であり、Confirmation がストーリーの受け入れテストであるプラクティスです
  - [INVEST of PBI](https://en.wikipedia.org/wiki/INVEST_(mnemonic)) - 質の高いプロダクトバックログ項目 (PBI) の特徴を思い出すために Bill Wake が作成した記憶術です
    - Independent：PBI は自己完結しているべきです
    - Negotiable：草案の PBI は明示的な契約ではなく、議論の余地を残すべきです
    - Valuable：PBI はステークホルダーに価値をもたらさなければなりません
    - Estimable：PBI のサイズは常に見積もれなければなりません
    - Small：PBI はある程度の精度で計画・タスク化・順序付けができなくなるほど大きくあってはいけません
    - Testable：PBI またはその関連する記述は、テスト開発を可能にするために必要な情報を提供しなければなりません
- 主要な方法論
  - [Extreme Programming](https://en.wikipedia.org/wiki/Extreme_programming) - ソフトウェアの品質と、顧客要件の変化への対応力を向上させることを目的としたソフトウェア開発方法論です
  - [Scrum](https://www.scrum.org/learning-series/what-is-scrum/) - 人々が生産的かつ創造的に、可能な限り最高価値のプロダクトを届けながら、複雑で適応を要する問題に対処できるフレームワークです
  - [Acceptance test-driven development](https://en.wikipedia.org/wiki/Acceptance_test-driven_development) - ビジネス顧客、開発者、テスターの間のコミュニケーションに基づいた開発方法論です
    - [Three Amigos](https://agilealliance.org/glossary/three-amigos/) - プロダクトオーナー、開発者、品質テスターが集まり、プロジェクトのスコープについて明確化を図るミーティングです
  - [Behavior driven development](https://en.wikipedia.org/wiki/Behavior-driven_development) - ソフトウェアプロジェクトにおいて、開発者、品質保証テスター、顧客代表者間の協調を促すアジャイルソフトウェア開発プロセスです
    - [Specification by example](https://en.wikipedia.org/wiki/Specification_by_example) - 抽象的な記述の代わりに現実的な例を用いて要件を捉え説明することに基づいて、ソフトウェアプロダクトの要件とビジネス指向の機能テストを定義する協調的アプローチです
- 主要なプラクティス
  - [Refactoring](https://refactoring.com/) - 既存のコードベースを再構築するための規律あるテクニックで、外部の振る舞いを変えずに内部構造を変更します
    - [Software rot](https://en.wikipedia.org/wiki/Software_rot) - ソフトウェアが時間の経過とともに品質、パフォーマンス、または有用性が劣化していく傾向です
    - [Technical debt](https://en.wikipedia.org/wiki/Technical_debt) - より時間のかかるより良いアプローチを使う代わりに、今簡単な（限定的な）解決策を選ぶことで生じる追加的な手戻りの暗黙的なコストを反映した、ソフトウェア開発における概念です
      - [Technical Debt Ratio](https://brainhub.eu/library/technical-debt-ratio) - コードベース全体をゼロから開発するコストと比較して、既存の技術的負債を修正するコストを測定するために使用されるメトリクスです
  - [Test driven development](https://en.wikipedia.org/wiki/Test-driven_development) - ソフトウェアが完全に開発される前にソフトウェア要件をテストケースに変換し、すべてのテストケースに対してソフトウェアを繰り返しテストすることであらゆるソフトウェア開発を追跡する、ソフトウェア開発プロセスです
- ATDD/BDD 向けツール
  - [Gauge](https://gauge.org/index.html) - 受け入れテストの作成と保守の手間を取り除く、無料でオープンソースのテスト自動化フレームワークです
  - [Cucumber](https://cucumber.io/) - プレーンテキストで書かれた実行可能な仕様を読み取り、ソフトウェアがその仕様どおりに動作することを検証することで、ビヘイビア駆動開発 (BDD) をサポートするツールです
    - [Gherkin Syntax](https://cucumber.io/docs/gherkin/) - Cucumber が理解できるほど構造化されたプレーンテキストにするための一連の文法規則です
    - [cucumber-ruby](https://github.com/cucumber/cucumber-ruby) - Cucumber の Ruby 実装です
  - [RSpec](https://rspec.info/) - ビヘイビア駆動開発 (BDD) 向けに作成された、Ruby プログラミング言語用のテストツールです
  - [Behave](https://behave.readthedocs.io/en/latest/) - Python コードに裏打ちされた自然言語スタイルで書かれたテストを使用する、Python でのビヘイビア駆動開発 (BDD) 向けのツールです

### リーン開発

- [Lean software development](https://en.wikipedia.org/wiki/Lean_software_development) - リーン生産方式の原則と実践をソフトウェア開発領域に翻案したものです
  - [Continual improvement process](https://en.wikipedia.org/wiki/Continual_improvement_process) - プロダクト、サービス、またはプロセスを改善するための継続的な取り組みです
  - [OODA loop](https://en.wikipedia.org/wiki/OODA_loop) - 利用可能な情報をフィルタリングし、それを文脈に当てはめ、より多くのデータが利用可能になるにつれて変更が可能であることを理解しながら、迅速に最も適切な意思決定を行うことに焦点を当てた 4 段階の意思決定アプローチです
- [Lean manufacturing](https://en.wikipedia.org/wiki/Lean_manufacturing) - 生産システム内の時間だけでなく、サプライヤーからおよび顧客への応答時間を削減することを主な目的とした生産方式です
  - The 7 Wastes：顧客に価値を付加しない活動です
  - [Value-stream mapping](https://en.wikipedia.org/wiki/Value-stream_mapping) - プロダクトまたはサービスが特定のプロセスの開始から顧客に届くまでの一連の出来事について、現状を分析し将来の状態を設計するリーンマネジメント手法です
  - [ECRS (Eliminate, Combine, Rearrange, Simplify)](https://www.creativesafetysupply.com/glossary/ecrs/) - 生産ラインへの解決策の即時適用を可能にする柔軟な継続的改善戦略です
- [Toyota Production System](https://en.wikipedia.org/wiki/Toyota_Production_System) - トヨタが開発した経営哲学と実践から構成される、統合された社会技術システムです
  - [Kanban](https://en.wikipedia.org/wiki/Kanban_(development)) - 人間系全体で作業を管理・改善するためのリーン手法です
  - [Kaizen](https://en.wikipedia.org/wiki/Kaizen) - CEO から組立ライン作業員まで全従業員が関わる、あらゆる機能の継続的かつ漸進的な改善に焦点を当てた哲学です
  - [Autonomation](https://en.wikipedia.org/wiki/Autonomation) - プロセスを部分的に自動化し、問題が検出されると自動的に停止するように機器を設計することで、オペレーターが問題を即座に修正できるようにする実践です
  - [Heijunka](https://en.wikipedia.org/wiki/Heijunka) - 生産量と製品構成の両方を平準化することで生産を平滑化する手法です
  - [Genchi Genbutsu](https://en.wikipedia.org/wiki/Genchi_Genbutsu) - 状況を真に理解するには、作業が行われている「現場」に行き、プロセスを観察し、自ら事実を確認する必要があるとする原則です
  - [Andon (manufacturing)](https://en.wikipedia.org/wiki/Andon_(manufacturing)) - 生産ラインの状態を示すために使用される視覚的管理システムです
  - [Muda (Japanese term)](https://en.wikipedia.org/wiki/Muda_(Japanese_term)) - リソースの最適な配分からの逸脱を表す 3 種類のうちの 1 つとして、リーンプロセスマネジメントにおける重要な概念であり、無駄、無用、浪費を意味します
- [Theory of Constraints](https://en.wikipedia.org/wiki/Theory_of_constraints) - 管理可能などんなシステムも、ごく少数の制約によってその目標達成がより制限されているとみなす経営パラダイムです

### DevOps とエンジニアリング生産性

- 概念
  - [CALMS framework](https://www.atlassian.com/devops/frameworks/calms-framework) - Culture（文化）、Automation（自動化）、Lean（リーン）、Measurement（測定）、Sharing（共有）の略で、DevOps へのアプローチのための概念モデルです
- 文化的・組織的な基盤
  - [Generative organizational culture](https://dora.dev/capabilities/generative-organizational-culture/) - 高度な信頼と協調、ミッションに対する責任の共有意識、そして学習と継続的改善への注力を特徴とする文化の一種です
- 技術的なプラクティス
  - [Feature Toggles](https://martinfowler.com/articles/feature-toggles.html) - コードを変更せずにシステムの動作を修正できるようにする強力なテクニックです
  - [Blue-Green Deployment](https://martinfowler.com/bliki/BlueGreenDeployment.html) - Blue と Green と呼ばれる 2 つの同一の本番環境を稼働させることで、ダウンタイムとリスクを削減するテクニックです
  - [Canary Release](https://martinfowler.com/bliki/CanaryRelease.html) - 変更を全インフラストラクチャに展開する前に、少数のユーザーサブセットに徐々に展開することで、本番環境に新しいソフトウェアバージョンを導入するリスクを削減するテクニックです
  - [Everything as code](https://docs.aws.amazon.com/wellarchitected/latest/devops-guidance/everything-as-code.html) - ネットワークインフラストラクチャ、ドキュメント、構成を含む開発ライフサイクルのあらゆる側面の保守性とスケーラビリティを向上させるために、バージョン管理、テスト、デプロイメントと同じ原則を適用しようとするソフトウェア開発プラクティスです

### リリース自動化

- [semantic-release](https://semantic-release.gitbook.io/semantic-release) - 形式化されたコミットメッセージに基づいて次のバージョン番号を決定し、リリースノートを生成し、パッケージを公開する、完全に自動化されたバージョン管理・パッケージ公開ツールです
- [Release Please](https://github.com/googleapis/release-please) - Conventional Commits に基づいて、プロジェクトの変更履歴生成、GitHub リリースの作成、バージョンアップを自動化するツールです
- [GoReleaser](https://goreleaser.com/) - Go プロジェクト向けのリリース自動化ツールです
- [Changesets](https://github.com/changesets/changesets) - モノレポに重点を置いたバージョニングと変更履歴を管理するツールです

### リリースの慣習と標準

- [keep a changelog](https://keepachangelog.com/) - プロジェクトの各バージョンにおける注目すべき変更点を、時系列順に整理してまとめたファイルです
- [Conventional Commits](https://www.conventionalcommits.org/) - 明示的なコミット履歴を作成するための簡単なルールセットを提供する、コミットメッセージ上の軽量な規約です
- [Semantic Versioning](https://semver.org/) - バージョン番号の割り当て方と増分方法を規定する、シンプルなルールと要件のセットです
- [CalVer](https://calver.org/) - 恣意的な番号の代わりに、プロジェクトのリリースカレンダーに基づいたバージョニング規約です

## オープンエコシステム

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > チーム開発

:::

### オープンソース

- [Open Source Initiative](https://opensource.org/) - オープンソースソフトウェアとそのコミュニティの推進と保護に専念する非営利団体です
- 主要なパブリックライセンス
  - [MIT](https://en.wikipedia.org/wiki/MIT_License) - 1980 年代後半にマサチューセッツ工科大学 (MIT) で生まれた寛容なソフトウェアライセンスです
  - [BSD](https://en.wikipedia.org/wiki/BSD_licenses) - 対象ソフトウェアの使用と配布に最小限の制限を課す、寛容なフリーソフトウェアライセンスのファミリーです
  - [Apache](https://en.wikipedia.org/wiki/Apache_License) - Apache Software Foundation (ASF) によって書かれた寛容なフリーソフトウェアライセンスで、ロイヤリティを気にすることなくソフトウェアを使用、配布、修正することをユーザーに許可します
  - [GPL](https://en.wikipedia.org/wiki/GNU_General_Public_License) - ソフトウェアを実行、研究、共有、修正する自由をエンドユーザーに保証する、広く使用されている一連のフリーソフトウェアライセンス、すなわちコピーレフトライセンスです
  - [LGPL](https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License) - Free Software Foundation (FSF) が公開したフリーソフトウェアライセンスで、開発者や企業が自身の（プロプライエタリなものであっても）ソフトウェアに、このライセンスの下でリリースされたソフトウェアコンポーネントを使用・統合する際、自身のコンポーネントのソースコードを公開する必要がないようにします
  - [AGPL](https://www.gnu.org/licenses/agpl-3.0.html) - ソフトウェアやその他の種類の著作物向けのフリーでコピーレフトなライセンスで、サーバー上で修正済みのプログラムを実行し、他のユーザーがそこでそのプログラムと通信できるようにする場合、サーバーはそこで実行されている修正版に対応するソースコードのダウンロードもユーザーに許可しなければならないことを保証するために特別に設計されています
  - [SSPL](https://www.mongodb.com/licensing/server-side-public-license) - ライセンスされたソフトウェアをサービスとして提供する事業者に対し、サービス全体の完全なソースコードの公開を義務付ける、強力なコピーレフトソフトウェアライセンスです
- 原則と格言
  - [Linus's law](https://en.wikipedia.org/wiki/Linus%27s_law) - 「十分な目玉があれば、すべてのバグは深刻ではない」という主張であり、オープンソース開発における重要な原則です
- ソースリポジトリ
  - [GitHub](https://github.com/) - 安全なソフトウェアを構築、拡張、提供するための AI 駆動の開発者プラットフォームです
  - [GitLab.com](https://about.gitlab.com/) - 組織がソフトウェア開発の全体的な投資対効果を最大化できるようにする DevSecOps プラットフォームです
- パッケージレジストリ
  - [CTAN](https://ctan.org/) - Comprehensive TEX Archive Network です
  - [CPAN](https://www.cpan.org/) - Comprehensive Perl Archive Network です
  - [CRAN](https://cran.r-project.org/) - Comprehensive R Archive Network です
  - [PyPI](https://pypi.org/) - Python プログラミング言語向けのソフトウェアリポジトリです
  - [RubyGems.org](https://rubygems.org/) - Ruby コミュニティの gem ホスティングサービスです
  - [npm Registry](https://www.npmjs.com/) - 世界最大のソフトウェアレジストリです
  - [JSR](https://jsr.io/) - モダンな JavaScript と TypeScript 向けのオープンソースパッケージレジストリです
  - [pkg.go.dev](https://pkg.go.dev/) - Go のパッケージとモジュールに関する情報源です
  - [crates.io](https://crates.io/) - Rust コミュニティの crate レジストリです
  - [LuaRocks](https://luarocks.org/) - Lua モジュール向けのパッケージマネージャーです
  - [Hackage](https://hackage.haskell.org/) - Haskell コミュニティのオープンソースソフトウェアの中心的なパッケージアーカイブです
    - [Stackage](https://www.stackage.org/) - Hackage からのパッケージの厳選されたセットです
  - [NuGet Gallery](https://www.nuget.org/) - .NET 向けのパッケージマネージャーです
  - [Maven Central](https://central.sonatype.com/) - 世界最大かつ最古のコンポーネントリポジトリです
  - [ConanCenter](https://conan.io/center) - コミュニティによって作成されたすべてのオープンソースパッケージを見つけられる中心的なリポジトリです
  - [Anaconda Hub](https://www.anaconda.com/products) - データサイエンスと AI コラボレーションのためのハブです

### オープンデータ

- ツールとライセンス
  - [Creative Commons](https://creativecommons.org/) - 世界の差し迫った課題に取り組むために、知識と創造性の共有に対する法的障壁を克服する手助けをする非営利団体です
  - [Open Data Commons](https://opendatacommons.org/) - オープンデータの公開、提供、利用を支援する一連の法的ツールとライセンスの拠点です
- オープンデータレジストリ
  - [Hugging Face Hub](https://huggingface.co/docs/hub/index) - 90 万を超えるモデル、20 万のデータセット、30 万のデモを備えたプラットフォームで、人々が ML ワークフローで簡単に協業できます
  - [Data.gov](https://data.gov/) - 米国政府のオープンデータの拠点です
  - [Kaggle](https://www.kaggle.com/) - データサイエンスの目標達成を支援する強力なツールとリソースを備えた、世界最大のデータサイエンスコミュニティです
  - [Registry of Open Data on AWS](https://registry.opendata.aws/) - AWS サービスを通じて公開されているデータセットを人々が簡単に見つけられるようにするサービスです
  - [OpenML](https://www.openml.org/) - オープンで協調的、摩擦のない自動化された機械学習環境です
  - [OpenStreetMap](https://www.openstreetmap.org/about) - あなたのような人々によって作成され、オープンライセンスの下で自由に使用できる世界地図です
- データ検索エンジン
  - [Google Dataset search](https://datasetsearch.research.google.com/) - Web 上の何千ものリポジトリに保存されているデータセットをユーザーが見つけられるようにする検索エンジンです

### コミュニティとガバナンス

- 傘下組織となるオープンソース財団
  - [Linux Foundation](https://www.linuxfoundation.org/) - 開発者がオープンテクノロジープロジェクトのコーディング、管理、拡張を行うための中立で信頼できるハブを提供することで、Linux を支援、保護、標準化する非営利団体です
  - [Apache Software Foundation](https://www.apache.org/) - Apache HTTP Server を含む Apache ソフトウェアプロジェクトを支援する非営利法人です
  - [Eclipse Foundation](https://www.eclipse.org/) - 個人と組織のグローバルコミュニティのために、オープンソースソフトウェアの協業とイノベーションのためのビジネスフレンドリーな環境を提供する組織です
- 技術特化型財団
  - [OpenJS Foundation](https://openjsf.org/) - Appium、Dojo、jQuery、Node.js、webpack を含む 40 を超えるオープンソースプロジェクトの中立的な拠点です
  - [Rust Foundation](https://foundation.rust-lang.org/) - Rust プログラミング言語とそのエコシステムの管理と発展に専念する独立した非営利団体です
  - [Python Software Foundation](https://www.python.org/psf/) - Python プログラミング言語を支える慈善団体です
  - [PyTorch Foundation](https://pytorch.org/foundation) - オープンソース AI のためのコミュニティ主導のハブです
- クラウドと AI
  - [Cloud Native Computing Foundation](https://www.cncf.io/) - クラウドネイティブコンピューティングを普遍的で持続可能なものにすることに専念するオープンソースソフトウェア財団です
  - [Agentic AI Foundation (AAIF)](https://aaif.io/) - この重要な能力が透明かつ協調的に、そして主要なオープンソース AI プロジェクトの採用を促進する形で進化することを保証するための、中立でオープンな財団です
- Web とデータの標準
  - [World Wide Web Consortium](https://www.w3.org/) - Web の長期的な成長を保証するオープンスタンダードを開発する国際的なコミュニティです
  - [WHATWG](https://whatwg.org/) - HTML と関連技術の進化に関心を持つ人々のコミュニティです
  - [The Open Group](https://www.opengroup.org/) - 技術標準を通じてビジネス目標の達成を可能にするグローバルコンソーシアムです
- 倫理とデジタル権利
  - [Free Software Foundation](https://www.fsf.org/) - コンピューターユーザーの自由を推進するという世界規模の使命を持つ非営利団体です
- コミュニティガバナンスと行動規範
  - [Debian Constitution](https://www.debian.org/devel/constitution) - Debian プロジェクトにおける意思決定のための組織構造を説明した文書です
  - [Ubuntu Code of Conduct](https://ubuntu.com/community/code-of-conduct) - Ubuntu コミュニティの一員としての行動を対象とした一連のガイドラインです
  - [Mozilla Community Participation Guidelines](https://www.mozilla.org/en-US/about/governance/policies/participation/) - Mozilla コミュニティ内の参加者に対する期待事項をまとめた一連のガイドラインです
  - [Contributor Covenant](https://www.contributor-covenant.org/) - Coraline Ada Ehmke によって作成された、フリー/オープンソースソフトウェアプロジェクトの貢献者向けの行動規範です

## シェルとターミナル

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > コンピュータサイエンス
- 3\. テクノロジー > 3\.1 ソフトウェア開発 > チーム開発

:::

### Bash とその他のシェル

- [Bash](https://www.gnu.org/software/bash/) - Korn shell (ksh) と C shell (csh) の便利な機能を取り入れた sh 互換シェルです
  - [Line editing](https://www.gnu.org/software/bash/manual/html_node/Command-Line-Editing.html) - GNU コマンドライン編集インターフェイスの基本機能です
  - [History](https://www.gnu.org/software/bash/manual/html_node/Using-History-Interactively.html) - Bash の履歴展開機能です
  - [Shell expansions](https://www.gnu.org/software/bash/manual/html_node/Shell-Expansions.html) - コマンドラインが単語に分割された後に実行される処理です
  - [Pipelines](https://www.gnu.org/software/bash/manual/html_node/Pipelines.html) - 制御演算子 '|' または '|&' のいずれかで区切られた 1 つ以上のコマンドのシーケンスです
  - [Built-in commands](https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html) - 新しいプロセスをフォークすることなく、シェルプロセス自体の中で実行されるコマンドです
  - [Special variables](https://www.gnu.org/software/bash/manual/html_node/Variable-Index.html) - シェルによって設定または使用されるシェル変数のリストです
  - [Built-in job control](https://www.gnu.org/software/bash/manual/html_node/Job-Control.html) - プロセスの実行を選択的に停止（一時停止）し、後で実行を継続（再開）できる機能です
- [Zsh](https://www.zsh.org/) - 対話的な使用のために設計されたシェルですが、強力なスクリプト言語でもあります
- [fish-shell](https://fishshell.com/) - Linux、macOS、その他一連のプラットフォーム向けのスマートでユーザーフレンドリーなコマンドラインシェルです
- [PowerShell](https://docs.microsoft.com/en-us/powershell/) - コマンドラインシェル、スクリプト言語、構成管理フレームワークで構成されたクロスプラットフォームのタスク自動化ソリューションです
- [nushell](https://www.nushell.sh/) - 新しいタイプのシェルです

### シェルユーティリティ

- 汎用シェルユーティリティ
  - [coreutils](https://www.gnu.org/software/coreutils/) = cat、ls、rm など Unix 系オペレーティングシステムに必要な多くの基本ツールを含む GNU ソフトウェアパッケージです
  - [GNU parallel](https://www.gnu.org/software/parallel/) - 1 台以上のコンピューターを使用してジョブを並列実行するためのシェルツールです
  - [rlwrap](https://github.com/hanslub42/rlwrap) - readline ラッパーです
  - [bash-completion](https://github.com/scop/bash-completion) - bash 向けのプログラム可能な補完関数のコレクションです
  - [direnv](https://direnv.net/) - 現在のディレクトリに応じて環境変数をロード・アンロードできるシェルの拡張機能です
  - [zoxide](https://github.com/ajeetdsouza/zoxide) - よりスマートな cd コマンドです
  - [Atuin](https://atuin.sh/) - 既存のシェル履歴を SQLite データベースに置き換え、コマンドの追加コンテキストを記録し、オプションですべてのマシン間でシェル履歴を同期するツールです
  - [wttr.in](https://github.com/chubin/wttr.in) - curl、httpie、wget などのコマンドラインツールを通じて気象情報を提供する、コンソール指向の天気予報サービスです
- 検索ツール
  - [findutils](https://www.gnu.org/software/findutils/) - GNU オペレーティングシステムの基本的なディレクトリ検索ユーティリティです
  - [fzf](https://github.com/junegunn/fzf) - 汎用のコマンドラインファジーファインダーです
  - [fd](https://github.com/sharkdp/fd) - find に代わるシンプルで高速、かつユーザーフレンドリーなツールです
  - [grep](https://www.gnu.org/software/grep/) - 正規表現に一致する行をプレーンテキストデータセットから検索するコマンドラインユーティリティです
  - [ripgrep](https://github.com/BurntSushi/ripgrep) - 現在のディレクトリを再帰的に検索し、正規表現パターンを探す行指向の検索ツールです
  - [silversearcher-ag](https://geoff.greer.fm/ag/) - ack に似たコード検索ツールですが、より高速です
- シェルフレームワークとカスタマイズ
  - [starship](https://starship.rs/) - あらゆるシェル向けの、ミニマルで高速、無限にカスタマイズ可能なプロンプトです
  - [oh-my-bash](https://ohmybash.nntoan.com/) - BASH 構成を管理するための、オープンソースでコミュニティ主導のフレームワークです
  - [oh-my-zsh](https://ohmyz.sh/) - Zsh 構成を管理するための、愉快でオープンソース、コミュニティ主導のフレームワークです
  - [Zim Framework](https://zimfw.sh/) - 高速性とモジュール式の拡張機能を備えた Zsh 構成フレームワークです
  - [Powerlevel10k](https://github.com/romkatv/powerlevel10k) - Zsh 向けのテーマです
  - [Pure](https://github.com/sindreshorhus/pure) - 美しくミニマルで高速な ZSH プロンプトです
- シェルチュートリアル
  - [LinuxCommand.com](https://www.linuxcommand.org/) - Linux コマンドラインの使い方を学ぶのに役立つよう設計された、書籍やその他の資料を掲載したサイトです

### ターミナルエミュレーター

- [Terminal Emulators](https://en.wikipedia.org/wiki/Terminal_emulator) - 他の表示アーキテクチャの中でビデオ端末をエミュレートするコンピュータープログラムです
  - [WaveTerm](https://www.waveterm.dev/) - オープンソースでクロスプラットフォーム、AI 統合されたターミナルです
  - [kitty](https://sw.kovidgoyal.net/kitty/) - 高速で機能豊富な GPU ベースのターミナルエミュレーターです
  - [Rio Terminal](https://rioterm.com/) - 21 世紀のためのモダンなターミナルです
  - [Alacritty](https://alacritty.org/) - 適切なデフォルト設定を備えつつ、広範なカスタマイズも可能なモダンなターミナルエミュレーターです
  - [Terminator](https://gnome-terminator.org) - 複数の GNOME ターミナルを 1 つのウィンドウにまとめ、好みのスタイルに合わせてターミナルを組み合わせ、再構成できるようにするターミナルエミュレーターです
  - [Windows Terminal](https://github.com/microsoft/terminal) - 新しい Windows Terminal であり、オリジナルの Windows コンソールホストです
  - [Mintty](https://mintty.github.io/) - Cygwin、MSYS または Msys2 とその派生プロジェクト、および WSL 向けのターミナルエミュレーターです
  - [xterm](https://invisible-island.net/xterm/) - X Window System 向けのターミナルエミュレーターです
  - [wterm](https://wterm.dev/) - Zig+WASM コアを使用して DOM に直接レンダリングする Web 向けのターミナルエミュレーターで、ネイティブなブラウザーのテキスト選択、コピー/ペースト、アクセシビリティを実現します
- 技術とプロトコル
  - [Pseudoterminal](https://en.wikipedia.org/wiki/Pseudoterminal) - プログラムが端末をエミュレートするために使用する、端末のようなインターフェイスを提供する一対の疑似デバイスです
  - [ANSI escape code](https://en.wikipedia.org/wiki/ANSI_escape_code) - ビデオテキスト端末上でカーソル位置、色、フォントスタイル、その他のオプションを制御するためのインバンドシグナリングの標準です
  - [kitty keyboard protocol](https://sw.kovidgoyal.net/kitty/keyboard-protocol/) - 端末がその中で実行されているアプリケーションにキーボードイベントを送信するためのプロトコルです
  - [iTerm2 image protocol](https://iterm2.com/documentation-images.html) - ターミナル内にインラインで画像を表示するためのカスタムエスケープコードです
- ターミナルフォント
  - [Nerd Fonts](https://www.nerdfonts.com/) - 開発者向けフォントに多数のグリフをパッチ適用するプロジェクトです
  - [Share Tech Mono](https://fonts.google.com/specimen/Share+Tech+Mono) - Share ファミリーに基づいた等幅サンセリフ体です
  - [Cascadia Code](https://github.com/microsoft/cascadia-code) - プログラミング用合字を含む、楽しく新しい等幅フォントです

### ターミナルユーティリティ

- マルチプレクサとセッション管理
  - [screen](https://www.gnu.org/software/screen/) - 複数のプロセス間で物理端末を多重化するフルスクリーンウィンドウマネージャーです
  - [tmux](https://github.com/tmux/tmux/wiki) - ターミナルマルチプレクサです
  - [byobu](https://www.byobu.org/) - GPLv3 のオープンソースであるテキストベースのウィンドウマネージャー兼ターミナルマルチプレクサです
  - [zellij](https://zellij.dev/) - 必要なものがすべて揃ったターミナルワークスペースです
  - [asciinema](https://asciinema.org/) - ターミナルセッションを記録し、Web 上で共有するための無料でオープンソースのソリューションです
  - [ttyd](https://tsl0922.github.io/ttyd/) - Web 経由でターミナルを共有するためのシンプルなコマンドラインツールです
- コンソールファイルマネージャー
  - [midnight commander](https://midnight-commander.org/) - ビジュアルファイルマネージャーです
  - [ranger](https://github.com/ranger/ranger) - コンソール向けの VIM に着想を得たファイルマネージャーです
  - [superfile](https://superfile.netlify.app/) - 非常に洗練されたモダンなターミナルファイルマネージャーです

### Windows 上の Linux/Unix 系環境

- [winpty](https://github.com/rprichard/winpty) - Windows コンソールプログラム向けに Unix ライクな VT100 コンソールインターフェイスを提供する Windows ソフトウェアパッケージです
- [WSL](https://learn.microsoft.com/en-us/windows/wsl/) - 別の仮想マシンやデュアルブートを必要とせずに、Windows マシン上で GNU/Linux 環境を実行できるようにする Windows の機能です
  - [WSLg](https://github.com/microsoft/wslg) - 完全に統合されたデスクトップ体験の中で、Windows 上で Linux GUI アプリケーション (X11 と Wayland) を実行するサポートを可能にするプロジェクトです
- [Git for Windows](https://gitforwindows.org/) - Git SCM の全機能セットを Windows にもたらす、軽量なネイティブツール群です
- [MSYS2](https://www.msys2.org/) - ネイティブな Windows ソフトウェアのビルド、インストール、実行のための使いやすい環境を提供するツールとライブラリのコレクションです

## バージョン管理システム

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > チーム開発

:::

- 概念
  - [Distributed Version Control](https://en.wikipedia.org/wiki/Distributed_version_control) - 完全な履歴を含むコードベース全体が、すべての開発者のコンピューターにミラーリングされるバージョン管理の形態です
- コア VCS とクライアント
  - [Git](https://git-scm.com/) - 小規模から非常に大規模なプロジェクトまで、あらゆるものを高速かつ効率的に扱うために設計された、無料でオープンソースの分散型バージョン管理システムです
    - local repository、remote repository
    - branch、tag、worktree
    - push、pull、fetch、rebase、reset、stash
    - staging、commit
  - [Jujutsu (jj)](https://www.jj-vcs.dev/latest/) - シンプルかつ強力な Git 互換の VCS です
  - [gitoxide](https://github.com/GitoxideLabs/gitoxide) - イディオマティックで無駄がなく、高速かつ安全な Git の純粋な Rust 実装です
  - [TortoiseGit](https://tortoisegit.org/) - Git 向けの Windows シェルインターフェイスで、TortoiseSVN をベースにしています
  - [git lfs](https://git-lfs.com/) - 大きなファイルをバージョン管理するためのオープンソース Git 拡張機能です
- ターミナル & UI ツール
  - [Informative git prompt for bash and fish](https://github.com/magicmonty/bash-git-prompt) - 現在の git リポジトリに関する情報を表示する bash プロンプトです
  - [lazygit](https://github.com/jesseduffield/lazygit) - git コマンド向けのシンプルなターミナル UI です
  - [giff](https://github.com/bahdotsh/giff) - ブランチ間の変更を表示・管理できる、対話的なリベース機能を備えたターミナルベースの Git 差分ビューアーです
  - [Git Interactive Rebase Tool](https://gitrebasetool.mitmaro.ca/) - Git 向けの改良されたシーケンスエディターです
- 履歴とメンテナンスツール
  - [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/) - Git リポジトリ履歴から不要なデータを除去するための、git-filter-branch に代わるよりシンプルで高速なツールです
  - [git filter-repo](https://github.com/newren/git-filter-repo) - 履歴を書き換えるための汎用的なツールです
  - [degit](https://github.com/Rich-Harris/degit) - シンプルなプロジェクトのひな形作成です
- コミットと変更履歴のツール
  - [Git Lint](https://alchemists.io/projects/git-lint) - クリーンで読みやすく、デバッグ可能で保守可能なプロジェクト履歴を維持することで、Git コミットをリントするコマンドラインインターフェイスです
  - [commitlint](https://commitlint.js.org/) - コミットメッセージをリントすることで、チームがコミット規約を遵守する助けとなるツールです
  - [git cliff](https://git-cliff.org/) - 高度にカスタマイズ可能な変更履歴生成ツールです
- フック管理
  - [pre-commit](https://pre-commit.com/) - 多言語対応の pre-commit フックを管理・保守するためのフレームワークです
  - [Lefthook](https://lefthook.dev/) - あらゆる種類のプロジェクト向けの、高速で多言語対応の Git フックマネージャーです
  - [Husky](https://typicode.github.io/husky/) - 超高速でモダンなネイティブ git フックです

### Git ホスティングサービス

- [GitLab SCM](https://about.gitlab.com/solutions/source-code-management/) - コードとプロジェクトの共同作業のための単一の信頼できる情報源です
  - [GitLab CLI](https://gitlab.com/gitlab-org/cli) - GitLab をターミナルにもたらすオープンソースツールで、すでに git やコードで作業している場所のすぐそばで使用できます
- [Gitea](https://about.gitea.com/products/gitea/) - Git ホスティング、コードレビュー、チームコラボレーション、パッケージレジストリ、CI/CD を含む、手間のかからないセルフホスト型のオールインワンソフトウェア開発サービスです
- [Codeberg](https://codeberg.org/) - フリー/オープンソースプロジェクト向けに Git ホスティングやその他のサービスを提供する、コミュニティ主導の取り組みです
- [Forgejo](https://forgejo.org/) - セルフホスト型の軽量なソフトウェアフォージです
- [Soft Serve](https://github.com/charmbracelet/soft-serve) - コマンドライン向けの、美味しくセルフホスト可能な Git サーバーです
- [Azure Repos](https://learn.microsoft.com/en-us/azure/devops/repos/) - コードを管理するために使用できる一連のバージョン管理ツールです
- [GitHub](https://github.com/) - 安全なソフトウェアを構築、拡張、提供するための AI 駆動の開発者プラットフォームです
  - [GitHub CLI](https://cli.github.com/) - プルリクエスト、Issue、GitHub Actions、その他の GitHub 機能をターミナルにもたらすオープンソースツールで、すべての作業を一箇所で行えます

### ブランチングモデル

- [Trunk Based Development](https://trunkbaseddevelopment.com/) - 開発者が「trunk」と呼ばれる単一のブランチでコードを協業し、文書化されたテクニックを用いて他の長期的な開発ブランチを作成する圧力に抵抗する、ソースコード管理のブランチングモデルです
- [GitHub Flow](https://docs.github.com/en/get-started/using-github/github-flow) - 頻繁にデプロイするチーム向けに設計された軽量なブランチベースのワークフローです
- [GitLab Flow](https://docs.gitlab.co.jp/ee/topics/gitlab_flow.html) - 機能駆動開発と機能ブランチを Issue トラッキングと組み合わせた、GitFlow に代わるよりシンプルな方法です

### コードレビュー

- [Google Engineering Practices Documentation](https://google.github.io/eng-practices/) - レビュアーと変更作成者の両方に向けた、Google のコードレビュープロセスとポリシーの包括的なガイドです
- [Conventional Comments](https://conventionalcomments.org/) - 明瞭性の向上、誤解の低減、コメントの機械可読化のために、コードレビューフィードバックの構造化されたフォーマットを提供する標準です
- [Danger](https://github.com/danger/danger) - コードレビューにおけるチームの規範を自動化するツールです

## 統合開発環境 (IDE)

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > チーム開発

:::

- GUI ベース
  - [Visual Studio Code](https://code.visualstudio.com/) - デスクトップ上で動作し、Windows、macOS、Linux で利用できる、軽量ながら強力なソースコードエディターです
    - [Awesome VS Code](https://viatsko.github.io/awesome-vscode/) - 素晴らしい VS Code パッケージとリソースの厳選リストです
    - [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) - Visual Studio Code に組み込まれた Git 機能を強化する拡張機能です
    - [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph) - リポジトリの Git グラフを表示し、そのグラフから Git アクションを実行するための拡張機能です
  - AI アシスタンスプラグイン
    - [GitHub Copilot](https://github.com/features/copilot/) - より速く、より少ない労力でコードを書く手助けをする AI ペアプログラマーです
      - [Awesome GitHub Copilot](https://awesome-copilot.github.com/) - 体験を向上させるための、コミュニティが貢献したエージェント、指示、スキル、フック、ワークフロー、プラグイン、キャンバス拡張機能、ツールのコレクションです
    - [Gemini Code Assist](https://cloud.google.com/products/gemini/code-assist) - 開発ライフサイクル全体を対象とした AI 駆動のアシスタントです
    - [Amazon Q Developer](https://aws.amazon.com/q/developer/) - ソフトウェア開発向けの、最も高性能な生成 AI 駆動のアシスタントです
    - [Cline](https://cline.bot/) - 最先端の AI モデルを VS Code エディターに直接もたらすオープンソースの AI コーディングエージェントです
  - AI 統合 IDE
    - [Cursor](https://www.cursor.com/) - プロプライエタリモデルおよび最先端モデルとのシームレスでエージェント的な統合のために設計された、VS Code の AI ネイティブなフォークです
    - [Windsurf](https://codeium.com/windsurf) - 開発者と AI の作業が本当に一体となって流れ、まさに魔法のようなコーディング体験を可能にする場です
    - [Zed](https://zed.dev/) - 人間と AI との高パフォーマンスな協業のために設計された次世代コードエディターです
- Web ベース
  - [code-server](https://github.com/coder/code-server) - リモートサーバー上で動作し、あらゆる Web ブラウザーからアクセスできる VS Code インスタンスです
  - [GitHub Codespaces](https://github.com/features/codespaces) - GitHub にネイティブな、完全に構成済みの安全なクラウド開発環境で、より速くコーディングを始められます
  - [Replit](https://replit.com/) - コーディング不要で、アイデアを数分でアプリに変えるプラットフォームです
- ターミナルベース
  - [Vim](https://www.vim.org/) - あらゆる種類のテキストの作成と変更を非常に効率的に行えるように構築された、高度に設定可能なテキストエディターです
    - [motion and operators](https://vimdoc.sourceforge.net/htmldoc/motion.html) - カーソルを移動するコマンドと、テキストを削除・変更するために使用されるコマンドです
    - [vim-plug](https://junegunn.github.io/vim-plug/) - Vim の事実上の標準プラグインマネージャーです
    - [NERDTree](https://github.com/preservim/nerdtree) - vim 向けのツリーエクスプローラープラグインです
  - [Neovim](https://neovim.io/) - 超拡張可能な Vim ベースのテキストエディターです
    - [LazyVim](https://www.lazyvim.org/) - 💤 lazy.nvim を利用した Neovim セットアップで、構成のカスタマイズと拡張を容易にします
      - [lazy.nvim](https://lazy.folke.io/) - Neovim 向けのモダンなプラグインマネージャーです
    - [NvChad](https://nvchad.com/) - 堅実なデフォルト設定と美しい UI を提供する超高速な Neovim 構成です
    - [neo-tree.nvim](https://github.com/nvim-neo-tree/neo-tree.nvim) - ファイルシステムやその他のツリー状構造を管理するための Neovim プラグインです
    - [colorful-winsep.nvim](https://github.com/nvim-zh/colorful-winsep.nvim) - Neovim 向けのカラフルなウィンドウ区切りです
    - [mason.nvim](https://github.com/williamboman/mason.nvim) - LSP サーバー、DAP サーバー、リンター、フォーマッターなどの外部エディターツールを単一のインターフェイスで簡単に管理できる Neovim プラグインです
    - [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim) - リストに対する高度に拡張可能なファジーファインダーです
    - [flash.nvim](https://github.com/folke/flash.nvim) - 検索ラベル、強化された文字モーション、Treesitter 統合でコードナビゲーションを助けるプラグインです
    - [nvim-llama](https://github.com/jpmcb/nvim-llama) - Neovim 向けの Ollama へのシンプルなインターフェイスです
  - [Helix](https://helix-editor.com/) - モーダルエディターであり、異なるタスクに対して異なるモードを持つことを意味します
  - [GNU Emacs](https://www.gnu.org/software/emacs/) - 拡張可能でカスタマイズ可能な、フリー/リブレなテキストエディター、そしてそれ以上のものです
    - [MELPA](https://melpa.org/#/) - Milkypostman's Emacs Lisp Package Archive です
    - [doomemacs](https://github.com/doomemacs/doomemacs) - 頑固な火星人ハッカーのための Emacs フレームワークです
    - [neotree](https://github.com/jaypei/emacs-neotree) - Emacs 向けのツリーエクスプローラーです
    - [Treemacs](https://github.com/Alexander-Miller/treemacs) - Emacs 向けのツリーレイアウトファイルエクスプローラーです
    - [Spacemacs](https://www.spacemacs.org/#) - コミュニティ主導の Emacs ディストリビューションです
  - チュートリアルとチートシート
    - [OpenVim](https://openvim.com/) - インタラクティブな Vim チュートリアルです
    - [Vim Adventures](https://vim-adventures.com/) - VIM のキーボードショートカットに基づいたオンラインゲームです
    - [Vim Cheat Sheet](https://vim.rtorr.com/) - Vim コマンドのクイックリファレンスガイドです

### 言語サーバー

- [LSP](https://microsoft.github.io/language-server-protocol/) - 自動補完、定義へのジャンプ、すべての参照の検索などの言語機能を提供するために、エディターまたは IDE と言語サーバーの間で使用されるプロトコルです
- [pyright](https://github.com/microsoft/pyright) - Python 向けの静的型チェッカー兼言語サーバーです
  - [Pylance](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance) - Visual Studio Code の Python 拡張機能と連携して高性能な言語サポートを提供する拡張機能です
- [Ruby LSP](https://shopify.github.io/ruby-lsp/) - Ruby 向けの、独自の意見を持った言語サーバーです
- [TypeScript Language Server](https://github.com/typescript-language-server/typescript-language-server) - スタンドアロンの TypeScript および JavaScript 言語サーバーです
- [Gopls](https://go.dev/gopls/) - Go 言語向けの公式言語サーバーです
- [rust-analyzer](https://rust-analyzer.github.io/) - Rust プログラミング言語向けの言語サーバーです
- [Eclipse JDT Language Server](https://github.com/eclipse-jdtls/eclipse.jdt.ls) - Eclipse JDT に基づいた Java 言語サーバーです

## コード品質とリファクタリング

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > チーム開発

:::

- 概念
  - [SQALE method](https://en.wikipedia.org/wiki/SQALE) - ソフトウェアソースコードの品質評価を支援するための手法です
  - [Cyclomatic complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity) - プログラムの複雑さを示すために使用されるソフトウェアメトリクスです
- コードメトリクスツール
  - [scc](https://github.com/boyter/scc/) - 多くのプログラミング言語でコード行数をカウントするツールです
  - [cloc](https://github.com/AlDanial/cloc) - 多くのプログラミング言語で空白行、コメント行、ソースコードの物理行をカウントするツールです

### 分析プラットフォーム

- [SonarQube Server](https://www.sonarsource.com/products/sonarqube/) - 30 以上の言語、フレームワーク、IaC プラットフォームでコーディング上の問題を検出するために設計された、オンプレミスの分析ツールです
- [GitLab Code Coverage](https://docs.gitlab.com/ee/ci/testing/code_coverage.html) - テストでカバーされているコードの割合を示すレポートです
- [GitLab Code Quality](https://docs.gitlab.com/ee/ci/testing/code_quality.html) - CodeClimate Engines を使用してプロジェクトのコード品質分析を提供する機能です

### フォーマッター

- [EditorConfig](https://editorconfig.org/) - コーディングスタイルを定義するためのファイル形式であり、エディターがそのファイル形式を読み取り、定義されたスタイルを遵守できるようにするテキストエディタープラグインのコレクションです
- [Prettier](https://prettier.io/) - 独自の意見を持ったコードフォーマッターです
- [Ruff](https://docs.astral.sh/ruff/) - Rust で書かれた、非常に高速な Python リンター兼コードフォーマッターです
- [Biome](https://biomejs.dev/) - JavaScript、TypeScript、JSX、JSON、HTML、CSS、GraphQL 向けの高速なフォーマッターと高性能なリンターを提供する Web 向けツールチェーンです

### リンター

- [ESLint](https://eslint.org/) - JavaScript コードの問題を見つけて修正する手助けをするオープンソースプロジェクトです
- [JSHint](https://jshint.com/about/) - JavaScript 向けの静的コード解析ツールです
- [Biome](https://biomejs.dev/) - JavaScript、TypeScript、JSX、JSON、HTML、CSS、GraphQL 向けの高速なフォーマッターと高性能なリンターを提供する Web 向けツールチェーンです
- [Pylint](https://pylint.readthedocs.io/) - Python 2 または 3 向けの静的コード解析ツールです
- [Ruff](https://docs.astral.sh/ruff/) - Rust で書かれた、非常に高速な Python リンター兼コードフォーマッターです
- [Staticcheck](https://staticcheck.dev/) - Go プログラミング言語向けの最先端のリンターです
- [revive](https://revive.run/) - Go 向けの高速で拡張可能な静的コード解析フレームワークです
- [golangci-lint](https://golangci-lint.run/) - Go 向けの高速なリンターランナーです
- [RuboCop](https://github.com/rubocop/rubocop) - Ruby の静的コード解析ツール（別名リンター）兼コードフォーマッターです
- [Rust Clippy](https://doc.rust-lang.org/clippy/) - よくある間違いを検出し、Rust コードを改善するためのリントのコレクションです
- [PSScriptAnalyzer](https://github.com/PowerShell/PSScriptAnalyzer) - PowerShell モジュールとスクリプト向けの静的コードチェッカーです
- [ShellCheck](https://www.shellcheck.net/) - bash/sh シェルスクリプトに対して警告と提案を行う GPLv3 のツールです
- [Stylelint](https://stylelint.io/) - エラーを回避し、規約を徹底するのに役立つ強力な CSS リンターです
- [vacuum](https://quobix.com/vacuum/) - 超高速で軽量な OpenAPI リンター兼品質チェックツールです
- [yamllint](https://github.com/adrienverge/yamllint) - YAML ファイル向けのリンターです
- [ls-lint](https://ls-lint.org/) - 非常に高速なファイル・ディレクトリ名リンターです

### コーディングスタイルガイド

- [Google Style Guides](https://google.github.io/styleguide/) - さまざまなプログラミング言語でソースコードを書くための一連の規約を提供する文書のコレクションです
- [Style Guide for Python](https://peps.python.org/pep-0008/) - メインの Python ディストリビューションの標準ライブラリを構成する Python コードのコーディング規約を示す文書です
- [Ruby Style Guide](https://rubystyle.guide/) - Ruby プログラミング言語向けのコミュニティ主導のスタイルガイドです

## 開発者 AI と生産性

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > チーム開発

:::

### AI 生産性ツール

- [Mods](https://github.com/charmbracelet/mods) - AI の助けを借りてプログラムを書く手助けをするシンプルなツールです
- [gptcli](https://github.com/evilpan/gptcli) - ChatGPT 向けのコマンドラインインターフェイスです
- [ShellGPT](https://github.com/TheR1D/shell_gpt) - AI 大規模言語モデル (LLM) を活用したコマンドライン生産性ツールです
- [OpenCommit](https://github.com/di-sukharev/opencommit) - 意味のあるコミットを一瞬で自動生成します
- [AI Commits](https://github.com/Nutlope/aicommits) - AI であなたに代わって git コミットメッセージを書く CLI です
- [lootbox](https://github.com/jx-codes/lootbox) - 「Code Mode」に着想を得た CLI で、LLM がツール呼び出しを使う代わりに TypeScript コードを書いて API を呼び出します

### 開発エージェント

- CLI コーディングエージェント
  - [Claude Code](https://code.claude.com/docs) - コードベースを読み取り、ファイルを編集し、コマンドを実行し、開発ツールと統合する、エージェント的なコーディングツールです
    - [Plan Mode](https://code.claude.com/docs/en/common-workflows#use-plan-mode-for-safe-code-analysis) - 読み取り専用の操作でコードベースを分析して計画を立てるよう Claude に指示するモードで、コードベースの探索、複雑な変更の計画、安全なコードレビューに最適です
    - [Hooks](https://code.claude.com/docs/en/hooks) - エージェントのライフサイクルの特定のポイントで自動的に実行される、ユーザー定義のシェルコマンドまたは LLM プロンプトです
    - [Subagents](https://code.claude.com/docs/en/sub-agents) - 特定の種類のタスクを処理する専門化された AI アシスタントで、独自のコンテキストの中でカスタムプロンプトとツールアクセスを備えて実行されます
    - [Sandboxing](https://code.claude.com/docs/en/sandboxing) - より安全で自律的なエージェント実行のためにファイルシステムとネットワークの分離を提供する機能で、OS レベルのプリミティブを使用してこれらの分離を実施し、絶え間ない権限プロンプトを削減します
    - [Auto-memory](https://code.claude.com/docs/en/memory#auto-memory) - ビルドコマンド、デバッグの知見、アーキテクチャに関するメモ、ユーザーの好みに関するノートを手動介入なしで保存することで、エージェントがセッションをまたいで自動的に知識を蓄積できるようにする機能です
  - [Gemini CLI](https://github.com/google-gemini/gemini-cli) - Gemini の力を直接ターミナルにもたらすオープンソースの AI エージェントです
    - [Conductor](https://github.com/gemini-cli-extensions/conductor) - Gemini CLI 向けの公式プロジェクトマネジメントツールです
    - [Sandboxing](https://geminicli.com/docs/cli/sandbox/) - 潜在的に危険な操作をホストシステムから分離する機能で、macOS Seatbelt またはコンテナベースの分離手法を使用して、AI 操作と環境の間にセキュリティバリアを提供します
  - [Antigravity CLI](https://github.com/google-antigravity/antigravity-cli) - コードベースを理解し、許可を得て編集を行い、ターミナルから直接コマンドを実行する、ターミナルベースの AI コーディングエージェントです
  - [Aider](https://aider.chat/) - 新しいプロジェクトを始めたり、既存のコードベース上に構築したりできる、ターミナル内の AI ペアプログラミングツールです
  - [Letta Code](https://docs.letta.com/letta-code) - ターミナルに常駐する、メモリファーストのコーディングエージェントです
  - [Deep Agents CLI](https://docs.langchain.com/oss/python/deepagents/cli/overview) - Deep Agents SDK 上に構築されたターミナルコーディングエージェントです
  - [OpenCode.ai](https://opencode.ai/) - 実際のリポジトリ内でコードの理解、編集、出荷を支援する対話的な TUI を提供する、ターミナル向けのオープンソース AI コーディングエージェントです
  - [OpenAI Codex](https://github.com/openai/codex) - ターミナルで動作する軽量なコーディングエージェントで、ローカルなコーディングアシスタントを提供します
  - [Kimi Code](https://www.kimi.com/code) - あらゆる開発ワークフローに組み込めるよう設計された Moonshot AI 製の CLI コーディングエージェントで、コードベース分析、ファイル操作、Web 検索、並列サブエージェントタスク処理をサポートし、kimi-k2.6 モデルを搭載しています
  - [Crush](https://github.com/charmbracelet/crush) - お気に入りのターミナル向けの華やかな AI コーディングエージェントです 💘
  - [ForgeCode](https://forgecode.dev/) - 調査、計画、実行のためのマルチエージェントアーキテクチャを備えた ZSH 統合コーディングハーネスで、複数の LLM プロバイダーをサポートし、Terminal-Bench で最上位にランクされています
- デスクトップコーディングエージェント
  - [goose](https://block.github.io/goose/) - エンジニアリングタスクをシームレスに自動化するローカル AI エージェントです
  - [Open Interpreter](https://www.openinterpreter.com/) - コンピューター上でドキュメントを読み取り、編集し、作成できるエージェントと共に作業できるオープンソースのデスクトップエージェントです
  - [Agent Zero](https://www.agent-zero.ai/) - コードを書いて実行し、自身のコンピューター環境を管理し、自らの行動から学習することで複雑なタスクを解決する動的なツールセットを使用する、オープンソースの個人向け AI エージェントです
  - [AionUI](https://github.com/iOfficeAI/AionUi) - ドキュメント生成機能を備えた、AI コーディングエージェント向けの Cowork アプリです
- 自律型コーディングエージェント
  - [SWE-agent](https://swe-agent.com/latest/) - 一連の言語モデルを搭載した、GitHub リポジトリのバグや問題を修正するツールです
  - [mini-swe-agent](https://mini-swe-agent.com/latest/) - SWE-agent のより小型でアクセスしやすいバージョンです
  - [Devin](https://devin.ai/) - 独自のサンドボックス環境内で複雑なエンジニアリングタスクを支援なしで処理できる自律型 AI ソフトウェアエンジニアです
  - [Jules](https://jules.google/) - 自律型コーディングエージェントです
  - [Replit Agent](https://replit.com/products/agent) - IDE 内であなたと共に学習し作業できる最初の開発者エージェントです

### サポートツールとインフラストラクチャ

- プラットフォーム
  - [OpenHands](https://docs.all-hands.dev/) - AI を搭載したソフトウェア開発エージェント向けのプラットフォームです
  - [Port](https://www.getport.io/) - エンジニアリングのあらゆる側面を加速する自律的なワークフローを構築するためのエージェント的な開発者ポータルです
  - [Antigravity](https://antigravity.google/) - エージェント的な開発プラットフォームです
- エージェントオーケストレーション
  - [TAKT (TAKT Agent Koordination Topology)](https://github.com/nrslib/takt) - 構造化された YAML 定義のワークフローを使用して AI コーディングエージェントをオーケストレーション・管理するために設計されたオープンソースフレームワークです
  - [KIRA](https://github.com/krafton-ai/KIRA) - ネイティブなツール呼び出し、マルチモーダル入力、マーカーベースの完了検証を活用して Terminal-Bench で最先端のパフォーマンスを達成する、ターミナルベースの AI タスク向けエージェントフレームワークです
  - [Ultralight](https://burkeholland.github.io/ultralight/) - コードベースを調査し、段階的な計画を立て、専門のサブエージェントに作業を委任する、VS Code 向けのマルチエージェントオーケストレーションフレームワークです
- ベンチマーク
  - [SWE-bench](https://www.swebench.com/SWE-bench/) - GitHub から収集された実世界のソフトウェア問題で大規模言語モデルを評価するためのベンチマークです
  - [Terminal-Bench](https://www.tbench.ai/) - ソフトウェアエンジニアリング、機械学習、セキュリティ、データサイエンスをカバーする、AI エージェントのターミナル習熟度を定量化するための harbor ネイティブなベンチマークタスクのコレクションです
- コンテキストプロバイダー
  - [Context7](https://context7.com/) - LLM と AI コードエディター向けに最新のドキュメントを提供するために設計された AI エージェント兼ツールです
  - [LeanCTX](https://leanctx.com/) - ファイル読み取りとシェル出力を最大 99% 圧縮することで AI コーディングアシスタントのトークン使用量を削減する、オープンソースのコンテキスト圧縮ツールで、Cursor や Claude Code など 29 以上の AI ツールで動作します
  - [Context Mode](https://github.com/mksglu/context-mode) - AI コーディングエージェント向けのコンテキストウィンドウ最適化です。ツール出力をサンドボックス化し、98% の削減を実現します
  - [RTK](https://github.com/rtk-ai/rtk) - 一般的な開発コマンドで LLM のトークン消費を 60〜90% 削減する CLI プロキシです
- セマンティックコード検索
  - [Serena](https://github.com/oraios/serena) - セマンティック検索と編集機能を提供する強力なコーディングエージェントツールキットです
- セッショントラッキング
  - [Entire](https://entire.io/) - git ワークフローにフックし、プッシュのたびに AI エージェントセッションをキャプチャして、コードがどのように書かれたか、各コミットの背後にある意図の検索可能な記録を作成する CLI ツールです
