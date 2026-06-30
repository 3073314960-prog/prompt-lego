import { PromptSelections, translations } from "./prompt-data";

const usageMap: Record<string, string> = {
  图片: "通用 AI 生图、灵感草图、社媒配图",
  视频: "AI 视频开场、短片分镜、动态画面描述",
  头像: "社交头像、角色头像、账号视觉识别",
  公众号封面: "公众号头图、知识内容封面、栏目视觉",
  小红书封面: "小红书笔记封面、种草图、生活方式内容",
};

const modelTips: Record<string, string> = {
  Midjourney: "high detail, dramatic composition, rich texture",
  Flux: "clean details, natural rendering, precise subject",
  Anima: "appealing character design, expressive eyes, polished anime rendering",
  Sora: "smooth camera movement, temporal consistency, cinematic pacing",
  可灵: "dynamic motion, realistic scene continuity, vivid atmosphere",
  通用: "high quality, balanced composition, professional lighting",
};

export type PromptResult = {
  zh: string;
  en: string;
  negative: string;
  ratio: string;
  usage: string;
};

export function buildPrompt(selections: PromptSelections): PromptResult {
  const subject = selections.subject === "自定义输入" && selections.customSubject.trim()
    ? selections.customSubject.trim()
    : selections.subject;

  const englishSubject = selections.subject === "自定义输入" && selections.customSubject.trim()
    ? selections.customSubject.trim()
    : translations[selections.subject];

  const zh = [
    `${selections.workType}作品`,
    `主体是${subject}`,
    `${selections.style}视觉风格`,
    `${selections.camera}构图`,
    `${selections.light}氛围`,
    `场景位于${selections.scene}`,
    `整体情绪${selections.mood}`,
    "画面层次丰富，主体清晰，细节精致，色彩协调，专业级构图",
    `${selections.model} 友好提示词`,
  ].join("，");

  const en = [
    `${translations[selections.workType]}`,
    `${englishSubject} as the main subject`,
    translations[selections.style],
    translations[selections.camera],
    translations[selections.light],
    `set in a ${translations[selections.scene]}`,
    translations[selections.mood],
    "clear focal point, refined details, balanced colors, professional composition",
    modelTips[selections.model],
  ].join(", ");

  return {
    zh,
    en,
    negative: "低清晰度，模糊，畸形手指，多余肢体，脸部崩坏，文字水印，过曝，欠曝，噪点，低质量，比例错误，重复主体",
    ratio: selections.ratio,
    usage: usageMap[selections.workType],
  };
}
