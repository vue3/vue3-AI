<template>
  <div class="space-y-6">
    <div
      class="rounded-[32px] border border-slate-200/70 bg-white/80 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-slate-900/70 dark:shadow-cyan-950/20"
    >
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p class="text-sm text-cyan-600 dark:text-cyan-300">AI 工作台</p>
          <h2 class="text-3xl font-semibold text-slate-900 dark:text-white">
            运营总览
          </h2>
        </div>
        <el-button type="primary">生成报告</el-button>
      </div>
    </div>

    <div class="grid gap-4 lg:grid-cols-3">
      <div
        class="rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/60"
      >
        <p class="text-sm text-slate-500 dark:text-slate-400">本周新增用户</p>
        <p class="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">
          +18.2%
        </p>
      </div>
      <div
        class="rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/60"
      >
        <p class="text-sm text-slate-500 dark:text-slate-400">平均响应时间</p>
        <p class="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">
          1.2s
        </p>
      </div>
      <div
        class="rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/60"
      >
        <p class="text-sm text-slate-500 dark:text-slate-400">任务完成率</p>
        <p class="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">
          94%
        </p>
      </div>
    </div>

    <div
      class="rounded-[28px] border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/60"
    >
      <h3 class="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
        最近活动
      </h3>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="name" label="名称" />
        <el-table-column prop="status" label="状态" />
        <el-table-column prop="time" label="时间" />
      </el-table>
    </div>
  </div>
</template>

<script setup>
const tableData = [
  { name: "内容生成", status: "已完成", time: "10:24" },
  { name: "摘要分析", status: "进行中", time: "09:40" },
  { name: "多模型对比", status: "已完成", time: "08:50" },
];
</script>
