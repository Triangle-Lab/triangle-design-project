## 安装 Husky

```bash
npm install husky@4.2.5 --save-dev
```

Husky 是一个 Git 钩子工具，对 git 执行的一些命令，通过对应的 hooks 钩子触发，执行自定义的脚本程序。它用于规范代码提交，保证代码质量。

在 package.json 中添加如下配置，实现在 git commit 时，自动执行 `npm run lint` 命令。

```json
"husky": {
  "hooks": {
    "pre-commit": "npm run lint"
  }
}
```

## git commit 规范

核心语法如下：  

```js
type(scope?): subject  #scope is optional; multiple scopes are supported (current delimiter options: "/", "\" and ",")
```

| type     | commit 的类型                                            |
| -------- | -------------------------------------------------------- |
| feat     | 新功能、新特性                                           |
| fix      | 修改 bug                                                 |
| perf     | 更改代码，以提高性能                                     |
| refactor | 代码重构（重构，在不影响代码内部行为、功能下的代码修改） |
| docs     | 文档修改                                                 |
| style    | 代码格式修改, 注意不是 css 修改（例如分号修改）          |
| test     | 测试用例新增、修改                                       |
| build    | 影响项目构建或依赖项修改                                 |
| revert   | 恢复上一次提交                                           |
| ci       | 持续集成相关文件修改                                     |
| chore    | 其他修改（不在上述类型中的修改）                         |
| release  | 发布新版本                                               |
| workflow | 工作流相关文件修改                                       |

示例：

| commit message                     | 描述                      |
| ---------------------------------- | ------------------------- |
| chore: init                        | 初始化项目                |
| chore: update deps                 | 更新依赖                  |
| chore: wording                     | 调整文字（措词）          |
| chore: fix typos                   | 修复拼写错误              |
| chore: release v1.0.0              | 发布 1.0.0 版本           |
| fix: icon size                     | 修复图标大小              |
| fix: value.length -> values.length | value 变量调整为 values   |
| feat(blog): add comment section    | blog 新增评论部分         |
| feat: support typescript           | 新增 typescript 支持      |
| feat: improve xxx types            | 改善 xxx 类型             |
| style(component): code             | 调整 component 代码样式   |
| refactor: xxx                      | 重构 xxx                  |
| perf(utils): random function       | 优化 utils 的 random 函数 |
| docs: xxx.md                       | 添加 xxx.md 文章          |

## CSS 变量位置

CSS 变量的位置在 `src/_variables.scss` 文件中。存储了基础设计系统。

## normalize.css

normalize.css 是一个 CSS reset 文件，用于重置浏览器的默认样式。在 `src/_normalize.scss` 文件中。它会保护你的网站在不同浏览器中的一致性。并为大部分浏览器提供了一些有用的默认样式。修复了一些浏览器的 bug，保证了一些浏览器的一致性。

见 [normalize.css](https://necolas.github.io/normalize.css/)。本项目中，该文件是 `src/_reboot.scss`。做了一些变量替换，来适应本项目的设计系统。
