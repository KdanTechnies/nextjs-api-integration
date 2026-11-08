# Next.js API Integration

A simple User Directory application built with Next.js, TypeScript, and Tailwind CSS.

This project demonstrates how frontend applications communicate with external APIs to retrieve and display data.

## Technologies Used

- Next.js
- TypeScript
- Tailwind CSS
- JavaScript Fetch API

## Features

- Fetches users from an external API.
- Displays user names and email addresses.
- Uses a reusable API function.
- Handles asynchronous requests with async/await.
- Uses TypeScript to describe API data.
- Displays API data using the map() method.

## API Used

[JSONPlaceholder](https://jsonplaceholder.typicode.com/users)

## Project Structure

```text
src/
├── app/
│   └── page.tsx
│
└── lib/
    └── api.ts
```

## Concepts Practised

- Understanding APIs and API endpoints.
- Fetching external data with fetch().
- Understanding async and await.
- Working with JSON responses.
- TypeScript types and arrays.
- Importing and exporting functions.
- Displaying API data in Next.js.

## Getting Started

Clone the repository:

```bash
git clone nextjs-api-integration
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Visit http://localhost:3000.

## Learning Objective

The purpose of this project is to introduce frontend developers to API integration using Next.js without building a backend.

**Built as a practical frontend development learning project.**
