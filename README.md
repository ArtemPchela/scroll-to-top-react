## React Component scroll-to-top-react

Note: scroll-to-top-react works with React, Vite, Next.js, and TypeScript.

- [! Important Note about Next.js](#important)

## Table of Contents

- [Overview](#overview)
- [Installation and Import](#installation)
- [Props](#props)
  - [displayType](#displaytype)
  - [imageSrc](#imagesrc)
  - [myClass](#myclass)
  - [text](#text)
  - [threshold](#threshold)
- [Styling and Explanation](#styling)
  - [CSS Properties Explained](#css-properties-explained)
  - [Visibility and Hover Effects](#visibility-and-hover-effects)
  - [Image](#image)
- [Usage Examples](#usage-examples)

## <a id="overview"></a> Overview
The Scroll To Top is a React component that provides a scroll-to-top-react button with customizable options.
You can specify the display type, image source, custom class, text, and scroll threshold to trigger the button visibility.

You may use predefined CSS and use the class [scroll_top](#styling) in your CSS file to replace current styles or create your own custom CSS to style the button with [myClass](#myclass).

## <a id="installation"></a> Installation and Import

To install the package, you can use one of the following commands:
```tsx
  npm install scroll-to-top-react
```

```tsx
  yarn add scroll-to-top-react
```
    
```tsx
  pnpm add scroll-to-top-react
```
To import the component into your project:
```tsx
  import ScrollToTop from 'scroll-to-top-react';
```

## <a id="props"></a> Props

### <a id="displaytype"></a> displayType

- **Type**: `string`
- **Options**: `"text" | "htmlArrow" | "image"`
- **Default**: `"text"`
- **Description**: Determines the type of content to display for the scroll-to-top-react button. if you don't want to use 

### <a id="imagesrc"></a> imageSrc

- **Type**: `string`
- **Default**: `undefined`
- **Description**: The source URL of the image to display when `displayType` is set to `"image"`.

### <a id="myclass"></a> myClass

- **Type**: `string`
- **Default**: `"my_class"`
- **Description**: The CSS class to apply to the scroll-to-top-react button.

### <a id="text"></a> text

- **Type**: `string`
- **Default**: `"Top"`
- **Description**: The text to display when `displayType` is set to `"text"`. By default, the text is `"Top"`.

### <a id="threshold"></a> threshold

- **Type**: `number`
- **Default**: `150`
- **Description**: The scroll threshold in pixels for showing the scroll-to-top-react button.

## <a id="styling"></a> Styling and Explanation
```css
.scroll_top {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 7px;
  background: #3f3b3b;
  border: 1px solid #a2a1a1;
  color: #a2a1a1;
  padding: 0.25rem;
  opacity: 0;
  transform: translateY(100%);
  transition: all 0.5s ease;
}

.scroll_top.visible {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}

.scroll_top.visible:hover {
  transform: scale(0.9);
}

img.scroll_top {
  width: 2rem;
  height: 2rem;
}
```

### <a id="css-properties-explained"></a> CSS Properties Explained
- `position`: Sets the button in a fixed position on the page.
- `right:, bottom`: Sets the button position 1rem from the right and bottom of the viewport.
- `font-size`: Sets the font size of the text or arrow symbol.
- `cursor`: Sets the cursor to a pointer when hovering over the button.
- `border-radius`: Sets rounds the corners of the button.
- `background`: Sets the background color of the button.
- `border`: Sets a border to the button.
- `color`: Sets the color of the text or arrow symbol.
- `padding`: Sets padding to the left and right of the button.
- `opacity`: Sets the initial opacity to 0, making the button invisible.
- `transition`: Sets smooth transitions for various properties.
- `transform: scale(value)`: Sets a new size of the button when hovered over;

### <a id="visibility-and-hover-effects"></a> Visibility and Hover Effects
- `.my_class.visible`: Styles for when the button is visible.
- `.my_class.visible:hover`: Styles for when the button is hovered over.

### <a id="image"></a> If you want to use an image instead of text or arrow symbol
- `img.my_class`: Styles for the image.

## <a id="usage-examples"></a> Usage Examples

### Example 1: Basic Usage with Default Settings
```tsx
import ScrollToTop from 'scroll-to-top-react';

const App = () => {
  return (
    <>
      <ScrollToTop />
    </>
  );
};

export default App;
```

### Example 2: Custom Class will replace default styles
- `myClass` must be a string.
```tsx  
import ScrollToTop from 'scroll-to-top-react';

const App = () => {
  return (
    <>
      <ScrollToTop myClass="my_class" />
    </>
  );
};

export default App;
```

### Example 3: Custom Text
- `text` must be a string.
```tsx
import ScrollToTop from 'scroll-to-top-react';

const App = () => {
  return (
    <>
      <ScrollToTop displayType={text} text="Back to Top" />
    </>
  );
};

export default App;
```

### Example 4: Custom HTML Arrow
- `displayType` must be a string.
- `displayType` must be set to `"htmlArrow"`.
```tsx
import ScrollToTop from 'scroll-to-top-react';

const App = () => {
  return (
    <>
      <ScrollToTop displayType="htmlArrow" />
    </>
  );
};

export default App;
```

### Example 5: Custom Image
- Image may have absolute or relative path
- `imageSrc` is required when `displayType` is set to `"image"`.
- `imageSrc` must be a string.
```tsx
import ScrollToTop from 'scroll-to-top-react';
import imageSrc from './path/to/your/image.png';

const App = () => {
  return (
    <>
      <ScrollToTop
        displayType="image"
        imageSrc="https://pngtree.com/freepng/arrow-up-glyph-black-icon_4008267.html" // absolute path
        imageSrc={imageSrc} // relative path
      />
    </>
  );
};

export default App;
```

### Example 5: Custom Scroll Threshold
- `threshold` must be a number.
- The default value is `150`.
- The scroll threshold is the number of pixels scrolled before the scroll-to-top-react button is visible.
```tsx
import ScrollToTop from 'scroll-to-top-react';

const App = () => {
  return (
    <>
      <ScrollToTop threshold={200} />
    </>
  );
};

export default App;
```

## <a id="important"></a> Important Note about Next.js

If you want to use `scroll-to-top-react` with Next.js, you must create a file with import `scroll-to-top-react` and add `"use client"` on top of the file. Example:
```tsx
"use client"
import ScrollToTop from 'scroll-to-top-react';

const ScrollToTopComponent = () => {
  return (
    <>
      <ScrollToTop />
    </>
  );
};

export default ScrollToTopComponent;
```
because "use client" is used to declare a boundary between a Server and Client Component modules. This means that by defining a "use client" in a file, all other modules imported into it, including child components, are considered part of the client bundle - and will be rendered by React on the client.

If `scroll-to-top-react` use with Next.js, by default next use `Image` component for images. In this component we use `img` tag.<br/>
That's mean it will be warning `Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element(@next/next/no-img-element)` <br/>

What is `LCP`?<br/>
LCP stands for Largest Contentful Paint, which is a user-centric web performance metric that measures how long it takes for the largest and most meaningful content element (typically an image or block-level element like a heading) to become visible within the viewport of a web page during its loading process. LCP is a key metric in Google's Core Web Vitals, which are a set of user-focused performance metrics that aim to evaluate the overall user experience of a web page.<br/>
Icon will have so small size what should affect the speed or performance of your app.
