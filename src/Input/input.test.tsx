import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Input, { type InputProps } from '.'
import '@testing-library/jest-dom'

const defaultProps: InputProps = {
  onChange: jest.fn(),
  placeholder: 'test-input'
}
describe('test Input component', () => {
  it('should render the correct default Input', () => {
    const wrapper = render(<Input {...defaultProps} />)
    const testNode = wrapper.getByPlaceholderText('test-input') as HTMLInputElement
    expect(testNode).toBeInTheDocument()
    expect(testNode).toHaveClass('input-inner')
    fireEvent.change(testNode, { target: { value: '23' } })
    expect(defaultProps.onChange).toHaveBeenCalled()
    expect(testNode.value).toEqual('23')
  })
  it('should render the disabled Input on disabled property', () => {
    const wrapper = render(<Input disabled={true} placeholder="disabled" />)
    const testNode = wrapper.getByPlaceholderText('disabled') as HTMLInputElement
    expect(testNode.disabled).toBeTruthy()
  })
  it('should render different input sizes on size property', () => {
    const wrapper = render(<Input placeholder="sizes" size="lg" />)
    const testContainer = screen.getByTestId('input-wrapper')
    expect(testContainer).toHaveClass('input-size-lg')
  })
  it('should render prepend and append element on prepend/append property', () => {

  })
})
