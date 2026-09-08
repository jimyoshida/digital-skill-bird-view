# 04 - セキュリティとプライバシー

## セキュリティの基礎

:::note[Relevant DSS-P Skills]

- 4\. セキュリティ > 4\.1 セキュリティマネジメント > セキュリティ体制構築・運営
- 4\. セキュリティ > 4\.1 セキュリティマネジメント > セキュリティマネジメント

:::

- [Information security](https://en.wikipedia.org/wiki/Information_security) - 情報リスクを軽減することで情報を保護する実践です
- [Vulnerability](https://en.wikipedia.org/wiki/Vulnerability_(computer_security)) - 脅威アクターに悪用され得る弱点です
- [Threat](https://en.wikipedia.org/wiki/Threat_(computer_security)) - 脆弱性によって助長される潜在的な悪意ある行為やイベントです
- [Shared Responsibility Model](https://www.crowdstrike.com/en-us/cybersecurity-101/cloud-security/shared-responsibility/) - クラウド環境のあらゆる側面を保護するためのクラウドサービスプロバイダー (CSP) と顧客の責任を明示するセキュリティ・コンプライアンスフレームワークです

### 一般的な脅威と攻撃ベクトル

- [Malware](https://en.wikipedia.org/wiki/Malware) - コンピュータ、サーバー、クライアント、コンピュータネットワークに意図的に混乱を引き起こすよう設計されたあらゆるソフトウェアです
- [Ransomware](https://en.wikipedia.org/wiki/Ransomware) - 身代金が支払われない限り被害者の個人データを公開する、またはそのアクセスを永久にブロックすると脅迫する、暗号ウイルス学に由来するマルウェアの一種です
- [Social engineering](https://en.wikipedia.org/wiki/Social_engineering_(security)) - 人々を心理的に操作し、行動を実行させたり機密情報を漏らさせたりすることです
- [Phishing](https://en.wikipedia.org/wiki/Phishing) - 攻撃者が機密情報を明かすよう人を騙すために設計された詐欺メッセージを送るソーシャルエンジニアリングの一種です
- [Business Email Compromise (BEC)](https://www.microsoft.com/en-us/security/business/security-101/what-is-business-email-compromise-bec) - 攻撃者が高位の経営幹部になりすまし、従業員や顧客を騙して送金や機密データの引き渡しをさせようとするフィッシング攻撃の一種です
- [Infostealer](https://en.wikipedia.org/wiki/Infostealer) - システムから情報を収集するよう設計されたトロイの木馬の一種です
- [Mirai (malware)](https://en.wikipedia.org/wiki/Mirai_(malware)) - Linux を実行するネットワーク接続デバイスを、大規模ネットワーク攻撃でボットネットの一部として使用できる遠隔操作可能なボットに変えるマルウェアです
- [Think before you Click(Fix)](https://www.microsoft.com/en-us/security/blog/2025/08/21/think-before-you-clickfix-analyzing-the-clickfix-social-engineering-technique/) - 対象者が軽微な技術的問題を解決しようとする傾向を利用して、デバイス上で悪意あるコマンドを実行させるよう騙すソーシャルエンジニアリング技術です
- [Evilginx](https://github.com/kgretzky/evilginx2) - ログイン認証情報とセッションクッキーをフィッシングするために使用される中間者攻撃フレームワークです

### 現代のセキュリティアーキテクチャ

- [Zero trust security model](https://en.wikipedia.org/wiki/Zero_trust_security_model) - 信頼が暗黙的に付与されることは決してなく、すべての人に検証が要求される IT システムの設計・実装へのアプローチです

### セキュリティトレーニングとコンペティション

- [Capture the flag (cybersecurity)](https://en.wikipedia.org/wiki/Capture_the_flag_(cybersecurity)) - 参加者が専門知識と技術を駆使して隠された「フラグ」(答え) を見つけ出し、合計得点の最高値を競うハッキングコンテストです
- プラットフォーム
  - [CTFd](https://ctfd.io/) - テーマやプラグインで簡単にカスタマイズできる堅牢な基盤を提供する、独自のサイバーセキュリティワークショップを開催できる最も簡単な Capture The Flag プラットフォームです

## 暗号技術とデータ保護

:::note[Relevant DSS-P Skills]

- 4\. セキュリティ > 4\.2 セキュリティ技術 > セキュア設計・開発・構築

:::

### 中核となる暗号技術

#### ハッシュ化

- ハッシュ関数
  - [MD5](https://en.wikipedia.org/wiki/MD5) - 暗号学的には破られているものの、今なお広く使用されている 128 ビットのハッシュ値を生成するハッシュ関数です
  - [SHA-2 (SHA-224, SHA-256, SHA-384, SHA-512)](https://en.wikipedia.org/wiki/SHA-2) - アメリカ国家安全保障局 (NSA) が設計した暗号学的ハッシュ関数群です
  - [Bcrypt](https://en.wikipedia.org/wiki/Bcrypt) - Blowfish 暗号をベースとしたパスワードハッシュ関数です
  - [Scrypt](https://en.wikipedia.org/wiki/Scrypt) - Colin Percival が作成したパスワードベースの鍵導出関数です

#### 共通鍵暗号

- [Symmetric-key algorithm](https://en.wikipedia.org/wiki/Symmetric-key_algorithm) - 平文の暗号化と暗号文の復号の両方に同一の暗号鍵を使用する暗号アルゴリズムです
- ブロック暗号
  - [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) - 2001 年にアメリカ国立標準技術研究所 (NIST) によって制定された電子データの暗号化仕様です
- ストリーム暗号
  - [Salsa20 ChaCha](https://en.wikipedia.org/wiki/Salsa20#ChaCha_variant) - 同等またはわずかに優れた性能を維持しつつラウンドあたりの拡散を高めた Salsa20 の派生版です
- MAC (メッセージ認証コード)
  - [HMAC](https://en.wikipedia.org/wiki/HMAC) - 暗号学的ハッシュ関数と秘密の暗号鍵を組み合わせた特定の種類のメッセージ認証コード (MAC) です
- 運用モード
  - [CBC (Cipher block chaining)](https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation#CBC) - 平文のブロックを暗号化する前に直前の暗号文ブロックと XOR するブロック暗号の運用モードです
  - [GCM (Galois/Counter Mode)](https://en.wikipedia.org/wiki/Galois/Counter_Mode) - その性能の高さから広く採用されている共通鍵ブロック暗号の運用モードです
  - [CCM](https://en.wikipedia.org/wiki/CCM_mode) - 認証と機密性の両方を提供するよう設計されたブロック暗号の運用モードです

#### 公開鍵暗号

- [Digital signature](https://en.wikipedia.org/wiki/Digital_signature) - デジタルメッセージや文書の真正性を検証するための数学的スキームです
- [Public-key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography) - 鍵のペアを使用する暗号システムです
  - [RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem)) - セキュアなデータ伝送のために広く使用されている公開鍵暗号システムです
  - [EdDSA](https://en.wikipedia.org/wiki/EdDSA) - ツイストエドワーズ曲線に基づく Schnorr 署名の変種を用いたデジタル署名方式です
- 鍵合意
  - [Diffie-Hellman key exchange](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange) - 公開チャネル上で暗号鍵を安全に交換する方法です
  - [Elliptic-curve Diffie-Hellman](https://en.wikipedia.org/wiki/Elliptic-curve_Diffie%E2%80%93Hellman) - 安全でないチャネル上で 2 者が共有秘密を確立できる鍵合意プロトコルです
- 暗号化方式
  - [RSAES-PKCS1-v1_5](https://en.wikipedia.org/wiki/PKCS_1) - PKCS #1 のバージョン 1.5 で初めて標準化された古い暗号化・復号方式 (ES) で、脆弱性があることが知られています
  - [RSAES-OAEP](https://en.wikipedia.org/wiki/Optimal_Asymmetric_Encryption_Padding) - ランダム性を付加し部分復号を防ぐことで RSA 暗号化を強化するパディング方式で、PKCS#1 v2 と RFC 2437 で標準化されました
- 署名方式
  - [RSASSA-PKCS1-v1_5](https://en.wikipedia.org/wiki/PKCS_1) - PKCS #1 のバージョン 1.5 で初めて標準化された付録付き署名方式 (SSA) で、Jager 他 (2018 年) によれば偽造不可能であると考えられています
  - [DSA](https://en.wikipedia.org/wiki/Digital_Signature_Algorithm) - デジタル署名のための公開鍵暗号システムであり連邦情報処理標準でもあり、モジュラー冪乗と離散対数問題という数学的概念に基づいています
  - [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) - 楕円曲線暗号を利用した Digital Signature Algorithm (DSA) の変種です
- 鍵フォーマット
  - [PKCS #1: RSA Cryptography Specifications](https://en.wikipedia.org/wiki/PKCS_1) - 公開鍵暗号のための RSA アルゴリズムの基本的な定義と実装に関する推奨事項を提供する標準です
  - [PKCS #12: Personal Information Exchange Syntax](https://en.wikipedia.org/wiki/PKCS_12) - 複数の暗号オブジェクトを 1 つのファイルに格納するためのファイル形式です
- 暗号標準とフォーマット
  - [Cryptographic Message Syntax](https://en.wikipedia.org/wiki/Cryptographic_Message_Syntax) - あらゆる形式のデジタルデータをデジタル署名、ダイジェスト化、認証、暗号化するために暗号方式やプロトコルで使用される、暗号学的に保護されたメッセージのための IETF 標準です

### 公開鍵基盤 (PKI)

- [Public Key Infrastructure (PKI)](https://en.wikipedia.org/wiki/Public_key_infrastructure) - デジタル証明書の作成、管理、配布、使用、保管、失効に必要な役割、ポリシー、ハードウェア、ソフトウェア、手順の集合です
- [Certificate authority (CA)](https://en.wikipedia.org/wiki/Certificate_authority) - デジタル証明書を保管、署名、発行するエンティティです
- Registration authority (RA)
- Validation authority (VA)
- プロトコルと標準
  - [Simple Certificate Enrollment Protocol](https://en.wikipedia.org/wiki/Simple_Certificate_Enrollment_Protocol) - X.509 証明書を安全かつ自動化された方法で登録するためのプロトコルです
- 検証と登録
  - [Domain Control Validation](https://github.com/digicert/domain-control-validation) - 証明書を要求する人物や組織が証明書に記載されたドメインを実際に管理していることを認証局 (CA) が検証するために用いるプロセスです
- 信頼ストア
  - [Certifi](https://certifi.io/) - TLS ホストの身元を検証しつつ SSL 証明書の信頼性を検証するために厳選されたルート証明書のコレクションです
- [Public key certificate](https://en.wikipedia.org/wiki/Public_key_certificate) - 公開鍵の有効性を証明するために使用される電子文書です
  - Domain Validated (DV)
  - Organization Validated (OV)
  - Extended Validation (EV)
- [Let's Encrypt](https://letsencrypt.org/) - TLS 証明書を提供する非営利の認証局です
  - [certbot](https://certbot.eff.org/) - 手動管理のウェブサイトで HTTPS を有効化するために Let's Encrypt 証明書を自動的に利用する無料のオープンソースソフトウェアツールです
  - [lego](https://go-acme.github.io/lego/) - Go で書かれた Let's Encrypt クライアントおよび ACME ライブラリです
- [ACME (Automatic Certificate Management Environment)](https://en.wikipedia.org/wiki/Automatic_Certificate_Management_Environment) - 認証局とそのユーザーの Web サーバー間のやり取りを自動化するための通信プロトコルです
- [mkcert.org](https://mkcert.org/) - ローカルで信頼される開発用証明書を作成するためのシンプルなツールです
- [cert-manager](https://cert-manager.io) - Kubernetes と OpenShift 向けの強力で拡張可能な X.509 証明書コントローラーです
- [cfssl](https://github.com/cloudflare/cfssl#readme) - Cloudflare の PKI ツールキットです

### シークレット管理

- 🔒 [Vault](https://www.vaultproject.io/) - API キー、パスワード、証明書などのシークレットに安全にアクセスするためのツールです
- [OneCLI](https://www.onecli.sh/) - シークレットを暗号化されたボールトに保存し、キーを公開することなくエージェントのリクエストに注入する、AI エージェント向けのオープンソースの認証情報ボールトおよびプロキシゲートウェイです
- [SOPS](https://github.com/mozilla/sops) - YAML、JSON、ENV、INI、BINARY 形式に対応した暗号化ファイルのエディタです
- [git-secret](https://git-secret.io/) - 秘密のデータを git リポジトリ内に保存するための bash ツールです
- Kubernetes エコシステム
  - [Sealed Secrets](https://github.com/bitnami-labs/sealed-secrets) - 一方向に暗号化された Secrets のための Kubernetes コントローラーおよびツールです
  - [Secrets Store CSI Driver](https://secrets-store-csi-driver.sigs.k8s.io/) - エンタープライズグレードの外部シークレットストアに保存された複数のシークレット、鍵、証明書をボリュームとして Pod にマウントできるようにするドライバーです
  - [External Secrets Operator](https://external-secrets.io/latest/) - AWS Secrets Manager、HashiCorp Vault、Google Secrets Manager、Azure Key Vault、IBM Cloud Secrets Manager などの外部シークレット管理システムを統合する Kubernetes オペレーターです
- ベンダーサービス
  - 💲 [Azure Key Vault](https://azure.microsoft.com/en-us/products/key-vault/) - クラウドアプリやサービスで使用される暗号鍵やその他のシークレットを保護するクラウドサービスです
  - 💲 [Google Cloud Secret Manager](https://cloud.google.com/security/products/secret-manager) - API キー、パスワード、証明書などの機密データのための安全で便利なストレージシステムです
  - 💲 [AWS Key Management Service](https://aws.amazon.com/kms/) - 暗号鍵の作成と管理を容易にするサービスです
  - 💲 [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/) - アプリケーション、サービス、IT リソースへのアクセスを保護するシークレット管理サービスです

### 応用暗号技術とツール

- 高度な暗号技術トピック
  - [Post-quantum cryptography](https://en.wikipedia.org/wiki/Post-quantum_cryptography) - 量子コンピュータによる暗号解読攻撃に対して安全であると考えられている暗号アルゴリズムです
  - 情報ハイディング
    - [Steganography](https://en.wikipedia.org/wiki/Steganography) - ファイル、メッセージ、画像、動画を別のファイル、メッセージ、画像、動画の中に隠す実践です
    - [Digital watermarking](https://en.wikipedia.org/wiki/Digital_watermarking) - 音声、動画、画像データなど、ノイズに耐性のある信号にひそかに埋め込まれる一種のマーカーです

- コンテンツ来歴と真正性
  - [C2PA (Coalition for Content Provenance and Authenticity)](https://c2pa.org/) - 発行者、制作者、消費者がデジタルコンテンツの出所と編集履歴を確認できるようにするオープンな技術標準です

- エンドツーエンド暗号化ツール
  - [age](https://github.com/FiloSottile/age) - シンプルでモダン、かつ安全なファイル暗号化ツール、フォーマット、Go ライブラリです
  - [Pretty Good Privacy (PGP)](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) - データ通信に暗号学的なプライバシーと認証を提供するデータ暗号化・復号コンピュータプログラムです
  - [OpenPGP](https://www.openpgp.org/) - 公開鍵と暗号化されたメッセージを交換するための非独占的プロトコルです
  - [keys.openpgp.org](https://keys.openpgp.org/about) - OpenPGP のための公開鍵サーバーです
  - [GnuPG](https://gnupg.org/) - PGP 暗号ソフトウェアスイートの代替となるフリーソフトウェアです
  - [Gpg4win](https://www.gpg4win.org/) - OpenPGP の助けを借りてメールやファイルの安全な転送を容易にする Windows 向けソフトウェアパッケージです

- 暗号ライブラリ
  - [PyCryptodome](https://www.pycryptodome.org/) - 自己完結型の暗号プリミティブの Python パッケージです
  - [Python cryptography](https://cryptography.io/en/latest/) - Python 開発者に暗号プリミティブとレシピを提供するよう設計されたパッケージです
  - [Go Cryptography](https://pkg.go.dev/golang.org/x/crypto) - Go 暗号ライブラリのコレクションです
  - [Botan](https://botan.randombit.net/) - C++ で書かれた暗号ライブラリです

## ID・アクセス管理 (IAM)

:::note[Relevant DSS-P Skills]

- 4\. セキュリティ > 4\.2 セキュリティ技術 > セキュア設計・開発・構築
- 2\. データ整備・活用 > 2\.3 データマネジメント > データの品質・安全性向上

:::

### 統合 IAM

- [Identity management](https://en.wikipedia.org/wiki/Identity_management) - 企業内の適切な人物がテクノロジーリソースへの適切なアクセス権を持つことを保証するためのポリシーとテクノロジーの枠組みです
- セルフホスト型 IAM プラットフォーム
  - 🔒 [FusionAuth CE](https://fusionauth.io/) - FusionAuth のセルフホスト型・コミュニティサポート版です
  - [KeyCloak](https://www.keycloak.org/) - オープンソースの ID・アクセス管理ソリューションです
  - [FreeIPA](https://www.freeipa.org/) - Linux、389 Directory Server、MIT Kerberos、NTP、DNS、証明書システムを組み合わせた統合セキュリティ情報管理ソリューションです
- クラウド IAM サービス
  - 🪙 [Microsoft Entra ID](https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id) - クラウドベースの ID・アクセス管理サービスです
  - [AWS IAM](https://aws.amazon.com/iam/) - AWS リソースへのアクセスを安全に制御するサービスです
  - 🪙 [Amazon Cognito](https://aws.amazon.com/cognito/) - Web アプリやモバイルアプリにユーザー登録、サインイン、アクセス制御を追加できるサービスです
  - 🪙 [Auth0](https://auth0.com/) - アプリケーションに認証・認可サービスを追加できる柔軟な組み込み型ソリューションです
- [Directory service](https://en.wikipedia.org/wiki/Directory_service) - ネットワークリソースの名前をそれぞれのネットワークアドレスに対応付けるサービスです
  - [LDAP](https://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol) - 分散ディレクトリ情報サービスへのアクセスと維持のためのオープンでベンダーニュートラルな業界標準アプリケーションプロトコルです
  - [OpenLDAP](https://www.openldap.org/) - Lightweight Directory Access Protocol のオープンソース実装です
  - [389 Directory Server](https://directory.fedoraproject.org/) - Red Hat が Linux システム向けに開発した無料のオープンソースソフトウェアプロジェクトです
- 仕様
  - [Decentralized Identifiers (DIDs)](https://www.w3.org/TR/did-1.0/) - 検証可能で分散化されたデジタル ID を実現する新しいタイプの識別子です
  - [System for Cross-domain Identity Management (SCIM)](https://simplecloud.info/) - クラウドベースのアプリケーションやサービスにおけるユーザー ID の管理を容易にするよう設計された仕様です

### 認証 (AuthN)

- [Authentication](https://en.wikipedia.org/wiki/Authentication) - コンピュータシステムのユーザーの身元などの主張を証明する行為です
- [Mutual authentication](https://en.wikipedia.org/wiki/Mutual_authentication) - 通信リンクの両当事者が互いを認証するプロセスです
- [Multi-factor authentication (MFA)](https://en.wikipedia.org/wiki/Multi-factor_authentication) - アクセスに複数の検証方法を要求する方式です
- [3-D Secure](https://en.wikipedia.org/wiki/3-D_Secure) - オンラインのクレジットカードおよびデビットカード取引に追加のセキュリティ層を提供するよう設計されたセキュリティプロトコルです
- [Single sign-on (SSO)](https://en.wikipedia.org/wiki/Single_sign-on) - 1 回のログインで複数のアプリケーションを利用できるようにするサービスです
- プロトコルと標準
  - [OpenID Connect](https://openid.net/connect/) - OAuth 2.0 プロトコルの上に構築されたシンプルな ID レイヤーです
  - [SAML](http://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0.html) - ユーザーをアプリケーションにログインさせるための標準です
  - [WS-Federation](http://docs.oasis-open.org/wsfed/federation/v1.2/ws-federation.html) - 参加する Web サービス間で信頼を仲介し、ID、属性、認証を管理する仕組みを定義する仕様です
  - [FIDO2](https://fidoalliance.org/specifications/) (WebAuthn, CTAP, Passkeys) - ユーザーが一般的なデバイスを活用してオンラインサービスに簡単かつ安全に認証できるようにする仕様群です
    - Relying party - ユーザーの身元を検証したいウェブサイトやオンラインサービスです (例: 銀行のウェブサイト)
    - Authenticator - 暗号鍵を安全に保管し、ユーザーの認証を実行するデバイスまたはソフトウェアです
    - Client - ユーザーのデバイス上で動作し、Relying Party と Authenticator の間を仲介するソフトウェアです (通常は Web ブラウザや OS のコンポーネント)
    - [WebAuthn](https://www.w3.org/TR/webauthn-1/) - 公開鍵クレデンシャルにアクセスするための API です
    - [CTAP](https://fidoalliance.org/specs/fido-v2.0-id-20180227/fido-client-to-authenticator-protocol-v2.0-id-20180227.html) - 外部の Authenticator がクライアントプラットフォームと通信できるようにするプロトコルです
    - [Passkeys](https://passkey.org/) - パスワードに代わるフィッシング耐性のある認証手段です
  - [SPIFFE](https://spiffe.io/) - 誰もが使えるセキュアなプロダクション ID フレームワークです
  - [Kerberos](https://web.mit.edu/kerberos/) - チケットに基づいて動作するコンピュータネットワーク認証プロトコルです
  - [SSPI (Security Support Provider Interface)](https://learn.microsoft.com/en-us/windows/win32/secauthn/sspi) - セキュリティシステムへのインターフェースを変更することなく、コンピュータやネットワークで利用可能な各種セキュリティモデルをアプリケーションが使用できるようにする Win32 API です
- クレデンシャルとトークン
  - [Basic authentication](https://en.wikipedia.org/wiki/Basic_access_authentication) - HTTP ユーザーエージェントがリクエスト時にユーザー名とパスワードを提供する方式です
  - [JSON Web Token (JWT)](https://en.wikipedia.org/wiki/JSON_Web_Token) - 任意の署名や暗号化を伴うデータを作成するためのインターネット標準で、そのペイロードにはいくつかのクレームを主張する JSON が格納されます
    - [nodejs jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme) - Node.js 向けの JSON Web Tokens 実装です
  - [TOTP (Time-Based One-Time Password)](https://en.wikipedia.org/wiki/Time-based_one-time_password) - コンピュータシステムへのアクセスを認証するためにアルゴリズムによって生成される一時的なパスコードです
  - [AWS Signature Version 4 (SigV4)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_sigv.html) - HTTP で送信される AWS API リクエストに認証情報を追加するプロセスです
- プラットフォームとツール
  - [Dex](https://dexidp.io/) - フェデレーテッドな OpenID Connect プロバイダーです
  - 🪙 [Firebase Authentication](https://firebase.google.com/docs/auth) - アプリのユーザーを認証するためのバックエンドサービス、使いやすい SDK、既製の UI ライブラリを提供するサービスです
  - 🪙 [Supabase Auth](https://supabase.com/docs/guides/database/overview) - Supabase プロジェクトのユーザー管理とアクセス制御を提供するサービスです
  - 🪙 [ReCAPTCHA](https://en.wikipedia.org/wiki/ReCAPTCHA) - Web ホストがウェブサイトへの人間によるアクセスと自動化されたアクセスを区別できるようにする CAPTCHA システムです
  - [Microsoft Authentication Library (MSAL)](https://learn.microsoft.com/en-us/azure/active-directory/develop/msal-overview) - 開発者がアプリケーションに認証・認可を統合するのを助けるライブラリです
  - [Application Default Credentials (ADC)](https://cloud.google.com/docs/authentication/provide-credentials-adc) - Google Cloud クライアントライブラリがアプリケーション環境に基づいて認証情報を自動的に検出するために使用する仕組みです
  - [Limen](https://limenauth.dev/) - セッション、パスワードハッシュ化、OAuth、CSRF 保護を提供する、Go 向けの軽量で組み合わせ可能な認証・認可ライブラリです

### 認可 (AuthZ)

- [Authorization](https://en.wikipedia.org/wiki/Authorization) - リソースへのアクセス権・権限を指定する機能です
- アクセス制御モデル
  - [Access control list (ACL)](https://en.wikipedia.org/wiki/Access-control_list) - システムリソースに関連付けられた権限のリストです
  - [Attribute-based access control (ABAC)](https://en.wikipedia.org/wiki/Attribute-based_access_control) - ユーザーの属性に基づいてアクセスを許可するモデルです
  - [Discretionary access control (DAC)](https://en.wikipedia.org/wiki/Discretionary_access_control) - ユーザーが自身のリソースへのアクセスを制御できるようにするモデルです
  - [Mandatory access control (MAC)](https://en.wikipedia.org/wiki/Mandatory_access_control) - セキュリティラベルに基づいてアクセスポリシーを強制するモデルです
  - [Role-based access control (RBAC)](https://en.wikipedia.org/wiki/Role-based_access_control) - ロールと権限を中心に定義されたポリシー中立なアクセス制御メカニズムです
    - [Azure RBAC](https://docs.microsoft.com/en-us/azure/role-based-access-control/overview) - Azure リソースのきめ細かなアクセス管理を可能にするシステムです
      - セキュリティプリンシパルの種類: User、Group、Service Principal、Managed Identity
    - [Entra ID RBAC](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/) - Microsoft Entra リソースのきめ細かなアクセス管理を提供するシステムです
- プロトコルと標準
  - [OAuth 2.0 Authorization Framework](https://oauth.net/2/) - アクセス委譲のためのオープンな標準です
    - Resource owner - アクセス対象のデータやリソースを所有するユーザーです
    - Resource server - 保護されたリソースをホストするサーバーです
    - Client - リソースオーナーに代わってリソースにアクセスしようとするアプリケーションやサービスです
    - Authorization server - クライアントにアクセストークンを発行するサーバーです
- プラットフォームとツール
  - [Permify](https://github.com/Permify/permify) - Golang API を用いてあらゆる種類の認可システムを構築できるオープンソースの認可サービスです
  - [Azure Shared Access Signature (SAS)](https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview) - 1 つ以上のストレージリソースを指す署名付き URI で、アクセスの権限と期間を指定するトークンを含みます

## セキュアな開発ライフサイクル (DevSecOps)

:::note[Relevant DSS-P Skills]

- 4\. セキュリティ > 4\.2 セキュリティ技術 > セキュア設計・開発・構築

:::

### セキュア設計とモデリング

- [Threat modeling](https://en.wikipedia.org/wiki/Threat_model) - 仮想的な攻撃者の視点から潜在的な脅威を特定、列挙、優先順位付けするプロセスです
- [OWASP Threat Modeling](https://owasp.org/www-project-security-culture/v10/6-Threat_Modelling/) - 開発ライフサイクルに脅威モデリングを組み込むための OWASP Security Culture プロジェクトによるガイダンスです
- [STRIDE model](https://en.wikipedia.org/wiki/STRIDE_%28security%29) - コンピュータセキュリティの脅威を 6 つのカテゴリに分類するための記憶術です
- [MITRE ATT&CK](https://attack.mitre.org/) - 敵対者の戦術と技術に関する世界中でアクセス可能なナレッジベースです
  - Tactics: 敵対者が攻撃中に達成しようとする高レベルの目的や目標です
  - Techniques: 敵対者が戦術的目標を達成するための具体的な方法や手段です
  - Procedures: 敵対者が作戦で利用する技術の具体的な実装やバリエーションです
- モデリングツール
  - [OWASP Threat Dragon](https://owasp.org/www-project-threat-dragon/) - 無料でオープンソース、クロスプラットフォームの脅威モデリングアプリケーションです
  - [threatspec](https://threatspec.org/) - 脅威モデルをコードとして定義できるツールです

### セキュアな開発プラクティス

- [Secure Software Development Framework (SSDF)](https://csrc.nist.gov/projects/ssdf) - 基礎的で健全、かつ安全なソフトウェア開発プラクティス群です
- [Microsoft Security Development Lifecycle (SDL)](https://www.microsoft.com/en-us/securityengineering/sdl) - 開発者がより安全なソフトウェアを構築し、開発コストを削減しながらセキュリティコンプライアンス要件に対応することを支援するソフトウェア開発プロセスです
- [OWASP Application Security Verification Standard (ASVS)](https://owasp.org/www-project-application-security-verification-standard/) - アプリケーションレベルのセキュリティ検証を実施するための標準です
- [OWASP Security Champions](https://owasp.org/www-project-security-culture/v10/4-Security_Champions/) - 開発チーム内にセキュリティの専門知識と文化を根付かせるためのプログラムです
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/) - 様々なセキュリティトピックに関する簡潔なチートシートのコレクションです
- [OWASP LLM Top 10](https://genai.owasp.org/llm-top-10/) - 開発、デプロイ、管理のライフサイクル全体にわたって、生成 AI や大規模言語モデルアプリケーションを開発・保護するための上位 10 のリスク、脆弱性、対策のガイドです
- コーディング標準
  - [MISRA C](https://en.wikipedia.org/wiki/MISRA_C) - 安全性が重視される組み込みシステムにおける C 言語の使用に関するガイドライン群で、もともと自動車業界向けに開発されました
  - [CERT Secure Coding Standards](https://en.wikipedia.org/wiki/CERT_Secure_Coding_Standards) - Carnegie Mellon 大学の CERT が公開している C、C++、Java、Perl などの言語向けプログラミングセキュリティガイドライン集です

### Web アプリケーションセキュリティ

- セキュリティメカニズムとポリシー
  - [SOP (Same-origin policy)](https://en.wikipedia.org/wiki/Same-origin_policy) - Web アプリケーションセキュリティモデルにおける重要な概念です
  - [CORS (Cross-Origin Resource Sharing)](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) - Web ページ上の制限されたリソースを別のドメインからリクエストできるようにするメカニズムです
  - [CSP (Content Security Policy)](https://content-security-policy.com/) - クロスサイトスクリプティング (XSS) やデータインジェクション攻撃など特定の種類の攻撃を検出・軽減するための追加のセキュリティ層です
  - [HSTS (HTTP Strict Transport Security)](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) - プロトコルダウングレード攻撃やクッキーハイジャッキングからウェブサイトを保護するための Web セキュリティポリシーメカニズムです
  - [Cross-origin isolation](https://web.dev/articles/cross-origin-isolation-guide) - Web ページが SharedArrayBuffer や performance.measureUserAgentSpecificMemory() などの強力な機能を使用できるようにする Web セキュリティ機能です
- 一般的な脆弱性と攻撃
  - [Cross-site request forgery (CSRF)](https://en.wikipedia.org/wiki/Cross-site_request_forgery) - Web アプリケーションが信頼するユーザーから不正なコマンドが送信される、ウェブサイトの悪意ある悪用の一種です
  - [Cross-site scripting (XSS)](https://en.wikipedia.org/wiki/Cross-site_scripting) - Web アプリケーションでよく見られるセキュリティ脆弱性の一種です
  - [DNS rebinding](https://en.wikipedia.org/wiki/DNS_rebinding) - 悪意ある Web ページがドメインネームシステムを悪用して同一オリジンポリシーを回避できるようにする攻撃の一種です
  - [SSRF (Server-side request forgery)](https://en.wikipedia.org/wiki/Server-side_request_forgery) - 攻撃者がサーバー上の機能を悪用して内部リソースを読み取ったり変更したりできる悪用の一種です
- プライバシーと透明性
  - [Privacy sandbox](https://developers.google.com/privacy-sandbox) - オンラインでの人々のプライバシーを保護し、企業や開発者に活気あるデジタルビジネスを構築するツールを提供する Google の取り組みです
  - [security.txt](https://securitytxt.org/) - ウェブサイトが研究者向けにセキュリティポリシーを定義できるようにする提案標準です

### アプリケーションセキュリティテスト (AST)

- 統合セキュリティプラットフォーム
  - 💲 [GitHub Advanced Security](https://github.com/security/advanced-security) - 漏えいを未然に防ぐ Secret Protection とコードの脆弱性を修正する Code Security を組み合わせたスイートで、開発速度に見合ったセキュリティを提供します
- 静的解析 (SAST)
  - 🔒 [SonarQube Server](https://www.sonarsource.com/products/sonarqube/) - クリーンなコードを体系的に提供できるよう支援する、セルフマネージドの自動コードレビューツールです
  - 🪙 [GitLab SAST](https://docs.gitlab.com/ee/user/application_security/sast/index.html) - ソースコード内の既知の脆弱性をチェックするツールです
  - [Bandit](https://github.com/PyCQA/bandit) (for Python) - Python コード内の一般的なセキュリティ上の問題を見つけるよう設計されたツールです
  - [Semgrep OSS](https://github.com/semgrep/semgrep) - バグを見つけコード標準を強制するための、高速でオープンソースの静的解析ツールです
  - 🪙 [Fluid attacks](https://docs.fluidattacks.com/tech/scanner/plans/foss/) - ソースコード、コンテナ、依存関係の脆弱性を発見できるセキュリティツールです
  - 🔒 [CodeQL](https://codeql.github.com/) - コードをデータであるかのようにクエリして脆弱性やその亜種を見つけられるセマンティックコード解析エンジンです
- 動的解析 (DAST)
  - [ZAP](https://zaproxy.org/) - 世界で最も広く使われている Web アプリスキャナーで、無料かつオープンソースであり、誰もが貢献できるコミュニティベースの GitHub Top 1000 プロジェクトでもあります
  - [Nuclei](https://github.com/projectdiscovery/nuclei) - シンプルな YAML ベースの DSL 上に構築され、世界中のセキュリティコミュニティによって支えられている高速でカスタマイズ可能な脆弱性スキャナーです
  - [sqlmap](https://github.com/sqlmapproject/sqlmap) - SQL インジェクションの欠陥の検出・悪用とデータベースサーバーの乗っ取りを自動化するオープンソースのペネトレーションテストツールです
- シークレット検出
  - 🪙 [GitLab Secret Detection](https://docs.gitlab.com/ee/user/application_security/secret_detection/) - リポジトリの履歴をスキャンしてシークレットを検出するツールです
  - [Gitleaks](https://gitleaks.io/) - git リポジトリ内にハードコードされたパスワード、API キー、トークンなどのシークレットを検出・防止する SAST ツールです
  - [secretlint](https://github.com/secretlint/secretlint) - 認証情報のコミットを防止するプラガブルなリンティングツールです
  - [Talisman](https://thoughtworks.github.io/talisman/) - 潜在的なシークレットや機密情報がコミットされないようリポジトリにフックをインストールするツールです
  - [TruffleHog](https://github.com/trufflesecurity/trufflehog) - コミット履歴やブランチを深く掘り下げて環境内のシークレットをスキャンするツールです
  - [Whispers](https://github.com/Skyscanner/whispers) - ハードコードされた認証情報を探すために様々な一般的なデータ形式を解析するよう設計された静的コード解析ツールです
- AI オーケストレーションによるペネトレーションテスト
  - [PentestGPT](https://github.com/GreyDGL/PentestGPT) - 大規模言語モデル (LLM) を活用した自動ペネトレーションテストフレームワークです
  - [PentAGI](https://github.com/vxcontrol/pentagi) - 自動セキュリティテスト向けに設計された、オープンソースで完全自律型の AI エージェントシステムです
  - [Strix](https://github.com/usestrix/strix) - 実際のハッカーのように振る舞い、コードを動的に実行し、脆弱性を発見して実際の概念実証によって検証する自律型 AI エージェント群です
  - [CAI](https://github.com/aliasrobotics/cai) - セキュリティ専門家が AI 駆動の攻撃・防御自動化を構築・展開できるようにする軽量なオープンソースフレームワークです
  - [HexStrike AI](https://github.com/0x4m4/hexstrike-ai) - AI エージェントが自動ペネトレーションテスト、脆弱性発見、バグバウンティの自動化、セキュリティ研究のために 150 種類以上のサイバーセキュリティツールを自律的に実行できるようにする高度な MCP サーバーです
  - [Zen AI Pentest](https://shadd0wtaka.github.io/Zen-Ai-Pentest/) - 最先端の言語モデルとプロフェッショナルなセキュリティツールを組み合わせた自律型 AI 駆動のペネトレーションテストフレームワークです
  - [Project Glasswing](https://www.anthropic.com/glasswing) - 重要なソフトウェアインフラの脆弱性を自律的に発見できる、防御的サイバーセキュリティ向けの Anthropic の Claude Mythos Preview モデルへのアクセスを提供する取り組みです

### Infrastructure as Code (IaC) セキュリティ

- [Trivy](https://aquasecurity.github.io/trivy/) - 包括的で汎用性の高いセキュリティスキャナーです
- 💲 [Defender for Cloud CLI](https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-cli-overview) - CI/CD パイプラインでセキュリティスキャンをオーケストレーションし、結果を Microsoft Defender for Cloud にアップロードしてポスチャー管理と優先順位付けを行う、開発者ファーストのコマンドラインツールです
- [checkov](https://www.checkov.io/) - Infrastructure as Code (IaC) ファイルの設定ミスをスキャンする静的コード解析ツールです
- [Haskell Dockerfile Linter](https://github.com/hadolint/hadolint#readme) - ベストプラクティスに沿った Docker イメージの構築を支援する、よりスマートな Dockerfile リンターです
- [kube-score](https://kube-score.com/) - Kubernetes オブジェクト定義の静的コード解析を実行するツールです
- [kubesec](https://kubesec.io/) - Kubernetes リソースのセキュリティリスク分析です
- [PSRule](https://microsoft.github.io/PSRule/stable/) - Infrastructure as Code (IaC) をテスト・検証するコマンドを備えたクロスプラットフォームの PowerShell モジュールです
  - [PSRule for Azure](https://azure.github.io/PSRule.Rules.Azure/) - PSRule を使用して Azure リソースと Infrastructure as Code (IaC) を検証するルール群です
- [ComplianceAsCode](https://github.com/ComplianceAsCode/content) - SCAP、Bash、Ansible など様々な形式でセキュリティ自動化コンテンツを提供するプロジェクトです
- [complyctl](https://github.com/complytime/complyctl) - OSCAL を使用してコンプライアンス評価活動を効率化するコマンドラインツールです

### ソフトウェアサプライチェーンセキュリティ (SSCS)

- コンポジション分析 (SCA)
  - SBOM 生成
    - [Syft](https://github.com/anchore/syft) - コンテナイメージやファイルシステムから Software Bill of Materials (SBOM) を生成するための CLI ツールおよび Go ライブラリです
    - [OWASP CycloneDX format](https://cyclonedx.org) - アプリケーションセキュリティの文脈での使用を想定して設計された軽量な Software Bill of Materials (SBOM) 標準です
    - [SPDX format](https://spdx.dev/) - Software Bill of Materials (SBOM) 情報を伝達するためのオープン標準です
  - 脆弱性スキャン
    - [Grype](https://github.com/anchore/grype) - コンテナイメージとファイルシステム向けの脆弱性スキャナーです
    - [OSV-scanner](https://google.github.io/osv-scanner/) - OSV 公式の脆弱性スキャナーです
    - 🪙 [Safety](https://github.com/pyupio/safety/) - インストール済みの依存関係を既知のセキュリティ脆弱性についてチェックするツールです
    - [Clair](https://github.com/quay/clair) - アプリケーションコンテナ内の脆弱性を静的解析するオープンソースプロジェクトです
    - 🪙 [GitLab Container Scanning](https://docs.gitlab.com/ee/user/application_security/container_scanning/) - Docker イメージ内の既知の脆弱性をチェックするツールです
    - 💲 [JFrog Xray](https://jfrog.com/xray/) - ソフトウェアサプライチェーン全体にわたって脆弱性とライセンスコンプライアンスの問題を特定するアプリケーションセキュリティツールです
  - ライセンスと依存関係の分析
    - [Feluda](https://github.com/anistark/feluda) - Python プロジェクト向けの非常に高速な依存関係グラフ生成ツールです
  - 依存関係の自動更新
    - [Dependabot Core](https://github.com/dependabot/dependabot-core) - Dependabot のセキュリティ・バージョン更新の中核となるライブラリです
- フレームワークと評価
  - [SLSA framework](https://slsa.dev/) - 改ざんを防止し、完全性を向上させ、パッケージとインフラストラクチャを保護するための標準と管理策から成るセキュリティフレームワークです
  - [in-toto](https://in-toto.io/) - ソフトウェアサプライチェーンの完全性を保護するフレームワークです
  - [OpenSSF Scorecard](https://scorecard.dev/) - ソフトウェアセキュリティに関連する多数の重要なヒューリスティクス (「チェック」) を評価し、各チェックに 0 から 10 のスコアを割り当てる自動化ツールです
- 来歴と成果物メタデータ
  - [GUAC](https://guac.sh/) - ソフトウェアセキュリティメタデータを高精度なグラフデータベースに集約するオープンソースツールです
- セキュアな配布と更新
  - [The Update Framework (TUF)](https://theupdateframework.io/) - リポジトリや署名鍵を侵害する攻撃者に対しても保護を提供する、ソフトウェア更新システムを保護するためのフレームワークです
- コード署名と完全性
  - [Sigstore](https://www.sigstore.dev/) (Fulcio, Rekor, Cosign) - ソフトウェアの署名、検証、保護のための新しい標準です
- 注目すべき攻撃
  - [Shai-Hulud npm Supply Chain Attack](https://www.wiz.io/blog/shai-hulud-npm-supply-chain-attack) - post-install スクリプトを介して機密データを収集し、さらに拡散するためにアクセス可能なパッケージの悪意あるバージョンを自動的に公開する自己増殖型ワームです

## ランタイム・運用セキュリティ

:::note[Relevant DSS-P Skills]

- 4\. セキュリティ > 4\.1 セキュリティマネジメント > インシデント対応と事業継続
- 4\. セキュリティ > 4\.2 セキュリティ技術 > セキュリティ運用・保守・監視

:::

### クラウドネイティブアプリケーション保護 (CNAPP)

- [The 4 Cs of Cloud-Native Systems](https://www.trendmicro.com/vinfo/us/security/news/virtualization-and-cloud/securing-the-4-cs-of-cloud-native-systems-cloud-cluster-container-and-code) - クラウドネイティブアプリケーションに多層的な保護を提供するために、セキュリティ戦略を 4 つの層に分割する多層防御アプローチです
- 💲 [Microsoft Defender for Cloud](https://azure.microsoft.com/en-us/services/defender-for-cloud/) - クラウドベースのアプリケーションを保護するために設計された一連のセキュリティ対策とプラクティスを備えたクラウドネイティブアプリケーション保護プラットフォーム (CNAPP) です
- クラウドセキュリティポスチャー管理 (CSPM)
  - 💲 [AWS Security Hub](https://aws.amazon.com/security-hub/) - セキュリティのベストプラクティスチェックを実行し、アラートを集約し、自動修復を可能にするクラウドセキュリティポスチャー管理 (CSPM) サービスです
  - 🔒 [cnquery](https://mondoo.com/cnquery) - インフラストラクチャ全体をデータとしてクエリできる、クラウドネイティブでグラフベースのセキュリティツールです
- クラウドワークロード保護プラットフォーム (CWPP)
  - 💲 [Amazon Inspector](https://aws.amazon.com/inspector/) - AWS にデプロイされたアプリケーションのセキュリティとコンプライアンスの向上を支援する自動セキュリティ評価サービスです
  - [Falco](https://falco.org/) - クラウドネイティブランタイムセキュリティプロジェクトです
  - [Tracee](https://aquasecurity.github.io/tracee/latest/) - Linux 向けの強力なランタイムセキュリティ・フォレンジックツールです
  - [ClamAV](https://www.clamav.net/) - トロイの木馬、ウイルス、マルウェア、その他の悪意ある脅威を検出するオープンソースのアンチウイルスエンジンです
  - [YARA](https://virustotal.github.io/yara/) - マルウェア研究者のためのパターンマッチングの万能ツールです

### セキュリティ運用と監視 (SecOps)

- 検出と対応
  - [Endpoint detection and response (EDR)](https://en.wikipedia.org/wiki/Endpoint_detection_and_response) - 高度な脅威に対する継続的な監視と対応の必要性に応えるサイバーセキュリティテクノロジーです
  - [Extended detection and response (XDR)](https://en.wikipedia.org/wiki/Extended_detection_and_response) - SaaS ベースでベンダー固有の、セキュリティ脅威検出・インシデント対応ツールです
  - [Managed detection and response (MDR)](https://en.wikipedia.org/wiki/Managed_detection_and_response) - 組織に脅威ハンティングサービスを提供し、脅威が発見された後に対応するアウトソーシングサービスです
- SIEM と SOAR
  - [Security orchestration, automation and response (SOAR)](https://en.wikipedia.org/wiki/Security_orchestration) - 組織がセキュリティ脅威に関するデータを収集できるようにする互換性のあるソフトウェアプログラム群です
  - 💲 [Microsoft Sentinel](https://azure.microsoft.com/en-us/products/microsoft-sentinel) - スケーラブルでクラウドネイティブなセキュリティ情報イベント管理 (SIEM) およびセキュリティオーケストレーション・自動化・対応 (SOAR) ソリューションです
  - 💲 [Amazon GuardDuty](https://aws.amazon.com/guardduty/) - 悪意ある活動や不正な挙動を継続的に監視する脅威検出サービスです
- 検出と監査
  - [Sigma Detection Format](https://sigmahq.io/) - 関連するログイベントを分かりやすく記述できる汎用的でオープンなシグネチャフォーマットです
  - 💲 [AWS CloudTrail](https://aws.amazon.com/cloudtrail/) - AWS アカウントの運用・リスク監査、ガバナンス、コンプライアンスを実現する AWS サービスです
  - 💲 [AWS Config](https://aws.amazon.com/config/) - AWS リソースの構成を評価、監査、査定できるサービスです

### ポリシー適用

- [Open Policy Agent (OPA)](https://www.openpolicyagent.org/) - スタック全体にわたるポリシー適用を統一するオープンソースの汎用ポリシーエンジンです
  - [Rego](https://www.openpolicyagent.org/docs/latest/policy-language/) - OPA 向けのポリシーを記述するために使用される高水準の宣言型言語です
  - [Conftest](https://www.conftest.dev/) - 構造化された設定データに対するテストの作成を支援するユーティリティです
- クラウドポリシーエンジン
  - [Azure Policy](https://azure.microsoft.com/en-us/products/azure-policy/) - 一貫したリソースガバナンスによりリアルタイムなクラウドコンプライアンスを大規模に実現するサービスです
- Kubernetes ポリシーエンジン
  - [Gatekeeper](https://open-policy-agent.github.io/gatekeeper/) - Open Policy Agent (OPA) によって実行されるポリシーを強制するカスタマイズ可能な検証用 Webhook です
  - [Kyverno](https://kyverno.io/) - Kubernetes 向けに設計されたポリシーエンジンです

### デジタルフォレンジックとインシデント対応 (DFIR)

- コンセプト
  - [Computer security incident management](https://en.wikipedia.org/wiki/Computer_security_incident_management) - コンピュータやコンピュータネットワーク上のセキュリティイベントの監視・検出、およびそれらのイベントへの適切な対応の実行です
  - [Digital forensics](https://en.wikipedia.org/wiki/Digital_forensics) - デジタルデバイス内で発見された資料の復元、調査、検査、分析を扱う法科学の一分野で、多くの場合モバイルデバイスやコンピュータ犯罪に関連します
  - [Computer forensics](https://en.wikipedia.org/wiki/Computer_forensics) - コンピュータやデジタル記憶媒体内で発見された証拠に関するデジタルフォレンジック科学の一分野です
- ツールとプラットフォーム
  - [Volatility](https://github.com/volatilityfoundation/volatility3) - 揮発性メモリ (RAM) サンプルからデジタルアーティファクトを抽出するための、世界で最も広く使用されているフレームワークです
  - [Autopsy](https://github.com/sleuthkit/autopsy) - デジタルフォレンジックプラットフォームであり、The Sleuth Kit やその他のデジタルフォレンジックツールへのグラフィカルインターフェースです

## セキュアな通信とネットワーキング

:::note[Relevant DSS-P Skills]

- 4\. セキュリティ > 4\.2 セキュリティ技術 > セキュア設計・開発・構築

:::

### トランスポート層セキュリティ (TLS)

- [Transport Layer Security (TLS)](https://en.wikipedia.org/wiki/Transport_Layer_Security) - コンピュータネットワーク上で通信のセキュリティを提供するよう設計された暗号プロトコルです
- [Server Name Indication (SNI)](https://en.wikipedia.org/wiki/Server_Name_Indication) - Transport Layer Security (TLS) コンピュータネットワークプロトコルの拡張機能です
- ツールとライブラリ
  - [testssl.sh](https://testssl.sh/) - サーバーの任意のポート上のサービスについて TLS/SSL の暗号とプロトコルのサポート状況をチェックする無料のコマンドラインツールです
  - [OpenSSL library](https://openssl-library.org/) - コンピュータネットワーク上の通信を盗聴から保護するアプリケーション向けのソフトウェアライブラリです
  - [stunnnel](https://www.stunnel.org/) - 既存のクライアントとサーバーに TLS 暗号化機能を追加するよう設計されたプロキシです
  - [Squid SSL Bump](https://www.squid-cache.org/Doc/config/ssl_bump/) - SSL/TLS トラフィックを傍受、復号、再暗号化できる Squid プロキシの機能です
- 脆弱性
  - [Lucky Thirteen attack](https://en.wikipedia.org/wiki/Lucky_Thirteen_attack) - 攻撃者が暗号文を復号できるようにする、TLS プロトコルに対するタイミング攻撃です

### セキュアシェル (SSH)

- [Secure Shell (SSH)](https://en.wikipedia.org/wiki/Secure_Shell) - 安全でないネットワーク上でネットワークサービスを安全に運用するための暗号ネットワークプロトコルです
- ツールとライブラリ
  - [OpenSSH](https://www.openssh.com/) - SSH プロトコルによるリモートログインのための第一級の接続ツールです
  - [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/) - Windows および Unix プラットフォーム向けの SSH と Telnet の無料実装です
  - [ssh-audit](https://github.com/jtesta/ssh-audit) - SSH サーバーおよびクライアントの設定監査のためのツールです
  - [keychain](https://www.funtoo.org/Funtoo:Keychain) - 通常 ~/.bash_profile から起動される ssh-agent のマネージャーです

### ファイアウォールとネットワーク保護

- Web アプリケーションファイアウォール (WAF)
  - 💲 [AWS WAF](https://aws.amazon.com/waf/) - Web アプリケーションや API を一般的な Web エクスプロイトやボットから保護する Web アプリケーションファイアウォールです
  - 💲 [Azure Web Application Firewall](https://azure.microsoft.com/en-us/products/web-application-firewall/) - 一般的な Web ハッキング手法や脆弱性から Web アプリを保護するクラウドネイティブサービスです
- ネットワークレベルの保護
  - 💲 [AWS Shield](https://aws.amazon.com/shield/) - AWS 上で稼働するアプリケーションを保護するマネージド型の分散サービス拒否 (DDoS) 保護サービスです
  - 💲 [Azure DDoS Protection](https://azure.microsoft.com/en-us/products/ddos-protection) - 最も高度な DDoS の脅威に対する対策を提供するサービスです
  - [Fail2ban](https://github.com/fail2ban/fail2ban) - コンピュータサーバーをブルートフォース攻撃から保護する侵入防止ソフトウェアフレームワークです
  - [Snort](https://www.snort.org/) (IPS) - 世界を代表するオープンソースの侵入防止システム (IPS) です
- ホストベースのファイアウォール
  - [netfilter](https://www.netfilter.org/) (iptables, nftables) - パケットフィルタリング、ネットワークアドレス変換、その他のパケット改変を可能にする Linux カーネル内のフレームワークです
  - [Uncomplicated Firewall (ufw)](https://launchpad.net/ufw) - netfilter ファイアウォールを管理するためのプログラムです

### メールと DNS のセキュリティ

- メールセキュリティ
  - [STARTTLS](https://en.wikipedia.org/wiki/Opportunistic_TLS) - 平文の通信プロトコルを暗号化された接続にアップグレードできるようにするメカニズムです
  - [SASL (Simple Authentication and Security Layer)](https://en.wikipedia.org/wiki/Simple_Authentication_and_Security_Layer) - インターネットプロトコルにおける認証とデータセキュリティのためのフレームワークです
  - [SPF (Sender Policy Framework)](https://en.wikipedia.org/wiki/Sender_Policy_Framework) - メール配送時の送信者アドレス偽装を検出するために設計されたメール認証方式です
  - [DKIM (DomainKeys Identified Mail)](http://dkim.org/) - メール内の送信者アドレス偽装を検出するために設計されたメール認証方式です
  - [DMARC (Domain-based Message Authentication, Reporting & Conformance)](https://dmarc.org/) - メール認証、ポリシー、レポーティングのプロトコルです
  - [S/MIME](https://en.wikipedia.org/wiki/S/MIME) - 電子メッセージングアプリケーションに認証、メッセージの完全性、否認防止、プライバシー、データセキュリティといった暗号セキュリティサービスを提供する標準です
- DNS セキュリティ
  - [DNSSEC](https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions) - ドメイン名の照会に対する応答を認証する Domain Name System (DNS) の機能です
  - [DNS over TLS (DoT)](https://en.wikipedia.org/wiki/DNS_over_TLS) - Transport Layer Security (TLS) プロトコルを介して Domain Name System (DNS) のクエリと応答を暗号化・ラップするためのセキュリティプロトコルです
  - [DNS over HTTPS (DoH)](https://en.wikipedia.org/wiki/DNS_over_HTTPS) - HTTPS プロトコルを介してリモートで Domain Name System (DNS) 解決を実行するためのプロトコルです
- ツールとライブラリ
  - [OpenDKIM](http://www.opendkim.org/) - DomainKeys Identified Mail 対応アプリケーションを生成するための C ライブラリと、そのサービスを提供するオープンソースの milter を開発・保守するコミュニティの取り組みです

## ガバナンス、リスク、コンプライアンス (GRC)

:::note[Relevant DSS-P Skills]

- 1\. ビジネス変革 > 1\.3 変革活動のマネジメント > リスク＆コンプライアンス
- 4\. セキュリティ > 4\.1 セキュリティマネジメント > セキュリティマネジメント
- 4\. セキュリティ > 4\.1 セキュリティマネジメント > プライバシー保護

:::

### データガバナンス

- [Unity Catalog](https://unitycatalog.io/) - 様々な形式やプラットフォーム間で相互運用性、開放性、統一されたガバナンスを提供する、データと AI のための汎用カタログです
- 💲 [Microsoft Purview](https://www.microsoft.com/en-us/security/business/microsoft-purview) - 組織が異種混在のデータ資産全体にわたってデータを保護・統治することを支援する統合的なアプローチです
- 💲 [Amazon DataZone](https://aws.amazon.com/datazone/) - AWS、オンプレミス、サードパーティのソースに保存されたデータのカタログ化、発見、共有、統治を顧客がより迅速かつ簡単に行えるようにするデータ管理サービスです

### AI ガバナンスとセキュリティ

- [ISO/IEC 42001](https://www.iso.org/standard/42001) - 組織内で AI マネジメントシステム (AIMS) を確立、実装、維持、継続的に改善するための要件を規定する、世界初の AI マネジメントシステム標準です
- [METR](https://metr.org/) - AI システムが社会に破滅的な害をもたらす脅威となるかどうか、またそれがいつになるかを科学的に測定する研究非営利団体です
- 💲 [Microsoft Agent 365](https://www.microsoft.com/en-us/microsoft-agent-365) - 企業環境内の自律型 AI エージェントを監督するために設計された集中型のガバナンス・管理プラットフォームです

### 規制と標準

- 法律と規制
  - [General Data Protection Regulation (GDPR)](https://gdpr.eu/) - 世界で最も厳格なプライバシー・セキュリティ法です
    - Data subject requests (DSR)
    - Breach notification
    - Data protection impact assessment (DPIA)
  - [California Consumer Privacy Act (CCPA)](https://oag.ca.gov/privacy/ccpa) - カリフォルニア州の住民のプライバシー権と消費者保護を強化することを目的とした州法です
  - [Cyber Resilience Act](https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act) - 義務的なサイバーセキュリティ要件を導入することで、デジタルコンポーネントを含む製品やソフトウェアを購入・使用する消費者や企業を保護することを目的とした規制です
- セキュリティ・プライバシーフレームワーク
  - [NIST SP 800-53](https://en.wikipedia.org/wiki/NIST_Special_Publication_800-53) - 国家安全保障に関連するものを除く、すべての米国連邦情報システム向けのセキュリティ・プライバシー管理策のカタログです
  - [OSCAL](https://pages.nist.gov/OSCAL/) - セキュリティとコンプライアンスのプロセスを自動化するためのオープンで機械可読な形式 (XML、JSON、YAML) を提供する、NIST 主導の取り組みである Open Security Controls Assessment Language です
  - [ISO/IEC 27001](https://www.iso.org/standard/27001) - 情報セキュリティマネジメントシステムのための国際標準です
- 業界・監査標準
  - [PCI-DSS](https://www.pcisecuritystandards.org/document_library/) - 決済カードデータセキュリティのためのグローバル標準です
  - [SOC 2](https://soc2.co.uk/) - サービス組織が顧客データをどのように管理すべきかを規定する任意のコンプライアンス標準です
  - [FIPS 140-2](https://en.wikipedia.org/wiki/FIPS_140-2) - 暗号モジュールを承認するために使用される米国政府のコンピュータセキュリティ標準です
  - [EUCS (European Cybersecurity Certification Scheme for Cloud Services)](https://www.enisa.europa.eu/publications/eucs-cloud-service-scheme) - サイバーセキュリティ法に基づいて ENISA が策定した、クラウドサービスのサイバーセキュリティ認証を扱う候補スキームです
- ハードニングと実装ガイド
  - [Security Technical Implementation Guides (STIGs)](https://www.cyber.mil/stigs/) - DOD の IA 対応デバイス・システムに関する設定標準です
  - [CIS Controls and Benchmarks](https://www.cisecurity.org/) - コンピュータセキュリティのベストプラクティスガイドラインの公開文書です
  - [NIST SP 800-190](https://csrc.nist.gov/pubs/sp/800/190/final) - コンテナの使用に伴う潜在的なセキュリティ上の懸念を説明し、これらの懸念に対処するための推奨事項を提供する Application Container Security Guide です

### 脆弱性管理とレポーティング

- [Bug bounty program](https://en.wikipedia.org/wiki/Bug_bounty_program) - 脆弱性やバグをアプリケーションの開発者に発見・報告した倫理的ハッカーに与えられる金銭的報酬です
- 識別子と列挙
  - [CVE (Common Vulnerabilities and Exposures)](https://cve.mitre.org/cve/) - 公に知られている情報セキュリティの脆弱性とエクスポージャーに関する参照方法を提供するシステムです
  - [CWE (Common Weakness Enumeration)](https://cwe.mitre.org/) - ソフトウェアの弱点や脆弱性のためのカテゴリシステムです
  - [OSV (Open Source Vulnerability)](https://osv.dev/) - オープンソースプロジェクト向けの脆弱性データベースおよびトリアージ基盤です
- スコアリングと優先順位付け
  - [CVSS (Common Vulnerability Scoring System)](https://www.first.org/cvss/) - コンピュータシステムのセキュリティ脆弱性の深刻度を評価するための、無料でオープンな業界標準です
  - [EPSS (Exploit Prediction Scoring System)](https://www.first.org/epss/) - ソフトウェアの脆弱性が実際に悪用される確率を推定するためのデータ駆動型フレームワークです
  - [KEV (Known Exploited Vulnerabilities)](https://www.cisa.gov/known-exploited-vulnerabilities-catalog) - 実際に悪用された脆弱性を収録したカタログです
  - [SSVC (Stakeholder-Specific Vulnerability Categorization)](https://www.cisa.gov/stakeholder-specific-vulnerability-categorization-ssvc) - 脆弱性が組織にもたらすリスクを評価し、それに対応する意思決定プロセスを提供する脆弱性管理手法です
  - [BOD 26-04 (Prioritizing Security Updates Based on Risk)](https://www.cisa.gov/news-events/directives/bod-26-04-prioritizing-security-updates-based-risk) - 公開状況、悪用の有無、自動化可能性、技術的影響に基づく修正の優先順位付けを連邦民間機関に義務付ける CISA の拘束的運用指令であり、BOD 22-01 と BOD 19-02 を置き換えるものです
- プロトコルとデータベース
  - [Security Content Automation Protocol (SCAP)](https://csrc.nist.gov/projects/security-content-automation-protocol/) - 自動化された設定、脆弱性、パッチのチェックをサポートする多目的な仕様のフレームワークです
  - [NVD (U.S. National Vulnerability Database)](https://nvd.nist.gov/) - 標準に基づく脆弱性管理データの米国政府リポジトリです
  - [SARIF](https://docs.oasis-open.org/sarif/sarif/v2.1.0/sarif-v2.1.0.html) - 静的解析ツールの出力のための標準フォーマットです

## システムとパーソナルセキュリティ

:::note[Relevant DSS-P Skills]

- 4\. セキュリティ > 4\.1 セキュリティマネジメント > セキュリティ体制構築・運営
- 4\. セキュリティ > 4\.2 セキュリティ技術 > セキュア設計・開発・構築

:::

### OS とエンドポイントセキュリティ

- [Address space layout randomization (ASLR)](https://en.wikipedia.org/wiki/Address_space_layout_randomization) - プロセスの主要なデータ領域のアドレス空間の位置をランダムに配置することでメモリの脆弱性の悪用を防ぐ、メモリ保護に関わるコンピュータセキュリティ技術です
- [W^X](https://en.wikipedia.org/wiki/W%5EX) - プロセスのアドレス空間内のすべてのページが書き込み可能または実行可能のいずれかであり、両方を同時に満たさないことを保証するセキュリティ機能です
- [Control-flow integrity](https://en.wikipedia.org/wiki/Control-flow_integrity) - プログラムの実行フローをリダイレクトする様々なマルウェア攻撃を防ぐコンピュータセキュリティ技術の総称です
- [TPM (Trusted Platform Module)](https://en.wikipedia.org/wiki/Trusted_Platform_Module) - 統合された暗号鍵によってハードウェアを保護するよう設計された専用マイクロコントローラーである、セキュアな暗号プロセッサの仕様です
- Linux 強制アクセス制御
  - [SELinux](https://selinuxproject.org/page/Main_Page) - 様々な Linux ディストリビューションに追加されたカーネル修正とユーザースペースツールの集合です
  - [AppArmor](https://apparmor.net/) - システム管理者がプログラムごとのプロファイルでプログラムの機能を制限できるようにする Linux カーネルセキュリティモジュールです
  - [bubblewrap](https://github.com/containers/bubblewrap) - Flatpak や類似のプロジェクトで使用される、低レベルで非特権のサンドボックスツールです
- Linux きめ細かなアクセス制御
  - [Linux capabilities](https://man7.org/linux/man-pages/man7/capabilities.7.html) - スーパーユーザーの権限の一部をプロセスに付与しつつ、すべては付与しない機能です
- 一般的なスキャン
  - [OpenSCAP](https://www.open-scap.org/) - Security Content Automation Protocol (SCAP) のオープンソース実装です
  - [Lynis](https://cisofy.com/lynis/) - Linux、macOS、Unix ベースの OS で動作するシステム向けのセキュリティ監査ツールです

### パーソナルセキュリティツール

- パスワードマネージャー
  - 💲 [1Password](https://1password.com/) - 人間と AI エージェントの両方にわたって ID、認証情報、シークレットを管理するパスワードマネージャーおよびセキュアボールトプラットフォームです
  - [pass](https://www.passwordstore.org/) - 標準的な unix パスワードマネージャーです
  - [gokey](https://github.com/cloudflare/gokey) - Go で書かれたシンプルなボールトレスパスワードマネージャーです
  - [Buttercup](https://buttercup.pw/) - 無料、オープンソース、クロスプラットフォームのパスワードマネージャーです
