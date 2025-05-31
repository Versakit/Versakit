import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
	stories: [
		"../stories/**/*.mdx",
		"../stories/**/*.stories.@(js|jsx|ts|tsx)",
		"../components/**/*.stories.@(js|jsx|ts|tsx)",
		"../../packages/versakit-ui/components/**/*.stories.@(js|jsx|ts|tsx)",
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/addon-a11y",
		"@storybook/addon-themes",
	],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	docs: {
		autodocs: true,
	},
	core: {
		disableTelemetry: true,
	},
	viteFinal: async (config) => {
		// 自定义 Vite 配置
		return config;
	},
};

export default config;
