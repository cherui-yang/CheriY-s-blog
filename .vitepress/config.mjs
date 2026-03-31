import { getSidebar } from 'vitepress-plugin-auto-sidebar'

export default {
  title: "CheriY's Blog",
  description: "我的个人学习笔记",
  base: "/CheriY-s-blog/",

  themeConfig: {
    // 🔥 重点：这行代码自动生成侧边栏
    sidebar: getSidebar({
      contentDir: '/docs',
      collapse: false,
      collapseDepth: 2
    }),
  },

  // 支持数学公式
  markdown: {
    math: true
  }
}
