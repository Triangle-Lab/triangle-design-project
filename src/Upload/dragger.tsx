import React, { FC, useState, DragEvent } from 'react'
import classNames from 'classnames'

interface DragProps {
  onFile: (files: FileList) => void
  children?: React.ReactNode
}
export const Dragger: FC<DragProps> = (props) => {
  const {
    onFile,
    children
  } = props
  const [dragOver, setDragOver] = useState(false)
  const klass = classNames('viking-uploader-dragger', {
    'is-dragover': dragOver
  })
  const handleDrop = (e: DragEvent<HTMLElement>): any => {
    e.preventDefault()
    setDragOver(false)
    onFile(e.dataTransfer.files)
  }
  const handleDrag = (e: DragEvent<HTMLElement>, over: boolean): any => {
    e.preventDefault()
    setDragOver(over)
  }
  return (
    <div
      className = { klass }
      onDragOver = { e => { handleDrag(e, true) } }
      onDragLeave = { e => { handleDrag(e, false) } }
      onDrop = { handleDrop }
    >
      { children }
    </div>
  )
}

export default Dragger
