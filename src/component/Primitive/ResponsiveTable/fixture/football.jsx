import React from 'react'

import ShrinkWrap from '../../ShrinkWrap'

const cols = [
  { title: 'Position', abbr: 'Pos', hideTitle: true },
  { title: 'Team' },
  { title: 'Played', hideUntil: 420 },
  { title: 'Won', hideUntil: 600 },
  { title: 'Drawn', hideUntil: 600 },
  { title: 'Lost', hideUntil: 600 },
  { title: 'Goals for', abbr: 'For', hideUntil: 800 },
  { title: 'Gaols against', abbr: 'Against', hideUntil: 800 },
  { title: 'Goal difference', abbr: 'GD', hideUntil: 880 },
  { title: 'Points' },
  { title: 'Form', hideUntil: 1000 }
]

const teams = [
  {
    club: 'Manchester City',
    played: 27,
    won: 21,
    drawn: 2,
    lost: 4,
    for: 74,
    against: 20,
    goalDifference: 54,
    points: 66,
    form: 'WLWWW'
  },
  {
    club: 'Liverpool',
    played: 26,
    won: 20,
    drawn: 5,
    lost: 1,
    for: 59,
    against: 15,
    goalDifference: 44,
    points: 65,
    form: 'WWDDW'
  },
  {
    club: 'Tottenham Hospur',
    played: 26,
    won: 20,
    drawn: 0,
    lost: 6,
    for: 54,
    against: 25,
    goalDifference: 29,
    points: 60,
    form: 'LWWWW'
  },
  {
    club: 'Manchester United',
    played: 26,
    won: 15,
    drawn: 6,
    lost: 5,
    for: 52,
    against: 35,
    goalDifference: 17,
    points: 51,
    form: 'WWDWW'
  },
  {
    club: 'Arsenal',
    played: 26,
    won: 15,
    drawn: 5,
    lost: 6,
    for: 53,
    against: 37,
    goalDifference: 16,
    points: 50,
    form: 'LLWLW'
  },
  {
    club: 'Chelsea',
    played: 26,
    won: 15,
    drawn: 5,
    lost: 6,
    for: 45,
    against: 29,
    goalDifference: 16,
    points: 50,
    form: 'WLLWL'
  }
]

const rows = teams.map((team, i) => {
  const position = i + 1
  const separatorBelow = [4, 5, 7].includes(position)
  const data = [
    position,
    team.club,
    team.played,
    team.won,
    team.drawn,
    team.lost,
    team.for,
    team.against,
    team.goalDifference,
    team.points,
    team.form
  ]
  return { data, separatorBelow }
})

export { cols, rows }
