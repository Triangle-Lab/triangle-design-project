/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { type FC, useState, type ChangeEvent, type KeyboardEvent, type ReactElement, useEffect, useRef } from 'react'
import { Input, type InputProps } from '../Input/input'
import Icon from '../Icon/icon'
import useDebounce from '../hooks/useDebounce'
import classNames from 'classnames'
import useClickOutside from '../hooks/useClickOutside'

interface DataSourceObject {
  value: string
}
export type DataSourceType<T = {}> = T & DataSourceObject

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>
  onSelect?: (item: DataSourceType) => void
  renderOption?: (item: DataSourceType) => ReactElement
}

export const AutoComplete: FC<AutoCompleteProps> = (props) => {
  const {
    fetchSuggestions,
    onSelect,
    value,
    renderOption,
    ...restProps
  } = props

  const [inputValue, setInputValue] = useState(value as string)
  const [suggestions, setSugestions] = useState<DataSourceType[]>([])
  const [loading, setLoading] = useState(false)
  const [highlightIndex, setHighlightIndex] = useState(-1)
  const triggerSearch = useRef(false)
  const componentRef = useRef<HTMLDivElement>(null)
  const debouncedValue = useDebounce(inputValue, 500)

  useClickOutside(componentRef, () => { setSugestions([]) })
  useEffect(() => {
    if ((Boolean(debouncedValue)) && Boolean(triggerSearch)) {
      const results = fetchSuggestions(debouncedValue)
      if (results instanceof Promise) {
        console.log('triggered')
        setLoading(true)
        results.then(data => {
          setLoading(false)
          setSugestions(data)
        })
      } else {
        setSugestions(results)
      }
    } else {
      setSugestions([])
    }
    setHighlightIndex(-1)
  }, [debouncedValue])

  const highlight = (index: number): void => {
    if (index < 0) index = 0
    if (index >= suggestions.length) {
      index = suggestions.length - 1
    }
    setHighlightIndex(index)
  }
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    switch (e.keyCode) {
      case 13:// enter
        if (suggestions[highlightIndex]) {
          handleSelect(suggestions[highlightIndex])
        }
        break
      case 38:// 上
        highlight(highlightIndex - 1)
        break
      case 40:// 下
        highlight(highlightIndex + 1)
        break
      case 27:// esc
        setSugestions([])
        break
      default:
        break
    }
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value.trim()
    setInputValue(value)
    triggerSearch.current = true
  }
  const handleSelect = (item: DataSourceType): void => {
    setInputValue(item.value)
    setSugestions([])
    if (onSelect != null) {
      onSelect(item)
    }
    triggerSearch.current = false
  }
  const renderTemplate = (item: DataSourceType): any => {
    return (renderOption != null) ? renderOption(item) : item.value
  }
  const generateDropdown = (): JSX.Element => {
    return (
      <ul>
        { suggestions.map((item, index) => {
          const cnames = classNames('suggestion-item', {
            'item-highlihted': index === highlightIndex
          })
          return (
            <li key = { index } className = { cnames } onClick = { () => { handleSelect(item) } }>
              <>
              { renderTemplate(item) }
              </>
            </li>
          )
        })}
      </ul>
    )
  }
  return (
    <div className = "viking-auto-compete" ref = {componentRef}>
      <Input
        value = { inputValue }
        onChange = { handleChange }
        onKeyDown = { handleKeyDown }
        { ... restProps }
      />
      { loading && <ul><Icon icon="spinner" spin/></ul>}
      { (suggestions.length > 0) && generateDropdown() }
    </div>
  )
}
