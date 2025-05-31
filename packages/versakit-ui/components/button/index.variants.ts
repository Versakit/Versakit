// components/ui/button/index.variants.ts
import { tv } from "tailwind-variants";

export const buttonVariants = tv({
	base: "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",

	variants: {
		variant: {
			default: "bg-blue-600 text-white hover:bg-blue-700",
			outline: "border border-gray-300 text-gray-900 hover:bg-gray-100",
			ghost: "text-gray-900 hover:bg-gray-100",
		},
		size: {
			sm: "h-8 px-3 text-sm",
			md: "h-10 px-4 text-base",
			lg: "h-12 px-6 text-lg",
		},
	},

	defaultVariants: {
		variant: "default",
		size: "md",
	},
});
