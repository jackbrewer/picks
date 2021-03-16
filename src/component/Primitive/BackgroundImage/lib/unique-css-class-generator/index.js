const generateUniqueCssClass = ({ prefix, unique }) => {
  const trimLength = 20
  const safeString = unique.replace(/-/g, '').replace(/\W/g, '')
  const trimmedString = safeString.substring(
    safeString.length - trimLength,
    trimLength
  )
  return prefix ? `${prefix}-${trimmedString}` : trimmedString
}

export default generateUniqueCssClass
