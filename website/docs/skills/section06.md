# 06 - AI, Machine Learning & LLM

## Foundations of AI & Machine Learning

:::note[Relevant DSS-P Skills]

- 2\. Data Preparation & Utilization > 2\.1 Strategic Utilization of Data and AI > Understanding and Utilization of Data and AI

:::

- AI Paradigms
  - [Symbolic AI](https://en.wikipedia.org/wiki/Symbolic_artificial_intelligence) - The collection of all methods in artificial intelligence research that are based on high-level symbolic (human-readable) representations of problems, logic and search
  - [Neuro-symbolic AI](https://en.wikipedia.org/wiki/Neuro-symbolic_AI) - A subfield of artificial intelligence that integrates neural methods with symbolic methods to combine the strengths of both approaches, resulting in AI systems that can be trained from raw data while preserving explainability and explicit reasoning
    - [AlphaGeometry](https://deepmind.google/discover/blog/alphageometry-an-olympiad-level-ai-system-for-geometry/) - A neuro-symbolic system made up of a neural language model and a symbolic deduction engine, which work together to find proofs for complex geometry theorems
  - [Generative AI](https://en.wikipedia.org/wiki/Generative_artificial_intelligence) - A subset of artificial intelligence that uses generative models to produce text, images, videos, or other forms of data
  - [Causal AI](https://en.wikipedia.org/wiki/Causal_AI) - A technique in artificial intelligence that builds a causal model and can thereby make inferences using causality rather than just correlation
  - [Connectionism](https://en.wikipedia.org/wiki/Connectionism) - An approach to the study of human mental processes and cognition that utilizes mathematical models known as connectionist networks or artificial neural networks
  - [Expert system](https://en.wikipedia.org/wiki/Expert_system) - A computer system emulating the decision-making ability of a human expert
  - [Artificial general intelligence](https://en.wikipedia.org/wiki/Artificial_general_intelligence) - A hypothetical type of artificial intelligence that matches or surpasses human capabilities across virtually all cognitive tasks
- Core Concepts
  - [Embedding](https://en.wikipedia.org/wiki/Embedding_(machine_learning)) - A representation learning technique that maps complex, high-dimensional data into a lower-dimensional vector space of numerical vectors
  - [Transfer learning](https://en.wikipedia.org/wiki/Transfer_learning) - A machine learning technique where knowledge gained from one task is reapplied to improve performance on a different but related task
  - [Mathematical model](https://en.wikipedia.org/wiki/Mathematical_model) - An abstract description of a concrete system using mathematical concepts and language
  - [Mathematical optimization](https://en.wikipedia.org/wiki/Mathematical_optimization) - The selection of a best element, with regard to some criteria, from some set of available alternatives
  - [Gradient descent](https://en.wikipedia.org/wiki/Gradient_descent) - A first-order iterative algorithm for minimizing a differentiable multivariate function
  - [Loss function](https://en.wikipedia.org/wiki/Loss_function) - A function that maps an event or values of one or more variables onto a real number intuitively representing some cost associated with the event
  - [Pattern recognition](https://en.wikipedia.org/wiki/Pattern_recognition) - The task of assigning a class to an observation based on patterns extracted from data
  - [Feature engineering](https://en.wikipedia.org/wiki/Feature_engineering) - A preprocessing step in supervised machine learning and statistical modeling which transforms raw data into a more effective set of inputs
  - [Overfitting](https://en.wikipedia.org/wiki/Overfitting) - The production of an analysis that corresponds too closely to a particular set of data, and may therefore fail to fit additional data or predict future observations reliably
  - [Bias–variance tradeoff](https://en.wikipedia.org/wiki/Bias%E2%80%93variance_tradeoff) - The relationship between a model's complexity, the accuracy of its predictions, and how well it can make predictions on previously unseen data
  - [Inductive bias](https://en.wikipedia.org/wiki/Inductive_bias) - The set of assumptions that the learner uses to predict outputs of given inputs that it has not encountered
  - [Curse of dimensionality](https://en.wikipedia.org/wiki/Curse_of_dimensionality) - The phenomena that arise when analyzing and organizing data in high-dimensional spaces that do not occur in low-dimensional settings

## Machine Learning

:::note[Relevant DSS-P Skills]

- 2\. Data Preparation & Utilization > 2\.2 AI and Data Science > Machine Learning and Deep Learning

:::

### Learning Paradigms

- [Supervised learning](https://en.wikipedia.org/wiki/Supervised_learning) - A paradigm in machine learning where algorithms learn from labeled data
  - [Classification](https://en.wikipedia.org/wiki/Statistical_classification) - The problem of identifying which of a set of categories (sub-populations) a new observation belongs to, on the basis of a training set of data containing observations
    - [Logistic regression](https://en.wikipedia.org/wiki/Logistic_regression) - A statistical model that models the probability of an event taking place by having the log-odds for the event be a linear combination of one or more independent variables
    - [Support vector machine](https://en.wikipedia.org/wiki/Support_vector_machine) - A set of supervised learning models with associated learning algorithms that analyze data for classification and regression analysis
    - [Naive Bayes classifier](https://en.wikipedia.org/wiki/Naive_Bayes_classifier) - A family of simple probabilistic classifiers based on applying Bayes' theorem with strong (naive) independence assumptions between the features
    - [Decision tree learning](https://en.wikipedia.org/wiki/Decision_tree_learning) - A method using a decision tree as a predictive model to go from observations about an item to conclusions about its target value
    - [Ensemble learning](https://en.wikipedia.org/wiki/Ensemble_learning) - A method using multiple learning algorithms to obtain better predictive performance than could be obtained from any of the constituent learning algorithms alone
      - [Random forest](https://en.wikipedia.org/wiki/Random_forest) - An ensemble learning method for classification, regression and other tasks that operates by constructing a multitude of decision trees at training time
    - [ROC curve](https://en.wikipedia.org/wiki/Receiver_operating_characteristic) - A graphical plot that illustrates the diagnostic ability of a binary classifier system as its discrimination threshold is varied
  - [Regression](https://en.wikipedia.org/wiki/Regression_analysis) - A set of statistical processes for estimating the relationships between a dependent variable and one or more independent variables
    - [Ordinary least squares](https://en.wikipedia.org/wiki/Ordinary_least_squares) - A type of linear least squares method for choosing the unknown parameters in a linear regression model
    - [Generalized linear model](https://en.wikipedia.org/wiki/Generalized_linear_model) - A flexible generalization of ordinary least squares regression
    - [ARIMA model](https://en.wikipedia.org/wiki/Autoregressive_integrated_moving_average) - A generalization of an autoregressive moving average (ARMA) model, fitted to time series data either to better understand the data or to predict future points in the series
- [Unsupervised learning](https://en.wikipedia.org/wiki/Unsupervised_learning) - A type of machine learning in which models are trained using unlabeled dataset and are allowed to act on that data without previous training
  - [Principal component analysis](https://en.wikipedia.org/wiki/Principal_component_analysis) - A linear dimensionality reduction technique with applications in exploratory data analysis, visualization and data preprocessing
  - [K-means clustering](https://en.wikipedia.org/wiki/K-means_clustering) - A method of vector quantization that aims to partition n observations into k clusters in which each observation belongs to the cluster with the nearest mean
- [Reinforcement learning](https://en.wikipedia.org/wiki/Reinforcement_learning) - An area of machine learning concerned with how intelligent agents ought to take actions in an environment in order to maximize the notion of cumulative reward
  - [Markov chain](https://en.wikipedia.org/wiki/Markov_chain) - A stochastic process that describes a sequence of events where the probability of each event depends only on the state attained in the previous event
  - [Markov decision process](https://en.wikipedia.org/wiki/Markov_decision_process) - A mathematical framework for modeling decision making in situations where outcomes are partly random and partly under the control of a decision maker
  - [Hidden Markov model](https://en.wikipedia.org/wiki/Hidden_Markov_model) - A statistical Markov model where the system being modeled is assumed to be a Markov process with unobserved (hidden) states
  - [Multi-armed bandit](https://en.wikipedia.org/wiki/Multi-armed_bandit) - A problem in which a fixed limited set of resources must be allocated between competing (alternative) choices in a way that maximizes their expected gain
  - [Value function](https://en.wikipedia.org/wiki/Value_function) - A function used in mathematical optimization and reinforcement learning that assigns a measure of desirability to states or actions
- ML Concepts & Techniques
  - [Hyperparameter](https://en.wikipedia.org/wiki/Hyperparameter_(machine_learning)) - A parameter whose value is used to control the learning process
  - [Hyperparameter optimization](https://en.wikipedia.org/wiki/Hyperparameter_optimization) - The problem of choosing a set of optimal hyperparameters for a learning algorithm
  - [Early stopping](https://en.wikipedia.org/wiki/Early_stopping) - A form of regularization used to avoid overfitting when training a learner with an iterative method, such as gradient descent
  - [Cross-validation](https://en.wikipedia.org/wiki/Cross-validation_(statistics)) - Any of various similar model validation techniques for assessing how the results of a statistical analysis will generalize to an independent data set
  - [Anomaly detection](https://en.wikipedia.org/wiki/Anomaly_detection) - The identification of rare items, events or observations which raise suspicions by differing significantly from the majority of the data
    - [One-class classification](https://en.wikipedia.org/wiki/One-class_classification) - The technique trying to identify objects of a specific class amongst all objects, by primarily learning from a training set containing only the objects of that class
  - [Recommender system](https://en.wikipedia.org/wiki/Recommender_system) - An information filtering system that seeks to predict the 'rating' or 'preference' a user would give to an item
- ML Frameworks & Platforms
  - [scikit-learn](https://scikit-learn.org/stable) - A free software machine learning library for the Python programming language
    - [libsvm](https://www.csie.ntu.edu.tw/~cjlin/libsvm/) - A Library for Support Vector Machines
  - [ML.NET](https://dotnet.microsoft.com/en-us/apps/machinelearning-ai/ml-dotnet) - An open-source, cross-platform machine learning framework for .NET developers
  - [Crab](https://muricoca.github.io/crab/) - A Python library for building recommender systems
  - [mlxtend](https://rasbt.github.io/mlxtend/) - A Python library of useful tools for the day-to-day data science tasks
  - [Prophet](https://facebook.github.io/prophet/) - A forecasting procedure for time series data that is fast and provides completely automated forecasts
  - [Azure Machine Learning](https://azure.microsoft.com/en-us/products/machine-learning/) - An enterprise-grade machine learning service to build and deploy models faster
  - [Amazon SageMaker](https://aws.amazon.com/sagemaker/) - The service to build, train, and deploy machine learning (ML) models for any use case with fully managed infrastructure, tools, and workflows
  - [Gradio](https://www.gradio.app/) - The fastest way to demo your machine learning model with a friendly web interface so that anyone can use it, anywhere

## Neural Networks and Deep Learning

:::note[Relevant DSS-P Skills]

- 2\. Data Preparation & Utilization > 2\.2 AI and Data Science > Machine Learning and Deep Learning

:::

- Neural Network Fundamentals
  - [Neural network](https://en.wikipedia.org/wiki/Neural_network_(machine_learning)) - The computational models used in machine learning for finding patterns in data
  - [Tensor](https://en.wikipedia.org/wiki/Tensor_(machine_learning)) - The mathematical objects represented as multidimensional arrays used in machine learning
  - Activation Functions
    - [Sigmoid function](https://en.wikipedia.org/wiki/Sigmoid_function) - A mathematical function having a characteristic 'S'-shaped curve or sigmoid curve
    - [Softmax function](https://en.wikipedia.org/wiki/Softmax_function) - A function that converts a vector of K real numbers into a probability distribution of K possible outcomes
  - [Backpropagation](https://en.wikipedia.org/wiki/Backpropagation) - A widely used algorithm for training feedforward neural networks
  - [Autoencoder](https://en.wikipedia.org/wiki/Autoencoder) - A type of artificial neural network used to learn efficient codings of unlabeled data (unsupervised learning)
  - [Vanishing gradient problem](https://en.wikipedia.org/wiki/Vanishing_gradient_problem) - The difficulty encountered when training artificial neural networks with gradient-based learning methods and backpropagation, where gradients shrink as they back-propagate
- Deep Learning Concepts & Training
  - [Deep Learning](https://en.wikipedia.org/wiki/Deep_learning) - A part of a broader family of machine learning methods based on artificial neural networks with representation learning
  - [Stochastic gradient descent](https://en.wikipedia.org/wiki/Stochastic_gradient_descent) - An iterative method for optimizing an objective function with suitable smoothness properties
  - [Dropout (neural networks)](https://en.wikipedia.org/wiki/Dropout_(neural_networks)) - A regularization technique for reducing overfitting in artificial neural networks by preventing complex co-adaptations on training data
  - [Fine tuning](https://en.wikipedia.org/wiki/Fine-tuning_(deep_learning)) - An approach to transfer learning in which the weights of a pre-trained model are trained on new data
  - [LoRA (machine learning)](https://en.wikipedia.org/wiki/Low-rank_adaptation) - A parameter-efficient fine-tuning technique for adapting pre-trained models to specific tasks with significantly fewer computational resources

### Architectures

- [Recurrent neural network](https://en.wikipedia.org/wiki/Recurrent_neural_network) - A class of artificial neural networks where connections between nodes can create cycles, allowing output from some nodes to affect subsequent input to the same nodes
  - [LSTM](https://en.wikipedia.org/wiki/Long_short-term_memory) - An artificial neural network used in the fields of artificial intelligence and deep learning, distinguished by feedback connections
- [Convolutional neural network (CNN)](https://en.wikipedia.org/wiki/Convolutional_neural_network) - A class of artificial neural network, most commonly applied to analyze visual imagery
- [Attention](https://en.wikipedia.org/wiki/Attention_(machine_learning)) - A technique in the context of neural networks that mimics cognitive attention, enhancing the important parts of the input data and fading out the rest
  - [FlashAttention](https://github.com/Dao-AILab/flash-attention) - A fast and memory-efficient exact attention mechanism
  - [Transformer](https://en.wikipedia.org/wiki/Transformer_(deep_learning_architecture)) - A deep learning architecture based on the multi-head attention mechanism
- [Mixture of experts](https://en.wikipedia.org/wiki/Mixture_of_experts) - A machine learning technique where multiple expert networks (learners) are used to divide a problem space into homogeneous regions
- DL Frameworks & Visualization
  - [TensorFlow](https://www.tensorflow.org/) - An end-to-end open source platform for machine learning
    - [TFDS](https://www.tensorflow.org/datasets) - The collection of datasets ready to use with TensorFlow or other Python ML frameworks like Jax
    - [Keras](https://keras.io/) - The Python Deep Learning API designed for human beings, not machines
  - [PyTorch](https://pytorch.org/) - An open source machine learning framework that accelerates the path from research prototyping to production deployment
  - [ONNX Runtime](https://onnxruntime.ai/) - A cross-platform, high-performance inference engine for machine learning models that accelerates both training and inference across diverse hardware and platforms
  - [Windows ML](https://learn.microsoft.com/en-us/windows/ai/new-windows-ml/overview) - A unified, high-performance local AI inference framework for Windows powered by ONNX Runtime, enabling on-device model execution with hardware acceleration across NPUs, GPUs, and CPUs
    - [WinML CLI](https://microsoft.github.io/winml-cli/latest/) - A command-line tool that converts and optimizes AI models for Windows ML, enabling hardware-optimized deployment across diverse Windows devices
  - [AttentionViz](https://catherinesyeh.github.io/attn-docs/) - A Global View of Transformer Attention
  - [BertViz](https://github.com/jessevig/bertviz) - A tool for visualizing Attention in NLP Models
- Reference Books
  - [Neural Networks and Deep Learning](http://neuralnetworksanddeeplearning.com/) - A free online book explaining the core ideas behind neural networks and deep learning
  - [Deep Learning, MIT Press](https://www.deeplearningbook.org/) - The textbook intended to help students and practitioners enter the field of machine learning in general and deep learning in particular

## Natural Language Processing (NLP)

:::note[Relevant DSS-P Skills]

- 2\. Data Preparation & Utilization > 2\.2 AI and Data Science > Machine Learning and Deep Learning

:::

- Linguistics Foundations
  - [Computational linguistics](https://en.wikipedia.org/wiki/Computational_linguistics) - An interdisciplinary field concerned with the computational modelling of natural language, as well as the study of appropriate computational approaches to linguistic questions
  - [Morphology](https://en.wikipedia.org/wiki/Morphology_(linguistics)) - The study of words, how they are formed, and their relationship to other words in the same language
  - [Syntax](https://en.wikipedia.org/wiki/Syntax) - A linguistic field that is the study of how words and morphemes combine to form larger units like phrases and sentences
  - [Semantics](https://en.wikipedia.org/wiki/Semantics) - The study of linguistic meaning, examining how words acquire meaning and how complex expressions derive meaning from their constituent parts
  - [Distributional semantics](https://en.wikipedia.org/wiki/Distributional_semantics) - A research area that develops and studies theories and methods for quantifying and categorizing semantic similarities between linguistic items based on their distributional properties in large samples of language data
  - [Symbol grounding problem](https://en.wikipedia.org/wiki/Symbol_grounding_problem) - The challenge of connecting abstract symbols to the real-world objects or concepts they represent

### Concepts & Vector Representations

- [Okapi BM25](https://en.wikipedia.org/wiki/Okapi_BM25) - A ranking function used by search engines to estimate the relevance of documents to a given search query based on a probabilistic retrieval framework
- [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance) - A string metric for measuring the difference between two sequences by counting the minimum number of single-character edits required to change one into the other
- [n-gram](https://en.wikipedia.org/wiki/N-gram) - A sequence of n adjacent symbols in a particular order, used in fields like natural language processing and computational biology
- [tf-idf (term frequency-inverse document frequency)](https://en.wikipedia.org/wiki/Tf%E2%80%93idf) - A statistical measure used in information retrieval to evaluate the importance of a word in a document relative to a collection or corpus, accounting for its general frequency
- [Word embedding](https://en.wikipedia.org/wiki/Word_embedding) - A representation of a word in natural language processing, typically a real-valued vector that encodes its meaning such that words closer in vector space are expected to be similar in meaning
  - [Word2vec](https://en.wikipedia.org/wiki/Word2vec) - A technique in natural language processing for obtaining vector representations of words that capture information about their meaning based on surrounding words
  - [fastText](https://fasttext.cc/) - Library for efficient text classification and representation learning
  - [GloVe](https://nlp.stanford.edu/projects/glove/) - Global Vectors for Word Representation
- [Sentence embedding](https://en.wikipedia.org/wiki/Sentence_embedding) - A numerical vector representation of a sentence that encodes its meaningful semantic information

- NLP Libraries
  - [Natural Language Toolkit](https://www.nltk.org/) - A leading platform for building Python programs to work with human language data
  - [Gensim](https://radimrehurek.com/gensim/) - A free open-source Python library for representing documents as semantic vectors
  - [Kuromoji](https://www.atilika.org/) - An open source Japanese morphological analyzer written in Java
  - [Kagome](https://github.com/ikawaha/kagome) - An open source Japanese morphological analyzer written in pure golang
  - [mecab-python3](https://github.com/SamuraiT/mecab-python3) - A Python wrapper for the MeCab morphological analyzer for Japanese text
  - [jieba](https://github.com/fxsjy/jieba) - A Python module for Chinese text segmentation

## Computer Vision

:::note[Relevant DSS-P Skills]

- 2\. Data Preparation & Utilization > 2\.2 AI and Data Science > Machine Learning and Deep Learning

:::

### Image Processing & Fundamentals

- [OpenCV](https://opencv.org/) - An open source computer vision and machine learning software library
  - [GoCV](https://gocv.io/) - A package for the Go programming language with bindings for OpenCV 4
- [Pillow](https://github.com/python-pillow/Pillow) - A Python Imaging Library adding image processing capabilities
- [scikit-image](https://scikit-image.org/) - A collection of algorithms for image processing in Python
- [ImageMagick](https://imagemagick.org/) - A tool to create, edit, compose, or convert digital images

### 3D Vision & Geometry

- [Open3D](http://www.open3d.org/) - An open-source library that supports rapid development of software that deals with 3D data
- [Point Cloud Library (PCL)](https://pointclouds.org/) - A standalone, large scale, open source project for 2D/3D image and point cloud processing

### Object Detection & Recognition

- [YOLO (You Only Look Once)](https://docs.ultralytics.com/) - An end-to-end object detection model designed for real-time detection
- [Detectron2](https://github.com/facebookresearch/detectron2) - Facebook's next generation library that provides state-of-the-art detection and segmentation algorithms
- [Mask R-CNN](https://github.com/matterport/Mask_RCNN) - An extension of Faster R-CNN that adds a branch for predicting object masks in parallel with bounding boxes

### Pose & Body Estimation

- [MediaPipe](https://mediapipe.dev/) - A framework for building multimodal ML pipelines for perception tasks like pose estimation, hand tracking, and face detection
- [OpenPose](https://github.com/CMU-Perceptual-Computing-Lab/openpose) - A library capable of real-time multi-person key point detection

### Face & Biometric Recognition

- [face_recognition](https://github.com/ageitgey/face_recognition) - A Python library that recognizes and manipulates faces from Python or from the command line

### OCR & Text Recognition

- [Tesseract OCR](https://github.com/tesseract-ocr/tesseract) - An open source text recognition (OCR) Engine
  - [gosseract OCR](https://github.com/otiai10/gosseract) - A Go package for OCR (Optical Character Recognition), by using Tesseract C++ library
- [EasyOCR](https://github.com/JaidedAI/EasyOCR) - A ready-to-use OCR with 80+ supported languages and all popular writing scripts
- [OCRmyPDF](https://ocrmypdf.readthedocs.io/en/latest/) - A tool to add a searchable OCR text layer to PDF files
- Open Models
  - [LLaVA](https://llava-vl.github.io/) - A novel end-to-end trained large multimodal model that combines a vision encoder and Vicuna for general-purpose visual and language understanding, achieving impressive chat capabilities mimicking spirits of the multimodal GPT-4 and setting a new state-of-the-art accuracy on Science QA

## Speech & Audio Processing

:::note[Relevant DSS-P Skills]

- 2\. Data Preparation & Utilization > 2\.2 AI and Data Science > Machine Learning and Deep Learning

:::

### Automatic Speech Recognition (ASR)

- [Kaldi](https://kaldi-asr.org/) - A speech recognition toolkit written in C++ for acoustic modeling and language modeling
- [DeepSpeech](https://github.com/mozilla/DeepSpeech) - An open source engine for speech-to-text powered by deep learning
- [wav2vec 2.0](https://huggingface.co/docs/transformers/model_doc/wav2vec2) - A self-supervised learning approach for speech recognition pre-training
- Open Models
  - [Whisper](https://github.com/openai/whisper) - A robust speech recognition model trained via large-scale weak supervision

### Text-to-Speech (TTS) & Voice Synthesis

- [gTTS (Google Text-to-Speech)](https://gtts.readthedocs.io/) - A Python library and CLI tool to interface with Google's Text-to-Speech API
- [Tacotron 2](https://github.com/NVIDIA/tacotron2) - A neural network architecture for speech synthesis based on sequence-to-sequence models with attention

### Audio Processing & Tools

- [librosa](https://librosa.org/) - A Python library for audio and music analysis
- [PyAudio](https://people.csail.mit.edu/hubert/pyaudio/) - Python bindings for PortAudio, the cross-platform audio I/O library
- [SoX (Sound eXchange)](https://sox.sourceforge.net/) - The Swiss Army knife of sound processing programs
- [Praat](https://www.fon.hum.uva.nl/praat/) - A software program for the analysis of speech in phonetics

### Voice Activity Detection & Audio Enhancement

- [webrtcvad](https://github.com/wiseman/py-webrtcvad) - A Python wrapper for the WebRTC voice activity detector
- [SileroVAD](https://github.com/snakers4/silero-vad) - An open-source voice activity detector trained on large datasets

### Speaker Identification & Voice Biometrics

- [Resemblyzer](https://github.com/resemble-ai/Resemblyzer) - A Python package for speaker embedding-based speaker recognition
- [PyannoteAudio](https://github.com/pyannote/pyannote-audio) - A Python toolkit for speaker diarization and speaker change detection

## Generative AI & Large Language Models (LLMs)

:::note[Relevant DSS-P Skills]

- 2\. Data Preparation & Utilization > 2\.1 Strategic Utilization of Data and AI > AI Implementation and Operation

:::

- Core Concepts
  - [Vision Language Models (VLM)](https://huggingface.co/blog/vlms) - An exciting class of models that can understand images and text
  - [Diffusion model](https://en.wikipedia.org/wiki/Diffusion_model) - A class of latent variable generative models in machine learning that learn to generate new data by reversing a gradual noising process
  - [Multimodal learning](https://en.wikipedia.org/wiki/Multimodal_learning) - A deep learning approach that combines and processes diverse data types such as text, audio, images, or video for a more holistic understanding of complex information

### Model Providers & Aggregators

- [Anthropic](https://www.anthropic.com/api) - The API providing access to Anthropic's Claude models
- [OpenAI](https://platform.openai.com/) - The platform for building applications with OpenAI's models
- [Gemini Developer APIs](https://ai.google.dev/gemini-api/docs) - The API that gives you access to the latest Gemini models from Google
- [Hugging Face Serverless Inference API](https://huggingface.co/docs/api-inference/index) - The API allowing inference on models hosted on the Hugging Face Hub
- [OpenRouter](https://openrouter.ai/) - A unified interface for LLMs
- Open Models
  - [Llama](https://www.llama.com/) - The open-source AI models you can fine-tune, distill and deploy anywhere
  - [Gemma](https://deepmind.google/models/gemma/) - A family of lightweight, state-of-the-art open models built from the same research and technology used to create the Gemini models
  - [Mistral](https://mistral.ai/models) - A family of open-source and commercial generative AI models
  - [OLMo](https://allenai.org/olmo) - A state-of-the-art, truly open language model and framework to build and study the science of language models
  - [Kimi K3](https://github.com/MoonshotAI/Kimi-K3) - An open-weight, native multimodal agentic model with 2.8 trillion parameters and a 1-million-token context window
  - [DeepSeek V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) - A Mixture-of-Experts (MoE) language model with 1.6T parameters (49B activated), a 1-million-token context window, and MIT-licensed open weights

### Standards & Model Formats

- [GGUF](https://github.com/ggml-org/ggml/blob/master/docs/gguf.md) - A file format for storing models for inference with GGML and executors based on GGML
- [ONNX](https://onnx.ai/) - An open format built to represent machine learning models
- [Safetensors](https://huggingface.co/docs/safetensors/index) - A simple format for storing tensors safely

### Model Interface SDKs & Clients

- Libraries & SDKs
  - [Go OpenAI](https://github.com/sashabaranov/go-openai) - The Go client libraries for OpenAI API
  - [Google Gen AI SDK](https://github.com/googleapis/python-genai) - The Python SDK for Google's generative AI models
  - [Instructor](https://python.useinstructor.com/) - A Python library designed to extract structured, validated data from Large Language Models (LLMs)
  - [OmniAI](https://github.com/ksylvest/omniai) - A minimalist library for interfacing with LLMs
  - [Outlines](https://dottxt-ai.github.io/outlines/latest/) - A library that guarantees structured outputs during generation directly from any large language model by enforcing compliance with JSON Schema, regular expressions, or context-free grammars
  - [Ruby OpenAI](https://github.com/alexrudall/ruby-openai) - A Ruby wrapper for the OpenAI API
  - [RubyLLM](https://rubyllm.com/) - The one beautiful Ruby API for GPT, Claude, Gemini, and more

### Techniques & Methods

- [Retrieval-augmented generation (RAG)](https://en.wikipedia.org/wiki/Retrieval-augmented_generation) - A technique that enables large language models to retrieve and incorporate new information from external data sources
  - [dsRAG](https://github.com/D-Star-AI/dsRAG) - A high-performance retrieval engine for unstructured data
- Model Compression
  - [Knowledge Distillation](https://en.wikipedia.org/wiki/Knowledge_distillation) - The process of transferring knowledge from a large machine learning model to a smaller one
  - [AWQ (Activation-aware Weight Quantization)](https://github.com/mit-han-lab/llm-awq) - An efficient and accurate low-bit weight quantization (INT3/4) for LLM compression and acceleration
  - [Pruning (artificial neural network)](https://en.wikipedia.org/wiki/Pruning_(artificial_neural_network)) - The practice of removing parameters from an existing artificial neural network
- [GraphRAG](https://microsoft.github.io/graphrag/) - A data pipeline and transformation suite that is designed to extract meaningful, structured data from unstructured text using the power of LLMs
- [Prompt Engineering Guide](https://www.promptingguide.ai/) - A comprehensive resource for learning and applying prompt engineering techniques to effectively utilize large language models and build AI agents
- [CRAFT framework](https://www.geeky-gadgets.com/ai-prompt-writing/) - A structured method for crafting clear and precise AI prompts by defining context, role, action, format, and tone

### Development Tools & Utilities

- [LiteLLM](https://docs.litellm.ai) - A Python SDK and AI Gateway (Proxy) that allows users to call over 100 Large Language Models (LLMs) using a unified OpenAI input/output format
- [RedCandle](https://github.com/scientist-labs/red-candle) - A Ruby gem for running state-of-the-art language models locally (via Rust's Candle)
- [Unsloth AI](https://unsloth.ai/) - A platform providing tools and services for easily fine-tuning and training Large Language Models (LLMs) to achieve faster and more efficient AI training

### Benchmarking & Analysis

- [ARC-AGI](https://arcprize.org/arc-agi) - The benchmark measuring progress toward artificial general intelligence by testing skill-acquisition efficiency on novel tasks that are intuitive for humans but challenging for AI systems
- [OSWorld](https://os-world.github.io/) - A scalable, real computer environment for evaluating multimodal agents on 369 open-ended tasks spanning web applications, desktop software, and cross-application workflows across Ubuntu, Windows, and macOS
- [FrontierMath](https://epoch.ai/frontiermath) - An AI benchmark consisting of extremely challenging mathematical problems, including open research problems authored by expert mathematicians, ranging from undergraduate to research-level difficulty
- [MRCR v2](https://llm-stats.com/benchmarks/mrcr-v2) - A multi-round context recall benchmark that evaluates LLMs on their ability to retrieve and use information from extended multi-turn conversation histories
- [Artificial Analysis](https://artificialanalysis.ai/) - An independent analysis of AI models and API providers, helping users understand the AI landscape
- [Arena](https://arena.ai/) - A platform designed for benchmarking and comparing various AI models, including both large language models (LLMs) and vision-language models (VLMs)

## Agentic AI

:::note[Relevant DSS-P Skills]

- 2\. Data Preparation & Utilization > 2\.1 Strategic Utilization of Data and AI > Data / AI Utilization Strategy Design
- 2\. Data Preparation & Utilization > 2\.1 Strategic Utilization of Data and AI > AI Implementation and Operation

:::

### Standards & Protocols

- [AGENTS.md](https://agents.md/) - An open standard for defining and running AI agents
- [Agent Skills](https://agentskills.io/home) - A simple, open format for giving agents new capabilities and expertise
- [llms.txt](https://llmstxt.org/) - A proposal to standardise on using an /llms.txt file to provide information to help LLMs use a website at inference time
- [Model Context Protocol (MCP)](https://modelcontextprotocol.io/docs/getting-started/intro) - An open-source standard for connecting AI applications to external systems, enabling them to access data sources, tools, and workflows
- [A2A Protocol](https://github.com/google/A2A) - A protocol for enabling bidirectional communication between web applications and AI agents
- [Agent Name Service (ANS)](https://genai.owasp.org/resource/agent-name-service-ans-for-secure-al-agent-discovery-v1-0/) - A secure, DNS-inspired framework for AI agent discovery that leverages Public Key Infrastructure (PKI) for identity verification, structured JSON schemas for communication, and a protocol adapter layer supporting A2A, MCP, and ACP protocols
- [GitAgent](https://gitagent.sh/) - A framework-agnostic standard that allows you to define an AI agent as a set of version-controlled files within a Git repository
- [AG-UI (Agent–User Interaction Protocol)](https://docs.ag-ui.com/) - An open, lightweight, event-based protocol that standardizes how AI agents connect to user-facing applications

### Agentic Patterns & Techniques

- [ReAct Prompting](https://github.com/ysymyth/ReAct) - A prompting technique synergizing reasoning and acting in language models
  - Reason, Act, Thought, Observation
- [Recursive Language Models](https://alexzhang13.github.io/blog/2025/rlm/) - An inference strategy where language models (LMs) can decompose and recursively interact with input context of unbounded length
- [Effective Context Engineering for AI Agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) - The set of strategies for curating and maintaining the optimal set of tokens (information) during LLM inference, including all the other information that may land there outside of the prompts

### Agent Orchestration & Frameworks

- Orchestration Frameworks
  - [Agno](https://docs.agno.com/) - A multi-agent framework, runtime and control plane
  - [crewAI](https://www.crewai.com/open-source) - An open-source, multi-agent orchestration framework that empowers developers to orchestrate high-performing AI agents with ease and scale
  - [Deep Agents](https://github.com/langchain-ai/deepagents) - The easiest way to start building agents and applications powered by LLMs—with built-in capabilities for task planning, file systems for context management, subagent-spawning, and long-term memory
  - [Hermes Agent](https://github.com/nousresearch/hermes-agent) - A self-improving AI agent with a built-in learning loop that creates skills from experience, improves them during use, maintains persistent memory, and builds a deepening model of users across sessions
  - [LangGraph](https://www.langchain.com/langgraph) - A library for building stateful, multi-actor applications with LLMs by creating cyclic graphs for agent runtimes
  - [Mastra](https://mastra.ai/) - An all-in-one, open-source TypeScript framework for building, iterating, and deploying AI agents with built-in support for workflows, RAG, memory, and observability
  - [Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/) - A resource for building robust, future-proof Agentic AI solutions that evolve with technological advancements
  - [Microsoft 365 Agents SDK](https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/) - A comprehensive framework for building full-stack, multi-channel agents that operate seamlessly across Microsoft 365 Copilot, Teams, third-party platforms, custom applications, and websites
- Application Frameworks
  - [Chainlit](https://docs.chainlit.io/) - An open-source Python package to build production ready Conversational AI
  - [DSPy](https://dspy.ai/) - A declarative framework for building modular AI software that allows for fast iteration on structured code and offers algorithms to compile AI programs into effective prompts and weights for language models
  - [Genkit](https://genkit.dev/) - The AI framework for building full-stack applications with integrated support for agents, RAG, and tool use
  - [LangChain](https://www.langchain.com/) - A framework for developing applications powered by large language models
  - [LlamaIndex](https://www.llamaindex.ai/) - A developer-first agent framework that rapidly accelerates time-to-production of GenAI applications with trusted low and high-level abstractions
    - [LlamaParse](https://www.llamaindex.ai/llamaparse) - A document parser that turns even the most complex layouts, tables, charts, handwriting, checkboxes, and images into clean markdown
  - [PydanticAI](https://pydantic.dev/pydantic-ai) - A Python agent framework for building production-grade applications with Generative AI, emphasizing type safety and structured outputs

### Agent Development Kits (ADK)

- [Agent Package Manager (APM)](https://microsoft.github.io/apm/) - An open-source dependency manager for AI agents that provides a single source of truth for skills, prompts, and instructions
- [Agent Development Kit (ADK)](https://google.github.io/adk-docs/) - A flexible and modular framework for developing and deploying AI agents
- [Claude Agent SDK](https://platform.claude.com/docs/en/agent-sdk/overview) - The Agent SDK gives you the same tools, agent loop, and context management that power Claude Code, programmable in Python and TypeScript
- [Claude Agent Skills](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview) - The modular capabilities that extend an agent's functionality by packaging instructions, metadata, and optional resources
- [Fantasy](https://github.com/charmbracelet/fantasy) - A Go library for building AI agents with multiple providers and models through a single API
- [Go Micro](https://go-micro.dev/) - An agent harness for Go that lets you build agents, services, and workflows on one runtime
- [Microsoft 365 Agents Toolkit](https://learn.microsoft.com/en-us/microsoft-365/developer/overview-m365-agents-toolkit) - A suite of tools for building enterprise-ready agents and apps that work across Microsoft 365 Copilot, Teams, Office, web, and other third-party messaging channels
- [OpenAI Agents SDK](https://developers.openai.com/api/docs/guides/agents-sdk) - A library for building agentic applications where models can use additional context and tools, hand off to specialized agents, and stream results

### Supporting Services & Platforms

- Agent Platforms & Services
  - [Foundry Agent Service](https://azure.microsoft.com/en-us/products/ai-foundry/agent-service) - A platform to securely design, deploy, and scale AI agents with governance and observability for enterprise transformation
  - [Moltbook](https://www.moltbook.com/) - A social network for AI agents where AI agents share, discuss, and upvote
- Interoperability
  - [FastMCP](https://github.com/jlowin/fastmcp) - A Pythonic framework for building Model Context Protocol (MCP) servers and clients
- Pre-built Agents & Collections
  - [agency-agents](https://github.com/msitarzewski/agency-agents) - A growing collection of meticulously crafted AI agent personalities designed to act as specialized experts with unique voices, proven workflows, and measurable deliverables
- Memory Systems
  - [Mem0](https://mem0.ai/) - An AI memory layer for LLM applications that aims to provide personalized AI experiences
  - [Graphiti](https://www.getzep.com/product/open-source/) - An open-source Python framework for building temporally-aware context graphs
  - [Hindsight](https://hindsight.vectorize.io/) - A memory system designed specifically for AI agents that enables them to retain, recall, and reason about information across multiple sessions using multi-strategy retrieval and automatic knowledge consolidation
- Search & Data Extraction
  - [Firecrawl](https://www.firecrawl.dev/) - An API service that takes a URL, crawls it, and converts it into clean markdown or structured data
  - [Tavily Search](https://tavily.com/) - A search engine optimized for LLMs, aimed at efficient, quick and persistent search results
  - [SWIRL AI Search](https://swirlaiconnect.com/) - A Federated AI Search solution that connects to over 100 enterprise platforms, providing real-time visibility across data and document silos without requiring costly data transformations or migrations
- Security Tools
  - [skill-scanner](https://github.com/cisco-ai-defense/skill-scanner) - A best-effort security scanner for AI Agent Skills that detects prompt injection, data exfiltration, and malicious code patterns
  - [Toxic Flow Analysis (TFA)](https://invariantlabs.ai/blog/toxic-flow-analysis) - The first principled approach to reduce the attack surface of AI applications, mitigating indirect prompt injections and other MCP attack vectors

## MLOps & LLMOps

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > SRE Process
- 2\. Data Preparation & Utilization > 2\.1 Strategic Utilization of Data and AI > AI Implementation and Operation

:::

### ML Lifecycle & MLOps Platforms

- ML Lifecycle Tools
  - [DVC](https://dvc.org/) - Open-source Data Version Control for machine learning projects
  - [CML](https://cml.dev/) - An open-source tool for implementing continuous integration & delivery (CI/CD) in machine learning projects
  - [MLFlow](https://mlflow.org/) - An open source platform to manage the ML lifecycle, including experimentation, reproducibility, deployment, and a central model registry
  - [KubeFlow](https://www.kubeflow.org/) - The Machine Learning Toolkit for Kubernetes, dedicated to making deployments of ML workflows on Kubernetes simple, portable and scalable
  - [Weights & Biases](https://wandb.ai/site) - The AI developer platform to build AI agents, applications, and models with confidence
  - [ZenML](https://www.zenml.io/) - An open-source framework for orchestration, versioning, and governance from training pipelines to agent evals, local to Kubernetes
  - [BentoML](https://www.bentoml.com/) - An open-source framework to deploy any model anywhere, with tailored optimization, efficient scaling, and streamlined operations
- Managed MLOps Platforms
  - [Microsoft Foundry](https://ai.azure.com/) - A unified, interoperable platform for building, optimizing, and governing AI apps and agents that understand business context and deliver business impact
  - [Vertex AI](https://cloud.google.com/vertex-ai) - A machine learning (ML) platform for training and deploying ML models and AI applications
  - [Nebius](https://nebius.com/) - A specialized AI cloud platform offering purpose-built infrastructure for AI and machine learning workloads
  - [Amazon SageMaker](https://aws.amazon.com/sagemaker/) - A fully managed service bringing together data, analytics, and AI to build, train, and deploy models at scale

### LLM Serving & Runtimes

- Local LLM Runtimes
  - [LM Studio](https://lmstudio.ai/) - A desktop app for developing and experimenting with LLMs locally on your computer
  - [LocalAI](https://localai.io/) - The free, Open Source OpenAI alternative
  - [Ollama](https://ollama.com/) - A tool designed for deploying and managing large language models (LLMs) locally
  - [llama.cpp](https://github.com/ggml-org/llama.cpp) - A dependency-free C/C++ implementation for running LLM inference across hardware from Apple Silicon to NVIDIA GPUs
  - [Jan](https://jan.ai/) - An open-source ChatGPT alternative that runs AI models locally on your computer
- Production Serving Engines
  - [vLLM](https://vllm.ai/) - A high-throughput and memory-efficient inference and serving engine for Large Language Models (LLMs)
  - [Hugging Face TGI](https://github.com/huggingface/text-generation-inference) - A Rust, Python and gRPC server for text generation inference, used in production to power Hugging Chat and the Inference API
  - [SGLang](https://github.com/sgl-project/sglang) - A high-performance serving framework for large language models and multimodal models
  - [KServe](https://kserve.github.io/website/) - A standardized distributed generative and predictive AI inference platform for scalable, multi-framework deployment on Kubernetes
  - [Modular MAX](https://www.modular.com/) - A unified AI inference platform delivering full optimizations from GPU kernel to API endpoint across diverse hardware

### LLMOps & Observability

- Managed Model Services
  - [Amazon Bedrock](https://aws.amazon.com/bedrock/) - A fully managed service offering a choice of high-performing foundation models
    - [Amazon Bedrock Agents](https://aws.amazon.com/bedrock/agents/) - A service that uses the reasoning of foundation models, APIs, and data to break down user requests, gather relevant information, and efficiently complete tasks
- Agent Observability
  - [Mission Control](https://mc.builderz.dev/) - A centralized operational control plane to manage, monitor, and coordinate fleets of AI agents
- LLM Observability & Evals
  - [Langfuse](https://langfuse.com/) - An open source LLM engineering platform providing traces, evals, prompt management, and metrics to debug and improve LLM applications
  - [OpenLIT](https://openlit.io/) - An open-source, OpenTelemetry-native tool for LLM and GenAI observability
  - [LangSmith](https://www.langchain.com/langsmith) - A unified DevOps platform for developing, collaborating, testing, deploying, and monitoring LLM applications
  - [Helicone](https://www.helicone.ai/) - An open-source LLM observability platform built for developers to monitor and optimize their generative AI applications
  - [Arize Phoenix](https://phoenix.arize.com/) - An open-source AI observability and evaluation platform for LLMs
  - [Braintrust](https://www.braintrust.dev/) - The enterprise AI platform that provides an evaluation and observability platform for developers building with LLMs
  - [Ragas](https://docs.ragas.io/) - A library that helps you move from vibe checks to systematic evaluation loops for your AI applications
  - [DeepEval](https://www.deepeval.com/) - The LLM evaluation framework with research-backed metrics and pytest-native evaluations that run in CI/CD
