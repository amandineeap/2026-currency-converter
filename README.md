This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Currency converter

- NextJS base application for ease of use (react, typescript, tailwindcss)
- Select, SelectInputGroup and ConvertForm components
- .env.local file to edit with personal API_KEY
- Fetch currencies and display in the Select component, sort alphabetically
- Add event handlers for updating the select and input as well as fetching the converted value

## Deployed application

You can find a deployed version of the application at the following url:
https://2026-currency-converter.netlify.app/

## With more time I would

- Polish the ui, loading, error states
- Write relevant tests for components, data fetching and user interactions
- Add form validation
- Use form management or state differently (react hook form, useReducer)
- Add functionality (other input google style, ability to swap the from/to)