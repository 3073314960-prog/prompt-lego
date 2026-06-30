export type PromptSelections = {
  workType: string;
  subject: string;
  customSubject: string;
  style: string;
  camera: string;
  light: string;
  scene: string;
  mood: string;
  ratio: string;
  model: string;
};

export type PromptTemplate = {
  id: string;
  name: string;
  description: string;
  selections: PromptSelections;
};

export const optionGroups = [
  {
    key: "workType",
    label: "作品类型",
    options: ["图片", "视频", "头像", "公众号封面", "小红书封面"],
  },
  {
    key: "subject",
    label: "主体",
    options: ["少女", "少年", "动物", "机器人", "建筑", "食物", "自定义输入"],
  },
  {
    key: "style",
    label: "风格",
    options: ["二次元", "写实摄影", "电影感", "赛博朋克", "新海诚风格", "胶片风", "商业海报风"],
  },
  {
    key: "camera",
    label: "镜头",
    options: ["特写", "半身", "全身", "广角", "俯拍", "低角度"],
  },
  {
    key: "light",
    label: "光线",
    options: ["夕阳", "霓虹灯", "窗边光", "柔光", "雨夜", "清晨"],
  },
  {
    key: "scene",
    label: "场景",
    options: ["城市街道", "教室", "海边", "房间", "未来城市", "森林"],
  },
  {
    key: "mood",
    label: "情绪",
    options: ["治愈", "孤独", "热血", "可爱", "高级感", "神秘"],
  },
  {
    key: "ratio",
    label: "画面比例",
    options: ["1:1", "3:2", "16:9", "9:16"],
  },
  {
    key: "model",
    label: "模型类型",
    options: ["Midjourney", "Flux", "Anima", "Sora", "可灵", "通用"],
  },
] as const;

export const defaultSelections: PromptSelections = {
  workType: "图片",
  subject: "少女",
  customSubject: "",
  style: "电影感",
  camera: "半身",
  light: "夕阳",
  scene: "城市街道",
  mood: "治愈",
  ratio: "1:1",
  model: "Midjourney",
};

export const templates: PromptTemplate[] = [
  {
    id: "anime-avatar",
    name: "动漫头像",
    description: "适合社交头像、角色设定图",
    selections: { ...defaultSelections, workType: "头像", style: "二次元", camera: "特写", light: "柔光", scene: "房间", mood: "可爱", ratio: "1:1", model: "Anima" },
  },
  {
    id: "wechat-cover",
    name: "公众号封面",
    description: "适合文章头图和知识栏目封面",
    selections: { ...defaultSelections, workType: "公众号封面", subject: "建筑", style: "商业海报风", camera: "广角", light: "清晨", scene: "未来城市", mood: "高级感", ratio: "16:9", model: "Flux" },
  },
  {
    id: "rednote-cover",
    name: "小红书封面",
    description: "适合生活方式、种草内容封面",
    selections: { ...defaultSelections, workType: "小红书封面", subject: "食物", style: "写实摄影", camera: "俯拍", light: "窗边光", scene: "房间", mood: "治愈", ratio: "3:2", model: "Flux" },
  },
  {
    id: "cinematic-photo",
    name: "电影感照片",
    description: "强叙事感人物与场景照片",
    selections: { ...defaultSelections, style: "电影感", camera: "低角度", light: "雨夜", scene: "城市街道", mood: "孤独", ratio: "16:9", model: "Midjourney" },
  },
  {
    id: "cyber-city",
    name: "赛博朋克城市",
    description: "霓虹、未来建筑、科幻氛围",
    selections: { ...defaultSelections, subject: "建筑", style: "赛博朋克", camera: "广角", light: "霓虹灯", scene: "未来城市", mood: "神秘", ratio: "16:9", model: "Midjourney" },
  },
  {
    id: "healing-girl",
    name: "治愈系少女",
    description: "温柔、清新、情绪化人物画面",
    selections: { ...defaultSelections, subject: "少女", style: "新海诚风格", camera: "半身", light: "夕阳", scene: "海边", mood: "治愈", ratio: "9:16", model: "Anima" },
  },
  {
    id: "game-poster",
    name: "游戏海报",
    description: "适合角色宣传和活动主视觉",
    selections: { ...defaultSelections, workType: "图片", subject: "机器人", style: "赛博朋克", camera: "全身", light: "霓虹灯", scene: "未来城市", mood: "热血", ratio: "9:16", model: "Midjourney" },
  },
  {
    id: "product-ad",
    name: "产品宣传图",
    description: "适合电商、品牌、商业投放",
    selections: { ...defaultSelections, subject: "食物", style: "商业海报风", camera: "特写", light: "柔光", scene: "房间", mood: "高级感", ratio: "1:1", model: "Flux" },
  },
  {
    id: "video-storyboard",
    name: "AI 视频分镜",
    description: "适合短视频开场和镜头设计",
    selections: { ...defaultSelections, workType: "视频", subject: "少年", style: "电影感", camera: "广角", light: "清晨", scene: "森林", mood: "热血", ratio: "16:9", model: "Sora" },
  },
  {
    id: "wallpaper",
    name: "壁纸生成",
    description: "适合手机、桌面和社媒背景图",
    selections: { ...defaultSelections, subject: "动物", style: "胶片风", camera: "全身", light: "清晨", scene: "森林", mood: "神秘", ratio: "9:16", model: "通用" },
  },
];

export const translations: Record<string, string> = {
  图片: "image artwork",
  视频: "video scene",
  头像: "profile avatar",
  公众号封面: "WeChat article cover",
  小红书封面: "RedNote cover",
  少女: "young woman",
  少年: "young man",
  动物: "animal",
  机器人: "robot",
  建筑: "architecture",
  食物: "food",
  自定义输入: "custom subject",
  二次元: "anime style",
  写实摄影: "realistic photography",
  电影感: "cinematic",
  赛博朋克: "cyberpunk",
  新海诚风格: "Makoto Shinkai inspired atmosphere",
  胶片风: "film photography style",
  商业海报风: "commercial poster style",
  特写: "close-up shot",
  半身: "half-body shot",
  全身: "full-body shot",
  广角: "wide-angle shot",
  俯拍: "top-down shot",
  低角度: "low-angle shot",
  夕阳: "sunset lighting",
  霓虹灯: "neon lighting",
  窗边光: "window light",
  柔光: "soft light",
  雨夜: "rainy night lighting",
  清晨: "early morning light",
  城市街道: "city street",
  教室: "classroom",
  海边: "seaside",
  房间: "room",
  未来城市: "futuristic city",
  森林: "forest",
  治愈: "healing mood",
  孤独: "lonely mood",
  热血: "energetic mood",
  可爱: "cute mood",
  高级感: "premium refined mood",
  神秘: "mysterious mood",
};
