import srcSetToCss from '.'

describe('srcSetToCss()', function () {
  test('should return expected CSS as a string', function () {
    expect(
      srcSetToCss({
        uniqueClass: 'a123',
        srcSet: [
          { from: 0, src: '600.jpg' },
          { from: 600, src: '800.jpg' },
          { from: 800, src: '1000.jpg' },
        ],
      })
    ).toEqual(
      `.a123{background-image:url(600.jpg)}@media all and (min-width:600px){.a123{background-image:url(800.jpg)}}@media all and (min-width:800px){.a123{background-image:url(1000.jpg)}}`
    )
  })

  test('should return nothing if no srcSet passed', function () {
    expect(srcSetToCss({ uniqueClass: 'a123' })).toEqual('')
    expect(srcSetToCss({ uniqueClass: 'a123', srcSet: [] })).toEqual('')
  })
})
