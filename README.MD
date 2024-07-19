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
8. Create `public` folder to store public static assets (eg: images)

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


## Public static assets

* Create a `public` folder and store any static assets here (eg: `/public/next.svg`)
* Refer to assets using `/path/to/asset.ext`

Example `next.svg` file

```svg
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80">
<path fill="#000" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/>
<path fill="#000" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/>
</svg>
```

Include the image in your `page.tsx`. 
Eg: using the `Image` component


```javascript
import Image from "next/image";

export default function Home() {
  return (
    <div className="example">
      <h1 >Hello, Next.js!</h1>
      <Image
          src="/next.svg"
          alt="NextJS Logo"
          className="dark:invert my-2 inline-block"
          width={150}
          height={30}
          priority
        />
    </div>
  );
}
```

