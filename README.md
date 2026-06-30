# Prompt Lego

一个中文 AI Prompt 积木式拼装器。用户不需要从空白输入框开始写提示词，只要点击作品类型、主体、风格、镜头、光线、场景等选项，就能生成中文提示词、英文提示词、负面提示词和推荐用途。

## 功能

- 首页：产品标题、副标题、开始生成入口
- Prompt 生成页：积木块式选项，高亮当前选择
- 本地模板逻辑：第一版不接真实 AI API
- 输出区域：中文提示词、英文提示词、负面提示词、推荐比例、推荐用途
- 一键复制完整结果
- 模板库：内置 10 个常用模板
- 响应式布局：适配手机、平板和桌面

## 技术栈

- Next.js
- React
- TypeScript
- Tailwind CSS
- lucide-react

## 本地运行

```bash
npm install
npm run dev
```

打开浏览器访问：

```text
http://localhost:3000
```

## 构建生产版本

```bash
npm run build
npm run start
```

## 部署到 Vercel

1. 将项目推送到 GitHub、GitLab 或 Bitbucket。
2. 登录 Vercel。
3. 点击 `Add New Project`，选择这个仓库。
4. Framework Preset 选择 `Next.js`。
5. Build Command 使用默认值 `npm run build`。
6. Install Command 使用默认值 `npm install`。
7. 点击 `Deploy`。

## 代码结构

```text
app/
  page.tsx              首页
  generate/page.tsx     Prompt 生成页
  globals.css           全局样式
components/
  OptionBlock.tsx       单个积木选项
  OptionSection.tsx     选项分组
  PromptOutput.tsx      输出和复制区域
  TemplateLibrary.tsx   模板库
lib/
  prompt-data.ts        选项、默认值、模板、翻译词典
  prompt-builder.ts     本地 Prompt 生成逻辑
```

后续接入真实 AI API 时，可以优先扩展 `lib/prompt-builder.ts`，或新增 API Route，例如 `app/api/generate/route.ts`。
