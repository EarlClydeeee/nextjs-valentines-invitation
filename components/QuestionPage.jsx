'use client'

import { useState } from 'react'
import PageTransition from './PageTransition'

export default function QuestionPage({ onYes }) {
  const [noClickCount, setNoClickCount] = useState(0)
  const [noButtonText, setNoButtonText] = useState('No')

  const noButtonMessages = [
    'No',
    'Are you sure?',
    'Really?',
    'Please?',
    'Pretty please?',
  ]

  const handleNoClick = () => {
    const newCount = noClickCount + 1
    setNoClickCount(newCount)
    if (newCount < 5) {
      setNoButtonText(noButtonMessages[newCount])
    }
  }

  // Calculate button sizes based on click count
  const noButtonScale = Math.max(0, 1 - (noClickCount * 0.15))
  const yesButtonScale = 1 + (noClickCount * 0.1)

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center max-w-2xl">
          <div className="mb-12">
            <div className="glass p-10 mb-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-picnic-teal via-picnic-coral to-picnic-emerald"></div>
              <h2 className="font-anime text-4xl md:text-5xl font-bold bg-gradient-to-r from-picnic-teal via-picnic-coral to-picnic-salmon bg-clip-text text-transparent mb-6 leading-tight">
                Will you be my Valentine's picnic date?
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-picnic-teal to-picnic-coral mx-auto my-6"></div>
              <p className="text-xl md:text-2xl text-gray-700 font-semibold mb-4">
                Join me for a magical evening under the stars
              </p>
              <p className="text-lg text-gray-600">
                What do you say?
              </p>
            </div>
            <div className="flex gap-6 justify-center items-center flex-wrap">
              <button
                onClick={onYes}
                className="anime-button bg-gradient-to-r from-picnic-teal to-picnic-coral text-white px-14 py-6 rounded-full text-2xl font-bold pulse-glow transition-transform duration-300 shadow-2xl"
                style={{
                  transform: `scale(${yesButtonScale})`,
                }}
              >
                Yes!
              </button>
              {noClickCount < 5 && (
                <button
                  onClick={handleNoClick}
                  className="anime-button bg-gradient-to-r from-gray-400 to-gray-500 text-white px-10 py-5 rounded-full text-xl font-bold transition-all duration-300"
                  style={{
                    transform: `scale(${noButtonScale})`,
                    opacity: noButtonScale,
                  }}
                >
                  {noButtonText}
                </button>
              )}
            </div>
            {noClickCount > 0 && noClickCount < 5 && (
              <div className="glass px-6 py-3 inline-block mt-8 animate-fade-in">
                <p className="text-lg text-gray-700 font-semibold">
                  The "No" button is shrinking...
                </p>
              </div>
            )}
            {noClickCount >= 5 && (
              <div className="glass px-8 py-4 inline-block mt-8 animate-scale-in">
                <p className="text-xl text-gray-700 font-bold">
                  I guess there's only one choice now
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
