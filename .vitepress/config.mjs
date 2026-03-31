export default {
  title: "CheriY's Blog",
  description: "个人学习笔记",
  base: "/CheriY-s-blog/",

  themeConfig: {
    sidebar: [
      {
        text: "首页",
        link: "/index.md"
      },
      {
        text: "专业课",
        items: [
          { text: "自动控制原理", link: "/专业课/自动控制原理.md" },
        ]
      },
      {
        text: "编程学习",
        items: [
          { text: "Python入门", link: "/编程学习/Python.md" },
        ]
      }
    ]
  },

  markdown: {
    math: true
  }
}
