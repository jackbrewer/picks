## Ideal FE Workflow

Whichever tools we use going forwards (Custom, Gatsby, Next.js, CRA), we should agree a baseline of what we need our FE setup to achieve.

### General

**Development**

- Hot reloading
- quick
- debuggable (useful class names etc)

**Production**

- Chunking (via build in method if available, MiniCssExtractPlugin idf not)
- minification of CSS with CSSNano (review config)
- Semi-minified classnames with sourcemaps?

### JS/JSX

Content from https://github.com/clocklimited/backline/blob/master/CHECKLIST.md

**Prettier**

- "semi": false,
- "singleQuote": true
- JB: I'd also like to suggest trailingComma: "es5"
  - Better Git diffs as you don’t modify lines above
  - Easier multi-line editing without the last line being a special case
  - Easier alphabetical sorting in editor

**ESLint**

- existing setup (to be documented)
- eslint-plugin-jsx-a11y

### Styling

**Sass modules**

- Ident (review these):
  - dev: [name]**[local]\_**[hash:base64:5]
  - prod: [local]\_[hash:base64:5]
- Foo.module.scss naming convention? required custom function to generate ideal classNames

**Libraries**

- SCSS Responsive grid (or a variation of)
- SCSS Mixins (rewritten version of stylus-mixins)

**PostCSS config**

- postcss-flexbugs-fixes
- autoprefixer (reading from browserslist config)
- cssnano for minification (production-only? maybe minify dev for consistent output)

**Browserslist**

- > 1%, last 2 versions, not dead

**Stylelint**

- WIP config: https://github.com/clocklimited/backline/blob/master/.stylelintrc.json

---

## TODO / To review

- [ ] Refactor SCSS webpack setup so storybook can share (might not be worth the hassle of having to handle chinking etc manually vs. letting Next do it)
- [ ] Critical CSS strategy
- [ ] Consider custom asset loader instead of `next-image` to get better naming conventions
- [ ] [cache-control](https://csswizardry.com/2019/03/cache-control-for-civilians/)
- [ ] Review pagespeed/lighthouse quick wins
- [ ] [next-fonts](https://github.com/rohanray/next-fonts)
