'use client'

import PageTransition from './PageTransition'

export default function PicnicVisionPage({ onContinue }) {
  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center max-w-3xl">
          <div className="mb-8">
            <h2 className="font-anime text-4xl md:text-6xl font-bold bg-gradient-to-r from-picnic-emerald via-picnic-teal to-picnic-coral bg-clip-text text-transparent mb-8">
              A Romantic Picnic
            </h2>
            <div className="glass p-10 mb-8 text-left relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-picnic-teal via-picnic-coral to-picnic-emerald"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 font-semibold text-center">
                Imagine this beautiful moment
              </p>
              <div className="space-y-4 text-lg text-gray-600">
                <div className="border-l-4 border-picnic-teal pl-4 py-2">
                  <p>Cozy blankets on fresh grass, surrounded by nature's beauty</p>
                </div>
                <div className="border-l-4 border-picnic-coral pl-4 py-2">
                  <p>Delicious treats and refreshing drinks to share together</p>
                </div>
                <div className="border-l-4 border-picnic-emerald pl-4 py-2">
                  <p>Sweet pastries and savory snacks to enjoy</p>
                </div>
                <div className="border-l-4 border-picnic-salmon pl-4 py-2">
                  <p>The warmth of the setting sun painting the sky</p>
                </div>
                <div className="border-l-4 border-picnic-teal pl-4 py-2">
                  <p>Just us, creating beautiful memories together</p>
                </div>
              </div>
              <div className="w-20 h-1 bg-gradient-to-r from-picnic-teal to-picnic-coral mx-auto my-6"></div>
              <p className="text-center text-gray-600 italic">
                The best moments are the ones we share together
              </p>
            </div>
            <button
              onClick={onContinue}
              className="anime-button bg-gradient-to-r from-picnic-teal to-picnic-emerald text-white px-12 py-5 rounded-full text-xl font-bold"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
