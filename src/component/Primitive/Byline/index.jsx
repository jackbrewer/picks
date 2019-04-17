import React, { PureComponent } from 'react'
import { string } from 'prop-types'

import styles from './Byline.module.scss'

import Type from '../Type'

export class Byline extends PureComponent {
  render() {
    const { author, displayDate, separator, timestamp } = this.props
    if (!author && !displayDate) return null

    return (
      <div className={styles.Byline}>
        <Type size="small">
          {displayDate && (
            <time {...timestamp && { dateTime: timestamp }}>{displayDate}</time>
          )}
          {displayDate && author && separator}
          {author && <span>{author}</span>}
        </Type>
      </div>
    )
  }
}

Byline.defaultProps = {
  separator: ' - '
}

Byline.propTypes = {
  author: string,
  displayDate: string,
  separator: string,
  timestamp: string
}

export default Byline
