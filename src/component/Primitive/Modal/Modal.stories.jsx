import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Modal from '.'

import ButtonStandard from '../ButtonStandard'
import Inline from '../Inline'
import TextAlign from '../TextAlign'

const stories = storiesOf('Unsorted/Modal', module)

stories.add(
  'Info',
  () => (
    <Modal open onClose={action('Close clicked')} ariaLabel="Example Modal">
      Example Content
    </Modal>
  ),
  {
    info: {
      inline: true,
      text: `
        A skeleton Modal overlay with optional close mechanic.
      `
    }
  }
)

stories.add('Dismiss', () => (
  <Modal open onClose={action('Close clicked')} ariaLabel="Example Modal">
    Example Content
  </Modal>
))

stories.add('Alert', () => (
  <Modal
    open
    onClose={action('Close clicked')}
    ariaLabel="Example Modal"
    actions={<ButtonStandard onClick={action('OK clicked')}>OK</ButtonStandard>}
  >
    <TextAlign center>Example content</TextAlign>
  </Modal>
))

stories.add('Dialog', () => (
  <Modal
    open
    onClose={action('Close clicked')}
    ariaLabel="Example Modal"
    actions={
      <Inline>
        <ButtonStandard onClick={action('Save clicked')}>Save</ButtonStandard>
        <ButtonStandard onClick={action('Cancel clicked')}>
          Cancel
        </ButtonStandard>
      </Inline>
    }
  >
    <TextAlign center>Example content</TextAlign>
  </Modal>
))
