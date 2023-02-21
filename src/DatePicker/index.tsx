import React, { useEffect } from 'react'
import DatePicker from './DatePicker'
import { selectedDateType } from './DatePicker/'
import Button, { ButtonSize, ButtonType } from '../Button'
interface pickerProps {
  onChange: (date: selectedDateType) => void,
  en?: boolean,
  disabledDateRange?: {
    start: selectedDateType,
    end: selectedDateType
  }
}

type NativePickerProps = React.HTMLAttributes<HTMLElement> & pickerProps
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
  const [show, setShow] = React.useState<boolean>(false)
  const [selectedDate, setSelectedDate] = React.useState<selectedDateType>({
    year: currentYear,
    month: currentMonth,
    day: currentDay
  })
  return (
    <div>
      <Button className='pickerButton' btnType={ButtonType.Primary} onClick={() => {
        setShow(!show)
      }}>
        {en ? 'select date:' : '选择日期:'}
        {selectedDate.year}-{selectedDate.month}-{selectedDate.day}
      </Button>
      {
        show && <div className="picker">
          <DatePicker
            en={en}
            disabledDateRange={disabledDateRange ? disabledDateRange : undefined}
            onChange={(date) => {
              if (onChange) {
                onChange({
                  year: date.year,
                  month: date.month,
                  day: date.day
                })
                setSelectedDate({
                  year: date.year,
                  month: date.month,
                  day: date.day
                })
              }
            }} />
        </div>
      }
    </div>
  )
}

export default Index
