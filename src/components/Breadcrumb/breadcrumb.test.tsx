import React from 'react'
import { render } from '@testing-library/react'
import Breadcrumb, { BreadcrumbProps } from './breadcrumb'

const testProps: BreadcrumbProps = {
  objects: [
    { link: 'http://baidu.com', text: 'baidu' },
    { link: 'http://google.com', text: 'google' }
  ],
  target: '_blank',
  id: 'test-breadcrumb'
}

const testProps2: BreadcrumbProps = {
  objects: [
    { link: 'http://baidu.com', text: 'baidu' },
    { link: 'http://google.com', text: 'google' }
  ],
  target: '_self',
  id: 'test-breadcrumb'
}

const testProps3: BreadcrumbProps = {
  objects: [
    { link: 'http://baidu.com', text: 'baidu' },
    { link: 'http://google.com', text: 'google' }
  ],
  id: 'test-breadcrumb'
}

describe('test Breadcrumb component', () => {
  it('should render the correct default Breadcrumb', () => {
    const wrapper = render(<Breadcrumb {...testProps} />)
    const element = wrapper.container.querySelector('#test-breadcrumb') as HTMLElement
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('breadcrumb')
    expect(element.getElementsByTagName('a').length).toEqual(2)
    expect(element.getElementsByTagName('a')[0]).toHaveAttribute('target', '_blank')
    expect(element.getElementsByTagName('a')[1]).toHaveAttribute('target', '_blank')
  })
  it('should render the correct Breadcrumb based on different props', () => {
    const wrapper = render(<Breadcrumb {...testProps2} />)
    const element = wrapper.container.querySelector('#test-breadcrumb') as HTMLElement
    expect(element.getElementsByTagName('a')[0]).toHaveAttribute('target', '_self')
    expect(element.getElementsByTagName('a')[1]).toHaveAttribute('target', '_self')
  })
  it('should render the correct Breadcrumb based on different props', () => {
    const wrapper = render(<Breadcrumb {...testProps3} />)
    const element = wrapper.container.querySelector('#test-breadcrumb') as HTMLElement
    expect(element.getElementsByTagName('a')[0]).toHaveAttribute('target', '_self')
    expect(element.getElementsByTagName('a')[1]).toHaveAttribute('target', '_self')
  })
})
