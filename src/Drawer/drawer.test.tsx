import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Drawer, { DrawerPosition } from '.'
import '@testing-library/jest-dom'

const defaultProps = {
  position: DrawerPosition.Left,
  width: 300,
  close: true,
  mask: true,
  maskClosable: true,
  isShow: true
}

const testProps: any = {
  position: DrawerPosition.Right,
  width: 500,
  close: false,
  mask: false,
  maskClosable: false,
  isShow: true
}

const functionProps = {
  onClose: jest.fn()
}

describe('test Drawer component', () => {
  it('should render the correct default Drawer', () => {
    const wrapper = render(<Drawer {...defaultProps} />)
    const element = wrapper.container.querySelector('#drawer') as HTMLElement
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('drawer drawer-left')
  })
  it('should render the correct component based on different props', () => {
    const wrapper = render(<Drawer {...testProps} />)
    const element = wrapper.container.querySelector('#drawer') as HTMLElement
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('drawer drawer-right')
    expect(element).toHaveStyle('width: 500px')
    expect(element.querySelector('.drawer-close')).toBeFalsy()
    const elementMask = wrapper.container.querySelector('#drawer-mask') as HTMLElement
    expect(elementMask).toBeFalsy()
  })
  it('should render the correct component with function props', () => {
    const wrapper = render(<Drawer {...functionProps} />)
    const element = wrapper.container.querySelector('#drawer') as HTMLElement
    expect(element).toBeInTheDocument()
    expect(element.querySelector('.drawer-close')).toBeTruthy()
    const elementMask = wrapper.container.querySelector('#drawer-mask') as HTMLElement
    expect(elementMask).toBeTruthy()
    const closeElement = element.querySelector('.drawer-close') as HTMLElement
    fireEvent.click(closeElement)
    expect(functionProps.onClose).toHaveBeenCalled()
  })
})
