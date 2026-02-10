'use client'

export default function FloatingHearts() {
  // Subtle background effect - no floating emojis
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Subtle gradient orbs for depth */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-picnic-teal opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-picnic-coral opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-picnic-emerald opacity-5 rounded-full blur-3xl"></div>
    </div>
  )
}
