# createCo-rebuilt
createCo rebuilt using Tailwind CSS

## Table of contents

- [createCo-rebuilt](#createco-rebuilt)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Video](#video)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
  - [Tailwind Setup Process](#tailwind-setup-process)
    - [Other Additions](#other-additions)
  - [Animated Images](#animated-images)
  - [Special Font Setup](#special-font-setup)
  - [Code for 2 half page colors](#code-for-2-half-page-colors)
  - [Font awesome (6.4.0)](#font-awesome-640)
  - [Markdown](#markdown)
    - [Thoughts and troubles](#thoughts-and-troubles)
    - [What I learned and used](#what-i-learned-and-used)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge


It should:

- Card flip 
- Loader
- Built with tailwind CSS 

### Video 


https://github.com/f-lajoc/CreateCo-rebuilt/assets/104025961/c162b1bd-8149-4187-9cbb-9bfe23186928



### Links

- Solution URL: [https://github.com/f-lajoc/createCo-rebuilt] 
- Live Site URL: [https://createco-rebuilt.netlify.app/]

## My process

### Built with

- Tailwind CSS

 Tailwind Setup Process
 ---
 
1. In terminal
```terminal
npm init -y
```

2. In terminal
```terminal
npm install -D tailwindcss
```

3. In terminal
```terminal
npx tailwindcss init
```

4. In tailwind.config.js file, paste this in 
```
content["./**/*.{html,js}"]
```

5. Create CSS file and paste the following inside
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

6. Go to package.json file, in scripts, clear and input this
```
"build": "tailwindcss -i ./css/style.css -o ./dist/main.css",
"watch": "tailwindcss -i ./css/style.css -o ./dist/main.css --watch"
```

7. In terminal
```terminal
npm run build
```

8. Add to html
```
<link href="/dist/main.css" rel="stylesheet">
```

9. Testrun by adding a style and preview
```
If style is not reflecting
go to package.json and click debug for both build and watch, one after the other
```
```
OR
```
```terminal
npm run build
npm run watch
run the two one after the other
```

### Other Additions
 Animated Images
---
- [giphy.com] - i downoaded the space animated image here having (.gif extension), then add it as background image in my CSS
  
 Special Font Setup
---
- [1001font.com] -i downloaded the font i wanted having (.ttf extension)
  
+ Put at top of CSS
```
@font-face {
	font-family: venusta;
	src: url("../venusta.regular.ttf");
}
edit the above to your special font
```

 Code for 2 half page colors
---
```
background: linear-gradient(
  to bottom,
  var(--bg1) 0%,
  var(--bg2) 90%,
  var(--bg1) 90%,
  var(--bg1) 100%);

```
 Font awesome (6.4.0)
---
  <script src="https://kit.fontawesome.com/434622864a.js" crossorigin="anonymous"></script>


 Markdown
---
- `**Bold**`
- `---linebreak`
```
1. ordered list item
 ```
 ````
`2 backtics for inline code` and ```6 backtics``` for block of codes
 ```` 
 
### Thoughts and troubles
- I was build getting build error on both netlify and vercel, when i hosted it after including all json package file excluding node_modules.
- I was stuck for like a day and there was no solution still. I ended up using the tailwind cdn to host it
  
### What I learned and used
- I wanted to make the page have two colors taking 60%/40% of the page, but i decided to try out using animated image gotten from [giphy.com] and color
- i used a special font called venusta for the logo gotten from [1001font.com]

### Continued development
- Tailwind CSS
- Git Version Control

### Useful resources
- [https://medium.com/@mignunez/html-css-how-to-split-a-background-into-2-colors-1cdc394deb3d]- split background color
- [giphy.com]- animated images
- [1001font.com]- special font
- [https://v2.tailwindcss.com/docs]- tailwind documentation
- [https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet]- markdown cheatsheet

## Author

- Twitter - [@lajoc__](https://www.twitter.com/lajoc__)
- Instagram - [@lajoc_devs](https://www.instagram.com/lajoc_devs)
- Codepen - [@lajoc__](https://codepen.io/lajoc__/pen/bGvYWjR)
- Github - [f-lajoc ](https://github.com/f-lajoc)
- LinkedIn - [bolaji funmilola](https://www.linkedin.com/in/funmilola-b-b4044b13b)

