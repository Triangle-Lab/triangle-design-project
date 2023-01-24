import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonProps, ButtonSize, ButtonType } from './button'

const defaultProps = {
  onClick: jest.fn() // mock function, we can check if the function is called
}

const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: 'klass'
}

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn()
}

describe('test Button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>) // render the component
    const element = wrapper.getByText('Nice') as HTMLButtonElement // find the element
    expect(element).toBeInTheDocument() // check if the element is in the document
    expect(element.tagName).toEqual('BUTTON') // check if the element is a button
    expect(element).toHaveClass('btn btn-default') // check if the element has the correct class
    fireEvent.click(element) // simulate click event
    expect(defaultProps.onClick).toHaveBeenCalled() // check if the function is called
    expect(element.disabled).toBeFalsy() // check if the element is disabled, should be false
  })
  it('should render the correct compoent based on different props', () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>) // render the component
    const element = wrapper.getByText('Nice') // find the element
    expect(element).toBeInTheDocument() // check if the element is in the document
    expect(element).toHaveClass('btn-primary btn-lg klass') // check if the element has the correct class
  })
  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(<Button btnType={ButtonType.Link} href="http://baidu.com">Link</Button>) // render the component
    const element = wrapper.getByText('Link') // find the element
    expect(element).toBeInTheDocument() // check if the element is in the document
    expect(element.tagName).toEqual('A') // check if the element is a "a"
    expect(element).toHaveClass('btn btn-link') // check if the element has the correct class
  })
  it('should render disabled button when disabled set to true', () => {
    const wrapper = render(<Button {...disabledProps}>Disabled</Button>) // render the component
    const element = wrapper.getByText('Disabled') as HTMLButtonElement // find the element, and cast to HTMLButtonElement
    expect(element).toBeInTheDocument() // check if the element is in the document
    expect(element.disabled).toBeTruthy() // check if the element is disabled
    fireEvent.click(element) // simulate click event
    expect(defaultProps.onClick).not.toHaveBeenCalled() // check if the function is called, should not be called
  })
})
