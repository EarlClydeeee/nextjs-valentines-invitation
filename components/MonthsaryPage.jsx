'use client'

import PageTransition from './PageTransition'

export default function MonthsaryPage({ onContinue }) {
  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center max-w-2xl">
          <div className="mb-8">
            <h2 className="font-anime text-4xl md:text-6xl font-bold bg-gradient-to-r from-picnic-coral via-picnic-salmon to-picnic-teal bg-clip-text text-transparent mb-8">
              Happy Monthsary
            </h2>
            <div className="glass p-10 mb-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-picnic-teal via-picnic-coral to-picnic-emerald"></div>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-semibold mb-6">
                Today marks another beautiful month of our journey together
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-picnic-teal to-picnic-coral mx-auto my-6"></div>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Every moment with you has been a treasure, and I want to celebrate this special milestone in a memorable way
              </p>
            </div>
            <button
              onClick={onContinue}
              className="anime-button bg-gradient-to-r from-picnic-coral to-picnic-salmon text-white px-12 py-5 rounded-full text-xl font-bold"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
