// @ts-check
/** @type {import('@commitlint/types').UserConfig} */
export default {
	extends: ["@commitlint/config-conventional"],
	// 校验规则
	rules: {
		"type-enum": [
			2,
			"always",
			["feat", "fix", "docs", "style", "refactor", "perf", "test", "chore", "revert", "build"],
		],
		"type-case": [0],
		"type-empty": [0],
		"scope-empty": [0],
		"scope-case": [0],
		"subject-full-stop": [0],
		"subject-case": [0],
		"header-max-length": [0],
	},
};
