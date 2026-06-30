"use client";

import { OptionBlock } from "./OptionBlock";

type OptionSectionProps = {
  title: string;
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
  children?: React.ReactNode;
};

export function OptionSection({ title, options, value, onChange, children }: OptionSectionProps) {
  return (
    <section className="rounded-[8px] border border-slate-200 bg-white/88 p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h2 className="text-base font-black text-ink">{title}</h2>
        <span className="rounded-[6px] bg-mist px-2 py-1 text-xs font-bold text-slate-500">{value}</span>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {options.map((option) => (
          <OptionBlock key={option} label={option} active={value === option} onClick={() => onChange(option)} />
        ))}
      </div>
      {children}
    </section>
  );
}
