<template>
  <div
    class="grid gap-6 rounded-[32px] border border-slate-200/70 bg-white/80 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-slate-900/70 dark:shadow-cyan-950/20 lg:grid-cols-[0.95fr_1.05fr] lg:p-10"
  >
    <div class="space-y-4">
      <div
        class="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-600 dark:text-cyan-300"
      >
        <span class="h-2 w-2 rounded-full bg-cyan-500"></span>
        AI conversation
      </div>
      <h2 class="text-3xl font-semibold text-slate-900 dark:text-white">
        智能聊天体验
      </h2>
      <p class="leading-7 text-slate-600 dark:text-slate-400">
        以聊天场景为核心，展示 AI 产品如何把复杂能力变成自然、清晰的对话流。
      </p>
      <div
        class="rounded-2xl border border-slate-200/70 bg-slate-50 p-4 text-sm text-slate-600 dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-400"
      >
        <p class="font-medium text-slate-900 dark:text-slate-200">
          适合的功能点
        </p>
        <ul class="mt-3 space-y-2">
          <li>• 侧边历史会话</li>
          <li>• 流式消息展示</li>
          <li>• 清晰的操作反馈</li>
        </ul>
      </div>
    </div>

    <div
      class="rounded-[24px] border border-slate-200/70 bg-slate-50 p-5 shadow-sm dark:border-white/10 dark:bg-slate-950/80"
    >
      <div class="space-y-3">
        <div
          class="rounded-2xl bg-slate-200/70 p-4 text-sm text-slate-700 dark:bg-slate-800/80 dark:text-slate-300"
        >
          <p class="mb-2 text-xs uppercase tracking-[0.24em] text-slate-500">
            用户
          </p>
          <p>帮我总结这周发布进度，并生成一份简洁汇报。</p>
        </div>
        <div
          class="rounded-2xl bg-cyan-500/15 p-4 text-sm text-cyan-700 dark:text-cyan-100"
        >
          <p class="mb-2 text-xs uppercase tracking-[0.24em] text-cyan-500">
            助手
          </p>
          <p>已经帮你整理好了重点内容：版本更新、用户反馈与下一步计划。</p>
        </div>
      </div>
      <div class="mt-4 flex gap-2">
        <el-input placeholder="输入你的问题..." />
        <el-button type="primary">发送</el-button>
      </div>
    </div>
  </div>
</template>
