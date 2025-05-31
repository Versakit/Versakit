# Versakit UI

A React component library that supports desktop applications.

## Features

- 🚀 &nbsp; Provides high-quality universal React components
- 🎨 &nbsp; Highly customizable styling with Tailwind CSS
- 🛠️ &nbsp; Supports on-demand import
- 🌍 &nbsp; Supports internationalization
- 💡 &nbsp; TypeScript support
- 🌙 &nbsp; Dark mode support
- ♿ &nbsp; Accessibility focused

## Installation

```bash
# Using npm
npm install @versakit/ui

# Using yarn
yarn add @versakit/ui

# Using pnpm
pnpm add @versakit/ui
```

## Usage

```tsx
import React from "react";
import { Button } from "@versakit/ui";
import "@versakit/ui/dist/style.css";

function App() {
	return (
		<div>
			<Button>Click me</Button>
		</div>
	);
}
```

## Development in Monorepo

This package is part of the Versakit monorepo. You can work with it directly from the root of the monorepo using the following commands:

```bash
# Start development server
pnpm dev:ui

# Build the package
pnpm build:ui

# Lint the code
pnpm lint:ui

# Format the code
pnpm format:ui

# Preview the build
pnpm preview:ui
```

Or you can navigate to the package directory and use the local commands:

```bash
cd packages/versakit-ui

# Start development server
pnpm dev

# Build the package
pnpm build

# Lint the code
pnpm lint

# Format the code
pnpm format

# Preview the build
pnpm preview
```

## License

Versakit UI is released under the MIT license. For detailed information, please check the `LICENSE` file in the project root directory.
