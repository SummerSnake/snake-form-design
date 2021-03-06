# 项目

snake-form-design

# 截图展示

<img src="https://github.com/SummerSnake/snake-form-design/blob/master/screenshots/snake-form-design.gif" width="790" height="330" />

# 说明

表单设计器

React-dnd + React + Typescript + webpack5.x + ant design + dva

# 注意事项

需要单独引入 css

```

import 'snake-form-design/dist/index.css';

```

# 安装

```

npm install snake-form-design --save

yarn add snake-form-design

```

# 示例

```

import SnakeFormDesign from 'snake-form-design';
import 'snake-form-design/dist/index.css';

const App = () => (
  <>
    <SnakeFormDesign
      dataSource={dataSource}
      treeData={treeData}
      formList={formList}
      getWidgetsList={(widgetsList) => console.log(widgetsList)}
      getErrorsList={(errorsList) => console.log(errorsList)}
      getRemoveWidgetId={(id) => (function () { return true; }())}
      height="calc(100vh - 84px)"
      title="snake-form-design"
    />
  </>
);

```

# 文档

| 字段              | 必填 | 描述                                                                                           |
| ----------------- | ---- | ---------------------------------------------------------------------------------------------- |
| dataSource        | 是   | 原始控件列表数据                                                                               |
| treeData          | 是   | 流程组件 - 选择流程 - 树数据                                                                   |
| formList          | 是   | 初始化表单已配置控件列表                                                                       |
| getWidgetsList    | 是   | 获取已配置控件列表                                                                             |
| getErrorsList     | 是   | 获取已配置控件 - 表单错误数据列表                                                              |
| getRemoveWidgetId | 否   | 删除已配置控件 - 输出 '控件 formKey', 接收 boolean 类型返回值，允许删除则为 true，否则为 false |
| height            | 否   | 表单设计器高度，默认 100vh                                                                     |
| title             | 否   | 表单标题，默认 ‘未命名’                                                                        |
