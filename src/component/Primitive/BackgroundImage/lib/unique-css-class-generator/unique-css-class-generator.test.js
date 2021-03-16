// const generateUniqueCssClass = ({ prefix, unique }) => {
//   const trimLength = 20
//   const safeString = unique.replace(/\W/g, '')
//   return `${prefix && `${prefix}-`}${safeString.substring(
//     safeString.length - trimLength,
//     trimLength
//   )}`
// }

// export default generateUniqueCssClass

import generateUniqueCssClass from '.'

describe('generateUniqueCssClass()', function () {
  test('should return a string in a format safe for use as a CSS class', function () {
    expect(
      generateUniqueCssClass({ unique: 'a string that is unique' })
    ).toEqual(`astringthatisunique`)
    expect(generateUniqueCssClass({ unique: 'short' })).toEqual(`short`)
  })

  test('should omit non-alphanumeric characters', function () {
    expect(
      generateUniqueCssClass({
        unique: 'A-str1ng=that’s un!que.',
      })
    ).toEqual(`Astr1ngthatsunque`)
  })

  test('should optionally add a prefix', function () {
    expect(
      generateUniqueCssClass({
        unique: 'a string that is unique',
        prefix: 'example',
      })
    ).toEqual(`example-astringthatisunique`)
  })
})
