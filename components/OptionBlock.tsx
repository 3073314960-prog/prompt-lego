"use client";

type OptionBlockProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

export function OptionBlock({ label, active, onClick }: OptionBlockProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "min-h-11 rounded-[8px] border px-4 py-2 text-sm font-black transition",
        "focus:outline-none focus:ring-2 focus:ring-cyan/40",
        active
          ? "border-ink bg-ink text-white shadow-glow"
          : "border-slate-200 bg-white text-slate-700 shadow-sm hover:-translate-y-0.5 hover:border-cyan/60",
      ].join(" ")}
      aria-pressed={active}
    >
      {label}
    </button>
  );
}
