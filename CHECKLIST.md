# Component QA Checklist

## JSX

- All files containing JSX have `.jsx` extension, including stories and test files
- Use `PureComponent` unless specific reason not to
- PropTypes are desctructured at import
- Props have correct types, and use `.isRequired` in necessary places
- Imports sorted sensibly (npm modules, internal modules, styles, child components)
- `!!` for non-boolean conditional JSX blocks e.g. `{!!items.length && <foo />}`
- `key` prop should be component case, e.g. `key={`ExampleComponent\${i}`}
- Prop usage consistent with similar functionality in existing components, e.g. one of`ratio={9 / 16}`,`ratio="9:16"`,`ratio="56.25%"`
- (TBC) imports organised (TODO: define what ‘organised’ means)
- (TBC) Props/PropTypes organised (TODO: define what ‘organised’ means)
- (TBC) follows defined export strategy when exporting multiple sub-components
- (TBC) Minimal logic within render()
- (TBC) Minimal use of state unless completely self-contained

If using HOCs:

- Add `displayName` for better Storybook info
- When exporting through HOC e.g. `export default withTheme(Foo)`, also `export class Foo extends…` for easier Enzyme testing without HOC wrapper

## Styles

- Styles are authored as `*.module.scss` files
- Existing variables/mixins are used where appropriate
- Use existing spacing units for consistent sizing/spacing
- Component-specific variables and animation names are scoped by prefixing with component name
- Images/fonts referenced in styles have paths relative to imported `.scss` file
- Hover, active, focus styles use common styles across all components
- `yarn lint:css` passes
- (TBC) Styles props use `.Block` and `.BlockElement` naming convention for elements
- (TBC) Styles use lowercase `modifier` naming convention for modifiers

## HTML

- Ensure only whitelisted props output in final HTML to avoid prop leakage
- Validate final HTML for structure/a11y/heirarchy

## Tests

- 100% code coverage
- Tests for all possible classNames/props
- Tests for propTypes if any are set to `.isRequired`

## Storybook

- Storybook stories created for each prop, className, variation
- Storybook info descriptions with suggested uses etc.
- Make use of installed addons, e.g. `action()` for showing interactive functionality
- (TBC) group stories into a pre-existing component group (Utility, Core, Composite etc).
- (TBC) Storybook output looks OK across multiple BG colours/photos

## (TBC) Component README

- (TBC) Description/uses, or links to Storybook description etc
- (TBC) Version
- (TBC) Changelog
- (TBC) List dependencies on other components
- (TBC) Space to list per-project modifications from original if used in external project
