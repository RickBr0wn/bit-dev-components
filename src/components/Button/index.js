import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  font-size: ${({ fontSize }) => fontSize || '15px'};
  margin: ${({ margin }) => margin || '0px'};
  margin-top: ${({ marginTop }) => marginTop || '0px'};
  margin-bottom: ${({ marginBottom }) => marginBottom || '0px'};
  margin-right: ${({ marginRight }) => marginRight || '0px'};
  margin-left: ${({ marginLeft }) => marginLeft || '0px'};
  padding: ${({ padding }) => padding || '0px'};
  border-radius: ${({ borderRadius }) => borderRadius || '3px'};
  border: ${({ border }) => border || 'none'};
  background-color: ${({ backgroundColor }) => backgroundColor || '#4286f4'};
  color: ${({ textColor }) => textColor || '#fff'};
  height: ${({ height }) => height || '40px'};
  width: ${({ width }) => width || '100px'};
  text-transform: ${({ lowercase }) => lowercase || 'uppercase'};
  box-shadow: ${({ boxShadow }) =>
    boxShadow ? '0 10px 20px rgba(0, 0, 0, 0.2)' : null};
  transition: all 0.2s;

  :focus {
    outline: none;
  }

  :active {
    box-shadow: 0px 0px 0px transparent;
    transform: ${({ boxShadow }) => (boxShadow ? 'translateY(1px)' : null)};
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
  boxShadow: PropTypes.bool,
  margin: PropTypes.string,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  marginTop: PropTypes.string,
}

export default Button
