"use client";

import Link from "next/link";
import { ArrowLeft, Blocks, RefreshCcw } from "lucide-react";
import { useMemo, useState } from "react";
import { OptionSection } from "@/components/OptionSection";
import { PromptOutput } from "@/components/PromptOutput";
import { TemplateLibrary } from "@/components/TemplateLibrary";
import { buildPrompt } from "@/lib/prompt-builder";
import { defaultSelections, optionGroups, PromptSelections, PromptTemplate, templates } from "@/lib/prompt-data";

export default function GeneratePage() {
  const [selections, setSelections] = useState<PromptSelections>(defaultSelections);
  const [activeTemplateId, setActiveTemplateId] = useState<string | null>(null);
  const result = useMemo(() => buildPrompt(selections), [selections]);

  function updateSelection(key: keyof PromptSelections, value: string) {
    setSelections((current) => ({ ...current, [key]: value }));
    setActiveTemplateId(null);
  }

  function applyTemplate(template: PromptTemplate) {
    setSelections(template.selections);
    setActiveTemplateId(template.id);
  }

  return (
    <main className="min-h-screen px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-5 flex flex-col gap-3 rounded-[8px] border border-white/70 bg-white/78 p-4 shadow-lego backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link href="/" className="mb-3 inline-flex items-center gap-2 text-sm font-black text-slate-600 hover:text-ink">
              <ArrowLeft size={16} />
              返回首页
            </Link>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-[8px] bg-ink text-lime">
                <Blocks size={23} />
              </span>
              <div>
                <h1 className="text-2xl font-black text-ink sm:text-3xl">Prompt Lego 生成器</h1>
                <p className="mt-1 text-sm font-semibold text-slate-600">点击积木块，组合你的 AI 生图或视频提示词。</p>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              setSelections(defaultSelections);
              setActiveTemplateId(null);
            }}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-[8px] border border-slate-200 bg-white px-4 text-sm font-black text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-coral/50"
          >
            <RefreshCcw size={17} />
            重置
          </button>
        </header>

        <div className="grid gap-5 xl:grid-cols-[260px_minmax(0,1fr)_390px]">
          <TemplateLibrary templates={templates} activeId={activeTemplateId} onApply={applyTemplate} />

          <div className="space-y-4">
            {optionGroups.map((group) => {
              const key = group.key as keyof PromptSelections;
              return (
                <OptionSection
                  key={group.key}
                  title={group.label}
                  options={group.options}
                  value={selections[key]}
                  onChange={(value) => updateSelection(key, value)}
                >
                  {group.key === "subject" && selections.subject === "自定义输入" ? (
                    <input
                      value={selections.customSubject}
                      onChange={(event) => updateSelection("customSubject", event.target.value)}
                      placeholder="输入你的主体，例如：拿咖啡的宇航员"
                      className="mt-3 h-12 w-full rounded-[8px] border border-slate-200 bg-mist px-4 text-sm font-bold text-ink outline-none transition placeholder:text-slate-400 focus:border-cyan focus:bg-white"
                    />
                  ) : null}
                </OptionSection>
              );
            })}
          </div>

          <PromptOutput result={result} />
        </div>
      </div>
    </main>
  );
}
