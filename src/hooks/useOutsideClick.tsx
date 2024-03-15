import { useEffect, useRef } from "react"

export default function useOutsideClick(callback: Function) {
  const ref = useRef<any>(null)

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target)) callback()
    }

    document.addEventListener("click", handleClick, true)

    return () => {
      document.removeEventListener("click", handleClick, true)
    }
  }, [ref, callback])

  return ref
}
