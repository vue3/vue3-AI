<template>
  <div class="space-y-8">
    <section
      v-if="!portfolioMode"
      class="grid items-center gap-8 rounded-[36px] border border-slate-200/70 bg-white/80 p-8 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-slate-900/70 dark:shadow-cyan-950/20 xl:grid-cols-[1.05fr_0.95fr] xl:p-12"
    >
      <div class="space-y-6">
        <div
          class="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-600 dark:text-cyan-300"
        >
          <span class="h-2 w-2 rounded-full bg-cyan-500"></span>
          AI Product Showcase
        </div>
        <div class="space-y-4">
          <h1
            class="text-4xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-5xl"
          >
            用更清晰的设计，让 AI 产品真正被看见。
          </h1>
          <p
            class="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300"
          >
            这是一个面向作品集和个人品牌设计的 SaaS
            风格演示页，包含清晰的价值主张、现代化交互和可扩展的产品场景。
          </p>
        </div>
        <div class="flex flex-wrap gap-3">
          <router-link to="/dashboard">
            <el-button type="primary" size="large">查看产品体验</el-button>
          </router-link>
          <router-link to="/chat">
            <el-button size="large" plain>体验聊天场景</el-button>
          </router-link>
        </div>
        <div
          class="flex flex-wrap gap-6 text-sm text-slate-500 dark:text-slate-400"
        >
          <span>现代 SaaS 风格</span>
          <span>清晰信息层级</span>
          <span>适合作品集展示</span>
        </div>
      </div>

      <div
        class="rounded-[28px] border border-slate-200/70 bg-slate-950 p-6 text-white shadow-inner dark:border-white/10"
      >
        <div class="mb-4 flex items-center justify-between">
          <p class="text-sm font-medium">AI 工作流</p>
          <span
            class="rounded-full bg-emerald-500/20 px-2.5 py-1 text-xs text-emerald-300"
            >实时运行</span
          >
        </div>
        <div class="space-y-3">
          <div class="rounded-2xl bg-slate-800/80 p-4 text-sm text-slate-300">
            <p class="mb-2 text-xs uppercase tracking-[0.24em] text-slate-500">
              输入
            </p>
            <p>帮我把产品特性提炼为更适合官网展示的文案。</p>
          </div>
          <div class="rounded-2xl bg-cyan-500/15 p-4 text-sm text-cyan-100">
            <p class="mb-2 text-xs uppercase tracking-[0.24em] text-cyan-400">
              输出
            </p>
            <p>已生成一版更清晰、更专业的产品介绍和场景示例。</p>
          </div>
        </div>
      </div>
    </section>

    <section
      v-else
      class="rounded-[36px] border border-slate-200/70 bg-white/80 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-slate-900/70 lg:p-10"
    >
      <div class="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div class="space-y-5">
          <p
            class="text-sm font-medium uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300"
          >
            Portfolio Edition
          </p>
          <h1
            class="text-4xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-5xl"
          >
            我把产品思维与细节体验，做成一页有温度的作品集。
          </h1>
          <p
            class="max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300"
          >
            这是偏个人品牌的极简高级版本，重点呈现思考方式、项目能力与构建习惯，而不是堆砌功能。
          </p>
          <div class="flex flex-wrap gap-3">
            <router-link to="/dashboard">
              <el-button type="primary">查看案例</el-button>
            </router-link>
            <router-link to="/login">
              <el-button plain>联系我</el-button>
            </router-link>
          </div>
        </div>
        <div
          class="rounded-[28px] border border-slate-200/70 bg-slate-50 p-6 shadow-sm dark:border-white/10 dark:bg-slate-950/70"
        >
          <p class="text-sm font-medium text-slate-500 dark:text-slate-400">
            当前能力
          </p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span
              v-for="item in techStack"
              :key="item"
              class="rounded-full border border-slate-200/80 bg-white px-3 py-2 text-sm text-slate-700 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200"
            >
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <section class="grid gap-4 lg:grid-cols-3">
      <article
        v-for="project in projects"
        :key="project.title"
        class="rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 dark:border-white/10 dark:bg-slate-900/60"
      >
        <h2 class="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
          {{ project.title }}
        </h2>
        <p class="text-sm leading-7 text-slate-600 dark:text-slate-400">
          {{ project.description }}
        </p>
      </article>
    </section>

    <section class="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
      <div
        class="rounded-[28px] border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/60"
      >
        <p
          class="text-sm font-medium uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300"
        >
          关于我
        </p>
        <h3 class="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">
          我热爱把复杂想法变成清晰体验
        </h3>
        <p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
          我擅长把产品需求转成易理解的界面结构，关注细节、可用性以及真正让人愿意停留的体验。我更偏向做出“看起来专业、用起来舒服”的产品页面。
        </p>
        <ul class="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
          <li>• 关注产品价值与视觉层次</li>
          <li>• 注重交互反馈与页面节奏</li>
          <li>• 擅长把抽象需求落成可实现的前端体验</li>
        </ul>
      </div>

      <div
        class="rounded-[28px] border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/60"
      >
        <p
          class="text-sm font-medium uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300"
        >
          项目经验
        </p>
        <div class="mt-4 space-y-3">
          <div
            v-for="item in experiences"
            :key="item.title"
            class="rounded-2xl border border-slate-200/70 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-950/70"
          >
            <p class="text-sm font-semibold text-slate-900 dark:text-white">
              {{ item.title }}
            </p>
            <p class="mt-1 text-sm text-slate-600 dark:text-slate-400">
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      class="rounded-[32px] border border-slate-200/70 bg-gradient-to-r from-cyan-500/10 via-white to-slate-100 p-8 shadow-sm dark:border-white/10 dark:from-cyan-500/10 dark:via-slate-900 dark:to-slate-950 lg:p-10"
    >
      <div
        class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"
      >
        <div>
          <p
            class="text-sm font-medium uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300"
          >
            联系方式
          </p>
          <h3
            class="mt-2 text-2xl font-semibold text-slate-900 dark:text-white"
          >
            如果你也在做产品、网站或 AI 创意，我很乐意聊聊
          </h3>
        </div>
        <div class="flex flex-wrap gap-3">
          <a href="mailto:hello@yourdomain.com">
            <el-button type="primary">发送邮件</el-button>
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <el-button plain>查看 GitHub</el-button>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const props = defineProps({
  portfolioMode: {
    type: Boolean,
    default: false,
  },
});

const projects = [
  {
    title: "AI 产品官网",
    description: "为 AI 产品打造更像 SaaS 的品牌体验与高转化页面。",
  },
  {
    title: "对话式体验页",
    description: "用自然交互流展示 AI 能力，强调流畅与可信。",
  },
  {
    title: "数据运营仪表盘",
    description: "将复杂数据转化为清晰的决策视图。",
  },
];

const experiences = [
  {
    title: "前端开发与设计系统",
    desc: "负责把产品需求拆解为清晰、实用且有品牌感的界面方案。",
  },
  {
    title: "AI 场景产品页",
    desc: "面向聊天、数据分析与产品展示场景，打造更高辨识度的体验。",
  },
  {
    title: "作品集与个人品牌页",
    desc: "把技术实现与视觉表达结合，形成适合展示的完整作品页面。",
  },
];

const techStack = [
  "Vue 3",
  "Vite",
  "Tailwind CSS",
  "Element Plus",
  "Vue Router",
];
</script>
