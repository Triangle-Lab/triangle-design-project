import React from 'react'

interface DropdownProps {
  droplist: JSX.Element[]
  children: JSX.Element
}

const Dropdown: React.FC<DropdownProps> = ({ droplist, children }) => {
  const [showDropdown, setShowDropdown] = React.useState(false)

  return (
    <div className="dropdown">
      <div className="dropdown-child" onClick={() => { setShowDropdown(!showDropdown) }}>{children}</div>
      {showDropdown && (
        <div className="dropdown-menu"
          onMouseLeave={() => { setShowDropdown(false) }}
        >
          {droplist.map((item, index) => (
            <div key={index} className="dropdown-item">
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown
