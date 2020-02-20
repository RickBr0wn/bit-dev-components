import React from 'react'
import Flex from './components/Flex'
import Button from './components/Button'
import TextInput from './components/TextInput'

function App() {
  return (
    <Flex container alignItems="center" padding="20px">
      <Button boxShadow />
      <TextInput fontSize="44px" width="1000px" />
    </Flex>
  )
}

export default App
