import React, { useRef } from 'react'
import { createPortal } from 'react-dom'
import { bool, func, node, string } from 'prop-types'
import useEscapeKey from '../../../hook/useEscapeKey'
import useOutsideClick from '../../../hook/useOutsideClick'

import FocusTrap from 'focus-trap-react'

import styles from './Modal.module.scss'

import VisuallyHidden from '../VisuallyHidden'
import Icon from '../Icon'

const Modal = ({ actions, ariaLabel, children, onClose, open, role }) => {
  const ref = useRef()

  const handleClose = () => {
    onClose && onClose()
  }

  useEscapeKey(handleClose)
  useOutsideClick(ref, handleClose)

  if (!open) return null

  return createPortal(
    <aside
      className={styles.Modal}
      role={role}
      aria-label={ariaLabel}
      aria-modal="true"
      tabIndex="-1"
    >
      <FocusTrap>
        <div className={styles.ModalInner}>
          <div className={styles.ModalBg} />
          <div className={styles.ModalPanel} ref={ref}>
            {!onClose && (
              <VisuallyHidden>
                <button name="modal-content" tabIndex="0">
                  Modal content start
                </button>
              </VisuallyHidden>
            )}
            {onClose && (
              <button
                className={styles.ModalClose}
                onClick={onClose}
                aria-label="Close Modal"
              >
                <Icon type="close" a11yText="" />
              </button>
            )}
            <div className={styles.ModalPanelContent}>
              <div className={styles.ModalContent}>{children}</div>
              {actions && <div className={styles.ModalActions}>{actions}</div>}
            </div>
          </div>
        </div>
      </FocusTrap>
    </aside>,
    document.body
  )
}

Modal.defaultProps = {
  role: 'dialog'
}

Modal.propTypes = {
  actions: node,
  ariaLabel: string.isRequired,
  children: node.isRequired,
  onClose: func,
  open: bool,
  role: string
}

export default Modal
