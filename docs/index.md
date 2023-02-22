---
hero:
  title: triangle-ui
  description: 美观且易用的 React 组件库
  actions:
    - text: 快速上手
      link: /components/Alert
---

<iframe src="https://stackblitz.com/edit/react-ts-ifnnmy?embed=1&file=App.tsx" style="width: 100%; height: 600px; border: 0; border-radius: 4px; overflow: hidden;" title="triangle-ui-react"></iframe>

<!-- ```jsx
import React, { useState, useEffect } from 'react';
import { Alert, AlertType, Button, ButtonType } from 'triangle-ui-react';
import { Space, Direction, Side, SpaceingSize } from 'triangle-ui-react';
import { Avatar, AvatarType, AvatarSize } from 'triangle-ui-react';
import { DatePicker, selectedDateType } from 'triangle-ui-react';
import { Drawer, DrawerPosition } from 'triangle-ui-react';
import { Divider, DividerStyle } from 'triangle-ui-react';
import { Dropdown } from 'triangle-ui-react' 
import { Icon } from 'triangle-ui-react' 
import { TreeSelect } from 'triangle-ui-react';
import { Menu, MenuItem } from 'triangle-ui-react';
import { SubMenu } from 'triangle-ui-react';
import { Progress } from 'triangle-ui-react';

const data = [
  {
    value: 1,
    label: 'Welcome',
    unfold: true,
    children: [
      {
        value: 11,
        label: 'to',
        defaultSelected: true,
        unfold: true,
        children: [
          {
            value: 111,
            label: 'triangle-ui-react',
            defaultSelected: true,
          },
          {
            value: 112,
            label: 'Are',
          },
        ],
      },
      {
        value: 12,
        label: 'you',
      },
    ],
  },
  {
    value: 2,
    label: 'ready?',
  },
];

let start: boolean = false;

export default function App(): JSX.Element {
  const container = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  };

  const now = new Date()
  const [date, setDate] = useState<selectedDateType>({
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate()
  });

  const [left, setLeft] = React.useState(false);

  const [selected, setSelected] = useState('1');

  const handleSelect = (index) => {
    setSelected(index);
  };

  const [percent, setPercent] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const handleProgress = () => {
    start = true;
    setTimeout(() => {
      setPercent((prevPercent) => prevPercent + 10);
    }, 500);
  };

  useEffect(() => {
    if (start === false) {
      return;
    }
    if (percent === 100) {
      setPercent((prevPercent) => 0);
      return;
    } else {
      setTimeout(() => {
        setPercent((prevPercent) => prevPercent + 5);
      }, 500);
    }
  }, [percent]);

  if(!start && percent === 0)
    handleProgress();

  return (
    <div style={{overflowX: "auto", width:"100%"}}>
      <div style={container}>
        <Alert
          title="前方提示"
          description="前方进入 triangle-ui-react 的世界"
          alertType={AlertType.Success}
        />
        <Button style={{ marginLeft: '1rem', marginTop: '.1rem' }}>
          Hello
        </Button>
        <Button
          style={{ marginLeft: '1rem', marginTop: '.1rem' }}
          btnType={ButtonType.Primary}
        >
          @Triangle
        </Button>
        <Avatar
          style={{ marginLeft: '1rem' }}
          text="A"
          avatarType={AvatarType.Success}
          size={AvatarSize.Small}
        />
        <Avatar
          style={{ marginLeft: '1rem' }}
          text="B"
          avatarType={AvatarType.Primary}
        />
        <Avatar
          style={{ marginLeft: '1rem' }}
          text="C"
          avatarType={AvatarType.Secondary}
          size={AvatarSize.Large}
        />
        <Avatar
          style={{ marginLeft: '1rem' }}
          text="B"
          avatarType={AvatarType.Danger}
        />
        <Avatar
          style={{ marginLeft: '1rem' }}
          text="A"
          avatarType={AvatarType.Warning}
          size={AvatarSize.Small}
        />
      </div>
      <br />
      <Divider style={DividerStyle.Primary} text="Divider" />
      <br />
      <div style={container}>
        <DatePicker
          onChange={(date) => {
            setDate(date);
          }}
        />
        <Button
          btnType={ButtonType.Success}
          onClick={() => {
            setLeft(!left);
          }}
        >
          {left ? 'Close Your Drawer' : 'Open Your Drawer'}
        </Button>
        <Drawer
          title="欢迎"
          isShow={left}
          onClose={() => {
            setLeft(false);
          }}
          position={DrawerPosition.Left}
        >
          <div>triangle-ui-react</div>
        </Drawer>
        <Dropdown droplist={[<div key="1">Hello</div>, <div key="2">My</div>, <div key="3">Friend</div>]}>
            <Button btnType={ButtonType.Primary}>Dropdown!!!</Button>
        </Dropdown>
        <Icon
          style = { { marginRight: "1rem" } }
          icon = 'coffee'
          theme = 'primary'
        />
        <Icon
          style = { { marginRight: "1rem" } }
          icon = 'fa-house'
          theme = 'info'
        />
        <Icon
          style = { { marginRight: "1rem" } }
          icon = 'fa-cloud'
          theme = 'danger'
        />
      </div>
      <br />
      <Divider style={DividerStyle.Success} text="triangle-ui-react" />
      <br />
      <div style={container}>
        <div>
          <TreeSelect
            data={data}
            isSingle={false}
            needInput={false}
            checkboxType="circle"
          />
        </div>
        <Menu mode="horizontal" onSelect={handleSelect} defaultIndex="1">
          <MenuItem index="1">Menu</MenuItem>
          <SubMenu title="just" index="2">
            <MenuItem index="2-1">easy</MenuItem>
            <MenuItem index="2-2">to use</MenuItem>
          </SubMenu>
          <MenuItem index="3">Menu</MenuItem>
        </Menu>
        <div style={{width:"30%"}}>
          <Menu mode="vertical" defaultIndex="0" defaultOpenSubmenus={['2']}>
            <MenuItem index="0">A</MenuItem>
            <MenuItem index="1">BEAUTIFUL</MenuItem>
            <SubMenu index="2" title="COMPONENT">
              <MenuItem index="2-1">INTUITIVE</MenuItem>
              <MenuItem index="2-2">REACT</MenuItem>
            </SubMenu>
            <MenuItem index="3">LIBRARY</MenuItem>
          </Menu>
        </div>
      </div>
      <br />
      <div style={container}>
        <div style={{width:"90%"}}>
          <Progress percent={percent} />
        </div>
      </div>
    </div>
  );
}
``` -->
