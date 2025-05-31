import React from "react";
import { buttonVariants } from "./index.variants";
import type { ButtonProps } from "./types";

export const Button = ({ className, variant, size, ...props }: ButtonProps) => {
	return <button className={buttonVariants({ variant, size, class: className })} {...props} />;
};
