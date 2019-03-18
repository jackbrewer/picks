import React from 'react'
import App, { Container } from 'next/app'
import NextSeo from 'next-seo'

import '../src/asset/scss/base.scss'

import { defaults } from '../meta.config'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <NextSeo config={defaults} />
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp
