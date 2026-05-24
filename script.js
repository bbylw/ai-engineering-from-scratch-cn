/* ============================================================
   AI Engineering from Scratch — 中文网站交互脚本
   ============================================================ */

// ---- Phase Data ----
const phases = [
  {
    id: "phase-0",
    num: "0",
    title: "环境搭建与工具",
    lessons: 12,
    desc: "为后续所有内容准备好你的环境。",
    items: [
      {num:"01",name:"开发环境",type:"build",lang:"Python、TypeScript、Rust",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/00-setup-and-tooling/01-dev-environment/"},
      {num:"02",name:"Git 与协作",type:"learn",lang:"—",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/00-setup-and-tooling/02-git-and-collaboration/"},
      {num:"03",name:"GPU 配置与云端",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/00-setup-and-tooling/03-gpu-setup-and-cloud/"},
      {num:"04",name:"API 与密钥",type:"build",lang:"Python、TypeScript",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/00-setup-and-tooling/04-apis-and-keys/"},
      {num:"05",name:"Jupyter Notebooks",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/00-setup-and-tooling/05-jupyter-notebooks/"},
      {num:"06",name:"Python 环境",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/00-setup-and-tooling/06-python-environments/"},
      {num:"07",name:"面向 AI 的 Docker",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/00-setup-and-tooling/07-docker-for-ai/"},
      {num:"08",name:"编辑器配置",type:"build",lang:"—",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/00-setup-and-tooling/08-editor-setup/"},
      {num:"09",name:"数据管理",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/00-setup-and-tooling/09-data-management/"},
      {num:"10",name:"终端与 Shell",type:"learn",lang:"—",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/00-setup-and-tooling/10-terminal-and-shell/"},
      {num:"11",name:"面向 AI 的 Linux",type:"learn",lang:"—",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/00-setup-and-tooling/11-linux-for-ai/"},
      {num:"12",name:"调试与性能分析",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/00-setup-and-tooling/12-debugging-and-profiling/"}
    ]
  },
  {
    id: "phase-1",
    num: "1",
    title: "数学基础",
    lessons: 22,
    desc: "通过代码理解每个 AI 算法背后的直觉。",
    items: [
      {num:"01",name:"线性代数直觉",type:"learn",lang:"Python、Julia",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/01-math-foundations/01-linear-algebra-intuition/"},
      {num:"02",name:"向量、矩阵与运算",type:"build",lang:"Python、Julia",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/01-math-foundations/02-vectors-matrices-operations/"},
      {num:"03",name:"矩阵变换与特征值",type:"build",lang:"Python、Julia",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/01-math-foundations/03-matrix-transformations/"},
      {num:"04",name:"面向 ML 的微积分：导数与梯度",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/01-math-foundations/04-calculus-for-ml/"},
      {num:"05",name:"链式法则与自动微分",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/01-math-foundations/05-chain-rule-and-autodiff/"},
      {num:"06",name:"概率与分布",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/01-math-foundations/06-probability-and-distributions/"},
      {num:"07",name:"贝叶斯定理与统计思维",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/01-math-foundations/07-bayes-theorem/"},
      {num:"08",name:"优化：梯度下降家族",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/01-math-foundations/08-optimization/"},
      {num:"09",name:"信息论：熵、KL 散度",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/01-math-foundations/09-information-theory/"},
      {num:"10",name:"降维：PCA、t-SNE、UMAP",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/01-math-foundations/10-dimensionality-reduction/"},
      {num:"11",name:"奇异值分解",type:"build",lang:"Python、Julia",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/01-math-foundations/11-singular-value-decomposition/"},
      {num:"12",name:"张量运算",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/01-math-foundations/12-tensor-operations/"},
      {num:"13",name:"数值稳定性",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/01-math-foundations/13-numerical-stability/"},
      {num:"14",name:"范数与距离",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/01-math-foundations/14-norms-and-distances/"},
      {num:"15",name:"面向 ML 的统计学",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/01-math-foundations/15-statistics-for-ml/"},
      {num:"16",name:"采样方法",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/01-math-foundations/16-sampling-methods/"},
      {num:"17",name:"线性系统",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/01-math-foundations/17-linear-systems/"},
      {num:"18",name:"凸优化",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/01-math-foundations/18-convex-optimization/"},
      {num:"19",name:"面向 AI 的复数",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/01-math-foundations/19-complex-numbers/"},
      {num:"20",name:"傅里叶变换",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/01-math-foundations/20-fourier-transform/"},
      {num:"21",name:"面向 ML 的图论",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/01-math-foundations/21-graph-theory/"},
      {num:"22",name:"随机过程",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/01-math-foundations/22-stochastic-processes/"}
    ]
  },
  {
    id: "phase-2",
    num: "2",
    title: "ML 基础",
    lessons: 18,
    desc: "经典 ML——仍然是大多数生产 AI 的支柱。",
    items: [
      {num:"01",name:"什么是机器学习",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/02-ml-fundamentals/01-what-is-machine-learning/"},
      {num:"02",name:"从零实现线性回归",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/02-ml-fundamentals/02-linear-regression/"},
      {num:"03",name:"逻辑回归与分类",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/02-ml-fundamentals/03-logistic-regression/"},
      {num:"04",name:"决策树与随机森林",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/02-ml-fundamentals/04-decision-trees/"},
      {num:"05",name:"支持向量机",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/02-ml-fundamentals/05-support-vector-machines/"},
      {num:"06",name:"KNN 与距离度量",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/02-ml-fundamentals/06-knn-and-distances/"},
      {num:"07",name:"无监督学习：K-Means、DBSCAN",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/02-ml-fundamentals/07-unsupervised-learning/"},
      {num:"08",name:"特征工程与选择",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/02-ml-fundamentals/08-feature-engineering/"},
      {num:"09",name:"模型评估：指标、交叉验证",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/02-ml-fundamentals/09-model-evaluation/"},
      {num:"10",name:"偏差、方差与学习曲线",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/02-ml-fundamentals/10-bias-variance/"},
      {num:"11",name:"集成方法：Boosting、Bagging、Stacking",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/02-ml-fundamentals/11-ensemble-methods/"},
      {num:"12",name:"超参数调优",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/02-ml-fundamentals/12-hyperparameter-tuning/"},
      {num:"13",name:"ML 流水线与实验追踪",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/02-ml-fundamentals/13-ml-pipelines/"},
      {num:"14",name:"朴素贝叶斯",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/02-ml-fundamentals/14-naive-bayes/"},
      {num:"15",name:"时间序列基础",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/02-ml-fundamentals/15-time-series/"},
      {num:"16",name:"异常检测",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/02-ml-fundamentals/16-anomaly-detection/"},
      {num:"17",name:"处理不平衡数据",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/02-ml-fundamentals/17-imbalanced-data/"},
      {num:"18",name:"特征选择",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/02-ml-fundamentals/18-feature-selection/"}
    ]
  },
  {
    id: "phase-3",
    num: "3",
    title: "深度学习核心",
    lessons: 13,
    desc: "从第一性原理构建神经网络。在你构建出框架之前，不使用任何框架。",
    items: [
      {num:"01",name:"感知机：一切的起点",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/03-deep-learning-core/01-the-perceptron/"},
      {num:"02",name:"多层网络与前向传播",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/03-deep-learning-core/02-multi-layer-networks/"},
      {num:"03",name:"从零实现反向传播",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/03-deep-learning-core/03-backpropagation/"},
      {num:"04",name:"激活函数：ReLU、Sigmoid、GELU 及其原理",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/03-deep-learning-core/04-activation-functions/"},
      {num:"05",name:"损失函数：MSE、交叉熵、对比损失",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/03-deep-learning-core/05-loss-functions/"},
      {num:"06",name:"优化器：SGD、Momentum、Adam、AdamW",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/03-deep-learning-core/06-optimizers/"},
      {num:"07",name:"正则化：Dropout、权重衰减、BatchNorm",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/03-deep-learning-core/07-regularization/"},
      {num:"08",name:"权重初始化与训练稳定性",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/03-deep-learning-core/08-weight-initialization/"},
      {num:"09",name:"学习率调度与预热",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/03-deep-learning-core/09-learning-rate-schedules/"},
      {num:"10",name:"构建你自己的迷你框架",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/03-deep-learning-core/10-mini-framework/"},
      {num:"11",name:"PyTorch 入门",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/03-deep-learning-core/11-intro-to-pytorch/"},
      {num:"12",name:"JAX 入门",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/03-deep-learning-core/12-intro-to-jax/"},
      {num:"13",name:"调试神经网络",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/03-deep-learning-core/13-debugging-neural-networks/"}
    ]
  },
  {
    id: "phase-4",
    num: "4",
    title: "计算机视觉",
    lessons: 28,
    desc: "从像素到理解——图像、视频、3D、VLM 与世界模型。",
    items: [
      {num:"01",name:"图像基础：像素、通道、色彩空间",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/04-computer-vision/01-image-fundamentals/"},
      {num:"02",name:"从零实现卷积",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/04-computer-vision/02-convolutions-from-scratch/"},
      {num:"03",name:"CNN：从 LeNet 到 ResNet",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/04-computer-vision/03-cnns-lenet-to-resnet/"},
      {num:"04",name:"图像分类",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/04-computer-vision/04-image-classification/"},
      {num:"05",name:"迁移学习与微调",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/04-computer-vision/05-transfer-learning/"},
      {num:"06",name:"目标检测——从零实现 YOLO",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/04-computer-vision/06-object-detection-yolo/"},
      {num:"07",name:"语义分割——U-Net",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/04-computer-vision/07-semantic-segmentation-unet/"},
      {num:"08",name:"实例分割——Mask R-CNN",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/04-computer-vision/08-instance-segmentation-mask-rcnn/"},
      {num:"09",name:"图像生成——GAN",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/04-computer-vision/09-image-generation-gans/"},
      {num:"10",name:"图像生成——扩散模型",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/04-computer-vision/10-image-generation-diffusion/"},
      {num:"11",name:"Stable Diffusion——架构与微调",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/04-computer-vision/11-stable-diffusion/"},
      {num:"12",name:"视频理解——时序建模",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/04-computer-vision/12-video-understanding/"},
      {num:"13",name:"3D 视觉：点云、NeRF",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/04-computer-vision/13-3d-vision-nerf/"},
      {num:"14",name:"Vision Transformers (ViT)",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/04-computer-vision/14-vision-transformers/"},
      {num:"15",name:"实时视觉：边缘部署",type:"build",lang:"Python、Rust",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/04-computer-vision/15-real-time-edge/"},
      {num:"16",name:"构建完整的视觉流水线",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/04-computer-vision/16-vision-pipeline-capstone/"},
      {num:"17",name:"自监督视觉——SimCLR、DINO、MAE",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/04-computer-vision/17-self-supervised-vision/"},
      {num:"18",name:"开放词汇视觉——CLIP",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/04-computer-vision/18-open-vocab-clip/"},
      {num:"19",name:"OCR 与文档理解",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/04-computer-vision/19-ocr-document-understanding/"},
      {num:"20",name:"图像检索与度量学习",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/04-computer-vision/20-image-retrieval-metric/"},
      {num:"21",name:"关键点检测与姿态估计",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/04-computer-vision/21-keypoint-pose/"},
      {num:"22",name:"从零实现 3D 高斯泼溅",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/04-computer-vision/22-3d-gaussian-splatting/"},
      {num:"23",name:"扩散 Transformer 与矫正流",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/04-computer-vision/23-diffusion-transformers-rectified-flow/"},
      {num:"24",name:"SAM 3 与开放词汇分割",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/04-computer-vision/24-sam3-open-vocab-segmentation/"},
      {num:"25",name:"视觉-语言模型 (ViT-MLP-LLM)",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/04-computer-vision/25-vision-language-models/"},
      {num:"26",name:"单目深度与几何估计",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/04-computer-vision/26-monocular-depth/"},
      {num:"27",name:"多目标跟踪与视频记忆",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/04-computer-vision/27-multi-object-tracking/"},
      {num:"28",name:"世界模型与视频扩散",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/04-computer-vision/28-world-models-video-diffusion/"}
    ]
  },
  {
    id: "phase-5",
    num: "5",
    title: "NLP：从基础到高级",
    lessons: 29,
    desc: "语言是智能的接口。",
    items: [
      {num:"01",name:"文本处理：分词、词干提取、词形还原",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/05-nlp-foundations-to-advanced/01-text-processing/"},
      {num:"02",name:"词袋模型、TF-IDF 与文本表示",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/05-nlp-foundations-to-advanced/02-bag-of-words-tfidf/"},
      {num:"03",name:"词嵌入：从零实现 Word2Vec",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/05-nlp-foundations-to-advanced/03-word-embeddings-word2vec/"},
      {num:"04",name:"GloVe、FastText 与子词嵌入",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/05-nlp-foundations-to-advanced/04-glove-fasttext-subword/"},
      {num:"05",name:"情感分析",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/05-nlp-foundations-to-advanced/05-sentiment-analysis/"},
      {num:"06",name:"命名实体识别 (NER)",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/05-nlp-foundations-to-advanced/06-named-entity-recognition/"},
      {num:"07",name:"词性标注与句法分析",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/05-nlp-foundations-to-advanced/07-pos-tagging-parsing/"},
      {num:"08",name:"文本分类——用于文本的 CNN 与 RNN",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/05-nlp-foundations-to-advanced/08-cnns-rnns-for-text/"},
      {num:"09",name:"序列到序列模型",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/05-nlp-foundations-to-advanced/09-sequence-to-sequence/"},
      {num:"10",name:"注意力机制——突破性进展",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/05-nlp-foundations-to-advanced/10-attention-mechanism/"},
      {num:"11",name:"机器翻译",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/05-nlp-foundations-to-advanced/11-machine-translation/"},
      {num:"12",name:"文本摘要",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/05-nlp-foundations-to-advanced/12-text-summarization/"},
      {num:"13",name:"问答系统",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/05-nlp-foundations-to-advanced/13-question-answering/"},
      {num:"14",name:"信息检索与搜索",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/05-nlp-foundations-to-advanced/14-information-retrieval-search/"},
      {num:"15",name:"主题建模：LDA、BERTopic",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/05-nlp-foundations-to-advanced/15-topic-modeling/"},
      {num:"16",name:"文本生成",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/05-nlp-foundations-to-advanced/16-text-generation-pre-transformer/"},
      {num:"17",name:"聊天机器人：从基于规则到神经网络",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/05-nlp-foundations-to-advanced/17-chatbots-rule-to-neural/"},
      {num:"18",name:"多语言 NLP",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/05-nlp-foundations-to-advanced/18-multilingual-nlp/"},
      {num:"19",name:"子词分词：BPE、WordPiece、Unigram、SentencePiece",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/05-nlp-foundations-to-advanced/19-subword-tokenization/"},
      {num:"20",name:"结构化输出与约束解码",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/05-nlp-foundations-to-advanced/20-structured-outputs-constrained-decoding/"},
      {num:"21",name:"自然语言推理与文本蕴含",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/05-nlp-foundations-to-advanced/21-nli-textual-entailment/"},
      {num:"22",name:"嵌入模型深入",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/05-nlp-foundations-to-advanced/22-embedding-models-deep-dive/"},
      {num:"23",name:"RAG 的分块策略",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/05-nlp-foundations-to-advanced/23-chunking-strategies-rag/"},
      {num:"24",name:"指代消解",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/05-nlp-foundations-to-advanced/24-coreference-resolution/"},
      {num:"25",name:"实体链接与消歧",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/05-nlp-foundations-to-advanced/25-entity-linking/"},
      {num:"26",name:"关系抽取与知识图谱构建",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/05-nlp-foundations-to-advanced/26-relation-extraction-kg/"},
      {num:"27",name:"LLM 评估：RAGAS、DeepEval、G-Eval",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/05-nlp-foundations-to-advanced/27-llm-evaluation-frameworks/"},
      {num:"28",name:"长上下文评估：NIAH、RULER、LongBench、MRCR",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/05-nlp-foundations-to-advanced/28-long-context-evaluation/"},
      {num:"29",name:"对话状态追踪",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/05-nlp-foundations-to-advanced/29-dialogue-state-tracking/"}
    ]
  },
  {
    id: "phase-6",
    num: "6",
    title: "语音与音频",
    lessons: 17,
    desc: "听、理解、说话。",
    items: [
      {num:"01",name:"音频基础：波形、采样、FFT",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/06-speech-and-audio/01-audio-fundamentals"},
      {num:"02",name:"频谱图、梅尔尺度与音频特征",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/06-speech-and-audio/02-spectrograms-mel-features"},
      {num:"03",name:"音频分类",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/06-speech-and-audio/03-audio-classification"},
      {num:"04",name:"语音识别 (ASR)",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/06-speech-and-audio/04-speech-recognition-asr"},
      {num:"05",name:"Whisper：架构与微调",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/06-speech-and-audio/05-whisper-architecture-finetuning"},
      {num:"06",name:"说话人识别与验证",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/06-speech-and-audio/06-speaker-recognition-verification"},
      {num:"07",name:"文本转语音 (TTS)",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/06-speech-and-audio/07-text-to-speech"},
      {num:"08",name:"语音克隆与语音转换",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/06-speech-and-audio/08-voice-cloning-conversion"},
      {num:"09",name:"音乐生成",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/06-speech-and-audio/09-music-generation"},
      {num:"10",name:"音频-语言模型",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/06-speech-and-audio/10-audio-language-models"},
      {num:"11",name:"实时音频处理",type:"build",lang:"Python、Rust",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/06-speech-and-audio/11-real-time-audio-processing"},
      {num:"12",name:"构建语音助手流水线",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/06-speech-and-audio/12-voice-assistant-pipeline"},
      {num:"13",name:"神经音频编解码器——EnCodec、SNAC、Mimi、DAC",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/06-speech-and-audio/13-neural-audio-codecs"},
      {num:"14",name:"语音活动检测与话轮转换",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/06-speech-and-audio/14-voice-activity-detection-turn-taking"},
      {num:"15",name:"流式语音到语音——Moshi、Hibiki",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/06-speech-and-audio/15-streaming-speech-to-speech-moshi-hibiki"},
      {num:"16",name:"语音反欺骗与音频水印",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/06-speech-and-audio/16-anti-spoofing-audio-watermarking"},
      {num:"17",name:"音频评估——WER、MOS、MMAU、排行榜",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/06-speech-and-audio/17-audio-evaluation-metrics"}
    ]
  },
  {
    id: "phase-7",
    num: "7",
    title: "Transformer 深入",
    lessons: 14,
    desc: "改变一切的架构。",
    items: [
      {num:"01",name:"为什么是 Transformer：RNN 的问题",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/07-transformers-deep-dive/01-why-transformers/"},
      {num:"02",name:"从零实现自注意力",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/07-transformers-deep-dive/02-self-attention-from-scratch/"},
      {num:"03",name:"多头注意力",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/07-transformers-deep-dive/03-multi-head-attention/"},
      {num:"04",name:"位置编码：正弦、RoPE、ALiBi",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/07-transformers-deep-dive/04-positional-encoding/"},
      {num:"05",name:"完整 Transformer：编码器 + 解码器",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/07-transformers-deep-dive/05-full-transformer/"},
      {num:"06",name:"BERT——掩码语言建模",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/07-transformers-deep-dive/06-bert-masked-language-modeling/"},
      {num:"07",name:"GPT——因果语言建模",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/07-transformers-deep-dive/07-gpt-causal-language-modeling/"},
      {num:"08",name:"T5、BART——编码器-解码器模型",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/07-transformers-deep-dive/08-t5-bart-encoder-decoder/"},
      {num:"09",name:"Vision Transformers (ViT)",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/07-transformers-deep-dive/09-vision-transformers/"},
      {num:"10",name:"音频 Transformer——Whisper 架构",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/07-transformers-deep-dive/10-audio-transformers-whisper/"},
      {num:"11",name:"混合专家 (MoE)",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/07-transformers-deep-dive/11-mixture-of-experts/"},
      {num:"12",name:"KV 缓存、Flash Attention 与推理优化",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/07-transformers-deep-dive/12-kv-cache-flash-attention/"},
      {num:"13",name:"缩放定律",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/07-transformers-deep-dive/13-scaling-laws/"},
      {num:"14",name:"从零构建一个 Transformer",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/07-transformers-deep-dive/14-build-a-transformer-capstone/"}
    ]
  },
  {
    id: "phase-8",
    num: "8",
    title: "生成式 AI",
    lessons: 14,
    desc: "创建图像、视频、音频、3D 及更多。",
    items: [
      {num:"01",name:"生成模型：分类与历史",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/08-generative-ai/01-generative-models-taxonomy-history/"},
      {num:"02",name:"自编码器与 VAE",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/08-generative-ai/02-autoencoders-vae/"},
      {num:"03",name:"GAN：生成器 vs 判别器",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/08-generative-ai/03-gans-generator-discriminator/"},
      {num:"04",name:"条件 GAN 与 Pix2Pix",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/08-generative-ai/04-conditional-gans-pix2pix/"},
      {num:"05",name:"StyleGAN",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/08-generative-ai/05-stylegan/"},
      {num:"06",name:"扩散模型——从零实现 DDPM",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/08-generative-ai/06-diffusion-ddpm-from-scratch/"},
      {num:"07",name:"潜在扩散与 Stable Diffusion",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/08-generative-ai/07-latent-diffusion-stable-diffusion/"},
      {num:"08",name:"ControlNet、LoRA 与条件控制",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/08-generative-ai/08-controlnet-lora-conditioning/"},
      {num:"09",name:"图像修复、扩展与编辑",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/08-generative-ai/09-inpainting-outpainting-editing/"},
      {num:"10",name:"视频生成",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/08-generative-ai/10-video-generation/"},
      {num:"11",name:"音频生成",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/08-generative-ai/11-audio-generation/"},
      {num:"12",name:"3D 生成",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/08-generative-ai/12-3d-generation/"},
      {num:"13",name:"流匹配与矫正流",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/08-generative-ai/13-flow-matching-rectified-flows/"},
      {num:"14",name:"评估：FID、CLIP Score",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/08-generative-ai/14-evaluation-fid-clip-score/"}
    ]
  },
  {
    id: "phase-9",
    num: "9",
    title: "强化学习",
    lessons: 12,
    desc: "RLHF 和游戏 AI 的基础。",
    items: [
      {num:"01",name:"MDP、状态、动作与奖励",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/09-reinforcement-learning/01-mdps-states-actions-rewards/"},
      {num:"02",name:"动态规划",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/09-reinforcement-learning/02-dynamic-programming/"},
      {num:"03",name:"蒙特卡洛方法",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/09-reinforcement-learning/03-monte-carlo-methods/"},
      {num:"04",name:"Q-Learning、SARSA",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/09-reinforcement-learning/04-q-learning-sarsa/"},
      {num:"05",name:"深度 Q 网络 (DQN)",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/09-reinforcement-learning/05-dqn/"},
      {num:"06",name:"策略梯度——REINFORCE",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/09-reinforcement-learning/06-policy-gradients-reinforce/"},
      {num:"07",name:"Actor-Critic——A2C、A3C",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/09-reinforcement-learning/07-actor-critic-a2c-a3c/"},
      {num:"08",name:"PPO",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/09-reinforcement-learning/08-ppo/"},
      {num:"09",name:"奖励建模与 RLHF",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/09-reinforcement-learning/09-reward-modeling-rlhf/"},
      {num:"10",name:"多智能体 RL",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/09-reinforcement-learning/10-multi-agent-rl/"},
      {num:"11",name:"仿真到现实迁移",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/09-reinforcement-learning/11-sim-to-real-transfer/"},
      {num:"12",name:"用于游戏的 RL",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/09-reinforcement-learning/12-rl-for-games/"}
    ]
  },
  {
    id: "phase-10",
    num: "10",
    title: "从零构建大语言模型",
    lessons: 22,
    desc: "构建、训练并理解大型语言模型。",
    items: [
      {num:"01",name:"分词器：BPE、WordPiece、SentencePiece",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/10-llms-from-scratch/01-tokenizers/"},
      {num:"02",name:"从零构建分词器",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/10-llms-from-scratch/02-building-a-tokenizer/"},
      {num:"03",name:"预训练的数据流水线",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/10-llms-from-scratch/03-data-pipelines/"},
      {num:"04",name:"预训练一个 Mini GPT (124M)",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/10-llms-from-scratch/04-pre-training-mini-gpt/"},
      {num:"05",name:"分布式训练、FSDP、DeepSpeed",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/10-llms-from-scratch/05-scaling-distributed/"},
      {num:"06",name:"指令微调——SFT",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/10-llms-from-scratch/06-instruction-tuning-sft/"},
      {num:"07",name:"RLHF——奖励模型 + PPO",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/10-llms-from-scratch/07-rlhf/"},
      {num:"08",name:"DPO——直接偏好优化",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/10-llms-from-scratch/08-dpo/"},
      {num:"09",name:"宪法 AI 与自我改进",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/10-llms-from-scratch/09-constitutional-ai-self-improvement/"},
      {num:"10",name:"评估——基准测试、Evals",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/10-llms-from-scratch/10-evaluation/"},
      {num:"11",name:"量化：INT8、GPTQ、AWQ、GGUF",type:"build",lang:"Python、Rust",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/10-llms-from-scratch/11-quantization/"},
      {num:"12",name:"推理优化",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/10-llms-from-scratch/12-inference-optimization/"},
      {num:"13",name:"构建完整的 LLM 流水线",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/10-llms-from-scratch/13-building-complete-llm-pipeline/"},
      {num:"14",name:"开放模型：架构走读",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/10-llms-from-scratch/14-open-models-architecture-walkthroughs/"},
      {num:"15",name:"推测解码与 EAGLE-3",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/10-llms-from-scratch/15-speculative-decoding-eagle3/"},
      {num:"16",name:"差分注意力 (V2)",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/10-llms-from-scratch/16-differential-attention-v2/"},
      {num:"17",name:"原生稀疏注意力 (DeepSeek NSA)",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/10-llms-from-scratch/17-native-sparse-attention/"},
      {num:"18",name:"多 Token 预测 (MTP)",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/10-llms-from-scratch/18-multi-token-prediction/"},
      {num:"19",name:"DualPipe 并行",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/10-llms-from-scratch/19-dualpipe-parallelism/"},
      {num:"20",name:"DeepSeek-V3 架构走读",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/10-llms-from-scratch/20-deepseek-v3-walkthrough/"},
      {num:"21",name:"Jamba——混合 SSM-Transformer",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/10-llms-from-scratch/21-jamba-hybrid-ssm-transformer/"},
      {num:"22",name:"异步与 Hogwild! 推理",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/10-llms-from-scratch/22-async-hogwild-inference/"}
    ]
  },
  {
    id: "phase-11",
    num: "11",
    title: "LLM 工程",
    lessons: 17,
    desc: "将 LLM 投入生产使用。",
    items: [
      {num:"01",name:"提示工程：技巧与模式",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/11-llm-engineering/01-prompt-engineering/"},
      {num:"02",name:"Few-Shot、CoT、思维树",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/11-llm-engineering/02-few-shot-cot/"},
      {num:"03",name:"结构化输出",type:"build",lang:"Python、TypeScript",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/11-llm-engineering/03-structured-outputs/"},
      {num:"04",name:"嵌入与向量表示",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/11-llm-engineering/04-embeddings/"},
      {num:"05",name:"上下文工程",type:"build",lang:"Python、TypeScript",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/11-llm-engineering/05-context-engineering/"},
      {num:"06",name:"RAG：检索增强生成",type:"build",lang:"Python、TypeScript",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/11-llm-engineering/06-rag/"},
      {num:"07",name:"高级 RAG：分块、重排序",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/11-llm-engineering/07-advanced-rag/"},
      {num:"08",name:"使用 LoRA 与 QLoRA 微调",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/11-llm-engineering/08-fine-tuning-lora/"},
      {num:"09",name:"函数调用与工具使用",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/11-llm-engineering/09-function-calling/"},
      {num:"10",name:"评估与测试",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/11-llm-engineering/10-evaluation/"},
      {num:"11",name:"缓存、速率限制与成本",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/11-llm-engineering/11-caching-cost/"},
      {num:"12",name:"护栏与安全",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/11-llm-engineering/12-guardrails/"},
      {num:"13",name:"构建生产级 LLM 应用",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/11-llm-engineering/13-production-app/"},
      {num:"14",name:"模型上下文协议 (MCP)",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/11-llm-engineering/14-model-context-protocol/"},
      {num:"15",name:"提示缓存与上下文缓存",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/11-llm-engineering/15-prompt-caching/"},
      {num:"16",name:"LangGraph：用于智能体的状态机",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/11-llm-engineering/16-langgraph-state-machines/"},
      {num:"17",name:"智能体框架权衡",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/11-llm-engineering/17-agent-framework-tradeoffs/"}
    ]
  },
  {
    id: "phase-12",
    num: "12",
    title: "多模态 AI",
    lessons: 25,
    desc: "跨模态看、听、读和推理——从 ViT 补丁到计算机使用智能体。",
    items: [
      {num:"01",name:"Vision Transformers 与补丁-Token 原语",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/12-multimodal-ai/01-vision-transformer-patch-tokens/"},
      {num:"02",name:"CLIP 与对比视觉-语言预训练",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/12-multimodal-ai/02-clip-contrastive-pretraining/"},
      {num:"03",name:"BLIP-2 Q-Former 作为模态桥梁",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/12-multimodal-ai/03-blip2-qformer-bridge/"},
      {num:"04",name:"Flamingo 与门控交叉注意力",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/12-multimodal-ai/04-flamingo-gated-cross-attention/"},
      {num:"05",name:"LLaVA 与视觉指令微调",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/12-multimodal-ai/05-llava-visual-instruction-tuning/"},
      {num:"06",name:"任意分辨率视觉——Patch-n'-Pack 与 NaFlex",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/12-multimodal-ai/06-any-resolution-patch-n-pack/"},
      {num:"07",name:"开放权重 VLM 配方：真正重要的东西",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/12-multimodal-ai/07-open-weight-vlm-recipes/"},
      {num:"08",name:"LLaVA-OneVision：单图、多图、视频",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/12-multimodal-ai/08-llava-onevision-single-multi-video/"},
      {num:"09",name:"Qwen-VL 家族与动态 FPS 视频",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/12-multimodal-ai/09-qwen-vl-family-dynamic-fps/"},
      {num:"10",name:"InternVL3 原生多模态预训练",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/12-multimodal-ai/10-internvl3-native-multimodal/"},
      {num:"11",name:"Chameleon 早期融合 Token-Only",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/12-multimodal-ai/11-chameleon-early-fusion-tokens/"},
      {num:"12",name:"Emu3 用于生成的下一 Token 预测",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/12-multimodal-ai/12-emu3-next-token-for-generation/"},
      {num:"13",name:"Transfusion 自回归 + 扩散",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/12-multimodal-ai/13-transfusion-autoregressive-diffusion/"},
      {num:"14",name:"Show-o 离散扩散统一",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/12-multimodal-ai/14-show-o-discrete-diffusion-unified/"},
      {num:"15",name:"Janus-Pro 解耦编码器",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/12-multimodal-ai/15-janus-pro-decoupled-encoders/"},
      {num:"16",name:"MIO 任意到任意流式",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/12-multimodal-ai/16-mio-any-to-any-streaming/"},
      {num:"17",name:"视频-语言时序定位",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/12-multimodal-ai/17-video-language-temporal-grounding/"},
      {num:"18",name:"百万 Token 上下文的长视频",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/12-multimodal-ai/18-long-video-million-token/"},
      {num:"19",name:"音频-语言模型：从 Whisper 到 AF3",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/12-multimodal-ai/19-audio-language-whisper-to-af3/"},
      {num:"20",name:"全模态模型：Thinker-Talker 流式",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/12-multimodal-ai/20-omni-models-thinker-talker/"},
      {num:"21",name:"具身 VLA：RT-2、OpenVLA、π0、GR00T",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/12-multimodal-ai/21-embodied-vlas-openvla-pi0-groot/"},
      {num:"22",name:"文档与图表理解",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/12-multimodal-ai/22-document-diagram-understanding/"},
      {num:"23",name:"ColPali 视觉原生文档 RAG",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/12-multimodal-ai/23-colpali-vision-native-rag/"},
      {num:"24",name:"多模态 RAG 与跨模态检索",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/12-multimodal-ai/24-multimodal-rag-cross-modal/"},
      {num:"25",name:"多模态智能体与计算机使用（毕业项目）",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/12-multimodal-ai/25-multimodal-agents-computer-use/"}
    ]
  },
  {
    id: "phase-13",
    num: "13",
    title: "工具与协议",
    lessons: 23,
    desc: "AI 与真实世界之间的接口。",
    items: [
      {num:"01",name:"工具接口",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/13-tools-and-protocols/01-the-tool-interface/"},
      {num:"02",name:"函数调用深入",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/13-tools-and-protocols/02-function-calling-deep-dive/"},
      {num:"03",name:"并行与流式工具调用",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/13-tools-and-protocols/03-parallel-and-streaming-tool-calls/"},
      {num:"04",name:"结构化输出",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/13-tools-and-protocols/04-structured-output/"},
      {num:"05",name:"工具 Schema 设计",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/13-tools-and-protocols/05-tool-schema-design/"},
      {num:"06",name:"MCP 基础",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/13-tools-and-protocols/06-mcp-fundamentals/"},
      {num:"07",name:"构建 MCP 服务器",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/13-tools-and-protocols/07-building-an-mcp-server/"},
      {num:"08",name:"构建 MCP 客户端",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/13-tools-and-protocols/08-building-an-mcp-client/"},
      {num:"09",name:"MCP 传输",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/13-tools-and-protocols/09-mcp-transports/"},
      {num:"10",name:"MCP 资源与提示",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/13-tools-and-protocols/10-mcp-resources-and-prompts/"},
      {num:"11",name:"MCP 采样",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/13-tools-and-protocols/11-mcp-sampling/"},
      {num:"12",name:"MCP Roots 与 Elicitation",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/13-tools-and-protocols/12-mcp-roots-and-elicitation/"},
      {num:"13",name:"MCP 异步任务",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/13-tools-and-protocols/13-mcp-async-tasks/"},
      {num:"14",name:"MCP 应用",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/13-tools-and-protocols/14-mcp-apps/"},
      {num:"15",name:"MCP 安全 I——工具投毒",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/13-tools-and-protocols/15-mcp-security-tool-poisoning/"},
      {num:"16",name:"MCP 安全 II——OAuth 2.1",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/13-tools-and-protocols/16-mcp-security-oauth-2-1/"},
      {num:"17",name:"MCP 网关与注册表",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/13-tools-and-protocols/17-mcp-gateways-and-registries/"},
      {num:"18",name:"生产环境 MCP 认证——DCR + JWKS on iii",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/13-tools-and-protocols/18-mcp-auth-production/"},
      {num:"19",name:"A2A 协议",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/13-tools-and-protocols/19-a2a-protocol/"},
      {num:"20",name:"OpenTelemetry GenAI",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/13-tools-and-protocols/20-opentelemetry-genai/"},
      {num:"21",name:"LLM 路由层",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/13-tools-and-protocols/21-llm-routing-layer/"},
      {num:"22",name:"技能与智能体 SDK",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/13-tools-and-protocols/22-skills-and-agent-sdks/"},
      {num:"23",name:"毕业项目——工具生态系统",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/13-tools-and-protocols/23-capstone-tool-ecosystem/"}
    ]
  },
  {
    id: "phase-14",
    num: "14",
    title: "智能体工程",
    lessons: 42,
    desc: "从第一性原理构建智能体——循环、记忆、规划、框架、基准测试、生产、工作台。",
    items: [
      {num:"01",name:"智能体循环",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/01-the-agent-loop/"},
      {num:"02",name:"ReWOO 与规划-执行",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/02-rewoo-plan-and-execute/"},
      {num:"03",name:"Reflexion 与语言强化学习",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/03-reflexion-verbal-rl/"},
      {num:"04",name:"思维树与 LATS",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/04-tree-of-thoughts-lats/"},
      {num:"05",name:"Self-Refine 与 CRITIC",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/05-self-refine-and-critic/"},
      {num:"06",name:"工具使用与函数调用",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/06-tool-use-and-function-calling/"},
      {num:"07",name:"记忆——虚拟上下文与 MemGPT",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/07-memory-virtual-context-memgpt/"},
      {num:"08",name:"记忆块与睡眠时计算",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/08-memory-blocks-sleep-time-compute/"},
      {num:"09",name:"混合记忆——Mem0 向量 + 图 + KV",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/09-hybrid-memory-mem0/"},
      {num:"10",name:"技能库与终身学习——Voyager",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/10-skill-libraries-voyager/"},
      {num:"11",name:"使用 HTN 和进化搜索进行规划",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/11-planning-htn-and-evolutionary/"},
      {num:"12",name:"Anthropic 的工作流模式",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/12-anthropic-workflow-patterns/"},
      {num:"13",name:"LangGraph——有状态图与持久执行",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/13-langgraph-stateful-graphs/"},
      {num:"14",name:"AutoGen v0.4——Actor 模型",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/14-autogen-actor-model/"},
      {num:"15",name:"CrewAI——基于角色的团队与流程",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/15-crewai-role-based-crews/"},
      {num:"16",name:"OpenAI Agents SDK——交接、护栏、追踪",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/16-openai-agents-sdk/"},
      {num:"17",name:"Claude Agent SDK——子智能体与会话存储",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/17-claude-agent-sdk/"},
      {num:"18",name:"Agno 与 Mastra——生产运行时",type:"learn",lang:"Python、TypeScript",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/18-agno-and-mastra-runtimes/"},
      {num:"19",name:"基准测试——SWE-bench、GAIA、AgentBench",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/19-benchmarks-swebench-gaia/"},
      {num:"20",name:"基准测试——WebArena 与 OSWorld",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/20-benchmarks-webarena-osworld/"},
      {num:"21",name:"计算机使用——Claude、OpenAI CUA、Gemini",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/21-computer-use-agents/"},
      {num:"22",name:"语音智能体——Pipecat 与 LiveKit",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/22-voice-agents-pipecat-livekit/"},
      {num:"23",name:"OpenTelemetry GenAI 语义约定",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/23-otel-genai-conventions/"},
      {num:"24",name:"智能体可观测性——Langfuse、Phoenix、Opik",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/24-agent-observability-platforms/"},
      {num:"25",name:"多智能体辩论与协作",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/25-multi-agent-debate/"},
      {num:"26",name:"失败模式——智能体为何会崩溃",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/26-failure-modes-agentic/"},
      {num:"27",name:"提示注入与 PVE 防御",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/27-prompt-injection-defense/"},
      {num:"28",name:"编排模式——监督者、群体、层级",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/28-orchestration-patterns/"},
      {num:"29",name:"生产运行时——队列、事件、定时任务",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/29-production-runtimes/"},
      {num:"30",name:"评估驱动的智能体开发",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/30-eval-driven-agent-development/"},
      {num:"31",name:"智能体工作台：为什么有能力的模型仍然失败",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/31-agent-workbench-why-models-fail/"},
      {num:"32",name:"最小智能体工作台",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/32-minimal-agent-workbench/"},
      {num:"33",name:"作为可执行约束的智能体指令",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/33-instructions-as-executable-constraints/"},
      {num:"34",name:"仓库记忆与持久状态",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/34-repo-memory-and-state/"},
      {num:"35",name:"智能体初始化脚本",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/35-initialization-scripts/"},
      {num:"36",name:"范围合约与任务边界",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/36-scope-contracts/"},
      {num:"37",name:"运行时反馈循环",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/37-runtime-feedback-loops/"},
      {num:"38",name:"验证门",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/38-verification-gates/"},
      {num:"39",name:"审查智能体：将构建者与评分者分离",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/39-reviewer-agent/"},
      {num:"40",name:"多会话交接",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/40-multi-session-handoff/"},
      {num:"41",name:"在真实仓库上使用工作台",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/41-workbench-for-real-repos/"},
      {num:"42",name:"毕业项目：交付可复用的智能体工作台包",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/14-agent-engineering/42-agent-workbench-capstone/"}
    ]
  },
  {
    id: "phase-15",
    num: "15",
    title: "自主系统",
    lessons: 22,
    desc: "长周期智能体、自我改进与 2026 安全栈。",
    items: [
      {num:"01",name:"从聊天机器人到长周期智能体 (METR)",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/15-autonomous-systems/01-long-horizon-agents/"},
      {num:"02",name:"STaR、V-STaR、Quiet-STaR：自学习推理",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/15-autonomous-systems/02-star-family-reasoning/"},
      {num:"03",name:"AlphaEvolve：进化编码智能体",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/15-autonomous-systems/03-alphaevolve-evolutionary-coding/"},
      {num:"04",name:"Darwin Gödel 机器：自修改智能体",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/15-autonomous-systems/04-darwin-godel-machine/"},
      {num:"05",name:"AI Scientist v2：研讨会级别的研究",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/15-autonomous-systems/05-ai-scientist-v2/"},
      {num:"06",name:"自动对齐研究 (Anthropic AAR)",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/15-autonomous-systems/06-automated-alignment-research/"},
      {num:"07",name:"递归自我改进：能力 vs 对齐",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/15-autonomous-systems/07-recursive-self-improvement/"},
      {num:"08",name:"有界自我改进设计",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/15-autonomous-systems/08-bounded-self-improvement/"},
      {num:"09",name:"自主编码智能体格局 (SWE-bench, CodeAct)",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/15-autonomous-systems/09-coding-agent-landscape/"},
      {num:"10",name:"Claude Code 权限模式与自动模式",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/15-autonomous-systems/10-claude-code-permission-modes/"},
      {num:"11",name:"浏览器智能体与间接提示注入",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/15-autonomous-systems/11-browser-agents/"},
      {num:"12",name:"用于长时间运行智能体的持久执行",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/15-autonomous-systems/12-durable-execution/"},
      {num:"13",name:"操作预算、迭代上限、成本调控器",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/15-autonomous-systems/13-cost-governors/"},
      {num:"14",name:"紧急停止开关、熔断器、金丝雀令牌",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/15-autonomous-systems/14-kill-switches-canaries/"},
      {num:"15",name:"HITL：建议-然后-提交",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/15-autonomous-systems/15-propose-then-commit/"},
      {num:"16",name:"检查点与回滚",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/15-autonomous-systems/16-checkpoints-rollback/"},
      {num:"17",name:"宪法 AI 与规则覆盖",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/15-autonomous-systems/17-constitutional-ai/"},
      {num:"18",name:"Llama Guard 与输入/输出分类",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/15-autonomous-systems/18-llama-guard/"},
      {num:"19",name:"Anthropic 负责任扩展策略 v3.0",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/15-autonomous-systems/19-anthropic-rsp/"},
      {num:"20",name:"OpenAI 准备框架与 DeepMind FSF",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/15-autonomous-systems/20-openai-preparedness-deepmind-fsf/"},
      {num:"21",name:"METR 时间范围与外部评估",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/15-autonomous-systems/21-metr-external-evaluation/"},
      {num:"22",name:"CAIS、CAISI 与社会规模风险",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/15-autonomous-systems/22-cais-caisi-societal-risk/"}
    ]
  },
  {
    id: "phase-16",
    num: "16",
    title: "多智能体与群体智能",
    lessons: 25,
    desc: "协调、涌现与集体智能。",
    items: [
      {num:"01",name:"为什么是多智能体",type:"learn",lang:"TypeScript",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/16-multi-agent-and-swarms/01-why-multi-agent/"},
      {num:"02",name:"FIPA-ACL 传统与言语行为",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/16-multi-agent-and-swarms/02-fipa-acl-heritage/"},
      {num:"03",name:"通信协议",type:"build",lang:"TypeScript",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/16-multi-agent-and-swarms/03-communication-protocols/"},
      {num:"04",name:"多智能体原语模型",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/16-multi-agent-and-swarms/04-primitive-model/"},
      {num:"05",name:"监督者/编排者-工作者模式",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/16-multi-agent-and-swarms/05-supervisor-orchestrator-pattern/"},
      {num:"06",name:"层级架构与分解漂移",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/16-multi-agent-and-swarms/06-hierarchical-architecture/"},
      {num:"07",name:"心智社会与多智能体辩论",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/16-multi-agent-and-swarms/07-society-of-mind-debate/"},
      {num:"08",name:"角色专业化——规划者/批评者/执行者/验证者",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/16-multi-agent-and-swarms/08-role-specialization/"},
      {num:"09",name:"并行群体与网络架构",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/16-multi-agent-and-swarms/09-parallel-swarm-networks/"},
      {num:"10",name:"群聊与发言者选择",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/16-multi-agent-and-swarms/10-group-chat-speaker-selection/"},
      {num:"11",name:"交接与例程（无状态编排）",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/16-multi-agent-and-swarms/11-handoffs-and-routines/"},
      {num:"12",name:"A2A——智能体到智能体协议",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/16-multi-agent-and-swarms/12-a2a-protocol/"},
      {num:"13",name:"共享记忆与黑板模式",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/16-multi-agent-and-swarms/13-shared-memory-blackboard/"},
      {num:"14",name:"共识与拜占庭容错",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/16-multi-agent-and-swarms/14-consensus-and-bft/"},
      {num:"15",name:"投票、自一致性与辩论拓扑",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/16-multi-agent-and-swarms/15-voting-debate-topology/"},
      {num:"16",name:"协商与讨价还价",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/16-multi-agent-and-swarms/16-negotiation-bargaining/"},
      {num:"17",name:"生成式智能体与涌现模拟",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/16-multi-agent-and-swarms/17-generative-agents-simulation/"},
      {num:"18",name:"心智理论与涌现协调",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/16-multi-agent-and-swarms/18-theory-of-mind-coordination/"},
      {num:"19",name:"群体优化 (PSO、ACO)",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/16-multi-agent-and-swarms/19-swarm-optimization-pso-aco/"},
      {num:"20",name:"MARL——MADDPG、QMIX、MAPPO",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/16-multi-agent-and-swarms/20-marl-maddpg-qmix-mappo/"},
      {num:"21",name:"智能体经济、Token 激励、声誉",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/16-multi-agent-and-swarms/21-agent-economies/"},
      {num:"22",name:"生产扩展——队列、检查点、持久性",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/16-multi-agent-and-swarms/22-production-scaling-queues-checkpoints/"},
      {num:"23",name:"失败模式——MAST、群体思维、单一文化",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/16-multi-agent-and-swarms/23-failure-modes-mast-groupthink/"},
      {num:"24",name:"评估与协调基准测试",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/16-multi-agent-and-swarms/24-evaluation-coordination-benchmarks/"},
      {num:"25",name:"案例研究与 2026 最前沿",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/16-multi-agent-and-swarms/25-case-studies-2026-sota/"}
    ]
  },
  {
    id: "phase-17",
    num: "17",
    title: "基础设施与生产",
    lessons: 28,
    desc: "将 AI 交付到真实世界。",
    wip: true,
    items: [
      {num:"01",name:"托管 LLM 平台——Bedrock、Azure OpenAI、Vertex AI",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/17-infrastructure-and-production/01-managed-llm-platforms-bedrock-azure-vertex/"},
      {num:"02",name:"推理平台经济学——Fireworks、Together、Baseten、Modal",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/17-infrastructure-and-production/02-inference-platform-economics-fireworks-together-baseten-modal/"},
      {num:"03",name:"Kubernetes 上的 GPU 自动扩缩——Karpenter、KAI Scheduler",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/17-infrastructure-and-production/03-gpu-autoscaling-on-k8s-karpenter-kai-scheduler/"},
      {num:"04",name:"vLLM 服务内部——PagedAttention、连续批处理、分块预填充",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/17-infrastructure-and-production/04-vllm-serving-internals-pagedattention-continuous-batching-chunked-prefill/"},
      {num:"05",name:"生产环境中的 EAGLE-3 推测解码",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/17-infrastructure-and-production/05-eagle-3-speculative-decoding-in-production/"},
      {num:"06",name:"SGLang 与面向前缀密集型工作负载的 RadixAttention",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/17-infrastructure-and-production/06-sglang-and-radixattention-for-prefix-heavy-workloads/"},
      {num:"07",name:"在 Blackwell 上使用 FP8 和 NVFP4 的 TensorRT-LLM",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/17-infrastructure-and-production/07-tensorrt-llm-with-fp8-and-nvfp4-on-blackwell/"},
      {num:"08",name:"推理指标——TTFT、TPOT、ITL、Goodput、P99",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/17-infrastructure-and-production/08-inference-metrics-ttft-tpot-itl-goodput-p99/"},
      {num:"09",name:"生产量化——AWQ、GPTQ、GGUF、FP8、NVFP4",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/17-infrastructure-and-production/09-production-quantization-awq-gptq-gguf-fp8-nvfp4/"},
      {num:"10",name:"无服务器 LLM 的冷启动缓解",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/17-infrastructure-and-production/10-cold-start-mitigation-for-serverless-llms/"},
      {num:"11",name:"多区域 LLM 服务与 KV 缓存局部性",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/17-infrastructure-and-production/11-multi-region-llm-serving-kv-cache-locality/"},
      {num:"12",name:"边缘推理——ANE、Hexagon、WebGPU、Jetson",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/17-infrastructure-and-production/12-edge-inference-ane-hexagon-webgpu-jetson/"},
      {num:"13",name:"LLM 可观测性栈选择",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/17-infrastructure-and-production/13-llm-observability-stack-selection/"},
      {num:"14",name:"提示缓存与语义缓存经济学",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/17-infrastructure-and-production/14-prompt-caching-and-semantic-cache-economics/"},
      {num:"15",name:"批量 API——50% 折扣作为行业标准",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/17-infrastructure-and-production/15-batch-apis-50-discount-as-industry-standard/"},
      {num:"16",name:"模型路由作为成本降低原语",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/17-infrastructure-and-production/16-model-routing-as-a-cost-reduction-primitive/"},
      {num:"17",name:"分离式预填充/解码——NVIDIA Dynamo 与 llm-d",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/17-infrastructure-and-production/17-disaggregated-prefill-decode-nvidia-dynamo-llm-d/"},
      {num:"18",name:"带有 LMCache KV 卸载的 vLLM 生产栈",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/17-infrastructure-and-production/18-vllm-production-stack-with-lmcache-kv-offloading/"},
      {num:"19",name:"AI 网关——LiteLLM、Portkey、Kong、Bifrost",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/17-infrastructure-and-production/19-ai-gateways-litellm-portkey-kong-bifrost/"},
      {num:"20",name:"影子、金丝雀与渐进式部署",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/17-infrastructure-and-production/20-shadow-canary-and-progressive-deployments/"},
      {num:"21",name:"LLM 功能 A/B 测试——GrowthBook 与 Statsig",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/17-infrastructure-and-production/21-ab-testing-llm-features-growthbook-statsig/"},
      {num:"22",name:"LLM API 负载测试——k6、LLMPerf、GenAI-Perf",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/17-infrastructure-and-production/22-llm-api-load-testing-k6-llmperf-genai-perf/"},
      {num:"23",name:"AI 的 SRE——多智能体事件响应",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/17-infrastructure-and-production/23-sre-for-ai-multi-agent-incident-response/"},
      {num:"24",name:"LLM 生产的混沌工程",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/17-infrastructure-and-production/24-chaos-engineering-for-llm-production/"},
      {num:"25",name:"安全——密钥、PII 脱敏、审计日志",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/17-infrastructure-and-production/25-security-keys-pii-sanitization-audit-logs/"},
      {num:"26",name:"合规——SOC 2、HIPAA、GDPR、EU AI Act、ISO 42001",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/17-infrastructure-and-production/26-compliance-soc2-hipaa-gdpr-eu-ai-act-iso-42001/"},
      {num:"27",name:"LLM 的 FinOps——单位经济学与多租户归属",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/17-infrastructure-and-production/27-finops-for-llms-unit-economics-multi-tenant-attribution/"},
      {num:"28",name:"自托管服务选择——llama.cpp、Ollama、TGI、vLLM、SGLang",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/17-infrastructure-and-production/28-self-hosted-serving-options-llama-cpp-ollama-tgi-vllm-sglang/"}
    ]
  },
  {
    id: "phase-18",
    num: "18",
    title: "伦理、安全与对齐",
    lessons: 30,
    desc: "构建帮助人类的 AI。这不是可选项。",
    items: [
      {num:"01",name:"指令遵循作为对齐信号",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/18-ethics-safety-alignment/01-instruction-following-alignment-signal/"},
      {num:"02",name:"奖励破解与古德哈特定律",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/18-ethics-safety-alignment/02-reward-hacking-goodhart/"},
      {num:"03",name:"直接偏好优化家族",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/18-ethics-safety-alignment/03-direct-preference-optimization-family/"},
      {num:"04",name:"谄媚作为 RLHF 放大效应",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/18-ethics-safety-alignment/04-sycophancy-rlhf-amplification/"},
      {num:"05",name:"宪法 AI 与 RLAIF",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/18-ethics-safety-alignment/05-constitutional-ai-rlaif/"},
      {num:"06",name:"元优化与欺骗性对齐",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/18-ethics-safety-alignment/06-mesa-optimization-deceptive-alignment/"},
      {num:"07",name:"潜伏者智能体——持续性欺骗",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/18-ethics-safety-alignment/07-sleeper-agents-persistent-deception/"},
      {num:"08",name:"前沿模型中的上下文内谋划",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/18-ethics-safety-alignment/08-in-context-scheming-frontier-models/"},
      {num:"09",name:"对齐伪装",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/18-ethics-safety-alignment/09-alignment-faking/"},
      {num:"10",name:"AI 控制——尽管存在颠覆仍确保安全",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/18-ethics-safety-alignment/10-ai-control-subversion/"},
      {num:"11",name:"可扩展监督与弱到强",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/18-ethics-safety-alignment/11-scalable-oversight-weak-to-strong/"},
      {num:"12",name:"红队测试：PAIR 与自动化攻击",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/18-ethics-safety-alignment/12-red-teaming-pair-automated-attacks/"},
      {num:"13",name:"多示例越狱",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/18-ethics-safety-alignment/13-many-shot-jailbreaking/"},
      {num:"14",name:"ASCII 艺术与视觉越狱",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/18-ethics-safety-alignment/14-ascii-art-visual-jailbreaks/"},
      {num:"15",name:"间接提示注入",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/18-ethics-safety-alignment/15-indirect-prompt-injection/"},
      {num:"16",name:"红队工具：Garak、Llama Guard、PyRIT",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/18-ethics-safety-alignment/16-red-team-tooling-garak-llamaguard-pyrit/"},
      {num:"17",name:"WMDP 与双重用途能力评估",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/18-ethics-safety-alignment/17-wmdp-dual-use-evaluation/"},
      {num:"18",name:"前沿安全框架——RSP、PF、FSF",type:"learn",lang:"—",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/18-ethics-safety-alignment/18-frontier-safety-frameworks-rsp-pf-fsf/"},
      {num:"19",name:"模型福祉研究",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/18-ethics-safety-alignment/19-model-welfare-research/"},
      {num:"20",name:"偏见与代表性伤害",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/18-ethics-safety-alignment/20-bias-representational-harm/"},
      {num:"21",name:"公平性标准：群体、个体、反事实",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/18-ethics-safety-alignment/21-fairness-criteria-group-individual-counterfactual/"},
      {num:"22",name:"LLM 的差分隐私",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/18-ethics-safety-alignment/22-differential-privacy-for-llms/"},
      {num:"23",name:"水印：SynthID、Stable Signature、C2PA",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/18-ethics-safety-alignment/23-watermarking-synthid-stable-signature-c2pa/"},
      {num:"24",name:"监管框架：欧盟、美国、英国、韩国",type:"learn",lang:"—",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/18-ethics-safety-alignment/24-regulatory-frameworks-eu-us-uk-korea/"},
      {num:"25",name:"EchoLeak 与 AI 的 CVE",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/18-ethics-safety-alignment/25-echoleak-cves-for-ai/"},
      {num:"26",name:"模型、系统与数据集卡片",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/18-ethics-safety-alignment/26-model-system-dataset-cards/"},
      {num:"27",name:"数据来源与训练数据治理",type:"learn",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/18-ethics-safety-alignment/27-data-provenance-training-governance/"},
      {num:"28",name:"对齐研究生态：MATS、Redwood、Apollo、METR",type:"learn",lang:"—",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/18-ethics-safety-alignment/28-alignment-research-ecosystem/"},
      {num:"29",name:"内容审核系统：OpenAI、Perspective、Llama Guard",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/18-ethics-safety-alignment/29-moderation-systems-openai-perspective-llamaguard/"},
      {num:"30",name:"双重用途风险：网络、生物、化学、核",type:"learn",lang:"—",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/18-ethics-safety-alignment/30-dual-use-risk-cyber-bio-chem-nuclear/"}
    ]
  },
  {
    id: "phase-19",
    num: "19",
    title: "毕业项目",
    lessons: 17,
    desc: "2026 端到端可交付产品，每个 20-40 小时。",
    items: [
      {num:"01",name:"终端原生编码智能体",type:"build",lang:"TypeScript、Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/19-capstone-projects/01-terminal-native-coding-agent/"},
      {num:"02",name:"对代码库进行 RAG（跨仓库语义搜索）",type:"build",lang:"Python、TypeScript",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/19-capstone-projects/02-rag-over-codebase/"},
      {num:"03",name:"实时语音助手（ASR → LLM → TTS）",type:"build",lang:"Python、TypeScript",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/19-capstone-projects/03-realtime-voice-assistant/"},
      {num:"04",name:"多模态文档问答（视觉优先）",type:"build",lang:"Python、TypeScript",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/19-capstone-projects/04-multimodal-document-qa/"},
      {num:"05",name:"自主研究智能体（AI-Scientist 级别）",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/19-capstone-projects/05-autonomous-research-agent/"},
      {num:"06",name:"Kubernetes DevOps 故障排除智能体",type:"build",lang:"Python、TypeScript",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/19-capstone-projects/06-devops-troubleshooting-agent/"},
      {num:"07",name:"端到端微调流水线",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/19-capstone-projects/07-end-to-end-fine-tuning-pipeline/"},
      {num:"08",name:"生产 RAG 聊天机器人（受监管行业）",type:"build",lang:"Python、TypeScript",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/19-capstone-projects/08-production-rag-chatbot/"},
      {num:"09",name:"代码迁移智能体（仓库级别升级）",type:"build",lang:"Python、TypeScript",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/19-capstone-projects/09-code-migration-agent/"},
      {num:"10",name:"多智能体软件工程团队",type:"build",lang:"Python、TypeScript",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/19-capstone-projects/10-multi-agent-software-team/"},
      {num:"11",name:"LLM 可观测性与评估仪表盘",type:"build",lang:"TypeScript、Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/19-capstone-projects/11-llm-observability-dashboard/"},
      {num:"12",name:"视频理解流水线（场景 → 问答）",type:"build",lang:"Python、TypeScript",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/19-capstone-projects/12-video-understanding-pipeline/"},
      {num:"13",name:"带有注册表和治理的 MCP 服务器",type:"build",lang:"Python、TypeScript",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/19-capstone-projects/13-mcp-server-with-registry/"},
      {num:"14",name:"推测解码推理服务器",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/19-capstone-projects/14-speculative-decoding-server/"},
      {num:"15",name:"宪法安全防护 + 红队靶场",type:"build",lang:"Python",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/19-capstone-projects/15-constitutional-safety-harness/"},
      {num:"16",name:"GitHub Issue 到 PR 的自主智能体",type:"build",lang:"Python、TypeScript",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/19-capstone-projects/16-github-issue-to-pr-agent/"},
      {num:"17",name:"个人 AI 导师（自适应、多模态）",type:"build",lang:"Python、TypeScript",url:"https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/phases/19-capstone-projects/17-personal-ai-tutor/"}
    ]
  }
];

// ---- Render Phase Accordions ----
function renderPhases() {
  const container = document.getElementById('phases-container');
  if (!container) return;

  let html = '';
  phases.forEach((phase, index) => {
    html += `
    <div class="phase-accordion" id="${phase.id}">
      <button class="phase-header" onclick="togglePhase(this)" aria-expanded="false">
        <div class="phase-header-left">
          <span class="phase-number">${phase.num}</span>
          <div class="min-w-0">
            <div class="phase-title">${phase.title}${phase.wip ? ' <span class="phase-wip-badge">即将上线</span>' : ''}</div>
            <div class="phase-desc">${phase.desc}</div>
          </div>
          <span class="phase-lesson-count">${phase.lessons} 节课</span>
        </div>
        <svg class="phase-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      <div class="phase-body">
        <div class="phase-body-inner">
          <table class="lesson-table">
            <thead>
              <tr>
                <th style="width:2.5rem">#</th>
                <th>课程</th>
                <th style="width:4rem">类型</th>
                <th style="width:8rem">语言</th>
              </tr>
            </thead>
            <tbody>
              ${phase.items.map(item => `
                <tr>
                  <td class="lesson-num">${item.num}</td>
                  <td><a href="${item.url}" class="lesson-link" target="_blank" rel="noopener">${item.name}</a></td>
                  <td><span class="lesson-type ${item.type}">${item.type === 'build' ? '构建' : '学习'}</span></td>
                  <td class="lesson-lang">${item.lang}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>`;
  });
  container.innerHTML = html;
}

// ---- Toggle Phase Accordion ----
function togglePhase(header) {
  const accordion = header.parentElement;
  const body = accordion.querySelector('.phase-body');
  const isOpen = accordion.classList.contains('open');

  // Close all others (optional: remove for multi-open)
  // document.querySelectorAll('.phase-accordion.open').forEach(a => {
  //   if (a !== accordion) togglePhase(a.querySelector('.phase-header'));
  // });

  if (isOpen) {
    accordion.classList.remove('open');
    body.style.maxHeight = '0';
    header.setAttribute('aria-expanded', 'false');
  } else {
    accordion.classList.add('open');
    body.style.maxHeight = body.scrollHeight + 'px';
    header.setAttribute('aria-expanded', 'true');
  }
}

// ---- Update max-height on resize ----
function updatePhaseHeights() {
  document.querySelectorAll('.phase-accordion.open .phase-body').forEach(body => {
    body.style.maxHeight = body.scrollHeight + 'px';
  });
}

// ---- Navbar Scroll Effect ----
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ---- Mobile Menu ----
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const isOpen = menu.classList.contains('hidden');
    if (isOpen) {
      menu.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    } else {
      menu.classList.add('hidden');
      document.body.style.overflow = '';
    }
  });

  // Close menu on link click
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
      document.body.style.overflow = '';
    });
  });
}

// ---- Active Nav Link ----
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActive() {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 100;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }

  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive();
}

// ---- Scroll Progress Bar ----
function initScrollProgress() {
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  document.body.appendChild(bar);

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = progress + '%';
  }, { passive: true });
}

// ---- Back to Top Button ----
function initBackToTop() {
  const btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.setAttribute('aria-label', '回到顶部');
  btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
  document.body.appendChild(btn);

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });
}

// ---- Stagger Animation (Intersection Observer) ----
function initStaggerAnimations() {
  // Add stagger-item class to select elements
  const staggerSelectors = [
    '.stat-item', '.lesson-beat-card', '.artifact-card',
    '.option-card', '.flow-node', 'tbody tr'
  ];

  staggerSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.classList.add('stagger-item');
      el.style.transitionDelay = (i * 50) + 'ms';
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.stagger-item').forEach(el => {
    observer.observe(el);
  });
}

// ---- Check prefers-reduced-motion ----
function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// ---- Smooth scroll for hash links ----
function initSmoothScroll() {
  const behavior = prefersReducedMotion() ? 'auto' : 'smooth';
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior });
      }
    });
  });
}

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  renderPhases();
  initNavbar();
  initMobileMenu();
  initActiveNav();
  initScrollProgress();
  initBackToTop();
  initStaggerAnimations();
  initSmoothScroll();
});

// Resize handler
window.addEventListener('resize', updatePhaseHeights);
