## Features

-   FeedPage: `/posts`

    -   Renders FeedPage on server side
    -   By clicking on each Post it redirects to PostPage

-   PostPage: `/posts/{id}`

    -   Each PostPage is rendered statically on server side
    -   The PostPage displays Pont details and a list with the Post's Comments
    -   New comments can be added (if authenticated)
    -   Comments can be edited and deleted (if authenticated)
        -   Because the https://jsonplaceholder.typicode.com/ service doesn't really create, edit or delete the posts, the redux store takes care of updating the cached post's comments (If the user navigates without reloading the page, the changes are kept, however if the page is reloaded, the original comments are restored as expected.)

-   UsersPage: `/users`

    -   This page is just a simple page listing the users

-   Login Page and Register Page

    -   Use nextAuth for authentication
    -   Any "email" and "password" will be accept for login (dummy auth)

-   Layout
    -   The whole website is responsive and works also with small screens
    -   Tailwind and Shadcn were used for components and styling

## Getting Started

To run the development server:

```bash
npm install
npm run dev
```

Ps: The deploy on Github Pages only accepts static files, so the deploy there was not possible due to the nextAuth and some other features used to generate the static pages on the server side such as the `generateStaticParams` function.
