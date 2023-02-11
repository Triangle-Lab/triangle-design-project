import React from 'react'
import { fireEvent, render, type RenderResult, cleanup } from '@testing-library/react'
import Menu, { type MenuProps } from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu'
import '@testing-library/jest-dom'
// import { wait } from '@testing-library/user-event/dist/utils'

const testProps: MenuProps = {
  defaultIndex: '0',
  onSelect: jest.fn(),
  className: 'test'
}
const testVerProps: MenuProps = {
  defaultIndex: '0',
  mode: 'vertical'
}
const generateMenu = (props: MenuProps): JSX.Element => {
  return (
        <Menu { ...props}>
            <MenuItem>
            active
            </MenuItem>
            <MenuItem>
            disabled
            </MenuItem>
            <MenuItem>
            xyz
            </MenuItem>
            <SubMenu title="dropdown">
            <MenuItem>
            drop1
            </MenuItem>
            <MenuItem>
            drop2
            </MenuItem>
            </SubMenu>
        </Menu>

  )
}
const createStyleFile = (): any => {
  const cssFile: string = `
    .viking-submenu {
      display: none;
    }
    .viking-submenu.menu-opened{
      display: block;
    }
    `
  const style = document.createElement('style')
  style.type = 'text/css'
  style.innerHTML = cssFile
  return style
}
let wrapper: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement
describe('test Menu and MenuItem component', () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps))
    wrapper.container.append(createStyleFile())
    menuElement = wrapper.getByTestId('test-menu')
    activeElement = wrapper.getByText('active')
    disabledElement = wrapper.getByText('disabled')
  })
  it('should render correct Menu and MenuItem based on default props', () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('viking-menu test')
    // expect(menuElement.getElementsByTagName('li').length).toEqual(3)
    expect(menuElement.querySelectorAll(':scope > li').length).toEqual(4)
    expect(activeElement).toHaveClass('menu-item is-active')
    // expect(disabledElement).toHaveClass('menu-item is-disabled')
  })
  it('click items should change active and call the right callback', () => {
    const thirdItem = wrapper.getByText('xyz')
    fireEvent.click(thirdItem)
    expect(thirdItem).toHaveClass('is-active')
    expect(activeElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).toHaveBeenCalledWith('2')
    fireEvent.click(disabledElement)
    // expect(disabledElement).not.toHaveClass('is-active')
    // expect(testProps.onSelect).not.toHaveBeenCalledWith('1')
  })
  it('should render vertical mode when mode is set to vertical', () => {
    cleanup()
    const wrapper = render(generateMenu(testVerProps))
    const menuElement = wrapper.getByTestId('test-menu')
    expect(menuElement).toHaveClass('menu-vertical')
  })
  it('shold show dropdown item when hover on subMenu', async () => {
    expect(wrapper.queryByText('drop1')).not.toBeVisible()
    const dropdownElement = wrapper.getByText('dropdown')
    fireEvent.mouseEnter(dropdownElement)
    // await wait(() => {
    //   expect(wrapper.queryByText('drop1')).toBeVisible()
    // })
    fireEvent.click(wrapper.getByText('drop1'))
    expect(testProps.onSelect).toHaveBeenCalledWith('3-0')
    fireEvent.mouseLeave(dropdownElement)
    // await wait(() => {
    //   expect(wrapper.queryByText('drop1')).not.toBeVisible()
    // })
  })
})
