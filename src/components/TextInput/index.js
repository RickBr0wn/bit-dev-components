import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledTextInput = styled.input`
  font-size: 15px;
  margin: 5px;
  font-family: inherit;
  color: inherit;
  padding: 12px 18px;
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0.3);
  border: none;
  border-bottom: 3px solid transparent;
  height: 40px;
  width: ${props => props.inputWidth || '300px'};
  display: border-box;
  transition: all 0.3s;
  &:focus {
    outline: none;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    border-bottom: 3px solid #4286f4;
    border-color: ${props => props.inputColor || '#4286f4'};
    &::-webkit-input-placeholder {
      opacity: 0.3;
    }
  }
  &::-webkit-input-placeholder {
    color: #999;
  }
  &:focus:invalid {
    border-bottom: 3px solid #ff7730;
  }
`

const TextInput = props => {
  const { type, placeholder } = props
  return (
    <div>
      <StyledTextInput
        data-testid="text-input-component"
        className="form__input"
        type={type || 'text'}
        placeholder={placeholder || 'text_field'}
        {...props}
      />
    </div>
  )
}

TextInput.propTypes = {
  inputColor: PropTypes.string,
  inputWidth: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
}

export default TextInput
