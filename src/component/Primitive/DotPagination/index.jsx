import React from 'react'
import { func, number, string } from 'prop-types'
import classNames from 'classnames'

import styles from './DotPagination.module.scss'

import VisuallyHidden from '../VisuallyHidden'

const DotPagination = ({ activeIndex, a11yPrefix, dots, onChangeIndex }) => (
  <div className={styles.DotPagination}>
    <ol className={styles.DotPaginationList}>
      {[...Array(dots).keys()].map(dot => (
        <li
          key={`DotPaginationItem${dot}`}
          className={styles.DotPaginationItem}
        >
          <button
            className={classNames(
              styles.DotPaginationButton,
              activeIndex === dot && styles.active
            )}
            onClick={() => onChangeIndex(dot)}
          >
            <span className={styles.DotPaginationButtonInner}>
              <VisuallyHidden>
                {a11yPrefix} {dot + 1}
              </VisuallyHidden>
            </span>
          </button>
        </li>
      ))}
    </ol>
  </div>
)

DotPagination.defaultProps = {
  activeIndex: 0,
  a11yPrefix: 'Go to slide'
}

DotPagination.propTypes = {
  a11yPrefix: string,
  activeIndex: number,
  dots: number.isRequired,
  onChangeIndex: func.isRequired
}

export default DotPagination
