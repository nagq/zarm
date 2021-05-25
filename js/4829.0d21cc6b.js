(self.webpackChunksite=self.webpackChunksite||[]).push([[4829],{94829:function(n,t,e){"use strict";e.r(t),t.default='# Affix 组件名\n\n## 基本用法\n\n```jsx\nimport { Affix, Cell, Button, Switch } from \'zarm\';\nconst { useState, useCallback } = React;\n\nconst Demo = () => {\n  const [affixed, setAffixed] = useState(true);\n\n  return (\n    <>\n      <Cell\n        title="是否启用 Affix"\n        description={<Switch checked={affixed} onChange={setAffixed} />}\n      />\n      {affixed ? (\n        <>\n          <Affix offsetTop={20}>\n            <Button theme="primary">Top</Button>\n          </Affix>\n          <div className="seperator" />\n          <Affix offsetBottom={20}>\n            <Button theme="primary">Bottom</Button>\n          </Affix>\n        </>\n      ) : (\n        <>\n          <Button theme="primary">Top</Button>\n          <div className="seperator" />\n          <Button theme="primary">Bottom</Button>\n        </>\n      )}\n    </>\n  );\n};\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n## 滚动容器\n\n```jsx\nimport { useState } from \'react\';\nimport { Affix, Button } from \'zarm\';\n\nconst Demo = () => {\n  const [container, setContainer] = useState(null);\n\n  return (\n    <div className="scrollable-container" ref={setContainer}>\n      <div className="background">\n        <Affix scrollContainer={() => container}>\n          <Button theme="primary">根据滚动容器顶部固定</Button>\n        </Affix>\n      </div>\n    </div>\n  );\n};\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n## API\n\n| 属性            | 类型                                         | 默认值 | 说明                                                                   |\n| :-------------- | :------------------------------------------- | :----- | :--------------------------------------------------------------------- |\n| offsetTop       | number                                       | -      | 距离窗口顶部达到指定偏移量后触发                                       |\n| offsetBottom    | number                                       | -      | 距离窗口底部达到指定偏移量后触发                                       |\n| scrollContainer | HTMLElement \\| (() => HTMLElement) \\| Window | window | 设置 `Affix` 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 |\n| onChange        | (affixed: boolean) => void                   | -      | 固定状态改变时触发的回调函数                                           |\n'}}]);