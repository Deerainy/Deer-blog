---
layout: post
title: "用 Jekyll 搭建个人博客"
date: 2026-05-17
categories: 技术
tags: [Jekyll, GitHub Pages, 博客]
---

Jekyll 是一个简洁的静态站点生成器，非常适合用来搭建个人博客。配合 GitHub Pages，你可以免费拥有一个优雅的个人网站。

## 为什么选择 Jekyll

1. **原生支持** - GitHub Pages 原生支持 Jekyll，无需额外配置
2. **Markdown 写作** - 用 Markdown 写文章，专注内容本身
3. **高度可定制** - 从布局到样式，一切都可以按你的喜好调整

## 快速开始

创建一个新的 Jekyll 项目只需要几步：

```bash
gem install jekyll bundler
jekyll new my-blog
cd my-blog
bundle exec jekyll serve
```

然后在浏览器中打开 `http://localhost:4000` 就能看到你的博客了。

## 自定义你的博客

Jekyll 的魅力在于它的灵活性。你可以：

- 修改 `_config.yml` 来更改站点配置
- 编辑 `_layouts` 目录下的模板来调整页面结构
- 替换 `assets/css/style.css` 来定义自己的视觉风格

> 最好的博客是能表达你个性的博客。

开始你的创作之旅吧 ✨
