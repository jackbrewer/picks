import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

import GlobalMeta from '../src/component/Meta/Global'

import { config } from '../meta.config'
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        {/* render the default head first, then append our custom stuff after,
            so we definitely fall under the default <meta charset="" />
        */}
        <Head />
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
