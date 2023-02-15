// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { ChangeEvent, Children, FC, useRef, useState } from 'react'
import axios from 'axios'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Button, { ButtonSize, ButtonType } from '../Button'
import { Input } from '../Input'
import UploadList from './uploadList'
import Dragger from './dragger'

export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error'
export interface UploadFile {
  uid: string
  size: number
  name: string
  status?: UploadFileStatus
  percent?: number
  raw?: File
  response?: any
  error?: any
}

export interface UploadProps {
  action: string
  defalutFileList?: UploadFile[]
  beforeUpload?: (file: File) => boolean | Promise<File>
  onProgress?: (percentage: number, file: File) => void
  onSuccess?: (data: any, file: File) => void
  onError?: (err: any, file: File) => void
  onChange?: (file: File) => void
  onRemove?: (file: UploadFile) => void
  headers?: Record<string, any>
  name?: string
  data?: Record<string, any>
  withCredentials?: boolean
  accept?: string
  multiple?: boolean
  children?: React.ReactNode
  drag?: boolean
}

export const Upload: FC<UploadProps> = (props) => {
  const {
    action,
    defalutFileList,
    onProgress,
    beforeUpload,
    onSuccess,
    onError,
    onChange,
    onRemove,
    withCredentials,
    data,
    name,
    headers,
    multiple,
    accept,
    children,
    drag
  } = props
  const fileInput = useRef<HTMLInputElement>(null)
  const [fileList, setFileList] = useState<UploadFile[]>(defalutFileList ?? [])
  const updateFileList = (updateFile: UploadFile, updateObj: Partial<UploadFile>): any => {
    setFileList(prevList => {
      return prevList.map(file => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObj }
        } else {
          return file
        }
      })
    })
  }
  const handleClick = (): any => {
    if (fileInput.current != null) {
      fileInput.current.click()
    }
  }
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): any => {
    const files = e.target.files
    if (files == null) {
      return
    }
    uploadFiles(files)
    if (fileInput.current != null) {
      fileInput.current.value = ''
    }
  }
  const handleRemove = (file: UploadFile): any => {
    setFileList((prevList) => {
      return prevList.filter(item => item.uid !== file.uid)
    })
    if (onRemove != null) {
      onRemove(file)
    }
  }
  const uploadFiles = (files: FileList): any => {
    const postFiles = Array.from(files)
    postFiles.forEach(file => {
      if (beforeUpload == null) {
        post(file)
      } else {
        const result = beforeUpload(file)
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (result && result instanceof Promise) {
          void result.then(processedFile => {
            post(processedFile)
          })
        } else if (result) {
          post(file)
        }
      }
      post(file)
    })
  }

  const post = (file: File): any => {
    const _file: UploadFile = {
      uid: Date.now() as unknown as string + 'upload-file',
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file
    }
    // setFileList([_file, ...fileList])
    setFileList(prevList => {
      return [_file, ...prevList]
    })
    const formData = new FormData()
    formData.append(name ?? 'file', file)
    if (data != null) {
      Object.keys(data).forEach(key => {
        formData.append(key, data[key])
      })
    }
    axios.post(action, formData, {
      headers: {
        ...headers,
        'Content-Type': 'multipart/from-data'
      },
      withCredentials,
      onUploadProgress: (e) => {
        let percnetage
        if (e.total != null) { percnetage = (Math.round((e.loaded * 100) / e.total) !== 0) || 0 }
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (percnetage && percnetage < 100) {
          updateFileList(_file, { percent: percnetage as number, status: 'uploading' })
          if (onProgress != null) {
            onProgress(percnetage as number, file)
          }
        }
      }
    }).then(resp => {
      console.log(resp)
      updateFileList(_file, { status: 'success', response: resp.data })
      if (onSuccess != null) {
        onSuccess(resp.data, file)
      }
      if (onChange != null) {
        onChange(file)
      }
    }).catch(err => {
      console.error(err)
      updateFileList(_file, { status: 'error', error: err })
      if (onError != null) {
        onError(err, file)
      }
      if (onChange != null) {
        onChange(file)
      }
    })
  }
  console.log(FileList)
  return (
    <div
      className="viking-upload-component"
    >
      <div className = "viking-upload-input"
        style = { { display: 'inline-block' } }
        onClick = { handleClick }
      >
        { (drag === true)
          ? <Dragger
          onFile = { (files) => { uploadFiles(files) } }
        >
          { children }
        </Dragger>
          : children
        }
      </div>
      <Input
        className = "viking-file-input"
        style = { { display: 'none' } }
        // ref = { fileInput }
        onChange = { handleFileChange }
        type = "file"
        accept = { accept }
        multiple = { multiple }
      />
      <UploadList
        fileList = { fileList }
        onRemove = { handleRemove }
      />
    </div>
  )
}

Upload.defaultProps = {
  name: 'file'
}
export default Upload
