import React, { useEffect, useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight, FiClock } from 'react-icons/fi'
import { getCurrentMonth, getYears, isDisabledDay } from '../utils'

interface dateType {
  date: number
  isCurrentMonth: boolean
}

export interface selectedDateType {
  year: number
  month: number
  day: number
}

interface DatePickerProps {
  onChange: (date: selectedDateType) => void,
  en?: boolean,
  disabledDateRange?: {
    start: selectedDateType,
    end: selectedDateType
  }
}


const DatePicker = (
  {
    onChange,
    en,
    disabledDateRange
  }: DatePickerProps
): JSX.Element => {
  // 获取当前的年月
  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth() + 1
  const currentDay = new Date().getDate()
  const [selectedDate, setSelectedDate] = useState<selectedDateType>({
    year: currentYear,
    month: currentMonth,
    day: currentDay
  })
  const [currentYearData, setCurrentYearData] = useState<number>(currentYear)
  const [currentMonthData, setCurrentMonthData] = useState<number>(currentMonth)
  const [currentMonthCalendarData, setCurrentMonthCalendarData] = useState<dateType[]>(getCurrentMonth({ year: currentYear, month: currentMonth }))
  const [mode, setMode] = useState<'date' | 'year' | 'month'>('date')
  const [years, setYears] = useState<number[]>(getYears(currentYear))
  const Months = en ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] : ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']

  useEffect(() => {
    if (currentMonthData === 0) {
      setCurrentMonthData(12)
      setCurrentYearData(currentYearData - 1)
    }
    if (currentMonthData === 13) {
      setCurrentMonthData(1)
      setCurrentYearData(currentYearData + 1)
    }
    setCurrentMonthCalendarData(getCurrentMonth({ year: currentYearData, month: currentMonthData }))
  }, [currentYearData, currentMonthData])

  const Header = (): JSX.Element => {
    return (
      <div className='datepicker-header'>
        <div
          className='datepicker-header-arrow'
          onClick={() => { setCurrentYearData(currentYearData - 1) }}
        >
          <FiChevronsLeft />
        </div>
        <div
          className='datepicker-header-arrow'
          onClick={() => { setCurrentMonthData(currentMonthData - 1) }}
        >
          <FiChevronLeft />
        </div>
        <div className='datepicker-header-title'>
          {
            en && <div
              onClick={() => { setMode('month') }}
              className='datepicker-header-title-month'>{Months[currentMonthData - 1]},</div>
          }
          <div
            onClick={() => { setMode('year') }}
            className='datepicker-header-title-year'>{currentYearData}</div>
          {en ? '' : '年'}
          {
            !en && <div
              onClick={() => { setMode('month') }}
              className='datepicker-header-title-month'>{Months[currentMonthData - 1]}</div>
          }
        </div>
        <div
          className='datepicker-header-arrow'
          onClick={() => { setCurrentMonthData(currentMonthData + 1) }}
        >
          <FiChevronRight />
        </div>
        <div
          className='datepicker-header-arrow'
          onClick={() => { setCurrentYearData(currentYearData + 1) }}
        >
          <FiChevronsRight />
        </div>
      </div>
    )
  }

  const YearHeader = (): JSX.Element => {
    return (
      <div className='datepicker-header'>
        <div
          className='datepicker-header-arrow'
          onClick={() => { setYears(getYears(years[0] - 10)) }}
        >
          <FiChevronLeft />
        </div>
        <div className='datepicker-header-title'>
          <div className='datepicker-header-title-year'>{years[0]}</div>
          -
          <div className='datepicker-header-title-year'>{years[years.length - 1]}</div>
        </div>
        <div
          className='datepicker-header-arrow'
          onClick={() => { setYears(getYears(years[0] + 10)) }}
        >
          <FiChevronRight />
        </div>
      </div>
    )
  }

  const MonthHeader = (): JSX.Element => {
    return (
      <div className='datepicker-header'>
        <div
          className='datepicker-header-arrow'
          onClick={() => { setCurrentYearData(currentYearData - 1) }}
        >
          <FiChevronLeft />
        </div>
        <div className='datepicker-header-title'>
          <div className='datepicker-header-title-year'>{currentYearData}</div>
        </div>
        <div
          className='datepicker-header-arrow'
          onClick={() => { setCurrentYearData(currentYearData + 1) }}
        >
          <FiChevronRight />
        </div>
      </div>
    )
  }

  return (
    <div className='datepicker'>
      {mode === 'date' && <Header />}
      {mode === 'year' && <YearHeader />}
      {mode === 'month' && <MonthHeader />}
      {/* 创建六行七列视图 */}
      <div className='datepicker-body'>
        {mode === 'date' && (
          <div>
            <div className='datepicker-body-row datepicker-body-week'>
              <div className='datepicker-body-col'>
                {en ? 'Sun' : '日'}
              </div>
              <div className='datepicker-body-col'>
                {en ? 'Mon' : '一'}
              </div>
              <div className='datepicker-body-col'>
                {en ? 'Tue' : '二'}
              </div>
              <div className='datepicker-body-col'>
                {en ? 'Wed' : '三'}
              </div>
              <div className='datepicker-body-col'>
                {en ? 'Thu' : '四'}
              </div>
              <div className='datepicker-body-col'>
                {en ? 'Fri' : '五'}
              </div>
              <div className='datepicker-body-col'>
                {en ? 'Sat' : '六'}
              </div>
            </div>
            <div className='datepicker-body-row'>
              {
                currentMonthCalendarData.map((item, index) => {
                  let isDisable = false
                  if (disabledDateRange) {
                    isDisable = isDisabledDay(
                      {
                        year: item.isCurrentMonth ? currentYearData : ((currentMonthData === 1 || currentMonthData === 12) ? (item.date > 20 ? currentYearData + 1 : currentYearData - 1) : currentYearData),
                        month: item.isCurrentMonth ? currentMonthData : (item.date > 20 ? currentMonthData - 1 : currentMonthData + 1),
                        day: item.date,
                      },
                      {
                        start: disabledDateRange.start,
                        end: disabledDateRange.end
                      }
                    )
                  }
                  return (
                    <div
                      className={
                        `datepicker-body-col
                         datepicker-item
                        ${isDisable ? 'datepicker-item-disabled' : ''}`}
                      style={{ color: !isDisable && item.isCurrentMonth ? 'black' : 'rgb(201,205,212)', backgroundColor: !isDisable && item.isCurrentMonth && selectedDate.day === item.date && selectedDate.year === currentYearData && selectedDate.month === currentMonthData ? '#3794ff' : '' }}
                      key={index}
                      onClick={() => {
                        if (!isDisable) {
                          const tempDay = item.date
                          if (item.isCurrentMonth) {
                            setSelectedDate({
                              year: currentYearData,
                              month: currentMonthData,
                              day: item.date
                            })
                          } else {
                            if (item.date > 20) {
                              setSelectedDate({
                                year: currentYearData,
                                month: currentMonthData - 1,
                                day: tempDay
                              })
                              setCurrentMonthData(currentMonthData - 1)
                            } else {
                              setSelectedDate({
                                year: currentYearData,
                                month: currentMonthData + 1,
                                day: tempDay
                              })
                              setCurrentMonthData(currentMonthData + 1)
                            }
                          }
                          onChange({
                            year: currentYearData,
                            month: currentMonthData,
                            day: item.date
                          })
                        }
                      }}
                    >
                      <div
                        style={{ color: !isDisable && item.isCurrentMonth && selectedDate.day === item.date && selectedDate.year === currentYearData && selectedDate.month === currentMonthData ? 'white' : '' }}>
                        {item.date}
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        )}
        {
          mode === 'year' && (
            <div className='datepicker-body-year-row'>
              {
                years.map((item, index) => {
                  return (
                    <div
                      className='datepicker-year-item'
                      key={index}
                      onClick={() => {
                        setCurrentYearData(item)
                        setMode('date')
                      }}
                    >
                      {item}
                    </div>
                  )
                })
              }
            </div>
          )
        }
        {
          mode === 'month' && (
            <div className='datepicker-body-month-row'>
              {
                Months.map((item, index) => {
                  return (
                    <div
                      className='datepicker-month-item'
                      key={index}
                      onClick={() => {
                        setCurrentMonthData(index + 1)
                        setMode('date')
                      }}
                    >
                      {item}
                    </div>
                  )
                })
              }
            </div>
          )
        }
      </div>
    </div>
  )
}

// default value
DatePicker.defaultProps = {
  en: false,
}

export default DatePicker
