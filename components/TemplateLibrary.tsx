"use client";

import { Sparkles } from "lucide-react";
import { PromptTemplate } from "@/lib/prompt-data";

type TemplateLibraryProps = {
  templates: PromptTemplate[];
  activeId: string | null;
  onApply: (template: PromptTemplate) => void;
};

export function TemplateLibrary({ templates, activeId, onApply }: TemplateLibraryProps) {
  return (
    <section className="rounded-[8px] border border-slate-200 bg-white/88 p-4 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <Sparkles className="text-cyan" size={20} />
        <h2 className="text-base font-black text-ink">模板库</h2>
      </div>
      <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-1">
        {templates.map((template) => {
          const active = activeId === template.id;
          return (
            <button
              key={template.id}
              type="button"
              onClick={() => onApply(template)}
              className={[
                "rounded-[8px] border p-3 text-left transition focus:outline-none focus:ring-2 focus:ring-cyan/40",
                active ? "border-cyan bg-cyan/10 shadow-glow" : "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-cyan/60",
              ].join(" ")}
            >
              <span className="block font-black text-ink">{template.name}</span>
              <span className="mt-1 block text-sm leading-6 text-slate-500">{template.description}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
