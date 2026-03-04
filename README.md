# URL Safety Checker

This is a simple Next.js project demonstrating a frontend for checking URL safety levels.

## Features

- Prominent search bar for entering a URL
- Risk level breakdown (Low/Medium/High)
- Findings list explaining reasons
- Safety tips section

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

Replace the mock search logic in `pages/index.tsx` with your real API integration.

## Prerequisites

- Node.js (LTS recommended, e.g. 18.x or later) and `npm` must be installed on your machine.

On Windows you can install Node.js from <https://nodejs.org/> or use a version manager such as `nvm-windows`.

## Troubleshooting

- If you see an error like `npm: The term 'npm' is not recognized`, Node.js / npm is not installed or not on your PATH. Install Node.js and re-run `npm install`.
- If `npx` or `create-next-app` is missing, installing Node/npm will provide them.

## Local run (quick)

Run these commands in the project root:

```bash
npm install
npm run dev
# then open http://localhost:3000
```
