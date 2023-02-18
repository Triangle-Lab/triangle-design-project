import React, { useState } from 'react'
import Button, { ButtonType, ButtonSize } from '../Button'

const TimePicker = (): JSX.Element => {
  const [currentTime, setCurrentTime] = useState({
    hour: '00',
    minute: '00',
    second: '00'
  })
  return (
    <div className='timepicker'>
      <div className='timepicker-header'>
        <div className='timepicker-header-title'>选择时间</div>
      </div>
      <div className='timepicker-body'>
        <div className='timepicker-body-column-top'>
          <div className='timepicker-body-column-title'>时</div>
        </div>
        <div className='timepicker-body-column-top'>
          <div className='timepicker-body-column-title'>分</div>
        </div>
        <div className='timepicker-body-column-top'>
          <div className='timepicker-body-column-title'>秒</div>
        </div>
      </div>
      <div className='timepicker-body'>
        <div className='timepicker-body-column'>
          {
            Array.from({ length: 24 }, (v, k) => k).map((item, index) => {
              return (
                <div
                  key={index}
                  className='timepicker-body-column-item'
                  onClick={() => {
                    if (item < 10) {
                      setCurrentTime({ ...currentTime, hour: '0' + item.toString() })
                    } else {
                      setCurrentTime({ ...currentTime, hour: item.toString() })
                    }
                  }}
                >
                  {item < 10 ? '0' + item.toString() : item}
                </div>
              )
            })
          }
        </div>
        <div className='timepicker-body-column'>
          {
            Array.from({ length: 60 }, (v, k) => k).map((item, index) => {
              return (
                <div
                  key={index}
                  className='timepicker-body-column-item'
                  onClick={() => {
                    if (item < 10) {
                      setCurrentTime({ ...currentTime, minute: '0' + item.toString() })
                    } else {
                      setCurrentTime({ ...currentTime, minute: item.toString() })
                    }
                  }}
                >
                  {item < 10 ? '0' + item.toString() : item}
                </div>
              )
            })
          }
        </div>
        <div className='timepicker-body-column'>
          {
            Array.from({ length: 60 }, (v, k) => k).map((item, index) => {
              return (
                <div
                  key={index}
                  className='timepicker-body-column-item'
                  onClick={() => {
                    if (item < 10) {
                      setCurrentTime({ ...currentTime, second: '0' + item.toString() })
                    } else {
                      setCurrentTime({ ...currentTime, second: item.toString() })
                    }
                  }}
                >
                  {item < 10 ? '0' + item.toString() : item}
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='timepicker-footer'>
        <div>
          {currentTime.hour}:{currentTime.minute}:{currentTime.second}
        </div>
        <Button btnType={ButtonType.Default} size={ButtonSize.Small}>确定</Button>
      </div>
    </div>
  )
}

export default TimePicker
