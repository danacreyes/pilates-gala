import { useEffect, useRef } from 'react'

export function useOnInit(onInit: () => void | (() => void)) {
    const onInitRef = useRef(onInit)

    useEffect(() => onInitRef.current(), [])
}
