'use client'

import PageTransition from './PageTransition'

export default function WelcomePage({ onContinue }) {
  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center max-w-2xl">
          <div className="animate-scale-in">
            <div className="glass px-10 py-12 mb-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-picnic-teal via-picnic-coral to-picnic-emerald"></div>
              <h1 className="font-anime text-5xl md:text-7xl font-bold bg-gradient-to-r from-picnic-teal via-picnic-coral to-picnic-emerald bg-clip-text text-transparent mb-6 animate-fade-in">
                Welcome, Kara Eiren
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-2 animate-slide-up font-semibold">
                I have something special to share with you
              </p>
            </div>
            <button
              onClick={onContinue}
              className="anime-button bg-gradient-to-r from-picnic-teal to-picnic-coral text-white px-14 py-5 rounded-full text-xl font-bold shadow-lg"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
