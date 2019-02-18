import React from 'react'
import { storiesOf } from '@storybook/react'

import ResponsiveTable from '.'

import * as rugbyFixture from './fixture/rugby'
import * as olympicsFixture from './fixture/olympics'
import * as footballFixture from './fixture/football'

const stories = storiesOf('Specialised/ResponsiveTable', module)

stories.add(
  'Info',
  () => <ResponsiveTable cols={rugbyFixture.cols} rows={rugbyFixture.rows} />,
  {
    info: {
      inline: true,
      text: `
      Starter component which can be duplicated and used as a starting point
      for others.

      Use this first story to add documentation and show off the most
      interesting/useful component iteration. Use subsequent stories to detail
      all component permutations.
    `
    }
  }
)

stories.add('Example: Rugby', () => (
  <ResponsiveTable cols={rugbyFixture.cols} rows={rugbyFixture.rows} />
))

stories.add('Example: Olympics', () => (
  <ResponsiveTable cols={olympicsFixture.cols} rows={olympicsFixture.rows} />
))

stories.add('Example: Football', () => (
  <ResponsiveTable cols={footballFixture.cols} rows={footballFixture.rows} />
))
