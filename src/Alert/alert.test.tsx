import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Alert, { type AlertProps, AlertType } from './index'
import '@testing-library/jest-dom'

const testProps: AlertProps = {
  title: 'test-title',
  description: 'test-description',
  alertType: AlertType.Success,
  className: 'test-class'
}

const testCloseProps: AlertProps = {
  title: 'test-title',
  description: 'test-description',
  alertType: AlertType.Success,
  closeable: true,
  className: 'test-class',
  onClose: jest.fn()
}

const differentPositionProps: AlertProps = {
  title: 'test-title',
  description: 'test-description',
  alertType: AlertType.Success,
  closeable: true,
  position: 'right'
}

describe('test Alert component', () => {
  it('should render the correct default alert', () => {
    const wrapper = render(<Alert {...testProps} />)
    const element = wrapper.getByText('test-title')
    const elementParent = element.parentElement as HTMLDivElement
    expect(elementParent).toBeInTheDocument()
    expect(elementParent.tagName).toEqual('DIV')
    expect(elementParent).toHaveClass('alert alert-success test-class')
  })
  it('should render the correct component based on different props', () => {
    const wrapper = render(<Alert {...testCloseProps} />)
    const element = wrapper.getByText('test-title')
    const elementParent = element.parentElement as HTMLDivElement
    expect(elementParent).toBeInTheDocument()
    expect(elementParent.tagName).toEqual('DIV')
    expect(elementParent).toHaveClass('alert alert-success test-class')
    const close = wrapper.getByText('x')
    fireEvent.click(close)
    expect(testCloseProps.onClose).toHaveBeenCalled()
  })
  it('should render the correct component based on different position props', () => {
    const wrapper = render(<Alert {...differentPositionProps} />)
    const element = wrapper.getByText('test-title')
    const elementParent = element.parentElement as HTMLDivElement
    expect(elementParent).toBeInTheDocument()
    expect(elementParent.tagName).toEqual('DIV')
    expect(elementParent).toHaveClass('alert alert-success alert-right')
  })
})
