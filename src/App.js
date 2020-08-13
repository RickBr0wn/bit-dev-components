import React, { useState } from 'react'
import Flex from './components/Flex'
import Button from './components/Button'
import TextInput from './components/TextInput'
import Waves from './components/Waves'
// import AnimatedCounters from './components/Animated_Counters'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import {
//   faCoffee,
//   faInsta,
//   faFacebook,
//   faTwitter,
//   faYoutube,
// } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [state, setState] = useState('')

  return (
    <>
      <Waves />
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
      {/* // https://fontawesome.com/icons?d=gallery */}
      {/* <AnimatedCounters
        // title={'Animated Counter Component'}
        topics={[
          {
            icon: faInsta,
            amount: 52000,
            title: 'YouTube',
          },
          {
            icon: faYoutube,
            amount: 5000,
            title: 'Twitter',
          },
          {
            icon: faFacebook,
            amount: 50000,
            title: 'Facebook',
          },
          {
            icon: faTwitter,
            amount: 4000,
            title: 'Linkedin',
          },
        ]}
      /> */}
    </>
  )
}

export default App
