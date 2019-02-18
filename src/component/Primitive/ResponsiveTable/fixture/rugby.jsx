import React from 'react'

import ShrinkWrap from '../../ShrinkWrap'

const cols = [
  { title: 'Position', abbr: 'Pos' },
  { title: 'Team', abbr: 'Team' },
  { title: 'Played', abbr: 'Pl' },
  { title: 'Won', abbr: 'W', hideUntil: 350 },
  { title: 'Drawn', abbr: 'D', hideUntil: 350 },
  { title: 'Lost', abbr: 'L', hideUntil: 350 },
  { title: 'Points for', abbr: 'PF', hideUntil: 650 },
  { title: 'Points against', abbr: 'PA', hideUntil: 650 },
  { title: 'Points difference', abbr: 'Diff', hideUntil: 650 },
  { title: 'Tries for', abbr: 'TF', hideUntil: 730 },
  { title: 'Tries against', abbr: 'TA', hideUntil: 730 },
  { title: 'Tries bonus points', abbr: 'TBP', hideUntil: 860 },
  { title: 'Losing bonus points', abbr: 'LBP', hideUntil: 860 },
  { title: 'Total bonus points', abbr: 'BP', hideUntil: 860 },
  { title: 'League Points', abbr: 'Pts' }
]
const homeTeamId = '1000'

const teams = [
  {
    displayName: 'Northampton Saints',
    teamId: '1400',
    position: '1',
    played: '22',
    won: '16',
    drawn: '1',
    lost: '5',
    pointsFor: '621',
    pointsAgainst: '400',
    pointsDiff: '221',
    triesFor: '75',
    triesAgainst: '41',
    triesBonusPoints: '8',
    losingBonusPoints: '2',
    totalBonusPoints: '10',
    points: '76'
  },
  {
    displayName: 'Bath Rugby',
    teamId: '1000',
    position: '2',
    played: '22',
    won: '16',
    drawn: '0',
    lost: '6',
    pointsFor: '625',
    pointsAgainst: '414',
    pointsDiff: '211',
    triesFor: '72',
    triesAgainst: '43',
    triesBonusPoints: '9',
    losingBonusPoints: '2',
    totalBonusPoints: '11',
    points: '75'
  },
  {
    displayName: 'Leicester Tigers',
    teamId: '1250',
    position: '3',
    played: '22',
    won: '15',
    drawn: '1',
    lost: '6',
    pointsFor: '453',
    pointsAgainst: '421',
    pointsDiff: '32',
    triesFor: '37',
    triesAgainst: '39',
    triesBonusPoints: '4',
    losingBonusPoints: '2',
    totalBonusPoints: '6',
    points: '68'
  }
]

const rows = teams.map(team => {
  const highlighted = team.teamId === homeTeamId
  const data = [
    team.position,
    <ShrinkWrap>
      <ShrinkWrap.Item>
        <span role="img" aria-label="Rocket">
          🚀
        </span>
      </ShrinkWrap.Item>
      <ShrinkWrap.Item>{team.displayName}</ShrinkWrap.Item>
    </ShrinkWrap>,
    team.played,
    team.won,
    team.drawn,
    team.lost,
    team.pointsFor,
    team.pointsAgainst,
    team.pointsDiff,
    team.triesFor,
    team.triesAgainst,
    team.triesBonusPoints,
    team.losingBonusPoints,
    team.totalBonusPoints,
    team.points
  ]
  return { data, highlighted }
})

export { cols, rows }
