import React, { PureComponent } from 'react'
import classNames from 'classnames'
import { bool, number, string } from 'prop-types'

import styles from './ResponsiveTableHeaderCell.module.scss'

import VisuallyHidden from '../../../VisuallyHidden'

class ResponsiveTableHeaderCell extends PureComponent {
  render() {
    const { abbr, hideTitle, hideUntil, title } = this.props

    return (
      <th
        scope="col"
        className={classNames(
          styles.ResponsiveTableHeaderCell,
          hideUntil && `hideUntil-${hideUntil}`
        )}
      >
        {/* TODO: Better logic here */}
        {hideTitle && (
          <VisuallyHidden>
            {title}
            {abbr && ` (${abbr})`}
          </VisuallyHidden>
        )}
        {!hideTitle && abbr && <abbr title={title}>{abbr}</abbr>}
        {!hideTitle && !abbr && title}
      </th>
    )
  }
}

ResponsiveTableHeaderCell.propTypes = {
  abbr: string,
  hideTitle: bool,
  hideUntil: number,
  title: string.isRequired
}

export default ResponsiveTableHeaderCell
