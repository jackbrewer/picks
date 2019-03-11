//
// TO CONSIDER:
// Widths of `hideUntil` are relative to the viewport - not the width of the table…
//
// Similar setup to `hideUntil` for abbr/title switchover. Could use same
// show/hide classes as hideUntil to avoid duplication if matching values.
//

import React, { PureComponent } from 'react'
import { array } from 'prop-types'

import styles from './ResponsiveTable.module.scss'

import widthStylesFormatter from './lib/width-styles-formatter'

import ResponsiveTableDataCell from './component/ResponsiveTableDataCell'
import ResponsiveTableHeaderCell from './component/ResponsiveTableHeaderCell'
import ResponsiveTableRow from './component/ResponsiveTableRow'

class ResponsiveTable extends PureComponent {
  render() {
    const { cols, rows } = this.props

    const hiddenWidths = [...new Set(cols.map(col => col.hideUntil))].filter(
      col => col !== undefined
    )

    return (
      <div className={styles.ResponsiveTable}>
        {hiddenWidths.length > 0 && (
          <style
            dangerouslySetInnerHTML={{
              __html: widthStylesFormatter(hiddenWidths)
            }}
          />
        )}
        <table className={styles.ResponsiveTableTable}>
          <thead>
            <tr>
              {cols.map((col, i) => (
                <ResponsiveTableHeaderCell
                  key={`ResponsiveTableHeading${i}`}
                  {...col}
                />
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <ResponsiveTableRow key={`ResponsiveTableRow${i}`} {...row}>
                {row.data.map((dataCell, j) => (
                  <ResponsiveTableDataCell
                    key={`ResponsiveTableDataCell${j}`}
                    hideUntil={cols[j].hideUntil}
                  >
                    {dataCell}
                  </ResponsiveTableDataCell>
                ))}
              </ResponsiveTableRow>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

ResponsiveTable.propTypes = {
  cols: array.isRequired, // TODO: define shape
  rows: array.isRequired // TODO: define shape
}

export default ResponsiveTable
