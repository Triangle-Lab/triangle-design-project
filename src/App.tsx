import React from 'react'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
import Alert, { AlertType } from './components/Alert/alert'
import Button, { ButtonSize, ButtonType } from './components/Button/button'
import Drawer, { DrawerPosition } from './components/Drawer/drawer'

import Dropdown from './components/Dropdown/dropdown'
// import Calendar from './components/Calendar/calendar'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Icon from './components/Icon/icon'
import Transition from './components/Transition/transition'

function App (): JSX.Element {
  const [show, setShow] = React.useState(false)
  return (
    <div className="App" style={{ margin: '10px' }}>
      <Icon icon="arrow-down" theme="warning" size="10x"/>
      <Menu defaultIndex={'0'} onSelect = { (index) => { alert(index) } } mode = 'horizontal' defaultOpenSubmenus = {['2']}>
        <MenuItem>
        cool link 1
        </MenuItem>
        <MenuItem disabled>
        cool link 2
        </MenuItem>
        <SubMenu title='dropdown'>
          <MenuItem>
          dropdown1
          </MenuItem>
          <MenuItem>
          dropdown2
          </MenuItem>
        </SubMenu>
        <MenuItem>
        cool link 3
        </MenuItem>
      </Menu>

      <Button size = {ButtonSize.Large} onClick = {() => { setShow(!show) }} > Toggle </Button>
      <Transition
        in={show}
        timeout={300}
        animation="zoom-in-left"
      >
      <div>
      <p>
        Edit <code> src/App.tsx </code>
      </p>
      <p>
        Edit <code> src/App.tsx </code>
      </p>
      <p>
        Edit <code> src/App.tsx </code>
      </p>
      </div>
      </Transition>

      <Button>Hello</Button>
      <Button disabled>Hello</Button>
      <Button btnType={ButtonType.Primary} style={{ margin: '10px' }} size={ButtonSize.Large}>快速开始</Button>
      <Button btnType={ButtonType.Success}>开始</Button>
      <Button btnType={ButtonType.Secondary} size={ButtonSize.Small}>快速开始</Button>
      <Button btnType={ButtonType.Success} size={ButtonSize.Large}>Hello</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Hello</Button>
      <Button btnType={ButtonType.Outline}>outline</Button>
      <Button btnType={ButtonType.Default} style={{ fontWeight: '1000' }}>尝试</Button>
      <Button btnType={ButtonType.Link} href="http://www.bing.com">Baidu Link</Button>
      <Button btnType={ButtonType.Link} href="http://www.bing.com" disabled>Baidu Link</Button>
      <Alert title="成功警告" description="这是一条成功警告" position={'left'} alertType={AlertType.Success} />
      <Drawer title="抽屉" isShow={show} onClose={() => { setShow(false) }} position={DrawerPosition.Left} width={300} close={false} mask={true} maskClosable={true}>
        <div>抽屉内容</div>
      </Drawer>
      <Dropdown droplist={[<div key="1">option1</div>, <div key="2">option2</div>, <div key="3">option3</div>]}>
        <Button btnType={ButtonType.Primary}>开始</Button>
      </Dropdown>
      {/* <Calendar
        defaultValue='2020-04-01'
        style={{ marginTop: '50px' }}
        onChange={(date) => { console.log(date) }}
      /> */}
    </div>
  )
}

export default App
