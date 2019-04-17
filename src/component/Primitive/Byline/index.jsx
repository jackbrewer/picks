import React, { PureComponent } from 'react'
import { node, string } from 'prop-types'

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
            <time
              className={styles.BylineDate}
              {...timestamp && { dateTime: timestamp }}
            >
              {displayDate}
            </time>
          )}
          {displayDate && author && separator}
          {author && <span className={styles.BylineAuthor}>{author}</span>}
        </Type>
      </div>
    )
  }
}

Byline.defaultProps = {
  separator: ' - '
}

Byline.propTypes = {
  author: node,
  displayDate: string,
  separator: string,
  timestamp: string
}

export default Byline
