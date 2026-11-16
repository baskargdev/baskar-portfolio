import { useEffect, useRef } from 'react'
import '../styles/background.css'

export default function ParticlesBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const cv = canvasRef.current
    const x = cv.getContext('2d')
    let W
    let H
    let frame
    const P = []

    const resize = () => {
      W = cv.width = window.innerWidth
      H = cv.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 70; i++) {
      P.push({
        x: Math.random() * 2000,
        y: Math.random() * 2000,
        r: Math.random() * 2 + 0.6,
        s: Math.random() * 0.5 + 0.15,
        c: Math.random() < 0.5 ? '139,92,246' : '34,211,238',
      })
    }

    const draw = () => {
      x.clearRect(0, 0, W, H)
      for (let i = 0; i < P.length; i++) {
        const p = P[i]
        p.y -= p.s
        p.x += Math.sin(p.y / 60) * 0.3
        if (p.y < -10) {
          p.y = H + 10
          p.x = Math.random() * W
        }
        x.beginPath()
        x.arc(p.x % W, p.y, p.r, 0, 6.3)
        x.fillStyle = 'rgba(' + p.c + ',.7)'
        x.shadowBlur = 12
        x.shadowColor = 'rgb(' + p.c + ')'
        x.fill()
      }
      frame = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas id="fx" ref={canvasRef}></canvas>
}
