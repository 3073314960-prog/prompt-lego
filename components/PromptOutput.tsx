"use client";

import { useMemo, useState } from "react";
import { Check, Copy } from "lucide-react";
import { PromptResult } from "@/lib/prompt-builder";

type PromptOutputProps = {
  result: PromptResult;
};

export function PromptOutput({ result }: PromptOutputProps) {
  const [copied, setCopied] = useState(false);
  const fullText = useMemo(
    () => `中文提示词:\n${result.zh}\n\n英文提示词:\n${result.en}\n\n负面提示词:\n${result.negative}\n\n推荐比例: ${result.ratio}\n推荐用途: ${result.usage}`,
    [result],
  );

  async function copyPrompt() {
    await navigator.clipboard.writeText(fullText);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <section className="sticky top-4 rounded-[8px] border border-ink/10 bg-ink p-4 text-white shadow-lego">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-bold text-lime">输出结果</p>
          <h2 className="mt-1 text-xl font-black">Prompt 已拼好</h2>
        </div>
        <button
          type="button"
          onClick={copyPrompt}
          className="inline-flex h-10 shrink-0 items-center gap-2 rounded-[8px] bg-white px-3 text-sm font-black text-ink transition hover:-translate-y-0.5"
        >
          {copied ? <Check size={17} /> : <Copy size={17} />}
          {copied ? "已复制" : "一键复制"}
        </button>
      </div>

      <div className="space-y-3">
        <OutputItem title="中文提示词" text={result.zh} />
        <OutputItem title="英文提示词" text={result.en} />
        <OutputItem title="负面提示词" text={result.negative} />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <OutputItem title="推荐比例" text={result.ratio} compact />
          <OutputItem title="推荐用途" text={result.usage} compact />
        </div>
      </div>
    </section>
  );
}

function OutputItem({ title, text, compact = false }: { title: string; text: string; compact?: boolean }) {
  return (
    <div className="rounded-[8px] border border-white/10 bg-white/8 p-3">
      <p className="mb-2 text-xs font-black text-cyan">{title}</p>
      <p className={compact ? "text-sm font-bold leading-6 text-white" : "whitespace-pre-wrap text-sm leading-6 text-slate-100"}>
        {text}
      </p>
    </div>
  );
}
