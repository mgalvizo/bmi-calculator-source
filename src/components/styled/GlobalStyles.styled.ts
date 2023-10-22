import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
    --max-content-width: 1160px;
    --max-design-width: 1440px;
    --base-fsz: 62.5%;
    --body-ffam: 'Inter', sans-serif;
    --body-fsz-s: 1.4rem;
    --body-fsz-m: 1.6rem;
    --body-lht: 1.5;
    /* COLORS */
    --blue: #345ff6;
    --gunmetal: #253347;
    --dark-blue: #5e6e85;
    --white: #fff;
    --black: #000;
    --borders: #d8e2e7;
    --light-blue: #d6e6fe;
    --error: #c53030;
    /* --gradient: linear-gradient(315deg, #D6E6FE 0%, #D6FCFE 100%); */
    --gradient: linear-gradient(315deg, #D6E6FE 0%, rgba(214, 252, 254, 0.00) 100%);
    --gradient-2: linear-gradient(90deg, #345FF6 0%, #587DFF 100%);
    /* HEADINGS */
    --heading-s-fsz: 2rem;
    --heading-m-fsz: 2.4rem;
    --heading-l-fsz: 4.8rem;
    --heading-xl-fsz: 6.4rem;
    --heading-lht: 1.1;
    --semibold: 600;
    /* SPACING */
    --web-padding-xs: 4px;
    --web-padding-s: 8px;
    --web-padding-m: 16px;
    --web-padding-l: 24px;
    --web-padding-xl: 32px;
    --web-padding-xl2: 40px;
    --web-margin-xs: 4px;
    --web-margin-s: 8px;
    --web-margin-m: 16px;
    --web-margin-l: 24px;
    --web-margin-xl: 32px;
    --web-margin-xl2: 40px;
    /* MISC*/
    --gradient-ht-s: 640px;
    --gradient-ht-l: 737px;
    --gradient-w-l: 978px;
    --border-rad: 35px;
    --card-border-rad: 16px;
    --card-box-shadow: 16px 32px 56px 0px rgba(143, 174, 207, 0.25);
    --radio-sz: 30px;
    --inner-radio-sz: 15px;
    --input-ht: 70px;
    --input-lht: 70px;
    --input-border-rad: 12px;
    /* MEDIA */
    --media-min: 20em; /* 320px */
    --media-tablet: 30em; /* 480px */
    --media-tablet-small-desktop: 38.75em; /* 620px */
    --media-small-desktop: 48em; /* 768px */
    --media-s-l-desktop: 56.25em; /* 900px */
    --media-large-desktop: 64em; /* 1024px */
    --large-desktop-max: 77em; /* 1232px */
    --media-max: 90em; /* 1440px */
}

* {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    border: 0;
}

html {
    width: 100%;
    font-size: var(--base-fsz);
    font-family: sans-serif;
    box-sizing: border-box;
    overflow-y: scroll;
    scrollbar-gutter: stable;
}

body {
    background-color: var(--white);
    font-size: var(--body-fsz-m);
    line-height: var(--body-lht);
    overflow-x: hidden;
    font-family: var(--body-ffam);
    color: var(--gunmetal);
}

main{
    width: 100%;
}

img,
svg {
    width: auto;
    max-width: 100%;
    vertical-align: middle;
}

a:link,
a:visited {
    font-weight: bold;
    color: var(--gunmetal);
    text-decoration: none;
}

a:link:hover,
a:visited:hover {
    text-decoration: underline;
}

button {
    font-family: inherit;
    color: inherit;
    font-weight: bold;
    outline: none;
}

h1, 
h2, 
h3, 
h4, 
h5, 
h6 {
    font-weight: var(--semibold);
}

strong {
    font-weight: var(--semibold);
}

.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    border: 0;
    clip: rect(1px 1px 1px 1px);
    /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
}

// 480px
@media only screen and (min-width: 30em) {}

// 620px
@media only screen and (min-width: 38.75em) {}

// 768px
@media only screen and (min-width: 48em) {}

// 900px
@media only screen and (min-width: 56.25em) {}

// 1024px
@media only screen and (min-width: 64em) {}

// 1232px
@media only screen and (min-width: 77em) {}

// 1336px
@media only screen and (min-width: 83.5em) {}

// 1440px
@media only screen and (min-width: 90em) {}
`;

export default GlobalStyle;
