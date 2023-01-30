import React from 'react'
import Avatar, { AvatarProps, AvatarSize, AvatarType } from './avatar'
import { render } from '@testing-library/react'

const testProps: AvatarProps = {
  avatarType: AvatarType.Primary,
  size: AvatarSize.Large,
  text: 'test',
  className: 'klass'
}

const avatarWithSrcProps: AvatarProps = {
  src: 'https://avatars.githubusercontent.com/u/122715946?s=200&v=4',
  alt: 'avatar'
}

describe('test Avatar component', () => {
  it('should render the correct default avatar', () => {
    const wrapper = render(<Avatar {...testProps} />)
    const element = wrapper.getByText('test')
    const elementParent = element.parentElement as HTMLDivElement
    expect(elementParent).toBeInTheDocument()
    expect(elementParent.tagName).toEqual('DIV')
    expect(elementParent).toHaveClass('avatar avatar-lg avatar-primary klass')
  })
  it('should render the correct avatar with src', () => {
    const wrapper = render(<Avatar {...avatarWithSrcProps} />)
    const element = wrapper.getByAltText('avatar')
    const elementParent = element.parentElement as HTMLDivElement
    expect(elementParent).toBeInTheDocument()
    expect(elementParent.tagName).toEqual('DIV')
    expect(elementParent).toHaveClass('avatar')
  })
  it('should render the correct avatar with circle', () => {
    const wrapper = render(<Avatar {...avatarWithSrcProps} circle />)
    const element = wrapper.getByAltText('avatar')
    const elementParent = element.parentElement as HTMLDivElement
    expect(elementParent).toBeInTheDocument()
    expect(elementParent.tagName).toEqual('DIV')
    expect(elementParent).toHaveClass('avatar avatar-circle')
  })
})
