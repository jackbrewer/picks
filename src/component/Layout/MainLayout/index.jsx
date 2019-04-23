import React, { PureComponent } from 'react'
import { node } from 'prop-types'

// import styles from './MainLayout.module.scss'

import A11yNavigation from '../../Primitive/A11yNavigation'
import Header from '../../Primitive/Header'
import Navigation from '../../Primitive/Navigation'
import Footer from '../../Primitive/Footer'
import SiteContainer from '../../Primitive/SiteContainer'
import Main from '../../Primitive/Main'

class MainLayout extends PureComponent {
  render() {
    const { children } = this.props

    return (
      <SiteContainer>
        <A11yNavigation>
          <a href="#content">Jump to main content</a>
          <a href="#navigation">Jump to primary navigation</a>
        </A11yNavigation>
        <Header
          navigation={
            <Navigation id="navigation">
              <Navigation.Item to="/1" active>
                One
              </Navigation.Item>
              <Navigation.Item to="/2">Two</Navigation.Item>
              <Navigation.Item to="/3">Three</Navigation.Item>
            </Navigation>
          }
        />
        <Main>{children}</Main>
        <Footer />
      </SiteContainer>
    )
  }
}

MainLayout.propTypes = {
  children: node.isRequired
}

export default MainLayout
