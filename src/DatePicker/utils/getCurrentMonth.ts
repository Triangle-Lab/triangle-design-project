
interface currentMonthProps {
  year: number
  month: number
}

interface dateType {
  date: number
  isCurrentMonth: boolean
}

const getCurrentMonth = (props: currentMonthProps): dateType[] => {
  const { year, month } = props
  const firstDay = new Date(year, month - 1, 1)
  const firstDayWeekDay = firstDay.getDay()
  const monthData = []
  let lastMonth = month - 1
  if (lastMonth === 0) {
    lastMonth = 12
  }
  let nextMonth = month + 1
  if (nextMonth === 13) {
    nextMonth = 1
  }
  const lastMonthLastDay = new Date(year, lastMonth, 0) // last day of last month
  const lastMonthLastDayDate = lastMonthLastDay.getDate() // last day of last month
  const nextMonthFirstDay = new Date(year, nextMonth - 1, 1)  // first day of next month
  const nextMonthFirstDayDate = nextMonthFirstDay.getDate() // first day of next month

  if (firstDayWeekDay > 0) {
    // when first day is not Sunday
    for (let i = 0; i < firstDayWeekDay; i++) {
      monthData.push({ date: lastMonthLastDayDate - firstDayWeekDay + i + 1, isCurrentMonth: false })
    }
  }
  const currentMonthLastDay = new Date(year, month, 0)
  const currentMonthLastDayDate = currentMonthLastDay.getDate()
  for (let i = 1; i <= currentMonthLastDayDate; i++) {
    // when first day is Sunday
    monthData.push({ date: i, isCurrentMonth: true })
  }
  const lastDayWeekDay = new Date(year, month - 1, currentMonthLastDayDate).getDay()
  if (lastDayWeekDay < 6) {
    for (let i = 0; i < 6 - lastDayWeekDay; i++) {
      // when last day is not Saturday
      monthData.push({ date: nextMonthFirstDayDate + i, isCurrentMonth: false })
    }
  }
  return monthData
}

export default getCurrentMonth
