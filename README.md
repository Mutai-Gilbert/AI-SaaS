# SaaS AI Platform with Next.js 13, React, Tailwind, Prisma, Stripe

This repository contains the code for building a SaaS AI Platform using Next.js 13, React, Tailwind, Prisma, and Stripe. The project includes various features and integrations to create a comprehensive AI-powered platform.

## Features

- **Tailwind Design**: Utilizes Tailwind CSS for styling and design.
- **Animations and Effects**: Incorporates Tailwind CSS for animations and effects.
- **Full Responsiveness**: Ensures full responsiveness across devices.
- **Clerk Authentication**: Provides authentication options such as Email, Google, and 9+ Social Logins through Clerk.
- **Client Form Validation**: Utilizes react-hook-form for client-side form validation and handling.
- **Server Error Handling**: Implements react-toast for server error handling.
- **AI Tools**: Includes various AI tools such as Image Generation (Open AI), Video Generation (Replicate AI), Conversation Generation (Open AI), and Music Generation (Replicate AI).
- **Page Loading State**: Manages page loading state for a seamless user experience.
- **Stripe Integration**: Offers Stripe monthly subscription with a free tier and API limiting.
- **RESTful API**: Demonstrates how to write POST, DELETE, and GET routes in route handlers (app/api).
- **Direct Database Access**: Fetches data in server react components directly from the database (WITHOUT API! like Magic!).
- **Component Relations**: Handles relations between Server and Child components effectively.
- **Layout Reusability**: Demonstrates how to reuse layouts efficiently.
- **Folder Structure**: Utilizes the folder structure in Next.js 13 App Router for a well-organized codebase.

## Prerequisites

- Node.js version 18.x.x
## Getting Started
1. **Cloning the Repository**:
   ```bash
   git clone https://github.com/AntonioErdeljac/next13-ai-saas.git
2. **Install Packages:**:
   ```
   npm install
3. **Setup Environment Variables:**:
- Create a `.env` file and add the following variables:
   ```
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
    OPENAI_API_KEY=
    REPLICATE_API_TOKEN=
    DATABASE_URL=
    STRIPE_API_KEY=
    STRIPE_WEBHOOK_SECRET=
    NEXT_PUBLIC_APP_URL=http://localhost:3000
    ````
4. **Setup Prisma:**:
   - Add MySQL Database (e.g., using PlanetScale).
   - Run the following command to apply migrations:
   ``
   `npx prisma db push
`
5. **Start the App:**:
   ````
   npm run dev
6. **Available Commands**:
   - dev: Starts a development instance of the app.
   ````

