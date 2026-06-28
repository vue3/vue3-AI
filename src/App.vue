<template>
  <div :class="themeClass" class="min-h-screen transition-colors duration-300">
    <header
      class="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6 lg:px-8"
    >
      <router-link to="/" class="flex items-center gap-3">
        <div
          class="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/20 text-lg font-semibold text-cyan-500"
        >
          AI
        </div>
        <div>
          <p class="text-lg font-semibold text-slate-900 dark:text-white">
            Vue 3 AI Studio
          </p>
          <p class="text-sm text-slate-500 dark:text-slate-400">
            SaaS 官网与作品集模板
          </p>
        </div>
      </router-link>

      <div class="flex flex-wrap items-center gap-2">
        <div class="hidden items-center gap-2 lg:flex">
          <button
            v-for="item in navItems"
            :key="item.path"
            class="rounded-full px-4 py-2 text-sm transition"
            :class="
              isActive(item.path)
                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20'
                : 'bg-white/70 text-slate-700 hover:bg-cyan-50 dark:bg-slate-800/70 dark:text-slate-200 dark:hover:bg-slate-700'
            "
            @click="goTo(item.path)"
          >
            {{ item.label }}
          </button>
        </div>

        <el-button plain round @click="togglePortfolioMode" class="!ml-1">
          {{ isPortfolioMode ? "标准模式" : "作品集模式" }}
        </el-button>
        <el-button
          circle
          @click="toggleTheme"
          class="!ml-1"
          :title="isDark ? '切换到浅色模式' : '切换到深色模式'"
          :aria-label="isDark ? '切换到浅色模式' : '切换到深色模式'"
        >
          <span class="text-base">{{ isDark ? "☀️" : "🌙" }}</span>
        </el-button>
        <el-button
          class="lg:hidden"
          circle
          @click="mobileMenuOpen = !mobileMenuOpen"
          :title="mobileMenuOpen ? '收起菜单' : '展开菜单'"
          :aria-label="mobileMenuOpen ? '收起菜单' : '展开菜单'"
        >
          <span class="text-base">{{ mobileMenuOpen ? "✕" : "☰" }}</span>
        </el-button>
      </div>
    </header>

    <div
      v-if="mobileMenuOpen"
      class="mx-auto mb-4 flex max-w-7xl flex-col gap-2 px-6 lg:hidden"
    >
      <button
        v-for="item in navItems"
        :key="item.path"
        class="rounded-2xl px-4 py-3 text-left text-sm transition"
        :class="
          isActive(item.path)
            ? 'bg-cyan-500 text-white'
            : 'bg-white/80 text-slate-700 dark:bg-slate-800/80 dark:text-slate-200'
        "
        @click="goTo(item.path)"
      >
        {{ item.label }}
      </button>
    </div>

    <main class="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
      <router-view v-slot="{ Component }">
        <transition name="fade-slide" mode="out-in">
          <component :is="Component" :portfolio-mode="isPortfolioMode" />
        </transition>
      </router-view>
    </main>

    <footer
      class="mx-auto mt-8 max-w-7xl border-t border-slate-200/70 px-6 py-8 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400 lg:px-8"
    >
      <div
        class="flex flex-col gap-6 rounded-[28px] border border-slate-200/70 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/60 lg:flex-row lg:items-center lg:justify-between"
      >
        <div>
          <p class="text-base font-semibold text-slate-900 dark:text-white">
            准备好把想法变成一份可展示的产品体验了吗？
          </p>
          <p class="mt-1">我擅长把复杂需求拆成清晰、实用、顺眼的前端界面。</p>
        </div>
        <div class="flex flex-wrap gap-3">
          <a href="mailto:hello@yourdomain.com">
            <el-button type="primary">联系我</el-button>
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <el-button plain>GitHub</el-button>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const navItems = [
  { label: "首页", path: "/" },
  { label: "登录页", path: "/login" },
  { label: "聊天页", path: "/chat" },
  { label: "仪表盘", path: "/dashboard" },
];

const isDark = ref(true);
const isPortfolioMode = ref(false);
const mobileMenuOpen = ref(false);

const themeClass = computed(() =>
  isDark.value ? "bg-slate-950 text-slate-50" : "bg-slate-50 text-slate-900",
);

const isActive = (path) => route.path === path;

const goTo = (path) => {
  mobileMenuOpen.value = false;
  router.push(path);
};

const toggleTheme = () => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle("dark", isDark.value);
};

const togglePortfolioMode = () => {
  isPortfolioMode.value = !isPortfolioMode.value;
};

onMounted(() => {
  const saved = localStorage.getItem("theme");
  if (saved) {
    isDark.value = saved === "dark";
  }
  document.documentElement.classList.toggle("dark", isDark.value);
});

watch(isDark, (value) => {
  localStorage.setItem("theme", value ? "dark" : "light");
});
</script>
