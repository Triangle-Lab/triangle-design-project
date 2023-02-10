import React from 'react'

interface CalendarProps {
  defaultValue: string
  style: React.CSSProperties
  onChange: (date: string) => void
}

const Calendar: React.FC<CalendarProps> = (props) => {
  const [month, setMonth] = React.useState(new Date().getMonth())
  const [year, setYear] = React.useState(new Date().getFullYear())

  const handleDateClick = (day: number): void => {
    const date = new Date(year, month, day)
    props.onChange(date.toISOString().substr(0, 10))
  }

  return (
    <div style={props.style}>
      {/* 用于显示当前月份和年份的组件 */}
      {/* 切换月份的按钮 */}
      {/* 切换年份的按钮 */}
      <table>
        <thead>
           <tr>
            <th>
              <button onClick={() => { setMonth(month - 1) }}>&lt;</button>
            </th>
            <th colSpan={5}>
              {year}-{month + 1}
            </th>
            <th>
              <button onClick={() => { setMonth(month + 1) }}>&gt;</button>
            </th>
          </tr>
          <tr>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Sun</th>
          </tr>
        </thead>
        <tbody>
          {/* 循环生成每周的行 */}
          {Array.from({ length: 6 }, (_, weekIndex) => (
            <tr key={weekIndex}>
              {/* 循环生成每天的单元格 */}
              {Array.from({ length: 7 }, (_, dayIndex) => {
                const date = new Date(year, month, weekIndex * 7 + dayIndex + 1)
                const isCurrentMonth = date.getMonth() === month
                const isToday = date.toDateString() === new Date().toDateString()

                return (
                  <td key={dayIndex}>
                    <button
                      style={{
                        backgroundColor: isToday ? 'lightblue' : 'white',
                        color: isCurrentMonth ? 'black' : 'gray'
                      }}
                      onClick={() => { handleDateClick(date.getDate()) }}
                    >
                      {date.getDate()}
                    </button>
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Calendar
