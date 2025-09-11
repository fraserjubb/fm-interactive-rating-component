# FM - <Challenge Name> Solution - Fraser Jubb

This is a solution to [this challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/<link>).

## 📖 Table of contents

- [Overview](#overview)
  - [Project Screenshot](#project-screenshot)
  - [Project Links](#project-links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Noteworthy Updates Since Initial Submission](#noteworthy-updates-since-initial-submission)
- [Connect With Me](#connect-with-me)

## Overview

### Project Screenshot

![Screenshot of solution](/assets/images/solution-fraser.png)

### Project Links

- Solution URL: [Click Here](url)
- Live Site URL: [Click Here](url)
- Frontend Mentor Profile: [@fraserjubb](https://www.frontendmentor.io/profile/fraserjubb)

## My Process

### Built With

- HTML
- CSS
- JavaScript
- Desktop-first workflow

### What I Learned

In this particular project:

1. I wanted to focus on improving my css variable names so that they look more professional, help with readability and can be used in future projects.

How I wrote it previously:

```css
:root {
  --4px: 0.25rem;
  --8px: 0.5rem;
  --10px: 0.625rem;
  --12px: 0.75rem;
  --14px: 0.875rem;
  --16px: 1rem;
  --18px: 1.125rem;
  --20px: 1.25rem;
  --24px: 1.5rem;
  --26px: 1.625rem;
  --28px: 1.75rem;
  --30px: 1.875rem;
  --32px: 2rem;
  --34px: 2.125rem;
  --36px: 2.25rem;
  --38px: 2.375rem;
  --40px: 2.5rem;
  --50px: 3.125rem;
  --60px: 3.75rem;
}
```

Using ChatGPT to assist and explain why developers like to use certain conventions, I came up with this:

```css
:root {
  /* Font sizes (in rem) */
  --fs-xs: 0.75rem; /* 12px */
  --fs-sm: 0.875rem; /* 14px */
  --fs-md: 0.9375rem; /* 15px body text */
  --fs-lg: 1rem; /* 16px buttons */
  --fs-xl: 1.75rem; /* 28px titles */

  /* Spacing scale (rem) */
  --space-xs: 0.25rem; /* 4px */
  --space-sm: 0.5rem; /* 8px */
  --space-md: 0.75rem; /* 12px */
  --space-lg: 1rem; /* 16px */
  --space-xl: 1.5rem; /* 24px */
  --space-xxl: 2rem; /* 32px */
  --space-xxxl: 2.5rem; /* 40px */
  --space-xxxxl: 3rem; /* 48px */

  /* Border-radius scale */
  --radius-sm: 1.40625rem; /* 22.5px */
  --radius-md: 1.875rem; /* 30px */
  --radius-circle: 50%; /* circular elements */

  /* Line heights */
  --lh-base: 1.6; /* 24px for body text at 15px */
  --lh-heading: 1.25; /* 35px for headings at 28px */
}
```

2. Keeping a consistent ordering for css properties of layout >> typography >> visuals >> interactivity helps for finding any issues that may arise.

3. Giving classes more descriptive names e.g. `.card__btn` became `.rating-card__btn`.

### Continued Development

After submitting this project, I wish to develop the following:

1. Keep this more consistent naming style for class names and css variables. And keep improved order for css properties. Mastering this early will help with future workflow speeds.

### Useful Resources

- Nothing of note used for this project.

## Noteworthy Updates Since Initial Submission

1. No major updates since submitted.

## Connect With Me

<a href="https://github.com/fraserjubb"><img height="30px" align="left" alt="GitHub" style="padding-right:10px" title="Github" src="https://img.shields.io/badge/github-%23121011.svg?style=plastic&logo=github&logoColor=white"/></a>
<a href="https://www.linkedin.com/in/fraser-jubb"><img height="30px" align="left" alt="LinkedIn" style="padding-right:10px" title="LinkedIn" src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=plastic&logo=linkedin&logoColor=white"/></a>
<a href="https://www.instagram.com/thejubbzone/"><img height="30px" align="left" alt="Instagram" style="padding-right:10px" title="Instagram" src="https://img.shields.io/badge/Instagram-%23E4405F.svg?style=plastic&logo=Instagram&logoColor=white"/></a>
<a href="https://x.com/fraserjubb"><img height="30px" align="left" alt="X" style="padding-right:10px" title="X" src="https://img.shields.io/badge/X-%23000000.svg?style=plastic&logo=X&logoColor=white"/></a>
<a href="https://www.youtube.com/@thejubbzone2374"><img height="30px" align="left" alt="YouTube" style="padding-right:10px" title="YouTube" src="https://img.shields.io/badge/YouTube-%23FF0000.svg?style=plastic&logo=YouTube&logoColor=white"/></a>
<a href="mailto:fraserjubb.dev@gmail.com"><img height="30px" align="left" alt="Gmail" style="padding-right:10px" title="Gmail" src="https://img.shields.io/badge/Gmail-D14836?style=plastic&logo=gmail&logoColor=white"/></a>

<br/>
