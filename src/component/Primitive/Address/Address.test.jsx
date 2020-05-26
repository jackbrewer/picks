import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { render } from '@testing-library/react'
import Address from '.'

const requiredProps = () => ({
  streetAddress: '123 Example Street',
  type: 'Person'
})

describe('Component: Address', () => {
  test('should return errors if required props missing', () => {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Address.propTypes, {})
    const expected = {
      streetAddress:
        'The prop `streetAddress` is marked as required in `Component`, but its value is `undefined`.',
      type:
        'The prop `type` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', () => {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Address.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with minimal props', () => {
    const { container, getByText } = render(<Address {...requiredProps()} />)
    expect(container.firstChild).toHaveAttribute(
      'itemType',
      'http://schema.org/Person'
    )
    expect(getByText('123 Example Street')).toBeTruthy()
  })

  test('should output the expected markup with all props', () => {
    const { container, getByText } = render(
      <Address
        {...requiredProps()}
        type="Organisation"
        name="Organisation Name"
        streetAddress="123 Street Name"
        postOfficeBoxNumber="PO Box 123"
        addressLocality="Town"
        addressRegion="City, County"
        postalCode="PO57 CDE"
        addressCountry="UK"
      />
    )
    expect(container.firstChild).toHaveAttribute(
      'itemType',
      'http://schema.org/Organisation'
    )
    expect(getByText('Organisation Name')).toHaveAttribute('itemProp', 'name')
    expect(getByText('123 Street Name')).toHaveAttribute(
      'itemProp',
      'streetAddress'
    )
    expect(getByText('PO Box 123')).toHaveAttribute(
      'itemProp',
      'postOfficeBoxNumber'
    )
    expect(getByText('Town')).toHaveAttribute('itemProp', 'addressLocality')
    expect(getByText('City, County')).toHaveAttribute(
      'itemProp',
      'addressRegion'
    )
    expect(getByText('PO57 CDE')).toHaveAttribute('itemProp', 'postalCode')
    expect(getByText('UK')).toHaveAttribute('itemProp', 'addressCountry')
  })
})
