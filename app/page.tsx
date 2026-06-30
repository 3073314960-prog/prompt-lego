import Link from "next/link";
import { ArrowRight, Blocks, Sparkles, Wand2 } from "lucide-react";

const highlights = [
  { icon: Blocks, title: "积木式拼装", text: "用点击替代空白输入框，快速组合主体、风格、镜头和场景。" },
  { icon: Wand2, title: "中英双语输出", text: "同步生成中文、英文和负面提示词，适配主流模型。" },
  { icon: Sparkles, title: "模板即开即用", text: "内置封面、头像、视频分镜、海报等常用创作模板。" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-5 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between rounded-[8px] border border-white/70 bg-white/72 px-4 py-3 shadow-lego backdrop-blur">
          <Link href="/" className="flex items-center gap-2 text-lg font-black tracking-wide text-ink">
            <span className="grid h-9 w-9 place-items-center rounded-[8px] bg-ink text-lime">PL</span>
            Prompt Lego
          </Link>
          <Link
            href="/generate"
            className="inline-flex h-10 items-center gap-2 rounded-[8px] bg-ink px-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#1b2030]"
          >
            开始
            <ArrowRight size={16} />
          </Link>
        </nav>

        <div className="grid flex-1 items-center gap-10 py-10 lg:grid-cols-[1.02fr_0.98fr] lg:py-14">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-[8px] border border-cyan/30 bg-white/80 px-3 py-2 text-sm font-bold text-[#096b77] shadow-sm">
              面向中文 AI 创作者的 Prompt 拼装器
            </p>
            <h1 className="text-5xl font-black leading-[1.04] tracking-normal text-ink sm:text-6xl lg:text-7xl">
              Prompt Lego
            </h1>
            <p className="mt-5 max-w-2xl text-xl font-semibold leading-8 text-slate-700 sm:text-2xl">
              不会写提示词，也能拼出专业 AI 作品
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/generate"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-[8px] bg-ink px-6 text-base font-black text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#202638]"
              >
                开始生成
                <ArrowRight size={20} />
              </Link>
              <a
                href="#templates"
                className="inline-flex h-14 items-center justify-center rounded-[8px] border border-slate-200 bg-white px-6 text-base font-black text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-cyan/60"
              >
                查看模板
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="grid gap-3 rounded-[8px] border border-white/80 bg-white/78 p-4 shadow-lego backdrop-blur">
              {["作品类型: 小红书封面", "主体: 少女", "风格: 电影感", "光线: 夕阳", "比例: 9:16"].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-[8px] border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <span className="font-bold text-slate-800">{item}</span>
                  <span className="h-4 w-4 rounded-[4px] bg-cyan" style={{ backgroundColor: index % 2 ? "#b8ef45" : "#11c5d9" }} />
                </div>
              ))}
              <div className="rounded-[8px] bg-ink p-5 text-white">
                <p className="text-sm font-bold text-lime">生成结果</p>
                <p className="mt-2 text-lg font-black leading-7">夕阳下的治愈系少女，电影感构图，柔和胶片质感...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="templates" className="border-y border-white/80 bg-white/60 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm">
              <item.icon className="mb-5 text-cyan" size={30} />
              <h2 className="text-xl font-black text-ink">{item.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
