import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  font-size: ${props => props.fontSize || '1em'};
  margin: ${props => props.margin || '1em'};
  padding: ${props => props.padding || '0.25em 1em'};
  border-radius: ${props => props.borderRadius || '3px'};
  border: ${props => props.border || 'none'};
  background-color: ${props => props.backgroundColor || '#4286f4'};
  color: ${props => props.textColor || '#fff'};
  height: ${props => props.height || '50px'};
  width: ${props => props.width || '100px'};
  text-transform: ${props => props.lowercase || 'uppercase'};

  :focus {
    outline: none;
  }
`

const Button = props => {
  return (
    <StyledButton data-testid="button-component" {...props}>
      {props.name || 'submit'}
    </StyledButton>
  )
}

Button.propTypes = {
  name: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  borderRadius: PropTypes.string,
  border: PropTypes.string,
  onClick: PropTypes.func,
  padding: PropTypes.string,
}

export default Button
