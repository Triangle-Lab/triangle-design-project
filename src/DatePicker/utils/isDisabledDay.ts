import { selectedDateType } from '../DatePicker'

interface disabledDateRangeType {
  start: selectedDateType
  end: selectedDateType
}

const isDisabledDay = ( date:selectedDateType, disabledDateRange:disabledDateRangeType ): boolean => {
  const { year, month, day } = date
  const { start, end } = disabledDateRange || {}
  // 如果开始时间晚于结束时间，抛出错误
  if (start && end) {
    const startDate = new Date(start.year, start.month, start.day)
    const endDate = new Date(end.year, end.month, end.day)
    if (startDate > endDate) {
      throw new Error('Error: RangeDatePicker start date should not be later than end date!__TriangleDesign')
    }
  }
  if (start && end) {
    const startDate = new Date(start.year, start.month, start.day)
    const endDate = new Date(end.year, end.month, end.day)
    const currentDate = new Date(year, month, day)
    if (currentDate >= startDate && currentDate <= endDate) {
      return true
    }
  }
  return false
}

export default isDisabledDay
