import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Counter from './counter'

const StyledContainer = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  text-align: center;
  max-width: 1100px;
  margin: 0 auto;
  overflow: auto;

  @media (max-width: 700px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }

    & > div:nth-of-type(1),
    & > div:nth-of-type(2) {
      border-bottom: 1px
        ${({ secondaryColor }) => secondaryColor || 'lightskyblue'} solid;
      padding-bottom: 20px;
    }
  }
`

const StyledCounter = styled.section`
  background: ${({ primaryColor }) => primaryColor || '#0f479a'};
  color: ${({ secondaryColor }) => secondaryColor || 'lightskyblue'};
  padding: 40px 20px;
  border-top: 3px ${({ secondaryColor }) => secondaryColor || 'lightskyblue'}
    solid;
  border-bottom: 3px ${({ secondaryColor }) => secondaryColor || 'lightskyblue'}
    solid;
`

const StyledTitle = styled.h1`
  text-align: center;
  margin-bottom: 6vh;
  font-size: 48px;

  @media (max-width: 700px) {
    font-size: 32px;
  }
`

function AnimatedCounter({
  topics,
  icon,
  title,
  primaryColor,
  secondaryColor,
}) {
  if (topics.length > 4) {
    console.warn(
      'This animated counter is best viewed with 1-4 topics.\nIf more are required, please duplicate the component and use 2 rows.'
    )
  }
  return (
    <StyledCounter primaryColor={primaryColor} secondaryColor={secondaryColor}>
      {title && <StyledTitle>{title}</StyledTitle>}
      <StyledContainer columns={topics.length} secondaryColor={secondaryColor}>
        {topics.map(({ icon, title, amount }) => (
          <div key={icon + Math.random()}>
            <Counter
              icon={icon}
              title={title}
              amount={amount}
              secondaryColor={secondaryColor}
            />
          </div>
        ))}
      </StyledContainer>
    </StyledCounter>
  )
}

AnimatedCounter.propTypes = {
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ),
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  title: PropTypes.string,
}

export default AnimatedCounter
