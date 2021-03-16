import React from 'react'

import Prose from '@Primitive/Prose'

export default {
  title: 'Overview',
}

export const Overview = (args) => (
  <Prose>
    <p>
      Current grouping categories (inspired by{' '}
      <a
        href="https://polaris.shopify.com/components"
        target="_blank"
        rel="noopener"
      >
        Polaris
      </a>
      ).
    </p>
    <ul>
      <li>Actions</li>
      <li>Structure</li>
      <li>Forms</li>
      <li>Images & Icons</li>
      <li>Feedback Indicators</li>
      <li>Titles & Text</li>
      <li>Behaviour</li>
      <li>Lists & Tables</li>
      <li>Navigation</li>
      <li>Overlays</li>
      <li>Utility</li>
    </ul>
  </Prose>
)
Overview.args = {}
Overview.parameters = {
  controls: { hideNoControlsWarning: true },
}
