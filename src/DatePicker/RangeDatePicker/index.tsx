import React, { useEffect } from 'react'
import DatePicker from '../DatePicker'
import { selectedDateType } from '../DatePicker/'
import Button, { ButtonType } from '../../Button'
import Space, { Direction, Side, SpaceingSize } from '../../Space'

export interface selectedDateRangeType {
  start: selectedDateType,
  end: selectedDateType
}

interface RangePickerProps {
  onChange: (rangeDate: selectedDateRangeType) => void,
  en?: boolean,
  disabledDateRange?: {
    start: selectedDateType,
    end: selectedDateType
  }
}

type NativePickerProps = React.HTMLAttributes<HTMLElement> & RangePickerProps
export type PickerProps = Partial<NativePickerProps>

const Index = (
  {
    onChange,
    en,
    disabledDateRange
  }: PickerProps
) => {
  // 获取今天的年月日
  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth() + 1
  const currentDay = new Date().getDate()
  const [startShow, setStartShow] = React.useState<boolean>(false)
  const [endShow, setEndShow] = React.useState<boolean>(false)
  const [selectedDate, setSelectedDate] = React.useState<selectedDateRangeType>(
    {
      start: {
        year: currentYear,
        month: currentMonth,
        day: currentDay
      },
      end: {
        year: currentYear,
        month: currentMonth,
        day: currentDay + 2
      }
    }
  )
  return (
    <div style={{ display: "flex" }}>
      <Space
        direction={Direction.Horizontal}
        side={Side.Left}
        wrap={false}
      >
        <div>
          <Button className='pickerButton' btnType={ButtonType.Primary} onClick={() => {
            setStartShow(!startShow)
            setEndShow(false)
          }}>
            {en ? 'select the start date:' : '开始日期:'}
            {selectedDate.start.year}-{selectedDate.start.month}-{selectedDate.start.day}
          </Button>
          {
            startShow && <div className="picker">
              <DatePicker
                en={en}
                disabledDateRange={disabledDateRange ? disabledDateRange : undefined}
                onChange={(date) => {
                  if (onChange) {
                    onChange({
                      start: {
                        year: date.year,
                        month: date.month,
                        day: date.day
                      },
                      end: {
                        year: selectedDate.end.year,
                        month: selectedDate.end.month,
                        day: selectedDate.end.day
                      }
                    })
                    setSelectedDate({
                      start: {
                        year: date.year,
                        month: date.month,
                        day: date.day
                      },
                      end: selectedDate.end
                    })
                  }
                }} />
            </div>
          }
        </div>
        <div>
          <Button className='pickerButton' btnType={ButtonType.Primary} onClick={() => {
            setEndShow(!endShow)
            setStartShow(false)
          }}>
            {en ? 'select the end date:' : '结束日期:'}
            {selectedDate.end.year}-{selectedDate.end.month}-{selectedDate.end.day}
          </Button>
          {
            endShow && <div className="picker">
              <DatePicker
                en={en}
                disabledDateRange={disabledDateRange ? disabledDateRange : undefined}
                onChange={(date) => {
                  if (onChange) {
                    onChange({
                      start: {
                        year: selectedDate.start.year,
                        month: selectedDate.start.month,
                        day: selectedDate.start.day
                      },
                      end: {
                        year: date.year,
                        month: date.month,
                        day: date.day
                      }
                    })
                    setSelectedDate({
                      start: selectedDate.start,
                      end: {
                        year: date.year,
                        month: date.month,
                        day: date.day
                      }
                    })
                  }
                }} />
            </div>
          }
        </div>
      </Space>
    </div>
  )
}

export default Index
