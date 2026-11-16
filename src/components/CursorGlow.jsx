import { useEffect, useRef } from 'react'
import '../styles/background.css'

export default function CursorGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    const move = (e) => {
      glowRef.current.style.transform = 'translate(' + e.clientX + 'px,' + e.clientY + 'px)'
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])

  return <div id="glow" ref={glowRef}></div>
}
