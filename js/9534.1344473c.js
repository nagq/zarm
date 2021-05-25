(self.webpackChunksite=self.webpackChunksite||[]).push([[9534],{39534:function(n,e,a){"use strict";a.r(e),e.default='# Panel 面板\n\n## 基本用法\n\n```jsx\nimport { Panel } from \'zarm\';\n\nReactDOM.render(\n  <Panel\n    title="标题"\n    more={\n      <a href="#" onClick={() => alert(\'click more\')}>\n        更多\n      </a>\n    }\n  >\n    <div className="box">内容</div>\n  </Panel>,\n  mountNode,\n);\n```\n\n## API\n\n| 属性  | 类型      | 默认值 | 说明     |\n| :---- | :-------- | :----- | :------- |\n| title | ReactNode | -      | 标题渲染 |\n| more  | ReactNode | -      | 更多渲染 |\n'}}]);