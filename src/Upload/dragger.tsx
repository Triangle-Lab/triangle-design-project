import React, { FC, useState, DragEvent } from 'react'
import classNames from 'classnames'

interface BaseDraggerProps {
  onFile: (files: FileList) => void;
}

type NativeDraggerProps = BaseDraggerProps & React.HTMLAttributes<HTMLElement>
export type DraggerProps = Partial<NativeDraggerProps>

export const Dragger: FC<DraggerProps> = (props) => {
  const { onFile, children } = props
  const [dragOver, setDragOver] = useState(false)
  const klass = classNames('triangle-uploader-dragger', {
    'is-dragover': dragOver
  })
  const handleDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault()
    setDragOver(false)
    if (!onFile) return
    onFile(e.dataTransfer.files)
  }
  const handleDrag = (e: DragEvent<HTMLElement>, over: boolean) => {
    e.preventDefault()
    setDragOver(over)
  }
  return (
    <div
      className={klass}
      onDragOver={e => { handleDrag(e, true) }}
      onDragLeave={e => { handleDrag(e, false) }}
      onDrop={handleDrop}
    >
      {children}
    </div>
  )
}

export default Dragger;
