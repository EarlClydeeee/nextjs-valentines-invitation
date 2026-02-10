'use client'

import { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'

const CelebrationPoster = dynamic(() => import('./CelebrationPoster'), { ssr: false })

export default function EnvelopePage() {
  const [isOpen, setIsOpen] = useState(false)
  const [noClickCount, setNoClickCount] = useState(0)
  const [showCelebration, setShowCelebration] = useState(false)
  const [yesChecked, setYesChecked] = useState(false)
  const [ofCourseChecked, setOfCourseChecked] = useState(false)
  const confettiRef = useRef(null)

  // Load confetti on mount
  useEffect(() => {
    import('canvas-confetti').then(mod => {
      confettiRef.current = mod.default
    })
  }, [])

  const handleEnvelopeClick = () => {
    if (!isOpen) {
      setIsOpen(true)
    }
  }

  const handleNoClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (noClickCount < 5) {
      setNoClickCount(prev => prev + 1)
    }
  }

  const fireConfetti = () => {
    const confetti = confettiRef.current
    if (!confetti) return

    const colors = ['#FFB6C1', '#FF69B4', '#FF1493', '#FFC0CB', '#FFD700', '#FF6347', '#87CEEB', '#98FB98']
    confetti({ particleCount: 100, spread: 90, origin: { x: 0, y: 0.6 }, colors, startVelocity: 45 })
    confetti({ particleCount: 100, spread: 90, origin: { x: 1, y: 0.6 }, colors, startVelocity: 45 })
    confetti({ particleCount: 150, spread: 180, origin: { x: 0.5, y: 0.2 }, colors, startVelocity: 30 })
  }

  const handleYes = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setYesChecked(true)
    fireConfetti()
    setTimeout(() => setShowCelebration(true), 1200)
  }

  const handleOfCourse = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setOfCourseChecked(true)
    fireConfetti()
    setTimeout(() => setShowCelebration(true), 1200)
  }

  if (showCelebration) {
    return <CelebrationPoster />
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-pink-50 via-white to-pink-100">
      <div className="max-w-3xl w-full">
        {/* Header text */}
        {!isOpen && (
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-serif text-gray-800 mb-2">
              To my dear, Kara Eiren
            </h1>
          </div>
        )}

        {/* Envelope container */}
        <div 
          className={`relative w-full max-w-2xl mx-auto ${!isOpen ? 'cursor-pointer' : ''}`}
          style={{ aspectRatio: '1.6/1' }}
          onClick={!isOpen ? handleEnvelopeClick : undefined}
        >
          
          {/* Letter */}
          <div 
            className={`absolute bg-white rounded-lg shadow-2xl flex items-center justify-center p-8 md:p-12 transition-all duration-1000 ease-out ${
              isOpen 
                ? 'inset-0 translate-y-[-80%] scale-105 opacity-100' 
                : 'inset-4 translate-y-[20%] scale-90 opacity-0'
            }`}
            style={{
              transformOrigin: 'center center',
              pointerEvents: isOpen ? 'auto' : 'none',
              visibility: isOpen ? 'visible' : 'hidden',
              zIndex: isOpen ? 50 : 0,
            }}
          >
            {isOpen && (
              <div className="text-center animate-fade-in w-full">
                <h2 className="text-3xl md:text-5xl font-serif text-gray-800 mb-4">
                  Will you be my
                </h2>
                <h1 className="text-5xl md:text-7xl font-serif text-pink-500 mb-10 italic" style={{ fontFamily: 'Brush Script MT, cursive' }}>
                  Valentine?
                </h1>
                
                {/* Message when No is clicked 5 times */}
                {noClickCount >= 5 && (
                  <div className="mb-6 animate-fade-in">
                    <p className="text-xl md:text-2xl font-serif text-pink-600 font-bold">
                      No No No, that will not happen!
                    </p>
                  </div>
                )}
                
                {/* Choice buttons */}
                <div className="flex justify-center gap-6 md:gap-12 items-end flex-wrap">
                  {/* Yes */}
                  <button 
                    type="button"
                    className="flex flex-col items-center group"
                    onClick={handleYes}
                  >
                    <div className={`w-14 h-14 md:w-16 md:h-16 border-4 rounded-md mb-3 flex items-center justify-center transition-all ${
                      yesChecked 
                        ? 'border-pink-500 bg-pink-50' 
                        : 'border-gray-800 hover:bg-pink-50 group-hover:border-pink-500 group-hover:scale-110'
                    }`}>
                      {yesChecked && (
                        <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className="text-xl md:text-2xl font-serif text-gray-800">Yes</span>
                  </button>

                  {/* No - shrinks and disappears */}
                  {noClickCount < 5 && (
                    <button 
                      type="button"
                      className="flex flex-col items-center group transition-all duration-300"
                      style={{
                        transform: `scale(${1 - (noClickCount * 0.15)})`,
                        opacity: 1 - (noClickCount * 0.15)
                      }}
                      onClick={handleNoClick}
                    >
                      <div className="w-14 h-14 md:w-16 md:h-16 border-4 border-gray-800 rounded-md mb-3 flex items-center justify-center hover:bg-gray-100 transition-all group-hover:border-gray-500 group-hover:scale-110">
                      </div>
                      <span className="text-xl md:text-2xl font-serif text-gray-800">No</span>
                    </button>
                  )}
                  
                  {/* Of Course */}
                  <button 
                    type="button"
                    className="flex flex-col items-center group"
                    onClick={handleOfCourse}
                  >
                    <div className={`w-14 h-14 md:w-16 md:h-16 border-4 rounded-md mb-3 flex items-center justify-center transition-all ${
                      ofCourseChecked 
                        ? 'border-pink-500 bg-pink-50' 
                        : 'border-gray-800 hover:bg-pink-50 group-hover:border-pink-500 group-hover:scale-110'
                    }`}>
                      {ofCourseChecked && (
                        <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className="text-xl md:text-2xl font-serif text-gray-800">Of Course</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Envelope Back */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-pink-300 via-pink-400 to-pink-500 rounded-lg shadow-2xl"
            style={{ zIndex: 5 }}
          >
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-pink-600" 
                   style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}></div>
              <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-pink-600" 
                   style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}></div>
            </div>
          </div>

          {/* Envelope Flap */}
          <div 
            className={`absolute top-0 left-0 right-0 origin-top transition-all duration-1000 ${
              isOpen 
                ? '-translate-y-[100%] -rotate-[180deg]' 
                : 'translate-y-0 rotate-0'
            }`}
            style={{ height: '50%', zIndex: 10, transformStyle: 'preserve-3d' }}
          >
            <div 
              className="absolute inset-0 bg-gradient-to-br from-pink-400 to-pink-500 shadow-2xl"
              style={{ clipPath: 'polygon(0 0, 50% 100%, 100% 0)' }}
            >
              {!isOpen && (
                <div 
                  className="absolute pointer-events-none" 
                  style={{ top: '50%', left: '50%', transform: 'translate(-50%, 20%)' }}
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full shadow-xl flex items-center justify-center border-4 border-yellow-300 animate-pulse">
                    <svg className="w-10 h-10 md:w-12 md:h-12 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Click to open text */}
        {!isOpen && (
          <div className="text-center mt-12 animate-bounce">
            <p className="text-2xl md:text-3xl font-serif text-gray-600">
              Click to open!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
