# 03 - クラウド & クラウドネイティブコンピューティング

## クラウドコンピューティング

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > クラウドインフラ活用

:::

### コンピューティング & ストレージ (IaaS)

- [Amazon EC2](https://aws.amazon.com/ec2/) - クラウド上で安全かつ拡張可能なコンピューティングキャパシティを提供するウェブサービス
- [Amazon EBS](https://aws.amazon.com/ebs/) - Amazon Elastic Compute Cloud との使用に設計された、使いやすく高パフォーマンスなブロックストレージサービス
- [Azure Virtual Machines](https://azure.microsoft.com/en-us/services/virtual-machines/) - Windows および Linux 仮想マシンを数秒でプロビジョニングするサービス
- [Azure Disk Storage](https://azure.microsoft.com/en-us/services/storage/disks/) - Azure 仮想マシン向けの高パフォーマンスで耐久性のあるブロックストレージ
- [Google Cloud Compute Engine](https://cloud.google.com/products/compute) - Google のインフラストラクチャ上で仮想マシンを作成・実行できるカスタマイズ可能なコンピューティングサービス

### ネットワーキング

- [Amazon VPC](https://aws.amazon.com/vpc/) - 自分で定義した論理的に分離された仮想ネットワーク内で AWS リソースを起動できるサービス
- [Amazon ELB](https://aws.amazon.com/elasticloadbalancing/) - 受信するアプリケーショントラフィックを Amazon EC2 インスタンス、コンテナ、IP アドレス、Lambda 関数などの複数のターゲットに自動的に分散するサービス
- [Azure Virtual Network](https://azure.microsoft.com/en-us/services/virtual-network/) - Azure におけるプライベートネットワークの基本的な構成要素で、高パフォーマンスのネットワーキングを利用可能
- [Azure Load Balancer](https://azure.microsoft.com/en-us/products/load-balancer) - バックエンドの仮想マシンにトラフィックを分散させるサービス
- [Azure Application Gateway](https://azure.microsoft.com/en-us/products/application-gateway) - プラットフォームが管理する、スケーラブルで高可用性のアプリケーションデリバリーコントローラーサービス
- [Google Cloud VPC](https://cloud.google.com/vpc/docs/vpc) - Andromeda を使用して Google の本番ネットワーク内に実装された物理ネットワークの仮想版
- [Cloud Load Balancing](https://cloud.google.com/load-balancing/docs/load-balancing-overview) - すべてのトラフィックに対応するフルマネージドの分散型ソフトウェア定義サービス

### アプリケーションホスティングプラットフォーム (PaaS)

- [Azure App Service](https://azure.microsoft.com/en-us/services/app-service/) - ウェブアプリケーション、REST API、モバイルバックエンドをホストするための HTTP ベースのサービス
- [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/) - ウェブアプリケーションとサービスのデプロイおよびスケーリングを簡単に行えるサービス
- [Google Cloud App Engine](https://cloud.google.com/appengine/) - スケールでウェブアプリケーションを開発・ホストするためのフルマネージドのサーバーレスプラットフォーム
- [Vercel](https://vercel.com/) - ウェブを構築、デプロイ、スケールするための開発者体験とインフラを提供するフロントエンドクラウドプラットフォーム
- [Netlify](https://www.netlify.com/) - グローバルエッジネットワーク上でモダンなウェブ体験を構築、デプロイ、スケールできるコンポーザブルなウェブプラットフォーム
- [Coolify](https://coolify.io/) - Vercel、Heroku、Netlify、Railway のオープンソース & セルフホスト可能な代替手段

### クラウドコマンドラインインターフェース

- [AWS CLI](https://aws.amazon.com/cli/) - AWS サービスを管理するための統合ツール
- [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/) - インタラクティブなコマンドやスクリプトで Azure リソースを管理するクロスプラットフォームのコマンドラインツール
- [Azure Developer CLI (azd)](https://learn.microsoft.com/en-us/azure/developer/azure-developer-cli/) - ローカル開発環境から Azure への移行を加速するオープンソースツール
- [Google Cloud CLI (gcloud)](https://cloud.google.com/cli) - Google Cloud のリソースとサービスを作成・管理するためのツールセット
- [Vercel CLI](https://vercel.com/docs/cli) - Vercel プロジェクトの管理と設定、アプリのデプロイ、ローカルでのデプロイ環境の複製に使用するコマンドラインインターフェース
- [Netlify CLI](https://cli.netlify.com/) - 継続的デプロイの設定、ローカル開発サーバーの実行、Netlify へのサイトデプロイを行うコマンドラインインターフェース

### クラウドエミュレーター

- [LocalStack](https://www.localstack.cloud/) - オフラインでクラウドおよびサーバーレスアプリを開発・テストするための完全機能のローカルクラウドスタック

### プライベートクラウド & オンプレミス IaaS

- [OpenStack](https://www.openstack.org/) - パブリッククラウドとプライベートクラウドの構築・管理のために Infrastructure as a Service (IaaS) を提供するオープンソースのクラウドコンピューティングプラットフォーム
- [OpenNebula](https://opennebula.io/) - クラウドおよび仮想化管理、ハイパーバイザー運用、Kubernetes オーケストレーションにわたるエンドツーエンドのカバレッジ、ベンダー中立性、包括的なサポートを提供するエンタープライズクラウド & 仮想化プラットフォーム

### クラウドアーキテクチャフレームワーク

- [AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html) - クラウドでワークロードを設計・実行するための主要な概念、設計原則、アーキテクチャのベストプラクティスを説明するフレームワーク
- [Azure Architecture Center](https://learn.microsoft.com/en-us/azure/architecture/) - Azure 上で安全で高パフォーマンス、回復力があり効率的なインフラを構築するためのガイダンス、パターン、ベストプラクティスのセット
- [Azure Well-Architected Framework](https://learn.microsoft.com/en-us/azure/well-architected/) - ソリューションアーキテクトがワークロードの技術的基盤を構築するために設計された、品質重視のテナント、アーキテクチャの意思決定ポイント、レビューツールのセット

## コードとしての設定

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > クラウドインフラ活用

:::

### Infrastructure as Code (IaC)

- [Hashicorp Terraform](https://www.terraform.io/) - インフラストラクチャを安全かつ効率的に構築、変更、バージョン管理できる Infrastructure as Code ツール
- [OpenTofu](https://opentofu.org/) - 安定したドロップイン代替を提供する、インフラの構築と管理のためのオープンソースのコミュニティ主導の Terraform フォーク
- [Pulumi](https://www.pulumi.com/) - 使い慣れたプログラミング言語とツールを使用してクラウドインフラを構築、デプロイ、管理できる Infrastructure as Code プラットフォーム

### AI 駆動インフラ

- [Spacelift Intent](https://spacelift.io/platform/intent) - 自然言語を使用してクラウドインフラをプロビジョニングおよび管理できる AI 搭載ツール

### 構成管理 & 自動化

- [Ansible](https://www.ansible.com/) - プロビジョニング、構成管理、アプリケーションデプロイ、オーケストレーション、その他多くの IT プロセスを自動化するオープンソースの IT 自動化エンジン
- [SaltStack](https://saltproject.io/) - イベント駆動の IT 自動化、リモートタスク実行、構成管理のための Python ベースのオープンソースソフトウェア
- [Rudder](https://www.rudder.io/) - IT インフラ自動化のためのオープンソースの継続的設定 & コンプライアンスプラットフォーム
- [cloud-init](https://cloud-init.io/) - クラウドインスタンスをカスタマイズするための標準規格

### イメージビルド

- [Hashicorp Packer](https://packer.io/) - 単一のソース設定から複数のプラットフォーム向けに同一のマシンイメージを作成するツール

### エコシステム & ベンダーツール

- Terraform/OpenTofu エコシステム
  - [Terraform/OpenTofu Provider: Core Functions](https://github.com/northwood-labs/terraform-provider-corefunc) - コア関数を実行するための Terraform/OpenTofu プロバイダー
  - [Terragrunt](https://terragrunt.gruntwork.io/) - 設定を DRY に保ち、複数の Terraform モジュールを扱い、リモート状態を管理するための追加ツールを提供するシンラッパー
  - [TerraTest](https://terratest.gruntwork.io/) - インフラストラクチャのテストのためのパターンとヘルパー関数を提供する Go ライブラリ
  - [Atmos](https://atmos.tools/) - ワークフローをオーケストレーションし、インフラ管理を簡素化する DevOps とクラウドエンジニアリングのためのユニバーサルツール
  - [GitLab-managed Terraform/OpenTofu state](https://docs.gitlab.com/ee/user/infrastructure/iac/terraform_state.html) - Terraform ステートファイルを GitLab に保存できる機能
  - [tf.libsonnet](https://docs.tflibsonnet.com/) - Terraform コードを生成するための Jsonnet ライブラリのコレクション
  - [terraform-docs](https://terraform-docs.io/) - さまざまな出力フォーマットで Terraform モジュールのドキュメントを生成するユーティリティ
  - [Terraformer](https://github.com/GoogleCloudPlatform/terraformer) - 既存のインフラから Terraform ファイルを生成する CLI ツール
  - [Atlantis](https://www.runatlantis.io/) - Webhook 経由で Terraform プルリクエストイベントをリッスンするセルフホスト型の Golang アプリケーション
- ベンダー固有のツール
  - [AWS CloudFormation](https://aws.amazon.com/cloudformation/) - Amazon Web Services リソースのモデル化とセットアップを支援するサービス
  - [AWS CDK](https://aws.amazon.com/cdk/) - 使い慣れたプログラミング言語でクラウドアプリケーションリソースを定義するオープンソースのソフトウェア開発フレームワーク
  - [AWS SAM](https://aws.amazon.com/serverless/sam/) - サーバーレスアプリケーションを構築するためのオープンソースフレームワーク
  - [SST](https://sst.dev/) - サーバーレスとイベント駆動アーキテクチャに特化した、AWS 上でフルスタックアプリケーションを簡単に構築できるフレームワーク
  - [Azure Resource Manager](https://docs.microsoft.com/en-us/azure/azure-resource-manager/) - Azure のデプロイおよび管理サービス
    - [Bicep language](https://github.com/Azure/bicep) - Azure リソースをデプロイするために宣言的な構文を使用するドメイン固有言語 (DSL)
    - [Azure Resource Graph](https://azure.microsoft.com/en-us/get-started/azure-portal/resource-graph) - クラウドリソースを大規模にクエリ、探索、分析するための強力な管理ツール

## コンテナ化

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > クラウドインフラ活用

:::

- [Containerization](https://en.wikipedia.org/wiki/Containerization_(computing)) - オペレーティングシステムレベルの仮想化の一形態
- コンテナ向け Linux ディストリビューション
  - [Alpine Linux](https://alpinelinux.org/) - musl libc と busybox をベースにしたセキュリティ重視の軽量 Linux ディストリビューション
    - [apk-tools](https://gitlab.alpinelinux.org/alpine/apk-tools) - 元々 Alpine Linux 向けに構築されたパッケージマネージャー
  - [Fedora CoreOS](https://fedoraproject.org/coreos/) - コンテナ化されたワークロードを安全かつ大規模に実行するための、自動更新される最小限の OS
  - [Flatcar Container Linux](https://www.flatcar.org/) - コンテナ向けの不変 Linux ディストリビューション
- コンテナ内のユーティリティ
  - [busybox](https://busybox.net/about.html) - 多くの一般的な UNIX ユーティリティの小型版を組み合わせた単一の小さな実行ファイル
- 標準規格
  - [The Open Container Initiative (OCI)](https://opencontainers.org/) - コンテナフォーマットとランタイムに関するオープンな業界標準を作成することを明確な目的とするオープンガバナンス構造
  - [Compose Specification](https://compose-spec.io/) - クラウドおよびプラットフォームに依存しないコンテナベースアプリケーションを定義するための開発者向け標準
  - [Development Containers](https://containers.dev/) - コンテナを開発固有の設定、ツール、構成で拡張するためのオープン仕様

### エンジン & ランタイム

- コンテナエンジン
  - [Docker Engine](https://docs.docker.com/engine/) - アプリケーションを構築・コンテナ化するためのオープンソースのコンテナ化技術
    - [Docker Rootless mode](https://docs.docker.com/engine/security/rootless/) - Docker デーモンとコンテナを非 root ユーザーとして実行し、潜在的な脆弱性を軽減する機能
  - [podman](https://podman.io/) - コンテナと Pod の構築、管理、実行のための強力なコンテナエンジン
    - [podman-static](https://github.com/mgoltzsche/podman-static) - Linux 向けの Alpine ベースのコンテナイメージと静的リンク（rootless）バイナリ
  - [WSL Container](https://learn.microsoft.com/en-us/windows/wsl/wsl-container) - Windows 上で Linux コンテナをビルド、実行、管理するための CLI (`wslc.exe`) と API を提供する、Windows Subsystem for Linux 組み込みのコンテナエンジン
- コンテナランタイム
  - [containerd](https://containerd.io/) - シンプルさ、堅牢性、ポータビリティを重視した業界標準のコンテナランタイム
    - [nerdctl](https://github.com/containerd/nerdctl) - containerd 向けの Docker 互換 CLI
    - [ctr](https://manpages.debian.org/experimental/containerd/ctr.1.en.html) - containerd デーモンと対話するための非公式のデバッグ・管理クライアント
  - [CRI-O](https://cri-o.io/) - OCI (Open Container Initiative) 互換のランタイムを使用できるようにするための Kubernetes CRI (Container Runtime Interface) の実装
    - [cri-tools](https://github.com/kubernetes-sigs/cri-tools) - CRI 向けのツールセット
- OCI ランタイム
  - [runc](https://github.com/opencontainers/runc) - OCI 仕様に従ってコンテナを生成・実行するための CLI ツール
  - [crun](https://github.com/containers/crun) - コンテナを実行するための高速で軽量なフル機能の OCI ランタイムおよび C ライブラリ

### イメージ管理

- イメージビルドツール
  - [Docker Build](https://docs.docker.com/build/) - Dockerfile とコンテキストから Docker イメージを作成するプロセスを自動化する Docker Engine の一部
  - [buildah](https://buildah.io/) - Open Container Initiative (OCI) コンテナイメージの構築を容易にするツール
  - [podman build](https://docs.podman.io/en/latest/markdown/podman-build.1.html) - Containerfile または Dockerfile の指示を解釈し、Buildah を基盤として利用して OCI 互換のコンテナイメージを構築するコマンド
  - [Kaniko](https://github.com/GoogleContainerTools/kaniko) - コンテナまたは Kubernetes クラスター内で Dockerfile からコンテナイメージを構築するツール
  - [Cloud Native Buildpacks](https://buildpacks.io/) - Dockerfile なしで、アプリケーションのソースコードをあらゆるクラウドで実行できるイメージに変換するツール
- イメージ検査 & 管理ツール
  - [skopeo](https://github.com/containers/skopeo) - コンテナイメージとイメージリポジトリに対してさまざまな操作を実行するコマンドラインユーティリティ
  - [dive](https://github.com/wagoodman/dive) - Docker イメージ、レイヤーの内容を探索し、Docker/OCI イメージのサイズを縮小する方法を見つけるためのツール
  - [regclient](https://github.com/regclient/regclient) - マルチプラットフォームイメージやミラーリングなどの高度な機能をサポートする、OCI レジストリとイメージの管理・検査のためのコマンドラインツールスイート（regctl、regsync、regbot）
- コンテナレジストリ
  - [GitLab Container Registry](https://docs.gitlab.com/ee/user/packages/container_registry/index.html) - Docker イメージのための安全なプライベートレジストリ
  - [Project Quay](https://www.projectquay.io/) - コンテナのビルド、整理、配布、デプロイのために設計されたオープンソースのコンテナネイティブイメージレジストリ
  - [Docker Hub](https://docs.docker.com/docker-hub/) - 開発者やチームが Docker コンテナイメージを保存、共有、配布できるクラウドベースのレジストリサービス
  - [Amazon ECR](https://aws.amazon.com/ecr/) - コンテナイメージとアーティファクトの保存、管理、共有、デプロイを簡単に行えるフルマネージドのコンテナレジストリ
  - [Azure Container Registry](https://azure.microsoft.com/en-us/services/container-registry/) - コンテナイメージと関連アーティファクトを管理するプライベートレジストリ
  - [Harbor](https://goharbor.io/) - ポリシーとロールベースのアクセス制御でアーティファクトを保護するオープンソースレジストリ

### 環境 & 管理

- コンテナ管理ツール
  - [Podman Desktop](https://podman-desktop.io/) - コンテナ管理の簡素化、Kubernetes ワークフローの効率化、ローカル開発から本番環境への移行を支援する、開発者がコンテナと Kubernetes を操作するための最も優れた無料のオープンソースツール
  - [lazydocker](https://github.com/jesseduffield/lazydocker) - docker と docker-compose の両方に対応したターミナル UI
  - [Docker Compose](https://docs.docker.com/compose/) - マルチコンテナ Docker アプリケーションを定義・実行するためのツール
- 開発環境プロビジョニング
  - [devcontainers CLI](https://github.com/devcontainers/cli) - devcontainer.json から開発コンテナを作成・設定し、さまざまなインフラストラクチャにわたって開発コンテナの構築、実行、管理コマンドを提供する仕様のリファレンス実装
  - [DevPod](https://devpod.sh/) - オープン標準の devcontainer.json フォーマットを使用して dev-environments-as-code を実現する、ローカルマシン、Kubernetes クラスター、クラウドプロバイダーなどあらゆるインフラをサポートするクライアントのみのツール
- ローカル環境プロビジョナー（Mac 向け）
  - [Colima](https://github.com/abiosoft/colima) - macOS（および Linux）上で最小限のセットアップでコンテナランタイムを提供するツール
  - [Lima](https://lima-vm.io/) - 自動ファイル共有とポートフォワードを備えた Linux 仮想マシンを起動するツール

## WebAssembly

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.2 デジタルテクノロジー > その他先端技術

:::

- 標準規格
  - [WebAssembly](https://webassembly.org/) - スタックベースの仮想マシン向けのバイナリ命令フォーマット
  - [WebAssembly System Interface (WASI)](https://github.com/WebAssembly/WASI) - WebAssembly のためのモジュラーシステムインターフェース
  - [WASIX](https://wasix.org/) - 既存の WASI ABI の長期的な安定化とサポート、および追加の非侵略的なシステムコール拡張
  - [WebAssembly Component Model](https://github.com/WebAssembly/component-model) - WASI Preview 2 の一部として開発された、型付きの言語非依存インターフェースを通じてモジュールが相互運用できるバイナリインターフェース標準
- ランタイム
  - [wazero](https://wazero.io/) - Go で記述された唯一のゼロ依存 WebAssembly ランタイム
  - [Wasmtime](https://wasmtime.dev/) - WebAssembly 向けの高速で安全なランタイム
  - [Wasmer](https://wasmer.io/) - 非常に軽量なコンテナをあらゆる場所で実行できる、高速で安全な WebAssembly ランタイム
  - [WasmEdge](https://wasmedge.org/) - クラウドネイティブ、エッジ、分散型アプリケーション向けの軽量で高パフォーマンスかつ拡張可能なランタイム
  - [WebAssembly Micro Runtime (WAMR)](https://github.com/bytecodealliance/wasm-micro-runtime) - 組み込み、IoT、エッジ、Trusted Execution Environment での使用向けに、小さなフットプリントと高度に設定可能な機能を備えた軽量なスタンドアロンランタイム

- ツールチェーン & 言語
  - [Emscripten](https://emscripten.org/) - 速度、サイズ、ウェブプラットフォームに特化した、LLVM を使用した WebAssembly への完全なコンパイラツールチェーン
  - [AssemblyScript](https://www.assemblyscript.org/) - WebAssembly 向けの TypeScript に似た言語
  - [TinyGo](https://tinygo.org/) - 組み込みシステムと WebAssembly に言語をもたらす小さな場所向けの Go コンパイラ
  - [Binaryen](https://github.com/WebAssembly/binaryen) - C++ で記述された WebAssembly 向けのコンパイラとツールチェーンインフラストラクチャライブラリ

- クラウド & エッジプラットフォーム
  - [wasmCloud](https://wasmcloud.com/) - クラウド、Kubernetes、エッジをまたいで再利用可能な WebAssembly コンポーネントで構成される多言語アプリケーションを構築するためのオープンソース CNCF プロジェクト
  - [Fermyon Spin](https://www.fermyon.com/spin) - WebAssembly マイクロサービスとウェブアプリケーションを構築するための開発者ツール

## Kubernetes

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > クラウドインフラ活用

:::

- [Kubernetes](https://kubernetes.io/) - コンテナ化されたアプリケーションのデプロイ、スケーリング、管理を自動化するオープンソースシステム
- マスターノード
  - kube-apiserver - API サービスを担当
  - kube-scheduler - スケジューリングを担当
  - kube-controller-manager - コンテナオーケストレーションを担当
- コンピュートノード
  - kubelet - そのノード上の Pod の API サーバーを監視し、それらが実行されていることを確認する
  - cAdvisor - 特定のノードで実行中の Pod に関するメトリクスを収集する
  - kube-proxy - ネットワークを最新の状態に保つために、Pod やサービスの変更について API サーバーを監視する
  - container runtime - そのノードでコンテナイメージを管理し、コンテナを実行する役割を担う
- インターフェース標準
  - CNI (Container Networking Interface)
  - CSI (Container Storage Interface)
  - CRI (Container Runtime Interface)

### コアコンセプト & コンポーネント

- K8s の内部構造
  - [Workloads](https://kubernetes.io/docs/concepts/workloads/) - クラスター上でコンテナを管理・実行するために使用するオブジェクト
  - Pod
    - [assignment](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/) - Pod が特定のノードでのみ実行されるように、または特定のノードで実行されることを優先するように制限するプロセス
    - [taint and toleration](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/) - Pod が不適切なノードに配置されないようにするメカニズム
    - [lifecycle](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/) - Pod のライフサイクル
    - [liveness probe](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/) - kubelet がコンテナをいつ再起動するかを判断するために使用するプローブ
    - requests and limits
    - eviction
  - Deployment、ReplicaSet、StatefulSet、DaemonSet
  - [Kubernetes network model](https://kubernetes.io/docs/concepts/services-networking/) - Kubernetes クラスターにおけるネットワーキングの基本的な要件と原則のセット
    - Service、Ingress、Ingress Controllers
  - [Storage](https://kubernetes.io/docs/concepts/storage/) - ストレージの提供と消費を抽象化する API を備えた強力なボリュームサブシステム
    - PersistentVolume、PVC、StorageClass
  - [Configuration](https://kubernetes.io/docs/concepts/configuration/) - アプリケーションを実行する Pod に設定データを注入できるさまざまなメカニズム
    - Secret、ConfigMap
  - セキュリティ & ポリシー
    - [Kubernetes RBAC](https://kubernetes.io/docs/reference/access-authn-authz/rbac/) - 企業内の個々のユーザーの役割に基づいてコンピュータまたはネットワークリソースへのアクセスを制御する方法
    - [PodDisruptionBudget](https://kubernetes.io/docs/tasks/run-application/configure-pdb/) - アプリケーションが経験する同時中断の数を制限し、高可用性を実現するオブジェクト
    - [Security context](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/) - Pod またはコンテナの権限とアクセス制御設定の定義
- オートスケーリング
  - [HPA](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/) - 観測された CPU 使用率に基づいて、レプリケーションコントローラー、デプロイメント、レプリカセット、またはステートフルセット内の Pod 数を自動的にスケールするコンポーネント
  - [Cluster Autoscaler](https://github.com/kubernetes/autoscaler/tree/master) - Kubernetes クラスターのサイズを自動的に調整するツール
  - [Karpenter](https://karpenter.sh/) - 柔軟で高パフォーマンスな Kubernetes クラスターオートスケーラー

### 運用 & 管理

- K8s オペレーター
  - [Prometheus Operator](https://prometheus-operator.dev/) - Kubernetes 上で Prometheus クラスターを作成/設定/管理するオペレーター
    - [kube-prometheus](https://github.com/prometheus-operator/kube-prometheus) - エンドツーエンドの Kubernetes クラスター監視を簡単に操作できるよう、ドキュメントとスクリプトを組み合わせた Kubernetes マニフェスト、Grafana ダッシュボード、Prometheus ルールのコレクション
  - [Grafana Operator](https://grafana.github.io/grafana-operator/) - Kubernetes と OpenShift 環境でカスタムリソースを通じて Grafana インスタンス、ダッシュボード、データソースの管理を効率化する Kubernetes オペレーター
  - [OpenTelemetry Operator](https://opentelemetry.io/docs/kubernetes/operator/) - OpenTelemetry のための Kubernetes Operator の実装
  - [Elastic Cloud on Kubernetes (ECK)](https://www.elastic.co/elastic-cloud-kubernetes) - Kubernetes 上の Elastic Stack の公式オペレーター
  - [Rook](https://rook.io/) - Kubernetes 向けのオープンソースのクラウドネイティブストレージオーケストレーター
- ダッシュボード
  - [k9s](https://k9scli.io/) - Kubernetes クラスターと対話するためのターミナルベース UI
  - [KDash](https://kdash.cli.rs/) - Rust で構築されたシンプルな Kubernetes ターミナルダッシュボード
  - [Seabird](https://getseabird.github.io/) - Kubernetes の操作を簡素化するネイティブデスクトップアプリ
  - [Headlamp](https://headlamp.dev/) - 拡張性に焦点を当てたユーザーフレンドリーな Kubernetes UI

### CLI & ローカル環境

- CLI プラグイン管理
  - [Krew](https://krew.sigs.k8s.io/) - kubectl コマンドラインツールのプラグインマネージャー
    - [kubectl-node-shell](https://github.com/kvaps/kubectl-node-shell) - ノード上でルートシェルを実行するための kubectl プラグイン
    - [kubectl-tree](https://github.com/ahmetb/kubectl-tree#readme) - Kubernetes オブジェクト間の所有関係を探索するための kubectl プラグイン
    - [kubectl-pod-inspect](https://github.com/jpriebe/kubectl-pod-inspect#readme) - Pod とコンテナのステータスを一目で確認するための kubectl プラグイン
    - [kubepug](https://github.com/rikatz/kubepug) - Kubernetes API のプリフライトチェックツール
    - [rakkess](https://github.com/corneliusweig/rakkess) - すべての利用可能なリソースのアクセスマトリックスを表示する kubectl プラグイン
    - [ketall](https://github.com/corneliusweig/ketall) - すべてのリソースを取得する kubectl プラグイン
- ローカル K8s ツール
  - [Minikube](https://minikube.sigs.k8s.io/docs/) - Kubernetes をローカルで実行できるツール
  - [Kind](https://kind.sigs.k8s.io/) - Docker コンテナを「ノード」として使用してローカル Kubernetes クラスターを実行するツール

### エコシステム & 拡張機能

- アプリケーションパッケージング & 設定
  - [Helm](https://helm.sh/) - Kubernetes のパッケージマネージャー
  - [Kustomize](https://kustomize.io/) - kustomization ファイルを通じて Kubernetes オブジェクトをカスタマイズするスタンドアロンツール
  - [Artifact Hub](https://artifacthub.io/) - クラウドネイティブのパッケージと設定の検索、インストール、公開を容易にするウェブベースのアプリケーション
- クラウドリソース管理
  - [Crossplane](https://crossplane.io/) - ユーザーがコントロールプレーンで独自の API とサービスを構築し、Kubernetes を拡張してどこでもリソースを管理できるプラットフォームエンジニアリング向けのクラウドネイティブフレームワーク
- 開発者ワークフローツール
  - [Skaffold](https://skaffold.dev/) - コンテナベースアプリケーションの継続的な開発を容易にするコマンドラインツール
- プラットフォーム拡張機能
  - [kube-fencing](https://github.com/kvaps/kube-fencing) - Kubernetes においてステートフルアプリケーションのノードをフェンシングするためのソリューション
  - [KubeVirt](https://kubevirt.io/) - Kubernetes 向けの仮想マシン管理アドオン
- オペレーター & コントローラー開発
  - [Kubebuilder](https://github.com/kubernetes-sigs/kubebuilder) - カスタムリソース定義 (CRD) を使用して Kubernetes API を構築するためのフレームワーク
- リソース最適化
  - [Goldilocks](https://goldilocks.docs.fairwinds.com/) - リソースリクエストと制限の出発点を特定するのに役立つユーティリティ
- ベンダー固有のツール
  - [eksctl](https://eksctl.io/) - Amazon EKS の公式 CLI
- バッチ & ジョブスケジューリング
  - [Kueue](https://kueue.sigs.k8s.io/) - バッチ、HPC、AI/ML ワークロード向けにクォータとリソース共有を管理する Kubernetes ネイティブなシステム

## クラウドネイティブコンピューティング

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > クラウドインフラ活用

:::

- [Serverless Computing](https://en.wikipedia.org/wiki/Serverless_computing) - クラウドプロバイダーがオンデマンドでマシンリソースを割り当てるクラウドコンピューティング実行モデルで、サーバーの管理はクラウドプロバイダーが顧客に代わって行う

### Container as a Service (CaaS)

- マネージド Kubernetes
  - [Google Kubernetes Engine (GKE)](https://cloud.google.com/kubernetes-engine) - コンテナ化されたアプリケーションを実行するためのマネージドな本番環境
  - [Amazon Elastic Kubernetes Service](https://aws.amazon.com/eks/) - AWS およびオンプレミスで Kubernetes を簡単に実行できるマネージドサービス
  - [Azure Kubernetes Service (AKS)](https://azure.microsoft.com/en-us/products/kubernetes-service/) - コンテナ化されたアプリケーションのデプロイと管理のための完全マネージド Kubernetes サービス
- シンプルなコンテナホスティング
  - [Amazon Elastic Container Service](https://aws.amazon.com/ecs/) - コンテナ化されたアプリケーションのデプロイ、管理、スケーリングを簡単に行えるフルマネージドのコンテナオーケストレーションサービス
  - [AWS Fargate](https://aws.amazon.com/fargate/) - ECS と EKS の両方で動作するコンテナ向けサーバーレスコンピューティングエンジン
  - [AWS App Runner](https://aws.amazon.com/apprunner/) - 開発者がインフラストラクチャの事前知識なしに、コンテナ化されたウェブアプリケーションと API を大規模かつ迅速にデプロイできるフルマネージドサービス
  - [Azure Container Apps](https://azure.microsoft.com/en-us/products/container-apps/) - マイクロサービスとイベント駆動ワークロードのために KEDA、Dapr、Envoy を統合した、Kubernetes 上に構築されたフルマネージドのサーバーレスコンテナサービス
  - [Google Cloud Run](https://cloud.google.com/run) - 自動スケーリングされるコンテナを実行できるマネージドコンピューティングプラットフォーム

### Function as a Service (FaaS)

- [AWS Lambda](https://aws.amazon.com/lambda/) - サーバーのプロビジョニングや管理なしに、事実上あらゆる種類のアプリケーションまたはバックエンドサービスのコードを実行できるサーバーレスのイベント駆動型コンピューティングサービス
- [Azure Functions](https://azure.microsoft.com/en-us/services/functions/) - 好みのプログラミング言語を使用してより効率的に開発できるイベント駆動型のサーバーレスコンピューティングプラットフォーム
- [Google Cloud Run Functions](https://cloud.google.com/functions) - クラウドサービスの構築と接続のためのサーバーレス実行環境

### 高度なランタイム & 分離

- サンドボックス化されたランタイム
  - [Kata Containers](https://katacontainers.io/) - コンテナのような感覚とパフォーマンスを持ちながら、仮想マシンのワークロード分離とセキュリティを提供する軽量仮想マシンの標準実装を構築するオープンソースプロジェクト
  - [gVisor](https://gvisor.dev/) - Linux カーネルとそのネットワークスタックを実装し、システムコールをインターセプトしてホストをコンテナ化されたアプリケーションから保護する Linux 互換サンドボックス
  - [libkrun](https://github.com/containers/libkrun) - 仮想化ベースのプロセス分離機能を提供する動的ライブラリ
  - [Microsoft eXecution Container (MXC)](https://github.com/microsoft/mxc) - Windows、Linux、macOS にわたり、複数の封じ込めバックエンドとポリシー駆動のセキュリティ制御によって信頼できないコードを実行する、クロスプラットフォームなサンドボックス化コード実行システム
  - [Cloud Hypervisor](https://www.cloudhypervisor.org/) - 最小限のハードウェアエミュレーションで現代のクラウドワークロードの実行に焦点を当てた、Rust で実装されたオープンソースの仮想マシンモニター (VMM)
  - [Firecracker](https://firecracker-microvm.github.io/) - セキュアなマルチテナントのコンテナおよびファンクションベースのサービスの作成と管理を目的として構築されたオープンソースの仮想化技術
  - [AWS Lambda MicroVMs](https://aws.amazon.com/lambda/lambda-microvms/) - Firecracker 仮想化技術を基盤に、ほぼ瞬時の起動と再開を備えた VM レベルの分離を提供するサーバーレスコンピューティングサービス
  - [QEMU microvm](https://www.qemu.org/docs/master/system/i386/microvm.html) - PCI や ACPI サポートのない最小限のマシンタイプで、短期ゲスト向けに設計され、起動時間とフットプリントの両方に最適化されている
  - [Docker Sandboxes](https://github.com/docker/sandboxes-releases) - セキュリティとシステム保護を強化するために、軽量なマイクロ VM 上で AI コーディングエージェントを実行するように設計された、隔離された使い捨て環境
  - [Daytona](https://www.daytona.io/) - 90ミリ秒未満の作成時間で、隔離されたサンドボックス環境で AI 生成コードを実行するための安全なインフラプラットフォーム
  - [Modal](https://modal.com/) - エンジニアが数千の隔離されたサンドボックス上でコンピューティング集約型アプリケーションを構築・スケールするためのサーバーレスクラウドを提供する AI インフラプラットフォーム
- 仮想化 & コンテナストレージ
  - [virtiofs](https://virtio-fs.gitlab.io/) - 仮想マシンがホスト上のディレクトリツリーにアクセスできる共有ファイルシステム
- イメージサービス & 配布
  - [Nydus](https://nydus.dev/) - コンテナイメージ、ソフトウェアパッケージなどのクラウドネイティブワークロード向けに高効率なイメージ配布システムを形成する強力なオープンソースのファイルシステムソリューション

### クラウドネイティブインフラ

- アプリランタイム & スケーリング
  - [KEDA (Kubernetes Event-driven Autoscaling)](https://keda.sh/) - 任意のクラスターに追加して、環境で実行されている任意のコンテナにイベント駆動のスケールを提供できる単一目的の軽量コンポーネント
  - [Dapr (Distributed Application Runtime)](https://dapr.io/) - クラウドとエッジで実行される回復力のあるステートレスおよびステートフルアプリケーションを任意の開発者が構築しやすくし、言語と開発者フレームワークの多様性を受け入れるポータブルなイベント駆動ランタイム
  - [V8 isolates](https://v8.dev/docs/embed#isolates) - 独自のヒープと独自のガベージコレクターを持つエンジンの独立したインスタンス
- サーバーレスコンピューティング
  - [Knative](https://knative.dev/) - 現代のサーバーレスワークロードを構築、デプロイ、管理するための Kubernetes ベースのプラットフォーム
- サービスメッシュ & ディスカバリー
  - [Gateway API](https://gateway-api.sigs.k8s.io/) - Kubernetes Ingress、ロードバランシング、サービスメッシュ API の次世代
  - [Istio](https://istio.io/) - 既存の分散アプリケーションに透過的にレイヤーされるオープンソースのサービスメッシュ
    - [Kiali](https://kiali.io/) - Istio 向けのサービスメッシュのオブザーバビリティと設定ツール
  - [Linkerd](https://linkerd.io/) - Kubernetes 向けの超軽量でセキュリティファーストのサービスメッシュ
  - [Hashicorp Consul](https://www.consul.io/) - あらゆるランタイムプラットフォームおよびパブリック/プライベートクラウドにわたってサービスを接続・保護するサービスネットワーキングソリューション
- エッジプロキシ & Ingress
  - [Envoy Proxy](https://www.envoyproxy.io/) - オープンソースのエッジ & サービスプロキシ
  - [Traefik proxy](https://traefik.io/traefik/) - 主要なモダンオープンソースのリバースプロキシと Ingress コントローラー
  - [Contour](https://projectcontour.io/) - Envoy エッジ & サービスプロキシのコントロールプレーンを提供する Kubernetes 向けの高パフォーマンス Ingress コントローラー
  - [Apache APISIX](https://apisix.apache.org/) - マイクロサービスの管理、すべての API とマイクロサービスのための究極のパフォーマンス、セキュリティ、スケーラブルなプラットフォームを提供するオープンソース API ゲートウェイ
- クラウドネイティブネットワーキング
  - [Project Calico](https://projectcalico.org/) - コンテナ、仮想マシン、ネイティブホストベースのワークロード向けに安全なネットワーク接続、ネットワークセキュリティ、オブザーバビリティを提供するオープンソースプロジェクト
  - [Cilium](https://cilium.io/) - クラウドネイティブ環境向けのネットワーキング、セキュリティ、オブザーバビリティを提供するオープンソースプロジェクト
  - [Flannel](https://github.com/flannel-io/flannel) - Kubernetes 向けに設計されたレイヤー3ネットワークファブリックを設定するためのシンプルで簡単な方法

## CI/CD & GitOps

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > SREプロセス

:::

### デリバリー & デプロイメント

- 継続的デリバリーツール
  - [Harness](https://harness.io/) - AI と自動化を使用して CI/CD、GitOps、クラウドコスト管理を効率化するモダンなソフトウェアデリバリープラットフォーム
  - [Jenkins](https://www.jenkins.io/) - 世界中の開発者がソフトウェアを確実に構築、テスト、デプロイできるオープンソースの自動化サーバー
    - [Blue Ocean for Jenkins Pipelines](https://www.jenkins.io/projects/blueocean/) - Jenkins のユーザーエクスペリエンスを再考するプロジェクト
    - [Python Jenkins](https://opendev.org/jjb/python-jenkins) - Jenkins REST API の Python ラッパー
    - [JenkinsPipelineUnit](https://github.com/jenkinsci/JenkinsPipelineUnit) - Groovy または Declarative で記述された Jenkins パイプラインをユニットテストするためのテストフレームワーク
  - [GitLab CI/CD](https://docs.gitlab.com/ee/ci/) - ソースコードのビルド、統合、検証を自動化するために使用できる GitLab の一部
  - [GitHub Actions](https://github.com/features/actions) - すべてのソフトウェアワークフローを自動化しやすくする機能
    - [actionlint](https://github.com/rhysd/actionlint) - GitHub Actions ワークフローファイルの静的チェッカー
    - [act](https://github.com/nektos/act) - GitHub Actions をローカルで実行するためのツール
  - [Azure Pipelines](https://learn.microsoft.com/en-us/azure/devops/pipelines/) - コードプロジェクトを自動的にビルド・テストし、他のユーザーが利用できるようにするクラウドサービス
- アプリケーションデプロイ
  - [Kamal](https://kamal-deploy.org/) - どこにでもウェブアプリをデプロイするツール

### GitOps & クラウドネイティブ

- GitOps スタイルの CD
  - [ArgoCD](https://argo-cd.readthedocs.io/) - Kubernetes 向けの宣言的な GitOps 継続的デリバリーツール
  - [FluxCD](https://fluxcd.io/) - Kubernetes クラスターを設定のソース（Git リポジトリなど）と同期させ、デプロイする新しいコードがある場合に設定の更新を自動化するツール
- クラウドネイティブアプリケーションデリバリー
  - [Open Application Model](https://oam.dev/) - あらゆるプラットフォームにデプロイ・管理できるようにアプリケーションを記述するための仕様
  - [KubeVela](https://kubevela.io/) - 今日のハイブリッドなマルチクラウド環境全体へのアプリケーションのデプロイと運用をより簡単、高速、信頼性高くするモダンなソフトウェアデリバリープラットフォーム
  - [Flagger](https://flagger.app/) - Kubernetes 上で実行されるアプリケーションのリリースプロセスを自動化するプログレッシブデリバリーツール

### インテグレーション & レジストリ

- プライベートパッケージレジストリ
  - [JFrog Artifactory](https://jfrog.com/artifactory/) - ソフトウェアアーティファクトとその依存関係を保存、管理、配布できるユニバーサルな DevOps リポジトリマネージャー
  - [GitLab Package Registry](https://docs.gitlab.com/ee/user/packages/package_registry/index.html) - さまざまなサポートされているパッケージマネージャー向けにパッケージを公開・共有できる機能
  - [GitHub Packages](https://github.com/features/packages) - ソフトウェアパッケージをプライベートまたはパブリックにホストできるソフトウェアパッケージホスティングサービス
  - [Nexus Repository Manager 3](https://help.sonatype.com/repomanager3) - 高度なリポジトリマネージャー
  - [Azure Artifacts](https://learn.microsoft.com/en-us/azure/devops/artifacts/) - パブリックおよびプライベートソースから Maven、npm、NuGet、Python パッケージフィードを作成・共有できるサービス

## システムオブザーバビリティ

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > SREプロセス

:::

### インストゥルメンテーション & プラットフォーム

- コンセプト
  - [Observability](https://en.wikipedia.org/wiki/Observability_(software)) - システムの外部出力に関する知識からシステムの内部状態がどれだけ推測できるかの尺度
- インストゥルメンテーションライブラリ
  - [OpenTelemetry](https://opentelemetry.io/) - トレース、メトリクス、ログなどのテレメトリデータをインストゥルメント化、生成、収集、エクスポートするためのベンダー中立のオープンソースオブザーバビリティフレームワーク
  - [Jaeger](https://www.jaegertracing.io/) - 複雑な分散システムのワークフローを監視・トラブルシューティングするために使用するオープンソースの分散トレーシングプラットフォーム
  - [Micrometer](https://micrometer.io/) - JVM ベースアプリケーション向けのメトリクスインストゥルメンテーションライブラリ
- モニタリングツール
  - [Uptime Kuma](https://uptime.kuma.pet/) - 使いやすいセルフホスト型モニタリングツール
- マネージドプラットフォーム
  - [Azure Monitor](https://docs.microsoft.com/en-us/azure/azure-monitor/overview) - クラウドおよびオンプレミス環境からのテレメトリを収集、分析、対応するための包括的なソリューション
    - [Kusto Query Language](https://docs.microsoft.com/en-us/azure/data-explorer/kusto/query/) - データを探索してパターンを発見し、異常や外れ値を特定し、統計モデルを作成するための強力なツール
    - [App Insights](https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview) - 開発者と DevOps プロフェッショナル向けの Azure Monitor の機能で、拡張可能なアプリケーションパフォーマンス管理 (APM) サービス
  - [AWS CloudWatch](https://aws.amazon.com/cloudwatch/) - DevOps エンジニア、開発者、サイトリライアビリティエンジニア (SRE)、IT マネージャー向けに構築された監視・オブザーバビリティサービス
  - [Datadog](https://www.datadoghq.com/) - 監視 & セキュリティのための統合プラットフォーム
  - [Sentry](https://sentry.io/) - 開発者が重要なことを確認し、問題をより迅速に解決するためのエラートラッキングとパフォーマンスモニタリングを提供するアプリケーションモニタリングプラットフォーム
- セルフホスト型（上級者向け）
  - [SigNoz](https://signoz.io/) - ログ、メトリクス、トレース、ダッシュボード、アラートなどのためのオープンソースの Datadog または New Relic 代替
- 可視化ツール
  - [Grafana](https://grafana.com/oss/grafana/) - オープンソースのデータ可視化 & モニタリングソリューション
    - [Grafonnet](https://grafana.github.io/grafonnet/) - Grafana ダッシュボードを生成するための Jsonnet ライブラリ
    - [gcx](https://github.com/grafana/gcx) - Grafana Cloud、Enterprise、セルフホスト環境全体で、ダッシュボード、アラート、SLO、メトリクス、ログ、トレースといった Grafana リソースへの構造化されたアクセスを提供し、オブザーバビリティ主導の開発ワークフローのために AI コーディングエージェントと統合する CLI ツール
  - [Kibana](https://www.elastic.co/kibana) - Elasticsearch データを可視化し、Elastic Stack を操作できる無料のオープンユーザーインターフェース

### テレメトリ送信

- データシッパー
  - [Prometheus exporters](https://prometheus.io/docs/instrumenting/exporters/) - Prometheus メトリクスを公開するサービス
    - [node-exporter](https://prometheus.io/docs/guides/node-exporter/) - *NIX カーネルが公開するハードウェアと OS メトリクスのエクスポーター
    - [blackbox-exporter](https://github.com/prometheus/blackbox_exporter) - HTTP、HTTPS、DNS、TCP、ICMP、gRPC 経由でエンドポイントのブラックボックスプロービングを可能にするツール
  - [Grafana Alloy](https://grafana.com/oss/alloy-opentelemetry-collector/) - Prometheus パイプラインが組み込まれ、メトリクス、ログ、トレース、プロファイルをサポートするオープンソースの OpenTelemetry コレクター
  - [Fluent Bit](https://fluentbit.io/) - 超高速で軽量かつ高度にスケーラブルなログ、メトリクス、トレースのプロセッサーとフォワーダー
  - [Fluentd](https://www.fluentd.org/) - データの収集と消費を統一してデータの活用と理解を向上させるオープンソースのデータコレクター
  - [Filebeat](https://www.elastic.co/beats/filebeat) - ログデータの転送と集中化のための軽量シッパー
  - [Logstash](https://www.elastic.co/logstash) - 多数のソースからデータを取り込み、変換してから好みの「stash」に送信するオープンソースのサーバーサイドデータ処理パイプライン
  - [Telegraf](https://www.influxdata.com/time-series-platform/telegraf/) - スタック、センサー、システムからメトリクスを収集するためのオープンソースのサーバーエージェント
  - [Metricbeat](https://www.elastic.co/beats/metricbeat) - オペレーティングシステムとサーバー上で実行されているサービスから定期的にメトリクスを収集するためにサーバーにインストールできる軽量シッパー
  - [rsyslog](https://www.rsyslog.com/) - ログ処理のための高速システム
- ベンダー固有のツール
  - [Azure Monitor Agent](https://learn.microsoft.com/en-us/azure/azure-monitor/agents/agents-overview) - Azure およびハイブリッド仮想マシンのゲスト OS から監視データを収集するエージェント
  - [Cloudwatch Agent](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Install-CloudWatch-Agent.html) - Amazon EC2 インスタンスとオンプレミスサーバーからシステムレベルのメトリクスとログファイルの両方を収集するエージェント

### テレメトリ収集 & ストレージ

- データストア & アラートツール
  - [Prometheus](https://prometheus.io/) - オープンソースのシステム監視 & アラートツールキット
    - [PromQL](https://prometheus.io/docs/prometheus/latest/querying/basics/) - Prometheus クエリ言語
    - [promtool](https://prometheus.io/docs/prometheus/latest/command-line/promtool/) - Prometheus サーバーのコマンドラインユーティリティ
    - [Awesome Prometheus Alerts](https://samber.github.io/awesome-prometheus-alerts/) - 90 以上のサービスとエクスポーターをカバーするコピー可能な Prometheus アラートルールのコレクション
  - [Alertmanager](https://prometheus.io/docs/alerting/latest/alertmanager/) - Prometheus サーバーなどのクライアントアプリケーションから送信されるアラートを処理するツール
    - [amtool](https://github.com/prometheus/alertmanager/tree/main?tab=readme-ov-file#amtool) - Alertmanager API と対話するための CLI ツール
  - [InfluxDB](https://www.influxdata.com/products/influxdb-overview/) - 高い書き込みおよびクエリ負荷を処理するためにゼロから構築された時系列データベース
    - [InfluxQL](https://docs.influxdata.com/influxdb/v1/query_language/) - InfluxDB のデータと対話するための SQL に似たクエリ言語
    - [influx cli](https://docs.influxdata.com/influxdb/cloud/reference/cli/influx/) - InfluxDB 2.0 のコマンドラインインターフェース
  - [Grafana Mimir](https://grafana.com/oss/mimir/) - Prometheus 向けのオープンソースで水平スケーラブルかつ高可用性のマルチテナントの長期ストレージ
  - [Grafana Loki](https://grafana.com/oss/loki/) - Prometheus にインスパイアされた水平スケーラブルで高可用性のマルチテナントログ集約システム
    - [LogQL](https://grafana.com/docs/loki/latest/query/) - Loki のクエリ言語
      - [LogCLI](https://grafana.com/docs/loki/latest/query/logcli/) - Loki のコマンドラインインターフェース
  - [Grafana Tempo](https://grafana.com/oss/tempo/) - オープンソースで使いやすく大規模な分散トレーシングバックエンド
    - [TraceQL](https://grafana.com/docs/tempo/latest/traceql/) - トレースの選択のために設計されたクエリ言語
  - [ElasticSearch](https://www.elastic.co/elasticsearch/) - オープンソースの分散型 RESTful 検索 & 分析エンジン、スケーラブルなデータストア、ベクターデータベース
    - [Elastic Common Schema](https://www.elastic.co/guide/en/ecs/current/index.html) - Elastic ユーザーコミュニティのサポートを受けて開発されたオープンソース仕様
    - [Ingest pipelines](https://www.elastic.co/guide/en/elasticsearch/reference/current/ingest.html) - インデックス作成前にデータに対して一般的な変換を実行できる機能
    - [Dissect and Grok](https://www.elastic.co/guide/en/elasticsearch/reference/current/esql-process-data-with-dissect-and-grok.html) - 単一のテキストフィールドから構造化フィールドを抽出できるプロセッサー
  - [Graphite](https://grafana.com/oss/graphite/) - 高度にスケーラブルなリアルタイムグラフシステム
  - [Grafana Alerting](https://grafana.com/docs/grafana/latest/alerting/) - データに対するアラートを作成・管理できる機能
  - [OpenObserve](https://openobserve.ai/) - モダンアプリケーション向けに設計されたオープンソースのオブザーバビリティプラットフォーム

## SRE（サイトリライアビリティエンジニアリング）

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > SREプロセス

:::

- [Site Reliability Engineering](https://landing.google.com/sre/) - ソフトウェアエンジニアリングの側面を取り入れ、インフラストラクチャと運用の問題に適用するディシプリン
  - [Service Level Objectives (SLOs)](https://sre.google/sre-book/service-level-objectives/) - サービスレベルインジケーター (SLI) によって測定されるサービスレベルの目標値または値の範囲
  - [Dickerson's Hierarchy of Service Reliability](https://sre.google/sre-book/part-III-practices/) - 信頼性の高いサービスを構築・維持するために必要な基礎的要素を示すモデルで、ピラミッドとして可視化されることが多い
  - [The Four Golden Signals](https://sre.google/sre-book/monitoring-distributed-systems/) - Google の SRE がユーザー向けシステムの監視に使用する4つの主要なメトリクス（レイテンシ、トラフィック、エラー、サチュレーション）
- [Ishikawa diagram](https://en.wikipedia.org/wiki/Ishikawa_diagram) - 石川馨が考案した、特定の事象の潜在的な原因を示す因果図

### フリート管理 & 運用

- フリート管理
  - [AWS Systems Manager](https://aws.amazon.com/systems-manager/) - AWS、マルチクラウド、ハイブリッド環境のリソースに対するセキュアなエンドツーエンドの管理ソリューション
  - [Azure Automation](https://azure.microsoft.com/en-us/products/automation) - Azure および非 Azure 環境全体で一貫した管理をサポートするクラウドベースの自動化 & 設定サービス
    - [Azure Update Manager](https://learn.microsoft.com/en-us/azure/update-manager/) - すべてのマシンの更新を管理・統制するための統合サービス
- バックアップ
  - ベンダー固有のツール
    - [AWS Backup](https://aws.amazon.com/backup/) - AWS サービス、クラウド、オンプレミス全体のデータ保護を一元化・自動化するフルマネージドサービス
    - [Azure Backup](https://azure.microsoft.com/en-us/products/backup/) - Microsoft Azure クラウドからデータをバックアップし、回復するためのシンプル、セキュア、コスト効率の高いソリューションを提供するサービス
  - K8s 固有のツール
    - [Velero](https://velero.io/) - Kubernetes クラスターのリソースと永続ボリュームを安全にバックアップ・リストアし、ディザスタリカバリを実行し、移行するためのオープンソースツール
  - 汎用ツール
    - [Barman](https://pgbarman.org/) - オンラインホットバックアップを簡素化することでビジネス継続性を確保するように設計された PostgreSQL データベースのディザスタリカバリソリューション
    - [Restic](https://restic.net/) - 高速、安全、効率的なバックアッププログラム
- ランブック自動化
  - [RunDeck](https://www.rundeck.com/) - データセンターやクラウド環境での日常的な運用手順の自動化を支援するオープンソースの自動化プラットフォーム
- AIOps & 自律エージェント
  - [Azure SRE Agent](https://aka.ms/sreagent) - 監視、診断、インシデント解決の支援によって SRE プラクティスを自動化するために設計された AI 搭載サービス
  - [Mezmo Aura](https://www.mezmo.com/aura) - SRE と本番 AI 運用のために特別に設計されたオープンソースのエージェント型ハーネス

### カオスエンジニアリング

- コンセプト
  - [Chaos Engineering](https://en.wikipedia.org/wiki/Chaos_engineering) - 本番環境での乱流状態に耐えるシステムの能力への信頼を構築するためにシステムで実験する手法
  - [Principles of chaos engineering](https://principlesofchaos.org/) - カオスエンジニアリングのプラクティスを定義する原則
- カオスエンジニアリングツール
  - [Litmus](https://litmuschaos.io/) - Kubernetes 向けのクラウドネイティブなカオスエンジニアリングフレームワーク
  - [Chaos Mesh](https://chaos-mesh.org/) - Kubernetes 環境でカオスをオーケストレーションするクラウドネイティブなカオスエンジニアリングプラットフォーム
  - [Toxiproxy](https://github.com/Shopify/toxiproxy) - カオスと回復力テストのためにネットワークとシステムの状態をシミュレートする TCP プロキシ
  - [kubeinvaders](https://github.com/lucky-sideburn/kubeinvaders) - Kubernetes のゲーミファイされたカオスエンジニアリングツール

### FinOps

- コンセプト
  - [FinOps principles](https://www.finops.org/framework/principles/) - クラウドの変動費用モデルに財務的説明責任をもたらす文化的プラクティス
- FinOps ツール
  - [FinOps toolkit](https://microsoft.github.io/finops-toolkit/) - 組織での FinOps 実装のためのツール、リソース、ベストプラクティスのコレクション
  - [AWS Cost Explorer](https://aws.amazon.com/aws-cost-management/aws-cost-explorer/) - コストと使用状況を表示・分析できるツール
  - [Infracost](https://www.infracost.io/) - Terraform、CloudFormation、その他のインフラストラクチャアズコードプロジェクトのクラウドコスト見積もりを表示するツール
  - [OpenCost](https://www.opencost.io/) - Kubernetes 支出を監視するためのオープンソースソリューション
  - [Cloud Custodian](https://cloudcustodian.io/) - パブリッククラウドのアカウントとリソースを管理するためのルールエンジン

## パフォーマンス & 負荷テスト

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > SREプロセス

:::

- [Performance Testing](https://en.wikipedia.org/wiki/Software_performance_testing) - 特定のワークロード下でのシステムの応答性と安定性を評価する手法

### パフォーマンステストツール

- [Hyperfine](https://github.com/sharkdp/hyperfine) - コマンドラインベンチマーキングツール
- [Locust](https://locust.io/) - 使いやすい分散型のユーザー負荷テストツール
- [Grafana k6](https://k6.io/) - エンジニアリングチームのパフォーマンステストを簡単かつ生産的にするオープンソースの負荷テストツール
- [Gatling](https://gatling.io/) - エンジニアリングチームがパフォーマンスの懸念を左にシフトするのを助けるプログラマー向けの負荷テストツール
- [Apache Jmeter](https://jmeter.apache.org/) - 機能的な動作を負荷テストしパフォーマンスを測定するために設計された純粋な Java アプリケーション
- [ab](https://httpd.apache.org/docs/2.4/programs/ab.html) - Apache HTTP サーバーをベンチマークするためのツール
- [stress-ng](https://github.com/ColinIanKing/stress-ng) - 設定可能な量の CPU、メモリ、I/O、ディスクストレスをシステムに与えるツール
- [sysbench](https://github.com/akopytov/sysbench) - LuaJIT に基づくスクリプト可能なマルチスレッドベンチマークツール
- [fio](https://github.com/axboe/fio) - ユーザーが指定した特定の種類の I/O アクションを実行するスレッドまたはプロセスを多数生成するツール
- [iPerf](https://iperf.fr/) - TCP、UDP、SCTP の究極のスピードテストツール
- [Speedtest CLI](https://www.speedtest.net/apps/cli) - Web ブラウザーに依存せず、ダウンロード、アップロード、レイテンシー、パケットロスといったインターネット接続のパフォーマンス指標をネイティブに測定するコマンドラインインターフェース
- [plow](https://github.com/six-ddc/plow) - Web UI とターミナルインターフェースの両方でリアルタイムのパフォーマンスメトリクスを表示しながら並行接続で負荷テストを実施する、Golang で書かれた HTTP(S) ベンチマークツール
- [loadgen-rs](https://github.com/git001/loadgen-rs) - コマンドラインモードと分散モードをサポートする、HTTP/1.1、HTTP/2、HTTP/3 (QUIC) に対応した h2load 互換の Rust 製 HTTP ベンチマーククライアント
