import React from 'react'

const UserInput = ({ defaultValue, handleInput }) => {
  return (
    <div>
      <h2>How many Pokemons are you looking for?</h2>
      <form className="userInputForm">
        <input
          className="userInput"
          onChange={handleInput}
          type="number"
          placeholder={defaultValue}
        />
      </form>
    </div>
  )
}

export default UserInput
