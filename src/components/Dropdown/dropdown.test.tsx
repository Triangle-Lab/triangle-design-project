import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Dropdown from './dropdown'

const defaultProps = {
  droplist: [
        <div key="1">1</div>,
        <div key="2">2</div>,
        <div key="3">3</div>
  ],
  children: <div>dropdown</div>
}

describe('test Dropdown component', () => {
  it('should render the correct default Dropdown', () => {
    const wrapper = render(<Dropdown {...defaultProps} />)
    const element = wrapper.container.querySelector('.dropdown') as HTMLElement
    expect(element).toBeInTheDocument()
    expect(element.querySelector('.dropdown-child')).toBeInTheDocument()
    expect(element.querySelector('.dropdown-menu')).toBeFalsy()
    const childElement = element.querySelector('.dropdown-child') as HTMLElement
    fireEvent.click(childElement)
    expect(element.querySelector('.dropdown-menu')).toBeInTheDocument()
    const menuElement = element.querySelector('.dropdown-menu') as HTMLElement
    fireEvent.mouseLeave(menuElement)
    expect(element.querySelector('.dropdown-menu')).toBeFalsy()
  })
})
