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

## 需求分析

以 Button 组件为例。  

### Button Type

按钮类型分为 Primary、Secondary、Success、Danger、Link、Ghost、Default。

### Button Size

按钮大小分为 Large、Default、Small。

### Button Disabled

按钮禁用状态。

### 使用方法

```jsx
<Button
  type="primary"
  size="large"
  disabled={false}
  href=""?
  className=""?
  autoFocus={false}?
  ...
>
  Button
</Button>
```

## classnames NPM 包

classnames 是一个 npm 包，用于拼接 classnames。  

```bash
npm i classnames
npm i @types/classnames -D
```

使用方法：

```jsx
import classnames from 'classnames';

const Button = (props) => {
  const { className, ...restProps } = props;
  const classes = classnames('btn', className, {
    [`btn-${props.type}`]: props.type,
    [`btn-${props.size}`]: props.size,
    disabled: props.disabled,
  });
  return <button className={classes} {...restProps} />;
};
```

文档地址：[classnames github](https://github.com/JedWatson/classnames)

## mixin

mixin 是一种**代码复用**的方式。在 SCSS 中，可以使用 `@mixin` 和 `@include` 来实现 mixin。  

```scss
@mixin mixin-name {
  // some styles
}

@include mixin-name;
```

相当于 css 中的函数，它可以接受参数。  

```scss
@mixin mixin-name($paramborder,$paramcolor) {
  border: $paramborder;
  color: $paramcolor;
}

@include mixin-name(1px solid red, blue);
```

## 组件测试

### 测试的意义

- 高质量的代码
- 保证代码的可靠性，更早发现问题
- 保证代码的可维护性，让重构更加轻松

### React 为什么适合单元测试

- Component 组件
- Function 函数
- 单向数据流

### Jest

Jest 是一个 JavaScript 测试框架，由 Facebook 开发。它可以让你的测试用例更加简单、快速、可靠。地址：[Jest](https://jestjs.io/)。  

**断言**即测试一个值是否是预期的值。Jest 提供了一些断言方法。  

```js
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);  // 等于
  expect(2 + 2).not.toBe(5);  // 不等于
});
```

即 **期望 2 + 2 等于 4**。

运行：  

```bash
npx jest jest.test.js
```

可以使用 `watch` 参数，实现自动化测试。  

```bash
npx jest jest.test.js --watch
```

布尔类型的断言方法：  

```js
test('object assignment', () => {
  expect(1).toBeTruthy();  // 真
  expect(0).toBeFalsy();  // 假
});
```

数字类型的断言方法：  

```js
test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);  // 大于
  expect(value).toBeGreaterThanOrEqual(3.5);  // 大于等于
  expect(value).toBeLessThan(5);  // 小于
  expect(value).toBeLessThanOrEqual(4.5);  // 小于等于
});
```

对象类型的断言方法：  

```js
test('there is no I in team', () => {
  expect({name: 'test'}).not.toBe({name: 'test1'});  // 不相等
  expect({name: 'test'}).toEqual({name: 'test'});  // 相等，值相等
  expect({name: 'test'}).toBe({name: 'test'});  // 相等，完全相等
});
```

## React-Testing-Library

React-Testing-Library 是一个 React 测试工具，它可以让你的测试用例更加简单、快速、可靠。地址：[React-Testing-Library](https://testing-library.com/docs/react-testing-library/intro/)。  

在 create-react-app 中，已经集成了 React-Testing-Library。  

来测试按钮组件：  

```jsx
test('our first react test case', () => {
  const wrapper = render(<Button>Nice</Button>) // render the component
  const element = wrapper.queryByText('Nice') // find the element
  expect(element).toBeTruthy() // check if the element exists
  expect(element).toBeInTheDocument() // check if the element is in the document
})
```

上面的测试用例先渲染了 Button 组件，然后找到了文本为 `Nice` 的元素，最后断言这个元素存在。  

运行：  

```bash
npx jest button.test.js
```

如果发生了错误，会显示错误信息。  

```jsx
test('our first react test case', () => {
  const wrapper = render(<Button>Nice</Button>) // render the component
  const element = wrapper.queryByText('Nice1') // find the element
  expect(element).toBeTruthy() // check if the element exists
  expect(element).toBeInTheDocument() // check if the element is in the document
})
```

例如，上面的测试用例中，找到的元素文本为 `Nice1`，而不是 `Nice`，所以会报错。  

```bash
× our first react test case (29 ms)

  ● our first react test case

    expect(received).toBeTruthy()

    Received: null

       6 |   const wrapper = render(<Button>Nice</Button>) // render the component
       7 |   const element = wrapper.queryByText('Nice1') // find the element
    >  8 |   expect(element).toBeTruthy() // check if the element exists
         |                   ^
       9 |   expect(element).toBeInTheDocument() // check if the element is in the document
      10 | })
```

## jest-dom

jest-dom 是一个扩展的断言方法，它可以让你的测试用例更加简单、快速、可靠。地址：[jest-dom](https://github.com/testing-library/jest-dom)。

它为我们添加了针对 dom 类型的断言方法。例如：  

- toBeDisabled
- toBeEmpty
- toBeEnabled
- toBeEmptyDOMElement
- toBeInTheDocument
- toBeInvalid
- toBeRequired
- toBeValid
- toBeVisible
- toContainElement

新版的 Create-React-App 已经集成了 jest-dom，所以我们可以直接使用。

### setupTests.ts

这个文件是 jest 的配置文件，它会在测试用例运行之前执行。  

### Mock 函数

Mock 函数是 jest 的一个功能，它可以让我们模拟函数的返回值。
