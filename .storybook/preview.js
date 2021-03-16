import './storybook.module.scss'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: { grid: { cellSize: 8, opacity: 0.25 } },
  options: {
    storySort: { method: 'alphabetical' },
  },
}
