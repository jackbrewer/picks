import React, { PureComponent } from 'react'
import { bool, node } from 'prop-types'
import classNames from 'classnames'

import styles from './DecoratedTextControl.module.scss'

import TextControl from '../TextControl'

class DecoratedTextControlDecoration extends PureComponent {
  render() {
    const { children, interactive } = this.props

    return (
      <div
        className={classNames(
          styles.DecoratedTextControlDecoration,
          interactive && styles.interactive
        )}
      >
        {children}
      </div>
    )
  }
}

DecoratedTextControlDecoration.displayName = 'DecoratedTextControlDecoration'

DecoratedTextControlDecoration.propTypes = {
  interactive: bool,
  children: node.isRequired
}

class DecoratedTextControl extends PureComponent {
  render() {
    const {
      before,
      beforeInteractive,
      after,
      afterInteractive,
      ...other
    } = this.props

    return (
      <div
        className={classNames(
          styles.DecoratedTextControl,
          before && styles.before,
          after && styles.after
        )}
      >
        {before && (
          <DecoratedTextControlDecoration interactive={beforeInteractive}>
            {before}
          </DecoratedTextControlDecoration>
        )}
        <TextControl
          {...other}
          className={styles.DecoratedTextControlControl}
        />
        {after && (
          <DecoratedTextControlDecoration interactive={afterInteractive}>
            {after}
          </DecoratedTextControlDecoration>
        )}
      </div>
    )
  }
}

DecoratedTextControl.propTypes = {
  before: node,
  beforeInteractive: bool,
  after: node,
  afterInteractive: bool
}

export default DecoratedTextControl
