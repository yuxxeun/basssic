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
      {isVisible && (
        <div className="border-t font-delight border-[#2e2e2e] py-32 mt-3 ">
          <Container className="lg:px-8 px-7">
            <p className={`${isFadingOut ? 'animate-fade-out' : 'animate-fade-in'}`}>
              <span className="tracking-wide font-newsreaderItalic font-semibold">Well you find this.</span>
              <br />
              <br />
              I’m reciting that{' '}
              <span className="tracking-wide font-newsreaderItalic font-semibold">
                quality affects all aspects of my pursuits
              </span>
              . I want to <span className="font-newsreaderItalic font-semibold">imbue quality</span> in everything I do.
              This skill develops while <span className="tracking-wide font-newsreaderItalic font-semibold">doing</span>
              . Not thinking, not imagining,{' '}
              <span className="tracking-wide font-newsreaderItalic font-semibold">doing</span>. It is learned through
              learning and experimenting and consistency and pacing.
              <br />
              <br />
              Above these all, I Love You.
            </p>
          </Container>
        </div>
      )}
    </>
  )
}

export default Footer
