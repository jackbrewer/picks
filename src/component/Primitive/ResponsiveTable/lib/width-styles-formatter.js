const widthStylesFormatter = widths => {
  if (!Array.isArray(widths) || widths.length === 0) return

  return widths
    .map(width => {
      if (typeof width !== 'number') return null

      return `@media all and (max-width: ${width -
        1}px) { .hideUntil-${width} { display: none; } }`
    })
    .join(' ')
    .trim()
}

export default widthStylesFormatter
