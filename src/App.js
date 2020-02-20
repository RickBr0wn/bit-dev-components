import React from 'react'
import Flex from './components/Flex'
import Button from './components/Button'
import TextInput from './components/TextInput'

function App() {
  const [state, setState] = React.useState('')
  return (
    <>
      <Flex container alignItems="center" padding="20px">
        <Button boxShadow />
        <TextInput
          fontSize="44px"
          width="1000px"
          text={state}
          setText={setState}
        />
      </Flex>
      <p>{state}</p>
    </>
  )
}

export default App
