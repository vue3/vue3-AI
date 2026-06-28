# Vue 3 AI Starter

这是一个最基础的 Vue 3 + Vite 项目模板，适合直接用于 GitHub 仓库初始化。

## 这个项目里加入了什么

项目已经接入了一套简单的前端设计指导规则，放在 [.github/copilot-instructions.md](.github/copilot-instructions.md) 中。它的作用是：

- 帮助 AI 生成更符合直觉的界面
- 让页面更清晰、易用、适配不同屏幕
- 提醒后续开发时注意可访问性和一致性

## 为什么要加入这套规则

很多时候，AI 生成的 UI 看起来“能用”，但可能会有这些问题：

- 版式太满，信息不够清楚
- 按钮和交互不够直观
- 手机端体验不好
- 颜色和 spacing 没有统一

这套规则就是为了让你的项目在“能跑”之外，进一步变得“好看、好用”。

## 怎么接入

当前仓库已经自动配置好了 VS Code 的 Copilot 指令文件：

- [.github/copilot-instructions.md](.github/copilot-instructions.md)
- [.vscode/settings.json](.vscode/settings.json)

这样做之后，后续在这个仓库里使用 Copilot 生成或修改前端界面时，会优先参考这套设计原则。

## 怎么更好地使用

你可以把它理解成“给 AI 的前端设计口头禅”——每次让它生成页面、组件、按钮、表单时，它都会优先考虑：

1. 先让界面清楚，再追求花哨
2. 让内容容易读、操作容易点
3. 让页面在手机和电脑上都舒服
4. 让颜色、间距、按钮风格保持一致

## 怎么学习这套思路

如果你想真正掌握这类规则，可以从三个层次开始：

- 观察：多看成熟产品的首页和表单页面，注意它们为什么让人舒服
- 模仿：照着别人的布局和 spacing 风格去做一个简单版本
- 复用：把常见的按钮、卡片、表单、导航模式整理成自己的组件库

## 快速开始

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

## 部署到 GitHub Pages

这个项目已经内置了 GitHub Actions 工作流，推送到 main 分支后会自动部署到 GitHub Pages。

### 你需要做的两步

1. 在 GitHub 仓库里进入 Settings → Pages
2. 将 Source 设置为 GitHub Actions

部署成功后，访问地址通常为：

```text
https://<your-username>.github.io/vue3-AI/
```

如果你的仓库名不同，访问地址需要对应修改。
