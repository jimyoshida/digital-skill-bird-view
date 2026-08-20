# 08 - OS とネットワークの基礎

## OS の基本概念

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > クラウドインフラ活用

:::

- [System call](https://en.wikipedia.org/wiki/System_call) - コンピュータプログラムが実行されているオペレーティングシステムのカーネルにサービスを要求する、プログラム的な方法です
- [Protection ring](https://en.wikipedia.org/wiki/Protection_ring) - 障害や悪意ある動作からデータと機能を保護する仕組みです
- [Daemon](https://en.wikipedia.org/wiki/Daemon_(computing)) - 対話的なユーザーの直接の制御下ではなく、バックグラウンドプロセスとして実行されるコンピュータプログラムです
- [Environment variable](https://en.wikipedia.org/wiki/Environment_variable) - 通常はオペレーティングシステムやマイクロサービスに組み込まれた機能を通じて、プログラムの外部で値が設定される名前付き変数です
- [POSIX standard](https://en.wikipedia.org/wiki/POSIX) - オペレーティングシステム間の互換性を維持するために IEEE Computer Society が規定した標準規格群です

### プロセス管理

- [Process](https://en.wikipedia.org/wiki/Process_(computing)) - 1 つ以上のスレッドによって実行されているコンピュータプログラムのインスタンスです
  - [Thread](https://en.wikipedia.org/wiki/Thread_(computing)) - スケジューラによって独立に管理できる、プログラムされた命令列の最小単位です
  - [Scheduling](https://en.wikipedia.org/wiki/Scheduling_(computing)) - タスクを実行するためにリソースを割り当てる行為です
  - [Context switch](https://en.wikipedia.org/wiki/Context_switch) - 後で復元して実行を再開できるように、プロセスまたはスレッドの状態を保存する処理です
  - [Interrupt](https://en.wikipedia.org/wiki/Interrupt) - イベントを適時に処理できるように、プロセッサに現在実行中のコードを中断させる要求です

### プロセス間通信 (IPC)

- パイプ
  - [Anonymous pipe](https://en.wikipedia.org/wiki/Anonymous_pipe) - 単方向のプロセス間通信に使用できる、単方向 FIFO 通信チャネルです
  - [Named pipe](https://en.wikipedia.org/wiki/Named_pipe) - Unix および Unix 系システムにおける従来のパイプ概念を拡張したもので、プロセス間通信の手法の 1 つです
- [Shared memory](https://en.wikipedia.org/wiki/Shared_memory) - 複数のプログラム間の通信や重複コピーの回避を目的として、それらのプログラムから同時にアクセスできるメモリです
- [Signal](https://en.wikipedia.org/wiki/Signal_(IPC)) - 発生したイベントを通知するために、プロセスまたは同一プロセス内の特定のスレッドに送信される非同期通知です
- [Unix domain socket](https://en.wikipedia.org/wiki/Unix_domain_socket) - 同一ホストオペレーティングシステム上で実行されるプロセス間でデータを交換するためのデータ通信エンドポイントです

### メモリ管理

- [Virtual memory](https://en.wikipedia.org/wiki/Virtual_memory) - あるマシンで実際に利用可能なストレージリソースの理想化された抽象化を提供するメモリ管理技術です
  - [Memory paging](https://en.wikipedia.org/wiki/Memory_paging) - コンピュータがメインメモリで使用するデータを二次記憶装置に保存し取得するメモリ管理方式です
  - [Page fault](https://en.wikipedia.org/wiki/Page_fault) - 実行中のプログラムが、メモリ管理ユニットによってプロセスの仮想アドレス空間に現在マッピングされていないメモリページにアクセスした際に、コンピュータハードウェアが発生させる例外の一種です
  - [Resident set size (RSS)](https://en.wikipedia.org/wiki/Resident_set_size) - プロセスが占有するメモリのうち、メインメモリに保持されている部分です
  - [Working set size (WSS)](https://en.wikipedia.org/wiki/Working_set_size) - プロセスの仮想アドレス空間内のページのうち、現在メインメモリに常駐しているものの集合です
- [Page cache](https://en.wikipedia.org/wiki/Cache_(computing)) - 将来のデータ要求をより高速に処理できるように、データを保存するハードウェアまたはソフトウェアコンポーネントです

### ストレージ管理

- [Disk partitioning](https://en.wikipedia.org/wiki/Disk_partitioning) - 各領域を個別に管理できるように、二次記憶装置上に 1 つ以上の領域を作成することです
- [Loop device](https://en.wikipedia.org/wiki/Loop_device) - ファイルをブロックデバイスとしてアクセス可能にする擬似デバイスです
- [File system](https://en.wikipedia.org/wiki/File_system) - オペレーティングシステムがデータの保存や取得の方法を制御するために使用する方式とデータ構造です
  - [Journaling file system](https://en.wikipedia.org/wiki/Journaling_file_system) - ファイルシステムの主要部分にまだコミットされていない変更を記録する循環ログ、すなわちジャーナルを保持するファイルシステムです
  - [Path](https://en.wikipedia.org/wiki/Path_(computing)) - ファイルシステム内の一意の場所を指定する、ファイルまたはディレクトリの名前の一般的な形式です
  - [Glob pattern](https://en.wikipedia.org/wiki/Glob_(programming)) - ワイルドカード文字を用いてファイル名の集合を指定するパターンです
  - [File handle/descriptor](https://en.wikipedia.org/wiki/File_descriptor) - ファイルや、パイプ・ネットワークソケットなどの他の入出力リソースを識別する一意の識別子です
  - [Symbolic link](https://en.wikipedia.org/wiki/Symbolic_link) - 絶対パスまたは相対パスの形式で他のファイルやディレクトリへの参照を含み、パス名解決に影響を与えるファイルの総称です
  - [Permissions](https://en.wikipedia.org/wiki/File-system_permissions) - コンピュータのユーザーがファイルシステムの内容を閲覧・変更・移動・実行する能力を制御する、多くの現代的なファイルシステムの機能です
    - [Setuid](https://en.wikipedia.org/wiki/Setuid) - ユーザーが実行可能ファイルの所有者またはグループの権限で実行ファイルを実行できるようにする、Unix のアクセス権フラグです
    - [Sticky bit](https://en.wikipedia.org/wiki/Sticky_bit) - Unix 系システムのファイルやディレクトリに割り当てることができる、ユーザー所有権に関するアクセス権フラグです
  - [Inode](https://en.wikipedia.org/wiki/Inode) - ファイルやディレクトリなどのファイルシステムオブジェクトを記述する、Unix 形式のファイルシステムにおけるデータ構造です
- [RAID](https://en.wikipedia.org/wiki/RAID) - データの冗長化、性能向上、またはその両方を目的として、複数の物理ディスクドライブコンポーネントを 1 つ以上の論理ユニットに統合するデータストレージ仮想化技術です

## ネットワークの基本概念とプロトコル

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > クラウドインフラ活用

:::

- [The OSI Model](https://en.wikipedia.org/wiki/OSI_model) - システム間相互接続を目的とした標準規格開発の連携のための共通基盤を提供する概念モデルです

### リンク層 (L2)

- [Ethernet](https://en.wikipedia.org/wiki/Ethernet) - 有線コンピュータネットワーキング技術のファミリーです
  - [ARP](https://en.wikipedia.org/wiki/Address_Resolution_Protocol) - 特定のインターネット層アドレスに関連付けられた、MAC アドレスなどのリンク層アドレスを発見するために使用される通信プロトコルです
    - [MAC address](https://en.wikipedia.org/wiki/MAC_address) - ネットワークセグメント内の通信でネットワークアドレスとして使用するために、ネットワークインターフェースコントローラに割り当てられる一意の識別子です
  - [VLAN](https://en.wikipedia.org/wiki/VLAN) - コンピュータネットワークにおいて、データリンク層で分割・分離されたブロードキャストドメインです

### インターネット層 (L3)

- [The Internet](https://en.wikipedia.org/wiki/Internet) - ネットワークやデバイス間の通信にインターネットプロトコルスイートを使用する、相互接続されたコンピュータネットワークの世界的なシステムです
- [IP](https://en.wikipedia.org/wiki/Internet_Protocol) - インターネットプロトコルスイートにおけるネットワーク層の通信プロトコルです
  - [Link-local address](https://en.wikipedia.org/wiki/Link-local_address) - ホストが接続されているネットワークセグメントまたはブロードキャストドメイン内の通信でのみ有効なネットワークアドレスです
  - [IP-multicast](https://en.wikipedia.org/wiki/IP_multicast) - 単一の送信で興味を持つ受信者グループにインターネットプロトコルデータグラムを送信する方式です
  - [IPv6](https://en.wikipedia.org/wiki/IPv6) - ネットワーク上のコンピュータに識別・所在システムを提供し、インターネット上でトラフィックを経路制御する通信プロトコルであるインターネットプロトコルの最新版です
    - [Unique local address](https://en.wikipedia.org/wiki/Unique_local_address) - アドレスブロック fc00::/7 内の IPv6 アドレスです
  - [ICMP](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol) - インターネットプロトコルスイートにおける補助プロトコルです
  - [ICMPv6](https://en.wikipedia.org/wiki/ICMPv6) - インターネットプロトコルバージョン 6 向けの Internet Control Message Protocol の実装です
  - [DHCP](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol) - ネットワークに接続されたデバイスに IP アドレスやその他の通信パラメータを自動的に割り当てるために、インターネットプロトコルネットワーク上で使用されるネットワーク管理プロトコルです
  - [DHCPv6](https://en.wikipedia.org/wiki/DHCPv6) - IPv6 ネットワークで動作するために必要な IP アドレス、IP プレフィックス、その他の設定データを、インターネットプロトコルバージョン 6 ホストに設定するためのネットワークプロトコルです
  - [NAT](https://en.wikipedia.org/wiki/Network_address_translation) - トラフィックルーティングデバイスを通過中のパケットの IP ヘッダー内のネットワークアドレス情報を変更することで、ある IP アドレス空間を別の空間にマッピングする手法です
  - [NAT64](https://en.wikipedia.org/wiki/NAT64) - IPv6 ホストと IPv4 ホスト間の通信を仲介する IPv6 移行メカニズムです
  - [NDP](https://en.wikipedia.org/wiki/Neighbor_Discovery_Protocol) - インターネットプロトコルバージョン 6 で使用される、インターネットプロトコルスイート内のプロトコルです
- ルーティング
  - [Routing table](https://en.wikipedia.org/wiki/Routing_table) - 特定のネットワーク宛先への経路を列挙した、ルーターまたはネットワークホストに保存されるデータテーブルです
  - [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) - IP アドレスの割り当てと IP ルーティングのための手法です

### トランスポート層 (L4)

- [Network socket](https://en.wikipedia.org/wiki/Network_socket) - コンピュータネットワークのネットワークノード内にあり、ネットワーク越しのデータ送受信のエンドポイントとして機能するソフトウェア構造です
- [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) - インターネットプロトコルスイートの主要プロトコルです
  - [TCP window scale option](https://en.wikipedia.org/wiki/TCP_window_scale_option) - Transmission Control Protocol で許容される受信ウィンドウサイズを、従来の最大値である 65,535 バイトより大きくするためのオプションです
- [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol) - インターネットプロトコルスイートの中核をなすメンバーです
- [QUIC](https://quicwg.org/) - UDP ベースの、ストリーム多重化された暗号化トランスポートプロトコルです

### ネットワークアーキテクチャ

- [Peer-to-peer](https://en.wikipedia.org/wiki/Peer-to-peer) - 参加者が集中管理システムに頼ることなく、直接リソースを共有する分散コンピューティングまたはネットワーキングアーキテクチャです

## ドメインネームシステム (DNS)

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > クラウドインフラ活用

:::

- [DNS](https://en.wikipedia.org/wiki/Domain_Name_System) - インターネットや他のインターネットプロトコルネットワークを通じて到達可能なコンピュータ、サービス、その他のリソースを識別するために使用される、階層的かつ分散化されたネーミングシステムです
- [mDNS](https://en.wikipedia.org/wiki/Multicast_DNS) - ローカルネームサーバーを含まない小規模なネットワーク内で、ホスト名を IP アドレスに解決するプロトコルです

### ドメイン登録と検索

- [IANA WHOIS Service](https://www.iana.org/whois) - ドメイン名または IP アドレスの登録データを検索するサービスです
- [Registration Data Access Protocol (RDAP)](https://en.wikipedia.org/wiki/Registration_Data_Access_Protocol) - ドメイン名レジストリや地域インターネットレジストリから登録データを配信する、コンピュータネットワーク通信プロトコルです
- [Domain drop catching](https://en.wikipedia.org/wiki/Domain_drop_catching) - ドメイン名の登録が失効した直後に、そのドメイン名を登録する行為です

### サーバーとリゾルバの実装

- [BIND (dnsutils)](https://www.isc.org/bind/) - 非常に柔軟でフル機能を備えた DNS システムです
- [dnsmasq](https://thekelleys.org.uk/dnsmasq/doc.html) - 軽量で設定が容易な DNS フォワーダー、DHCP、ルーターアドバタイズメントサーバーです
- [CoreDNS](https://coredns.io/) - プラグインを連鎖させる DNS サーバーです
- [systemd-resolved](https://man7.org/linux/man-pages/man8/systemd-resolved.service.8.html) - ローカルアプリケーションにネットワーク名前解決を提供するシステムサービスです
- mDNS の実装
  - [Avahi](https://www.avahi.org/) - mDNS/DNS-SD プロトコルスイートを介して、ローカルネットワーク上でのサービス発見を容易にするシステムです
  - [Bonjour](https://developer.apple.com/bonjour/) - ゼロコンフィグレーションネットワーキングの Apple による実装です

### クライアントツール

- BIND の一部
  - [dig](https://linux.die.net/man/1/dig) - DNS ネームサーバーに問い合わせるための柔軟なツールです
  - [nslookup](https://linux.die.net/man/1/nslookup) - インターネットドメインネームサーバーに問い合わせるプログラムです
- [dog](https://github.com/ogham/dog) - コマンドライン DNS クライアントです
- [Doggo](https://doggo.mrkaran.dev/docs/) - Go で書かれた、モダンなコマンドライン DNS クライアント (dig のようなもの) です

- マネージド DNS サービス
  - [Amazon Route53](https://aws.amazon.com/route53/) - 高可用性でスケーラブルなクラウド Domain Name System Web サービスです
  - [Google Cloud DNS](https://cloud.google.com/dns/) - コスト効率よくドメイン名をグローバル DNS に公開する、高性能でレジリエントなグローバル Domain Name System サービスです

## メールシステム

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > クラウドインフラ活用

:::

- [Email](https://en.wikipedia.org/wiki/Email) - 電子デバイスを使用して人々の間でメッセージを交換する方法です
- [SMTP](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol) - 電子メール送信のための通信プロトコルです
- [POP](https://en.wikipedia.org/wiki/Post_Office_Protocol) - メールクライアントがメールサーバーから電子メールを取得するために使用される、アプリケーション層のインターネット標準プロトコルです
- [IMAP](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol) - メールクライアントが TCP/IP 接続を介してメールサーバーから電子メールメッセージを取得するために使用される、インターネット標準プロトコルです
- [MIME](https://en.wikipedia.org/wiki/MIME) - ASCII 以外の文字セットのテキストをサポートするために、電子メールメッセージの形式を拡張する標準です
  - [Quoted-printable encoding](https://en.wikipedia.org/wiki/Quoted-printable) - 7 ビットのデータパスを使用して送信できるように、8 ビット ASCII 文字セットでデータを表現するエンコーディングです
  - [Base64](https://en.wikipedia.org/wiki/Base64) - バイナリデータを基数 64 表現に変換することで ASCII 文字列形式として表現する、バイナリ-テキストエンコーディング方式群です

### メールボックス形式

- Unix Mbox
- Maildir

### サーバーソフトウェア (MTA/MDA)

- [Postfix](https://www.postfix.org/) - 広く使われている Sendmail プログラムの代替として IBM の研究部門で誕生したメールサーバーです
- [Maddy Mail Server](https://github.com/foxcpp/maddy) - メールサービスを運用するために必要なすべての機能を実装した、オールインワンのメールサーバーです
- テスト用サーバー
  - [Mailpit](https://mailpit.axllent.org/) - 小型で高速、低メモリ、依存関係ゼロのマルチプラットフォームな、開発者向けメールテストツール兼 API です
- IMAP
  - [Cyrus IMAP](https://www.cyrusimap.org/) - 小規模から大規模の企業環境での使用向けに設計された、高いスケーラビリティを持つエンタープライズメールシステムです
  - [Dovecot](https://www.dovecot.org/) - Linux/UNIX 系システム向けのオープンソース IMAP・POP3 メールサーバーです

### クライアントソフトウェアとユーティリティ

- TUI クライアントとユーティリティ
  - [mailutils](https://mailutils.org/) - 電子メールを扱うためのライブラリとユーティリティのセットです
    - [mail command](https://mailutils.org/manual/html_section/mail.html) - メールを送受信するコマンドです
  - [Himalaya](https://github.com/pimalaya/himalaya) - Rust で構築された CLI アプリケーションで、IMAP、Maildir、SMTP、OAuth 2.0、PGP 暗号化をサポートし、シェルコマンドを通じてメールを操作できます
  - [Mutt](http://www.mutt.org/) - Unix オペレーティングシステム上で電子メールを読み書きするための、小さいながら非常に強力なテキストベースのプログラムです
  - [swaks](http://www.jetmore.org/john/code/swaks/) - 機能豊富で柔軟、スクリプト可能なトランザクション指向の SMTP テストツールです
  - [msmtp](https://marlam.de/msmtp/) - 配送のためにメールを SMTP サーバーへ送信する SMTP クライアントで、メールクライアント向けの sendmail 代替として設定できるように設計されています
  - [Pop](https://github.com/charmbracelet/pop) - ターミナルからメールを送信するためのライブラリです
  - [GNU sharutils](https://www.gnu.org/software/sharutils/) - シェルアーカイブを作成・展開するためのユーティリティ一式です
- ライブラリ
  - [go-mail](https://github.com/wneessen/go-mail/wiki) - シンプルに使えて機能豊富な、Go 向けメールライブラリです
- GUI クライアント
  - [Thunderbird](https://www.thunderbird.net/en-US/) - セットアップとカスタマイズが容易な無料のメールアプリケーションです
  - [Sylpheed](https://sylpheed.sraoss.jp/en/) - シンプルで軽量ながら機能豊富、使いやすい電子メールクライアントです

### スパムテストとレピュテーション

- [mail-tester](https://www.mail-tester.com/) - スパム、不正な形式のコンテンツ、メールサーバー設定の問題についてメールをテストできる無料のオンラインサービスです
- [Spamhaus Project](https://www.spamhaus.org/) - スパムおよび関連するサイバー脅威を追跡する非営利組織です

- クラウドサービス
  - [Amazon SES](https://aws.amazon.com/ses/) - 開発者が任意のアプリケーション内からメールを送信できる、コスト効率が良く柔軟でスケーラブルなメールサービスです
  - [SendGrid](https://sendgrid.com/) - 大規模なトランザクションメールおよびマーケティングメールの信頼性の高い配信を提供する、クラウドベースのメール配信プラットフォームです

## Unix 系オペレーティングシステム

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > クラウドインフラ活用

:::

- [The Linux Kernel](https://www.kernel.org/) - Linux オペレーティングシステムの主要コンポーネントであり、コンピュータのハードウェアとプロセスの間の中核的なインターフェースです
  - スレッド
    - [Pthreads](https://en.wikipedia.org/wiki/Pthreads) - プログラミング言語から独立して存在する実行モデルであり、並行実行モデルでもあります
  - ファイルシステム
    - [Ext4](https://en.wikipedia.org/wiki/Ext4) - 多くの主要な Linux ディストリビューションのデフォルトファイルシステムです
    - [XFS](https://en.wikipedia.org/wiki/XFS) - Silicon Graphics, Inc が開発した、高性能なジャーナリングファイルシステムです
    - [Btrfs](https://en.wikipedia.org/wiki/Btrfs) - スナップショット、RAID、自己修復などの高度な機能を備えた、Linux 向けの copy-on-write ファイルシステムです
    - [UnionFS](https://en.wikipedia.org/wiki/UnionFS) - 他のファイルシステムに対する union mount を実装する、Linux、FreeBSD、NetBSD 向けのファイルシステムサービスです
    - [OverlayFS](https://en.wikipedia.org/wiki/OverlayFS) - Linux 向けの union mount ファイルシステム実装です
    - [proc.5](https://man7.org/linux/man-pages/man5/proc.5.html) - カーネルのデータ構造へのインターフェースを提供する仮想ファイルシステムです
    - [sysfs.5](https://man7.org/linux/man-pages/man5/sysfs.5.html) - さまざまなカーネルサブシステム、ハードウェアデバイス、関連するデバイスドライバに関する情報をエクスポートする仮想ファイルシステムです
  - コンテナサポート
    - [cgroups](https://man7.org/linux/man-pages/man7/cgroups.7.html) - プロセスを階層的なグループに編成し、さまざまな種類のリソースの使用量を制限・監視できるようにする Linux カーネルの機能です
    - [namespaces](https://man7.org/linux/man-pages/man7/namespaces.7.html) - グローバルなシステムリソースをラップする抽象化であり、名前空間内のプロセスからはそのグローバルリソースの独立したインスタンスを持っているかのように見せます
    - [lxc/rootfs](https://man7.org/linux/man-pages/man7/lxc.7.html) - Linux カーネルのコンテインメント機能に対するユーザースペースインターフェースです
    - [nsenter](https://www.man7.org/linux/man-pages/man1/nsenter.1.html) - 他のプロセスの名前空間内でプログラムを実行するコマンドです
  - [FUSE (Filesystem in Userspace)](https://github.com/libfuse/libfuse) - ユーザースペースプログラムがファイルシステムを Linux カーネルにエクスポートするためのインターフェースです
    - [s3fs](https://github.com/s3fs-fuse/s3fs-fuse) - Amazon S3 バケットをローカルファイルシステムとしてマウントできる FUSE ファイルシステムです
  - [eBPF (Extended Berkeley Packet Filter)](https://ebpf.io/) - 特権的なコンテキストでサンドボックス化されたプログラムを実行できる、Linux カーネルに起源を持つ革新的な技術です

### Linux ディストリビューション

- 汎用
  - [Arch Linux](https://archlinux.org/) - シンプルで軽量なディストリビューションです
  - [Debian](https://www.debian.org/) - 完全な自由なオペレーティングシステムです
  - [Fedora](https://www.fedoraproject.org/) - ハードウェア、クラウド、コンテナ向けにコミュニティによって構築された、革新的でフリーかつオープンソースのオペレーティングシステムプラットフォームです
  - [Gentoo](https://www.gentoo.org/) - カスタマイズ性とパフォーマンスを重視した、非常に柔軟なソースベースの Linux ディストリビューションです
  - [NixOS](https://nixos.org/) - パッケージと設定の管理に独自のアプローチを採用した Linux ディストリビューションです
  - [openSUSE](https://www.opensuse.org/) - デスクトップ、サーバー、コンテナ向けの無料 Linux オペレーティングシステムです
- サーバー向け
  - [Ubuntu server](https://ubuntu.com/server) - パブリッククラウド、オンプレミス、IoT デバイス向けの標準プラットフォームです
- デスクトップ向け
  - Debian ベース
    - [Ubuntu desktop](https://ubuntu.com/desktop) - デスクトップからクラウド、インターネットに接続されたあらゆるモノまで動作する、Linux ベースのオペレーティングシステムです
    - [BunsenLabs Linux](https://www.bunsenlabs.org/) - 軽量で簡単にカスタマイズできる Openbox デスクトップを提供するディストリビューションです
  - Arch ベース
    - [Manjaro Linux](https://manjaro.org/) - 独立して開発された Arch オペレーティングシステムをベースにした、使いやすい Linux ディストリビューションです
    - [Mabox Linux](https://maboxlinux.org/) - 高速で軽量、機能的な Linux Desktop の「リラックスした」ローリングリリースで、Manjaro をベースに Openbox Window Manager を採用しています

### BSD ディストリビューション

- [FreeBSD](https://www.freebsd.org/) - Berkeley Software Distribution (BSD) の流れを汲む、フリーでオープンソースの Unix 系オペレーティングシステムです
- [NetBSD](https://www.netbsd.org/) - フリーで高速、安全、高い移植性を備えた Unix 系のオープンソースオペレーティングシステムです
- [OpenBSD](https://www.openbsd.org/) - 極めて高いセキュリティと暗号技術を重視した、NetBSD のフォークとしてのフリーでオープンソースな Unix 系オペレーティングシステムです

### システムサービスと認証

- [Systemd](https://www.freedesktop.org/wiki/Software/systemd/) - Linux オペレーティングシステム向けのシステムおよびサービスマネージャーです
  - [journald](https://www.freedesktop.org/software/systemd/man/latest/systemd-journald.html#) - ログデータを収集し保存するシステムサービスです
  - [hostnamed](https://www.freedesktop.org/software/systemd/man/latest/systemd-hostnamed.html#) - ユーザープログラムからホスト名や関連するマシンのメタデータを制御するために使用できるシステムサービスです
  - [networkd](https://www.freedesktop.org/software/systemd/man/latest/systemd-networkd.html#) - ネットワークを管理するシステムサービスです
  - [resolved](https://www.freedesktop.org/software/systemd/man/latest/systemd-resolved.html#) - ローカルアプリケーションにネットワーク名前解決を提供するシステムサービスです
  - [timesyncd](https://www.freedesktop.org/software/systemd/man/latest/systemd-timesyncd.html#) - ローカルシステムクロックをリモートの Network Time Protocol サーバーと同期するために使用できるシステムサービスです
- [linux-pam](https://github.com/linux-pam/linux-pam) - Linux システム内のアプリケーションとサービスの認証タスクを処理するライブラリ群です

## マシン仮想化

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > クラウドインフラ活用

:::

- [Virtualization](https://en.wikipedia.org/wiki/Virtualization) - 仮想コンピュータハードウェアプラットフォーム、ストレージデバイス、コンピュータネットワークリソースなど、何かの仮想版を作成する行為です
- [libvirt](https://libvirt.org/) - 仮想化プラットフォームを管理するためのツールキットです

### Type-1 ハイパーバイザー

- [KVM](https://www.linux-kvm.org/page/Main_Page) - 仮想化拡張機能を備えた x86 ハードウェア上の Linux 向けの完全仮想化ソリューションです
- [Hyper-V](https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/overview) - Microsoft のハードウェア仮想化製品です
- [Proxmox VE](https://www.proxmox.com/en/products/proxmox-virtual-environment/overview) - エンタープライズ仮想化向けの完全なオープンソースサーバー管理プラットフォームです

### Type-2 ハイパーバイザー

- [VirtualBox](https://www.virtualbox.org/) - 企業利用にも家庭利用にも適した、強力な x86・AMD64/Intel64 仮想化製品です
- [QEMU](https://www.qemu.org/) - 汎用のオープンソースマシンエミュレーター兼仮想化ソフトウェアです

### CPU エミュレーター

- [QEMU](https://www.qemu.org/) - 汎用のオープンソースマシンエミュレーター兼仮想化ソフトウェアです

### コンピュータハードウェア

- 処理装置
  - [Central processing unit (CPU)](https://en.wikipedia.org/wiki/Central_processing_unit) - 算術・論理・制御・入出力操作を実行することでプログラム命令を処理する、コンピュータの主要なプロセッサです
  - [Graphics processing unit (GPU)](https://en.wikipedia.org/wiki/Graphics_processing_unit) - グラフィックスレンダリングと並列コンピューティングタスクの高速化のために設計された特殊な電子回路で、3D グラフィックス、AI/ML ワークロード、動画処理に広く使用されています
  - [Neural processing unit (NPU)](https://en.wikipedia.org/wiki/Neural_processing_unit) - ニューラルネットワークとコンピュータビジョンタスクを効率的に実行することで、人工知能と機械学習アプリケーションを高速化するために設計された特殊なハードウェアです
- CPU アーキテクチャ
  - [x86-64](https://en.m.wikipedia.org/wiki/X86-64) - x86 命令セットの 64 ビット版です
  - [ARM64](https://en.m.wikipedia.org/wiki/AArch64) - ARM アーキテクチャファミリーの 64 ビット拡張です
- CPU 拡張機能
  - [x86 virtualization](https://en.wikipedia.org/wiki/X86_virtualization)
  - [Intel AMX](https://en.wikipedia.org/wiki/Advanced_Matrix_Extensions)

## Linux ホスト管理

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > クラウドインフラ活用

:::

### コアユーティリティ

- [util-linux](https://git.kernel.org/pub/scm/utils/util-linux/util-linux.git/) - Linux ユーティリティの雑多なコレクションです
  - [lsblk](https://man7.org/linux/man-pages/man8/lsblk.8.html) - 利用可能なすべてのブロックデバイス、または指定したブロックデバイスの情報を一覧表示するコマンドです
  - [lsns](https://man7.org/linux/man-pages/man8/lsns.8.html) - 現在アクセス可能なすべての名前空間、または指定した名前空間の情報を一覧表示するコマンドです
  - [swapon](https://man7.org/linux/man-pages/man8/swapon.8.html) - ページングとスワッピングを行うデバイスを指定するために使用されるコマンドです
- [rsync](https://rsync.samba.org/) - 高速な増分ファイル転送を提供するオープンソースユーティリティです
- [sudo](https://www.sudo.ws/) - システム管理者が特定のユーザーに root または他のユーザーとしていくつかのコマンドを実行する権限を委任するためのものです
- [shadow-utils](https://github.com/shadow-maint/shadow) - UNIX パスワードファイルをシャドウパスワード形式に変換するために必要なプログラムと、ユーザーおよびグループアカウントを管理するプログラムを含みます
  - [useradd](https://man7.org/linux/man-pages/man8/useradd.8.html) - ユーザーを追加するための低レベルユーティリティです
- [jc](https://kellyjonbrazil.github.io/jc/docs/) - 一般的なコマンドラインツールやファイル形式の出力を JSON または Dictionary に変換する CLI ツール兼 Python ライブラリです
- [aha](https://github.com/theZiz/aha) - Ansi HTML Adapter です
  - [NO_COLOR](https://no-color.org/) - コマンドラインソフトウェアで ANSI カラーを無効化するための環境変数です
- [Vixie Cron](https://github.com/vixie/cron) - POSIX Cron のオープンソース実装です
  - [Crontab.guru](https://crontab.guru/) - cron のスケジュール式のための、素早くシンプルなエディタです
- [logrotate](https://github.com/logrotate/logrotate) - ログファイルの自動ローテーション、圧縮、削除、メール送信を可能にします
- [Syslog](https://en.wikipedia.org/wiki/Syslog) - メッセージロギングのための標準です

### プロセスとシステムの監視

- [procps](https://gitlab.com/procps-ng/procps) - 通常 /proc にある擬似ファイルシステムから情報を提供する、コマンドラインおよびフルスクリーンユーティリティのセットです
  - [ps](https://man7.org/linux/man-pages/man1/ps.1.html) - 選択したアクティブなプロセスの情報を表示するコマンドです
  - [top](https://www.man7.org/linux/man-pages/man1/top.1.html) - 稼働中のシステムの動的なリアルタイムビューを提供するプログラムです
  - [free](https://www.man7.org/linux/man-pages/man1/free.1.html) - システム内の空きおよび使用中の物理メモリとスワップメモリの合計量を表示するコマンドです
  - [vmstat](https://www.man7.org/linux/man-pages/man8/vmstat.8.html) - プロセス、メモリ、ページング、ブロック IO、トラップ、ディスク、CPU 活動に関する情報を報告するコマンドです
- [psmisc](https://gitlab.com/psmisc/psmisc) - proc ファイルシステムを使用する小さなユーティリティのパッケージです
  - [pstree](https://man7.org/linux/man-pages/man1/pstree.1.html) - 実行中のプロセスをツリー形式で表示するコマンドです
  - [killall](https://man7.org/linux/man-pages/man1/killall.1.html) - 指定したコマンドのいずれかを実行しているすべてのプロセスにシグナルを送信するコマンドです
- [lsof](https://lsof.readthedocs.io/en/latest/) - オープンファイルを一覧表示する (LiSt Open Files) コマンドです
- [strace](https://strace.io/) - Linux 向けの診断・デバッグ・学習用ユーザースペースユーティリティです
- [inxi](https://smxi.org/docs/inxi.htm) - フル機能を備えたシステム情報スクリプトです
- [witr](https://github.com/pranshuparmar/witr) - 実行中のプロセスの因果的な系統と目的を説明するツールです
- パフォーマンスモニター
  - [sysstat](https://sysstat.github.io/) - Linux 向けのパフォーマンス監視ツールのコレクションです
    - [iostat](https://man7.org/linux/man-pages/man1/iostat.1.html) - システムの入出力デバイスの負荷を監視するために使用されるコマンドです
  - [Monit](https://mmonit.com/monit/) - Unix システムを管理・監視するための小さなオープンソースユーティリティです
  - [atop](https://github.com/Atoptool/atop#atop) - Linux 向けの ASCII フルスクリーンパフォーマンスモニターです
  - [smem](https://www.selenic.com/smem/) - Linux システムにおけるメモリ使用状況について多様なレポートを生成できるツールです

### 時刻同期

- [NTP](https://en.wikipedia.org/wiki/Network_Time_Protocol) - パケット交換方式で遅延が可変のデータネットワーク越しに、コンピュータシステム間でクロックを同期するためのネットワーキングプロトコルです
- [chrony](https://chrony.tuxfamily.org/) - Network Time Protocol の汎用的な実装です
- [pool.ntp.org](https://www.ntppool.org/en/) - 何百万ものクライアントに信頼性が高く使いやすい NTP サービスを提供する、タイムサーバーの大規模な仮想クラスタです

### モダンな CLI 代替ツール

- [gdu](https://github.com/dundee/gdu) - Go で書かれた、コンソールインターフェースを備えた高速なディスク使用量アナライザーです
- [lsd](https://github.com/Peltoche/lsd) - 色、アイコン、ツリービュー、その他の書式オプションなど多くの機能を追加した GNU ls の書き換え版です
- [eza](https://eza.rocks/) - ls のモダンな代替です
- [broot](https://dystroy.org/broot/) - ディレクトリツリーを閲覧・移動する新しい方法です
- [bat](https://github.com/sharkdp/bat) - 翼の生えた cat(1) のクローンです
- [dust](https://github.com/bootandy/dust) - Rust で書かれた、より直感的な du のバージョンです
- [dua](https://github.com/byron/dua-cli) - ディスク容量の使用状況を確認し、不要なデータを高速に削除するツールです
- [duf](https://github.com/muesli/duf) - より優れた 'df' の代替です
- [procs](https://github.com/dalance/procs) - Rust で書かれた ps のモダンな代替です
- [htop](https://hisham.hm/htop/) - Unix システム向けの対話的なプロセスビューアです
- [btop++](https://github.com/aristocratos/btop) - Linux、macOS、FreeBSD 向けのリソースモニターです
- [glances](https://nicolargo.github.io/glances/) - curses または Web ベースのインターフェースを通じて大量の監視情報を提示することを目指す、クロスプラットフォームな監視ツールです
- [neofetch](https://github.com/dylanaraps/neofetch) - コマンドラインシステム情報ツールです

### パッケージ管理ツール

- [dpkg](https://salsa.debian.org/dpkg-team/dpkg) - Debian の基本パッケージ管理システムです
  - [apt](https://salsa.debian.org/apt-team/apt) - Ubuntu、Debian、および関連する Linux ディストリビューションで deb パッケージのインストール、更新、削除などの管理を行うコマンドラインユーティリティです
- [Pacman](https://archlinux.org/pacman/) - Linux でソフトウェアパッケージを管理するユーティリティです
  - [Yay](https://github.com/Jguer/yay) - Go で書かれた AUR ヘルパーです
- [yum](http://yum.baseurl.org/) - rpm システム向けの自動アップデーターおよびパッケージインストーラー/リムーバーです
- [dnf](https://github.com/rpm-software-management/dnf) - yum の次世代版です
- [Homebrew](https://brew.sh/) - macOS (または Linux) に欠けていたパッケージマネージャーです
- [pipx](https://pipx.pypa.io/stable/) - 分離された環境で Python アプリケーションをインストール・実行するツールです
- [Flatpak](https://flatpak.org/) - Linux 上でサンドボックス化されたデスクトップアプリケーションを構築・配布・実行するためのシステムです
- [Snapcraft](https://snapcraft.io/) - Linux カーネルを使用するオペレーティングシステム向けに Canonical が開発した、ソフトウェアのパッケージングとデプロイのシステムです
- [arkade](https://github.com/alexellis/arkade) - お気に入りの DevOps CLI をダウンロードしたり、Kubernetes クラスタに helm チャートをインストールしたりできる、ポータブルなマーケットプレイスです
- [Plaza](https://github.com/StaszeKrk/plaza) - pacman、AUR、apt、dnf、Flatpak にまたがってパッケージを検索・インストール・管理できる、カスタマイズ可能で装飾可能なターミナル UI です

## Linux ネットワーク管理

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > クラウドインフラ活用

:::

### 設定と管理

- [iproute2](https://github.com/shemminger/iproute2) - Linux で TCP/IP ネットワーキングとトラフィック制御を行うためのユーティリティ集です
  - [ip](https://man7.org/linux/man-pages/man8/ip.8.html) - ルーティング、ネットワークデバイス、インターフェース、トンネルを表示・操作するための主要なコマンドです
  - [ss](https://man7.org/linux/man-pages/man8/ss.8.html) - ソケットを調査するユーティリティです
- [net-tools (legacy)](https://sourceforge.net/projects/net-tools/) - Linux カーネルのネットワークサブシステムを制御するプログラム集です
  - [ifconfig](https://man7.org/linux/man-pages/man8/ifconfig.8.html) - ネットワークインターフェースを設定するために使用されるコマンドです
  - [netstat](https://man7.org/linux/man-pages/man8/netstat.8.html) - ネットワーク接続、ルーティングテーブル、インターフェース統計、マスカレード接続、マルチキャストメンバーシップを表示するコマンドです
- [NetworkManager](https://networkmanager.dev/) - libudev やその他の Linux カーネルインターフェースの上に位置し、ネットワーク設定のための高レベルインターフェースを提供するデーモンです
- [Ubuntu NetPlan](https://netplan.io/) - ネットワーク設定の抽象化レンダラーです

### 分析とセキュリティ

- [tcpdump](https://www.tcpdump.org/) - 強力なコマンドラインパケットアナライザーです
- [wireshark](https://www.wireshark.org/) - 世界で最も定評あるネットワークプロトコルアナライザーです
- [nmap](https://nmap.org/) - ネットワーク探索とセキュリティ監査のためのオープンソースツールです
  - [ncat](https://nmap.org/ncat/) - コマンドラインからネットワーク越しにデータを読み書きする、機能満載のネットワーキングユーティリティです
- [traceroute](https://traceroute.sourceforge.net/) - インターネットプロトコルネットワーク越しのパケットの経路を表示し、通過遅延を測定するコンピュータネットワーク診断ツールです

### プロキシとゲートウェイ

- [SOCKS Proxy](https://en.wikipedia.org/wiki/SOCKS) - プロキシサーバーを介してクライアントとサーバー間でネットワークパケットを交換するインターネットプロトコルです
  - [Dante](https://www.inet.no/dante/) - RFC 1928 および関連標準を実装した SOCKS サーバー兼 SOCKS クライアントです
  - [tun2socks](https://github.com/xjasonlyu/tun2socks) - TUN デバイスからのすべての接続を処理する、TCP・UDP 向けの SOCKS プロキシです
  - [proxychains](https://github.com/haad/proxychains) - 任意のアプリケーションが行う TCP 接続を、TOR や他の SOCKS4、SOCKS5、HTTP(S) プロキシなどのプロキシ経由に強制するツールです
- トンネリング
  - [cloudflared](https://github.com/cloudflare/cloudflared) - Cloudflare ネットワークからオリジンへトラフィックをプロキシするデーモンである Cloudflare Tunnel のコマンドラインクライアントです
  - [ngrok](https://ngrok.com/) - ローカルアプリケーションをインターネットに公開するために、リバースプロキシ、API ゲートウェイ、セキュアなトンネルを提供する統合イングレスプラットフォームです

## ファイル共有とリモートアクセス

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > クラウドインフラ活用

:::

### ファイルサーバーとプロトコル

- [SMB](https://en.wikipedia.org/wiki/Server_Message_Block) - ネットワーク上のノード間でファイル、プリンター、シリアルポートへの共有アクセスを提供するネットワーク通信プロトコルです
  - [Samba](https://www.samba.org/) - Linux と Unix 向けの標準的な Windows 相互運用プログラム群です
- [FTP](https://en.wikipedia.org/wiki/File_Transfer_Protocol) - コンピュータネットワーク上でサーバーからクライアントへコンピュータファイルを転送するために使用される標準通信プロトコルです
  - [vsftpd](https://security.appspot.com/vsftpd.html) - Linux を含む UNIX 系システム向けの GPL ライセンスの FTP サーバーです
- [SFTP](https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol) - 信頼性のあるデータストリーム越しにファイルアクセス、ファイル転送、ファイル管理を提供するネットワークプロトコルです
  - [SFTPGo](https://sftpgo.com/) - フル機能で高度に設定可能な SFTP サーバーで、オプションで HTTP/S、FTP/S、WebDAV をサポートします

### リモートアクセスサーバーとプロトコル

- [SSH](https://en.wikipedia.org/wiki/Secure_Shell) - 保護されていないネットワーク越しにネットワークサービスを安全に運用するための暗号化ネットワークプロトコルです
  - [openssh](https://openssh.com/) - SSH プロトコルによるリモートログインのための第一級の接続ツールです
- [RDP](https://en.wikipedia.org/wiki/Remote_Desktop_Protocol) - ネットワーク接続越しに他のコンピュータへ接続するためのグラフィカルインターフェースをユーザーに提供する、Microsoft が開発した独自プロトコルです
  - [xrdp](https://github.com/neutrinolabs/xrdp) - オープンソースの Remote Desktop Protocol サーバーです
- [RFB](https://github.com/rfbproto/rfbproto/blob/master/rfbproto.rst) - グラフィカルユーザーインターフェースへのリモートアクセスのためのシンプルなプロトコルです
  - [x11vnc](https://github.com/LibVNC/x11vnc) - X11 向けの VNC サーバーです
  - [TightVNC](https://www.tightvnc.com/) - 無料のリモートデスクトップアプリケーションです
- [Mosh](https://mosh.org/) - 対話的な SSH ターミナルの代替です
- メッシュ VPN
  - [Tailscale](https://tailscale.com/) - レガシーな VPN、SASE、PAM を置き換え、リモートチーム、マルチクラウド環境、CI/CD パイプライン、エッジ・IoT デバイス、AI ワークロードを接続する、ID ベースのゼロトラスト接続プラットフォームです
