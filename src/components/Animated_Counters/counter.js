import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useInterval } from '@rickbrown/use-interval'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledIcon = styled.i`
  margin-bottom: 5px;
`

const StyledData = styled.div`
  font-size: 45px;
  margin: 10px 0;
`

function Counter({ icon, title, amount, secondaryColor, speed = 200 }) {
  const [data, setData] = useState(0)

  const updater = function() {
    data < amount
      ? setData(prev => prev + Math.floor(amount / speed))
      : setData(amount)
  }

  // https://overreacted.io/making-setinterval-declarative-with-react-hooks/
  useInterval(updater, 10)

  if (!icon) {
    throw new Error(
      'There has been an error!\nAn icon string is required: (eg: `fab fa-youtube-square fa-4x`)'
    )
  }

  if (!title) {
    throw new Error('There has been an error!\nA title string is required.')
  }

  if (!amount) {
    throw new Error('There has been an error!\nAn amount number is required.')
  }

  return (
    <>
      <StyledIcon style={{ color: secondaryColor }} className={icon + ' fa-4x'}>
        <FontAwesomeIcon icon={icon} />
      </StyledIcon>
      <StyledData>{data}</StyledData>
      <h3>{title}</h3>
    </>
  )
}

Counter.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  speed: PropTypes.number,
}

export default Counter
