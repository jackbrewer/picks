import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

import GlobalMeta from '../src/component/Meta/Global'

import { config } from '../meta.config'
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <GlobalMeta {...config} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
