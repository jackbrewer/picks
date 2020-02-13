import React from 'react'
import { shape, string } from 'prop-types'
import fetch from 'isomorphic-unfetch'

import Container from '@/component/Primitive/Container'
import SpacedList from '@/component/Primitive/SpacedList'
import Type from '@/component/Primitive/Type'

import List from '@/component/Primitive/List'

const movieShape = shape({ name: string })

const MoviesPage = ({ movies }) => (
  <Container size="medium" gutter center>
    <SpacedList>
      <Type element="h2" size="display1">
        Movies Page
      </Type>
      <List>
        {movies.map(movie => (
          <li key={movie.name}>{movie.name}</li>
        ))}
      </List>
    </SpacedList>
  </Container>
)

MoviesPage.propTypes = {
  movies: movieShape
}

MoviesPage.getInitialProps = async () => {
  const response = await fetch('http://localhost:3000/api/movies')
  if (response.status === 200) {
    return { movies: await response.json() }
  }
  return { movies: [] }
}

export default MoviesPage
