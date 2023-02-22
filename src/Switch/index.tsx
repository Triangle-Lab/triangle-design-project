import React from 'react';

interface SwitchProps {
  onSwitch: (isOn: boolean) => void;
  onColor?: string;
  switchId: string;
}

const Switch = ({ onSwitch, onColor, switchId }: SwitchProps) => {
  const [isOn, setOn] = React.useState<boolean>(false);
  return (
    <>
      <input
        checked={isOn}
        className="switch-checkbox"
        id={switchId}
        type="checkbox"
        onClick={() => {
          setOn(!isOn);
          // 回调函数
          onSwitch(!isOn);
        }}
      />
      <label
        style={{ background: isOn ? onColor : '' }}
        className="switch-label"
        htmlFor={switchId}
      >
        <span className={`switch-button`} />
      </label>
    </>
  );
};

// default props
Switch.defaultProps = {
  onColor: '#057EFF',
};

export default Switch;
