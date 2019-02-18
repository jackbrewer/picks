import React from 'react'

import ShrinkWrap from '../../ShrinkWrap'

const cols = [
  { title: 'Rank' },
  { title: 'National Olympic Committee', abbr: 'NOC' },
  { title: 'Gold' },
  { title: 'Silver' },
  { title: 'Bronze' },
  { title: 'Total' }
]

const highlightedTeamId = '1000'

const data = [
  {
    rank: 1,
    noc: 'United States',
    nocCode: 'USA',
    flag: '🇺🇸',
    gold: 46,
    silver: 28,
    bronze: 29,
    total: 103
  },
  {
    rank: 2,
    noc: 'China',
    nocCode: 'CHN',
    flag: '🇨🇳',
    gold: 38,
    silver: 31,
    bronze: 22,
    total: 91
  },
  {
    rank: 3,
    noc: 'Great Britain',
    nocCode: 'GBR',
    flag: '🇬🇧',
    gold: 29,
    silver: 17,
    bronze: 19,
    total: 65
  }
]

const rows = data.map(item => {
  const highlighted = item.itemId === highlightedTeamId
  const data = [
    item.rank,
    <ShrinkWrap>
      <ShrinkWrap.Item>
        <span role="img" aria-label={`Flag of ${item.noc}`}>
          {item.flag}
        </span>
      </ShrinkWrap.Item>
      <ShrinkWrap.Item>
        {item.noc} ({item.nocCode})
      </ShrinkWrap.Item>
    </ShrinkWrap>,
    item.gold,
    item.silver,
    item.bronze,
    item.total
  ]
  return { data, highlighted }
})

export { cols, rows }
