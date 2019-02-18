import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import ResponsiveTable from '.'

const requiredProps = () => ({
  cols: [{ title: 'Column 1' }, { title: 'Column 2' }],
  rows: [
    { data: ['Row 1, Col 1', 'Row 1, Col 2'] },
    { data: ['Row 2, Col 1', 'Row 2, Col 2'] }
  ]
})

describe('Component: ResponsiveTable', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(ResponsiveTable.propTypes, {})
    const expected = {
      cols:
        'The prop `cols` is marked as required in `Component`, but its value is `undefined`.',
      rows:
        'The prop `rows` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(ResponsiveTable.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<ResponsiveTable {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('ResponsiveTable')
    expect(wrapper.find('table').length).toEqual(1)
    expect(wrapper.find('ResponsiveTableHeaderCell').length).toEqual(2)
    expect(wrapper.find('ResponsiveTableRow').length).toEqual(2)
    expect(wrapper.find('ResponsiveTableDataCell').length).toEqual(4)
    expect(wrapper.find('style').length).toEqual(0)
  })

  test('should output `<style>` if cols contain `hideUntil` prop', function() {
    const wrapper = shallow(
      <ResponsiveTable
        {...requiredProps()}
        cols={[
          { title: 'Column 1', hideUntil: 100 },
          { title: 'Column 2', hideUntil: 200 }
        ]}
      />
    )
    expect(wrapper.find('style').length).toEqual(1)
  })
})
