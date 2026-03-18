This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## This is my take on the use case challenge that is described here

### Scenario - Show 3 images from Giphy.com
Make a small frontend web application that can explore a data set of images. In order to show more than 3 images the user should be able to page through the suggestions.

The proposed UI is composed of two main parts.
- A query section with:
  - A text field as a search input for the topic of the query.
  - A text field with text to be displayed on or below the images
    - A dropdown with options for where to show the text:
      - on top of image - center top 
      - on top of image - center bottom 
      - below image - center
    
- A result section:
    Showing 3 images horizontally in desktop view, vertically on mobile.
    Navigation buttons to go next and previous on the images

#### Data access
Documentation: https://developers.giphy.com/docs/api/endpoint/#search

##### Requirements:
- Use this api_key: 1bkG7ky5cmw5SLyvNfElcR1iYVzs38Zq
- Use rating: g
- Use this image path from the response.data: images.downsized_medium.url

- Use this as inspiration: (This will search for cat, with rating g and limit to first 10)
https://api.giphy.com/v1/stickers/search?q=cat&limit=10&rating=g&api_key=1bkG7ky5cmw5SLyvNfElcR1iYVzs38Zq


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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
