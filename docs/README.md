# Versakit UI 文档

这个包使用 [Storybook](https://storybook.js.org/) 为 Versakit UI 组件库提供交互式文档。

## 开发

在本地开发模式下运行 Storybook：

```bash
# 从根目录运行
pnpm dev:docs

# 或者在 docs 目录中运行
cd docs
pnpm dev
```

这将启动 Storybook 开发服务器，默认端口为 6006。您可以在浏览器中访问 `http://localhost:6006` 查看组件库文档。

## 构建

构建静态文档站点：

```bash
# 从根目录运行
pnpm build:docs

# 或者在 docs 目录中运行
cd docs
pnpm build
```

构建后的文件将位于 `docs/storybook-static` 目录中。

## 预览构建后的文档

预览构建后的静态文档站点：

```bash
# 从根目录运行
pnpm preview:docs

# 或者在 docs 目录中运行
cd docs
pnpm preview
```

## 添加新的组件文档

要为 Versakit UI 中的组件添加文档，请按照以下步骤操作：

1. 在 `docs/stories` 目录中创建一个新的 `.stories.tsx` 文件
2. 导入您要记录的组件
3. 配置组件的元数据和参数
4. 创建不同变体的示例

示例：

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { YourComponent } from "@versakit/ui";

const meta = {
	title: "Versakit UI/YourComponent",
	component: YourComponent,
	tags: ["autodocs"],
	argTypes: {
		// 定义组件的参数
	},
} satisfies Meta<typeof YourComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// 创建不同的示例
export const Default: Story = {
	args: {
		// 默认参数
	},
};
```

## 文件结构

```
docs/
├── .storybook/        # Storybook 配置
│   ├── main.ts        # 主配置文件
│   └── preview.tsx    # 预览配置
├── stories/           # 组件文档
│   ├── Button.stories.tsx
│   └── ...
├── package.json       # 依赖和脚本
└── README.md          # 本文档
```
