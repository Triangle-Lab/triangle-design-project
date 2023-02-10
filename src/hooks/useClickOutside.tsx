import { RefObject, useEffect } from 'react'

function useClickOutside (ref: RefObject<HTMLElement>, handler: Function): any {
  useEffect(() => {
    const listener = (event: MouseEvent): any => {
      if ((ref.current == null) || ref.current.contains(event.target as HTMLElement)) {
        return
      }
      handler(event)
    }
    document.addEventListener('click', listener)
    return () => {
      document.removeEventListener('click', listener)
    }
  }, [ref, handler])
}

export default useClickOutside
