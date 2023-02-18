import React from 'react'
import { render } from '@testing-library/react'
import Divider, { DividerStyle } from '.'
import '@testing-library/jest-dom'

describe('test Divider component', () => {
  it('should render the correct default divider', () => {
    const wrapper = render(<Divider id="test-divider" />)
    const element = wrapper.container.querySelector('#test-divider') as HTMLElement
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('divider-default')
  })
  it('should render the correct component based on different props', () => {
    const wrapper = render(<Divider style={DividerStyle.Primary} text='hello' id="test-divider" />)
    const element = wrapper.container.querySelector('#test-divider') as HTMLElement
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('divider-primary')
    expect(element.querySelector('.divider-text')).toHaveTextContent('hello')
  })
})
