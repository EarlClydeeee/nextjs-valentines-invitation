'use client'

import { useEffect } from 'react'
import PageTransition from './PageTransition'

export default function CelebrationPage() {
  useEffect(() => {
    // Trigger confetti with picnic colors
    const confetti = require('canvas-confetti')
    
    const duration = 5 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)
      
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#5CB8B2', '#FF9B9B', '#6DBF73', '#FFD5C2', '#FFEFD5']
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#5CB8B2', '#FF9B9B', '#6DBF73', '#FFD5C2', '#FFEFD5']
      })
    }, 250)

    return () => clearInterval(interval)
  }, [])

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center max-w-3xl">
          <div className="animate-scale-in">
            <h2 className="font-anime text-5xl md:text-7xl font-black bg-gradient-to-r from-picnic-teal via-picnic-coral to-picnic-emerald bg-clip-text text-transparent mb-8 leading-tight">
              It's a Date!
            </h2>
            <div className="glass p-10 mb-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-picnic-teal via-picnic-coral to-picnic-emerald"></div>
              <div className="mb-8">
                <h3 className="text-3xl font-anime font-bold bg-gradient-to-r from-picnic-coral to-picnic-teal bg-clip-text text-transparent mb-8">
                  Save the Date
                </h3>
                <div className="space-y-6 text-left max-w-xl mx-auto">
                  <div className="border-l-4 border-picnic-teal pl-6 py-3">
                    <p className="font-bold text-xl text-gray-800 mb-2">When</p>
                    <p className="text-lg text-gray-700 font-semibold">Saturday, February 14th, 2026</p>
                    <p className="text-lg text-gray-700 font-semibold">at 8:00 PM</p>
                  </div>
                  <div className="border-l-4 border-picnic-coral pl-6 py-3">
                    <p className="font-bold text-xl text-gray-800 mb-2">Where</p>
                    <p className="text-lg text-gray-700 font-semibold">Maple Grove Open Place</p>
                  </div>
                  <div className="border-l-4 border-picnic-emerald pl-6 py-3">
                    <p className="font-bold text-xl text-gray-800 mb-2">What to Expect</p>
                    <p className="text-lg text-gray-700">A magical picnic under the stars with delicious food, sweet treats, and wonderful memories</p>
                  </div>
                </div>
              </div>
              <div className="w-20 h-1 bg-gradient-to-r from-picnic-teal to-picnic-coral mx-auto my-6"></div>
              <p className="text-2xl md:text-3xl font-anime font-bold text-gray-800 mb-3">
                I can't wait to spend this special evening with you
              </p>
              <p className="text-xl text-gray-600 italic">
                Get ready for a magical Valentine's celebration
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
