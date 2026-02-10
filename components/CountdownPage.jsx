'use client'

import PageTransition from './PageTransition'

export default function CountdownPage({ onNext }) {
  // Calculate days until Valentine's Day (Feb 14, 2026)
  const currentDate = new Date('2026-02-10')
  const valentinesDay = new Date('2026-02-14')
  const daysLeft = Math.ceil((valentinesDay - currentDate) / (1000 * 60 * 60 * 24))

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center max-w-2xl">
          <div className="mb-8">
            <h2 className="font-anime text-4xl md:text-6xl font-bold bg-gradient-to-r from-picnic-coral to-picnic-teal bg-clip-text text-transparent mb-8">
              Valentine's Day
            </h2>
            <div className="glass p-12 mb-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-picnic-emerald via-picnic-coral to-picnic-teal"></div>
              <p className="text-lg md:text-xl text-gray-700 mb-6 font-semibold">
                is coming in
              </p>
              <div className="text-9xl font-black bg-gradient-to-r from-picnic-teal via-picnic-coral to-picnic-emerald bg-clip-text text-transparent mb-4">
                {daysLeft}
              </div>
              <p className="text-2xl md:text-3xl font-bold text-gray-700">
                days
              </p>
            </div>
            <div className="glass px-8 py-4 inline-block mb-8">
              <p className="text-xl text-gray-700 font-semibold">
                I can't wait to spend it with you
              </p>
            </div>
            <button
              onClick={onNext}
              className="anime-button bg-gradient-to-r from-picnic-emerald to-picnic-teal text-white px-12 py-5 rounded-full text-xl font-bold"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
