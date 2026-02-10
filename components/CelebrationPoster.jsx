'use client'

import { useEffect, useCallback } from 'react'
import Image from 'next/image'

export default function CelebrationPoster() {

  const fireConfetti = useCallback(() => {
    const confetti = require('canvas-confetti')
    
    // Big burst from both sides
    const colors = ['#FFB6C1', '#FF69B4', '#FF1493', '#FFC0CB', '#FFD700', '#FF6347', '#87CEEB', '#98FB98']

    // Initial big burst
    confetti({
      particleCount: 100,
      spread: 90,
      origin: { x: 0, y: 0.6 },
      colors,
      startVelocity: 45,
    })
    confetti({
      particleCount: 100,
      spread: 90,
      origin: { x: 1, y: 0.6 },
      colors,
      startVelocity: 45,
    })

    // Center shower
    setTimeout(() => {
      confetti({
        particleCount: 150,
        spread: 180,
        origin: { x: 0.5, y: 0 },
        colors,
        startVelocity: 30,
        gravity: 0.8,
        ticks: 300,
      })
    }, 300)

    // Continuous celebration for 4 seconds
    const duration = 4000
    const end = Date.now() + duration

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors,
      })
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors,
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }

    setTimeout(frame, 600)

    // Final firework bursts
    setTimeout(() => {
      confetti({ particleCount: 80, spread: 100, origin: { x: 0.3, y: 0.3 }, colors, startVelocity: 35 })
    }, 1500)
    setTimeout(() => {
      confetti({ particleCount: 80, spread: 100, origin: { x: 0.7, y: 0.4 }, colors, startVelocity: 35 })
    }, 2200)
    setTimeout(() => {
      confetti({ particleCount: 120, spread: 160, origin: { x: 0.5, y: 0.5 }, colors, startVelocity: 40 })
    }, 3000)
  }, [])

  useEffect(() => {
    // Small delay so the poster fades in first, then confetti hits
    const timer = setTimeout(fireConfetti, 400)
    return () => clearTimeout(timer)
  }, [fireConfetti])

  return (
    <div 
      className="h-screen w-screen flex items-center justify-center p-4 md:p-6 relative overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/BG.png"
        alt="Picnic Background"
        fill
        className="object-cover"
        priority
      />
      
      {/* Poster - fits within viewport on all devices */}
      <div className="relative z-10 animate-fade-in h-full flex items-center justify-center py-4">
        <Image
          src="/Poster.png"
          alt="Date with Earl Poster"
          width={1200}
          height={1600}
          className="max-h-[90vh] w-auto shadow-2xl rounded-lg"
          priority
        />
      </div>
    </div>
  )
}
