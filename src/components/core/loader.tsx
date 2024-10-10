import React, { useEffect, useState } from 'react'

const LoadingScreen: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true)
      setTimeout(() => {
        setIsLoaded(true)
      }, 1000)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      document.body.style.overflow = 'auto'
    } else {
      document.body.style.overflow = 'hidden'
    }
  }, [isLoaded])

  return (
    !isLoaded && (
      <div
        id="loading-screen"
        className={`fixed left-0 top-0 z-50 flex min-h-screen w-full items-center justify-center border-b-2 border-[#2e2e2e] bg-[#1a1a1a] transition-transform duration-1000 ${
          isExiting ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div>
          <p className="font-newsreaderItalic font-semibold text-xl">Sit with your ambient ambition.</p>
        </div>
      </div>
    )
  )
}

export default LoadingScreen
