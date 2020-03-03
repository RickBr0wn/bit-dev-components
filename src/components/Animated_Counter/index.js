import React, { useState, useEffect, useRef } from 'react'
import './animatedCounter.css'

function useInterval(callback, delay) {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

const AnimatedCounter = ({ icon, title, amount, incrementor = 200 }) => {
  const [data, setData] = useState(0)
  console.log(icon)

  const updater = function() {
    if (data < amount) {
      setData(prev => prev + Math.floor(amount / incrementor))
    } else {
      setData(amount)
      return
    }
  }

  useInterval(updater, 10)

  if (!icon) {
    throw new Error(
      'There has been an error!\nAn icon string is required: (eg: `fab fa-youtube-square fa-4x`)'
    )
  }

  if (!title) {
    throw new Error('There has been an error!\nA title string is required.')
  }

  return (
    <div>
      <i className={icon} />
      <div className="counter">{data}</div>
      <h3>{title}</h3>
    </div>
  )
}

const AnimatedCounterRow = topics => {
  return (
    <>
      <header>
        <div className="container">
          <h1>Animated Counter</h1>
        </div>
      </header>
      <section className="counters">
        <div className="container">
          <AnimatedCounter
            icon={'fab fa-youtube-square fa-4x'}
            title={'Subscribers'}
            amount={14000}
          />
          <AnimatedCounter
            icon={'fab fa-twitter-square fa-4x'}
            title={'Twitter'}
            amount={5000}
          />
          <AnimatedCounter
            icon={'fab fa-facebook-square fa-4x'}
            title={'Facebook'}
            amount={50000}
          />
          <AnimatedCounter
            icon={'fab fa-linkedin fa-4x'}
            title={'Linkedin'}
            amount={4000}
          />
        </div>
      </section>
    </>
  )
}

export default AnimatedCounterRow
