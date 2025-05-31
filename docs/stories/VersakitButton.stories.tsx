import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@versakit/ui";

// 更多关于如何配置 stories 的信息: https://storybook.js.org/docs/writing-stories
const meta = {
	title: "Versakit UI/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: { type: "select" },
			options: ["default", "outline", "ghost"],
			description: "按钮的样式变体",
		},
		size: {
			control: { type: "select" },
			options: ["sm", "md", "lg"],
			description: "按钮的尺寸",
		},
		children: {
			control: "text",
			description: "按钮内容",
		},
		className: {
			control: "text",
			description: "自定义 CSS 类名",
		},
		onClick: { action: "clicked" },
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// 更多关于 Stories 的信息: https://storybook.js.org/docs/writing-stories/introduction
export const Default: Story = {
	args: {
		variant: "default",
		size: "md",
		children: "默认按钮",
	},
};

export const Outline: Story = {
	args: {
		variant: "outline",
		size: "md",
		children: "轮廓按钮",
	},
};

export const Ghost: Story = {
	args: {
		variant: "ghost",
		size: "md",
		children: "幽灵按钮",
	},
};

export const Small: Story = {
	args: {
		variant: "default",
		size: "sm",
		children: "小按钮",
	},
};

export const Medium: Story = {
	args: {
		variant: "default",
		size: "md",
		children: "中按钮",
	},
};

export const Large: Story = {
	args: {
		variant: "default",
		size: "lg",
		children: "大按钮",
	},
};
