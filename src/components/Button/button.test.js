import React from 'react'
import Button from './'
import { render, fireEvent } from '@testing-library/react'

describe('<Button />', () => {
  it('should render without errors', () => {
    const { getByTestId } = render(<Button />)
    expect(getByTestId('button-component')).toBeTruthy()
  })

  describe('prop.name', () => {
    it('should render `SUBMIT` when supplied no name', () => {
      const { container } = render(<Button />)
      expect(container.firstChild.textContent).toBe('submit')
    })
    it('should render the correct name when a name is entered', () => {
      const { container } = render(<Button name={'TEST'} />)
      expect(container.firstChild.textContent).toBe('TEST')
    })
  })

  it('should call any entered onClick function', () => {
    const mockedCallBack = jest.fn()
    const { container } = render(<Button onClick={mockedCallBack} />)
    expect(mockedCallBack.mock.calls.length).toBe(0)
    fireEvent.click(container.querySelector('button'))
    expect(mockedCallBack.mock.calls.length).toBe(1)
    fireEvent.click(container.querySelector('button'))
    expect(mockedCallBack.mock.calls.length).toBe(2)
  })
})
