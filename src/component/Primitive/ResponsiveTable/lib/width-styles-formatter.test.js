import widthStylesFormatter from './width-styles-formatter'

describe('widthStylesFormatter', function() {
  test('should return single width in expected formats', function() {
    expect(widthStylesFormatter([100])).toEqual(
      `@media all and (max-width: 99px) { .hideUntil-100 { display: none; } }`
    )
  })

  test('should return multiple widths in expected formats', function() {
    expect(widthStylesFormatter([100, 200])).toEqual(
      `@media all and (max-width: 99px) { .hideUntil-100 { display: none; } } @media all and (max-width: 199px) { .hideUntil-200 { display: none; } }`
    )
  })

  test('should return nothing when no widths passed', function() {
    expect(widthStylesFormatter([])).toEqual(undefined)
  })

  test('should return nothing when no widths passed', function() {
    expect(widthStylesFormatter()).toEqual(undefined)
  })

  test('should skip non-numeric values', function() {
    expect(widthStylesFormatter([100, 'b', () => {}])).toEqual(
      `@media all and (max-width: 99px) { .hideUntil-100 { display: none; } }`
    )
  })
})
