# Blog Posts: Next.js + Shadcn + Tailwind

A demo project showcasing a blog application built with Next.js, Shadcn, and Tailwind CSS. The application includes features like server-side rendering, static generation, authentication, and responsive design.

## Demo

Access the live demo here: [https://thiagotguimaraes.github.io/finera-nextjs/](https://thiagotguimaraes.github.io/finera-nextjs/)

## Features

-   **FeedPage**: `/posts`

    -   Renders FeedPage on the server side.
    -   Clicking on a post redirects to its respective PostPage.

-   **PostPage**: `/posts/{id}`

    -   Each PostPage is statically rendered on the server side.
    -   Displays post details and a list of comments.
    -   Allows adding new comments (if authenticated).
    -   Comments can be edited and deleted (if authenticated).
        -   Note: The `https://jsonplaceholder.typicode.com/` service does not persist changes (create, edit, or delete). The Redux store handles optimistic updates to cached comments. Changes persist during navigation but reset upon page reload.

-   **UsersPage**: `/users`

    -   A simple page listing all users.

-   **Login Page and Register Page**: `/login` and `/register`

    -   Uses NextAuth for authentication.
    -   Accepts any "email" and "password" for login (fake authentication, no database validation in this demo).

-   **Layout**
    -   Fully responsive design, optimized for small screens.
    -   Built with Tailwind CSS and Shadcn for components and styling.

## Getting Started

To run the development server locally:

```bash
npm install
npm run dev
```

## Notes

-   The deployment on GitHub Pages only supports static files. Therefore, the deployment excludes NextAuth authentication.
