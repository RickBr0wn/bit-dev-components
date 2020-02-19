import React from 'react'
import Flex from './'
import { render } from '@testing-library/react'

describe('<Flex />', () => {
  it('should render without errors', () => {
    const { getByTestId, getByText, container } = render(
      <Flex>
        <h1>TEST</h1>
      </Flex>
    )
    expect(getByTestId('flex-component')).toBeTruthy()
  })
})
