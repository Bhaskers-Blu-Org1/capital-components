# Capital Components

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Components to support the Watson Financial Services [Capital Design System](https://ibm.biz/capital-design-system).

This library makes the assumption that you already have carbon-components installed and behaves as an addon to that project. Currently we are using carbon v9 with plans to upgrade to v10.

## Libraries

### 🛠 Component Library

- [Storybook](https://ibm.github.io/capital-components/)
- [Repo](https://github.com/ibm/capital-components/)

## Setup

```sh
yarn add capital-components
```

Note: There are additional required dependencies like emotion and icons that should also be installed. Check the package.json for all required peer dependencies.

## General Styling

This repo provides a small set of SASS files that can be used for styling components.

```scss
@import "~capital-components/styles/scss/carbon-components.scss";
@import "~capital-components/styles/scss/styles.scss";
@import "~capital-components/styles/css/cap-grid-legacy.css";
```

```js
import "capital-components/styles/css/carbon-components.css";
import "capital-components/styles/css/styles.css";
import "capital-components/styles/css/cap-grid-legacy.css";
```

We use CSS styling for a few elements (grid, font sizing, base carbon styles) for the sake of a shared reference point with
other projects.

## Emotion Styling

We use the emotion library to provide dynamic styling combined with low configuration support. Using emotion allows anyone using
this library to only have the emotion dependency but not worry about webpack config or loader specifics. It also allows our
package to be relatively small and prevent including a lot of unused CSS.

Using emotion also allows developers to control scope like no other CSS framework.

Learn more [here](https://emotion.sh)

### Some Classes

| Class             | Use                |
| ----------------- | ------------------ |
| cap--type-alpha   | header 1 type face |
| cap--type-beta    | header 2 type face |
| cap--type-gamma   | header 3 type face |
| cap--type-delta   | header 4 type face |
| cap--type-epsilon | header 5 type face |

See the styles.scss files for other useful styles. Note that we did not make this apply to all `h1` (`h2`, etc) elements intentionally, as it conflicts with carbon's styling.

## Theming

Our themes are based on carbon themes, so you can import your custom theme file prior to our styles file. We've provided some example theme files.

```scss
@import "~capital-components/styles/scss/themes/regulatory-compliance.scss";
@import "~capital-components/styles/scss/styles.scss";
```

However, we also use emotion theming to get dynamic theme colors (or other theme properties). To take advantage of many of our components,
you need to wrap your app with the Theme Provider:

```js
import { ThemeProvider } from 'capital-components/lib/support/theme';
import theme from 'capital-components/lib/support/themes/other-products';

...

<ThemeProvider theme={theme}>
    <App />
</ThemeProvider>
```

## Spacing

We use a standardized spacing scheme built (details in [src/layout/spacing](https://github.com/ibm/capital-components/blob/master/src/layout/spacing.ts))

The suggestion is to use the `buildSpacingFromString` method to determine how much padding an element should have. This method works on a string
like "top md bottom md" which replaces the `md`s with the appropriate spacing size and applies that to the associated direction.

Please see the [test](https://github.com/ibm/capital-components/blob/master/src/layout/spacing.test.ts) file for more detailed use cases.

## Grid

We provide some utility components that are built upon [css-gridish](https://github.com/IBM/css-gridish)

### React Component Usage

```js
import { Grid, Col } from "capital-components";
```

### Vertical Spacing

Grid (and Col) elements control their horizontal spacing because they are grid elements. Sometimes you do want to specify padding on the vertical axis.
Like spacing, we provide a prop on Grid/Col elements called `verticalPadding` which takes a string and translates that to standard padding.

Unlike the spacing function, this prop can only apply padding to top or bottom. Please see the [test](https://github.com/ibm/capital-components/blob/master/src/layout/grid.test.ts) file for more detailed use cases.

## Media queries

This library exposes some useful media query helpers that can be used inside javascript. They are located here:

```js
import { breakpoints } from "capital-components/lib/layout/mediaQueries";
```

Supported breakpoint sizes can be found [here](https://ibm.github.io/capital-components/?selectedKind=Layout%7CMedia%20Queries&selectedStory=Scales&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Fstories%2Fstories-panel)

### With React

We also suggest using the package [react-media](https://www.npmjs.com/package/react-media) to supplement this functionality.

With react-media, we can build a component that changes it's rendering based on the media queries:

```jsx
import Media from "react-media";
import { breakpoints } from "capital-components/lib/layout/mediaQueries";

const Comp = () => (
  <Media query={{ maxWidth: breakpoints.s - 1 }}>
    {matches => (matches ? <Comp1 /> : <Comp2 />)}
  </Media>
);
```

This component would render Comp1 if the screen size is less than the `small` breakpoint.

Note: We subtract 1 from the breakpoint for consistency. These breakpoints are designed for `min-width` in mind, so max-width needs
some minor adjustments to keep in sync with all the mediaqueries in emotion.

Alternatively, you can use the helper component:

```jsx
import { Mobile } from "capital-components";

const Comp = () => <Mobile>{isMobile => (isMobile ? <Comp1 /> : <Comp2 />)}</Mobile>;
```

### With Emotion

Emotion css also works really well with our media queries package. You can see some of the examples inside the media query
section of [storybook](https://ibm.github.io/capital-components/?selectedKind=Layout%7CMedia%20Queries&selectedStory=Base%20Elements&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)

#### mq

Used instead of `css` function from emotion. The following will generate a div that has the
background color of `red` on screens smaller than the `s` breakpoint:

```jsx
import { mq } from "capital-components/lib/layout/mediaQueries";

const Comp = () => <div className={mq.s("background-color: red;")}>Hello World</div>;
```

#### mqStringsMax

Another way to do it is to use some media query helpers within another `css` call. So something like the following would
work. This is useful when combined with non-media query related css. The following will generate a div with display flex and that has the background color of `red` on screens smaller than the `s` breakpoint:

```jsx
import { css } from "emotion";
import { mqStringsMax as mediaQuery } from "capital-components/lib/layout/mediaQueries";

const Comp = () => (
  <div
    className={css`
      display: flex;
      ${mediaQuery.s("background-color: red;")};
    `}
  >
    Hello World
  </div>
);
```

#### buildStringForMediaQuery

This helper is useful for building a map of media query sizes to a specific css combination. The following will generate a div that has the background color of `blue` when screen is larger than `s` breakpoint and `yellow` when screen is larger than `s` and `xl`:

```jsx
import { css } from "emotion";
import { buildStringForMediaQueries } from "capital-components/lib/layout/mediaQueries";

const mediaQueryString = buildStringForMediaQueries({
  s: "background-color: blue;",
  xl: "background-color: yellow;"
});

const Comp = () => <div className={css(mediaQueryString)}>Hello World</div>;
```

### Visualization Colors

Currently we include a palette of 20 colors, importable like so:

```javascript
import { paletteSet20 } from "capital-components/lib/support/vizColors";
```

It comes out as an array of 20 items, randomized, and based on b-splines: http://jsfiddle.net/frj3tb6a/11/

### Importing library

You can import the generated bundle to use the whole library:

```javascript
import { Grid } from "capital-components";
```

### NPM scripts

- `npm t`: Run test suite
- `npm start`: Run `npm run build` in watch mode
- `npm run test:watch`: Run test suite in [interactive watch mode](http://facebook.github.io/jest/docs/cli.html#watch)
- `npm run test:prod`: Run linting and generate coverage
- `npm run build`: Generate bundles and typings, create docs
- `npm run lint`: Lints code
- `npm run commit`: Commit using conventional commit style ([husky](https://github.com/typicode/husky) will tell you to use it if you haven't :wink:)

### Git Hooks

There is already set a `precommit` hook for formatting your code with Prettier :nail_care:

### FAQ

#### `Array.prototype.from`, `Promise`, `Map`... is undefined?

TypeScript or Babel only provides down-emits on syntactical features (`class`, `let`, `async/await`...), but not on functional features (`Array.prototype.find`, `Set`, `Promise`...), . For that, you need Polyfills, such as [`core-js`](https://github.com/zloirock/core-js) or [`babel-polyfill`](https://babeljs.io/docs/usage/polyfill/) (which extends `core-js`).

For a library, `core-js` plays very nicely, since you can import just the polyfills you need:

```javascript
import "core-js/fn/array/find"
import "core-js/fn/string/includes"
import "core-js/fn/promise"
...
```

#### What if I don't want git-hooks, automatic releases or semantic-release?

Then you may want to:

- Remove `commitmsg`, `postinstall` scripts from `package.json`. That will not use those git hooks to make sure you make a conventional commit

## Credits

Built based on this startkit: https://github.com/alexjoverm/typescript-library-starter.git
