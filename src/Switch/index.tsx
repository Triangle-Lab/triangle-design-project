import React from 'react'

export interface SwitchProps {
  title?: string
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
  type: 'primary' | 'danger' | 'success' | 'warning'
}

const Switch: React.FC<SwitchProps> = (props) => {
  const { title, checked, defaultChecked, disabled, onChange, type } = props
  return (
    <label className={`checkboxWrapper checkboxWrapper-${type}`}>
      <input
        checked={checked}
        type="checkbox"
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={(e) => {
          if (onChange != null) {
            onChange(e.target.checked)
          }
        }}
      />
      <div className={`checkmark checkmark-${type}`}></div>
      {(title != null) && <span>{title}</span>}
    </label>
  )
}

Switch.defaultProps = {
  type: 'primary'
}

export default Switch
