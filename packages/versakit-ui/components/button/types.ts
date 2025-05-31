import type { ButtonHTMLAttributes } from "react";
import type { VariantProps } from "tailwind-variants";

import type { buttonVariants } from "./index.variants";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonVariants>;
