# 04 - セキュリティ・プライバシー

## セキュリティ基礎

:::note[Relevant DSS-P Skills]

- 4\. セキュリティ > 4\.1 セキュリティマネジメント > セキュリティ体制構築・運営
- 4\. セキュリティ > 4\.1 セキュリティマネジメント > セキュリティマネジメント

:::

- [Information security](https://en.wikipedia.org/wiki/Information_security) - 情報リスクを低減することにより情報を保護する実践です
- [Vulnerability](https://en.wikipedia.org/wiki/Vulnerability_(computer_security)) - 脅威アクターによって悪用される可能性がある弱点です
- [Threat](https://en.wikipedia.org/wiki/Threat_(computer_security)) - 脆弱性によって促進される潜在的な悪影響またはイベントです
- [Shared Responsibility Model](https://www.crowdstrike.com/en-us/cybersecurity-101/cloud-security/shared-responsibility/) - クラウドサービスプロバイダー（CSP）と顧客がクラウド環境のあらゆる側面を保護する責任を定めるセキュリティ・コンプライアンスフレームワークです

### 一般的な脅威と攻撃ベクトル

- [Malware](https://en.wikipedia.org/wiki/Malware) - コンピュータ、サーバー、クライアント、またはコンピュータネットワークに混乱を引き起こすために意図的に設計されたソフトウェアです
- [Ransomware](https://en.wikipedia.org/wiki/Ransomware) - 被害者の個人データを公開するか、永遠にそのデータへのアクセスをブロックすることで脅迫し、身代金を要求するタイプのマルウェアです
- [Social engineering](https://en.wikipedia.org/wiki/Social_engineering_(security)) - 人々を行動させたり、機密情報を漏らさせたりするための心理的操作です
- [Phishing](https://en.wikipedia.org/wiki/Phishing) - 攻撃者が機密情報を明かすようにして人をだまそうとする不正なメッセージを送付するタイプのソーシャルエンジニアリングです
- [Business Email Compromise (BEC)](https://www.microsoft.com/en-us/security/business/security-101/what-is-business-email-compromise-bec) - 攻撃者が高管経営者になりすまし、従業員または顧客を騙してお金または機密データを転送させるようにするタイプのフィッシング攻撃です
- [Infostealer](https://en.wikipedia.org/wiki/Infostealer) - システムから情報を収集するように設計されたトロイの木馬のタイプです
- [Mirai (malware)](https://en.wikipedia.org/wiki/Mirai_(malware)) - Linux を実行しているネットワークデバイスを遠隔制御可能なボットに変え、大規模ネットワーク攻撃で botnet の一部として使用できるマルウェアです
- [Think before you Click(Fix)](https://www.microsoft.com/en-us/security/blog/2025/08/21/think-before-you-clickfix-analyzing-the-clickfix-social-engineering-technique/) - ユーザーが軽微な技術的問題を解決しようとする傾向を利用して、デバイス上で悪意あるコマンドを実行するように騙すソーシャルエンジニアリング技法です
- [Evilginx](https://github.com/kgretzky/evilginx2) - ログイン認証情報とセッション Cookie をフィッシングするために使用される中間者攻撃フレームワークです

### モダンセキュリティアーキテクチャ

- [Zero trust security model](https://en.wikipedia.org/wiki/Zero_trust_security_model) - 信頼が暗黙的に付与されることなく、すべてのユーザーに対して検証が必要とされる IT システムの設計と実装に対するアプローチです

### セキュリティトレーニングと競技

- [Capture the flag (cybersecurity)](https://en.wikipedia.org/wiki/Capture_the_flag_(cybersecurity)) - 参加者が専門的な知識と技法を使用して隠された「フラグ」（解答）を探し、最高得点を競うハッキング競技です
- プラットフォーム
  - [CTFd](https://ctfd.io/) - 独自のサイバーセキュリティワークショップをホストするための最も簡単なキャプチャザフラッグプラットフォームで、テーマとプラグインで簡単にカスタマイズできる堅牢なベースを提供します

## 暗号化とデータ保護

:::note[Relevant DSS-P Skills]

- 4\. セキュリティ > 4\.2 セキュリティ技術 > セキュア設計・開発・構築

:::

### コア暗号化

#### ハッシング

- ハッシュ関数
  - [MD5](https://en.wikipedia.org/wiki/MD5) - 暗号論的に破られているが、それでも広く使用されている 128 ビットのハッシュ値を生成するハッシュ関数です
  - [SHA-2 (SHA-224, SHA-256, SHA-384, SHA-512)](https://en.wikipedia.org/wiki/SHA-2) - 米国国立安全保障局（NSA）によって設計された暗号ハッシュ関数のセットです
  - [Bcrypt](https://en.wikipedia.org/wiki/Bcrypt) - Blowfish 暗号に基づいたパスワード ハッシュ関数です
  - [Scrypt](https://en.wikipedia.org/wiki/Scrypt) - Colin Percival によって作成されたパスワードベースの鍵導出関数です

#### 共通鍵暗号

- [Symmetric-key algorithm](https://en.wikipedia.org/wiki/Symmetric-key_algorithm) - 平文の暗号化と暗号文の復号化の両方に同じ暗号鍵を使用する暗号化アルゴリズムです
- ブロック暗号
  - [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) - 2001 年に米国国立標準技術研究所（NIST）によって確立された電子データ暗号化の仕様です
- ストリーム暗号
  - [Salsa20 ChaCha](https://en.wikipedia.org/wiki/Salsa20#ChaCha_variant) - Salsa20 のバリエーションで、ラウンドあたりの拡散を増加させながら同じまたはわずかに改善されたパフォーマンスを達成します
- MAC（メッセージ認証コード）
  - [HMAC](https://en.wikipedia.org/wiki/HMAC) - 暗号ハッシュ関数と秘密の暗号鍵を含むメッセージ認証コード（MAC）の特定のタイプです
- 動作モード
  - [CBC (Cipher block chaining)](https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation#CBC) - ブロック暗号の動作モードで、平文のブロックが暗号化される前に前の暗号文ブロックと XOR されます
  - [GCM (Galois/Counter Mode)](https://en.wikipedia.org/wiki/Galois/Counter_Mode) - 対称鍵暗号ブロック暗号の動作モードで、そのパフォーマンスの観点から広く採用されています
  - [CCM](https://en.wikipedia.org/wiki/CCM_mode) - 認証と機密性の両方を提供するように設計された暗号ブロック暗号の動作モードです

#### 公開鍵暗号

- [Digital signature](https://en.wikipedia.org/wiki/Digital_signature) - デジタルメッセージまたはドキュメントの真正性を検証するための数学的スキームです
- [Public-key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography) - 鍵のペアを使用する暗号システムです
  - [RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem)) - 安全なデータ送信に広く使用される公開鍵暗号システムです
  - [EdDSA](https://en.wikipedia.org/wiki/EdDSA) - ツイスト Edwards 曲線に基づく Schnorr 署名のバリエーションを使用するデジタル署名スキームです
- 鍵合意
  - [Diffie-Hellman key exchange](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange) - 公開チャネルを介して暗号鍵を安全に交換する方法です
  - [Elliptic-curve Diffie-Hellman](https://en.wikipedia.org/wiki/Elliptic-curve_Diffie%E2%80%93Hellman) - 2 者が公開されていないチャネルを介して共有秘密を確立することを可能にする key agreement プロトコルです
- 暗号化スキーム
  - [RSAES-PKCS1-v1_5](https://en.wikipedia.org/wiki/PKCS_1) - PKCS #1 のバージョン 1.5 で最初に標準化された古い暗号化・復号化スキーム（ES）で、脆弱性が知られています
  - [RSAES-OAEP](https://en.wikipedia.org/wiki/Optimal_Asymmetric_Encryption_Padding) - ランダム性を追加し、部分的な復号化を防止することで RSA 暗号化を強化するパディングスキームで、PKCS#1 v2 と RFC 2437 で標準化されました
- 署名スキーム
  - [RSASSA-PKCS1-v1_5](https://en.wikipedia.org/wiki/PKCS_1) - PKCS #1 のバージョン 1.5 で最初に標準化された署名付き署名スキーム（SSA）で、Jager et al.（2018）によると偽造不可と見なされています
  - [DSA](https://en.wikipedia.org/wiki/Digital_Signature_Algorithm) - デジタル署名のための公開鍵暗号システムおよび連邦情報処理標準で、モジュール指数化と離散対数問題の数学的概念に基づいています
  - [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) - 楕円曲線暗号を活用するデジタル署名アルゴリズム（DSA）のバリエーションです
- 鍵フォーマット
  - [PKCS #1: RSA Cryptography Specifications](https://en.wikipedia.org/wiki/PKCS_1) - 公開鍵暗号の RSA アルゴリズムの実装の基本的な定義と推奨事項を提供する標準です
  - [PKCS #12: Personal Information Exchange Syntax](https://en.wikipedia.org/wiki/PKCS_12) - 単一ファイルに複数の暗号オブジェクトを格納するためのファイル形式です
- 暗号標準とフォーマット
  - [Cryptographic Message Syntax](https://en.wikipedia.org/wiki/Cryptographic_Message_Syntax) - デジタル署名、ダイジェスト、認証、またはあらゆる形式のデジタルデータの暗号化に使用される暗号化スキームとプロトコルのための IETF の標準です

### 公開鍵基盤（PKI）

- [Public Key Infrastructure (PKI)](https://en.wikipedia.org/wiki/Public_key_infrastructure) - デジタル認証書を作成、管理、配布、使用、保存、失効させるために必要な役割、ポリシー、ハードウェア、ソフトウェア、および手順のセットです
- [Certificate authority (CA)](https://en.wikipedia.org/wiki/Certificate_authority) - デジタル認証書を保存、署名、および発行するエンティティです
- 登録機関（RA）
- 検証機関（VA）
- プロトコルと標準
  - [Simple Certificate Enrollment Protocol](https://en.wikipedia.org/wiki/Simple_Certificate_Enrollment_Protocol) - X.509 認証書を安全かつ自動化された方法で登録するためのプロトコルです
- 検証と登録
  - [Domain Control Validation](https://github.com/digicert/domain-control-validation) - 認証局（CA）が認証書を要求している個人または組織が認証書にリストされているドメインを制御しているかを検証するために使用されるプロセスです
- トラストストア
  - [Certifi](https://certifi.io/) - TLS ホストの ID を検証しながら SSL 認証書の信頼性を検証するための慎重に厳選されたルート認証書のコレクションです
- [Public key certificate](https://en.wikipedia.org/wiki/Public_key_certificate) - 公開鍵の有効性を証明するための電子ドキュメントです
  - ドメイン検証（DV）
  - 組織検証（OV）
  - 拡張検証（EV）
- [Let's Encrypt](https://letsencrypt.org/) - TLS 認証書を提供する非営利認証局です
  - [certbot](https://certbot.eff.org/) - Let's Encrypt 認証書を手動で管理する Web サイトで自動的に使用できるようにするための無料のオープンソースソフトウェアツールです
  - [lego](https://go-acme.github.io/lego/) - Go で書かれた Let's Encrypt クライアントおよび ACME ライブラリです
- [ACME (Automatic Certificate Management Environment)](https://en.wikipedia.org/wiki/Automatic_Certificate_Management_Environment) - 認証局とそのユーザーの Web サーバー間の相互作用を自動化するための通信プロトコルです
- [mkcert.org](https://mkcert.org/) - ローカルで信頼された開発認証書を作成するためのシンプルなツールです
- [cert-manager](https://cert-manager.io) - Kubernetes と OpenShift 用の強力で拡張可能な X.509 認証書コントローラーです
- [cfssl](https://github.com/cloudflare/cfssl#readme) - Cloudflare の PKI ツールキットです

### シークレット管理

- [Vault](https://www.vaultproject.io/) - API キー、パスワード、認証書などのシークレットに安全にアクセスするためのツールです
- [OneCLI](https://www.onecli.sh/) - AI エージェント用のオープンソース認証情報コンテナとプロキシゲートウェイで、シークレットを暗号化コンテナに保存し、鍵を公開することなくエージェント要求に挿入します
- [SOPS](https://github.com/mozilla/sops) - YAML、JSON、ENV、INI、BINARY フォーマットをサポートする暗号化ファイルエディターです
- [git-secret](https://git-secret.io/) - git リポジトリ内に機密データを保存するための bash ツールです
- Kubernetes エコシステム
  - [Sealed Secrets](https://github.com/bitnami-labs/sealed-secrets) - 単方向暗号化されたシークレット用の Kubernetes コントローラーとツールです
  - [Secrets Store CSI Driver](https://secrets-store-csi-driver.sigs.k8s.io/) - Kubernetes がエンタープライズグレード外部シークレットストアに保存されている複数のシークレット、鍵、認証書をポッドにボリュームとしてマウントできるようにするドライバーです
  - [External Secrets Operator](https://external-secrets.io/latest/) - AWS Secrets Manager、HashiCorp Vault、Google Secrets Manager、Azure Key Vault、IBM Cloud Secrets Manager などの外部シークレット管理システムを統合する Kubernetes オペレーターです
- ベンダーサービス
  - [Azure Key Vault](https://azure.microsoft.com/en-us/products/key-vault/) - クラウドアプリとサービスで使用される暗号鍵と他のシークレットを保護するためのクラウドサービスです
  - [Google Cloud Secret Manager](https://cloud.google.com/security/products/secret-manager) - API キー、パスワード、認証書、およびその他の機密データのための安全で便利なストレージシステムです
  - [AWS Key Management Service](https://aws.amazon.com/kms/) - 暗号鍵を簡単に作成・管理できるサービスです
  - [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/) - アプリケーション、サービス、IT リソースへのアクセスを保護するためのシークレット管理サービスです

### 応用暗号化とツール

- 高度な暗号化トピック
  - [Post-quantum cryptography](https://en.wikipedia.org/wiki/Post-quantum_cryptography) - 量子コンピュータによる暗号解析攻撃に対して安全であると考えられている暗号化アルゴリズムです
  - 情報隠蔽
    - [Steganography](https://en.wikipedia.org/wiki/Steganography) - ファイル、メッセージ、画像、またはビデオを別のファイル、メッセージ、画像、またはビデオ内に隠す実践です
    - [Digital watermarking](https://en.wikipedia.org/wiki/Digital_watermarking) - オーディオ、ビデオ、画像データなどのノイズに耐性のある信号に密かに埋め込まれたマーカーの一種です

- エンドツーエンド暗号化ツール
  - [age](https://github.com/FiloSottile/age) - シンプルで最新で安全なファイル暗号化ツール、フォーマット、Go ライブラリです
  - [Pretty Good Privacy (PGP)](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) - データ通信の暗号化プライバシーと認証を提供するデータ暗号化・復号化コンピュータプログラムです
  - [OpenPGP](https://www.openpgp.org/) - 公開鍵と暗号化されたメッセージを交換するための非所有プロトコルです
  - [keys.openpgp.org](https://keys.openpgp.org/about) - OpenPGP 用の公開鍵サーバーです
  - [GnuPG](https://gnupg.org/) - PGP 暗号化ソフトウェアスイートの無料ソフトウェア置き換えです
  - [Gpg4win](https://www.gpg4win.org/) - OpenPGP の助けを借りてメールとファイルの安全な転送を容易にする Windows ソフトウェアパッケージです

- 暗号化ライブラリ
  - [PyCryptodome](https://www.pycryptodome.org/) - 暗号化プリミティブの自己完結した Python パッケージです
  - [Python cryptography](https://cryptography.io/en/latest/) - 暗号化プリミティブとレシピを Python 開発者に公開するために設計されたパッケージです
  - [Go Cryptography](https://pkg.go.dev/golang.org/x/crypto) - Go 暗号化ライブラリのコレクションです
  - [Botan](https://botan.randombit.net/) - C++ で書かれた暗号化ライブラリです

## アイデンティティとアクセス管理（IAM）

:::note[Relevant DSS-P Skills]

- 4\. セキュリティ > 4\.2 セキュリティ技術 > セキュア設計・開発・構築
- 2\. データ整備・活用 > 2\.3 データマネジメント > データの品質・安全性向上

:::

### 統合 IAM

- [Identity management](https://en.wikipedia.org/wiki/Identity_management) - エンタープライズ内の適切な人々が技術リソースへの適切なアクセスを持つようにするためのポリシーとテクノロジーのフレームワークです
- セルフホスト IAM プラットフォーム
  - [FusionAuth CE](https://fusionauth.io/) - FusionAuth のセルフホスト型コミュニティサポート版です
  - [KeyCloak](https://www.keycloak.org/) - オープンソースのアイデンティティとアクセス管理ソリューションです
  - [FreeIPA](https://www.freeipa.org/) - Linux、389 Directory Server、MIT Kerberos、NTP、DNS、認証システムを組み合わせた統合セキュリティ情報管理ソリューションです
- クラウド IAM サービス
  - [Microsoft Entra ID](https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id) - クラウドベースのアイデンティティとアクセス管理サービスです
  - [AWS IAM](https://aws.amazon.com/iam/) - AWS リソースへのアクセスを安全に制御するのに役立つサービスです
  - [Amazon Cognito](https://aws.amazon.com/cognito/) - Web およびモバイルアプリにユーザーサインアップ、サインイン、アクセス制御を追加できるサービスです
  - [Auth0](https://auth0.com/) - アプリケーションに認証・認可サービスを追加するための柔軟で組み込みが簡単なソリューションです
- [Directory service](https://en.wikipedia.org/wiki/Directory_service) - ネットワークリソースの名前をそれぞれのネットワークアドレスにマッピングするサービスです
  - [LDAP](https://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol) - 分散ディレクトリ情報サービスにアクセスし、保守するためのオープンで独立したベンダー中立のインダストリスタンダード応用プロトコルです
  - [OpenLDAP](https://www.openldap.org/) - Lightweight Directory Access Protocol のオープンソース実装です
  - [389 Directory Server](https://directory.fedoraproject.org/) - Linux システム用に Red Hat によって開発された無料でオープンソースのソフトウェアプロジェクトです
- 仕様
  - [Decentralized Identifiers (DIDs)](https://www.w3.org/TR/did-1.0/) - 検証可能で分散的なデジタル ID を有効にする新しいタイプの識別子です
  - [System for Cross-domain Identity Management (SCIM)](https://simplecloud.info/) - クラウドベースのアプリケーションとサービスでのユーザーアイデンティティ管理を簡単にするために設計された仕様です

### 認証（AuthN）

- [Authentication](https://en.wikipedia.org/wiki/Authentication) - コンピュータシステムユーザーのアイデンティティなど、アサーションを証明する行為です
- [Mutual authentication](https://en.wikipedia.org/wiki/Mutual_authentication) - 通信リンク内の両者が互いに認証するプロセスです
- [Multi-factor authentication (MFA)](https://en.wikipedia.org/wiki/Multi-factor_authentication) - アクセスのために複数の検証方法を必要とする方法です
- [3-D Secure](https://en.wikipedia.org/wiki/3-D_Secure) - オンラインクレジットカードと デビットカード取引のための追加のセキュリティレイヤーであるように設計されたセキュリティプロトコルです
- [Single sign-on (SSO)](https://en.wikipedia.org/wiki/Single_sign-on) - 複数のアプリケーションに対して 1 回のログインを許可するサービスです
- プロトコルと標準
  - [OpenID Connect](https://openid.net/connect/) - OAuth 2.0 プロトコルの上にシンプルなアイデンティティレイヤーです
  - [SAML](http://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0.html) - ユーザーをアプリケーションにログインさせるための標準です
  - [WS-Federation](http://docs.oasis-open.org/wsfed/federation/v1.2/ws-federation.html) - 参加している Web サービス間の信頼を仲介し、アイデンティティ、属性、認証を管理するためのメカニズムを定義する仕様です
  - [FIDO2](https://fidoalliance.org/specifications/) (WebAuthn、CTAP、Passkeys) - ユーザーが一般的なデバイスを利用して、オンラインサービスに簡単かつ安全に認証することを可能にする仕様のセットです
    - 依存当事者 - ユーザーのアイデンティティを検証したい Web サイトまたはオンラインサービス（例：お客様の銀行の Web サイト）です
    - 認証器 - 暗号鍵を安全に保存し、ユーザーの認証を実行するデバイスまたはソフトウェアです
    - クライアント - ユーザーのデバイス上のソフトウェア（通常は Web ブラウザーまたはオペレーティングシステムコンポーネント）で、依存当事者と認証器の間を通信します
    - [WebAuthn](https://www.w3.org/TR/webauthn-1/) - 公開鍵認証情報にアクセスするための API です
    - [CTAP](https://fidoalliance.org/specs/fido-v2.0-id-20180227/fido-client-to-authenticator-protocol-v2.0-id-20180227.html) - 外部認証器がクライアントプラットフォームと通信することを可能にするプロトコルです
    - [Passkeys](https://passkey.org/) - パスワードのためのフィッシング耐性置き換えです
  - [SPIFFE](https://spiffe.io/) - Secure Production Identity Framework for Everyone です
  - [Kerberos](https://web.mit.edu/kerberos/) - チケットの概念に基づいて動作するコンピュータネットワーク認証プロトコルです
  - [SSPI (Security Support Provider Interface)](https://learn.microsoft.com/en-us/windows/win32/secauthn/sspi) - アプリケーションがセキュリティシステムへのインターフェースを変更することなく、コンピュータまたはネットワークで利用可能なさまざまなセキュリティモデルを使用できるようにする Win32 API です
- 認証情報とトークン
  - [Basic authentication](https://en.wikipedia.org/wiki/Basic_access_authentication) - HTTP ユーザーエージェントがリクエストを行う際にユーザー名とパスワードを提供する方法です
  - [JSON Web Token (JWT)](https://en.wikipedia.org/wiki/JSON_Web_Token) - オプションの署名およびまたはオプションの暗号化を持つデータを作成するためのインターネット標準で、ペイロードはいくつかの主張を主張する JSON を保持します
    - [nodejs jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme) - Node.js 用の JSON Web Token の実装です
  - [TOTP (Time-Based One-Time Password)](https://en.wikipedia.org/wiki/Time-based_one-time_password) - コンピュータシステムへのアクセスを認証するために使用される、アルゴリズムによって生成された一時的なパスコードです
  - [AWS Signature Version 4 (SigV4)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_sigv.html) - HTTP で送信された AWS API リクエストに認証情報を追加するプロセスです
- プラットフォームとツール
  - [Dex](https://dexidp.io/) - フェデレーション OpenID Connect プロバイダーです
  - [Firebase Authentication](https://firebase.google.com/docs/auth) - ユーザーをアプリに認証するためのバックエンドサービス、使いやすい SDK、既成の UI ライブラリを提供するサービスです
  - [Supabase Auth](https://supabase.com/docs/guides/database/overview) - Supabase プロジェクトのユーザー管理とアクセス制御を提供するサービスです
  - [ReCAPTCHA](https://en.wikipedia.org/wiki/ReCAPTCHA) - Web ホストが人間とコンピュータによる自動アクセスを Web サイトに区別できるようにする CAPTCHA システムです
  - [Microsoft Authentication Library (MSAL)](https://learn.microsoft.com/en-us/azure/active-directory/develop/msal-overview) - 開発者が認証・認可をアプリケーションに統合するのに役立つライブラリです
  - [Application Default Credentials (ADC)](https://cloud.google.com/docs/authentication/provide-credentials-adc) - Google Cloud クライアントライブラリがアプリケーション環境に基づいて認証情報を自動的に見つけるために使用するメカニズムです
  - [Limen](https://limenauth.dev/) - Go 用の軽量でコンポーザブルな認証・認可ライブラリで、セッション、パスワードハッシング、OAuth、CSRF 保護を提供します

### 認可（AuthZ）

- [Authorization](https://en.wikipedia.org/wiki/Authorization) - リソースへのアクセス権・特権を指定する機能です
- アクセス制御モデル
  - [Access control list (ACL)](https://en.wikipedia.org/wiki/Access-control_list) - システムリソースに関連する権限のリストです
  - [Attribute-based access control (ABAC)](https://en.wikipedia.org/wiki/Attribute-based_access_control) - ユーザー属性に基づいてアクセスを許可するモデルです
  - [Discretionary access control (DAC)](https://en.wikipedia.org/wiki/Discretionary_access_control) - ユーザーが自分のリソースへのアクセスを制御することを可能にするモデルです
  - [Mandatory access control (MAC)](https://en.wikipedia.org/wiki/Mandatory_access_control) - セキュリティラベルに基づいてアクセスポリシーを適用するモデルです
  - [Role-based access control (RBAC)](https://en.wikipedia.org/wiki/Role-based_access_control) - 役割と特権の周りに定義されたポリシー中立的なアクセス制御メカニズムです
    - [Azure RBAC](https://docs.microsoft.com/en-us/azure/role-based-access-control/overview) - Azure リソースのきめ細かいアクセス管理を可能にするシステムです
      - セキュリティプリンシパルの種類：ユーザー、グループ、サービスプリンシパル、マネージド ID
    - [Entra ID RBAC](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/) - Microsoft Entra リソースのきめ細かいアクセス管理を提供するシステムです
- プロトコルと標準
  - [OAuth 2.0 Authorization Framework](https://oauth.net/2/) - アクセスデリゲーションのためのオープンスタンダードです
    - リソース所有者 - アクセスされているデータまたはリソースを所有するユーザーです
    - リソースサーバー - 保護されたリソースをホストするサーバーです
    - クライアント - リソース所有者に代わってリソースにアクセスしたいアプリケーションまたはサービスです
    - 認可サーバー - クライアントにアクセストークンを発行するサーバーです
- プラットフォームとツール
  - [Permify](https://github.com/Permify/permify) - Golang API を使用してあらゆる種類の認可システムを作成するのに役立つオープンソース認可サービスです
  - [Azure Shared Access Signature (SAS)](https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview) - 1 つ以上のストレージリソースを指し、アクセスの権限とインターバルを指定するトークンを含む署名付き URI です

## セキュアな開発ライフサイクル（DevSecOps）

:::note[Relevant DSS-P Skills]

- 4\. セキュリティ > 4\.2 セキュリティ技術 > セキュア設計・開発・構築

:::

### セキュアな設計とモデリング

- [Threat modeling](https://en.wikipedia.org/wiki/Threat_model) - 潜在的な脅威を識別、列挙、優先順位付けできる仮想の攻撃者の観点からのプロセスです
- [OWASP Threat Modeling](https://owasp.org/www-project-security-culture/v10/6-Threat_Modelling/) - OWASP セキュリティカルチャープロジェクトの開発ライフサイクルへの脅威モデリング統合に関するガイダンスです
- [STRIDE model](https://en.wikipedia.org/wiki/STRIDE_%28security%29) - コンピュータセキュリティ脅威を 6 つのカテゴリに分類するニーモニックです
- [MITRE ATT&CK](https://attack.mitre.org/) - 敵の戦術と技法のグローバルアクセス可能なナレッジベースです
  - 戦術：攻撃中に敵が達成することを目指す高レベルの目標または目的です
  - 技法：敵が戦術的目標を達成するための特定のメソッドまたは方法です
  - 手順：敵が操作で利用する技法の特定の実装またはバリエーションです
- モデリングツール
  - [OWASP Threat Dragon](https://owasp.org/www-project-threat-dragon/) - 無料でオープンソースのクロスプラットフォーム脅威モデリングアプリケーションです
  - [threatspec](https://threatspec.org/) - 脅威モデルをコードとして定義できるツールです

### セキュアな開発実践

- [Secure Software Development Framework (SSDF)](https://csrc.nist.gov/projects/ssdf) - 基本的で健全でセキュアなソフトウェア開発実践のセットです
- [Microsoft Security Development Lifecycle (SDL)](https://www.microsoft.com/en-us/securityengineering/sdl) - 開発者がより安全なソフトウェアを構築し、セキュリティコンプライアンス要件に対応しながら開発コストを削減するのに役立つソフトウェア開発プロセスです
- [OWASP Application Security Verification Standard (ASVS)](https://owasp.org/www-project-application-security-verification-standard/) - アプリケーションレベルのセキュリティ検証を実行するための標準です
- [OWASP Security Champions](https://owasp.org/www-project-security-culture/v10/4-Security_Champions/) - 開発チーム内にセキュリティの専門知識とカルチャーを組み込むためのプログラムです
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/) - さまざまなセキュリティトピックに関する簡潔なチートシートのコレクションです
- [OWASP LLM Top 10](https://genai.owasp.org/llm-top-10/) - 開発、デプロイ、管理ライフサイクル全体にわたり、生成 AI と大規模言語モデルアプリケーションの開発とセキュリティに関する上位 10 のリスク、脆弱性、軽減策のガイドです
- コーディング標準
  - [MISRA C](https://en.wikipedia.org/wiki/MISRA_C) - 安全クリティカル組み込みシステム（元々自動車産業向けに開発）における C プログラミング言語の使用に関するガイドラインのセットです
  - [CERT Secure Coding Standards](https://en.wikipedia.org/wiki/CERT_Secure_Coding_Standards) - Carnegie Mellon の CERT によって発行された C、C++、Java、Perl その他の言語のプログラミングセキュリティガイドラインのコレクションです

### Web アプリケーションセキュリティ

- セキュリティメカニズムとポリシー
  - [SOP (Same-origin policy)](https://en.wikipedia.org/wiki/Same-origin_policy) - Web アプリケーションセキュリティモデルにおける重要な概念です
  - [CORS (Cross-Origin Resource Sharing)](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) - Web ページ上の制限されたリソースを別のドメインからリクエストできるようにするメカニズムです
  - [CSP (Content Security Policy)](https://content-security-policy.com/) - クロスサイトスクリプティング（XSS）およびデータインジェクション攻撃を含む特定の種類の攻撃を検出・軽減するのに役立つセキュリティの追加レイヤーです
  - [HSTS (HTTP Strict Transport Security)](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) - プロトコルダウングレード攻撃と Cookie ハイジャックから Web サイトを保護するのに役立つ Web セキュリティポリシーメカニズムです
  - [Cross-origin isolation](https://web.dev/articles/cross-origin-isolation-guide) - Web ページが SharedArrayBuffer と performance.measureUserAgentSpecificMemory()などの強力な機能を使用できるようにする Web セキュリティ機能です
- 一般的な脆弱性と攻撃
  - [Cross-site request forgery (CSRF)](https://en.wikipedia.org/wiki/Cross-site_request_forgery) - Web アプリケーションが信頼するユーザーから不正なコマンドが送信される Web サイトの悪意あるエクスプロイトです
  - [Cross-site scripting (XSS)](https://en.wikipedia.org/wiki/Cross-site_scripting) - 通常は Web アプリケーションで見られるセキュリティ脆弱性のタイプです
  - [DNS rebinding](https://en.wikipedia.org/wiki/DNS_rebinding) - 悪意のある Web ページが Domain Name System を悪用することで、同一生成元ポリシーをバイパスできる攻撃のタイプです
  - [SSRF (Server-side request forgery)](https://en.wikipedia.org/wiki/Server-side_request_forgery) - 攻撃者がサーバー上の機能を悪用して、内部リソースを読み取り・変更できるエクスプロイトのタイプです
- プライバシーと透明性
  - [Privacy sandbox](https://developers.google.com/privacy-sandbox) - ユーザーのプライバシーを保護し、企業と開発者に栄える デジタルビジネスを構築するためのツールを提供する Google のイニシアティブです
  - [security.txt](https://securitytxt.org/) - Web サイトがセキュリティ研究者のためのセキュリティポリシーを定義できるようにする提案された標準です

### アプリケーションセキュリティテスト（AST）

- 統合セキュリティプラットフォーム
  - [GitHub Advanced Security](https://github.com/security/advanced-security) - シークレット保護でリークを開始する前に停止し、コードセキュリティでコード内の脆弱性を修正する、開発速度で移動するセキュリティを提供する Suite です
- 静的解析（SAST）
  - [SonarQube Server](https://www.sonarsource.com/products/sonarqube/) - 自動コードレビューツールで、クリーンコード配信を体系的にサポートします
  - [GitLab SAST](https://docs.gitlab.com/ee/user/application_security/sast/index.html) - ソースコードの既知の脆弱性をチェックするツールです
  - [Bandit](https://github.com/PyCQA/bandit) (Python の場合) - Python コード内の一般的なセキュリティの問題を見つけるために設計されたツールです
  - [Semgrep OSS](https://github.com/semgrep/semgrep) - バグを見つけ、コード標準を強制するための高速でオープンソース、静的解析ツールです
  - [Fluid attacks](https://docs.fluidattacks.com/tech/scanner/plans/foss/) - ソースコード、コンテナ、依存関係の脆弱性を見つけることができるセキュリティツールです
  - [CodeQL](https://codeql.github.com/) - コードをデータのようにクエリして脆弱性とそのバリエーションを見つけることができるセマンティックコード解析エンジンです
- 動的解析（DAST）
  - [ZAP](https://zaproxy.org/) - 世界中で最も広く使用されている Web アプリスキャナーで、無料でオープンソースであり、誰もが貢献できるコミュニティベースの GitHub Top 1000 プロジェクトです
  - [Nuclei](https://github.com/projectdiscovery/nuclei) - グローバルセキュリティコミュニティによって駆動され、シンプルな YAML ベースの DSL に基づいて構築された高速でカスタマイズ可能な脆弱性スキャナーです
  - [sqlmap](https://github.com/sqlmapproject/sqlmap) - SQL インジェクションの欠陥を検出・悪用し、データベースサーバーを引き継ぐプロセスを自動化するオープンソースペネトレーションテストツールです
- シークレット検出
  - [GitLab Secret Detection](https://docs.gitlab.com/ee/user/application_security/secret_detection/) - リポジトリ履歴でシークレットをスキャンするツールです
  - [Gitleaks](https://gitleaks.io/) - git リポジトリ内のパスワード、api キー、トークンなどの硬いシークレットを検出・防止する SAST ツールです
  - [secretlint](https://github.com/secretlint/secretlint) - 認証情報のコミットを防止するためのプラグイン可能なリントツールです
  - [Talisman](https://thoughtworks.github.io/talisman/) - 機密情報またはセンシティブ情報がコミットされないようにリポジトリにフックをインストールするツールです
  - [TruffleHog](https://github.com/trufflesecurity/trufflehog) - 環境をスキャンしてシークレットを発掘し、コミット履歴とブランチに深く掘り下げるツールです
  - [Whispers](https://github.com/Skyscanner/whispers) - ハードコードされた認証情報の検索で、さまざまな一般的なデータ形式を解析するために設計された静的コード解析ツールです
- AI オーケストレーション型ペネトレーションテスト
  - [PentestGPT](https://github.com/GreyDGL/PentestGPT) - 大規模言語モデル（LLM）によって駆動される自動ペネトレーションテストフレームワークです
  - [PentAGI](https://github.com/vxcontrol/pentagi) - 自動セキュリティテスト用に設計された完全に自律的な AI エージェントシステムです
  - [Strix](https://github.com/usestrix/strix) - 実際のハッカーのように動作する自律型 AI エージェントのセットで、コードを動的に実行し、脆弱性を見つけ、実際の概念実証を通じて検証します
  - [CAI](https://github.com/aliasrobotics/cai) - セキュリティプロフェッショナルが AI による攻撃・防御自動化を構築・デプロイできるようにする軽量でオープンソースのフレームワークです
  - [HexStrike AI](https://github.com/0x4m4/hexstrike-ai) - AI エージェントが自律的に 150 以上のサイバーセキュリティツールを実行して、自動ペネトレーション、脆弱性発見、バグ報奨自動化、セキュリティ研究を行うことができる高度な MCP サーバーです
  - [Zen AI Pentest](https://shadd0wtaka.github.io/Zen-Ai-Pentest/) - 最先端の言語モデルとプロフェッショナルセキュリティツールを組み合わせた自律的な AI 駆動型ペネトレーションテストフレームワークです
  - [Project Glasswing](https://www.anthropic.com/glasswing) - 防御的なサイバーセキュリティのための Anthropic の Claude Mythos Preview モデルへのアクセスを提供するイニシアティブで、重要なソフトウェアインフラストラクチャの脆弱性を自律的に発見できます

### インフラストラクチャアズコード（IaC）セキュリティ

- [Trivy](https://aquasecurity.github.io/trivy/) - 包括的で汎用のセキュリティスキャナーです
- [Defender for Cloud CLI](https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-cli-overview) - CI/CD パイプライン内のセキュリティスキャンをオーケストレーションし、結果を Microsoft Defender for Cloud にアップロードして姿勢管理と優先順位付けを行う開発者ファーストコマンドラインツールです
- [checkov](https://www.checkov.io/) - インフラストラクチャアズコード（IaC）ファイルの設定ミスをスキャンするための静的コード解析ツールです
- [Haskell Dockerfile Linter](https://github.com/hadolint/hadolint#readme) - ベストプラクティスの Docker イメージを構築するのに役立つスマート Dockerfile linter です
- [kube-score](https://kube-score.com/) - Kubernetes オブジェクト定義の静的コード解析を実行するツールです
- [kubesec](https://kubesec.io/) - Kubernetes リソースのセキュリティリスク解析です
- [PSRule](https://microsoft.github.io/PSRule/stable/) - インフラストラクチャアズコード（IaC）をテストおよび検証するコマンドを含む クロスプラットフォーム PowerShell モジュールです
  - [PSRule for Azure](https://azure.github.io/PSRule.Rules.Azure/) - PSRule を使用して Azure リソースとインフラストラクチャアズコード（IaC）を検証するルールのスイートです
- [ComplianceAsCode](https://github.com/ComplianceAsCode/content) - SCAP、Bash、Ansible などのさまざまな形式でセキュリティ自動化コンテンツを提供するプロジェクトです
- [complyctl](https://github.com/complytime/complyctl) - OSCAL を使用してコンプライアンス評価活動を合理化するコマンドラインツールです

### ソフトウェアサプライチェーンセキュリティ（SSCS）

- コンポジション解析（SCA）
  - SBOM 生成
    - [Syft](https://github.com/anchore/syft) - コンテナイメージとファイルシステムからソフトウェア部品表（SBOM）を生成するための CLI ツールおよび Go ライブラリです
    - [OWASP CycloneDX format](https://cyclonedx.org) - アプリケーションセキュリティコンテキストでの使用を目的とした軽量ソフトウェア部品表（SBOM）標準です
    - [SPDX format](https://spdx.dev/) - ソフトウェア部品表（SBOM）情報を通信するためのオープンスタンダードです
  - 脆弱性スキャン
    - [Grype](https://github.com/anchore/grype) - コンテナイメージとファイルシステムの脆弱性スキャナーです
    - [OSV-scanner](https://google.github.io/osv-scanner/) - OSV の公式脆弱性スキャナーです
    - [Safety](https://github.com/pyupio/safety/) - インストール済みの依存関係の既知のセキュリティ脆弱性をチェックするツールです
    - [Clair](https://github.com/quay/clair) - アプリケーションコンテナの脆弱性の静的解析のためのオープンソースプロジェクトです
    - [GitLab Container Scanning](https://docs.gitlab.com/ee/user/application_security/container_scanning/) - Docker イメージの既知の脆弱性をチェックするツールです
    - [JFrog Xray](https://jfrog.com/xray/) - ソフトウェアサプライチェーン全体にわたり脆弱性とライセンスコンプライアンスの問題を識別するアプリケーションセキュリティツールです
  - ライセンスと依存関係解析
    - [Feluda](https://github.com/anistark/feluda) - Python プロジェクトの高速依存関係グラフジェネレーターです
  - 自動化された依存関係更新
    - [Dependabot Core](https://github.com/dependabot/dependabot-core) - Dependabot セキュリティ・バージョン更新の中心となるライブラリです
- フレームワークとアセスメント
  - [SLSA framework](https://slsa.dev/) - タンパリング防止、整合性向上、パッケージとインフラストラクチャのセキュリティを目指す標準とコントロールのセキュリティフレームワークです
  - [in-toto](https://in-toto.io/) - ソフトウェアサプライチェーン整合性を保護するためのフレームワークです
  - [OpenSSF Scorecard](https://scorecard.dev/) - ソフトウェアセキュリティと関連する多数の重要な ヒューリスティック（「チェック」）を評価し、各チェックに 0～10 のスコアを割り当てる自動ツールです
- プロヴェナンスとアーティファクトメタデータ
  - [GUAC](https://guac.sh/) - ソフトウェアセキュリティメタデータを高忠実度グラフデータベースに集約するオープンソースツールです
- セキュアな配布と更新
  - [The Update Framework (TUF)](https://theupdateframework.io/) - ソフトウェア更新システムを保護するためのフレームワークで、リポジトリまたは署名鍵を侵害する攻撃者に対する保護も提供します
- コード署名と整合性
  - [Sigstore](https://www.sigstore.dev/) (Fulcio、Rekor、Cosign) - ソフトウェアの署名、検証、保護のための新しい標準です
- 注目すべき攻撃
  - [Shai-Hulud npm Supply Chain Attack](https://www.wiz.io/blog/shai-hulud-npm-supply-chain-attack) - post-install スクリプトを使用してセンシティブデータを収穫し、到達可能なパッケージの悪意あるバージョンを自動的に公開してさらに拡散する自己伝播型ワームです

## ランタイムと運用セキュリティ

:::note[Relevant DSS-P Skills]

- 4\. セキュリティ > 4\.1 セキュリティマネジメント > インシデント対応と事業継続
- 4\. セキュリティ > 4\.2 セキュリティ技術 > セキュリティ運用・保守・監視

:::

### クラウドネイティブアプリケーション保護（CNAPP）

- [The 4 Cs of Cloud-Native Systems](https://www.trendmicro.com/vinfo/us/security/news/virtualization-and-cloud/securing-the-4-cs-of-cloud-native-systems-cloud-cluster-container-and-code) - クラウドネイティブアプリケーションの多層保護を提供するために、セキュリティ戦略を 4 つの異なるレイヤーに分割する多層防御アプローチです
- [Microsoft Defender for Cloud](https://azure.microsoft.com/en-us/services/defender-for-cloud/) - クラウドベースのアプリケーションを保護するために設計されたセキュリティ対策とプラクティスのセットを備えたクラウドネイティブアプリケーション保護プラットフォーム（CNAPP）です
- クラウドセキュリティ姿勢管理（CSPM）
  - [AWS Security Hub](https://aws.amazon.com/security-hub/) - セキュリティベストプラクティスチェックを実行し、アラートを集約し、自動修復を可能にするクラウドセキュリティ姿勢管理（CSPM）サービスです
  - [cnquery](https://mondoo.com/cnquery) - インフラストラクチャ全体をデータとしてクエリできるクラウドネイティブのグラフベースセキュリティツールです
- クラウドワークロード保護プラットフォーム（CWPP）
  - [Amazon Inspector](https://aws.amazon.com/inspector/) - AWS にデプロイされたアプリケーションのセキュリティとコンプライアンスを向上させるのに役立つ自動化されたセキュリティ評価サービスです
  - [Falco](https://falco.org/) - クラウドネイティブランタイムセキュリティプロジェクトです
  - [Tracee](https://aquasecurity.github.io/tracee/latest/) - Linux のための強力なランタイムセキュリティとフォレンジックスツールです
  - [ClamAV](https://www.clamav.net/) - トロイの木馬、ウイルス、マルウェア、その他の悪意のある脅威を検出するためのオープンソースアンチウイルスエンジンです
  - [YARA](https://virustotal.github.io/yara/) - マルウェア研究者のためのパターンマッチングスイスアーミーナイフです

### セキュリティ運用と監視（SecOps）

- 検出と対応
  - [Endpoint detection and response (EDR)](https://en.wikipedia.org/wiki/Endpoint_detection_and_response) - 高度な脅威への継続的な監視と対応の必要性に対処するサイバーセキュリティテクノロジーです
  - [Extended detection and response (XDR)](https://en.wikipedia.org/wiki/Extended_detection_and_response) - SaaS ベースのベンダー固有のセキュリティ脅威検出とインシデント対応ツールです
  - [Managed detection and response (MDR)](https://en.wikipedia.org/wiki/Managed_detection_and_response) - 脅威ハンティングサービスを組織に提供し、脅威が発見されたら対応する外部委託サービスです
- SIEM と SOAR
  - [Security orchestration, automation and response (SOAR)](https://en.wikipedia.org/wiki/Security_orchestration) - 組織がセキュリティ脅威に関するデータを収集できるようにする互換性のあるソフトウェアプログラムのスタックです
  - [Microsoft Sentinel](https://azure.microsoft.com/en-us/products/microsoft-sentinel) - スケーラブルで、クラウドネイティブで、セキュリティ情報イベント管理（SIEM）およびセキュリティオーケストレーション自動化応答（SOAR）ソリューションです
  - [Amazon GuardDuty](https://aws.amazon.com/guardduty/) - 悪意のある活動と不正な行動を継続的に監視する脅威検出サービスです
- 検出と監査
  - [Sigma Detection Format](https://sigmahq.io/) - 関連するログイベントを簡潔に記述できる汎用でオープンな署名フォーマットです
  - [AWS CloudTrail](https://aws.amazon.com/cloudtrail/) - AWS アカウントの運用およびリスク監査、ガバナンス、コンプライアンスを有効にするのに役立つ AWS サービスです
  - [AWS Config](https://aws.amazon.com/config/) - AWS リソースの構成を評価、監査、確認できるサービスです

### ポリシー適用

- [Open Policy Agent (OPA)](https://www.openpolicyagent.org/) - スタック全体のポリシー適用を統一するオープンソース汎用ポリシーエンジンです
  - [Rego](https://www.openpolicyagent.org/docs/latest/policy-language/) - OPA のポリシーを作成するために使用される高レベル宣言型言語です
  - [Conftest](https://www.conftest.dev/) - 構造化された構成データに対してテストを書くのに役立つユーティリティです
- クラウドポリシーエンジン
  - [Azure Policy](https://azure.microsoft.com/en-us/products/azure-policy/) - リソースガバナンスと一貫性を備えたリアルタイムでクラウドコンプライアンスを実現するサービスです
- Kubernetes ポリシーエンジン
  - [Gatekeeper](https://open-policy-agent.github.io/gatekeeper/) - Open Policy Agent（OPA）によって実行されるポリシーを強制する、カスタマイズ可能な検証 webhook です
  - [Kyverno](https://kyverno.io/) - Kubernetes 用に設計されたポリシーエンジンです

### デジタルフォレンジックスとインシデント対応（DFIR）

- 概念
  - [Computer security incident management](https://en.wikipedia.org/wiki/Computer_security_incident_management) - コンピュータまたはコンピュータネットワーク上のセキュリティイベントの監視と検出、およびそれらのイベントへの適切な対応の実行です
  - [Digital forensics](https://en.wikipedia.org/wiki/Digital_forensics) - モバイルデバイスとコンピュータ犯罪に関連することが多い、デジタルデバイスで見つかった物質の回復、調査、検査、分析を含むフォレンジック科学の一分野です
  - [Computer forensics](https://en.wikipedia.org/wiki/Computer_forensics) - コンピュータおよびデジタルストレージメディアで見つかった証拠に関連するデジタルフォレンジック科学の一分野です
- ツールとプラットフォーム
  - [Volatility](https://github.com/volatilityfoundation/volatility3) - 揮発性メモリ（RAM）サンプルからデジタル成果物を抽出するための世界で最も広く使用されているフレームワークです
  - [Autopsy](https://github.com/sleuthkit/autopsy) - The Sleuth Kit およびその他のデジタルフォレンジックスツールのデジタルフォレンジックスプラットフォームおよびグラフィカルインターフェースです

## セキュアな通信とネットワーキング

:::note[Relevant DSS-P Skills]

- 4\. セキュリティ > 4\.2 セキュリティ技術 > セキュア設計・開発・構築

:::

### トランスポート層セキュリティ（TLS）

- [Transport Layer Security (TLS)](https://en.wikipedia.org/wiki/Transport_Layer_Security) - コンピュータネットワーク上の通信セキュリティを提供するために設計された暗号プロトコルです
- [Server Name Indication (SNI)](https://en.wikipedia.org/wiki/Server_Name_Indication) - Transport Layer Security（TLS）コンピュータネットワーキングプロトコルへの拡張です
- ツールとライブラリ
  - [testssl.sh](https://testssl.sh/) - サーバーのサービスがポートで TLS/SSL 暗号とプロトコルのサポートをチェックする無料コマンドラインツールです
  - [OpenSSL library](https://openssl-library.org/) - ネットワーク盗聴に対するコンピュータネットワーク上のセキュアな通信のためのアプリケーション用ソフトウェアライブラリです
  - [stunnnel](https://www.stunnel.org/) - 既存のクライアントとサーバーに TLS 暗号化機能を追加するように設計されたプロキシです
  - [Squid SSL Bump](https://www.squid-cache.org/Doc/config/ssl_bump/) - Squid プロキシの機能で、SSL/TLS トラフィックを傍受、復号化、再暗号化します
- 脆弱性
  - [Lucky Thirteen attack](https://en.wikipedia.org/wiki/Lucky_Thirteen_attack) - TLS プロトコルに対するタイミング攻撃で、攻撃者が暗号文を復号化できます

### セキュアシェル（SSH）

- [Secure Shell (SSH)](https://en.wikipedia.org/wiki/Secure_Shell) - セキュリティで保護されていないネットワーク上でネットワークサービスを安全に運用するための暗号化ネットワークプロトコルです
- ツールとライブラリ
  - [OpenSSH](https://www.openssh.com/) - SSH プロトコルでリモートログインするための随一の接続ツールです
  - [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/) - Windows および Unix プラットフォーム用の SSH と Telnet の無料実装です
  - [ssh-audit](https://github.com/jtesta/ssh-audit) - SSH サーバーとクライアントの構成監査用ツールです
  - [keychain](https://www.funtoo.org/Funtoo:Keychain) - 通常は ~/.bash_profile から開始される ssh-agent マネージャーです

### ファイアウォールとネットワーク保護

- Web アプリケーションファイアウォール（WAF）
  - [AWS WAF](https://aws.amazon.com/waf/) - Web アプリケーションまたは API を一般的な Web エクスプロイトと bot から保護するのに役立つ Web アプリケーションファイアウォールです
  - [Azure Web Application Firewall](https://azure.microsoft.com/en-us/products/web-application-firewall/) - 一般的な Web ハッキング技法と脆弱性から Web アプリを保護するクラウドネイティブサービスです
- ネットワークレベルの保護
  - [AWS Shield](https://aws.amazon.com/shield/) - AWS 上で実行されているアプリケーションを保護する分散サービス拒否（DDoS）保護サービスです
  - [Azure DDoS Protection](https://azure.microsoft.com/en-us/products/ddos-protection) - 最も洗練された DDoS の脅威に対する対策を提供するサービスです
  - [Fail2ban](https://github.com/fail2ban/fail2ban) - コンピュータサーバーをブルートフォース攻撃から保護する侵入防止ソフトウェアフレームワークです
  - [Snort](https://www.snort.org/) (IPS) - 世界中で最初のオープンソース侵入防止システム（IPS）です
- ホストベースのファイアウォール
  - [netfilter](https://www.netfilter.org/) (iptables、nftables) - パケットフィルタリング、ネットワークアドレス変換、およびその他のパケット操作を可能にする Linux カーネル内フレームワークです
  - [Uncomplicated Firewall (ufw)](https://launchpad.net/ufw) - netfilter ファイアウォールを管理するためのプログラムです

### メールと DNS セキュリティ

- メールセキュリティ
  - [STARTTLS](https://en.wikipedia.org/wiki/Opportunistic_TLS) - プレーンテキスト通信プロトコルが暗号化接続にアップグレードできるようにするメカニズムです
  - [SASL (Simple Authentication and Security Layer)](https://en.wikipedia.org/wiki/Simple_Authentication_and_Security_Layer) - インターネットプロトコルの認証とデータセキュリティのためのフレームワークです
  - [SPF (Sender Policy Framework)](https://en.wikipedia.org/wiki/Sender_Policy_Framework) - メール配信中に送信者アドレスの偽装を検出するように設計されたメール認証方法です
  - [DKIM (DomainKeys Identified Mail)](http://dkim.org/) - メール内の偽造送信者アドレスを検出するように設計されたメール認証方法です
  - [DMARC (Domain-based Message Authentication, Reporting & Conformance)](https://dmarc.org/) - メール認証、ポリシー、レポート プロトコルです
  - [S/MIME](https://en.wikipedia.org/wiki/S/MIME) - 認証、メッセージ整合性、否認防止、プライバシー、電子メッセージングアプリケーション用データセキュリティなどの暗号セキュリティサービスを提供する標準です
- DNS セキュリティ
  - [DNSSEC](https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions) - ドメイン名ルックアップへの応答を認証する Domain Name System（DNS）の機能です
  - [DNS over TLS (DoT)](https://en.wikipedia.org/wiki/DNS_over_TLS) - Transport Layer Security（TLS）プロトコルを介して Domain Name System（DNS）クエリと回答を暗号化する security protocol です
  - [DNS over HTTPS (DoH)](https://en.wikipedia.org/wiki/DNS_over_HTTPS) - HTTPS プロトコルを介してリモート Domain Name System（DNS）解決を実行するプロトコルです
- ツールとライブラリ
  - [OpenDKIM](http://www.opendkim.org/) - DomainKeys Identified Mail 対応アプリケーションおよび DomainKeys Identified Mail サービスを提供するための milter を開発・保守するコミュニティの取り組みです

## ガバナンス、リスク、コンプライアンス（GRC）

:::note[Relevant DSS-P Skills]

- 1\. ビジネス変革 > 1\.3 変革活動のマネジメント > リスク＆コンプライアンス
- 4\. セキュリティ > 4\.1 セキュリティマネジメント > セキュリティマネジメント
- 4\. セキュリティ > 4\.1 セキュリティマネジメント > プライバシー保護

:::

### データガバナンス

- [Unity Catalog](https://unitycatalog.io/) - さまざまなフォーマットとプラットフォーム全体での相互運用性、開放性、統一ガバナンスを提供するデータと AI のための普遍的なカタログです
- [Microsoft Purview](https://www.microsoft.com/en-us/security/business/microsoft-purview) - 異種データエステート全体で組織がデータを保護・管理するための統合的アプローチです
- [Amazon DataZone](https://aws.amazon.com/datazone/) - 顧客が AWS、オンプレミス、サードパーティのソースに保存されているデータをカタログ化、検出、共有、管理できるデータ管理サービスです

### AI ガバナンスとセキュリティ

- [ISO/IEC 42001](https://www.iso.org/standard/42001) - 組織内の人工知能管理システム（AIMS）を確立、実装、保守、継続的に改善するための要件を規定する世界初の AI 管理システム標準です
- [METR](https://metr.org/) - AI システムが社会に壊滅的な害をもたらす可能性があるかどうか、いつか測定する研究非営利団体です
- [Microsoft Agent 365](https://www.microsoft.com/en-us/microsoft-agent-365) - エンタープライズ環境内での自律 AI エージェントを監督・管理するための一元化されたガバナンスおよび管理プラットフォームです

### 規制と標準

- 法律と規制
  - [General Data Protection Regulation (GDPR)](https://gdpr.eu/) - 世界で最も厳しいプライバシーおよびセキュリティ法です
    - データ主体の要求（DSR）
    - 違反通知
    - データ保護影響評価（DPIA）
  - [California Consumer Privacy Act (CCPA)](https://oag.ca.gov/privacy/ccpa) - カリフォルニア州の住民のプライバシー権と消費者保護を向上させることを目的とした州法です
  - [Cyber Resilience Act](https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act) - デジタルコンポーネントを持つ製品またはソフトウェアの購入・使用を行う消費者と企業を保護し、強制的なサイバーセキュリティ要件を導入する規制です
- セキュリティとプライバシーフレームワーク
  - [NIST SP 800-53](https://en.wikipedia.org/wiki/NIST_Special_Publication_800-53) - 国家安全保障に関連するもの以外のすべての U.S. 連邦情報システムのセキュリティ・プライバシーコントロールのカタログです
  - [OSCAL](https://pages.nist.gov/OSCAL/) - セキュリティコンプライアンスプロセスを自動化するために、NIST が主導するオープンで機械可読形式（XML、JSON、YAML）を提供する Open Security Controls Assessment Language です
  - [ISO/IEC 27001](https://www.iso.org/standard/27001) - 情報セキュリティ管理システムの国際標準です
- 業界と監査標準
  - [PCI-DSS](https://www.pcisecuritystandards.org/document_library/) - ペイメントカードデータセキュリティのためのグローバル標準です
  - [SOC 2](https://soc2.co.uk/) - 組織が顧客データを管理する方法を規定するサービス組織のための任意のコンプライアンス標準です
  - [FIPS 140-2](https://en.wikipedia.org/wiki/FIPS_140-2) - 暗号化モジュールを承認するために使用される米国政府コンピュータセキュリティ標準です
- 強化とガイドの実装
  - [Security Technical Implementation Guides (STIGs)](https://www.cyber.mil/stigs/) - DOD IA および IA 対応デバイス/システムの構成標準です
  - [CIS Controls and Benchmarks](https://www.cisecurity.org/) - コンピュータセキュリティのための最善実行ガイドラインの出版です
  - [NIST SP 800-190](https://csrc.nist.gov/pubs/sp/800/190/final) - アプリケーションコンテナセキュリティガイドで、コンテナの使用に関連する潜在的なセキュリティ上の懸念を説明し、それらに対処するための推奨事項を提供しています

### 脆弱性管理とレポート

- [Bug bounty program](https://en.wikipedia.org/wiki/Bug_bounty_program) - 脆弱性またはバグを正常に発見しアプリケーション開発者に報告するエシカルハッカーに提供される金銭的報酬です
- 識別子と列挙
  - [CVE (Common Vulnerabilities and Exposures)](https://cve.mitre.org/cve/) - 公開されている情報セキュリティの脆弱性と暴露の参照方法を提供するシステムです
  - [CWE (Common Weakness Enumeration)](https://cwe.mitre.org/) - ソフトウェアの弱点と脆弱性のためのカテゴリシステムです
  - [OSV (Open Source Vulnerability)](https://osv.dev/) - オープンソースプロジェクト向けの脆弱性データベースと分類インフラストラクチャです
- スコアと優先順位付け
  - [CVSS (Common Vulnerability Scoring System)](https://www.first.org/cvss/) - コンピュータシステムセキュリティの脆弱性の重大度を評価するための無料でオープンな業界標準です
  - [EPSS (Exploit Prediction Scoring System)](https://www.first.org/epss/) - ソフトウェア脆弱性が野生で悪用される可能性を推定するためのデータドリブンフレームワークです
  - [KEV (Known Exploited Vulnerabilities)](https://www.cisa.gov/known-exploited-vulnerabilities-catalog) - 野生で悪用されている脆弱性を含むカタログです
  - [SSVC (Stakeholder-Specific Vulnerability Categorization)](https://www.cisa.gov/stakeholder-specific-vulnerability-categorization-ssvc) - 脆弱性が組織に対してもたらすリスクを評価し、対応する意思決定プロセスを提供する脆弱性管理方法論です
- プロトコルとデータベース
  - [Security Content Automation Protocol (SCAP)](https://csrc.nist.gov/projects/security-content-automation-protocol/) - 自動化された構成、脆弱性、パッチチェックをサポートする仕様の多目的フレームワークです
  - [NVD (U.S. National Vulnerability Database)](https://nvd.nist.gov/) - 標準ベースの脆弱性管理データの米国政府リポジトリです
  - [SARIF](https://docs.oasis-open.org/sarif/sarif/v2.1.0/sarif-v2.1.0.html) - 静的解析ツールの出力の標準形式です

## システムとパーソナルセキュリティ

:::note[Relevant DSS-P Skills]

- 4\. セキュリティ > 4\.1 セキュリティマネジメント > セキュリティ体制構築・運営
- 4\. セキュリティ > 4\.2 セキュリティ技術 > セキュア設計・開発・構築

:::

### OS とエンドポイントセキュリティ

- [Address space layout randomization (ASLR)](https://en.wikipedia.org/wiki/Address_space_layout_randomization) - メモリ脆弱性の悪用を防止するために、プロセスのアドレス空間の主要なデータ領域の位置をランダムに配置することで、メモリ保護に関連するコンピュータセキュリティ技術です
- [W^X](https://en.wikipedia.org/wiki/W%5EX) - プロセスのアドレス空間内のすべてのページが書き込み可能または実行可能である（ただし両方ではない）ことを保証するセキュリティ機能です
- [Control-flow integrity](https://en.wikipedia.org/wiki/Control-flow_integrity) - プログラムの実行フローをリダイレクトするマルウェア攻撃の多くを防止するコンピュータセキュリティ技術の一般用語です
- [TPM (Trusted Platform Module)](https://en.wikipedia.org/wiki/Trusted_Platform_Module) - 統合暗号鍵を通じてハードウェアをセキュアに保つために設計された専用マイクロコントローラーである、セキュアな暗号プロセッサーの仕様です
- Linux 強制アクセス制御
  - [SELinux](https://selinuxproject.org/page/Main_Page) - さまざまな Linux ディストリビューションに追加されているカーネル変更とユーザースペースツールのセットです
  - [AppArmor](https://apparmor.net/) - プログラムパー・プログラムプロファイルでプログラムの機能を制限することをシステム管理者に許可する Linux カーネルセキュリティモジュールです
  - [bubblewrap](https://github.com/containers/bubblewrap) - Flatpak およびそれに似たプロジェクトで使用される低レベルの非特権サンドボックスツールです
- Linux 微粒度アクセス制御
  - [Linux capabilities](https://man7.org/linux/man-pages/man7/capabilities.7.html) - スーパーユーザーの権限の一部をプロセスに付与するが、すべてを付与しない機能です
- 一般的なスキャン
  - [OpenSCAP](https://www.open-scap.org/) - Security Content Automation Protocol（SCAP）のオープンソース実装です
  - [Lynis](https://cisofy.com/lynis/) - Linux、macOS、または Unix ベースのオペレーティングシステムで実行されるシステムのセキュリティ監査ツールです

### パーソナルセキュリティツール

- パスワードマネージャー
  - [1Password](https://1password.com/) - 人間と AI エージェント全体にわたり、アイデンティティ、認証情報、シークレットの password manager および secure vault プラットフォームです
  - [pass](https://www.passwordstore.org/) - 標準 unix password manager です
  - [gokey](https://github.com/cloudflare/gokey) - Go の簡単な vault なし password manager です
  - [Buttercup](https://buttercup.pw/) - 無料でオープンソースでクロスプラットフォームの password manager です
