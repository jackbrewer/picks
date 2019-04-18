import React from 'react'
import App, { Container } from 'next/app'
import NextSeo from 'next-seo'

import '../src/asset/scss/base.scss'

import { defaults } from '../meta.config'

import MainLayout from '../src/component/Layout/MainLayout'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <MainLayout>
          <NextSeo config={defaults} />
          <Component {...pageProps} />
        </MainLayout>
      </Container>
    )
  }
}

export default MyApp
