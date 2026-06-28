<template>
  <div
    class="grid gap-6 rounded-[32px] border border-slate-200/70 bg-white/80 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-slate-900/70 dark:shadow-cyan-950/20 lg:grid-cols-[0.9fr_1.1fr] lg:p-10"
  >
    <div class="space-y-4">
      <div
        class="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-600 dark:text-cyan-300"
      >
        <span class="h-2 w-2 rounded-full bg-cyan-500"></span>
        Secure sign-in
      </div>
      <h2 class="text-3xl font-semibold text-slate-900 dark:text-white">
        欢迎回来
      </h2>
      <p class="leading-7 text-slate-600 dark:text-slate-400">
        这是一个适合 AI 产品的登录页示例，重点体现清晰、安心与高信任感。
      </p>
      <div
        class="rounded-2xl border border-slate-200/70 bg-slate-50 p-4 text-sm text-slate-600 dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-400"
      >
        <p class="font-medium text-slate-900 dark:text-slate-200">
          登录体验特点
        </p>
        <ul class="mt-3 space-y-2">
          <li>• 简洁的输入体验</li>
          <li>• 明确的主操作按钮</li>
          <li>• 适配移动端和桌面端</li>
        </ul>
      </div>
    </div>

    <div
      class="rounded-[24px] border border-slate-200/70 bg-slate-50 p-6 shadow-sm dark:border-white/10 dark:bg-slate-950/80"
    >
      <el-form label-position="top" class="space-y-3">
        <el-form-item label="邮箱">
          <el-input placeholder="name@example.com" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" placeholder="请输入密码" />
        </el-form-item>
        <el-checkbox>记住我</el-checkbox>
        <el-button type="primary" class="w-full">登录</el-button>
      </el-form>
    </div>
  </div>
</template>
