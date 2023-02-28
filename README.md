# Frontend Mentor - Space Tourism

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I implemented](#what-i-implemented)

## Overview

### The challenge

Users should be able to:

- [x] View the optimal layout for the site depending on their device's screen size
- [x] See hover states for all interactive elements on the page

### Screenshot

|                            Desktop                            |
| :-----------------------------------------------------------: |
|                     ![](./screenshot.png)                     |
|                          **Tablet**                           |
| <img src="./screenshot-tablet.png" alt="tablet" width="400"/> |
|                          **Mobile**                           |
| <img src="./screenshot-mobile.png" alt="mobile" width="400"/> |

### Links

- Solution URL: [Github](https://github.com/rylanzhou/frontend-mentor-space-tourism)
- Live Site URL: [Vercel](https://frontend-mentor-space-tourism-sigma.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Scss
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- TypeScript
- Vite

### What I implemented

1. Use `<Layout>` as the highest parent component to unify page structure and responsive layouts for different pages.

2. Use `vite-plugin-svgr` lib to directly import SVGs as components. Remove the `fill` property in each SVG file beforehand so that the color can be adjusted with CSS.

3. Use `sass:map` to apply different background images in for each page and device type.
