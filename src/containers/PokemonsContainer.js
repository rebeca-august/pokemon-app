import React from 'react'
import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import Pokemon from '../components/Pokemon'
import { GET_POKEMONS } from '../graphql/get-pokemons'
import UserInput from '../components/UserInput'

const DEFAULT_VALUE = 9

export const PokemonsContainer = () => {
  const [input, setInput] = useState(DEFAULT_VALUE)

  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: input },
  })

  const handleInput = (e) => {
    e.preventDefault()
    const input = e.target.value

    if (input <= 0) {
      setInput(DEFAULT_VALUE)
    }

    setInput(input)
  }

  return (
    <>
      <div className="container">
        <UserInput handleInput={handleInput} defaultValue={DEFAULT_VALUE} />
        {pokemons &&
          pokemons.map((pokemon) => (
            <Pokemon key={pokemon.id} pokemon={pokemon} />
          ))}
      </div>
    </>
  )
}
