export const latestPosts = [
  {
    title: "Promisses From The Ground Up",
    description:
      "The “Promises” API is a surprisingly tricky part of modern JavaScript. Without the right context, it doesn’t make much sense at all! In this tutorial, you’ll build an intuition for how Promises work by getting a deeper understanding of JavaScript and its limitations.",
    date: new Date().toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
    category: "javascript",
  },

  {
    title: "Snappy UI Optimization with useDeferredValue",
    description:
      "useDeferredValue is one of the most underrated React hooks. It allows us to dramatically improve the performance of our applications in certain contexts. I recently used it to solve a gnarly performance problem on this blog, and in this tutorial, I'll show you how! ⚡     ",
    date: new Date().toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
    category: "react",
  },

  {
    title: "CSS in React Server Components",
    description:
      "You can’t make an omelette without cracking a few eggs, and when the core React team unveiled their vision for the future of React, some of my favourite libraries got scrambled 😅. In this blog post, we’re going to explore the compatibility issues between React Server Components and CSS-in-JS libraries like styled-components. You’ll understand what the issue is, what the options are, and what’s on the horizon.",
    date: new Date().toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
    category: "css",
  },

  {
    title: "How To Center a Div",
    description:
      "Back in the day, centering an element was one of the trickiest things in CSS. As the language has evolved, we’ve been given lots of new tools we can use… But how do we pick the best option? When do we use Flexbox, or CSS Grid, or something else? Let's dig into it.",
    date: new Date().toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
    category: "animation",
  },

  {
    title: "An Interactive Guide to CSS Grid",
    description:
      "CSS Grid is an incredibly powerful tool for building layouts on the web, but like all powerful tools, there's a significant learning curve. In this tutorial, we'll build a mental model for how CSS Grid works and how we can use it effectively. I'll share the biggest 💡 lightbulb moments I've had in my own learning journey.",
    date: new Date().toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
    category: "nextjs",
  },

  {
    title: "Understanding the JavaScript Modulo Operator",
    description:
      "One of the most commonly-misunderstood operators is Modulo (%). In this tutorial, we'll unpack exactly what this little bugger does, and learn how it can help us solve practical problems.",
    date: new Date().toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
    category: "javascript",
  },
];

export const popularPosts = [
  {
    title: "An Interactive Guide to Flexbox",
  },
  {
    title: "An Interactive Guide to CSS Transitions",
  },
  {
    title: "The End of Front-End Development",
  },
  {
    title: "Designing Beautiful Shadows in CSS",
  },
  {
    title: "Why React Re-Renders",
  },
];

export const categories = [
  "react",
  "javascript",
  "css",
  "animation",
  "performance",
  "databases",
];
