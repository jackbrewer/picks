import React from 'react'
import { number } from 'prop-types'
import Link from 'next/link'

import Container from '../src/component/Primitive/Container'
import SpacedList from '../src/component/Primitive/SpacedList'
import Type from '../src/component/Primitive/Type'

import Prose from '../src/component/Primitive/Prose'

const ErrorPage = ({ statusCode }) => (
  <SpacedList>
    <Container size="medium" gutter center>
      <Prose>
        <Type size="title">
          {statusCode
            ? `An error occurred on server (${statusCode})`
            : 'An error occurred on client'}
        </Type>
        <p>
          When not try heading back to the{' '}
          <Link href="/">
            <a href="/">homepage</a>
          </Link>
          .
        </p>
      </Prose>
    </Container>
  </SpacedList>
)

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

ErrorPage.propTypes = {
  statusCode: number
}

export default ErrorPage
