import React from 'react'
import { arrayOf, number, oneOfType } from 'prop-types'

import styles from './Progress.module.scss'

const Progress = ({ progress }) => {
  const progressArr = Array.isArray(progress) ? progress : [progress]

  return (
    <div className={styles.Progress}>
      <div className={styles.ProgressTrack}>
        {progressArr.map((progress, i) => (
          <div
            key={`ProgressBar${i}`}
            className={styles.ProgressBar}
            style={{ width: `${progress}%` }}
          />
        ))}
      </div>
    </div>
  )
}

Progress.defaultProps = {
  progress: 0,
  total: 100
}

Progress.propTypes = {
  progress: oneOfType([number, arrayOf(number)])
}

export default Progress
