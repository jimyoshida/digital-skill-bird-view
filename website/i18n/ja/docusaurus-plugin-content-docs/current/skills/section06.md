# 06 - AI・機械学習・LLM

## AI と機械学習の基礎

:::note[Relevant DSS-P Skills]

- 2\. データ整備・活用 > 2\.1 データ・AIの戦略的活用 > データ・AI理解・活用

:::

- AI パラダイム
  - [Symbolic AI](https://en.wikipedia.org/wiki/Symbolic_artificial_intelligence) - 問題、ロジック、検索の高レベルシンボリック(人間が読み取れる)表現に基づいた人工知能研究におけるすべてのメソッドの集合です
  - [Neuro-symbolic AI](https://en.wikipedia.org/wiki/Neuro-symbolic_AI) - ニューラル方式とシンボリック方式を統合して両方の強みを組み合わせる人工知能のサブフィールドで、生データから学習可能でありながら説明可能性と明示的推論を保持する AI システムを実現します
    - [AlphaGeometry](https://deepmind.google/discover/blog/alphageometry-an-olympiad-level-ai-system-for-geometry/) - ニューラル言語モデルとシンボリック演繹エンジンで構成されたニューロシンボリックシステムであり、複雑な幾何定理の証明を見つけるために協力して動作します
  - [Generative AI](https://en.wikipedia.org/wiki/Generative_artificial_intelligence) - 生成モデルを使用してテキスト、画像、ビデオ、またはその他の形式のデータを生成する人工知能のサブセットです
  - [Causal AI](https://en.wikipedia.org/wiki/Causal_AI) - 因果モデルを構築し、相関だけでなく因果関係を使用して推論できる人工知能の技法です
  - [Connectionism](https://en.wikipedia.org/wiki/Connectionism) - コネクショニストネットワークまたは人工ニューラルネットワークとして知られた数学モデルを利用する人間の精神プロセスと認識の研究へのアプローチです
  - [Expert system](https://en.wikipedia.org/wiki/Expert_system) - 人間の専門家の意思決定能力をエミュレートするコンピュータシステムです
  - [Artificial general intelligence](https://en.wikipedia.org/wiki/Artificial_general_intelligence) - ほぼすべての認知タスクにおいて人間の能力に匹敵または超える人工知能の仮説的なタイプです
- 基本概念
  - [Embedding](https://en.wikipedia.org/wiki/Embedding_(machine_learning)) - 複雑な高次元データを数値ベクトルの低次元ベクトル空間にマップする表現学習手法です
  - [Transfer learning](https://en.wikipedia.org/wiki/Transfer_learning) - あるタスクから得た知識を異なるが関連するタスクのパフォーマンス向上に再適用する機械学習手法です
  - [Mathematical model](https://en.wikipedia.org/wiki/Mathematical_model) - 数学的概念と言語を使用して具体的なシステムを抽象的に記述したものです
  - [Mathematical optimization](https://en.wikipedia.org/wiki/Mathematical_optimization) - 利用可能な選択肢のセットから、いくつかの基準に関して最良の要素を選択することです
  - [Gradient descent](https://en.wikipedia.org/wiki/Gradient_descent) - 微分可能な多変数関数を最小化するための1階反復アルゴリズムです
  - [Loss function](https://en.wikipedia.org/wiki/Loss_function) - イベントまたは1つ以上の変数の値を実数にマップし、直感的にイベントに関連する何らかのコストを表す関数です
  - [Pattern recognition](https://en.wikipedia.org/wiki/Pattern_recognition) - データから抽出されたパターンに基づいて観測値にクラスを割り当てるタスクです
  - [Feature engineering](https://en.wikipedia.org/wiki/Feature_engineering) - 教師あり機械学習と統計モデリングの前処理ステップで、生データをより効果的な入力セットに変換します
  - [Overfitting](https://en.wikipedia.org/wiki/Overfitting) - 特定のデータセットに密接に対応する分析の生成であり、追加データへのフィットまたは将来の観測の予測が信頼できない可能性があります
  - [Bias–variance tradeoff](https://en.wikipedia.org/wiki/Bias%E2%80%93variance_tradeoff) - モデルの複雑さ、予測精度、以前に見たことのないデータに対する予測能力の関係です
  - [Inductive bias](https://en.wikipedia.org/wiki/Inductive_bias) - 学習者が遭遇していない入力の出力を予測するために使用する仮定のセットです
  - [Curse of dimensionality](https://en.wikipedia.org/wiki/Curse_of_dimensionality) - 低次元設定では発生しない高次元空間でのデータ分析と整理の際に生じる現象です

## 機械学習

:::note[Relevant DSS-P Skills]

- 2\. データ整備・活用 > 2\.2 AI・データサイエンス > 機械学習・深層学習

:::

### 学習パラダイム

- [Supervised learning](https://en.wikipedia.org/wiki/Supervised_learning) - ラベル付きデータからアルゴリズムが学習する機械学習のパラダイムです
  - [Classification](https://en.wikipedia.org/wiki/Statistical_classification) - トレーニングデータセットに含まれる観測に基づいて、新しい観測がどの一連のカテゴリ(部分集団)に属するかを特定する問題です
    - [Logistic regression](https://en.wikipedia.org/wiki/Logistic_regression) - イベント発生の確率をモデル化する統計モデルで、イベントの対数オッズが1つ以上の独立変数の線形結合です
    - [Support vector machine](https://en.wikipedia.org/wiki/Support_vector_machine) - データを分類および回帰分析するために分析する関連学習アルゴリズムを備えた教師あり学習モデルのセットです
    - [Naive Bayes classifier](https://en.wikipedia.org/wiki/Naive_Bayes_classifier) - 機能間の強い(素朴な)独立性仮定でベイズの定理を適用した単純な確率分類器のファミリーです
    - [Decision tree learning](https://en.wikipedia.org/wiki/Decision_tree_learning) - 項目に関する観測からその目標値に関する結論に移行するために予測モデルとして決定木を使用する方法です
    - [Ensemble learning](https://en.wikipedia.org/wiki/Ensemble_learning) - 複数の学習アルゴリズムを使用して、構成する学習アルゴリズムのいずれからも単独では得られるより良い予測パフォーマンスを取得する方法です
      - [Random forest](https://en.wikipedia.org/wiki/Random_forest) - トレーニング時に多数の決定木を構築することによって機能する分類、回帰、およびその他のタスク用のアンサンブル学習方法です
    - [ROC curve](https://en.wikipedia.org/wiki/Receiver_operating_characteristic) - 判別閾値が変化すると二項分類器システムの診断能力を示すグラフィカルプロットです
  - [Regression](https://en.wikipedia.org/wiki/Regression_analysis) - 従属変数と1つ以上の独立変数の関係を推定するための統計プロセスのセットです
    - [Ordinary least squares](https://en.wikipedia.org/wiki/Ordinary_least_squares) - 線形回帰モデルで未知のパラメータを選択するための線形最小二乗法のタイプです
    - [Generalized linear model](https://en.wikipedia.org/wiki/Generalized_linear_model) - 通常の最小二乗回帰の柔軟な一般化です
    - [ARIMA model](https://en.wikipedia.org/wiki/Autoregressive_integrated_moving_average) - 自己回帰移動平均(ARMA)モデルの一般化で、時系列データに適合して、データをより良く理解したり、シリーズの将来のポイントを予測したりします
- [Unsupervised learning](https://en.wikipedia.org/wiki/Unsupervised_learning) - ラベルなしのデータセットを使用してモデルを学習し、以前のトレーニングなしでそのデータに対して機能させることが許可される機械学習のタイプです
  - [Principal component analysis](https://en.wikipedia.org/wiki/Principal_component_analysis) - 探索的データ分析、視覚化、およびデータ前処理でアプリケーションを持つ線形次元削減手法です
  - [K-means clustering](https://en.wikipedia.org/wiki/K-means_clustering) - n個の観測をk個のクラスタに分割することを目指すベクトル量子化の方法で、各観測は最も近い平均を持つクラスタに属します
- [Reinforcement learning](https://en.wikipedia.org/wiki/Reinforcement_learning) - インテリジェントエージェントが累積報酬の概念を最大化するために環境で行動を取る方法に関する機械学習の領域です
  - [Markov chain](https://en.wikipedia.org/wiki/Markov_chain) - 各イベントの確率が前のイベントで達成した状態に依存するイベントのシーケンスを説明する確率過程です
  - [Markov decision process](https://en.wikipedia.org/wiki/Markov_decision_process) - 結果が部分的にランダムで、部分的に意思決定者の管理下にある状況で意思決定をモデル化するための数学的フレームワークです
  - [Hidden Markov model](https://en.wikipedia.org/wiki/Hidden_Markov_model) - モデル化されているシステムが観測されない(隠された)状態を持つマルコフ過程と仮定される統計マルコフモデルです
  - [Multi-armed bandit](https://en.wikipedia.org/wiki/Multi-armed_bandit) - 固定限定リソースのセットを競合する(代替)選択肢間に割り当て、期待ゲインを最大化する必要がある問題です
  - [Value function](https://en.wikipedia.org/wiki/Value_function) - 数学的最適化と強化学習で使用される関数で、状態または行動に望ましさの尺度を割り当てます
- ML 概念と技法
  - [Hyperparameter](https://en.wikipedia.org/wiki/Hyperparameter_(machine_learning)) - 学習プロセスを制御するために使用される値を持つパラメータです
  - [Hyperparameter optimization](https://en.wikipedia.org/wiki/Hyperparameter_optimization) - 学習アルゴリズムの最適なハイパーパラメータセットを選択する問題です
  - [Early stopping](https://en.wikipedia.org/wiki/Early_stopping) - 勾配降下法などの反復的な方法で学習者をトレーニングする場合にオーバーフィッティングを回避するための正則化の形式です
  - [Cross-validation](https://en.wikipedia.org/wiki/Cross-validation_(statistics)) - 統計分析の結果が独立したデータセットにどの程度一般化されるかを評価するためのさまざまな同様のモデル検証手法です
  - [Anomaly detection](https://en.wikipedia.org/wiki/Anomaly_detection) - データの大部分と大幅に異なることで疑いを生じさせる稀なアイテム、イベント、または観測の特定です
    - [One-class classification](https://en.wikipedia.org/wiki/One-class_classification) - そのクラスのオブジェクトのみを含むトレーニングセットから主に学習することによって、すべてのオブジェクトの中から特定のクラスのオブジェクトを識別しようとする手法です
  - [Recommender system](https://en.wikipedia.org/wiki/Recommender_system) - ユーザーがアイテムに与える「評価」または「好み」を予測しようとする情報フィルタリングシステムです
- ML フレームワーク & プラットフォーム
  - [scikit-learn](https://scikit-learn.org/stable) - Python プログラミング言語用の無料のソフトウェア機械学習ライブラリです
    - [libsvm](https://www.csie.ntu.edu.tw/~cjlin/libsvm/) - サポートベクターマシンのライブラリです
  - [ML.NET](https://dotnet.microsoft.com/en-us/apps/machinelearning-ai/ml-dotnet) - .NET 開発者向けのオープンソースで、クロスプラットフォーム対応の機械学習フレームワークです
  - [Crab](https://muricoca.github.io/crab/) - 推奨システムを構築するための Python ライブラリです
  - [mlxtend](https://rasbt.github.io/mlxtend/) - 日々のデータサイエンスタスクのための便利なツールの Python ライブラリです
  - [Prophet](https://facebook.github.io/prophet/) - 時系列データの予測手順で、高速で完全に自動化された予測を提供します
  - 💲 [Azure Machine Learning](https://azure.microsoft.com/en-us/products/machine-learning/) - モデルをより速く構築してデプロイするためのエンタープライズグレードの機械学習サービスです
  - 💲 [Amazon SageMaker](https://aws.amazon.com/sagemaker/) - 完全に管理されたインフラストラクチャ、ツール、およびワークフローを備えた任意のユースケースに対して機械学習(ML)モデルを構築、トレーニング、およびデプロイするサービスです
  - [Gradio](https://www.gradio.app/) - フレンドリーなウェブインターフェイスを備えた機械学習モデルのデモを作成する最速の方法で、誰でもどこでも使用できます

## ニューラルネットワークと深層学習

:::note[Relevant DSS-P Skills]

- 2\. データ整備・活用 > 2\.2 AI・データサイエンス > 機械学習・深層学習

:::

- ニューラルネットワークの基礎
  - [Neural network](https://en.wikipedia.org/wiki/Neural_network_(machine_learning)) - データのパターンを見つけるための機械学習で使用される計算モデルです
  - [Tensor](https://en.wikipedia.org/wiki/Tensor_(machine_learning)) - 機械学習で使用される多次元配列として表現される数学的オブジェクトです
  - 活性化関数
    - [Sigmoid function](https://en.wikipedia.org/wiki/Sigmoid_function) - 特性的な「S」字形またはシグモイド曲線を持つ数学関数です
    - [Softmax function](https://en.wikipedia.org/wiki/Softmax_function) - K個の実数のベクトルをK個の可能な結果の確率分布に変換する関数です
  - [Backpropagation](https://en.wikipedia.org/wiki/Backpropagation) - フィードフォワードニューラルネットワークのトレーニングに広く使用されているアルゴリズムです
  - [Autoencoder](https://en.wikipedia.org/wiki/Autoencoder) - ラベルなしデータの効率的なコーディングを学習するために使用される人工ニューラルネットワークのタイプ(教師なし学習)です
  - [Vanishing gradient problem](https://en.wikipedia.org/wiki/Vanishing_gradient_problem) - 勾配ベースの学習方法とバックプロパゲーションでニューラルネットワークをトレーニングするときに発生する困難で、勾配がバックプロパゲートされると縮小します
- 深層学習の概念とトレーニング
  - [Deep Learning](https://en.wikipedia.org/wiki/Deep_learning) - 表現学習に基づいた人工ニューラルネットワークを使用した、より幅広い機械学習方法のファミリーの一部です
  - [Stochastic gradient descent](https://en.wikipedia.org/wiki/Stochastic_gradient_descent) - 適切な平滑性プロパティを持つ目的関数を最適化するための反復的な方法です
  - [Dropout (neural networks)](https://en.wikipedia.org/wiki/Dropout_(neural_networks)) - 訓練データに対する複雑な共適応を防ぐことで、人工ニューラルネットワークの過学習を低減する正則化手法です
  - [Fine tuning](https://en.wikipedia.org/wiki/Fine-tuning_(deep_learning)) - 転移学習へのアプローチで、事前学習されたモデルの重みが新しいデータで学習されます
  - [LoRA (machine learning)](https://en.wikipedia.org/wiki/Low-rank_adaptation) - 事前学習されたモデルを特定のタスクに適応させるためのパラメータ効率的なファインチューニング技法で、大幅に少ない計算リソースを使用します

### アーキテクチャ

- [Recurrent neural network](https://en.wikipedia.org/wiki/Recurrent_neural_network) - ノード間の接続がサイクルを作成できる人工ニューラルネットワークのクラスで、一部のノードからの出力が同じノードへの後続入力に影響を与えることができます
  - [LSTM](https://en.wikipedia.org/wiki/Long_short-term_memory) - 人工知能と深層学習のフィールドで使用される人工ニューラルネットワークで、フィードバック接続によって区別されます
- [Convolutional neural network (CNN)](https://en.wikipedia.org/wiki/Convolutional_neural_network) - 最も一般的に視覚画像を分析するために適用される人工ニューラルネットワークのクラスです
- [Attention](https://en.wikipedia.org/wiki/Attention_(machine_learning)) - ニューラルネットワークのコンテキストでの技法で、認知注意を模倣し、入力データの重要な部分を強化し、残りをフェードアウトします
  - [FlashAttention](https://github.com/Dao-AILab/flash-attention) - 高速でメモリ効率的な正確な注意メカニズムです
  - [Transformer](https://en.wikipedia.org/wiki/Transformer_(deep_learning_architecture)) - マルチヘッド注意メカニズムに基づいた深層学習アーキテクチャです
- [Mixture of experts](https://en.wikipedia.org/wiki/Mixture_of_experts) - 複数のエキスパートネットワーク(学習者)を使用して、問題空間を均一な領域に分割する機械学習技法です
- 深層学習フレームワーク & 可視化
  - [TensorFlow](https://www.tensorflow.org/) - 機械学習のためのエンドツーエンドのオープンソースプラットフォームです
    - [TFDS](https://www.tensorflow.org/datasets) - TensorFlow または Jax などの他の Python ML フレームワークで使用できるようにすぐに利用できるデータセットのコレクションです
    - [Keras](https://keras.io/) - 機械ではなく人間のために設計された Python ディープラーニング API です
  - [PyTorch](https://pytorch.org/) - 研究プロトタイピングから本番デプロイメントへのパスを加速するオープンソース機械学習フレームワークです
  - [ONNX Runtime](https://onnxruntime.ai/) - クロスプラットフォーム、高パフォーマンス機械学習モデル推論エンジンで、多様なハードウェアとプラットフォーム全体でトレーニングと推論の両方を加速します
  - [Windows ML](https://learn.microsoft.com/en-us/windows/ai/new-windows-ml/overview) - ONNX Runtime によって駆動され、NPU、GPU、CPU 全体でハードウェアアクセラレーションを使用したオンデバイスモデル実行を可能にする、Windows 用の統合された高パフォーマンスのローカル AI 推論フレームワークです
    - [WinML CLI](https://microsoft.github.io/winml-cli/latest/) - AI モデルを Windows ML 用に変換して最適化し、多様な Windows デバイス全体でハードウェア最適化デプロイメントを実現するコマンドラインツールです
  - [AttentionViz](https://catherinesyeh.github.io/attn-docs/) - Transformer 注意の全体ビューです
  - [BertViz](https://github.com/jessevig/bertviz) - NLP モデルの注意を視覚化するツールです
- 参考書
  - [Neural Networks and Deep Learning](http://neuralnetworksanddeeplearning.com/) - ニューラルネットワークと深層学習の背後にある核となるアイデアを説明する無料のオンライン書籍です
  - [Deep Learning, MIT Press](https://www.deeplearningbook.org/) - 学生と開発者が機械学習の分野、特に深層学習に入るのを支援することを目的とした教科書です

## 自然言語処理 (NLP)

:::note[Relevant DSS-P Skills]

- 2\. データ整備・活用 > 2\.2 AI・データサイエンス > 機械学習・深層学習

:::

- 言語学の基礎
  - [Computational linguistics](https://en.wikipedia.org/wiki/Computational_linguistics) - 自然言語の計算モデリング、および言語的な質問への適切な計算的アプローチの研究に関する学際的な分野です
  - [Morphology](https://en.wikipedia.org/wiki/Morphology_(linguistics)) - 言葉がどのように形成されるか、および同じ言語の他の言葉との関係の研究です
  - [Syntax](https://en.wikipedia.org/wiki/Syntax) - 言葉と形態素がどのようにして句や文などのより大きな単位を形成するかの研究である言語学的分野です
  - [Semantics](https://en.wikipedia.org/wiki/Semantics) - 言葉がどのように意味を獲得するか、および複雑な表現が構成要素から意味をどのように導出するかを調べる言語的意味の研究です
  - [Distributional semantics](https://en.wikipedia.org/wiki/Distributional_semantics) - 言語データの大規模サンプルの分布プロパティに基づいて言語アイテム間の意味的類似性を定量化および分類するための理論と方法を開発および研究する研究領域です
  - [Symbol grounding problem](https://en.wikipedia.org/wiki/Symbol_grounding_problem) - 抽象シンボルを、それらが表現する実世界のオブジェクトまたは概念に接続するという課題です

### 概念とベクトル表現

- [Okapi BM25](https://en.wikipedia.org/wiki/Okapi_BM25) - 検索エンジンが確率的検索フレームワークに基づいて特定の検索クエリへのドキュメントの関連性を推定するために使用されるランキング関数です
- [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance) - 一つを他に変更するために必要な単一文字編集の最小数を数えることによって 2 つのシーケンス間の差を測定するための文字列メトリックです
- [n-gram](https://en.wikipedia.org/wiki/N-gram) - 特定の順序で n 個の隣接するシンボルのシーケンスで、自然言語処理および計算生物学などの分野で使用されます
- [tf-idf (term frequency-inverse document frequency)](https://en.wikipedia.org/wiki/Tf%E2%80%93idf) - 情報検索で使用される統計尺度で、一般的な頻度を考慮して、コレクションまたはコーパスに対する相対的なドキュメント内の単語の重要性を評価します
- [Word embedding](https://en.wikipedia.org/wiki/Word_embedding) - 自然言語処理における単語の表現で、通常は単語の意味をエンコードする実数値ベクトルで、ベクトル空間で近い単語は意味で類似していると予想されます
  - [Word2vec](https://en.wikipedia.org/wiki/Word2vec) - 自然言語処理での単語の周囲の単語に基づいて意味に関する情報をキャプチャする単語のベクトル表現を取得するための技法です
  - [fastText](https://fasttext.cc/) - 効率的なテキスト分類と表現学習のためのライブラリです
  - [GloVe](https://nlp.stanford.edu/projects/glove/) - 単語表現のためのグローバルベクトルです
- [Sentence embedding](https://en.wikipedia.org/wiki/Sentence_embedding) - 有意な意味情報をエンコードする文の数値ベクトル表現です

- NLP ライブラリ
  - [Natural Language Toolkit](https://www.nltk.org/) - 人間言語データを操作する Python プログラムを構築するための主要なプラットフォームです
  - [Gensim](https://radimrehurek.com/gensim/) - ドキュメントを意味ベクトルとして表現するための無料のオープンソース Python ライブラリです
  - [Kuromoji](https://www.atilika.org/) - Java で記述されたオープンソース日本語形態素解析器です
  - [Kagome](https://github.com/ikawaha/kagome) - 純粋な golang で記述されたオープンソース日本語形態素解析器です
  - [mecab-python3](https://github.com/SamuraiT/mecab-python3) - 日本語テキスト用の MeCab 形態素解析器の Python ラッパーです
  - [jieba](https://github.com/fxsjy/jieba) - 中国語テキスト分割用の Python モジュールです

## コンピュータビジョン

:::note[Relevant DSS-P Skills]

- 2\. データ整備・活用 > 2\.2 AI・データサイエンス > 機械学習・深層学習

:::

### 画像処理と基礎

- [OpenCV](https://opencv.org/) - オープンソースのコンピュータビジョンおよび機械学習ソフトウェアライブラリです
  - [GoCV](https://gocv.io/) - OpenCV 4 のバインディングを備えた Go プログラミング言語用のパッケージです
- [Pillow](https://github.com/python-pillow/Pillow) - 画像処理機能を追加する Python 画像処理ライブラリです
- [scikit-image](https://scikit-image.org/) - Python での画像処理用のアルゴリズムのコレクションです
- [ImageMagick](https://imagemagick.org/) - デジタル画像を作成、編集、構成、または変換するためのツールです

### 3D ビジョン & ジオメトリ

- [Open3D](http://www.open3d.org/) - 3D データを扱うソフトウェアの迅速な開発をサポートするオープンソースライブラリです
- [Point Cloud Library (PCL)](https://pointclouds.org/) - 2D/3D 画像とポイントクラウド処理用のスタンドアロンで大規模なオープンソースプロジェクトです

### 物体検出と認識

- 🔒 [YOLO (You Only Look Once)](https://docs.ultralytics.com/) - リアルタイム検出用に設計されたエンドツーエンドのオブジェクト検出モデルです
- [Detectron2](https://github.com/facebookresearch/detectron2) - Facebook の次世代ライブラリで、最先端の検出およびセグメンテーションアルゴリズムを提供します
- [Mask R-CNN](https://github.com/matterport/Mask_RCNN) - Faster R-CNN の拡張で、バウンディングボックスと並行してオブジェクトマスク予測用のブランチを追加します

### ポーズと身体推定

- [MediaPipe](https://mediapipe.dev/) - ポーズ推定、手の追跡、顔検出などの知覚タスク用のマルチモーダル ML パイプラインを構築するためのフレームワークです
- [OpenPose](https://github.com/CMU-Perceptual-Computing-Lab/openpose) - リアルタイムマルチユーザーキーポイント検出が可能なライブラリです

### 顔と生体認証認識

- [face_recognition](https://github.com/ageitgey/face_recognition) - Python またはコマンドラインから顔を認識および操作する Python ライブラリです

### OCR とテキスト認識

- [Tesseract OCR](https://github.com/tesseract-ocr/tesseract) - オープンソーステキスト認識(OCR)エンジンです
  - [gosseract OCR](https://github.com/otiai10/gosseract) - Tesseract C++ ライブラリを使用した OCR(光学文字認識)用の Go パッケージです
- [EasyOCR](https://github.com/JaidedAI/EasyOCR) - 80 以上のサポートされている言語とすべての一般的なスクリプトを備えた、すぐに使用できる OCR です
- [OCRmyPDF](https://ocrmypdf.readthedocs.io/en/latest/) - PDF ファイルに検索可能な OCR テキストレイヤーを追加するツールです
- オープンモデル
  - [LLaVA](https://llava-vl.github.io/) - ビジョンエンコーダと Vicuna を結合した、エンドツーエンドでトレーニングされた新しい大規模マルチモーダルモデルで、汎用的な視覚的および言語理解を実現し、マルチモーダル GPT-4 の精神を模倣した印象的なチャット機能を実現し、Science QA で最先端の精度を設定します

## 音声とオーディオ処理

:::note[Relevant DSS-P Skills]

- 2\. データ整備・活用 > 2\.2 AI・データサイエンス > 機械学習・深層学習

:::

### 自動音声認識 (ASR)

- [Kaldi](https://kaldi-asr.org/) - 音響モデリングと言語モデリング用の C++ で記述された音声認識ツールキットです
- [DeepSpeech](https://github.com/mozilla/DeepSpeech) - 深層学習で駆動されるスピーチテキスト変換のオープンソースエンジンです
- [wav2vec 2.0](https://huggingface.co/docs/transformers/model_doc/wav2vec2) - 音声認識事前学習の自己教師あり学習アプローチです
- オープンモデル
  - [Whisper](https://github.com/openai/whisper) - 大規模な弱い監督を通じてトレーニングされた堅牢な音声認識モデルです

### テキスト音声変換 (TTS) & 音声合成

- [gTTS (Google Text-to-Speech)](https://gtts.readthedocs.io/) - Google のテキストから音声への API とインターフェイスする Python ライブラリおよび CLI ツールです
- [Tacotron 2](https://github.com/NVIDIA/tacotron2) - 注意を持つシーケンスツーシーケンスモデルに基づいた音声合成用のニューラルネットワークアーキテクチャです

### オーディオ処理とツール

- [librosa](https://librosa.org/) - オーディオおよび音楽分析用の Python ライブラリです
- [PyAudio](https://people.csail.mit.edu/hubert/pyaudio/) - クロスプラットフォームオーディオ I/O ライブラリである PortAudio の Python バインディングです
- [SoX (Sound eXchange)](https://sox.sourceforge.net/) - 音声処理プログラムのスイスアーミーナイフです
- [Praat](https://www.fon.hum.uva.nl/praat/) - 音声学での音声分析用のソフトウェアプログラムです

### 音声活動検出 & オーディオ強化

- [webrtcvad](https://github.com/wiseman/py-webrtcvad) - WebRTC ボイスアクティビティディテクタの Python ラッパーです
- [SileroVAD](https://github.com/snakers4/silero-vad) - 大規模なデータセットでトレーニングされたオープンソースボイスアクティビティディテクタです

### スピーカー識別と音声生体認証

- [Resemblyzer](https://github.com/resemble-ai/Resemblyzer) - スピーカーエンベディングベースのスピーカー認識用の Python パッケージです
- [PyannoteAudio](https://github.com/pyannote/pyannote-audio) - スピーカーダイアライゼーションとスピーカー変化検出用の Python ツールキットです

## 生成 AI & 大規模言語モデル (LLMs)

:::note[Relevant DSS-P Skills]

- 2\. データ整備・活用 > 2\.1 データ・AIの戦略的活用 > AI実装・運用

:::

- 基本概念
  - [Vision Language Models (VLM)](https://huggingface.co/blog/vlms) - 画像とテキストを理解できる興味深いクラスのモデルです
  - [Diffusion model](https://en.wikipedia.org/wiki/Diffusion_model) - 段階的なノイズプロセスを逆にして新しいデータを生成することを学習する機械学習の潜在変数生成モデルのクラスです
  - [Multimodal learning](https://en.wikipedia.org/wiki/Multimodal_learning) - テキスト、オーディオ、画像、またはビデオなどの多様なデータタイプを組み合わせて処理し、複雑な情報のより全体的な理解を実現する深層学習アプローチです

### モデルプロバイダーとアグリゲーター

- 💲 [Anthropic](https://www.anthropic.com/api) - Anthropic の Claude モデルへのアクセスを提供する API です
- 💲 [OpenAI](https://platform.openai.com/) - OpenAI のモデルでアプリケーションを構築するためのプラットフォームです
- 🪙 [Gemini Developer APIs](https://ai.google.dev/gemini-api/docs) - Google の最新 Gemini モデルへのアクセスを提供する API です
- 🪙 [Hugging Face Serverless Inference API](https://huggingface.co/docs/api-inference/index) - Hugging Face Hub でホストされているモデルで推論を許可する API です
- 🪙 [OpenRouter](https://openrouter.ai/) - LLM 向けの統合インターフェイスです
- オープンモデル
  - [Llama](https://www.llama.com/) - どこでもファインチューニング、蒸留、デプロイできるオープンソース AI モデルです
  - [Gemma](https://deepmind.google/models/gemma/) - Gemini モデルの作成に使用されたのと同じ研究と技術から構築された軽量で最先端のオープンモデルのファミリーです
  - 🪙 [Mistral](https://mistral.ai/models) - オープンソースおよび商用の生成 AI モデルのファミリーです
  - [OLMo](https://allenai.org/olmo) - 最先端で本当にオープンな言語モデルと言語モデルの科学を構築および研究するためのフレームワークです
  - [Kimi K3](https://github.com/MoonshotAI/Kimi-K3) - 2.8 兆パラメータと 100 万トークンのコンテキストウィンドウを備えた、オープンウェイトのネイティブマルチモーダルエージェントモデルです
  - [DeepSeek V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) - 1.6 兆パラメータ (アクティブ 490 億) と 100 万トークンのコンテキストウィンドウを備えた、MIT ライセンスでオープンウェイトの Mixture-of-Experts (MoE) 言語モデルです

### 標準とモデル形式

- [GGUF](https://github.com/ggml-org/ggml/blob/master/docs/gguf.md) - GGML および GGML ベースのエグゼキューター推論用のモデルを保存するためのファイル形式です
- [ONNX](https://onnx.ai/) - 機械学習モデルを表すために構築されたオープン形式です
- [Safetensors](https://huggingface.co/docs/safetensors/index) - テンサーを安全に保存するためのシンプルな形式です

### モデルインターフェース SDK とクライアント

- ライブラリ & SDK
  - [Go OpenAI](https://github.com/sashabaranov/go-openai) - OpenAI API の Go クライアントライブラリです
  - [Google Gen AI SDK](https://github.com/googleapis/python-genai) - Google の生成 AI モデル用の Python SDK です
  - [Instructor](https://python.useinstructor.com/) - 大規模言語モデル(LLM)から構造化された検証済みデータを抽出するために設計された Python ライブラリです
  - [OmniAI](https://github.com/ksylvest/omniai) - LLM とのインターフェイスのための最小限のライブラリです
  - [Outlines](https://dottxt-ai.github.io/outlines/latest/) - JSON スキーマ、正規表現、またはコンテキストフリー文法への準拠を強制することにより、任意の大規模言語モデルからの生成中に構造化出力を保証するライブラリです
  - [Ruby OpenAI](https://github.com/alexrudall/ruby-openai) - OpenAI API 用の Ruby ラッパーです
  - [RubyLLM](https://rubyllm.com/) - GPT、Claude、Gemini など向けの 1 つの美しい Ruby API です

### 技術と方法

- [Retrieval-augmented generation (RAG)](https://en.wikipedia.org/wiki/Retrieval-augmented_generation) - 大規模言語モデルが外部データソースから新しい情報を取得および組み込むことを可能にする技法です
  - [dsRAG](https://github.com/D-Star-AI/dsRAG) - 非構造化データ用の高パフォーマンス検索エンジンです
- モデル圧縮
  - [Knowledge Distillation](https://en.wikipedia.org/wiki/Knowledge_distillation) - 大規模な機械学習モデルから小さいモデルへの知識転送のプロセスです
  - [AWQ (Activation-aware Weight Quantization)](https://github.com/mit-han-lab/llm-awq) - LLM 圧縮と加速のための効率的で正確な低ビット重み量子化(INT3/4)です
  - [Pruning (artificial neural network)](https://en.wikipedia.org/wiki/Pruning_(artificial_neural_network)) - 既存の人工ニューラルネットワークからパラメータを削除する慣行です
- [GraphRAG](https://microsoft.github.io/graphrag/) - LLM の力を使用して非構造化テキストから有意で構造化されたデータを抽出するように設計されたデータパイプラインおよび変換スイートです
- [Prompt Engineering Guide](https://www.promptingguide.ai/) - 大規模言語モデルを効果的に利用し、AI エージェントを構築するためのプロンプトエンジニアリング技法の学習と適用のための包括的なリソースです
- [CRAFT framework](https://www.geeky-gadgets.com/ai-prompt-writing/) - コンテキスト、役割、アクション、形式、トーンを定義することで、明確で正確な AI プロンプトを作成するための構造化された方法です

### 開発ツール & ユーティリティ

- 🔒 [LiteLLM](https://docs.litellm.ai) - 統一された OpenAI 入出力形式を使用して 100 以上の大規模言語モデル(LLM)を呼び出すことができる Python SDK および AI ゲートウェイ(プロキシ)です
- [RedCandle](https://github.com/scientist-labs/red-candle) - Rust の Candle を使用してローカルで最先端の言語モデルを実行するための Ruby Gem です
- 🔒 [Unsloth AI](https://unsloth.ai/) - 大規模言語モデル(LLM)を簡単にファインチューニングおよびトレーニングして、より速く、より効率的な AI トレーニングを実現するためのツールおよびサービスを提供するプラットフォームです

### ベンチマークと分析

- [ARC-AGI](https://arcprize.org/arc-agi) - 人間には直感的であるが AI システムには困難な新しいタスクでのスキル取得効率をテストすることで、人工汎用知能への進歩を測定するベンチマークです
- [OSWorld](https://os-world.github.io/) - Ubuntu、Windows、macOS にわたってウェブアプリケーション、デスクトップソフトウェア、クロスアプリケーションワークフロー全体にまたがる 369 のオープンエンドタスクでマルチモーダルエージェントを評価するためのスケーラブルな実際のコンピュータ環境です
- [FrontierMath](https://epoch.ai/frontiermath) - 専門の数学者が作成した非常に困難な数学的問題から構成される AI ベンチマークで、学部レベルから研究レベルの難易度の範囲から非常に困難な数学的問題を含むオープン研究問題を含みます
- [MRCR v2](https://llm-stats.com/benchmarks/mrcr-v2) - LLM が拡張マルチターン会話履歴から情報を検索および使用する能力を評価するマルチラウンドコンテキスト呼び出しベンチマークです
- [Artificial Analysis](https://artificialanalysis.ai/) - AI モデルと API プロバイダーの独立した分析で、ユーザーが AI ランドスケープを理解するのに役立ちます
- [Arena](https://arena.ai/) - 大規模言語モデル(LLM)とビジョン言語モデル(VLM)を含む様々な AI モデルをベンチマークして比較するために設計されたプラットフォームです

## エージェント AI

:::note[Relevant DSS-P Skills]

- 2\. データ整備・活用 > 2\.1 データ・AIの戦略的活用 > データ・AI活用戦略設計
- 2\. データ整備・活用 > 2\.1 データ・AIの戦略的活用 > AI実装・運用

:::

### 標準とプロトコル

- [AGENTS.md](https://agents.md/) - AI エージェントを定義して実行するためのオープン標準です
- [Agent Skills](https://agentskills.io/home) - エージェントに新しい機能と専門知識を付与するためのシンプルでオープンな形式です
- [llms.txt](https://llmstxt.org/) - LLM が推論時に Web サイトを利用するのに役立つ情報を提供するため、/llms.txt ファイルの使用を標準化する提案です
- [Model Context Protocol (MCP)](https://modelcontextprotocol.io/docs/getting-started/intro) - AI アプリケーションを外部システムに接続し、データソース、ツール、ワークフローへのアクセスを可能にするためのオープンソース標準です
- [A2A Protocol](https://github.com/google/A2A) - ウェブアプリケーションと AI エージェント間の双方向通信を可能にするプロトコルです
- [Agent Name Service (ANS)](https://genai.owasp.org/resource/agent-name-service-ans-for-secure-al-agent-discovery-v1-0/) - 公開鍵インフラストラクチャ(PKI)を活用した安全な DNS に着想を得た AI エージェント発見のためのフレームワークで、通信用の構造化 JSON スキーマ、および A2A、MCP、ACP プロトコルをサポートするプロトコルアダプタレイヤーを備えています
- [GitAgent](https://gitagent.sh/) - Git リポジトリ内のバージョン管理されたファイルのセットとして AI エージェントを定義できるフレームワークに依存しない標準です
- [AG-UI (Agent–User Interaction Protocol)](https://docs.ag-ui.com/) - AI エージェントがユーザー向けアプリケーションに接続する方法を標準化するオープンで軽量なイベントベースのプロトコルです

### エージェントパターンと技法

- [ReAct Prompting](https://github.com/ysymyth/ReAct) - 言語モデルで推論と行動を相乗効果させるプロンプト技法です
  - Reason、Act、Thought、Observation
- [Recursive Language Models](https://alexzhang13.github.io/blog/2025/rlm/) - 言語モデル(LM)が無制限の長さの入力コンテキストを分解して再帰的に相互作用できる推論戦略です
- [Effective Context Engineering for AI Agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) - LLM 推論中に最適なトークン(情報)セットをキュレーションおよび維持するための戦略のセット(プロンプト以外の他の情報を含みます)です

### エージェントオーケストレーション & フレームワーク

- オーケストレーションフレームワーク
  - [Agno](https://docs.agno.com/) - マルチエージェントフレームワーク、ランタイム、およびコントロールプレーンです
  - [crewAI](https://www.crewai.com/open-source) - 開発者がハイパフォーマンス AI エージェントを簡単かつスケーリングして調整できるようにするオープンソースのマルチエージェント調整フレームワークです
  - [Deep Agents](https://github.com/langchain-ai/deepagents) - LLM を使用したエージェントとアプリケーションの構築を開始する最も簡単な方法で、タスク計画、コンテキスト管理用ファイルシステム、サブエージェント生成、および長期メモリ用の組み込み機能を備えています
  - [Hermes Agent](https://github.com/nousresearch/hermes-agent) - 経験からスキルを作成し、使用中に改善し、永続的なメモリを維持し、セッション全体でユーザーの深まるモデルを構築する組み込み学習ループを備えた自己改善 AI エージェントです
  - [LangGraph](https://www.langchain.com/langgraph) - LLM を使用してステートフルなマルチアクターアプリケーションを構築するためのライブラリで、エージェントランタイムの循環グラフを作成します
  - [Mastra](https://mastra.ai/) - ワークフロー、RAG、メモリ、および可観測性の組み込みサポートを備えた、AI エージェントを構築、反復、デプロイするためのオールインワンのオープンソース TypeScript フレームワークです
  - [Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/) - 技術的進歩とともに進化する堅牢で将来性のある Agentic AI ソリューションを構築するためのリソースです
  - [Microsoft 365 Agents SDK](https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/) - Microsoft 365 Copilot、Teams、サードパーティプラットフォーム、カスタムアプリケーション、ウェブサイト全体でシームレスに動作するフルスタックのマルチチャネルエージェントを構築するための包括的なフレームワークです
- アプリケーションフレームワーク
  - [Chainlit](https://docs.chainlit.io/) - 本番対応の会話型 AI を構築するためのオープンソース Python パッケージです
  - [DSPy](https://dspy.ai/) - 構造化コードでの高速反復を可能にし、AI プログラムを言語モデルの効果的なプロンプトと重みに変換するアルゴリズムを提供する、モジュラー AI ソフトウェア構築用の宣言的フレームワークです
  - [Genkit](https://genkit.dev/) - エージェント、RAG、ツール使用の統合サポートを備えた、フルスタックアプリケーション構築用の AI フレームワークです
  - [LangChain](https://www.langchain.com/) - 大規模言語モデルを使用したアプリケーション開発のためのフレームワークです
  - [LlamaIndex](https://www.llamaindex.ai/) - 信頼できる低および高レベルの抽象化を備えた GenAI アプリケーションの本番投入までの時間を急速に加速する開発者優先のエージェントフレームワークです
    - 🪙 [LlamaParse](https://www.llamaindex.ai/llamaparse) - 複雑なレイアウト、表、グラフ、手書き、チェックボックス、および画像をきれいな markdown に変換するドキュメントパーサーです
  - [PydanticAI](https://pydantic.dev/pydantic-ai) - 型安全性と構造化出力を強調する生成 AI を使用した本番グレードアプリケーション構築用の Python エージェントフレームワークです

### エージェント開発キット (ADK)

- [Agent Package Manager (APM)](https://microsoft.github.io/apm/) - スキル、プロンプト、および指示の単一の情報源を提供する AI エージェント向けのオープンソース依存関係マネージャーです
- [Agent Development Kit (ADK)](https://google.github.io/adk-docs/) - AI エージェント開発とデプロイメント向けの柔軟でモジュラーなフレームワークです
- [Claude Agent SDK](https://platform.claude.com/docs/en/agent-sdk/overview) - Claude Code を強力にするのと同じツール、エージェントループ、コンテキスト管理を提供する Agent SDK で、Python と TypeScript でプログラム可能です
- [Claude Agent Skills](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview) - 命令、メタデータ、およびオプションのリソースをパッケージ化することで、エージェントの機能を拡張するモジュラー機能です
- [Fantasy](https://github.com/charmbracelet/fantasy) - 単一の API を通じて複数のプロバイダーとモデルで AI エージェントを構築するための Go ライブラリです
- [Go Micro](https://go-micro.dev/) - 1 つのランタイムでエージェント、サービス、およびワークフローを構築できる Go 用のエージェントハーネスです
- [Microsoft 365 Agents Toolkit](https://learn.microsoft.com/en-us/microsoft-365/developer/overview-m365-agents-toolkit) - Microsoft 365 Copilot、Teams、Office、ウェブ、およびその他のサードパーティメッセージングチャネル全体で動作するエンタープライズ対応のエージェントおよびアプリを構築するためのツールスイートです
- [OpenAI Agents SDK](https://developers.openai.com/api/docs/guides/agents-sdk) - モデルが追加のコンテキストとツールを使用し、特殊なエージェントに手渡し、結果をストリーミングできるエージェント的アプリケーション構築用のライブラリです

### サポートサービス & プラットフォーム

- エージェントプラットフォームとサービス
  - 💲 [Foundry Agent Service](https://azure.microsoft.com/en-us/products/ai-foundry/agent-service) - エンタープライズ変革のためのガバナンスと可観測性を備えた AI エージェントを安全に設計、デプロイ、スケールするためのプラットフォームです
  - [Moltbook](https://www.moltbook.com/) - AI エージェントが共有、議論、投票するソーシャルネットワークです
- 相互運用性
  - [FastMCP](https://github.com/jlowin/fastmcp) - Model Context Protocol(MCP)サーバーとクライアントをビルドするための Python フレームワークです
- 事前構築済みエージェント & コレクション
  - [agency-agents](https://github.com/msitarzewski/agency-agents) - ユニークな音声、証明されたワークフロー、測定可能な成果物を持つ特殊な専門家として機能するように設計された、精密に作成された AI エージェント個性の成長するコレクションです
- メモリシステム
  - 🪙 [Mem0](https://mem0.ai/) - LLM アプリケーション向けの AI メモリレイヤーで、パーソナライズされた AI エクスペリエンスの提供を目指しています
  - [Graphiti](https://www.getzep.com/product/open-source/) - 時間認識コンテキストグラフを構築するためのオープンソース Python フレームワークです
  - [Hindsight](https://hindsight.vectorize.io/) - AI エージェント専用に設計されたメモリシステムで、マルチ戦略検索と自動知識統合を使用して複数のセッション全体で情報を保持、リコール、および推論できるようにしています
- 検索とデータ抽出
  - 🪙 [Firecrawl](https://www.firecrawl.dev/) - URL を取得し、クロールして、クリーンな markdown または構造化データに変換する API サービスです
  - 🪙 [Tavily Search](https://tavily.com/) - LLM 向けに最適化された検索エンジンで、効率的で迅速で永続的な検索結果を目的としています
  - 🔒 [SWIRL AI Search](https://swirlaiconnect.com/) - 100 以上のエンタープライズプラットフォームに接続し、コストのかかるデータ変換や移行を必要とせずに、データおよびドキュメントサイロ全体でリアルタイムの可視性を提供するフェデレーション AI 検索ソリューションです
- セキュリティツール
  - [skill-scanner](https://github.com/cisco-ai-defense/skill-scanner) - AI Agent Skills 向けのベストエフォート型セキュリティスキャナーで、プロンプトインジェクション、データ流出、悪意あるコードパターンを検出します
  - [Toxic Flow Analysis (TFA)](https://invariantlabs.ai/blog/toxic-flow-analysis) - AI アプリケーションの攻撃面を削減し、間接的なプロンプトインジェクションおよびその他の MCP 攻撃ベクトルを軽減するための初の原理的アプローチです

## MLOps & LLMOps

:::note[Relevant DSS-P Skills]

- 3\. テクノロジー > 3\.1 ソフトウェア開発 > SREプロセス
- 2\. データ整備・活用 > 2\.1 データ・AIの戦略的活用 > AI実装・運用

:::

### ML ライフサイクルと MLOps プラットフォーム

- ML ライフサイクルツール
  - [DVC](https://dvc.org/) - 機械学習プロジェクト用のオープンソースデータバージョン管理です
  - [CML](https://cml.dev/) - 機械学習プロジェクトで継続的インテグレーション & デリバリー(CI/CD)を実装するためのオープンソースツールです
  - [MLFlow](https://mlflow.org/) - ML ライフサイクル管理のためのオープンソースプラットフォームで、実験、再現性、デプロイメント、および中央モデルレジストリを含みます
  - [KubeFlow](https://www.kubeflow.org/) - Kubernetes 用機械学習ツールキットで、Kubernetes 上の ML ワークフローのデプロイメントをシンプル、ポータブル、スケーラブルにすることに専念しています
  - 🪙 [Weights & Biases](https://wandb.ai/site) - AI エージェント、アプリケーション、モデルを自信を持って構築するための AI 開発者プラットフォームです
  - 🔒 [ZenML](https://www.zenml.io/) - トレーニングパイプラインからエージェント評価まで、ローカルから Kubernetes へのオーケストレーション、バージョン管理、ガバナンス用のオープンソースフレームワークです
  - [BentoML](https://www.bentoml.com/) - 任意のモデルを任意の場所にデプロイするためのオープンソースフレームワークで、カスタマイズされた最適化、効率的なスケーリング、および合理化された操作を備えています
- 管理対象 MLOps プラットフォーム
  - 💲 [Microsoft Foundry](https://ai.azure.com/) - AI アプリケーションとエージェントを構築、最適化、管理するための統合された相互運用可能なプラットフォームで、ビジネスコンテキストを理解し、ビジネスインパクトを提供します
  - 💲 [Vertex AI](https://cloud.google.com/vertex-ai) - ML モデルと AI アプリケーションをトレーニングしてデプロイするための機械学習(ML)プラットフォームです
  - 💲 [Nebius](https://nebius.com/) - AI および機械学習ワークロード向けの目的別インフラストラクチャを提供する専門 AI クラウドプラットフォームです
  - 💲 [Amazon SageMaker](https://aws.amazon.com/sagemaker/) - データ、分析、AI を一堂に集め、スケールでモデルを構築、トレーニング、デプロイするための完全管理型サービスです

### LLM サービングとランタイム

- ローカル LLM ランタイム
  - [LM Studio](https://lmstudio.ai/) - コンピュータでローカルに LLM を開発し、実験するためのデスクトップアプリです
  - [LocalAI](https://localai.io/) - 無料のオープンソース OpenAI 代替です
  - [Ollama](https://ollama.com/) - LLM をローカルにデプロイして管理するために設計されたツールです
  - [llama.cpp](https://github.com/ggml-org/llama.cpp) - Apple Silicon から NVIDIA GPU まで、ハードウェア全体で LLM 推論を実行するための依存関係なし C/C++ 実装です
  - [Jan](https://jan.ai/) - コンピュータでローカルに AI モデルを実行する ChatGPT 代替のオープンソースです
- 本番サービングエンジン
  - [vLLM](https://vllm.ai/) - 大規模言語モデル(LLM)の高スループットでメモリ効率的な推論とサービングエンジンです
  - [Hugging Face TGI](https://github.com/huggingface/text-generation-inference) - テキスト生成推論用の Rust、Python、gRPC サーバーで、Hugging Chat と Inference API を強力にするために本番環境で使用されます
  - [SGLang](https://github.com/sgl-project/sglang) - 大規模言語モデルとマルチモーダルモデル向けの高パフォーマンスサービングフレームワークです
  - [KServe](https://kserve.github.io/website/) - Kubernetes 上での機械学習モデルの標準化された分散推論プラットフォームで、スケーラブルな、マルチフレームワークデプロイメント用です
  - 🪙 [Modular MAX](https://www.modular.com/) - GPU カーネルから API エンドポイントまで、多様なハードウェア全体で完全な最適化を提供する統合 AI 推論プラットフォームです

### LLMOps & 可観測性

- 管理対象モデルサービス
  - 💲 [Amazon Bedrock](https://aws.amazon.com/bedrock/) - 高パフォーマンスな基盤モデルの選択肢を提供する完全管理型サービスです
    - 💲 [Amazon Bedrock Agents](https://aws.amazon.com/bedrock/agents/) - 基盤モデルの推論、API、およびデータを使用してユーザーリクエストを分割し、関連情報を収集し、タスクを効率的に完了するサービスです
- エージェント可観測性
  - [Mission Control](https://mc.builderz.dev/) - AI エージェントのフリートを管理、監視、調整するための中央オペレーションコントロールプレーンです
- LLM 可観測性 & 評価
  - 🔒 [Langfuse](https://langfuse.com/) - LLM アプリケーションをデバッグおよび改善するためのトレース、評価、プロンプト管理、メトリクスを提供するオープンソース LLM エンジニアリングプラットフォームです
  - [OpenLIT](https://openlit.io/) - LLM および GenAI 可観測性のためのオープンソース OpenTelemetry ネイティブツールです
  - 🪙 [LangSmith](https://www.langchain.com/langsmith) - LLM アプリケーションの開発、協調、テスト、デプロイメント、監視のための統合 DevOps プラットフォームです
  - 🔒 [Helicone](https://www.helicone.ai/) - 開発者が生成 AI アプリケーションを監視および最適化するための、オープンソース LLM 可観測性プラットフォームです
  - [Arize Phoenix](https://phoenix.arize.com/) - LLM 向けのオープンソース AI 可観測性および評価プラットフォームです
  - 🪙 [Braintrust](https://www.braintrust.dev/) - LLM でビルドする開発者向けの評価および可観測性プラットフォームを提供するエンタープライズ AI プラットフォームです
  - [Ragas](https://docs.ragas.io/) - AI アプリケーションの体感チェックから体系的な評価ループへの移行を支援するライブラリです
  - [DeepEval](https://www.deepeval.com/) - 研究を支持するメトリクスを備えた LLM 評価フレームワークで、CI/CD で実行される pytest ネイティブ評価です
