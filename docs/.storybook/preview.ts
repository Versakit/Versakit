import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import React from "react";

// 导入 versakit-ui 的样式
import "../../packages/versakit-ui/style/index.css";

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		layout: "centered",
		backgrounds: {
			default: "light",
			values: [
				{ name: "light", value: "#ffffff" },
				{ name: "dark", value: "#1a1a1a" },
			],
		},
	},
	decorators: [
		withThemeByClassName({
			themes: {
				light: "",
				dark: "dark",
			},
			defaultTheme: "light",
		}),
		(Story) => React.createElement("div", { className: "p-4" }, React.createElement(Story, null)),
	],
};

export default preview;
