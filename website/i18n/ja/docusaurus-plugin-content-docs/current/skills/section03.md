# 03 - クラウド & クラウドネイティブコンピューティング

## クラウドコンピューティング

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > クラウドインフラ活用

:::

### コンピューティング & ストレージ (IaaS)

- [Amazon EC2](https://aws.amazon.com/ec2/) - クラウド上で安全かつサイズ変更可能なコンピューティングキャパシティを提供するウェブサービスです
- [Amazon EBS](https://aws.amazon.com/ebs/) - Amazon Elastic Compute Cloud との併用を想定して設計された、使いやすく高性能なブロックストレージサービスです
- [Azure Virtual Machines](https://azure.microsoft.com/en-us/services/virtual-machines/) - Windows および Linux の仮想マシンを数秒でプロビジョニングできるサービスです
- [Azure Disk Storage](https://azure.microsoft.com/en-us/services/storage/disks/) - Azure Virtual Machines 向けの高性能で耐久性のあるブロックストレージです
- [Google Cloud Compute Engine](https://cloud.google.com/products/compute) - Google のインフラストラクチャ上で仮想マシンを作成・実行できるカスタマイズ可能なコンピューティングサービスです

### ネットワーキング

- [Amazon VPC](https://aws.amazon.com/vpc/) - 自分で定義した論理的に分離された仮想ネットワーク内で AWS リソースを起動できるサービスです
- [Amazon ELB](https://aws.amazon.com/elasticloadbalancing/) - 受信するアプリケーショントラフィックを、Amazon EC2 インスタンス、コンテナ、IP アドレス、Lambda 関数などの複数のターゲットに自動的に分散するサービスです
- [Azure Virtual Network](https://azure.microsoft.com/en-us/services/virtual-network/) - 高パフォーマンスなネットワーキングを利用できる、Azure 上のプライベートネットワークの基本的な構成要素です
- [Azure Load Balancer](https://azure.microsoft.com/en-us/products/load-balancer) - バックエンドの仮想マシンにトラフィックを分散できるサービスです
- [Azure Application Gateway](https://azure.microsoft.com/en-us/products/application-gateway) - プラットフォームが管理する、スケーラブルで高可用性なサービス型アプリケーションデリバリーコントローラーです
- [Google Cloud VPC](https://cloud.google.com/vpc/docs/vpc) - Andromeda を使用して Google の本番ネットワーク内に実装された、物理ネットワークの仮想版です
- [Cloud Load Balancing](https://cloud.google.com/load-balancing/docs/load-balancing-overview) - あらゆるトラフィックに対応する、完全分散型でソフトウェア定義のマネージドサービスです

### アプリケーションホスティングプラットフォーム (PaaS)

- [Azure App Service](https://azure.microsoft.com/en-us/services/app-service/) - ウェブアプリケーション、REST API、モバイルバックエンドをホストするための HTTP ベースのサービスです
- [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/) - ウェブアプリケーションやサービスのデプロイとスケーリングを簡単に行えるサービスです
- [Google Cloud App Engine](https://cloud.google.com/appengine/) - ウェブアプリケーションを大規模に開発・ホストするためのフルマネージドなサーバーレスプラットフォームです
- [Vercel](https://vercel.com/) - ウェブの構築、デプロイ、スケーリングのための開発者体験とインフラストラクチャを提供するフロントエンドクラウドプラットフォームです
- [Netlify](https://www.netlify.com/) - 企業やチームがグローバルなエッジネットワーク上でモダンなウェブ体験を構築、デプロイ、スケールできるようにするコンポーザブルなウェブプラットフォームです
- [Coolify](https://coolify.io/) - Vercel、Heroku、Netlify、Railway に代わる、オープンソース & セルフホスト可能な代替手段です

### クラウドコマンドラインインターフェース

- [AWS CLI](https://aws.amazon.com/cli/) - AWS サービスを管理するための統合ツールです
- [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/) - 対話的なコマンドやスクリプトで Azure リソースを管理できるクロスプラットフォームのコマンドラインツールです
- [Azure Developer CLI (azd)](https://learn.microsoft.com/en-us/azure/developer/azure-developer-cli/) - ローカル開発環境から Azure への移行を加速するオープンソースツールです
- [Google Cloud CLI (gcloud)](https://cloud.google.com/cli) - Google Cloud のリソースとサービスを作成・管理するためのツール群です
- [Vercel CLI](https://vercel.com/docs/cli) - Vercel プロジェクトの管理と設定、アプリのデプロイ、デプロイ環境のローカル複製に使用するコマンドラインインターフェースです
- [Netlify CLI](https://cli.netlify.com/) - 継続的デプロイの設定、ローカル開発サーバーの実行、Netlify へのサイトデプロイを行うためのコマンドラインインターフェースです

### クラウドエミュレーター

- [LocalStack](https://www.localstack.cloud/) - オフラインでクラウドおよびサーバーレスアプリを開発・テストできる、完全に機能するローカルクラウドスタックです

### プライベートクラウド & オンプレミス IaaS

- [OpenStack](https://www.openstack.org/) - パブリッククラウドおよびプライベートクラウドの構築・管理のために Infrastructure as a Service (IaaS) を提供するオープンソースのクラウドコンピューティングプラットフォームです
- [OpenNebula](https://opennebula.io/) - クラウドおよび仮想化管理、ハイパーバイザー運用、Kubernetes オーケストレーションにわたるエンドツーエンドのカバレッジ、ベンダー中立性、包括的なサポートを提供する、エンタープライズ向けのクラウド・仮想化プラットフォームです

### クラウドアーキテクチャフレームワーク

- [AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html) - クラウドでワークロードを設計・実行するための主要な概念、設計原則、アーキテクチャのベストプラクティスを説明するフレームワークです
- [Azure Architecture Center](https://learn.microsoft.com/en-us/azure/architecture/) - Azure 上で安全かつ高パフォーマンス、レジリエントで効率的なインフラストラクチャを構築するためのガイダンス、パターン、ベストプラクティスのセットです
- [Azure Well-Architected Framework](https://learn.microsoft.com/en-us/azure/well-architected/) - ソリューションアーキテクトがワークロードの技術的基盤を構築できるよう支援することを目的とした、品質重視の原則、アーキテクチャ上の意思決定ポイント、レビューツールのセットです

## 設定のコード化

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > クラウドインフラ活用

:::

### Infrastructure as Code (IaC)

- [Hashicorp Terraform](https://www.terraform.io/) - インフラストラクチャを安全かつ効率的に構築、変更、バージョン管理できる Infrastructure as Code ツールです
- [OpenTofu](https://opentofu.org/) - インフラストラクチャの構築と管理のための安定したドロップイン代替を提供する、オープンソースでコミュニティ主導の Terraform フォークです
- [Pulumi](https://www.pulumi.com/) - 使い慣れたプログラミング言語とツールを使ってクラウドインフラストラクチャを構築、デプロイ、管理できる Infrastructure as Code プラットフォームです

### AI 駆動インフラ

- [Spacelift Intent](https://spacelift.io/platform/intent) - 自然言語を使ってクラウドインフラストラクチャをプロビジョニング・管理できる AI 搭載ツールです

### 構成管理 & 自動化

- [Ansible](https://www.ansible.com/) - プロビジョニング、構成管理、アプリケーションデプロイ、オーケストレーションなど、多くの IT プロセスを自動化するオープンソースの IT 自動化エンジンです
- [SaltStack](https://saltproject.io/) - イベント駆動の IT 自動化、リモートタスク実行、構成管理のための Python ベースのオープンソースソフトウェアです
- [Rudder](https://www.rudder.io/) - IT インフラストラクチャの自動化のための、オープンソースの継続的な構成・コンプライアンスプラットフォームです
- [cloud-init](https://cloud-init.io/) - クラウドインスタンスをカスタマイズするための標準規格です

### イメージビルド

- [Hashicorp Packer](https://packer.io/) - 単一のソース構成から複数のプラットフォーム向けに同一のマシンイメージを作成するツールです

### エコシステム & ベンダーツール

- Terraform/OpenTofu エコシステム
  - [Terraform/OpenTofu Provider: Core Functions](https://github.com/northwood-labs/terraform-provider-corefunc) - コア関数を実行するための Terraform/OpenTofu プロバイダーです
  - [Terragrunt](https://terragrunt.gruntwork.io/) - 構成を DRY に保ち、複数の Terraform モジュールを扱い、リモートステートを管理するための追加ツールを提供するシンラッパーです
  - [TerraTest](https://terratest.gruntwork.io/) - インフラストラクチャのテストのためのパターンとヘルパー関数を提供する Go ライブラリです
  - [Atmos](https://atmos.tools/) - ワークフローをオーケストレーションし、インフラストラクチャの管理を簡素化する、DevOps とクラウドエンジニアリングのためのユニバーサルツールです
  - [GitLab-managed Terraform/OpenTofu state](https://docs.gitlab.com/ee/user/infrastructure/iac/terraform_state.html) - Terraform のステートファイルを GitLab に保存できる機能です
  - [tf.libsonnet](https://docs.tflibsonnet.com/) - Terraform コードを生成するための Jsonnet ライブラリのコレクションです
  - [terraform-docs](https://terraform-docs.io/) - さまざまな出力フォーマットで Terraform モジュールからドキュメントを生成するユーティリティです
  - [Terraformer](https://github.com/GoogleCloudPlatform/terraformer) - 既存のインフラストラクチャから Terraform ファイルを生成する CLI ツールです
  - [Atlantis](https://www.runatlantis.io/) - Webhook 経由で Terraform のプルリクエストイベントをリッスンするセルフホスト型の Golang アプリケーションです
- ベンダー固有のツール
  - [AWS CloudFormation](https://aws.amazon.com/cloudformation/) - Amazon Web Services のリソースのモデル化とセットアップを支援するサービスです
  - [AWS CDK](https://aws.amazon.com/cdk/) - 使い慣れたプログラミング言語を使ってクラウドアプリケーションリソースを定義するためのオープンソースのソフトウェア開発フレームワークです
  - [AWS SAM](https://aws.amazon.com/serverless/sam/) - サーバーレスアプリケーションを構築するためのオープンソースフレームワークです
  - [SST](https://sst.dev/) - サーバーレスおよびイベント駆動アーキテクチャに特化した、AWS 上でフルスタックアプリケーションを簡単に構築できるフレームワークです
  - [Azure Resource Manager](https://docs.microsoft.com/en-us/azure/azure-resource-manager/) - Azure のデプロイと管理のためのサービスです
    - [Bicep language](https://github.com/Azure/bicep) - 宣言的な構文を使って Azure リソースをデプロイするドメイン固有言語 (DSL) です
    - [Azure Resource Graph](https://azure.microsoft.com/en-us/get-started/azure-portal/resource-graph) - クラウドリソースを大規模にクエリ、探索、分析できる強力な管理ツールです

## コンテナ化

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > クラウドインフラ活用

:::

- [Containerization](https://en.wikipedia.org/wiki/Containerization_(computing)) - オペレーティングシステムレベルの仮想化の一形態です
- コンテナ向け Linux ディストリビューション
  - [Alpine Linux](https://alpinelinux.org/) - musl libc と busybox をベースにした、セキュリティ重視の軽量な Linux ディストリビューションです
    - [apk-tools](https://gitlab.alpinelinux.org/alpine/apk-tools) - もともと Alpine Linux 向けに構築されたパッケージマネージャーです
  - [Fedora CoreOS](https://fedoraproject.org/coreos/) - コンテナ化されたワークロードを安全かつ大規模に実行するための、自動更新される最小限のオペレーティングシステムです
  - [Flatcar Container Linux](https://www.flatcar.org/) - コンテナ向けの不変な Linux ディストリビューションです
- コンテナ内のユーティリティ
  - [busybox](https://busybox.net/about.html) - 多くの一般的な UNIX ユーティリティの小型版を組み合わせた、単一の小さな実行ファイルです
- 標準規格
  - [The Open Container Initiative (OCI)](https://opencontainers.org/) - コンテナフォーマットとランタイムに関するオープンな業界標準を作成することを明確な目的とした、オープンなガバナンス構造です
  - [Compose Specification](https://compose-spec.io/) - クラウドおよびプラットフォームに依存しないコンテナベースのアプリケーションを定義するための、開発者向けの標準です
  - [Development Containers](https://containers.dev/) - コンテナに開発固有の設定、ツール、構成を追加するためのオープンな仕様です

### エンジン & ランタイム

- コンテナエンジン
  - [Docker Engine](https://docs.docker.com/engine/) - アプリケーションの構築とコンテナ化を行うためのオープンソースのコンテナ化技術です
    - [Docker Rootless mode](https://docs.docker.com/engine/security/rootless/) - Docker デーモンとコンテナを非 root ユーザーとして実行できるようにし、潜在的な脆弱性を軽減する機能です
  - [podman](https://podman.io/) - コンテナと Pod の構築、管理、実行のための強力なコンテナエンジンです
    - [podman-static](https://github.com/mgoltzsche/podman-static) - Linux 向けの Alpine ベースのコンテナイメージと静的リンクされた (rootless) バイナリです
  - [WSL Container](https://learn.microsoft.com/en-us/windows/wsl/wsl-container) - Windows 上で Linux コンテナのビルド、実行、管理を行うための CLI (`wslc.exe`) と API を提供する、Windows Subsystem for Linux 組み込みのコンテナエンジンです
- コンテナランタイム
  - [containerd](https://containerd.io/) - シンプルさ、堅牢性、ポータビリティを重視した、業界標準のコンテナランタイムです
    - [nerdctl](https://github.com/containerd/nerdctl) - containerd 向けの Docker 互換 CLI です
    - [ctr](https://manpages.debian.org/experimental/containerd/ctr.1.en.html) - containerd デーモンとやり取りするための、サポート対象外のデバッグ・管理クライアントです
  - [CRI-O](https://cri-o.io/) - OCI (Open Container Initiative) 互換のランタイムを使用できるようにする、Kubernetes CRI (Container Runtime Interface) の実装です
    - [cri-tools](https://github.com/kubernetes-sigs/cri-tools) - CRI のためのツールセットです
- OCI ランタイム
  - [runc](https://github.com/opencontainers/runc) - OCI 仕様に従ってコンテナを生成・実行するための CLI ツールです
  - [crun](https://github.com/containers/crun) - コンテナを実行するための、高速で軽量なフル機能の OCI ランタイムおよび C ライブラリです

### イメージ管理

- イメージビルドツール
  - [Docker Build](https://docs.docker.com/build/) - Dockerfile とコンテキストから Docker イメージを作成するプロセスを自動化する、Docker Engine の一部です
  - [buildah](https://buildah.io/) - Open Container Initiative (OCI) コンテナイメージの構築を容易にするツールです
  - [podman build](https://docs.podman.io/en/latest/markdown/podman-build.1.html) - Containerfile または Dockerfile の指示を解釈し、内部処理に Buildah を活用して OCI 互換のコンテナイメージを構築するコマンドです
  - [Kaniko](https://github.com/GoogleContainerTools/kaniko) - コンテナまたは Kubernetes クラスター内で、Dockerfile からコンテナイメージを構築するツールです
  - [Cloud Native Buildpacks](https://buildpacks.io/) - Dockerfile を使わずに、アプリケーションのソースコードをあらゆるクラウドで実行できるイメージに変換するツールです
- イメージ検査 & 管理ツール
  - [skopeo](https://github.com/containers/skopeo) - コンテナイメージとイメージリポジトリに対してさまざまな操作を実行するコマンドラインユーティリティです
  - [dive](https://github.com/wagoodman/dive) - Docker イメージとレイヤーの内容を調べ、Docker/OCI イメージのサイズを縮小する方法を見つけるためのツールです
  - [regclient](https://github.com/regclient/regclient) - マルチプラットフォームイメージやミラーリングなどの高度な機能をサポートする、OCI レジストリとイメージの管理・検査のためのコマンドラインツール群 (regctl、regsync、regbot) です
- コンテナレジストリ
  - [GitLab Container Registry](https://docs.gitlab.com/ee/user/packages/container_registry/index.html) - Docker イメージのための安全なプライベートレジストリです
  - [Project Quay](https://www.projectquay.io/) - コンテナの構築、整理、配布、デプロイのために設計された、オープンソースのコンテナネイティブなイメージレジストリです
  - [Docker Hub](https://docs.docker.com/docker-hub/) - 開発者やチームが Docker コンテナイメージを保存、共有、配布できるクラウドベースのレジストリサービスです
  - [Amazon ECR](https://aws.amazon.com/ecr/) - コンテナイメージとアーティファクトの保存、管理、共有、デプロイを簡単に行えるフルマネージドのコンテナレジストリです
  - [Azure Container Registry](https://azure.microsoft.com/en-us/services/container-registry/) - コンテナイメージと関連アーティファクトを管理するためのプライベートレジストリです
  - [Harbor](https://goharbor.io/) - ポリシーとロールベースのアクセス制御でアーティファクトを保護する、オープンソースのレジストリです

### 環境 & 管理

- コンテナ管理ツール
  - [Podman Desktop](https://podman-desktop.io/) - コンテナ管理の簡素化、Kubernetes ワークフローの効率化、ローカル開発から本番環境へのスムーズな移行を実現する、開発者がコンテナと Kubernetes を扱うための最良の無料オープンソースツールです
  - [lazydocker](https://github.com/jesseduffield/lazydocker) - docker と docker-compose の両方に対応したターミナル UI です
  - [Docker Compose](https://docs.docker.com/compose/) - マルチコンテナの Docker アプリケーションを定義・実行するためのツールです
- 開発環境プロビジョニング
  - [devcontainers CLI](https://github.com/devcontainers/cli) - devcontainer.json から開発コンテナを作成・設定できる仕様のリファレンス実装で、さまざまなインフラストラクチャにわたって開発コンテナの構築、実行、管理を行うためのコマンドを提供します
  - [DevPod](https://devpod.sh/) - オープン標準の devcontainer.json フォーマットを使って dev-environments-as-code を実現するクライアントのみのツールで、ローカルマシン、Kubernetes クラスター、クラウドプロバイダーなど、あらゆるインフラストラクチャをサポートします
- ローカル環境プロビジョナー (Mac 向け)
  - [Colima](https://github.com/abiosoft/colima) - 最小限のセットアップで macOS (および Linux) 上にコンテナランタイムを提供するツールです
  - [Lima](https://lima-vm.io/) - 自動的なファイル共有とポートフォワーディングを備えた Linux 仮想マシンを起動するツールです

## WebAssembly

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.2 デジタルテクノロジー > その他先端技術

:::

- 標準規格
  - [WebAssembly](https://webassembly.org/) - スタックベースの仮想マシン向けのバイナリ命令フォーマットです
  - [WebAssembly System Interface (WASI)](https://github.com/WebAssembly/WASI) - WebAssembly のためのモジュール式システムインターフェースです
  - [WASIX](https://wasix.org/) - 既存の WASI ABI の長期的な安定化とサポート、および追加の非侵襲的なシステムコール拡張です
  - [WebAssembly Component Model](https://github.com/WebAssembly/component-model) - WASI Preview 2 の一部として開発された、型付けされた言語非依存のインターフェースを通じてモジュールが相互運用できるようにするバイナリインターフェース標準です
- ランタイム
  - [wazero](https://wazero.io/) - Go で書かれた、依存関係ゼロの唯一の WebAssembly ランタイムです
  - [Wasmtime](https://wasmtime.dev/) - WebAssembly 向けの高速で安全なランタイムです
  - [Wasmer](https://wasmer.io/) - 非常に軽量なコンテナをどこでも実行できるようにする、超高速で安全な WebAssembly ランタイムです
  - [WasmEdge](https://wasmedge.org/) - クラウドネイティブ、エッジ、分散型アプリケーション向けの、軽量で高性能かつ拡張可能なランタイムです
  - [WebAssembly Micro Runtime (WAMR)](https://github.com/bytecodealliance/wasm-micro-runtime) - 組み込み、IoT、エッジ、Trusted Execution Environment での利用向けに、小さなフットプリントと高度に設定可能な機能を備えた軽量なスタンドアロンランタイムです

- ツールチェーン & 言語
  - [Emscripten](https://emscripten.org/) - 速度、サイズ、ウェブプラットフォームに特に重点を置いた、LLVM を使用する WebAssembly 向けの完全なコンパイラツールチェーンです
  - [AssemblyScript](https://www.assemblyscript.org/) - WebAssembly 向けの TypeScript に似た言語です
  - [TinyGo](https://tinygo.org/) - 組み込みシステムと WebAssembly に Go 言語をもたらす、小さな場所向けの Go コンパイラです
  - [Binaryen](https://github.com/WebAssembly/binaryen) - C++ で書かれた、WebAssembly 向けのコンパイラおよびツールチェーンインフラストラクチャライブラリです

- クラウド & エッジプラットフォーム
  - [wasmCloud](https://wasmcloud.com/) - クラウド、Kubernetes、エッジにまたがる再利用可能な WebAssembly コンポーネントで構成された多言語アプリケーションを構築するための、オープンソースの CNCF プロジェクトです
  - [Fermyon Spin](https://www.fermyon.com/spin) - WebAssembly マイクロサービスとウェブアプリケーションを構築するための開発者向けツールです

## Kubernetes

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > クラウドインフラ活用

:::

- [Kubernetes](https://kubernetes.io/) - コンテナ化されたアプリケーションのデプロイ、スケーリング、管理を自動化するオープンソースシステムです
- マスターノード
  - kube-apiserver - API サービスを担当します
  - kube-scheduler - スケジューリングを担当します
  - kube-controller-manager - コンテナオーケストレーションを担当します
- コンピュートノード
  - kubelet - そのノード上の Pod について API サーバーを監視し、実行中であることを確認します
  - cAdvisor - 特定のノードで実行中の Pod に関するメトリクスを収集します
  - kube-proxy - ネットワークを最新の状態に保つために、Pod やサービスの変更について API サーバーを監視します
  - container runtime - そのノード上でコンテナイメージの管理とコンテナの実行を担当します
- インターフェース標準
  - CNI (Container Networking Interface)
  - CSI (Container Storage Interface)
  - CRI (Container Runtime Interface)

### コアコンセプト & コンポーネント

- K8s の内部構造
  - [Workloads](https://kubernetes.io/docs/concepts/workloads/) - クラスター上でコンテナを管理・実行するために使用するオブジェクトです
  - Pod
    - [assignment](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/) - Pod を特定のノードでのみ実行されるように制限したり、特定のノードでの実行を優先させたりするプロセスです
    - [taint and toleration](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/) - Pod が不適切なノードに配置されないようにするためのメカニズムです
    - [lifecycle](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/) - Pod のライフサイクルです
    - [liveness probe](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/) - kubelet がコンテナをいつ再起動すべきかを判断するために使用するプローブです
    - requests and limits
    - eviction
  - Deployment、ReplicaSet、StatefulSet、DaemonSet
  - [Kubernetes network model](https://kubernetes.io/docs/concepts/services-networking/) - Kubernetes クラスターにおけるネットワーキングの基本的な要件と原則のセットです
    - Service、Ingress、Ingress Controllers
  - [Storage](https://kubernetes.io/docs/concepts/storage/) - ストレージの提供方法と消費方法を抽象化する API を備えた、強力なボリュームサブシステムです
    - PersistentVolume、PVC、StorageClass
  - [Configuration](https://kubernetes.io/docs/concepts/configuration/) - アプリケーションを実行する Pod に構成データを注入できる、さまざまなメカニズムです
    - Secret、ConfigMap
  - セキュリティ & ポリシー
    - [Kubernetes RBAC](https://kubernetes.io/docs/reference/access-authn-authz/rbac/) - 企業内の個々のユーザーの役割に基づいて、コンピュータまたはネットワークリソースへのアクセスを規制する方法です
    - [PodDisruptionBudget](https://kubernetes.io/docs/tasks/run-application/configure-pdb/) - アプリケーションが経験する同時中断の数を制限し、高可用性を実現するオブジェクトです
    - [Security context](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/) - Pod またはコンテナに対する権限とアクセス制御の設定を定義するものです
- オートスケーリング
  - [HPA](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/) - 観測された CPU 使用率に基づいて、レプリケーションコントローラー、Deployment、ReplicaSet、StatefulSet 内の Pod 数を自動的にスケールするコンポーネントです
  - [Cluster Autoscaler](https://github.com/kubernetes/autoscaler/tree/master) - Kubernetes クラスターのサイズを自動的に調整するツールです
  - [Karpenter](https://karpenter.sh/) - 柔軟で高性能な Kubernetes クラスターオートスケーラーです

### 運用 & 管理

- K8s オペレーター
  - [Prometheus Operator](https://prometheus-operator.dev/) - Kubernetes 上で Prometheus クラスターを作成・設定・管理するオペレーターです
    - [kube-prometheus](https://github.com/prometheus-operator/kube-prometheus) - エンドツーエンドの Kubernetes クラスター監視を簡単に運用できるようにする、Kubernetes マニフェスト、Grafana ダッシュボード、Prometheus ルールとドキュメントおよびスクリプトを組み合わせたコレクションです
  - [Grafana Operator](https://grafana.github.io/grafana-operator/) - Kubernetes と OpenShift 環境においてカスタムリソースを通じて Grafana インスタンス、ダッシュボード、データソースの管理を効率化する Kubernetes オペレーターです
  - [OpenTelemetry Operator](https://opentelemetry.io/docs/kubernetes/operator/) - OpenTelemetry のための Kubernetes Operator の実装です
  - [Elastic Cloud on Kubernetes (ECK)](https://www.elastic.co/elastic-cloud-kubernetes) - Kubernetes 上で Elastic Stack を運用するための公式オペレーターです
  - [Rook](https://rook.io/) - Kubernetes 向けのオープンソースのクラウドネイティブストレージオーケストレーターです
- ダッシュボード
  - [k9s](https://k9scli.io/) - Kubernetes クラスターを操作するためのターミナルベースの UI です
  - [KDash](https://kdash.cli.rs/) - Rust で構築された、シンプルな Kubernetes ターミナルダッシュボードです
  - [Seabird](https://getseabird.github.io/) - Kubernetes の操作を簡素化するネイティブデスクトップアプリです
  - [Headlamp](https://headlamp.dev/) - 拡張性に重点を置いた、使いやすい Kubernetes UI です

### CLI & ローカル環境

- CLI プラグイン管理
  - [Krew](https://krew.sigs.k8s.io/) - kubectl コマンドラインツールのプラグインマネージャーです
    - [kubectl-node-shell](https://github.com/kvaps/kubectl-node-shell) - ノード上で root シェルを実行するための kubectl プラグインです
    - [kubectl-tree](https://github.com/ahmetb/kubectl-tree#readme) - Kubernetes オブジェクト間の所有関係を調べるための kubectl プラグインです
    - [kubectl-pod-inspect](https://github.com/jpriebe/kubectl-pod-inspect#readme) - Pod とコンテナのステータスを一目で確認できる kubectl プラグインです
    - [kubepug](https://github.com/rikatz/kubepug) - Kubernetes API のプリフライトチェックツールです
    - [rakkess](https://github.com/corneliusweig/rakkess) - 利用可能なすべてのリソースのアクセスマトリックスを表示する kubectl プラグインです
    - [ketall](https://github.com/corneliusweig/ketall) - すべてのリソースを取得する kubectl プラグインです
- ローカル K8s ツール
  - [Minikube](https://minikube.sigs.k8s.io/docs/) - Kubernetes をローカルで実行できるツールです
  - [Kind](https://kind.sigs.k8s.io/) - Docker コンテナの「ノード」を使ってローカルの Kubernetes クラスターを実行するツールです

### エコシステム & 拡張機能

- アプリケーションパッケージング & 構成
  - [Helm](https://helm.sh/) - Kubernetes のパッケージマネージャーです
  - [Kustomize](https://kustomize.io/) - kustomization ファイルを通じて Kubernetes オブジェクトをカスタマイズするスタンドアロンツールです
  - [Artifact Hub](https://artifacthub.io/) - クラウドネイティブなパッケージと構成の検索、インストール、公開を容易にするために設計された、ウェブベースのアプリケーションです
- クラウドリソース管理
  - [Crossplane](https://crossplane.io/) - ユーザーがコントロールプレーンを使って独自の API やサービスを構築できるようにする、プラットフォームエンジニアリング向けのクラウドネイティブフレームワークで、Kubernetes を拡張してあらゆる場所のあらゆるリソースを管理できるようにします
- 開発者ワークフローツール
  - [Skaffold](https://skaffold.dev/) - コンテナベースアプリケーションの継続的な開発を容易にするコマンドラインツールです
- プラットフォーム拡張機能
  - [kube-fencing](https://github.com/kvaps/kube-fencing) - Kubernetes におけるステートフルアプリケーションのノードのフェンシングのためのソリューションです
  - [KubeVirt](https://kubevirt.io/) - Kubernetes 向けの仮想マシン管理アドオンです
- オペレーター & コントローラー開発
  - [Kubebuilder](https://github.com/kubernetes-sigs/kubebuilder) - カスタムリソース定義 (CRD) を使って Kubernetes API を構築するためのフレームワークです
- リソース最適化
  - [Goldilocks](https://goldilocks.docs.fairwinds.com/) - リソースのリクエストとリミットの出発点を特定するのに役立つユーティリティです
- ベンダー固有のツール
  - [eksctl](https://eksctl.io/) - Amazon EKS の公式 CLI です
- バッチ & ジョブスケジューリング
  - [Kueue](https://kueue.sigs.k8s.io/) - バッチ、HPC、AI/ML ワークロードのためのクォータとリソース共有を管理する、Kubernetes ネイティブなシステムです

## クラウドネイティブコンピューティング

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > クラウドインフラ活用

:::

- [Serverless Computing](https://en.wikipedia.org/wiki/Serverless_computing) - クラウドプロバイダーがオンデマンドでマシンリソースを割り当て、顧客に代わってサーバーの管理を行う、クラウドコンピューティングの実行モデルです

### Container as a Service (CaaS)

- マネージド Kubernetes
  - [Google Kubernetes Engine (GKE)](https://cloud.google.com/kubernetes-engine) - コンテナ化されたアプリケーションを実行するための、マネージドで本番運用対応の環境です
  - [Amazon Elastic Kubernetes Service](https://aws.amazon.com/eks/) - AWS およびオンプレミスで Kubernetes を簡単に実行できるようにするマネージドサービスです
  - [Azure Kubernetes Service (AKS)](https://azure.microsoft.com/en-us/products/kubernetes-service/) - コンテナ化されたアプリケーションのデプロイと管理のための、フルマネージドの Kubernetes サービスです
- シンプルなコンテナホスティング
  - [Amazon Elastic Container Service](https://aws.amazon.com/ecs/) - コンテナ化されたアプリケーションのデプロイ、管理、スケーリングを容易にする、フルマネージドのコンテナオーケストレーションサービスです
  - [AWS Fargate](https://aws.amazon.com/fargate/) - ECS と EKS の両方で動作する、コンテナ向けのサーバーレスコンピューティングエンジンです
  - [AWS App Runner](https://aws.amazon.com/apprunner/) - インフラストラクチャの事前経験がなくても、開発者がコンテナ化されたウェブアプリケーションや API を大規模かつ迅速にデプロイできるようにする、フルマネージドサービスです
  - [Azure Container Apps](https://azure.microsoft.com/en-us/products/container-apps/) - マイクロサービスとイベント駆動ワークロード向けに KEDA、Dapr、Envoy を統合した、Kubernetes 上に構築されたフルマネージドのサーバーレスコンテナサービスです
  - [Google Cloud Run](https://cloud.google.com/run) - 自動的にスケールされるコンテナを実行できるマネージドコンピューティングプラットフォームです

### Function as a Service (FaaS)

- [AWS Lambda](https://aws.amazon.com/lambda/) - サーバーのプロビジョニングや管理を行うことなく、事実上あらゆる種類のアプリケーションやバックエンドサービスのコードを実行できる、サーバーレスでイベント駆動型のコンピューティングサービスです
- [Azure Functions](https://azure.microsoft.com/en-us/services/functions/) - 好みのプログラミング言語を使ってより効率的に開発できるようにする、イベント駆動型のサーバーレスコンピューティングプラットフォームです
- [Google Cloud Run Functions](https://cloud.google.com/functions) - クラウドサービスの構築と接続のためのサーバーレス実行環境です

### 高度なランタイム & 分離

- サンドボックス化されたランタイム
  - [Kata Containers](https://katacontainers.io/) - コンテナのような使用感と性能を持ちながら、仮想マシンのワークロード分離とセキュリティを提供する軽量仮想マシンの標準実装を構築する、オープンソースプロジェクトです
  - [gVisor](https://gvisor.dev/) - Linux カーネルとそのネットワークスタックを実装し、システムコールをインターセプトすることでホストをコンテナ化されたアプリケーションから保護する、Linux 互換のサンドボックスです
  - [libkrun](https://github.com/containers/libkrun) - 仮想化ベースのプロセス分離機能を提供する動的ライブラリです
  - [Microsoft eXecution Container (MXC)](https://github.com/microsoft/mxc) - Windows、Linux、macOS にまたがり、複数の封じ込めバックエンドとポリシー駆動のセキュリティ制御を用いて信頼できないコードを実行する、クロスプラットフォームのサンドボックス化コード実行システムです
  - [Cloud Hypervisor](https://www.cloudhypervisor.org/) - 最小限のハードウェアエミュレーションでモダンなクラウドワークロードの実行に重点を置いた、Rust で実装されたオープンソースの Virtual Machine Monitor (VMM) です
  - [Firecracker](https://firecracker-microvm.github.io/) - セキュアなマルチテナントのコンテナおよびファンクションベースのサービスの作成・管理を目的として設計された、オープンソースの仮想化技術です
  - [AWS Lambda MicroVMs](https://aws.amazon.com/lambda/lambda-microvms/) - Firecracker 仮想化技術を基盤に、ほぼ瞬時の起動と再開機能を備えた VM レベルの分離を提供する、サーバーレスコンピューティングサービスです
  - [QEMU microvm](https://www.qemu.org/docs/master/system/i386/microvm.html) - PCI も ACPI もサポートしないミニマルなマシンタイプで、短命なゲスト向けに設計され、起動時間とフットプリントの両方に最適化されています
  - [Docker Sandboxes](https://github.com/docker/sandboxes-releases) - セキュリティとシステム保護を強化するために、軽量な microVM 内で AI コーディングエージェントを実行するように設計された、隔離された使い捨て環境です
  - [Daytona](https://www.daytona.io/) - 90 ミリ秒未満の作成時間で、隔離されたサンドボックス環境において AI 生成コードを実行するための、セキュアなインフラストラクチャプラットフォームです
  - [Modal](https://modal.com/) - エンジニアが数千の隔離されたサンドボックスの中で計算負荷の高いアプリケーションを構築・スケールできるサーバーレスクラウドを提供する、AI インフラストラクチャプラットフォームです
- 仮想化 & コンテナストレージ
  - [virtiofs](https://virtio-fs.gitlab.io/) - 仮想マシンがホスト上のディレクトリツリーにアクセスできるようにする共有ファイルシステムです
- イメージサービス & 配布
  - [Nydus](https://nydus.dev/) - コンテナイメージやソフトウェアパッケージなど、クラウドネイティブなワークロード向けの高効率なイメージ配布システムを構築するための、強力なオープンソースのファイルシステムソリューションです

### クラウドネイティブインフラ

- アプリランタイム & スケーリング
  - [KEDA (Kubernetes Event-driven Autoscaling)](https://keda.sh/) - あらゆるクラスターに追加でき、環境内で実行されているあらゆるコンテナにイベント駆動型のスケーリングを提供する、単一目的の軽量なコンポーネントです
  - [Dapr (Distributed Application Runtime)](https://dapr.io/) - クラウドとエッジ上で動作するレジリエントなステートレス・ステートフルアプリケーションを、あらゆる開発者が簡単に構築できるようにするポータブルでイベント駆動型のランタイムで、言語や開発者フレームワークの多様性を受け入れます
  - [V8 isolates](https://v8.dev/docs/embed#isolates) - 独自のヒープと独自のガベージコレクターを持つ、エンジンの独立したインスタンスです
- サーバーレスコンピューティング
  - [Knative](https://knative.dev/) - モダンなサーバーレスワークロードを構築、デプロイ、管理するための Kubernetes ベースのプラットフォームです
- サービスメッシュ & ディスカバリー
  - [Gateway API](https://gateway-api.sigs.k8s.io/) - Kubernetes の Ingress、ロードバランシング、サービスメッシュ API の次世代版です
  - [Istio](https://istio.io/) - 既存の分散アプリケーションに透過的にレイヤーされる、オープンソースのサービスメッシュです
    - [Kiali](https://kiali.io/) - Istio 向けのサービスメッシュオブザーバビリティ・構成ツールです
  - [Linkerd](https://linkerd.io/) - Kubernetes 向けの超軽量でセキュリティ重視のサービスメッシュです
  - [Hashicorp Consul](https://www.consul.io/) - あらゆるランタイムプラットフォームおよびパブリック/プライベートクラウドにわたってサービスを接続・保護する、サービスネットワーキングソリューションです
- エッジプロキシ & Ingress
  - [Envoy Proxy](https://www.envoyproxy.io/) - オープンソースのエッジ・サービスプロキシです
  - [Traefik proxy](https://traefik.io/traefik/) - 主要なモダンオープンソースのリバースプロキシ兼 Ingress コントローラーです
  - [Contour](https://projectcontour.io/) - Envoy のエッジ・サービスプロキシのコントロールプレーンを提供する、Kubernetes 向けの高性能な Ingress コントローラーです
  - [Apache APISIX](https://apisix.apache.org/) - マイクロサービスの管理を支援し、すべての API とマイクロサービスに究極のパフォーマンス、セキュリティ、スケーラビリティを提供するプラットフォームである、オープンソースの API ゲートウェイです
- クラウドネイティブネットワーキング
  - [Project Calico](https://projectcalico.org/) - コンテナ、仮想マシン、ネイティブホストベースのワークロード向けに、安全なネットワーク接続、ネットワークセキュリティ、オブザーバビリティを提供する、オープンソースプロジェクトです
  - [Cilium](https://cilium.io/) - クラウドネイティブ環境向けにネットワーキング、セキュリティ、オブザーバビリティを提供する、オープンソースプロジェクトです
  - [Flannel](https://github.com/flannel-io/flannel) - Kubernetes 向けに設計されたレイヤー 3 ネットワークファブリックを構成するための、シンプルで簡単な方法です

## CI/CD & GitOps

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > SREプロセス

:::

### デリバリー & デプロイメント

- 継続的デリバリーツール
  - [Harness](https://harness.io/) - AI と自動化を使って CI/CD、GitOps、クラウドコスト管理を効率化する、モダンなソフトウェアデリバリープラットフォームです
  - [Jenkins](https://www.jenkins.io/) - 世界中の開発者がソフトウェアを確実に構築、テスト、デプロイできるようにする、オープンソースの自動化サーバーです
    - [Blue Ocean for Jenkins Pipelines](https://www.jenkins.io/projects/blueocean/) - Jenkins のユーザー体験を再考するプロジェクトです
    - [Python Jenkins](https://opendev.org/jjb/python-jenkins) - Jenkins REST API の Python ラッパーです
    - [JenkinsPipelineUnit](https://github.com/jenkinsci/JenkinsPipelineUnit) - Groovy または Declarative で記述された Jenkins パイプラインをユニットテストするためのテストフレームワークです
  - [GitLab CI/CD](https://docs.gitlab.com/ee/ci/) - ソースコードのビルド、統合、検証を自動化するために使用できる、GitLab の一部です
  - [GitHub Actions](https://github.com/features/actions) - あらゆるソフトウェアワークフローを簡単に自動化できるようにする機能です
    - [actionlint](https://github.com/rhysd/actionlint) - GitHub Actions のワークフローファイル向けの静的チェッカーです
    - [act](https://github.com/nektos/act) - GitHub Actions をローカルで実行するためのツールです
  - [Azure Pipelines](https://learn.microsoft.com/en-us/azure/devops/pipelines/) - コードプロジェクトを自動的にビルド・テストし、他のユーザーが利用できるようにするために使用できるクラウドサービスです
- アプリケーションデプロイ
  - [Kamal](https://kamal-deploy.org/) - どこにでもウェブアプリをデプロイできるツールです

### GitOps & クラウドネイティブ

- GitOps スタイルの CD
  - [ArgoCD](https://argo-cd.readthedocs.io/) - Kubernetes 向けの宣言的な GitOps 継続的デリバリーツールです
  - [FluxCD](https://fluxcd.io/) - Kubernetes クラスターを (Git リポジトリなどの) 構成のソースと同期させ、デプロイすべき新しいコードがある場合に構成の更新を自動化するツールです
- クラウドネイティブアプリケーションデリバリー
  - [Open Application Model](https://oam.dev/) - あらゆるプラットフォームにわたってデプロイ・管理できるようにアプリケーションを記述するための仕様です
  - [KubeVela](https://kubevela.io/) - 今日のハイブリッドなマルチクラウド環境全体にわたるアプリケーションのデプロイと運用を、より簡単、迅速、信頼性の高いものにする、モダンなソフトウェアデリバリープラットフォームです
  - [Flagger](https://flagger.app/) - Kubernetes 上で実行されるアプリケーションのリリースプロセスを自動化する、プログレッシブデリバリーツールです

### インテグレーション & レジストリ

- プライベートパッケージレジストリ
  - [JFrog Artifactory](https://jfrog.com/artifactory/) - ソフトウェアアーティファクトとその依存関係を保存、管理、配布できる、ユニバーサルな DevOps リポジトリマネージャーです
  - [GitLab Package Registry](https://docs.gitlab.com/ee/user/packages/package_registry/index.html) - さまざまなサポート対象パッケージマネージャー向けにパッケージを公開・共有できる機能です
  - [GitHub Packages](https://github.com/features/packages) - ソフトウェアパッケージをプライベートまたはパブリックにホストできる、ソフトウェアパッケージホスティングサービスです
  - [Nexus Repository Manager 3](https://help.sonatype.com/repomanager3) - 高度なリポジトリマネージャーです
  - [Azure Artifacts](https://learn.microsoft.com/en-us/azure/devops/artifacts/) - パブリックおよびプライベートのソースから Maven、npm、NuGet、Python のパッケージフィードを作成・共有できるサービスです

## システムオブザーバビリティ

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > SREプロセス

:::

### インストゥルメンテーション & プラットフォーム

- コンセプト
  - [Observability](https://en.wikipedia.org/wiki/Observability_(software)) - システムの外部出力に関する知識から、その内部状態をどれだけよく推測できるかを示す尺度です
- インストゥルメンテーションライブラリ
  - [OpenTelemetry](https://opentelemetry.io/) - トレース、メトリクス、ログなどのテレメトリデータをインストゥルメント化、生成、収集、エクスポートするための、ベンダー中立なオープンソースのオブザーバビリティフレームワークです
  - [Jaeger](https://www.jaegertracing.io/) - 複雑な分散システムのワークフローを監視・トラブルシューティングするために使用される、オープンソースの分散トレーシングプラットフォームです
  - [Micrometer](https://micrometer.io/) - JVM ベースのアプリケーション向けのメトリクスインストゥルメンテーションライブラリです
- モニタリングツール
  - [Uptime Kuma](https://uptime.kuma.pet/) - 使いやすいセルフホスト型のモニタリングツールです
- マネージドプラットフォーム
  - [Azure Monitor](https://docs.microsoft.com/en-us/azure/azure-monitor/overview) - クラウドおよびオンプレミス環境からのテレメトリを収集、分析し、それに基づいて対応するための包括的なソリューションです
    - [Kusto Query Language](https://docs.microsoft.com/en-us/azure/data-explorer/kusto/query/) - データを探索してパターンを発見し、異常値や外れ値を特定し、統計モデルを作成するなど、さまざまなことができる強力なツールです
    - [App Insights](https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview) - 開発者と DevOps プロフェッショナル向けの拡張可能な Application Performance Management (APM) サービスである、Azure Monitor の機能です
  - [AWS CloudWatch](https://aws.amazon.com/cloudwatch/) - DevOps エンジニア、開発者、サイトリライアビリティエンジニア (SRE)、IT マネージャー向けに構築された、モニタリング・オブザーバビリティサービスです
  - [Datadog](https://www.datadoghq.com/) - モニタリング & セキュリティのための統合プラットフォームです
  - [Sentry](https://sentry.io/) - 開発者が重要な情報を把握し、問題をより迅速に解決できるよう、エラートラッキングとパフォーマンスモニタリングを提供するアプリケーションモニタリングプラットフォームです
- セルフホスト型 (上級者向け)
  - [SigNoz](https://signoz.io/) - ログ、メトリクス、トレース、ダッシュボード、アラートなどのための、オープンソースの Datadog または New Relic の代替です
- 可視化ツール
  - [Grafana](https://grafana.com/oss/grafana/) - オープンソースのデータ可視化・モニタリングソリューションです
    - [Grafonnet](https://grafana.github.io/grafonnet/) - Grafana ダッシュボードを生成するための Jsonnet ライブラリです
    - [gcx](https://github.com/grafana/gcx) - ダッシュボード、アラート、SLO、メトリクス、ログ、トレースといった Grafana リソースへの構造化されたアクセスを提供し、Grafana Cloud、Enterprise、セルフホストの各インスタンスにわたるオブザーバビリティ主導の開発ワークフローのために AI コーディングエージェントと統合する CLI ツールです
  - [Kibana](https://www.elastic.co/kibana) - Elasticsearch のデータを可視化し、Elastic Stack をナビゲートできる、無料でオープンなユーザーインターフェースです

### テレメトリ送信

- データシッパー
  - [Prometheus exporters](https://prometheus.io/docs/instrumenting/exporters/) - Prometheus メトリクスを公開するサービス群です
    - [node-exporter](https://prometheus.io/docs/guides/node-exporter/) - *NIX カーネルが公開するハードウェアと OS のメトリクス向けのエクスポーターです
    - [blackbox-exporter](https://github.com/prometheus/blackbox_exporter) - HTTP、HTTPS、DNS、TCP、ICMP、gRPC 経由でエンドポイントのブラックボックスプロービングを可能にするツールです
  - [Grafana Alloy](https://grafana.com/oss/alloy-opentelemetry-collector/) - Prometheus パイプラインを内蔵し、メトリクス、ログ、トレース、プロファイルをサポートする、オープンソースの OpenTelemetry コレクターです
  - [Fluent Bit](https://fluentbit.io/) - 超高速で軽量、高いスケーラビリティを備えたログ、メトリクス、トレースのプロセッサー兼フォワーダーです
  - [Fluentd](https://www.fluentd.org/) - データの収集と利用を統一し、データをより良く活用・理解できるようにする、オープンソースのデータコレクターです
  - [Filebeat](https://www.elastic.co/beats/filebeat) - ログデータの転送と集約のための軽量なシッパーです
  - [Logstash](https://www.elastic.co/logstash) - 多数のソースからデータを取り込み、変換したうえで好みの「stash」に送信する、オープンソースのサーバーサイドデータ処理パイプラインです
  - [Telegraf](https://www.influxdata.com/time-series-platform/telegraf/) - スタック、センサー、システムからメトリクスを収集するのに役立つ、オープンソースのサーバーエージェントです
  - [Metricbeat](https://www.elastic.co/beats/metricbeat) - サーバーにインストールし、オペレーティングシステムやサーバー上で実行中のサービスから定期的にメトリクスを収集できる、軽量なシッパーです
  - [rsyslog](https://www.rsyslog.com/) - ログ処理のためのロケット並みに高速なシステムです
- ベンダー固有のツール
  - [Azure Monitor Agent](https://learn.microsoft.com/en-us/azure/azure-monitor/agents/agents-overview) - Azure およびハイブリッド仮想マシンのゲスト OS からモニタリングデータを収集するエージェントです
  - [Cloudwatch Agent](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Install-CloudWatch-Agent.html) - Amazon EC2 インスタンスとオンプレミスサーバーの両方から、システムレベルのメトリクスとログファイルを収集するために使用できるエージェントです

### テレメトリ収集 & ストレージ

- データストア & アラートツール
  - [Prometheus](https://prometheus.io/) - オープンソースのシステムモニタリング・アラートツールキットです
    - [PromQL](https://prometheus.io/docs/prometheus/latest/querying/basics/) - Prometheus のクエリ言語です
    - [promtool](https://prometheus.io/docs/prometheus/latest/command-line/promtool/) - Prometheus サーバー向けのコマンドラインユーティリティです
    - [Awesome Prometheus Alerts](https://samber.github.io/awesome-prometheus-alerts/) - 90 を超えるサービスとエクスポーターにわたる、コピー & ペーストで使える Prometheus アラートルールのコレクションです
  - [Alertmanager](https://prometheus.io/docs/alerting/latest/alertmanager/) - Prometheus サーバーなどのクライアントアプリケーションから送信されるアラートを処理するツールです
    - [amtool](https://github.com/prometheus/alertmanager/tree/main?tab=readme-ov-file#amtool) - Alertmanager API とやり取りするための CLI ツールです
  - [InfluxDB](https://www.influxdata.com/products/influxdb-overview/) - 高い書き込み・クエリ負荷を扱えるようゼロから構築された時系列データベースです
    - [InfluxQL](https://docs.influxdata.com/influxdb/v1/query_language/) - InfluxDB 内のデータとやり取りするための、SQL に似たクエリ言語です
    - [influx cli](https://docs.influxdata.com/influxdb/cloud/reference/cli/influx/) - InfluxDB 2.0 のコマンドラインインターフェースです
  - [Grafana Mimir](https://grafana.com/oss/mimir/) - Prometheus のための、オープンソースで水平スケーラブル、高可用性、マルチテナントな長期ストレージです
  - [Grafana Loki](https://grafana.com/oss/loki/) - Prometheus にインスパイアされた、水平スケーラブルで高可用性、マルチテナントなログ集約システムです
    - [LogQL](https://grafana.com/docs/loki/latest/query/) - Loki のクエリ言語です
      - [LogCLI](https://grafana.com/docs/loki/latest/query/logcli/) - Loki のコマンドラインインターフェースです
  - [Grafana Tempo](https://grafana.com/oss/tempo/) - オープンソースで使いやすく、大規模にスケールする分散トレーシングバックエンドです
    - [TraceQL](https://grafana.com/docs/tempo/latest/traceql/) - トレースを選択するために設計されたクエリ言語です
  - [ElasticSearch](https://www.elastic.co/elasticsearch/) - オープンソースの分散型 RESTful 検索・分析エンジンであり、スケーラブルなデータストアかつベクターデータベースです
    - [Elastic Common Schema](https://www.elastic.co/guide/en/ecs/current/index.html) - Elastic ユーザーコミュニティのサポートを受けて開発された、オープンソースの仕様です
    - [Ingest pipelines](https://www.elastic.co/guide/en/elasticsearch/reference/current/ingest.html) - インデックス作成前にデータに対して一般的な変換処理を行える機能です
    - [Dissect and Grok](https://www.elastic.co/guide/en/elasticsearch/reference/current/esql-process-data-with-dissect-and-grok.html) - 単一のテキストフィールドから構造化されたフィールドを抽出できるプロセッサーです
  - [Graphite](https://grafana.com/oss/graphite/) - 高いスケーラビリティを備えたリアルタイムグラフ化システムです
  - [Grafana Alerting](https://grafana.com/docs/grafana/latest/alerting/) - データに対するアラートを作成・管理できる機能です
  - [OpenObserve](https://openobserve.ai/) - モダンなアプリケーション向けに設計された、オープンソースのオブザーバビリティプラットフォームです

## SRE (サイトリライアビリティエンジニアリング)

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > SREプロセス

:::

- [Site Reliability Engineering](https://landing.google.com/sre/) - ソフトウェアエンジニアリングの側面を取り入れ、それをインフラストラクチャと運用の問題に適用するディシプリンです
  - [Service Level Objectives (SLOs)](https://sre.google/sre-book/service-level-objectives/) - サービスレベルインジケーター (SLI) によって測定される、サービスレベルの目標値または値の範囲です
  - [Dickerson's Hierarchy of Service Reliability](https://sre.google/sre-book/part-III-practices/) - 信頼性の高いサービスを構築・維持するために必要な基礎的要素を示すモデルで、ピラミッドとして可視化されることが多いものです
  - [The Four Golden Signals](https://sre.google/sre-book/monitoring-distributed-systems/) - Google の SRE がユーザー向けシステムを監視するために使用する 4 つの主要なメトリクス (レイテンシ、トラフィック、エラー、サチュレーション) です
- [Ishikawa diagram](https://en.wikipedia.org/wiki/Ishikawa_diagram) - 石川馨が考案した、特定の事象の潜在的な原因を示す因果図です

### フリート管理 & 運用

- フリート管理
  - [AWS Systems Manager](https://aws.amazon.com/systems-manager/) - AWS、マルチクラウド、ハイブリッド環境上のリソースに対する、セキュアなエンドツーエンドの管理ソリューションです
  - [Azure Automation](https://azure.microsoft.com/en-us/products/automation) - Azure 環境と非 Azure 環境全体にわたる一貫した管理をサポートする、クラウドベースの自動化・構成サービスです
    - [Azure Update Manager](https://learn.microsoft.com/en-us/azure/update-manager/) - すべてのマシンの更新を管理・統制するための統合サービスです
- バックアップ
  - ベンダー固有のツール
    - [AWS Backup](https://aws.amazon.com/backup/) - AWS サービス、クラウド、オンプレミス全体にわたるデータ保護を一元化・自動化する、フルマネージドサービスです
    - [Azure Backup](https://azure.microsoft.com/en-us/products/backup/) - データをバックアップし、Microsoft Azure クラウドから復旧するための、シンプルでセキュア、コスト効率の高いソリューションを提供するサービスです
  - K8s 固有のツール
    - [Velero](https://velero.io/) - Kubernetes クラスターのリソースと永続ボリュームを安全にバックアップ・リストアし、ディザスタリカバリを実行し、移行するためのオープンソースツールです
  - 汎用ツール
    - [Barman](https://pgbarman.org/) - オンラインホットバックアップを簡素化することでビジネス継続性を確保するように設計された、PostgreSQL データベース向けのディザスタリカバリソリューションです
    - [Restic](https://restic.net/) - 高速、安全、効率的なバックアッププログラムです
- ランブック自動化
  - [RunDeck](https://www.rundeck.com/) - データセンターやクラウド環境における日常的な運用手順の自動化を支援する、オープンソースの自動化プラットフォームです
- AIOps & 自律エージェント
  - [Azure SRE Agent](https://aka.ms/sreagent) - 監視、診断、インシデント解決の支援を通じて SRE (サイトリライアビリティエンジニアリング) のプラクティスを自動化するように設計された、AI 搭載サービスです
  - [Mezmo Aura](https://www.mezmo.com/aura) - SRE (サイトリライアビリティエンジニアリング) と本番 AI 運用に特化して設計された、オープンソースのエージェント型ハーネスです

### カオスエンジニアリング

- コンセプト
  - [Chaos Engineering](https://en.wikipedia.org/wiki/Chaos_engineering) - 本番環境の乱流状態に耐えるシステムの能力への信頼を構築するために、システムに対して実験を行う手法です
  - [Principles of chaos engineering](https://principlesofchaos.org/) - カオスエンジニアリングという手法を定義する原則です
- カオスエンジニアリングツール
  - [Litmus](https://litmuschaos.io/) - Kubernetes 向けのクラウドネイティブなカオスエンジニアリングフレームワークです
  - [Chaos Mesh](https://chaos-mesh.org/) - Kubernetes 環境上でカオスをオーケストレーションする、クラウドネイティブなカオスエンジニアリングプラットフォームです
  - [Toxiproxy](https://github.com/Shopify/toxiproxy) - カオステストとレジリエンステストのために、ネットワークとシステムの状態をシミュレートする TCP プロキシです
  - [kubeinvaders](https://github.com/lucky-sideburn/kubeinvaders) - Kubernetes 向けのゲーミフィケーションされたカオスエンジニアリングツールです

### FinOps

- コンセプト
  - [FinOps principles](https://www.finops.org/framework/principles/) - クラウドの変動的な支出モデルに財務的説明責任をもたらす、文化的な実践です
- FinOps ツール
  - [FinOps toolkit](https://microsoft.github.io/finops-toolkit/) - 組織内で FinOps を実装するためのツール、リソース、ベストプラクティスのコレクションです
  - [AWS Cost Explorer](https://aws.amazon.com/aws-cost-management/aws-cost-explorer/) - コストと使用状況を表示・分析できるツールです
  - [Infracost](https://www.infracost.io/) - Terraform、CloudFormation、その他の Infrastructure as Code プロジェクトのクラウドコスト見積もりを表示するツールです
  - [OpenCost](https://www.opencost.io/) - Kubernetes の支出を監視するためのオープンソースソリューションです
  - [Cloud Custodian](https://cloudcustodian.io/) - パブリッククラウドのアカウントとリソースを管理するためのルールエンジンです

## パフォーマンス & 負荷テスト

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > SREプロセス

:::

- [Performance Testing](https://en.wikipedia.org/wiki/Software_performance_testing) - 特定のワークロード下でシステムの応答性と安定性がどう機能するかを評価する手法です

### パフォーマンステストツール

- [Hyperfine](https://github.com/sharkdp/hyperfine) - コマンドラインベンチマークツールです
- [Locust](https://locust.io/) - 使いやすい分散型のユーザー負荷テストツールです
- [Grafana k6](https://k6.io/) - エンジニアリングチームにとってパフォーマンステストを簡単かつ生産的にする、オープンソースの負荷テストツールです
- [Gatling](https://gatling.io/) - エンジニアリングチームがパフォーマンスの懸念を早期にシフトするのを助ける、プログラマー向けの負荷テストツールです
- [Apache Jmeter](https://jmeter.apache.org/) - 機能的な動作の負荷テストとパフォーマンス測定のために設計された、純粋な Java アプリケーションです
- [ab](https://httpd.apache.org/docs/2.4/programs/ab.html) - Apache Hypertext Transfer Protocol (HTTP) サーバーをベンチマークするためのツールです
- [stress-ng](https://github.com/ColinIanKing/stress-ng) - 設定可能な量の CPU、メモリ、I/O、ディスクのストレスをシステムにかけるツールです
- [sysbench](https://github.com/akopytov/sysbench) - LuaJIT ベースの、スクリプト可能なマルチスレッドベンチマークツールです
- [fio](https://github.com/axboe/fio) - ユーザーが指定した特定の種類の I/O アクションを実行する複数のスレッドまたはプロセスを生成するツールです
- [iPerf](https://iperf.fr/) - TCP、UDP、SCTP のための究極のスピードテストツールです
- [Speedtest CLI](https://www.speedtest.net/apps/cli) - ウェブブラウザに頼ることなく、ダウンロード、アップロード、レイテンシ、パケットロスなどのインターネット接続パフォーマンス指標をネイティブに測定する、コマンドラインインターフェースです
- [plow](https://github.com/six-ddc/plow) - ウェブ UI とターミナルインターフェースの両方でリアルタイムのパフォーマンスメトリクスを表示しながら、並行接続で負荷テストを実行する、Golang で書かれた HTTP(S) ベンチマークツールです
- [loadgen-rs](https://github.com/git001/loadgen-rs) - コマンドラインモードと分散モードを備え、HTTP/1.1、HTTP/2、HTTP/3 (QUIC) をサポートする、Rust で書かれた h2load 互換の HTTP ベンチマーククライアントです
