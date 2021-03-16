const _createProperty = ({ uniqueClass, src }) =>
  `.${uniqueClass}{background-image:url(${src})}`

const srcSetToCss = ({ uniqueClass, srcSet = [] }) => {
  if (!srcSet.length) return ``
  return srcSet
    .map(({ from, src }) => {
      if (from === 0) return _createProperty({ uniqueClass, src })
      return `@media all and (min-width:${from}px){${_createProperty({
        uniqueClass,
        src,
      })}}`
    })
    .join('')
}

export default srcSetToCss
