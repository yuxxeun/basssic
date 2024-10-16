import { useState, useEffect } from 'react'

import { IconArrowTriangleDown, IconArrowTriangleUpFill } from 'justd-icons'

import ScreenDimensions from '../core/ScreenDimensions'
import Container from './Container'

const poem = ['Pray at the altar of hard work.', 'Sit with your ambient ambition.', 'Find flow.']

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isFadingOut, setIsFadingOut] = useState(false)
  const [randomPoem, setRandomPoem] = useState('')

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * poem.length)
    setRandomPoem(poem[randomIndex])
  }, [])

  const handleIconClick = () => {
    if (isVisible) {
      setIsFadingOut(true)
      setTimeout(() => {
        setIsVisible(false)
        setIsFadingOut(false)
      }, 300)
    } else {
      setIsVisible(true)
    }
  }

  return (
    <>
      <div className="w-full border-t border-[#2e2e2e] py-2 animate-fade-up animate-delay-[3000ms]">
        <Container className="lg:px-8 px-6 text-[#666666] font-delight flex items-center justify-between">
          <div>
            <p>{randomPoem}</p>
          </div>
          <div className="flex items-center gap-2">
            <ScreenDimensions />
            {isVisible ? (
              <IconArrowTriangleUpFill className="w-4 cursor-pointer" onClick={handleIconClick} />
            ) : (
              <IconArrowTriangleDown className="w-4 cursor-pointer animate-pulse" onClick={handleIconClick} />
            )}
          </div>
        </Container>
      </div>
      {isVisible && (
        <div className="border-t font-delight border-[#2e2e2e] py-2 w-full">
          <Container className="lg:px-8 px-7">
            <p className={`${isFadingOut ? 'animate-fade-out' : 'animate-fade-in'} py-24`}>
              <span className="font-italianno text-2xl tracking-wider">Well you find this.</span>
              <br />
              <br />
              I’m reciting that{' '}
              <span className="font-italianno text-2xl tracking-wider">quality affects all aspects of my pursuits</span>
              . I want to <span className="font-italianno text-xl tracking-wider">imbue quality</span> in everything I
              do. This skill develops while <span className="font-italianno text-2xl tracking-wider">doing</span>. Not
              thinking, not imagining, <span className="font-italianno text-2xl tracking-wider">doing</span>. It is
              learned through learning and experimenting and consistency and pacing.
              <br />
              <br />
              <span className="font-italianno text-2xl tracking-wider">Above these all, I Love You.</span>
            </p>
          </Container>
        </div>
      )}
    </>
  )
}

export default Footer
