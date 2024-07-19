# NextJS Project Example

This is a step-by-step project setup for a NextJS app

## Prerequisites

* NodeJS 18.17+

## Installation

Install base components. There are 2 ways: `npx` and regular `npm` packages installation.

### Installation using npx

Using `npx` the project structure will be created automatically, you will get a few options to select during the installation. This is an example using the default options for a project named `example`:

```
Ok to proceed? (y) y

✔ What is your project named? … example
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias (@/*)? … No / Yes
Creating a new Next.js app in /Users/francisco/projects/nextjs-example-npx/example.
```


### Installation using npm packages

You can install components and setup your project manually using `npm`

1. Install packages: 
    * Base packages: `npm install next@latest react@latest react-dom@latest`
    * Tailwind CSS: `npm install --save-dev tailwindcss postcss`
    * ESLint: `npm install --save-dev eslint`
2. Add nextjs scripts to `package.json`
3. Create `app` folder
4. Inside `app` folder create a `layout.tsx` file
5. Inside `app` folder create a `page.tsx` file
6. Optionally, create a global css `app/globals.css` file to include in your layout
7. If you are using GIT, create a `.gitignore` file to setup a list of files that does not need version tracking

#### Run scripts for package.json

Include this section in `package.json` file:

```json
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
```

#### Setup TailwindCSS

File `tailwind.config.ts`

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
```

File `postcss.config.mjs`

```javascript
/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: {
      tailwindcss: {},
    },
  };
  
  export default config;
```

File `next.config.mjs`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
```


#### Setup `eslint`

If `eslint` was installed manually, you may need to create this basic `eslintrc.json` file

```json
{
    "extends": "next/core-web-vitals"
}
```

#### Setup `.gitignore`

```bash
# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```


### Basic example of `layout.tsx` file

This example includes the basic RootLayout 

```javascript
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

### Another more complete example of `layout.tsx` file

This example includes:

* Font import (Inter font) and embedding using className 
* Page metadata (title/description)
* Global css import, including TailwindCSS

```javascript
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS App",
  description: "NextJS App Example",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

Example `globals.css` file with basic definitions, including Tailwind CSS imports and dark mode support


```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --foreground: #000;
  --background: #fff;
}

@media (prefers-color-scheme: dark) {
  :root {
    --foreground: #fff;
    --background: #000;
  }
}

body {
  color: var(--foreground);
  background: var(--background);
}

@layer utilities {
  .example{
    text-align: center;
    margin: 2em auto;
  }
}
```



### Example `page.tsx` file

```javascript
export default function Page() {
  return (
    <h1 className="example">Hello, Next.js!</h1>
  )
}
```





## Preview in dev mode

To preview your site in dev run this command:

`npm run dev`

The dev site will be up and running at http://localhost:3000 (or the next port available)





