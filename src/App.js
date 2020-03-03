import React from 'react'
// import Flex from './components/Flex'
// import Button from './components/Button'
// import TextInput from './components/TextInput'
import AnimatedCounter from './components/Animated_Counter'

function App() {
  const [state, setState] = React.useState('')
  const topics = [{ icon: '', amount: 12000, title: 'Subscribers' }]
  return (
    <>
      {/* <Flex container alignItems="center" padding="20px">
        <Button boxShadow />
        <TextInput
          fontSize="44px"
          width="1000px"
          text={state}
          setText={setState}
        />
      </Flex>
      <p>{state}</p> */}
      <AnimatedCounter topics={topics} />
    </>
  )
}

export default App
