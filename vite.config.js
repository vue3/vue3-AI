import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  base: isProd ? "/vue3-AI/" : "/",
});
