import React from 'react'
import TextInput from './'
import { render, fireEvent } from '@testing-library/react'

describe('<TextInput />', () => {
  it('should render without errors', () => {
    const { getByTestId } = render(<TextInput />)
    expect(getByTestId('text-input-component'))
  })
})
